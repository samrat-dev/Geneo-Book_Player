import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Book from './containers/Book/Book';
import Practise from './containers/Practise/Practise';

const Welcome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  font-size: 2rem;
  color: #bbb2b2;
  text-shadow: 1px 2px 1px #03A9F4;
`;

export default function Routes() {
    return (
        <>
            <Route path="/" exact>
                <Welcome> Welcome to geneo Book player </Welcome>
            </Route>
            <Switch>
                <Route path="/books" exact component={Book} />
                <Route path="/practise" exact component={Practise} />
            </Switch>
        </>
    )
}

