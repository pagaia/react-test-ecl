import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Container from './Container';
import InPageNav from './InPageNav';

class Bar extends Component {
    render() {
        return (
            <div>
                <InPageNav />
                <div className='block first'>
                    <a href='#' id='top' />
                    <span> first div 100</span>
                    <li>
                        <ul>
                            <Link to={{ hash: '#sushi' }}>sushi</Link>
                        </ul>
                        <ul>
                            <Link to={{ hash: '#bbq' }}>bbq</Link>
                        </ul>
                        <ul>
                            <Link to={{ hash: '#bottom' }}>sushi</Link>
                        </ul>
                    </li>
                </div>
                <div className='block second'>first div 100</div>
                <div className='block third'>
                    <a href='#' id='bbq'>bbq</a>
                    <Link to={{ hash: '#top' }}>top</Link>
                </div>
                <div className='block forth'>
                    <a id='sushi' href='sushi'>sushi</a>
                    <Link to={{ hash: '#top' }}>top</Link>

                </div>

                <a id='bottom' href='bottom'>bottom</a>
                <Link to={{ hash: '#top' }}>top</Link>
                this is a simple BAR Component
            </div>
        );
    }
}

export default Container(Bar);