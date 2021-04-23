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
                <div className="col-12">
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
                            <table className="table table-dark">
                                <tbody>
                                    <tr>
                                        <th>
                                            Title
                                        </th>
                                        <td>
                                            Value
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
