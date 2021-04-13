import React, { useEffect, useState } from 'react'

export default function MainPage() {

    const [post, setPost] = useState();

    useEffect(() => {

        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': "*"
            },
            body: JSON.stringify({
                Token: 'a1dbf8d9dcbe22b39f85fc29ee76824738163c55348ae',
                ApiSignature: '9afc3d89fa3ace87c52f',
                Country: 'UA',
                Language: 'uk',
                CategoryId: '19'
            })
        };

        fetch('https://api.tme.eu/Products/GetCategories', requestOptions)
            .then(response => response.json())
            .then(data => setPost(data));

    }, []);

    console.log(post);

    return (
        <div className="container pt-5 pb-5">
            <div className="row">
                <div className="col-12">
                    <h1 className="mb-3">
                        Mainpage
                    </h1>
                    <table className="table table-dark">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First</th>
                                <th>Last</th>
                                <th>Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <td>Bismarck</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th>2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th>3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
