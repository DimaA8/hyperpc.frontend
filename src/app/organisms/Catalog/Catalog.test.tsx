import { 
  render, 
  screen,
} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import server from 'server'
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "app/store";
import { Products } from "./components/Products";
import { FC } from "react";
import { IComputer } from "types/computer";

const setup = (options: { 
  computers: IComputer[]
}) => {
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/catalog']}>
        <Products computers={options.computers} />
      </MemoryRouter>
    </Provider>
  ); 
}

describe('Каталог товаров', () => {
  // Создать компьютеры
  const sr = server('test');
  sr.createList('videocard', 10)
  sr.createList('processor', 10)
  sr.createList('board', 10)
  sr.createList('styling', 10)
  sr.createList('computer', 10)
  const computers: IComputer[] = sr.db.computers;

  it('Товар добавляется в корзину', () => {
    setup({ computers });
    const initialProductCount = store.getState().cart.productIds.length;
    const addToCart = screen.getAllByTestId('add-to-cart');
    userEvent.click(addToCart[0]);

    const updatedProductCount = store.getState().cart.productIds.length

    expect(updatedProductCount).toBeGreaterThan(initialProductCount)
  })

  it('Товар добавляется в сравнение', () => {
    setup({ computers });
    const initialProductInCompareCount = store.getState().compare.productIds.length;
    const addToCompare = screen.getAllByTestId('add-to-compare');
    userEvent.click(addToCompare[0]);
    const updatedProductInCompareCount = store.getState().compare.productIds.length;
    expect(updatedProductInCompareCount).toBeGreaterThan(initialProductInCompareCount)
  })

  it('Товар удаляется из сравнения', () => {
    setup({ computers });
    const initialProductInCompareCount = store.getState().compare.productIds.length;
    const removeFromCompare = screen.getAllByTestId('remove-from-compare');
    userEvent.click(removeFromCompare[0]);
    const updatedProductInCompareCount = store.getState().compare.productIds.length;
    expect(updatedProductInCompareCount).toBeLowerThan(initialProductInCompareCount)
  })
})