import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group';

import filters from '../components/api/filters';
import FiltersModal from '../components/category/FiltersModal';

import SubcategoryBlock from '../components/category/SubcategoryBlock';
import ProductBlock from '../components/product/ProductBlock'

export default function CategoryPage() {

    const [width, setWidth] = useState(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const products = [];
    for (var i = 0; i < 15; i++) {
        products.push(<ProductBlock key={i} />);
    };


    const subcategories = [];
    for (var x = 0; x < 14; x++) {
        subcategories.push(<SubcategoryBlock key={x} />);
    };
    

    const [showFilter, setShowFilter] = useState(false);

    const toggleShowFilter = (index) => setShowFilter(showFilter => ({
        ...showFilter,
        [index]: !showFilter[index]
    }));


    const [showFiltersModal, setShowFiltersModal] = useState(false);

    const toggleFiltersModal = () => {
        setShowFiltersModal(!showFiltersModal);
    };

    return (
        <div id="wrapper">
            <div className="container">
                <div className="row">
                    <main className="full-width">
                        <section className="breadcrumbs-container">
                            <ul className="breadcrumbs">
                                <li className="breadcrumbs-item">
                                    <NavLink to="/" className="breadcrumbs-link" exact>
                                        Mainpage
                                    </NavLink>
                                </li>
                                <li className="breadcrumbs-item">
                                    <NavLink to="/catalog" className="breadcrumbs-link" exact>
                                        Catalog
                                    </NavLink>
                                </li>
                                <li className="breadcrumbs-item">
                                    <NavLink to="/catalog/category" className="breadcrumbs-link" exact>
                                        Category
                                    </NavLink>
                                </li>
                            </ul>
                        </section>
                        <section className="subcategories-container">
                            {subcategories}
                        </section>
                        <section className="category-container">
                            <div className="category-container-header">
                                <div className="category-container-title">
                                    SMD transil diodes
                                </div>
                                {
                                    width <= 1023 ? (
                                        <div className="category-container-toggle-filters">
                                            <button className="button button-icon button-icon-text" onClick={toggleFiltersModal}>
                                                <div className="icon filter"></div>
                                                Filters
                                            </button>
                                        </div>
                                    ) : null
                                }
                                {
                                    width >= 1024 ? (
                                        <div className="category-container-sort">
                                            <div className="sort-block">
                                                <select name="show-on-page" id="show-on-page" className="show-on-page">
                                                    <option value="relevant">Most Relevant</option>
                                                    <option value="popular">Most Popular</option>
                                                    <option value="hightolow">Price (from high to low)</option>
                                                    <option value="lowtohigh">Price (from low to high)</option>
                                                </select>
                                            </div>
                                            <div className="sort-block">
                                                <select name="show-on-page" id="show-on-page" className="show-on-page">
                                                    <option value="15">15</option>
                                                    <option value="25">25</option>
                                                    <option value="45">45</option>
                                                </select>
                                            </div>
                                        </div>
                                    ) : null
                                }
                            </div>
                            <div className="category-container-body">
                                {
                                    width >= 1024 ? (
                                        <div className="category-container-filters">
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
                                    ) : null 
                                }
                                {
                                    width <= 1023 ? (
                                        <FiltersModal 
                                            showFiltersModal={showFiltersModal}
                                            toggleFiltersModal={toggleFiltersModal}
                                            showFilter={showFilter}
                                            toggleShowFilter={toggleShowFilter}
                                        />
                                    ) : null 
                                }
                                <div className="category-container-products">
                                    {products}
                                </div>
                            </div>
                        </section>
                        <section className="pagination-container">
                            <ul className="pagination">
                                <li className="pagination-item">
                                    <NavLink to="/catalog/category" className="pagination-link" exact>
                                        1
                                    </NavLink>
                                </li>
                                <li className="pagination-item">
                                    <NavLink to="/" className="pagination-link" exact>
                                        2
                                    </NavLink>
                                </li>
                                <li className="pagination-item">
                                    <NavLink to="/" className="pagination-link" exact>
                                        3
                                    </NavLink>
                                </li>
                                <li className="pagination-item">
                                    <NavLink to="/" className="pagination-link" exact>
                                        ...
                                    </NavLink>
                                </li>
                                <li className="pagination-item">
                                    <NavLink to="/" className="pagination-link" exact>
                                        13
                                    </NavLink>
                                </li>
                                <li className="pagination-item">
                                    <NavLink to="/" className="pagination-link" exact>
                                        14
                                    </NavLink>
                                </li>
                            </ul>
                        </section>

                    </main>
                </div>
            </div>
        </div>
    )
}
