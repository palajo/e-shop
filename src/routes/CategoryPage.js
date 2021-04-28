import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import SubcategoryBlock from '../components/category/SubcategoryBlock';
import ProductBlock from '../components/product/ProductBlock'

export default function CategoryPage() {

    const filters = [
        {
            id: 1,
            filterTitle: "Manufacturer",
            filterQuantity: 6532,
            filters: [
                {
                    filterTitle: "Check all",
                    filterQuantity: 136
                },
                {
                    filterTitle: "Bourns",
                    filterQuantity: 314
                },
                {
                    filterTitle: "CDIL",
                    filterQuantity: 125
                },
                {
                    filterTitle: "Central Semiconductor corp.",
                    filterQuantity: 200
                },
                {
                    filterTitle: "Daco Semiconductor",
                    filterQuantity: 234
                },
                {
                    filterTitle: "DC Components",
                    filterQuantity: 564
                },
                {
                    filterTitle: "Alpha & Omega Conductors",
                    filterQuantity: 145
                },
                {
                    filterTitle: "Central Semiconductor corp.",
                    filterQuantity: 421
                },
                {
                    filterTitle: "CDIL",
                    filterQuantity: 631
                },
                {
                    filterTitle: "Bourns",
                    filterQuantity: 1235
                },
                {
                    filterTitle: "Alpha & Omega Conductors",
                    filterQuantity: 231
                },
            ]
        },
        {
            id: 2,
            filterTitle: "Brand",
            filterQuantity: 2184,
            filters: [
                {
                    filterTitle: "AAEON",
                    filterQuantity: 136
                },
                {
                    filterTitle: "ACME SYSTEMS",
                    filterQuantity: 314
                },
                {
                    filterTitle: "GRINN",
                    filterQuantity: 125
                },
                {
                    filterTitle: "OLIMEX",
                    filterQuantity: 200
                },
                {
                    filterTitle: "RASPBERRY PI",
                    filterQuantity: 234
                },
                {
                    filterTitle: "SEEED STUDIO",
                    filterQuantity: 564
                },
                {
                    filterTitle: "SINOVOIP",
                    filterQuantity: 145
                },
                {
                    filterTitle: "SOLIDRUN",
                    filterQuantity: 421
                },
                {
                    filterTitle: "SOMLABS",
                    filterQuantity: 631
                },
                {
                    filterTitle: "VIA TECHNOLOGIES",
                    filterQuantity: 1235
                },
                {
                    filterTitle: "Allwinner A33 Quad-Core",
                    filterQuantity: 231
                },
            ]
        }
    ]


    const products = [];
    for (var i = 0; i < 15; i++) {
        products.push(<ProductBlock key={i} />);
    };


    const subcategories = [];
    for (var x = 0; x < 14; x++) {
        subcategories.push(<SubcategoryBlock key={x} />);

        
        if (x === 6) {
            subcategories.push(<div className="divider" key={x}></div>)
            continue;
        }
    };
    

    const [showFilter, setShowFilter] = useState(true);
    const toggleShowFilter = (index) => setShowFilter(showFilter => ({
        ...showFilter,
        [index]: !showFilter[index]
    }));

    return (
        <div id="wrapper">
            <div className="container">
                <div className="row">
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
                        </div>
                        <div className="category-container-body">
                            <div className="category-container-filters">
                                {
                                    filters.map((filter, index) => (
                                        <div className={showFilter[index] ? "filters-block hidden" : "filters-block"} key={index}>
                                            <button className="filters-button" onClick={() => toggleShowFilter(index)}>
                                                {filter.filterTitle} <span>({filter.filterQuantity})</span>
                                            </button>
                                            {
                                                showFilter[index] ? (
                                                    null
                                                ) : (
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
                                                )
                                            }

                                        </div>
                                    ))
                                }
                            </div>
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
                </div>
            </div>
        </div>
    )
}
