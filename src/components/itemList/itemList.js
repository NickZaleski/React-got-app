import React, {Component} from 'react';
// import './itemList.css';

import styled from 'styled-components';


const ItemListGroup = styled.ul`
cursor: pointer;

li:hover{
    color: gray;
    transition: 0.1s;
}

`

export default class ItemList extends Component {

    render() {
        return (
            <ItemListGroup>
                <li className="list-group-item">
                    John Snow
                </li>
                <li className="list-group-item">
                    Brandon Stark
                </li>
                <li className="list-group-item">
                    Geremy
                </li>
            </ItemListGroup>
        );
    }
}