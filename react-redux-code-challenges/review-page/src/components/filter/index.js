import React, { Component } from 'react';
import { Form } from 'semantic-ui-react'
import Search from './Search';
import Group from './Group';
import Sort from './Sort';
import Stars from './Stars';

class Filter extends Component {

    render() {
        return (
            <Form>
              <Form.Field>
                <Search />
              </Form.Field>
              <Form.Field>
                <Group />
                <Sort />
              </Form.Field>
              <Form.Field>
                <label>FILTER BY:</label>
                <Stars />
              </Form.Field>
            </Form>
        );
    }
}

export default Filter;
