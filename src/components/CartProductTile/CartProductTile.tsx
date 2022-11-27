import { Card, Paper, Box, Typography, Button } from '@mui/material';
import react from 'react'
import { useDispatch } from 'react-redux';
import { CartProductTileProps } from '../../helpers/interfaces';
import { removeProduct } from '../../redux/actions/productActions';

const CartProductTile:React.FC<CartProductTileProps> = ({product,key}) => {
    const dispatch = useDispatch();
    const dispatchRemoveProduct = ()=>{
        dispatch(removeProduct(product))
    }

    return (
        <Card component={Paper} sx={{maxWidth:"35%", mx:"auto", my:"1rem", p:".5rem"}}>
            <Box component="img" alt="product image" src={product.image} 
            sx={{height:"200px", display:"block", mx:"auto"}}
            />
            <Typography paragraph sx={{fontSize:"1rem"}}
            >{product.title}</Typography>
            <Typography component="span" sx={{fontSize:"1rem"}}
            >{product.price}</Typography>
            <Button variant="contained" sx={{bgcolor:"red", ml:"2rem"}}
            onClick={dispatchRemoveProduct}
            >Remove from cart</Button>
        </Card>
    )
}

export default CartProductTile;