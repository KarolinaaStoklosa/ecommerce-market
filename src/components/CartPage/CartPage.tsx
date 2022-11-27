import React from 'react'
import { useSelector } from 'react-redux'
import { Typography, Button } from '@mui/material'
import CartProductTile from '../CartProductTile/CartProductTile'
import { State, Product } from '../../helpers/interfaces'

const CartPage = () => {

    const products = useSelector((state:State) => 
    state.productState.selectedProducts)

    const calculateTotal = () => {
        return products.length>0
        ? products.map((product:Product)=>product.price)
        .reduce((a,b)=>a+b) : "0";
    }

    return (
        <>
            {products.map((product:Product, i:number) =>
            {
                return (
                    <CartProductTile product={product} key={i} />
                )
            })}
            <Typography variant="h2" align="center" 
            sx={{fontSize:"2rem"}}
            >Total: {calculateTotal()}$
            </Typography>
            <Button variant = "contained" 
            sx= {{bgcolor:"#FC766AFF", display:"block", mx:"auto"}}
            >
                Order
            </Button>
        </>
    )
}

export default CartPage