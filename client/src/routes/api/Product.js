import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function ProductPage() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true)
                const { data } = await axios.get('/api/products');
                setProducts(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
            }
        }
        fetchProducts();
    }, []);
    
    console.log(products);

    return (
        <div>
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
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-4">
                                            {
                                                products.map((res) => (
                                                    <>
                                                        <table className="table table-dark">
                                                            <thead>
                                                                <tr>
                                                                    <th>
                                                                        Symbol
                                                                    </th>
                                                                    <th>
                                                                        Unit
                                                                    </th>
                                                                    <th>
                                                                        VatRate
                                                                    </th>
                                                                    <th>
                                                                        VatType
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                            {
                                                                res.Data.ProductList.map((product) => (
                                                                    <tr>
                                                                        <td>{product.Symbol}</td>
                                                                        <td>{product.Unit}</td>
                                                                        <td>{product.VatRate}</td>
                                                                        <td>{product.VatType}</td>
                                                                    </tr>
                                                                ))
                                                            }
                                                            </tbody>
                                                        </table>
                                                        {
                                                            res.Data.ProductList.map((product) => (
                                                                <table className="table table-dark">
                                                                    <thead>
                                                                        <tr>
                                                                            <th>
                                                                                Amount
                                                                            </th>
                                                                            <th>
                                                                                PriceValue
                                                                            </th>
                                                                            <th>
                                                                                PriceBase
                                                                            </th>
                                                                            <th>
                                                                                Special
                                                                            </th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                    {
                                                                    product.PriceList.map((price) => (
                                                                        <tr>
                                                                            <td>
                                                                                {price.Amount}
                                                                            </td>
                                                                            <td>
                                                                                {price.PriceValue}
                                                                            </td>
                                                                            <td>
                                                                                {price.PriceBase}
                                                                            </td>
                                                                            <td>
                                                                                {price.Special}
                                                                            </td>
                                                                        </tr>
                                                                        ))
                                                                    }
                                                                    </tbody>
                                                                </table>
                                                            ))
                                                        }
                                                    </>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    )
}
