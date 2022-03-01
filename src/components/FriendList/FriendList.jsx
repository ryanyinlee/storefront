import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { connect } from 'react-redux';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { addFriend} from '../../store/messages'

function FriendList(props) {

    console.log(props.friends);
    console.log(props.myProp);

    const [open, setDrawer] = useState(false);

    function toggleDrawer() {
        setDrawer(!open);
    }

    return (
        <>
        <Button onClick={toggleDrawer}>Toggle Friends</Button>
        <Drawer anchor='left' open={open} onClose={toggleDrawer}>
            <List>
                {props.friends.map(friend => (
                    <ListItem key={friend.name}>
                         <ListItemButton>
                         <ListItemText primary={friend.name}/>
                        </ListItemButton>                     
                    </ListItem>
                ))}
                      <ListItem>
                         <ListItemButton onClick={() => props.addFriend({ name: 'New Friend'})}>
                         <ListItemText primary="Add Friend"/>
                        </ListItemButton>                     
                    </ListItem>
            </List>
            
        </Drawer>

        </>
    )
}

// function to map store values to comp props
const mapStateToProps = (state) => {

    return {
        friends: state.chat.friends,
    }

}

const mapDispatchToProps = {

    addFriend
}

// connect returns a "higher order function / component" that takes in a component
export default connect(mapStateToProps, mapDispatchToProps)(FriendList);