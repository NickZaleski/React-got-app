import React, {Component} from 'react';

import styled from 'styled-components';
import GotService from '../../service/gotService';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

const RandomBlock = styled.div`
    margin-top: 100px;
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    border-radius: 4px;

    h4 {
    margin-bottom: 20px;
    text-align: center;
    font-size: 20px;
    };

    .term {
        font-weight: bold;
    }
`

export default class RandomChar extends Component {

    

    GotService = new GotService();
    state = {
       char: {},
       loading: true
    }

    componentDidMount(){
        this.updChar();
        this.timerId = setInterval(this.updChar, 1500);
    }



    componentWillUnmount(){
        clearInterval(this.timerId);
    }


 

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false,
            error: false
        })
    }

    updChar = () => {
        
        // const id = 13000; 
        const id = Math.floor(Math.random()*140 + 25); // from 25 to 140
        this.GotService.getCharacter(id)
        .then(this.onCharLoaded)
        .catch(this.onError)
    }

    onError = (error) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    render() {
        console.log('render');
        const {char, loading, error} = this.state;

        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/>  : null;
        const content = !(loading || error) ? <View char={char}/> : null;

        return (
            <RandomBlock>
                {spinner}
                {errorMessage}
                {content}
            </RandomBlock>
        );
    }
}


const View = ({char}) => {

    const {name, gender, born, died, culture} = char;

    return (
        <>
         <h4>Random Character: {name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender</span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born </span>
                        <span>{born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died </span>
                        <span>{died}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture </span>
                        <span>{culture}</span>
                    </li>
                </ul>
        </>
    )
}