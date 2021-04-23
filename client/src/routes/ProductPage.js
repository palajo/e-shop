import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { listProducts } from '../redux/actions/productActions';

export default function ProductPage() {
    const dispatch = useDispatch();

    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    return (
        <div className="container">
            <div className="row">
                {
                    loading ? (
                        <div>
                            Loading...
                        </div>
                    ) : error ? (
                        <div>
                            {error}
                        </div>
                    ) : (
                        <>
                            <div className="col-12 mb-5 text-center">
                                <h2 className="mb-3">
                                    Product #DIGI-ME
                                </h2>
                                <p>
                                    Status:
                                    {
                                        products.map((data) => (
                                                <span className="ml-1">
                                                    {data.Status}
                                                </span>
                                            )
                                        )
                                    }
                                </p>
                            </div>
                            <div className="col-12 mb-5">
                                <table className="table table-dark">
                                    <tbody>
                                        <tr>
                                            <th>
                                                Product Symbol
                                            </th>
                                            <th>
                                                Product Description
                                            </th>
                                            <th>
                                                Product Prices 
                                            </th>
                                        </tr>
                                        {
                                            products.map((data) => (
                                                    <>
                                                        {
                                                            data.Data.ProductList.map((product) => (
                                                                    <>
                                                                        <tr>
                                                                            <td>
                                                                                <img src={product.Photo} height="100px" />
                                                                            </td>
                                                                            <td>
                                                                                {product.Symbol}
                                                                            </td>
                                                                            <td>
                                                                                {product.Description}
                                                                            </td>
                                                                        </tr>
                                                                    </>
                                                                )
                                                            )
                                                        }
                                                    </>
                                                )
                                            )
                                        }
                                        
                                    </tbody>
                                </table>
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    )
}
