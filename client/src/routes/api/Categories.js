import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function CategoriesPage() {

    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true)
                const { data } = await axios.get('/api/categories');
                setCategories(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
            }
        }
        fetchProducts();
    }, []);
    
    console.log(categories);

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
                                        <div className="col-12">
                                            {
                                                categories.map((res) => (
                                                    <>
                                                        {
                                                            res.Data.CategoryTree.SubTree.map((category1, index) => (
                                                                <div>
                                                                    <h3 key={index}>
                                                                        {category1.Name}
                                                                    </h3>
                                                                    <ul>
                                                                        {
                                                                            category1.SubTree.map((category2, index) => (
                                                                                    <>
                                                                                        <li key={index}>
                                                                                            {category2.Name}
                                                                                        </li>
                                                                                        <ul>
                                                                                            {
                                                                                                category2.SubTree.map((category3, index) => (
                                                                                                    <>
                                                                                                        <li key={index}>
                                                                                                            {category3.Name}
                                                                                                        </li>
                                                                                                        <ul>
                                                                                                            {
                                                                                                                category3.SubTree.map((category4, index) => (
                                                                                                                        <>
                                                                                                                            <li key={index}>
                                                                                                                                {category4.Name}
                                                                                                                            </li>
                                                                                                                            <ul>
                                                                                                                                {
                                                                                                                                    category4.SubTree.map((category5, index) => (
                                                                                                                                            <li key={index}>
                                                                                                                                                {category5.Name}
                                                                                                                                            </li>
                                                                                                                                        )
                                                                                                                                    )
                                                                                                                                }
                                                                                                                            </ul>
                                                                                                                        </>
                                                                                                                    )
                                                                                                                )
                                                                                                            }
                                                                                                        </ul>
                                                                                                    </>
                                                                                                ))
                                                                                            }
                                                                                        </ul>
                                                                                    </>
                                                                                )
                                                                            )
                                                                        }
                                                                    </ul>
                                                                </div>
                                                            ))
                                                        }
                                                    </>
                                                    )
                                                )
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
