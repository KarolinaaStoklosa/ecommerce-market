import React from 'react'
import {AppBar, Box, Toolbar, Typography, Button} from '@mui/material'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position='static' sx={{backgroundColor: 'orange'}}>
                <Toolbar>
                    <Link to='/' style={{textDecoration:'none', flexGrow:1}}>
                        <Typography variant='h6' noWrap component="div" 
                        sx= {{color:'white'}}
                        >
                            MARKET
                        </Typography>
                    </Link>
                    <Box sx={{display:'block', mr:'400px'}}>
                        <Link to='/electronics' style={{textDecoration:"none", color:"white"}}>
                            <Button variant='contained' 
                            sx={{backgroundColor:'#FC766AFF', mx:".5rem"}}
                            >
                                ELECTRONICS
                            </Button>
                        </Link>
                        <Link to='/jewelery' style={{textDecoration:"none", color:"white"}}>
                            <Button variant='contained' 
                            sx={{backgroundColor:'#FC766AFF', mx:".5rem"}}
                            >
                                JEWELERY
                            </Button>
                        </Link>
                        <Link to='/mans' style={{textDecoration:"none", color:"white"}}>
                            <Button variant='contained' 
                            sx={{backgroundColor:'#FC766AFF', mx:".5rem"}}
                            >
                                MEN'S CLOTHING
                            </Button>
                        </Link>
                        <Link to='/womans' style={{textDecoration:"none", color:"white"}}>
                            <Button variant='contained' 
                            sx={{backgroundColor:'#FC766AFF', mx:".5rem"}}
                            >
                                WOMEN'S CLOTHING
                            </Button>
                        </Link>
                    </Box>
                    <Link to='/cart' style={{textDecoration:"none", color:"white"}}>
                            <Button variant='contained' 
                            sx={{backgroundColor:'#FC766AFF', mr:".1rem"}}
                            >
                                CART
                            </Button>
                    </Link>
                    <Link to='/login' style={{textDecoration:"none", color:"white"}}>
                            <Button variant='contained' 
                            sx={{backgroundColor:'#FC766AFF'}}
                            >
                                 LOG IN
                            </Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar;