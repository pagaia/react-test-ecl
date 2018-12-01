import React from 'react'

const Splash = (props) => {
    return (
        <div className="ecl-language-list ecl-language-list--overlay">
            <div className="ecl-language-list__container ecl-container">
                <div className="ecl-row">
                    <div className="ecl-language-list__close ecl-col-12 ecl-col-lg-8 ecl-offset-lg-2">
                        <button type="submit" className="ecl-language-list__close-button ecl-button ecl-button--ghost">
                            <span className="ecl-button__container"><span className="ecl-button__label">Close</span>
                            </span>
                        </button>
                    </div><div className="ecl-language-list__title ecl-col-12 ecl-col-lg-8 ecl-offset-lg-2">
                        <svg className="ecl-language-list__title-icon ecl-icon ecl-icon--m">
                            <use href="static/media/icons.1f3e1a43.svg#general--generic-lang"></use>
                        </svg>
                        Select your language
                    </div>
                </div>
                <div className="ecl-row">
                    <div className="ecl-language-list__column ecl-col-12 ecl-col-lg-4 ecl-offset-lg-2">
                        <ul className="ecl-language-list__list">
                            <li className="ecl-language-list__item ">
                                <a href="/example#language_bg" className="ecl-language-list__link ecl-link ecl-link--standalone">български</a>
                            </li>
                            <li className="ecl-language-list__item ">
                                <a href="/example#language_es" className="ecl-language-list__link ecl-link ecl-link--standalone">español</a></li>
                            <li className="ecl-language-list__item ">
                                <a href="/example#language_cs" className="ecl-language-list__link ecl-link ecl-link--standalone">čeština</a></li>
                            <li className="ecl-language-list__item ">
                                <a href="/example#language_da" className="ecl-language-list__link ecl-link ecl-link--standalone">dansk</a></li>
                            <li className="ecl-language-list__item ">
                                <a href="/example#language_de" className="ecl-language-list__link ecl-link ecl-link--standalone">Deutsch</a></li>
                            <li className="ecl-language-list__item ">
                                <a href="/example#language_et" className="ecl-language-list__link ecl-link ecl-link--standalone">eesti</a></li>
                            <li className="ecl-language-list__item "><a href="/example#language_el" className="ecl-language-list__link ecl-link ecl-link--standalone">ελληνικά</a></li>
                            <li className="ecl-language-list__item ecl-language-list__item--is-active"><a href="/example#language_en" className="ecl-language-list__link ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-after"><span className="ecl-link__label">English</span>&nbsp;<svg className="ecl-link__icon ecl-icon ecl-icon--xs">
                                <use href="static/media/icons.1f3e1a43.svg#ui--check"></use></svg></a>
                            </li>
                            <li className="ecl-language-list__item "><a href="/example#language_fr" className="ecl-language-list__link ecl-link ecl-link--standalone">français</a></li>

                            <li className="ecl-language-list__item "><a href="/example#language_ga" className="ecl-language-list__link ecl-link ecl-link--standalone">Gaeilge</a></li>
                            <li className="ecl-language-list__item "><a href="/example#language_hr" className="ecl-language-list__link ecl-link ecl-link--standalone">hrvatski</a></li>
                            <li className="ecl-language-list__item "><a href="/example#language_it" className="ecl-language-list__link ecl-link ecl-link--standalone">italiano</a></li>
                        </ul>
                    </div>
                    <div className="ecl-language-list__column ecl-col-12 ecl-col-lg-4">
                        <ul className="ecl-language-list__list">
                            <li className="ecl-language-list__item "><a href="/example#language_lv" className="ecl-language-list__link ecl-link ecl-link--standalone">latviešu</a></li>
                            <li className="ecl-language-list__item "><a href="/example#language_lt" className="ecl-language-list__link ecl-link ecl-link--standalone">lietuvių</a></li>
                            <li className="ecl-language-list__item "><a href="/example#language_hu" className="ecl-language-list__link ecl-link ecl-link--standalone">magyar</a></li>
                            <li className="ecl-language-list__item "><a href="/example#language_mt" className="ecl-language-list__link ecl-link ecl-link--standalone">Malti</a></li>
                            <li className="ecl-language-list__item "><a href="/example#language_nl" className="ecl-language-list__link ecl-link ecl-link--standalone">Nederlands</a></li>
                            <li className="ecl-language-list__item "><a href="/example#language_pl" className="ecl-language-list__link ecl-link ecl-link--standalone">polski</a></li>
                            <li className="ecl-language-list__item "><a href="/example#language_pt" className="ecl-language-list__link ecl-link ecl-link--standalone">português</a></li>
                            <li className="ecl-language-list__item "><a href="/example#language_ro" className="ecl-language-list__link ecl-link ecl-link--standalone">română</a></li>
                            <li className="ecl-language-list__item "><a href="/example#language_sk" className="ecl-language-list__link ecl-link ecl-link--standalone">slovenčina</a></li>
                            <li className="ecl-language-list__item "><a href="/example#language_sl" className="ecl-language-list__link ecl-link ecl-link--standalone">slovenščina</a></li>
                            <li className="ecl-language-list__item "><a href="/example#language_fi" className="ecl-language-list__link ecl-link ecl-link--standalone">suomi</a></li>
                            <li className="ecl-language-list__item "><a href="/example#language_sv" className="ecl-language-list__link ecl-link ecl-link--standalone">svenska</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Splash;