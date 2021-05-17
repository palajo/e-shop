import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listCatalog } from '../../redux/actions/catalogActions'

import { NavLink } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

export function CatalogNavigationPunct(props) {
    return (
        <li className="catalog-nav-item" data-category={props.id} data-has-child={props.child} onClick={props.onClick}>
            <div className="catalog-nav-link">
                <div className="catalog-nav-link-title">
                    {
                        props.icon ? (
                            <div className={`icon ${props.icon}`}></div>
                        ) : null
                    }
                    {props.name}
                </div>
                <div className="catalog-nav-link-actions">
                    <div className="catalog-nav-link-action">
                        <NavLink to="/catalog/category">
                            <div className="icon external-link"></div>
                        </NavLink>
                    </div>
                    {
                        props.child > 0 ? (
                            <div className="catalog-nav-link-action">
                                <div className="icon menu-arrow-right"></div>
                            </div>
                        ) : null
                    }
                </div>
            </div>
        </li>
    )
}

export default function CatalogNavigation({ showNavigation, toggleNavigation }) {

    // fetching API data
    const dispatch = useDispatch();

    const catalogList = useSelector((state) => state.catalogList);
    const { loading, error, catalog } = catalogList;

    useEffect(() => {
        dispatch(listCatalog());
    }, [dispatch]);

    if (loading === false) {
        console.log(catalog)
    };

    const [showSubcategory, setShowSubcategory] = useState(false);

    /*
    const handleShowSubcategory = (index) => setShowSubcategory(showSubcategory => ({
        ...showSubcategory,
        [index]: !showSubcategory[index]
    }));
    */

    const [depth, setDepth] = useState(0)

   const handleShowSubcategory = (index, depth) => {
        setShowSubcategory(
            {
                ...showSubcategory,
                [index]: !showSubcategory[index]
            }
        )
        setDepth(depth)
        console.log(depth)
   }

    return (
        <>
            {
                loading ? (
                    <>
                    </>
                ) : error ? (
                    <div>
                        {error}
                    </div>
                ) : (
                    <CSSTransition
                        in={showNavigation}
                        timeout={500}
                        classNames="catalog-navigation-animation"
                        unmountOnExit
                    >
                        <div className="catalog-navigation">
                            <div className="catalog-navigation-overlay" onClick={toggleNavigation}></div>
                            <div className="catalog-navigation-container">
                                {
                                    catalog.map((data, index) => (
                                        <>
                                        <div className={`catalog-navigation-block ${depth === 1 ? 'previous' : null} ${depth > 1 ? 'hidden' : null}`} data-depth={data.Data.CategoryTree.Depth} data-category-id={data.Data.CategoryTree.Id} key={data.Data.CategoryTree.Id}>
                                            <div className="catalog-navigation-block-title" onClick={() => handleShowSubcategory(data.Data.CategoryTree.Id, data.Data.CategoryTree.Depth)}>
                                                Каталог
                                            </div>
                                            <ul className="catalog-nav">
                                                {
                                                    data.Data.CategoryTree.SubTree.map((category) => (
                                                        <CatalogNavigationPunct
                                                            name={category.Name}
                                                            id={category.Id}
                                                            key={category.Id}
                                                            child={category.SubTreeCount > 0 ? '1' : '0'}
                                                            onClick={() => handleShowSubcategory(category.Id, category.Depth)}
                                                            icon="processor"
                                                        />
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                        {
                                            data.Data.CategoryTree.SubTree.map((category) => (
                                                <CSSTransition
                                                    in={showSubcategory[category.Id]}
                                                    timeout={500}
                                                    classNames="catalog-navigation-subcategory-animation"
                                                    unmountOnExit
                                                >
                                                    <>
                                                    <div className={`catalog-navigation-block ${depth === 2 ? 'previous' : null} ${depth > 2 ? 'hidden' : null}`} data-depth={category.Depth} data-category-id={category.Id} key={category.Id}>
                                                        <div className="catalog-navigation-block-title">
                                                            {category.Name}
                                                        </div>
                                                        <ul className="catalog-nav">
                                                            {
                                                                category.SubTree.map((category) => (
                                                                    <CatalogNavigationPunct
                                                                        name={category.Name}
                                                                        id={category.Id}
                                                                        key={category.Id}
                                                                        child={category.SubTreeCount > 0 ? '1' : '0'}
                                                                        onClick={() => handleShowSubcategory(category.Id, category.Depth)}
                                                                    />
                                                                ))
                                                            }       
                                                        </ul>
                                                    </div>
                                                    {
                                                        category.SubTree.map((category) => (
                                                            category.SubTreeCount > 0 ? (
                                                                <CSSTransition
                                                                    in={showSubcategory[category.Id]}
                                                                    timeout={500}
                                                                    classNames="catalog-navigation-subcategory-animation"
                                                                    unmountOnExit
                                                                >
                                                                    <>
                                                                    <div className={`catalog-navigation-block ${depth === 3 ? 'previous' : null} ${depth > 3 ? 'hidden' : null}`} data-depth={category.Depth} data-category-id={category.Id} key={category.Id}>
                                                                        <div className="catalog-navigation-block-title">
                                                                            {category.Name}
                                                                        </div>
                                                                        <ul className="catalog-nav">
                                                                            {
                                                                                category.SubTree.map((category) => (
                                                                                    <CatalogNavigationPunct
                                                                                        name={category.Name}
                                                                                        id={category.Id}
                                                                                        key={category.Id}
                                                                                        child={category.SubTreeCount > 0 ? '1' : '0'}
                                                                                        onClick={() => handleShowSubcategory(category.Id, category.Depth)}
                                                                                    />
                                                                                ))
                                                                            }       
                                                                        </ul>
                                                                    </div>
                                                                    {
                                                                        category.SubTree.map((category) => (
                                                                            category.SubTreeCount > 0 ? (
                                                                                <CSSTransition
                                                                                    in={showSubcategory[category.Id]}
                                                                                    timeout={500}
                                                                                    classNames="catalog-navigation-subcategory-animation"
                                                                                    unmountOnExit
                                                                                >
                                                                                    <>
                                                                                    <div className={`catalog-navigation-block ${depth === 4 ? 'previous' : null} ${depth > 4 ? 'hidden' : null}`} data-depth={category.Depth} data-category-id={category.Id} key={category.Id}>
                                                                                        <div className="catalog-navigation-block-title">
                                                                                            {category.Name}
                                                                                        </div>
                                                                                        <ul className="catalog-nav">
                                                                                            {
                                                                                                category.SubTree.map((category) => (
                                                                                                    <CatalogNavigationPunct
                                                                                                        name={category.Name}
                                                                                                        id={category.Id}
                                                                                                        key={category.Id}
                                                                                                        child={category.SubTreeCount > 0 ? '1' : '0'}
                                                                                                        onClick={() => handleShowSubcategory(category.Id, category.Depth)}
                                                                                                    />
                                                                                                ))
                                                                                            }       
                                                                                        </ul>
                                                                                    </div>
                                                                                    {
                                                                                        category.SubTree.map((category) => (
                                                                                            category.SubTreeCount > 0 ? (
                                                                                                <CSSTransition
                                                                                                    in={showSubcategory[category.Id]}
                                                                                                    timeout={500}
                                                                                                    classNames="catalog-navigation-subcategory-animation"
                                                                                                    unmountOnExit
                                                                                                >
                                                                                                    <div className={`catalog-navigation-block ${depth === 5 ? 'previous' : null} ${depth > 5 ? 'hidden' : null}`} data-depth={category.Depth} data-category-id={category.Id} key={category.Id}>
                                                                                                        <div className="catalog-navigation-block-title">
                                                                                                            {category.Name}
                                                                                                        </div>
                                                                                                        <ul className="catalog-nav">
                                                                                                            {
                                                                                                                category.SubTree.map((category) => (
                                                                                                                    <CatalogNavigationPunct
                                                                                                                        name={category.Name}
                                                                                                                        id={category.Id}
                                                                                                                        key={category.Id}
                                                                                                                        child={category.SubTreeCount > 0 ? '1' : '0'}
                                                                                                                        onClick={() => handleShowSubcategory(category.Id, category.Depth)}
                                                                                                                    />
                                                                                                                ))
                                                                                                            }       
                                                                                                        </ul>
                                                                                                    </div>
                                                                                                </CSSTransition>
                                                                                            ) : null
                                                                                        ))
                                                                                    }
                                                                                    </>
                                                                                </CSSTransition>
                                                                            ) : null
                                                                        ))
                                                                    }
                                                                    </>
                                                                </CSSTransition>
                                                            ) : null
                                                        ))
                                                    }
                                                    </>
                                                </CSSTransition>
                                            ))
                                        }
                                        </>
                                    ))
                                }
                            </div>
                        </div>
                    </CSSTransition>
                )
            }
        </>
    )
}
