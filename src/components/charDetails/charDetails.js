import React, {Component} from 'react';
// import './charDetails.css';
import styled from 'styled-components';


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

export default class CharDetails extends Component {


    render() {
        return (
            <CharDetail>
                <CharDerailH4>John Snow</CharDerailH4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender</span>
                        <span>male</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born</span>
                        <span>1783</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died</span>
                        <span>1820</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture</span>
                        <span>First</span>
                    </li>
                </ul>
            </CharDetail>
        );
    }
}