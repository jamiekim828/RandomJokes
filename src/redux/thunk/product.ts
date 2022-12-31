import { AppDispatch } from '../store';
import { actions } from '../slice/product';

const url = 'https://official-joke-api.appspot.com/random_joke';
export function fetchProductData() {
  return async (dispatch: AppDispatch) => {
    const res = await fetch(url);
    const productData = await res.json();

    dispatch(actions.getProducts(productData));
  };
}
