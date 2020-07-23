import React, { Component } from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import CharacterPage from '../characterPage';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import gotService from '../../service/gotService';

import ErrorMessage from '../errorMessage';



import styled from 'styled-components';



const Btn = styled.button`
background-color: blue;
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

    gotService = new gotService();

    state = {
        showRandomChar: true,
        error: false

    }


    componentDidCatch(){
        console.log('error');
        this.setState({
            error: true
        })
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
                    <CharacterPage/>

                    <Row>
                        <Col md='6'>
                            <ItemList onItemSelected={this.onItemSelected}
                            getData={this.gotService.getAllBooks}
                            renderItem={(item) => item.name}/>
                        </Col>
                        <Col md='6'>
                            <CharDetails charId={this.state.selectedChar}/>
                        </Col>
                    </Row>

                    <Row>
                        <Col md='6'>
                            <ItemList onItemSelected={this.onItemSelected}
                            getData={this.gotService.getAllHouses}
                            renderItem={(item) => item.name} />
                        </Col>
                        <Col md='6'>
                            <CharDetails charId={this.state.selectedChar}/>
                        </Col>
                    </Row>

            </Container>
        </>
    );
};
}  

