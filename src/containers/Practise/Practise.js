import React, { useRef, useEffect, useState, Component } from 'react';
// import axios from 'axios'; 
import './Practise.scss';
import { CardList } from './components/card-list/card-list';
import { SearchBox } from './components/search-box/search-box';

const log = console.log;
const WelcomePractise = <div style={{ padding: '1rem' }}>
    Practise <br />
    Tutorial Continue at : 3/28
   <br />
</div>

export default class Practise extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            searchField: '',
        };

        // this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        // log('componentDidMount');
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                // log(data);
                this.setState({ monsters: data })
            })
            .catch(err => {
                log(err);
            });

    }
    shouldComponentUpdate(nextProps, nextState){
        return true;
    }
    handleChange = (e) => {
        this.setState({ searchField: e.target.value })
    }
    render() {
        const { monsters, searchField } = this.state;
        const filteredMonster = monsters.filter(m => {
            return m.name.toLowerCase().includes(searchField.toLowerCase())
        });

        return (
            <div className="book">
                { WelcomePractise}
                <SearchBox
                    placeholder="search monster"
                    handleChange={this.handleChange} />
                <CardList monsters={filteredMonster} />
            </div>
        )
    }
}
