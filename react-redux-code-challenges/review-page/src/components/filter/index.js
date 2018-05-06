import React, { Component } from 'react';
import Search from './Search';
import Group from './Group';
import Sort from './Sort';
import Stars from './Stars';

class Filter extends Component {
    render() {
        return (
            <div>
                <Search />
                <Group />
                <Sort />
                <div>FILTER BY:</div>
                <Stars />
            </div>
        );
    }
}

export default Filter;