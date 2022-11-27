import {useEffect } from 'react'
import { useAppDispatch } from '../../redux/store';
import { fetchProducts} from '../../redux/actions/productActions'
import { InitialState, Product, State } from '../../helpers/interfaces';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { useSelector } from 'react-redux';
import { Card } from '@mui/material';
import ProductTile from '../ProductTile/ProductTile';

const Bestsellers = () => {

    const dispatch = useAppDispatch();

    useEffect (() => {
        dispatch(fetchProducts(10) as ThunkDispatch <InitialState, unknown, AnyAction>)

    },[])

    const products = useSelector ((state:State) => state.productState.fetchedProducts)
    return(
        <Card>
            {products?.length>1 && 
            products.map((el, i) => {
                return (
                    <ProductTile product={el} key={i} />
                )
            })}

        </Card>
    )
}

export default Bestsellers;

// Bestsellers.tsx
// 1. Import useAppDispatch, wywołanie i zapis do zmiennej (stwórz zmienną dispatch)
// 2. Wywołaj useEffect, ma działać na 1szy render (czyli []), w tym useEffect dispatch fetchProducts
// productActions.ts
// 3. Napisz kreator akcji asynchronicznych, nazwij go fetchProducts. Samo fetcgProducts będzie przyjmowało w parametr liczbę, któa będzie odpowiadać za liczbę ściągniętych z api produktów
// export const fetchProducts = (quantity: number) => {}
// W zwracanej funkcji asynchronicznej ściągnij dane przy pomocy axiosa z podanego url
// `https://fakestoreapi.com/products?limit=${quantity}`
// Wywołaj funkcję dispatch z parametrem funkcji asynchronicznej, podaj typ ActionTypes.FETCH_PRODUCTS, payloadem będzie response.data
// W bestsellers
// 4. useEffect z wywołaniem (dispatchowaniem) fetchProducts, jako argument do fetchProducts podaj liczbę 10
// 