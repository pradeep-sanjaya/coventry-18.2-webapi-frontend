import React, { Component } from "react";

import TopBanner from "./TopBanner";
import Collections from "./../partials/Collections";
import PopularProducts from "./../partials/PopularProducts";

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <TopBanner></TopBanner>
                <Collections></Collections>
                <PopularProducts></PopularProducts>
            </React.Fragment>
        );
    }
}

export default Home;