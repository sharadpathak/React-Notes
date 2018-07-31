import React  from 'react';

const ListItem = (props) => {
    console.log(props)
        return (
            <li 
                className="well" 
                onClick={() => props.onSelectItem(props.item)}
            >
                {props.item.idea}
            </li>
        )   
}



export default ListItem;