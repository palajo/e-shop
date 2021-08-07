/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import SliderBackground from '../../assets/images/slider-background.jpg';
import AboutImage from '../../assets/images/about-image.jpg';
import ProductsContainer from '../../components/shop/product/ProductsContainer';
import CategoryContainer from '../../components/shop/category/CategoryContainer';
import CategoryImage from '../../assets/images/product-image.png';
import { useDispatch, useSelector } from 'react-redux';
import { listCatalog } from '../../redux/actions/catalogActions';
import Loading from '../../components/utils/Loading';

export default function MainPage() {
  // fetching API data
  const dispatch = useDispatch();

  const catalogList = useSelector((state) => state.catalogList);
  const { loading, error, catalog } = catalogList;

  useEffect(() => {
    dispatch(listCatalog());
  }, [dispatch]);

  console.log(catalog);

  return (
    <div id="wrapper">
      <div className="container">
        <div className="row">
          <aside className="sidebar">
            <div className="sidebar-block">
              {
                loading ? (
                  <Loading />
                ) : error ? (
                  <div>
                    {error}
                  </div>
                ) : (
                  <ul className="sidebar-nav">
                    {
                      catalog[0].Data.CategoryTree.SubTree.map((item , index) => (
                        <li className="sidebar-nav-item" key={index}>
                          <NavLink to={`/catalog/${item.Id}`} className="sidebar-nav-link">
                            <div className="icon processor"></div>
                            {item.Name}
                          </NavLink>
                        </li>
                      ))
                    }
                  </ul>
                )
              }
            </div>
            <div className="sidebar-block">
              <div className="sidebar-block-title">
                Navigation
              </div>
              <ul className="sidebar-nav">
                <li className="sidebar-nav-item">
                  <NavLink to="/about-us" className="sidebar-nav-link" exact>
                    <div className="icon processor"></div>
                    About Us
                  </NavLink>
                </li>
                <li className="sidebar-nav-item">
                  <NavLink to="/delivery-and-payment" className="sidebar-nav-link" exact>
                    <div className="icon processor"></div>
                    Delivery and Payment
                  </NavLink>
                </li>
                <li className="sidebar-nav-item">
                  <NavLink to="/contacts" className="sidebar-nav-link" exact>
                    <div className="icon processor"></div>
                    Contacts
                  </NavLink>
                </li>
                <li className="sidebar-nav-item">
                  <NavLink to="/privacy-policy" className="sidebar-nav-link" exact>
                    <div className="icon processor"></div>
                    Privacy Policy
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="sidebar-block">
              <div className="sidebar-block-title">
                Infromation
              </div>
              <div className="sidebar-block-container">
                © Copyright 2021 – Online-shop «RadioTechnic»
              </div>
            </div>
          </aside>
          <main className="with-sidebar">
            <section className="slider">
              <div className="container">
                <div className="row">
                  <div className="slider-image">
                    <img src={SliderBackground} />
                  </div>
                  <div className="slider-content">
                    <h1 className="slider-title">
                      Some title over here
                    </h1>
                    <p className="slider-description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                    </p>
                  </div>
                  <div className="slider-featured-category">
                    <div className="slider-category-block">
                      <div className="slider-category-image">
                        <NavLink to="#">
                          <img src={CategoryImage} />
                        </NavLink>
                      </div>
                      <div className="slider-category-title">
                        <div>
                          CONQUER ELECTRONIC
                        </div>
                        <NavLink to="#">
                          ABE 25A 250V
                        </NavLink>
                      </div>
                      <div className="slider-category-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </div>
                      <div className="slider-category-link">
                        <button className="button">
                          Discover
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <ProductsContainer />
            <ProductsContainer />
            <CategoryContainer />
            <section className="about-container">
              <div className="about-container-body">
                <div className="about-container-content">
                  <h2 className="container-title">
                    About us
                  </h2>
                  <p className="container-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                  </p>
                  <NavLink to="#" className="container-link">
                    <button className="button">
                      Contact us
                    </button>
                  </NavLink>
                </div>
                <div className="about-container-image">
                  <img src={AboutImage} />
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
};
