import React, { Component } from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
// import GotService from '../../service/gotService';

import ErrorMessage from '../errorMessage';
import styled from 'styled-components';


const Btn = styled.button`
background-color: #636F75;
color: #fff;
width: 240px;
height: 40px;
margin-top: 4px;
margin-bottom: 40px;
border-radius: 4px;
border: 0px;

:focus{
    outline: none;
}

:hover{
    background-color: #08090D;
    transition: 0.1s;
}
:active{
   border: 1px solid #888888;
   background-color: #496370;
   transition: 0.1s;
}

`


export default class App extends Component {


    state = {
        showRandomChar: true,
        error: false
    }

    toggleRandomChar = () => {
        this.setState((state) => {
            return{
                showRandomChar: !state.showRandomChar
            }
        })
    }


  render(){

    if (this.state.error){
        return <ErrorMessage/>
    }
    const char = this.state.showRandomChar ? <RandomChar/> : null;

    return (
        <> 
            <Container>
                <Header />
            </Container>
            <Container>
                <Row>
                    <Col lg={{size: 5, offset: 0}}>
                    {char}
                    </Col>
                </Row>
                <Btn onClick={this.toggleRandomChar}>Toogle random character</Btn>
                <Row>
                    <Col md='6'>
                        <ItemList />
                    </Col>
                    <Col md='6'>
                        <CharDetails />
                    </Col>
                </Row>
            </Container>
        </>
    );
};
}  

