import React from 'react'

export default function SearchPage() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-6">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search for a product.." />
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="button">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
