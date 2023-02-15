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
import { Computer } from "features/computers/computersApi";

describe('Каталог товаров', () => {
  it('Товар добавляется в корзину', async () => {
    const initialProductCount = store.getState().cart.productIds.length;

    const sr = server('test');
    sr.createList('computer', 10)

    const computers: Computer[] = sr.db.computers;

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/catalog']}>
          <Products computers={computers} />
        </MemoryRouter>
      </Provider>
    );    

    const addToCart = screen.getAllByTestId('add-to-cart');
    userEvent.click(addToCart[0]);

    const updatedProductCount = store.getState().cart.productIds.length

    expect(updatedProductCount).toBeGreaterThan(initialProductCount)
  })
})