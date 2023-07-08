import React from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import CarPortal from "./carPortal";
import User from "./user";

const Webpage = () => {
    return(
        <Router>
            <Route exact path="/" element = {<CarPortal/>}/>
            {/* <Route exact path="/" component= {CarPortal}/> */}
            <Route path = "/user" component = {User}/>
        </Router>
    );
};

export default Webpage;