import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import ErrorMessage from '../errorMessage';
import ItemList from '../itemList';
import CharDetails, {Field} from '../charDetails';
import gotService from '../../service/gotService';
import RowBlock from '../rowBlock';





export default class characterPage extends Component {

   gotService = new gotService();

    state = {
        selectedChar: 130,
        error: false

    }

    componentDidCatch(){
        
        this.setState({
            error: true
        })
    }


    onItemSelected = (id) => {
        this.setState({
            selectedChar: id
        });
    }

    render() {
        if (this.state.error){
            return <ErrorMessage/>
        }

        const itemList = (
            <ItemList 
                onItemSelected={this.onItemSelected}
                getData={this.gotService.getAllCharacters}
                renderItem={(item) => `${item.name} (${item.gender})`}/>
        )

        const charDetails = (
            <CharDetails charId={this.state.selectedChar}>
                <Field field='gender' label='Gender'/>
                <Field field='born' label='Born'/>
                <Field field='died' label='Died'/>
                <Field field='culture' label='Culture'/>
            </CharDetails>
        )

        

        return(

            <RowBlock left={itemList} right={charDetails}/>
        )

    }



}