import {useState} from 'react'
import { Product, ProductTileProps } from '../../helpers/interfaces'
import { useDispatch } from 'react-redux';
import { Card, Paper, Typography, Box, Button } from '@mui/material';
import { setProduct } from '../../redux/actions/productActions';

const ProductTile:React.FC<ProductTileProps> = ({product}) => {

    const [clicked, setClicked] = useState(false);

    const dispatch = useDispatch ();


    return (
        <>
            <Card component={Paper} sx={{maxWidth:"35%", mx:"auto",my:"1rem", p:".5rem"}} 
            onClick = {()=>{clicked? setClicked(false) : setClicked(true)}}
            // onClick={()=>setClicked((prev)=>!prev)}
            >
                <Box component = "img" alt = "product image" src = {product.image} sx={{width:"30vh", display:"block", mx:"auto", my:"5%"}}
                />
                <Typography variant="h2" sx={{fontSize:"2rem"}}
                >{product.title}</Typography>
                <Typography paragraph sx={{fontSize:"1rem"}}
                >{product.category}</Typography>
                <Typography variant="h3" sx={{fontSize:"2rem"}}
                >{product.price}$</Typography>
                <Typography variant="h4" sx={{fontSize:"2rem"}}
                >Rates: {product.rating.rate}</Typography>
            </Card>
            { clicked && 
                <Card component = {Paper} sx={{maxWidth:"35%", mx:"auto", mb:"1rem", p:".5rem"}}>
                    <Typography paragraph sx={{fontSize:"1rem"}}
                    >{product.description}</Typography>
                    <Button variant="contained" sx={{bgcolor:"#FC766AFF"}}
                    onClick={()=> dispatch(setProduct(product))}
                    >Add to cart</Button>
                </Card>}
        </>
    )
}

export default ProductTile

// 1. Komponent ProductTile będzie przyjmował 1 propsa (product): obiekt produktu, mamy już do niego interface. Odpowiednio otypuj komponent i propsy
// 2. Stwórz stan clicked (useState) stan początkowy false. Stan będzie używany do wyśwetlania dodatkowych informacji o produkcie
// 3. Import zwykłego useDispatch, wywołanie i zapis do zmiennej
// 4. JSX:
// - wszystko obwinięte w React fragment
// - komponent Card (MUI) component Paper sx: maxWidth: 35%, mx auto, my 1rem, p .5rem. PRzy kliknięciu na tą kartę toggle stanu clicked (jeżeli było false ustaw true i na odwrót )
// - w srodku Card komponent Box (MUI) component img, alt product image, src product.image (product z propsa), sx: width 30vh, display block, mx auto, my 5%
// - w srodku Card komponent Typography variant h2, sx: fontSize 2rem. TextContent: product.title (product z propsow)
// - w srodku Card komponent Typography parapgraph, sx: fontSize 1rem. TextContent: product.category (product z propsow)
// - w srodku Card komponent Typography variant h3, sx: fontSize 2rem. TextContent: product.price (product z propsow)
// - w srodku Card komponent Typography variant h4, sx: fontSize 1rem. TextContent: Rates: *tutaj product.rating.rate* (*tutaj product.rating.count)
// koniec Card
// - renderowanie warunkowe w zależnosci od tego czy stan clicked jest true czy false. Jeżeli jest true to wyświetl komponent Card (MUI) component Paper, sx: maxWidth: 35%, mx auto, mb 1rem, p .5rem
// - w srodku Card: Typography paragraph sx: fontSize 1rem. TextContent: product.description
// - również w Card Button (MUI) variant contained, sx: bgcolor: #FC766AFF. TextContent Add to cart

// ------w Bestsellers.tsx------
// 5. Stwórz selektor i ściągnij ze store listę fetchedProducts
// 6. w returnie wyświetlaj komponentn Card (MUI) w środku renderowanie warunkowe,w zależności czy długość listy ściągniętej w poprzednim punkcie >1; jeśli true na liście z pkt 5 odpal map którym będziesz wyświetlał komponent ProductTile. PAmiętaj o przekazaniu propsa


// ----- productReducer.ts -----
// 1. Stwórz nowy case w productReducer, case ActionTypes.SET_PRODUCT. W środku tak samo jak w poprzednich przypadkach z jedną różnicą. Skopiuj poprzedni stan (...state), selectedProducts ustaw na liste, do środka skopiuj zawartość tej listy i dodaj action.payload.
// selectedProducts: [...state.selectedProducts, action.payload]
// ----- productActions.ts -----
// 2. Stwórz nowy kreator akcji, nazwij go setProduct. Kreator będzie przyjmował 1 parametr, nazwij go product (typ Product, mamy do tego interface). Kreator ma zwracać obiekt akcji, type ustaw na ActionTypes.SET_PRODUCT, payload ustaw na product z parametru kreatora.
// ----- ProductTile.tsx -----
// 3. Do przyciksu Add to cart przyczep onClick. W onClicku dispatch setProduct, jako argument do setProduct wrzuć product z propsa komponentu ProductTile.
// ----- interfaces.ts -----
// 4. Odpowiednio zaktualizuj interfejsy. Dopisz selectedProducts w InitialState i ProductState.