import { 
  render, 
  screen, 
  waitForElementToBeRemoved 
} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import server from 'server'
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "app/store";
import { Catalog } from "./Catalog";
import { useGetComputersQuery } from "features/computers/computersApi";
import { FC, useEffect } from "react";
import { Computer } from "features/computers/computersApi";

describe('Каталог товаров', () => {
  it('Товар добавляется в корзину', async () => {
    const productsInCartCount = store.getState().cart.productIds.length;

    const sr = server('test');
    sr.createList('computer', 10)

    let comps: Computer[] | undefined = [] as Computer[];

    const App: FC = () => {
      const { data: computers } = useGetComputersQuery();

      useEffect(() => {
        comps = computers
      }, [computers])

      return (
        <MemoryRouter initialEntries={['/catalog']}>
          <Catalog />
        </MemoryRouter>
      )
    };

    render(
      <Provider store={store}>
        <App />
      </Provider>
    );    

    await waitForElementToBeRemoved(() => screen.queryByText('Нет компьютеров'));
    const addToCart = screen.getAllByTestId('add-to-cart');
    userEvent.click(addToCart[0]);

    expect(store.getState().cart.productIds.length).toBeGreaterThan(productsInCartCount);
  })
})