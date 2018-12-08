import React from 'react';

const InPageNav = (props) => {
    return (
        <nav className="ecl-inpage-navigation">
            <div className="ecl-inpage-navigation__title">Page contents</div>
            <div className="ecl-inpage-navigation__body">
                <button className="ecl-inpage-navigation__trigger" aria-controls="ecl-inpage-navigation-list" aria-expanded="false" id="ecl-inpage-navigation-trigger">&nbsp;</button>
                <ul className="ecl-inpage-navigation__list" aria-hidden="true" aria-labelledby="ecl-inpage-navigation-trigger" id="ecl-inpage-navigation-list">
                    <li className="ecl-inpage-navigation__item">

                        <a className="ecl-link ecl-link--standalone ecl-inpage-navigation__link" href="#inline-nav-1">Heading 1</a>
                    </li>
                    <li className="ecl-inpage-navigation__item">

                        <a className="ecl-link ecl-link--standalone ecl-inpage-navigation__link" href="#inline-nav-2">Heading 2</a>
                    </li>
                    <li className="ecl-inpage-navigation__item">

                        <a className="ecl-link ecl-link--standalone ecl-inpage-navigation__link" href="#inline-nav-3">Heading 3</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default InPageNav;