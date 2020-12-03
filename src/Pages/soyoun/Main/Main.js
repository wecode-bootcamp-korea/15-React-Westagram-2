import React, { Component } from 'react';
import '../Reset.scss';
import '../Common.scss';
import './Main.scss';
import Nav from '../../../Components/Nav/Nav';
import Feeds from './Components/Feeds/Feeds';
import Aside from './Components/Aside/Aside';

class Main extends Component {
    render() {
        return (
            <>
                <Nav />
                <div id="main">
                    <Feeds />
                    <Aside />
                </div>
            </>
        );
    }
}

export default Main;
