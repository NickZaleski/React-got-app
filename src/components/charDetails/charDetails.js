import React, {Component} from 'react';
// import './charDetails.css';
import styled from 'styled-components';
import gotService from '../../service/gotService';




const CharDetail = styled.div`
    border-radius: 4px;
    background-color: #fff ;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    
`

const CharDerailH4 = styled.div`
    
    margin-bottom: 20px;
    text-align: center; 
    
`

const SelectError = styled.div`
    color: #C1CED6;
    text-align: center;
    font-size: 26px;
`

const SpanText = styled.div`
    color: white;
    font-size; 20px;    
`


const Field = ({char, field, label}) => {
    return (
    <li className="list-group-item d-flex justify-content-between">
    <span className="term">{label}</span>
    <span>{char[field]}</span>
    </li>
    )
}

export {
    Field
}

export default class CharDetails extends Component {

    gotService = new gotService();

    state = {
        char: null
    }

    componentDidMount(){
        this.updateChar();
    }

    componentDidUpdate(prevProps) {
        if (this.props.charId !== prevProps.charId) {
            this.updateChar();
        }
    }

    updateChar() {
        const {charId} = this.props;
        if (!charId){
            return;
        }

        this.gotService.getCharacter(charId)
            .then((char) => {
                this.setState({char});
            })

            // this.foo.bar = 0;
    }

    render() {

        if (!this.state.char){
            return <SpanText className="select-error">Please select a character</SpanText>
        }
        const {char} = this.state;
        const {name} = char;

        return (
            <CharDetail>
                <CharDerailH4>{name}</CharDerailH4>
                <ul className="list-group list-group-flush">
                   {

                       React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {char})
                       })

                   }
                </ul>
            </CharDetail>
        );
    }
}