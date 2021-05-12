import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const navigation = [
    {
        depth: 100,
        navTitle: "Catalog",
        navTree: [
            {
                categoryId: "1",
                categoryTitle: "Semiconductors",
                categoryTarget: 2,
                depth: 101,
                subcategories: [
                    {
                        categoryId: "2",
                        categoryTitle: "Diodes",
                        depth: 102,
                        subcategories: [
                            {
                                categoryId: "3",
                                categoryTitle: "Transistors",
                                depth: 103,
                                subcategories: [
                                    {
                                        categoryId: "4",
                                        categoryTitle: "Diodes",
                                        depth: 104,
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
        <li className="catalog-nav-item" onClick={props.onClick}>
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

export default function CatalogNavigation({showNavigation, toggleNavigation}) {

    const [showSubcategory] = useState(true);

    const handleShowSubcategory= () => {
        // setShowSubcategory(!showSubcategory);
    };

    return (
        <>
        {
            showNavigation ? (
                <div className="catalog-navigation">
                    <div className="catalog-navigation-overlay" onClick={toggleNavigation}></div>
                    <div className="catalog-navigation-container">
                        {
                            navigation.map((nav, index) => (
                                <>
                                    <div className={`catalog-navigation-block hidden`}>
                                        <div className="catalog-navigation-block-title">
                                            {nav.navTitle}
                                        </div>
                                        <ul className="catalog-nav">
                                            {
                                                nav.navTree.map((depthOneNav) => (
                                                    <CatalogNavigationPunct 
                                                        toggleDepth="1"
                                                        categoryTitle={depthOneNav.categoryTitle}
                                                        key={depthOneNav.categoryId}

                                                        onClick={handleShowSubcategory}
                                                    />
                                                ))
                                            }
                                        </ul>
                                    </div>
                                    {
                                        nav.navTree.map((nav, index) => (
                                            <>
                                                {
                                                    showSubcategory ? (
                                                        <>
                                                        <div className={`catalog-navigation-block hidden`} key={index}>
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

                                                                            onClick={handleShowSubcategory}
                                                                        />
                                                                    ))
                                                                }
                                                            </ul>
                                                        </div>
                                                        {
                                                            nav.subcategories.map((nav, index) => (
                                                                <>
                                                                    {
                                                                        showSubcategory ? (
                                                                            <>
                                                                                <div className="catalog-navigation-block previous" key={index}>
                                                                                    <div className="catalog-navigation-block-title">
                                                                                        {nav.categoryTitle}
                                                                                    </div>
                                                                                    <ul className="catalog-nav">
                                                                                        {
                                                                                            nav.subcategories.map((nav, index) => (
                                                                                                <CatalogNavigationPunct 
                                                                                                    toggleDepth="3"
                                                                                                    categoryTitle={nav.categoryTitle}
                                                                                                    key={nav.categoryId}
                            
                                                                                                    onClick={handleShowSubcategory}
                                                                                                />        
                                                                                            ))
                                                                                        }
                                                                                    </ul>
                                                                                </div>
                                                                                {
                                                                                    nav.subcategories.map((nav, index) => (
                                                                                        <>
                                                                                            {
                                                                                                showSubcategory ? (
                                                                                                    <>
                                                                                                        <div className="catalog-navigation-block current" key={index}>
                                                                                                            <div className="catalog-navigation-block-title">
                                                                                                                {nav.categoryTitle}
                                                                                                            </div>
                                                                                                            <ul className="catalog-nav">
                                                                                                                {
                                                                                                                    nav.subcategories.map((nav, index) => (
                                                                                                                        <CatalogNavigationPunct 
                                                                                                                            toggleDepth="3"
                                                                                                                            categoryTitle={nav.categoryTitle}
                                                                                                                            key={nav.categoryId}
                                                    
                                                                                                                            onClick={handleShowSubcategory}
                                                                                                                        />        
                                                                                                                    ))
                                                                                                                }
                                                                                                            </ul>
                                                                                                        </div>
                                                                                                    </>
                                                                                                ) : null
                                                                                            }
                                                                                        </>
                                                                                    ))
                                                                                }
                                                                            </>
                                                                        ) : null
                                                                    }
                                                                </>
                                                            ))
                                                        }
                                                        </>
                                                    ) : null
                                                }
                                            </>
                                        ))
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
