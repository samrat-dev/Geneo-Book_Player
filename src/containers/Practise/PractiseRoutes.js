import React, { Fragment } from "react";
import { Route, Switch, Link } from "react-router-dom";
import ShopPage from "./pages/shop/shop";

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
      <Link to="/practise/shop">Shop</Link>
    </Fragment>
  );
}

