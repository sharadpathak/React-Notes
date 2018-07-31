import React, { Component } from 'react';
import ListItem from './listItem';


class ListArea extends Component {

    constructor(props) {
        super(props);
        console.log(props)
    }
    
    render() { 
        const ListItems =  this.props.listArray.map((item, key) => {
            return (
                    <ListItem item={item} key={key}  onSelectItem={(item)=> this.props.onSelectItem(item)} /> 
                    );
        })
        
        if(ListItems.length == 0) {
            return  <div>
                        <h3>List Area</h3>
                        <ul>
                            <li className="well">No Idea, Get Idea</li>
                        </ul> 
                    </div>
        }else {
                return ( 
                <div>
                    <h3>List Area</h3>          
                        <ul>
                            {ListItems}
                        </ul>          
                </div>
               );
        }
    }
}
 
export default ListArea;