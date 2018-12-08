import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Splash from './Splash';

class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = { showLanguage: false }
    }

    showLanguage = () => {
        this.setState({ showLanguage: true })
    }

    render() {
        return (
            <div className='menu'>
                <Link to="/">Home</Link>
                <Link to="/hello">Hello</Link>
                <Link to="/counter">Counter</Link>
                <Link to="/foo">FOO</Link>
                <Link to="/bar/bar/222/e">Bar</Link>
                <Link to={{ pathname: "/bar/bar/222/e", hash: '#sushi' }}>Bar third </Link>
                <a href="#select-language" onClick={this.showLanguage}> Select language</a>

                {this.state.showLanguage && <Splash />}

            </div>);
    }
}
export default NavBar;