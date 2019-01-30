import React from "react";
import megamenu from "@ecl/generic-component-navigation-menu";
import navigationInpages from "@ecl/generic-component-inpage-navigation";

class BootNavBar extends React.Component {
  componentDidMount() {
    console.log("component did mount");
    megamenu();
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
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
                  <span className="ecl-navigation-menu__hamburger-label">
                    Menu
                  </span>
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
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <nav className="ecl-navigation-inpage js-is-sticky custom">
              <div className="ecl-navigation-inpage__title">Page content</div>
              <div className="ecl-navigation-inpage__body">
                <div
                  className="ecl-navigation-inpage__trigger"
                  aria-controls="ecl-navigation-inpage-list"
                  aria-expanded="false"
                  id="ecl-navigation-inpage-trigger"
                >
                  Heading 3
                </div>
                <ul
                  className="ecl-navigation-inpage__list"
                  aria-hidden="true"
                  aria-labelledby="ecl-navigation-inpage-trigger"
                  id="ecl-navigation-inpage-list"
                >
                  <li className="ecl-navigation-inpage__item">
                    <a
                      className="ecl-link ecl-link--standalone ecl-navigation-inpage__link"
                      href="#inline-nav-1"
                    >
                      Heading 1
                    </a>
                  </li>
                  <li className="ecl-navigation-inpage__item">
                    <a
                      className="ecl-link ecl-link--standalone ecl-navigation-inpage__link"
                      href="#inline-nav-2"
                    >
                      Heading 2
                    </a>
                  </li>
                  <li className="ecl-navigation-inpage__item ecl-navigation-inpage__link--is-active">
                    <a
                      className="ecl-link ecl-link--standalone ecl-navigation-inpage__link ecl-navigation-inpage__link--is-active"
                      href="#inline-nav-3"
                    >
                      Heading 3
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="col-md-9">
            <h2 className="ecl-heading ecl-heading--h2" id="inline-nav-1">
              Heading 1
            </h2>
            <p className="ecl-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
              dui ac lacus interdum eleifend non ut nisl. Duis arcu turpis,
              tristique vitae fringilla feugiat, tincidunt ac enim. Duis
              tincidunt purus quis metus finibus, ut ultricies nibh mattis. Ut
              ultricies placerat leo ac egestas. Suspendisse fringilla augue
              quam. Proin velit ipsum, bibendum ut commodo non, mattis at nisi.
              Sed massa eros, malesuada eu ipsum non, euismod finibus massa.
              Etiam mi ex, fringilla quis urna non, dignissim vulputate tortor.
              Vivamus congue sem vel ipsum posuere vulputate. Praesent ac
              vestibulum sem, sed tristique ligula. Praesent non eros suscipit,
              sagittis quam in, commodo felis.
            </p>
            <p className="ecl-paragraph">
              Donec egestas fermentum nisl vel aliquet. Pellentesque dui massa,
              elementum sed laoreet at, blandit sit amet magna. Praesent ac
              lobortis turpis. Maecenas sem est, consequat in erat sit amet,
              malesuada cursus arcu. Vestibulum molestie massa nec elit luctus
              euismod. Nullam nec diam et augue mattis mollis. Phasellus
              efficitur id velit eu vestibulum. Donec ullamcorper semper
              porttitor. Vivamus et sagittis urna. Nunc sit amet lectus nec
              magna cursus vehicula. In elementum pretium pellentesque. Vivamus
              est metus, hendrerit eget urna venenatis, pellentesque cursus
              lacus. Etiam tempus justo eget velit ultrices, in tempor arcu
              sodales.
            </p>
            <h2 className="ecl-heading ecl-heading--h2" id="inline-nav-2">
              Heading 2
            </h2>
            <p className="ecl-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
              dui ac lacus interdum eleifend non ut nisl. Duis arcu turpis,
              tristique vitae fringilla feugiat, tincidunt ac enim. Duis
              tincidunt purus quis metus finibus, ut ultricies nibh mattis. Ut
              ultricies placerat leo ac egestas. Suspendisse fringilla augue
              quam. Proin velit ipsum, bibendum ut commodo non, mattis at nisi.
              Sed massa eros, malesuada eu ipsum non, euismod finibus massa.
              Etiam mi ex, fringilla quis urna non, dignissim vulputate tortor.
              Vivamus congue sem vel ipsum posuere vulputate. Praesent ac
              vestibulum sem, sed tristique ligula. Praesent non eros suscipit,
              sagittis quam in, commodo felis.
            </p>
            <p className="ecl-paragraph">
              Donec egestas fermentum nisl vel aliquet. Pellentesque dui massa,
              elementum sed laoreet at, blandit sit amet magna. Praesent ac
              lobortis turpis. Maecenas sem est, consequat in erat sit amet,
              malesuada cursus arcu. Vestibulum molestie massa nec elit luctus
              euismod. Nullam nec diam et augue mattis mollis. Phasellus
              efficitur id velit eu vestibulum. Donec ullamcorper semper
              porttitor. Vivamus et sagittis urna. Nunc sit amet lectus nec
              magna cursus vehicula. In elementum pretium pellentesque. Vivamus
              est metus, hendrerit eget urna venenatis, pellentesque cursus
              lacus. Etiam tempus justo eget velit ultrices, in tempor arcu
              sodales.
            </p>
            <h2 className="ecl-heading ecl-heading--h2" id="inline-nav-3">
              Heading 3
            </h2>
            <p className="ecl-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
              dui ac lacus interdum eleifend non ut nisl. Duis arcu turpis,
              tristique vitae fringilla feugiat, tincidunt ac enim. Duis
              tincidunt purus quis metus finibus, ut ultricies nibh mattis. Ut
              ultricies placerat leo ac egestas. Suspendisse fringilla augue
              quam. Proin velit ipsum, bibendum ut commodo non, mattis at nisi.
              Sed massa eros, malesuada eu ipsum non, euismod finibus massa.
              Etiam mi ex, fringilla quis urna non, dignissim vulputate tortor.
              Vivamus congue sem vel ipsum posuere vulputate. Praesent ac
              vestibulum sem, sed tristique ligula. Praesent non eros suscipit,
              sagittis quam in, commodo felis.
            </p>
            <p className="ecl-paragraph">
              Donec egestas fermentum nisl vel aliquet. Pellentesque dui massa,
              elementum sed laoreet at, blandit sit amet magna. Praesent ac
              lobortis turpis. Maecenas sem est, consequat in erat sit amet,
              malesuada cursus arcu. Vestibulum molestie massa nec elit luctus
              euismod. Nullam nec diam et augue mattis mollis. Phasellus
              efficitur id velit eu vestibulum. Donec ullamcorper semper
              porttitor. Vivamus et sagittis urna. Nunc sit amet lectus nec
              magna cursus vehicula. In elementum pretium pellentesque. Vivamus
              est metus, hendrerit eget urna venenatis, pellentesque cursus
              lacus. Etiam tempus justo eget velit ultrices, in tempor arcu
              sodales.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default BootNavBar;
