import React, { Fragment } from "react";
import { Route, Switch, Link } from "react-router-dom";

import ShopPage from "./pages/shop/shop";
import Header from './components/header/header'

export function PractiseRoutes() {
  return (
    <Fragment>
      <Route path="/practise/shop" exact component={ShopPage} />
    </Fragment>
  );
}

export function PractiseLinks() {
  return (
    <Fragment>
    </Fragment>
  );
}

