import {useEffect} from 'react'
import { InitialState, State } from '../../helpers/interfaces'
import { useAppDispatch } from '../../redux/store'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction} from "redux"
import { fetchImages } from '../../redux/actions/productActions'
import CategoryTile from '../CategoryTile/CategoryTile'
import { useSelector } from 'react-redux'
import { Paper } from '@mui/material'

const CategoryMenu = ({ categories }: { categories: string[] | [] }) => {
    
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchImages(categories) as ThunkDispatch<InitialState, unknown, AnyAction>)
    } ,[])

    const images = useSelector( (state:State) => state.productState.fetchedImages)

    return (
        <Paper elevation={1} sx={{my:"2rem"}}>
            {images.length>0 &&
            categories.map((el, i) => {
                return (
                <CategoryTile category={el} image={images[i]} />)
            })
            }  
        </Paper>  
    )
}
export default CategoryMenu


// w HOmePage
//1. PRzy użyciu useSelector ściągnij listę kategorii ze store
// Do CategoryMenu przekaż propsem listę kategorii
// W CategoryMenu
// Zaimportuj useAppDispatch i wywołanie zapisz do zmiennej dispatch
// 4 Odpal useEffect , w środku będziesz dispatchować akcję asynchroniczną fetchImages
// W RODUCTACTIONS:
// 5. Stwórz kreator akcji asynchronicznej o nazwie fetchImages, do samego kreatora przyjmuj parametr categories
// W kreatorze: 
// - axiosem pobierz 4 zdjecia 
// stwórz 4 zmienne: product1, product2.. , w każdej zmiennej (AWAIT!!) wywołaj axios get dla url ''https://fakestoreapi.com/products/category/${categories}?limit=1'
// wszystkie zmienne wrzuć do listy objectList
//const objectList = [product1, product2, product3, product4]
// const imageList = objectList.map ((el) => el.data[0].images)
// wywołaj funkcję dispatch, w środku obiekt akcji type ActionTypes.FETCH_IMAGES i payload imageList
// 6. Wywołaj kreator z pkt 5 w useEffect z pkt 4