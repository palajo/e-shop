import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listCatalog } from '../../redux/actions/catalogActions'

import { NavLink } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

export function CatalogNavigationPunct(props) {
  return (
    <li className="catalog-nav-item" onClick={props.onClick}>
      <div className={`catalog-nav-link ${props.active ? 'chosen' : ''}`}>
        <div className="catalog-nav-link-title">
          {
            props.icon ? (
              <div className={`icon ${props.icon}`}></div>
            ) : null
          }
          {props.name}
        </div>
        <div className="catalog-nav-link-actions">
          {
            props.child > 0 ? (
              <div className="catalog-nav-link-action">
                <NavLink to="/catalog/category">
                  <div className="icon external-link"></div>
                </NavLink>
              </div>
            ) : null
          }
          <div className="catalog-nav-link-action">
            <div className="icon menu-arrow-right"></div>
          </div>
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

  const [level, setLevel] = useState(false);

  const [depthOne, setDepthOne] = useState(0);
  const [depthTwo, setDepthTwo] = useState(0);
  const [depthThree, setDepthThree] = useState(0);
  const [depthFour, setDepthFour] = useState(0);

  const handleDepthOne = (index) => {
    setDepthOne(index)
    setLevel(1)
  }

  const handleDepthTwo = (index) => {
    setDepthTwo(index)
    setLevel(2)
  }

  const handleDepthThree = (index) => {
    setDepthThree(index)
    setLevel(3)
  }

  const handleDepthFour = (index) => {
    setDepthFour(index)
    setLevel(4)
  }

  const handleLevel = (index) => {
    setLevel(index)
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
                <div className={`catalog-navigation-block main-block ${level > 0 ? 'previous': ''} ${level > 1 ? 'hidden' : ''}`}>
                  {
                    catalog.map((data) => (
                      <>
                        <div className="catalog-navigation-block-title" onClick={() => handleLevel(1)}>
                          Catalog
                        </div>
                        <ul className="catalog-nav">
                          {
                            data.Data.CategoryTree.SubTree.map((category, index) => (
                              <li className="catalog-nav-item" onClick={() => handleDepthOne(index)} key={index}>
                                <div className={`catalog-nav-link ${index === depthOne ? 'chosen' : ''}`}>
                                  <div className="catalog-nav-link-title">
                                    <div className={`icon processor`}></div>
                                    {category.Name}
                                  </div>
                                  <div className="catalog-nav-link-actions">
                                    {
                                      category.SubTreeCount > 0 ? (
                                        <div className="catalog-nav-link-action">
                                          <NavLink to={`/catalog/${category.Id}`}>
                                            <div className="icon external-link"></div>
                                          </NavLink>
                                        </div>
                                      ) : null
                                    }
                                    <div className="catalog-nav-link-action">
                                      <div className="icon menu-arrow-right"></div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))
                          }
                        </ul>
                      </>
                    ))
                  }
                </div>
                {
                  catalog[0].Data.CategoryTree.SubTree[depthOne].SubTreeCount > 0 ? (
                    <>
                      <CSSTransition
                        in={level > 0}
                        timeout={500}
                        classNames="catalog-navigation-subcategory-animation"
                        unmountOnExit
                      >
                        <div className={`catalog-navigation-block ${level > 1 ? 'previous' : ''} ${level > 2 ? 'hidden' : ''}`}>
                          <div className="catalog-navigation-block-title" onClick={() => handleLevel(2)}>
                            {catalog[0].Data.CategoryTree.SubTree[depthOne].Name}
                          </div>
                          <ul className="catalog-nav">
                            {
                              catalog[0].Data.CategoryTree.SubTree[depthOne].SubTree.map((category, index) => (
                                <li className="catalog-nav-item" onClick={() => handleDepthTwo(index)} key={index}>
                                  <div className={`catalog-nav-link ${index === depthTwo ? 'chosen' : ''}`}>
                                    <div className="catalog-nav-link-title">
                                      <div className={`icon processor`}></div>
                                      {category.Name}
                                    </div>
                                    <div className="catalog-nav-link-actions">
                                      {
                                        category.SubTreeCount > 0 ? (
                                          <div className="catalog-nav-link-action">
                                            <NavLink to={`/catalog/${category.Id}`}>
                                              <div className="icon external-link"></div>
                                            </NavLink>
                                          </div>
                                        ) : null
                                      }
                                      <div className="catalog-nav-link-action">
                                        <div className="icon menu-arrow-right"></div>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ))
                            }
                          </ul>
                        </div>
                      </CSSTransition>
                      {
                        catalog[0].Data.CategoryTree.SubTree[depthOne].SubTree[depthTwo].SubTreeCount > 0 ? (
                          <>
                            <CSSTransition
                              in={level > 1}
                              timeout={500}
                              classNames="catalog-navigation-subcategory-animation"
                              unmountOnExit
                            >
                              <div className={`catalog-navigation-block ${level > 2 ? 'previous': ''} ${level > 3 ? 'hidden' : ''}`}>
                                <div className="catalog-navigation-block-title" onClick={() => handleLevel(3)}>
                                  {catalog[0].Data.CategoryTree.SubTree[depthOne].SubTree[depthTwo].Name}
                                </div>
                                <ul className="catalog-nav">
                                  {
                                    catalog[0].Data.CategoryTree.SubTree[depthOne].SubTree[depthTwo].SubTree.map((category, index) => (
                                      <li className="catalog-nav-item" onClick={() => handleDepthThree(index)} key={index}>
                                        <div className={`catalog-nav-link ${index === depthThree ? 'chosen' : ''}`}>
                                          <div className="catalog-nav-link-title">
                                            <div className={`icon processor`}></div>
                                            {category.Name}
                                          </div>
                                          <div className="catalog-nav-link-actions">
                                            {
                                              category.SubTreeCount > 0 ? (
                                                <div className="catalog-nav-link-action">
                                                  <NavLink to={`/catalog/${category.Id}`}>
                                                    <div className="icon external-link"></div>
                                                  </NavLink>
                                                </div>
                                              ) : null
                                            }
                                            <div className="catalog-nav-link-action">
                                              <div className="icon menu-arrow-right"></div>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    ))
                                  }
                                </ul>
                              </div>
                            </CSSTransition>
                            {
                              catalog[0].Data.CategoryTree.SubTree[depthOne].SubTree[depthTwo].SubTree[depthThree].SubTreeCount > 0 ? (
                                <>
                                  <CSSTransition
                                    in={level > 2}
                                    timeout={500}
                                    classNames="catalog-navigation-subcategory-animation"
                                    unmountOnExit
                                  >
                                    <div className={`catalog-navigation-block ${level > 3 ? 'previous': ''} ${level > 5 ? 'hidden' : ''}`}>
                                      <div className="catalog-navigation-block-title" onClick={() => handleLevel(4)}>
                                        {catalog[0].Data.CategoryTree.SubTree[depthOne].SubTree[depthTwo].SubTree[depthThree].Name}
                                      </div>
                                      <ul className="catalog-nav">
                                        {
                                          catalog[0].Data.CategoryTree.SubTree[depthOne].SubTree[depthTwo].SubTree[depthThree].SubTree.map((category, index) => (
                                            <li className="catalog-nav-item" onClick={() => handleDepthFour(index)} key={index}>
                                              <div className={`catalog-nav-link ${index === depthFour ? 'chosen' : ''}`}>
                                                <div className="catalog-nav-link-title">
                                                  <div className={`icon processor`}></div>
                                                  {category.Name}
                                                </div>
                                                <div className="catalog-nav-link-actions">
                                                  {
                                                    category.SubTreeCount > 0 ? (
                                                      <div className="catalog-nav-link-action">
                                                        <NavLink to={`/catalog/${category.Id}`}>
                                                          <div className="icon external-link"></div>
                                                        </NavLink>
                                                      </div>
                                                    ) : null
                                                  }
                                                  <div className="catalog-nav-link-action">
                                                    <div className="icon menu-arrow-right"></div>
                                                  </div>
                                                </div>
                                              </div>
                                            </li>
                                          ))
                                        }
                                      </ul>
                                    </div>
                                  </CSSTransition>
                                  {
                                    catalog[0].Data.CategoryTree.SubTree[depthOne].SubTree[depthTwo].SubTree[depthThree].SubTree[depthFour].SubTreeCount > 0 ? (
                                      <CSSTransition
                                        in={level > 3}
                                        timeout={500}
                                        classNames="catalog-navigation-subcategory-animation"
                                        unmountOnExit
                                      >
                                        <div className={`catalog-navigation-block ${level > 4 ? 'previous': ''} ${level > 5 ? 'hidden' : ''}`}>
                                          <div className="catalog-navigation-block-title" onClick={() => handleLevel(5)}>
                                            {catalog[0].Data.CategoryTree.SubTree[depthOne].SubTree[depthTwo].SubTree[depthThree].SubTree[depthFour].Name}
                                          </div>
                                          <ul className="catalog-nav">
                                            {catalog[0].Data.CategoryTree.SubTree[depthOne].SubTree[depthTwo].SubTree[depthThree].SubTree[depthFour].SubTree.map((category) => (
                                              <CatalogNavigationPunct
                                                name={category.Name}
                                                id={category.Id}
                                                key={category.Id}
                                                child={category.SubTreeCount > 0 ? '1' : '0'}
                                              />
                                            ))}
                                          </ul>
                                        </div>
                                      </CSSTransition>
                                    ) : null
                                  }
                                </>
                              ) : null
                            }
                          </>
                        ) : null
                      }
                    </>
                  ) : null
                }
              </div>
            </div>
          </CSSTransition>
        )
      }
    </>
  )
}
