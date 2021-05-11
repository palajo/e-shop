import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const navigation = [
    {
        depth: 0,
        navTitle: "Catalog",
        navTree: [
            {
                categoryId: "1",
                categoryTitle: "Semiconductors",
                subcategories: [
                    {
                        categoryId: "2",
                        categoryTitle: "Diodes",
                        subcategories: [
                            {
                                categoryId: "3",
                                categoryTitle: "Transistors",
                                subcategories: [
                                    {
                                        categoryId: "4",
                                        categoryTitle: "Diodes",
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
]

export function CatalogNavigationPunct(props) {
    return(
        <li className="catalog-nav-item">
            <div className="catalog-nav-link">
                <div className="catalog-nav-link-title">
                    <div className="icon processor"></div>
                    {props.categoryTitle}
                </div>
                <div className="catalog-nav-link-actions">
                    <div className="catalog-nav-link-action">
                        <NavLink to="/catalog/category">
                            <div className="icon external-link"></div>
                        </NavLink>
                    </div>
                    <div className="catalog-nav-link-action">
                        <div className="icon menu-arrow-right"></div>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default function CatalogNavigation({openNav, handleCloseNav}) {

    const [hidden, setHidden] = useState(true);

    return (
        <>
        {
            openNav ? (
                <div className="catalog-navigation">
                    <div className="catalog-navigation-overlay" onClick={handleCloseNav}></div>
                    <div className="catalog-navigation-container">
                        {
                            navigation.map((nav, index) => (
                                <>
                                <div className="catalog-navigation-block hidden" key={index}>
                                    <div className="catalog-navigation-block-title">
                                        {nav.navTitle}
                                    </div>
                                    <ul className="catalog-nav">
                                        {
                                            nav.navTree.map((depthOneNav) => (
                                                <CatalogNavigationPunct 
                                                    toggleDepth="1"
                                                    categoryTitle={depthOneNav.categoryTitle}
                                                    key={nav.categoryId}
                                                />
                                            ))
                                        }
                                    </ul>
                                </div>
                                {
                                    hidden ? (
                                        nav.navTree.map((nav, index) => (
                                            <>
                                                <div className="catalog-navigation-block hidden" key={index}>
                                                    <div className="catalog-navigation-block-title">
                                                        {nav.categoryTitle}
                                                    </div>
                                                    <ul className="catalog-nav">
                                                        {
                                                            nav.subcategories.map((nav, index) => (
                                                                <CatalogNavigationPunct 
                                                                    toggleDepth="1"
                                                                    categoryTitle={nav.categoryTitle}
                                                                    key={nav.categoryId}
                                                                />
                                                            ))
                                                        }
                                                    </ul>
                                                </div>
                                            </>
                                        ))
                                    ) : null
                                }
                                {
                                    hidden ? (
                                        nav.navTree.map((nav, index) => (
                                            <>
                                                {
                                                    nav.subcategories.map((nav, index) => (
                                                        <div className="catalog-navigation-block previous" key={index}>
                                                            <div className="catalog-navigation-block-title">
                                                                {nav.categoryTitle}
                                                            </div>
                                                            <ul className="catalog-nav">
                                                                {
                                                                    nav.subcategories.map((nav, index) => (
                                                                        <CatalogNavigationPunct 
                                                                            toggleDepth="1"
                                                                            categoryTitle={nav.categoryTitle}
                                                                            key={nav.categoryId}
                                                                        />
                                                                    ))
                                                                }
                                                            </ul>
                                                        </div>
                                                    ))
                                                }

                                            </>
                                        ))
                                    ) : null
                                }
                                {
                                    hidden ? (
                                        nav.navTree.map((nav) => (
                                            <>
                                                {
                                                    nav.subcategories.map((nav) => (
                                                        <>
                                                            {
                                                                nav.subcategories.map((nav, index) => (
                                                                    <div className="catalog-navigation-block current" key={index}>
                                                                        <div className="catalog-navigation-block-title">
                                                                            {nav.categoryTitle}
                                                                        </div>
                                                                        <ul className="catalog-nav">
                                                                            {
                                                                                nav.subcategories.map((nav) => (
                                                                                    <CatalogNavigationPunct 
                                                                                        toggleDepth="1"
                                                                                        categoryTitle={nav.categoryTitle}
                                                                                        key={nav.categoryId}
                                                                                    />
                                                                                ))
                                                                            }
                                                                        </ul>
                                                                    </div>
                                                                ))
                                                            }
                                                        </>
                                                    ))
                                                }
                                            </>
                                        ))
                                    ) : null
                                }
                                </>
                            ))
                        }
                    </div>
                </div>
            ) : null
        }
        </>
    )
}
