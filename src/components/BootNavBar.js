import React from "react";

const BootNavBar = props => {
  return (
    <nav className="ecl-navigation-menu" aria-label="Main Navigation">
      <div className="ecl-container">
        <button
          className="ecl-navigation-menu__toggle ecl-navigation-menu__hamburger ecl-navigation-menu__hamburger--squeeze"
          aria-controls="nav-menu-expandable-root"
          aria-expanded="false"
        >
          <span className="ecl-navigation-menu__hamburger-box">
            <span className="ecl-navigation-menu__hamburger-inner" />
          </span>
          <span className="ecl-navigation-menu__hamburger-label">Menu</span>
        </button>
        <ul
          className="ecl-navigation-menu__root"
          id="nav-menu-expandable-root"
          aria-hidden="true"
        >
          <li className="ecl-navigation-menu__item">
            <a
              href="../../example.html#home"
              className="ecl-navigation-menu__link"
            >
              Home
            </a>
          </li>
          <li className="ecl-navigation-menu__item ecl-navigation-menu__item--active">
            <a
              href="../../example.html#item1"
              className="ecl-navigation-menu__link"
              aria-controls="nav-menu-expandable-group-2"
              aria-expanded="false"
              aria-haspopup="true"
            >
              Policy
            </a>
            <div
              className="ecl-navigation-menu__group ecl-row"
              id="nav-menu-expandable-group-2"
            >
              <div className="ecl-col">
                <ul className="ecl-navigation-menu__links ecl-list ecl-list--unstyled">
                  <li className="ecl-navigation-menu__item">
                    <a
                      href="../../example.html#item1-1-1"
                      className="ecl-navigation-menu__link"
                    >
                      Sub item 1
                    </a>
                  </li>
                  <li className="ecl-navigation-menu__item">
                    <a
                      href="../../example.html#item1-1-2"
                      className="ecl-navigation-menu__link"
                    >
                      Sub item 2 with a very very very (very) long label
                    </a>
                  </li>
                  <li className="ecl-navigation-menu__item">
                    <a
                      href="../../example.html#item1-1-3"
                      className="ecl-navigation-menu__link"
                    >
                      Sub item 3
                    </a>
                  </li>
                  <li className="ecl-navigation-menu__item">
                    <a
                      href="../../example.html#item1-1-4"
                      className="ecl-navigation-menu__link ecl-navigation-menu__link--active"
                    >
                      Sub item 4
                    </a>
                  </li>
                  <li className="ecl-navigation-menu__item">
                    <a
                      href="../../example.html#item1-1-5"
                      className="ecl-navigation-menu__link"
                    >
                      Sub item 5
                    </a>
                  </li>
                </ul>
              </div>
              <div className="ecl-col">
                <ul className="ecl-navigation-menu__links ecl-list ecl-list--unstyled">
                  <li className="ecl-navigation-menu__item">
                    <a
                      href="../../example.html#item1-2-1"
                      className="ecl-navigation-menu__link"
                    >
                      Sub item 1
                    </a>
                  </li>
                  <li className="ecl-navigation-menu__item">
                    <a
                      href="../../example.html#item1-2-2"
                      className="ecl-navigation-menu__link"
                    >
                      Sub item 2
                    </a>
                  </li>
                  <li className="ecl-navigation-menu__item">
                    <a
                      href="../../example.html#item1-2-3"
                      className="ecl-navigation-menu__link"
                    >
                      Sub item 3
                    </a>
                  </li>
                  <li className="ecl-navigation-menu__item">
                    <a
                      href="../../example.html#item1-2-4"
                      className="ecl-navigation-menu__link"
                    >
                      Sub item 4
                    </a>
                  </li>
                  <li className="ecl-navigation-menu__item">
                    <a
                      href="../../example.html#item1-2-5"
                      className="ecl-navigation-menu__link"
                    >
                      Sub item 5
                    </a>
                  </li>
                </ul>
              </div>
              <div className="ecl-col">
                <ul className="ecl-navigation-menu__links ecl-list ecl-list--unstyled">
                  <li className="ecl-navigation-menu__item">
                    <a
                      href="../../example.html#item1-3-1"
                      className="ecl-navigation-menu__link"
                    >
                      Sub item 1
                    </a>
                  </li>
                  <li className="ecl-navigation-menu__item">
                    <a
                      href="../../example.html#item1-3-2"
                      className="ecl-navigation-menu__link"
                    >
                      Sub item 2
                    </a>
                  </li>
                  <li className="ecl-navigation-menu__item">
                    <a
                      href="../../example.html#item1-3-3"
                      className="ecl-navigation-menu__link"
                    >
                      Sub item 3
                    </a>
                  </li>
                  <li className="ecl-navigation-menu__item">
                    <a
                      href="../../example.html#item1-3-4"
                      className="ecl-navigation-menu__link"
                    >
                      Sub item 4
                    </a>
                  </li>
                  <li className="ecl-navigation-menu__item">
                    <a
                      href="../../example.html#item1-3-5"
                      className="ecl-navigation-menu__link"
                    >
                      Sub item 5
                    </a>
                  </li>
                </ul>
              </div>
              <div className="ecl-col">
                <ul className="ecl-navigation-menu__links ecl-list ecl-list--unstyled">
                  <li className="ecl-navigation-menu__item">
                    <a
                      href="../../example.html#item1-4-1"
                      className="ecl-navigation-menu__link"
                    >
                      Sub item 1
                    </a>
                  </li>
                  <li className="ecl-navigation-menu__item">
                    <a
                      href="../../example.html#item1-4-2"
                      className="ecl-navigation-menu__link"
                    >
                      Sub item 2
                    </a>
                  </li>
                  <li className="ecl-navigation-menu__item">
                    <a
                      href="../../example.html#item1-4-3"
                      className="ecl-navigation-menu__link"
                    >
                      Sub item 3
                    </a>
                  </li>
                  <li className="ecl-navigation-menu__item">
                    <a
                      href="../../example.html#item1-4-4"
                      className="ecl-navigation-menu__link"
                    >
                      Sub item 4
                    </a>
                  </li>
                  <li className="ecl-navigation-menu__item">
                    <a
                      href="../../example.html#item1-4-5"
                      className="ecl-navigation-menu__link"
                    >
                      Sub item 5
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="ecl-navigation-menu__item">
            <a
              href="../../example.html#item2"
              className="ecl-navigation-menu__link"
              aria-controls="nav-menu-expandable-group-3"
              aria-expanded="false"
              aria-haspopup="true"
            >
              Advisor Bodies
            </a>
            <div
              className="ecl-navigation-menu__group ecl-row"
              id="nav-menu-expandable-group-3"
            >
              <div className="ecl-col">
                <div className="ecl-navigation-menu__title">
                  Optional title 1
                </div>
                <ul className="ecl-navigation-menu__links ecl-list ecl-list--unstyled">
                  <li className="ecl-navigation-menu__item">
                    <a
                      href="../../example.html#item2-1-1"
                      className="ecl-navigation-menu__link"
                    >
                      Sub item 1
                    </a>
                  </li>
                  <li className="ecl-navigation-menu__item">
                    <a
                      href="../../example.html#item2-1-2"
                      className="ecl-navigation-menu__link"
                    >
                      Sub item 2 with a very very very (very) long label
                    </a>
                  </li>
                  <li className="ecl-navigation-menu__item">
                    <a
                      href="../../example.html#item2-1-3"
                      className="ecl-navigation-menu__link"
                    >
                      Sub item 3
                    </a>
                  </li>
                  <li className="ecl-navigation-menu__item">
                    <a
                      href="../../example.html#item2-1-4"
                      className="ecl-navigation-menu__link"
                    >
                      Sub item 4
                    </a>
                  </li>
                  <li className="ecl-navigation-menu__item">
                    <a
                      href="../../example.html#item2-1-5"
                      className="ecl-navigation-menu__link"
                    >
                      Sub item 5
                    </a>
                  </li>
                </ul>
              </div>
              <div className="ecl-col">
                <div className="ecl-navigation-menu__title">
                  Optional title 2
                </div>
                <ul className="ecl-navigation-menu__links ecl-list ecl-list--unstyled">
                  <li className="ecl-navigation-menu__item">
                    <a
                      href="../../example.html#item2-2-1"
                      className="ecl-navigation-menu__link"
                    >
                      Sub item 1
                    </a>
                  </li>
                  <li className="ecl-navigation-menu__item">
                    <a
                      href="../../example.html#item2-2-2"
                      className="ecl-navigation-menu__link"
                    >
                      Sub item 2
                    </a>
                  </li>
                  <li className="ecl-navigation-menu__item">
                    <a
                      href="../../example.html#item2-2-3"
                      className="ecl-navigation-menu__link"
                    >
                      Sub item 3
                    </a>
                  </li>
                  <li className="ecl-navigation-menu__item">
                    <a
                      href="../../example.html#item2-2-4"
                      className="ecl-navigation-menu__link"
                    >
                      Sub item 4
                    </a>
                  </li>
                  <li className="ecl-navigation-menu__item">
                    <a
                      href="../../example.html#item2-2-5"
                      className="ecl-navigation-menu__link"
                    >
                      Sub item 5
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="ecl-navigation-menu__item">
            <a
              href="../../example.html#item3"
              className="ecl-navigation-menu__link"
              aria-controls="nav-menu-expandable-group-4"
              aria-expanded="false"
              aria-haspopup="true"
            >
              News & Events
            </a>
            <div
              className="ecl-navigation-menu__group ecl-row"
              id="nav-menu-expandable-group-4"
            >
              <div className="ecl-col">
                <div className="ecl-navigation-menu__title">
                  Optional title 1
                </div>
                <ul className="ecl-navigation-menu__links ecl-list ecl-list--unstyled">
                  <li className="ecl-navigation-menu__item">
                    <a
                      href="../../example.html#item3-1-1"
                      className="ecl-navigation-menu__link"
                    >
                      Sub item 1
                    </a>
                  </li>
                  <li className="ecl-navigation-menu__item">
                    <a
                      href="../../example.html#item3-1-2"
                      className="ecl-navigation-menu__link"
                    >
                      Sub item 2 with a very very very (very) long label
                    </a>
                  </li>
                  <li className="ecl-navigation-menu__item">
                    <a
                      href="../../example.html#item3-1-3"
                      className="ecl-navigation-menu__link"
                    >
                      Sub item 3
                    </a>
                  </li>
                  <li className="ecl-navigation-menu__item">
                    <a
                      href="../../example.html#item3-1-4"
                      className="ecl-navigation-menu__link"
                    >
                      Sub item 4
                    </a>
                  </li>
                  <li className="ecl-navigation-menu__item">
                    <a
                      href="../../example.html#item3-1-5"
                      className="ecl-navigation-menu__link"
                    >
                      Sub item 5
                    </a>
                  </li>
                </ul>
              </div>
              <div className="ecl-col">
                <div className="ecl-navigation-menu__title">
                  Optional title 2
                </div>
                <ul className="ecl-navigation-menu__links ecl-list ecl-list--unstyled">
                  <li className="ecl-navigation-menu__item">
                    <a
                      href="../../example.html#item3-2-1"
                      className="ecl-navigation-menu__link"
                    >
                      Sub item 1
                    </a>
                  </li>
                  <li className="ecl-navigation-menu__item">
                    <a
                      href="../../example.html#item3-2-2"
                      className="ecl-navigation-menu__link"
                    >
                      Sub item 2
                    </a>
                  </li>
                  <li className="ecl-navigation-menu__item">
                    <a
                      href="../../example.html#item3-2-3"
                      className="ecl-navigation-menu__link"
                    >
                      Sub item 3
                    </a>
                  </li>
                  <li className="ecl-navigation-menu__item">
                    <a
                      href="../../example.html#item3-2-4"
                      className="ecl-navigation-menu__link"
                    >
                      Sub item 4
                    </a>
                  </li>
                  <li className="ecl-navigation-menu__item">
                    <a
                      href="../../example.html#item3-2-5"
                      className="ecl-navigation-menu__link"
                    >
                      Sub item 5
                    </a>
                  </li>
                </ul>
              </div>
              <div className="ecl-col">
                <div className="ecl-navigation-menu__title">
                  Optional title 3
                </div>
                <ul className="ecl-navigation-menu__links ecl-list ecl-list--unstyled">
                  <li className="ecl-navigation-menu__item">
                    <a
                      href="../../example.html#item3-3-1"
                      className="ecl-navigation-menu__link"
                    >
                      Sub item 1
                    </a>
                  </li>
                  <li className="ecl-navigation-menu__item">
                    <a
                      href="../../example.html#item3-3-2"
                      className="ecl-navigation-menu__link"
                    >
                      Sub item 2
                    </a>
                  </li>
                  <li className="ecl-navigation-menu__item">
                    <a
                      href="../../example.html#item3-3-3"
                      className="ecl-navigation-menu__link"
                    >
                      Sub item 3
                    </a>
                  </li>
                  <li className="ecl-navigation-menu__item">
                    <a
                      href="../../example.html#item3-3-4"
                      className="ecl-navigation-menu__link"
                    >
                      Sub item 4
                    </a>
                  </li>
                  <li className="ecl-navigation-menu__item">
                    <a
                      href="../../example.html#item3-3-5"
                      className="ecl-navigation-menu__link"
                    >
                      Sub item 5
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="ecl-navigation-menu__item">
            <a
              href="../../example.html#item4"
              className="ecl-navigation-menu__link"
              aria-controls="nav-menu-expandable-group-5"
              aria-expanded="false"
              aria-haspopup="true"
            >
              Contracts and Fundings
            </a>
            <div
              className="ecl-navigation-menu__group ecl-row"
              id="nav-menu-expandable-group-5"
            >
              <div className="ecl-col">
                <div className="ecl-navigation-menu__title">
                  Optional title 1
                </div>
                <ul className="ecl-navigation-menu__links ecl-list ecl-list--unstyled">
                  <li className="ecl-navigation-menu__item">
                    <a
                      href="../../example.html#item4-1-1"
                      className="ecl-navigation-menu__link"
                    >
                      Sub item 1
                    </a>
                  </li>
                  <li className="ecl-navigation-menu__item">
                    <a
                      href="../../example.html#item4-1-2"
                      className="ecl-navigation-menu__link"
                    >
                      Sub item 2 with a very very very (very) long label
                    </a>
                  </li>
                  <li className="ecl-navigation-menu__item">
                    <a
                      href="../../example.html#item4-1-3"
                      className="ecl-navigation-menu__link"
                    >
                      Sub item 3
                    </a>
                  </li>
                  <li className="ecl-navigation-menu__item">
                    <a
                      href="../../example.html#item4-1-4"
                      className="ecl-navigation-menu__link"
                    >
                      Sub item 4
                    </a>
                  </li>
                  <li className="ecl-navigation-menu__item">
                    <a
                      href="../../example.html#item4-1-5"
                      className="ecl-navigation-menu__link"
                    >
                      Sub item 5
                    </a>
                  </li>
                </ul>
              </div>
              <div className="ecl-col">
                <div className="ecl-navigation-menu__title">
                  Optional title 2
                </div>
                <ul className="ecl-navigation-menu__links ecl-list ecl-list--unstyled">
                  <li className="ecl-navigation-menu__item">
                    <a
                      href="../../example.html#item4-2-1"
                      className="ecl-navigation-menu__link"
                    >
                      Sub item 1
                    </a>
                  </li>
                  <li className="ecl-navigation-menu__item">
                    <a
                      href="../../example.html#item4-2-2"
                      className="ecl-navigation-menu__link"
                    >
                      Sub item 2
                    </a>
                  </li>
                  <li className="ecl-navigation-menu__item">
                    <a
                      href="../../example.html#item4-2-3"
                      className="ecl-navigation-menu__link"
                    >
                      Sub item 3
                    </a>
                  </li>
                  <li className="ecl-navigation-menu__item">
                    <a
                      href="../../example.html#item4-2-4"
                      className="ecl-navigation-menu__link"
                    >
                      Sub item 4
                    </a>
                  </li>
                  <li className="ecl-navigation-menu__item">
                    <a
                      href="../../example.html#item4-2-5"
                      className="ecl-navigation-menu__link"
                    >
                      Sub item 5
                    </a>
                  </li>
                </ul>
              </div>
              <div className="ecl-col">
                <div className="ecl-navigation-menu__title">
                  Optional title 3
                </div>
                <ul className="ecl-navigation-menu__links ecl-list ecl-list--unstyled">
                  <li className="ecl-navigation-menu__item">
                    <a
                      href="../../example.html#item4-3-1"
                      className="ecl-navigation-menu__link"
                    >
                      Sub item 1
                    </a>
                  </li>
                  <li className="ecl-navigation-menu__item">
                    <a
                      href="../../example.html#item4-3-2"
                      className="ecl-navigation-menu__link"
                    >
                      Sub item 2
                    </a>
                  </li>
                  <li className="ecl-navigation-menu__item">
                    <a
                      href="../../example.html#item4-3-3"
                      className="ecl-navigation-menu__link"
                    >
                      Sub item 3
                    </a>
                  </li>
                  <li className="ecl-navigation-menu__item">
                    <a
                      href="../../example.html#item4-3-4"
                      className="ecl-navigation-menu__link"
                    >
                      Sub item 4
                    </a>
                  </li>
                  <li className="ecl-navigation-menu__item">
                    <a
                      href="../../example.html#item4-3-5"
                      className="ecl-navigation-menu__link"
                    >
                      Sub item 5
                    </a>
                  </li>
                </ul>
              </div>
              <div className="ecl-col">
                <div className="ecl-navigation-menu__title">
                  Optional title 4
                </div>
                <ul className="ecl-navigation-menu__links ecl-list ecl-list--unstyled">
                  <li className="ecl-navigation-menu__item">
                    <a
                      href="../../example.html#item4-4-1"
                      className="ecl-navigation-menu__link"
                    >
                      Sub item 1
                    </a>
                  </li>
                  <li className="ecl-navigation-menu__item">
                    <a
                      href="../../example.html#item4-4-2"
                      className="ecl-navigation-menu__link"
                    >
                      Sub item 2
                    </a>
                  </li>
                  <li className="ecl-navigation-menu__item">
                    <a
                      href="../../example.html#item4-4-3"
                      className="ecl-navigation-menu__link"
                    >
                      Sub item 3
                    </a>
                  </li>
                  <li className="ecl-navigation-menu__item">
                    <a
                      href="../../example.html#item4-4-4"
                      className="ecl-navigation-menu__link"
                    >
                      Sub item 4
                    </a>
                  </li>
                  <li className="ecl-navigation-menu__item">
                    <a
                      href="../../example.html#item4-4-5"
                      className="ecl-navigation-menu__link"
                    >
                      Sub item 5
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default BootNavBar;
