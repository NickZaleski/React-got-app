import React, { Component } from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import {CharacterPage, BooksPage, HousesPage, BooksItem} from '../pages';

import gotService from '../../service/gotService.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';
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
        error: false,
        selectedHouse: 20

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

    const char = this.state.showRandomChar ? <RandomChar/> : null;

    if (this.state.error){
        return <ErrorMessage/>
    }
    

    return (
      
           <Router> 
                <div className='app'>
                    <Container>
                        <Header />
                    </Container>
                    <Container>
                        <Row>
                            <Col lg={{size: 5, offset: 0}}>
                            {char}
                            <Btn 
                                className="toggle-btn"
                                onClick={this.toggleRandomChar}>Toggle random character</Btn>
                            </Col>
                        </Row>
                        <Route path='/' component={() => <h1>Welcome to GOT DB</h1>} exact/>
                        <Route path='/characters' component={CharacterPage} />
                        <Route path='/books' component={BooksPage} exact/>
                        <Route path='/books/:id' render={({match}) => {
                            const {id} = match.params;
                        return <BooksItem bookId={id}/>}}/>
                        <Route path='/houses' component={HousesPage} />
                    </Container>
                </div>
            </Router>
       
    );
};
}  

