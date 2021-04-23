import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { listCategory } from '../redux/actions/categoryActions';

export default function CategoryPage() {

    const dispatch = useDispatch();

    const categoryList = useSelector((state) => state.categoryList);
    const { loading, error, categories } = categoryList;

    useEffect(() => {
        dispatch(listCategory());
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
                                    Category ID #112818
                                </h2>
                                <p>
                                    Status:
                                    {
                                        categories.map((data) => (
                                                <span className="ml-1">
                                                    {data.Status}
                                                </span>
                                            )
                                        )
                                    }
                                </p>
                            </div>
                            <div className="col-12 mb-5">
                                <h2 className="mb-3">
                                    Category Products
                                </h2>
                                <table className="table table-dark">
                                    <tbody>
                                        <tr>
                                            <th>
                                                Product Image
                                            </th>
                                            <th>
                                                Product Symbol
                                            </th>
                                            <th>
                                                Product Description 
                                            </th>
                                        </tr>
                                        {
                                            categories.map((data) => (
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
