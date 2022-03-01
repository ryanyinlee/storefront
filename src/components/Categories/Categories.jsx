//Shows a list of all categories
// Dispatches an action when one is clicked to “activate” it

// State should contain a list of categories as well as the active category

// Each category should have a normalized name, display name, and a description

// Create an action that will trigger the reducer to change the active category

// Update the active category in the reducer when this action is dispatched

import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { connect } from 'react-redux';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import { changeCategory } from '../../store/categories'

function CategoryList(props) {

    console.log(props.categories);
    console.log(props.myProp);

    const [open, setDrawer] = useState(false);

    function toggleDrawer() {
        setDrawer(!open);
    }

    return (
        <>
        <Button onClick={toggleDrawer}><h2>Product Categories</h2></Button>
        <Drawer anchor='left' open={open} onClose={toggleDrawer}>
            <List>
                {props.categories.map(category => (
                    <ListItem key={category.name}>
                         <ListItemButton onClick={changeCategory}>
                         <h3><ListItemText primary={category.name}/></h3>
                        </ListItemButton>                     
                    </ListItem>
                ))}
 
            </List>
            
        </Drawer>

        </>
    )
}

// function to map store values to comp props
const mapStateToProps = (state) => {

    return {
        categories: state.category.categories,
    }

}

const mapDispatchToProps = {
    changeCategory
}


// connect returns a "higher order function / component" that takes in a component
export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);