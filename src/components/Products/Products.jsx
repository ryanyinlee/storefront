// Displays a list of products associated with the selected category

// State should be a list of all products

// Each product should have a category association, name, description, price, inventory count

// Create an action that will trigger when the active category is changed
// HINT: Multiple reducers can respond to the same actions

// Create a reducer that will filter the products list based on the active category

import React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { connect } from 'react-redux';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { changeProducts } from '../../store/products'

function Products (props) { 

    console.log("Props in Products is: ", props.products);

    const [showCategory, setCategory] = useState("showAll");

    // category: "Illegal Weapons",
    // name: "Nerve Gas",
    // description: "Not responsible for leaks.",
    // price: "0.45 BTC per ml",
    // inventoryCount: "100ml",

    return (
        <>
        <List>
         {props.products.map(product => (
                    <ListItem key={product.name}>
                        
                         <ListItemButton>
                         <Box>
                         <ListItemText primary={product.name}/>
                         </Box> 
                         <Box>
                         <ListItemText primary={product.description}/>
                         </Box>
                         <ListItemText primary={product.price}/>
                         <ListItemText primary={product.inventoryCount}/>
                        </ListItemButton>
                                            
                    </ListItem>
                ))}
        </List>
        </>
    )
}

// function to map store values to comp props
const mapStateToProps = (state) => {
    // products: state.category.categories,
    return {
        products: state.product.products,
    }

}

const mapDispatchToProps = {
    changeProducts
}


export default connect(mapStateToProps, mapDispatchToProps)(Products);