import React from 'react'
import { CSSTransition } from 'react-transition-group'
import filters from '../../api/filters'

export default function FiltersModal({ showFiltersModal, toggleFiltersModal, showFilter, toggleShowFilter }) {
    return (
        <CSSTransition 
            in={showFiltersModal}
            timeout={400}
            classNames="burgermenu-animation"
            unmountOnExit
        >
            <div className="burger-navigation filters-modal">
                <div className="burger-navigation-overlay" onClick={toggleFiltersModal}></div>
                <div className="burger-navigation-container">
                    <div className="burger-navigation-block">
                        <div className="burger-navigation-row">
                            <div className="burger-close">
                                <div className="icon close" onClick={toggleFiltersModal}></div>
                            </div>
                        </div>
                    </div>
                    <div className="burger-navigation-block">
                        {
                            filters.map((filter, index) => (
                                <div className={showFilter[index] ? "filters-block hidden" : "filters-block"} key={index}>
                                    <button className="filters-button" onClick={() => toggleShowFilter(index)}>
                                        {filter.filterTitle} <span>({filter.filterQuantity})</span>
                                    </button>
                                    <CSSTransition 
                                        in={index === 0 ? !showFilter[index] : showFilter[index]}
                                        timeout={400}
                                        classNames="filters-animation"
                                        unmountOnExit
                                        key={index}
                                    >
                                        <div className="filters-container">
                                            <div className="filters-search">
                                                <input type="text" placeholder="Search.." className="filter-search-input" />
                                            </div>
                                            <ul className="filters-nav">
                                                {
                                                    filter.filters.map((subfilter, index) => (
                                                        <li className="filters-nav-item" key={index}>
                                                            <div className="filters-nav-link">
                                                                <input type="checkbox" className="custom-checkbox" name="checkbox-example" id={subfilter.filterTitle + index} />
                                                                <label htmlFor={subfilter.filterTitle + index}>{subfilter.filterTitle}<span>({subfilter.filterQuantity})</span></label>
                                                            </div>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </CSSTransition>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </CSSTransition>
    )
}
