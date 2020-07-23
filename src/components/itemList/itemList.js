import React, {Component} from 'react';
import styled from 'styled-components';
import Spinner from '../spinner';

const ItemListGroup = styled.ul`
cursor: pointer;

li:hover{
    color: gray;
    transition: 0.1s;
}

`
export default class ItemList extends Component {


    state = {
        itemList: null
    }

    componentDidMount() {
        const {getData} = this.props;

        getData()
            .then( (itemList) => {
                this.setState({
                    itemList
                })
            })
    }


    renderItems(arr){
        return arr.map((item) => {

            const {id} = item;
            const label = this.props.renderItem(item);

                return (
                <li 
                    key={id}
                    className="list-group-item"
                    onClick={ () => this.props.onItemSelected(id)}>
                    {label}
                </li>
                )
        })
        
    }

    render() {

        const{itemList} = this.state;

        if (!itemList){
            return <Spinner/>
        }

        const items = this.renderItems(itemList);

        return (
            <ItemListGroup>
                
                {items}
                
            </ItemListGroup>
        );
    }
}