import { BrowserRouter, Switch, Route } from "react-router-dom";
import Orders from "./Orders";
import Home from "./Home";
import React from "react";
import Navbar from "./Navbar";

function Routers() {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/orders">
                    <Orders></Orders>
                </Route>
                <Route path="/">
                    <Home></Home>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routers;
