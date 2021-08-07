import React, {useEffect, useState} from 'react'
import {NavLink} from 'react-router-dom'

import $ from 'jquery';

import ProductImage from '../../assets/images/product-image.png'
import {useDispatch, useSelector} from 'react-redux';
import {listProductInfo} from '../../redux/actions/product/productInfoActions';
import {listProductPrices} from "../../redux/actions/product/productPricesActions";
import {listProductParameters} from "../../redux/actions/product/productParametersActions";
import Loading from '../../components/utils/Loading';

export default function ProductPage(props) {
  useEffect(() => {
    $(document).ready(function () {
      $('.product-tabs-nav-item').click(function () {
        $('.product-tabs-nav-item').removeClass('active');
        $('.product-tab-pane').removeClass('active');

        $(this).addClass('active');

        var tabId = $(this).attr('id');
        $('#' + tabId + '-tab').addClass('active');
      })
    })
  }, []);

  const [value, setValue] = useState(3);
  const [showButton, setShowButton] = useState(true);

  // fetching data
  const dispatch = useDispatch();
  const productId = props.match.params.productId;

  const productInfoList = useSelector((state) => state.productInfoList);
  const {infoLoading, infoError, productInfo} = productInfoList;

  const productPricesList = useSelector((state) => state.productPricesList);
  const {pricesLoading, pricesError, productPrices} = productPricesList;

  const productParametersList = useSelector((state) => state.productParametersList);
  const {parametersLoading, parametersError, productParameters} = productParametersList;

  useEffect(() => {
    dispatch(listProductInfo(productId));
    dispatch(listProductPrices(productId));
    dispatch(listProductParameters(productId));
  }, [dispatch, productId])

  // price
  const ProductPrice = () => {
    if (pricesLoading === false && infoLoading === false) {
      const fetchedAmount = productInfo.Data.ProductList.map((productInfo, index) => {
        return productInfo.MinAmount;
      })

      return productPrices.Data.ProductList.map((productPrice) => {
        return productPrice.PriceList.filter((price) => price.Amount === fetchedAmount[0]).map((price, index) => {
          return price.PriceValue
        })
      })

    } else {
      return 'loading...'
    }
  }

  // amount input
  const [amount, setAmount] = useState(1);

  console.log(productInfo);

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
                <li className="breadcrumbs-item">
                  <NavLink to="/catalog/category/product" className="breadcrumbs-link" exact>
                    Product
                  </NavLink>
                </li>
              </ul>
            </section>
            {
              infoLoading ? (
                <Loading />
              ) : infoError ? (
                <div>
                  {infoError}
                </div>
              ) : (
                <section className="product-container">
                  <div className="product-container-row">
                    {
                      productInfo.Data.ProductList.map((productInfo, index) => (
                        <div className="product-image">
                          <img src={productInfo.Photo} alt={productInfo.Description}/>
                        </div>
                      ))
                    }
                    <div className="product-information">
                      {
                        productInfo.Data.ProductList.map((productInfo, index) => (
                          <>
                            <div className="product-row">
                              <div className="product-title">
                                <div className="product-producer">
                                  {productInfo.Producer}
                                </div>
                                <div className="product-title-title">
                                  {productInfo.Symbol}
                                </div>
                                {
                                  productInfo.OriginalSymbol && (
                                    <div className="product-code">
                                      #
                                      {productInfo.OriginalSymbol}
                                    </div>
                                  )
                                }
                              </div>
                            </div>
                            <div className="product-row">
                              <div className="product-description">
                                <h5 className="paragraph-title">
                                  Description
                                </h5>
                                <p>
                                  {productInfo.Description}
                                </p>
                              </div>
                            </div>
                          </>
                        ))
                      }
                      <div className="product-row">
                        <div className="product-row-block">
                          <div className="product-add-to-cart">
                            <button className="button button-icon button-icon-text">
                              <div className="icon cart"></div>
                              Add to cart
                            </button>
                            {
                              productInfo.Data.ProductList.map((productInfo, index) => (
                                <input
                                  type="number"
                                  className="product-number"
                                  min={productInfo.MinAmount}
                                  value={amount}
                                  step={productInfo.Multiplicity}
                                  onChange={(event) => {
                                    setAmount(event.target.value)
                                  }}
                                />
                              ))
                            }
                            <div className="product-price">
                              <label>Total price:</label>
                              $
                              {ProductPrice()}
                            </div>
                          </div>
                          <div className="product-conditions">
                            {
                              productInfo.Data.ProductList.map((productInfo, index) => (
                                <table className="conditions">
                                  <tbody>
                                  <tr>
                                    <th>
                                      Min. amount:
                                    </th>
                                    <td>
                                      {productInfo.MinAmount}
                                    </td>
                                  </tr>
                                  {
                                    /*
                                      <tr>
                                        <th>
                                          In stock quantity:
                                        </th>
                                        <td>
                                          1300
                                        </td>
                                      </tr>
                                     */
                                  }
                                  <tr>
                                    <th>
                                      Multiplicity:
                                    </th>
                                    <td>
                                      {productInfo.Multiples}
                                    </td>
                                  </tr>
                                  </tbody>
                                </table>
                              ))
                            }
                          </div>
                        </div>
                        <div className="product-row-block">
                          <h5 className="product-row-block-title">
                            Price range
                          </h5>
                          {
                            pricesLoading ? (
                              <Loading />
                            ) : pricesError ? (
                              <div>
                                {pricesError}
                              </div>
                            ) : (
                              <>
                                <table className="price-range">
                                  <tbody>
                                  {
                                    productPrices.Data.ProductList.slice(0, value).map((productPrice) => (
                                      <>
                                        {
                                          productPrice.PriceList.map((price, index) => (
                                            <tr key={index}>
                                              <th>
                                                <div>
                                                  {price.Amount}
                                                  x
                                                </div>
                                              </th>
                                              <td>
                                                <div>
                                                  $
                                                  {price.PriceValue}
                                                </div>
                                              </td>
                                            </tr>
                                          ))
                                        }
                                      </>
                                    ))
                                  }
                                  </tbody>
                                </table>
                                {
                                  showButton && productPrices.Data.ProductList.length > value ? (
                                    <button className="link-more" onClick={() => {
                                      setValue(10);
                                      setShowButton(false)
                                    }}>
                                      Show more
                                      <div className="icon menu-arrow-bottom"></div>
                                    </button>
                                  ) : ''
                                }
                              </>
                            )
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="divider"></div>
                  <div className="product-container-row">
                    <div className="product-tabs-container">
                      <ul className="product-tabs-nav">
                        <li className="product-tabs-nav-item active" id="specifications">
                          Specifications
                        </li>
                        <li className="product-tabs-nav-item" id="technical-information">
                          Technical information
                        </li>
                        <li className="product-tabs-nav-item" id="additional-information">
                          Additional information
                        </li>
                      </ul>
                      <div className="product-tab-content">
                        <div className="product-tab-pane active" id="specifications-tab">
                          {
                            parametersLoading ? (
                              <Loading />
                            ) : parametersError ? (
                              <div>
                                {parametersError}
                              </div>
                            ) : (
                              <>
                                {
                                  productParameters.Data.ProductList.map((productParameter) => (
                                    <table className="specifications">
                                      <tbody>
                                        {
                                          productParameter.ParameterList.map((parameter, index) => (
                                            <tr key={index}>
                                              <th>
                                                <div>
                                                  {parameter.ParameterName}
                                                </div>
                                              </th>
                                              <td>
                                                <div>
                                                  {parameter.ParameterValue}
                                                </div>
                                              </td>
                                            </tr>
                                          ))
                                        }
                                      </tbody>
                                    </table>
                                  ))
                                }
                              </>
                            )
                          }
                        </div>
                        <div className="product-tab-pane" id="technical-information-tab">
                          Technical information
                        </div>
                        <div className="product-tab-pane" id="additional-information-tab">
                          Additional information
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              )
            }
          </main>
        </div>
      </div>
    </div>
  )
}
