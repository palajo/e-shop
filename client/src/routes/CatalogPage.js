import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { listCatalog } from '../redux/actions/catalogActions';

export default function CatalogPage() {

    const dispatch = useDispatch();

    const catalogList = useSelector((state) => state.catalogList);
    const { loading, error, catalog } = catalogList;

    useEffect(() => {
        dispatch(listCatalog());
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
                                All categories
                            </h2>
                            <p>
                                Status:
                                {
                                    catalog.map((data) => (
                                            <span className="ml-1">
                                                {data.Status}
                                            </span>
                                        )
                                    )
                                }
                            </p>
                        </div>
                        {
                            catalog.map((data) => (
                                    <>
                                        {
                                            data.Data.CategoryTree.SubTree.map((categoryOne) => (
                                                <div className="col-12 mb-5">
                                                    <h3 className="mb-4">
                                                        {categoryOne.Name}
                                                    </h3>
                                                    <nav>
                                                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                                            <a className="nav-item nav-link active" id={`nav-depth-1-tab-` + categoryOne.Id} data-toggle="tab" href={`#nav-depth-1-` + categoryOne.Id} role="tab" aria-controls={`#nav-depth-1-` + categoryOne.Id} aria-selected="true">
                                                                Depth 2
                                                            </a>
                                                            <a className="nav-item nav-link" id={`nav-depth-2-tab-` + categoryOne.Id} data-toggle="tab" href={`#nav-depth-2-` + categoryOne.Id} role="tab" aria-controls={`#nav-depth-2-` + categoryOne.Id} aria-selected="false">
                                                                Depth 3
                                                            </a>
                                                            <a className="nav-item nav-link" id={`nav-depth-3-tab-` + categoryOne.Id} data-toggle="tab" href={`#nav-depth-3-` + categoryOne.Id} role="tab" aria-controls={`#nav-depth-3-` + categoryOne.Id} aria-selected="false">
                                                                Depth 4
                                                            </a>
                                                            <a className="nav-item nav-link" id={`nav-depth-4-tab-` + categoryOne.Id} data-toggle="tab" href={`#nav-depth-4-` + categoryOne.Id} role="tab" aria-controls={`#nav-depth-4-` + categoryOne.Id} aria-selected="false">
                                                                Depth 5
                                                            </a>
                                                        </div>
                                                    </nav>
                                                    <div className="tab-content" id="nav-tabContent">
                                                        <div className="tab-pane fade show active" id={`nav-depth-1-` + categoryOne.Id} role="tabpanel" aria-labelledby={`nav-depth-1-tab-` + categoryOne.Id}>
                                                            <ul className="pt-3">
                                                                {
                                                                    categoryOne.SubTree.map((categoryTwo) => (
                                                                            <li>
                                                                                {categoryTwo.Name}
                                                                            </li>
                                                                        )
                                                                    )
                                                                }
                                                            </ul>
                                                        </div>
                                                        <div className="tab-pane fade" id={`nav-depth-2-` + categoryOne.Id} role="tabpanel" aria-labelledby={`nav-depth-2-tab-` + categoryOne.Id}>
                                                            <ul className="pt-3">
                                                                {
                                                                    categoryOne.SubTree.map((categoryTwo) => (
                                                                            <>
                                                                                {
                                                                                    categoryTwo.SubTree.map((categoryThree) => (
                                                                                            <li>
                                                                                                {categoryThree.Name}
                                                                                            </li>
                                                                                        )
                                                                                    )
                                                                                }
                                                                            </>
                                                                        )
                                                                    )
                                                                }
                                                            </ul>
                                                        </div>
                                                        <div className="tab-pane fade" id={`nav-depth-3-` + categoryOne.Id} role="tabpanel" aria-labelledby={`nav-depth-3-tab-` + categoryOne.Id}>
                                                            <ul className="pt-3">
                                                                {
                                                                    categoryOne.SubTree.map((categoryTwo) => (
                                                                            <>
                                                                                {
                                                                                    categoryTwo.SubTree.map((categoryThree) => (
                                                                                            <>
                                                                                                {
                                                                                                    categoryThree.SubTree.map((categoryFour) => (
                                                                                                            <li>
                                                                                                                {categoryFour.Name}
                                                                                                            </li>
                                                                                                        )
                                                                                                    )
                                                                                                }
                                                                                            </>
                                                                                        )
                                                                                    )
                                                                                }
                                                                            </>
                                                                        )
                                                                    )
                                                                }
                                                            </ul>
                                                        </div>
                                                        <div className="tab-pane fade" id={`nav-depth-4-` + categoryOne.Id} role="tabpanel" aria-labelledby={`nav-depth-4-tab-` + categoryOne.Id}>
                                                            <ul className="pt-3">
                                                                {
                                                                    categoryOne.SubTree.map((categoryTwo) => (
                                                                            <>
                                                                                {
                                                                                    categoryTwo.SubTree.map((categoryThree) => (
                                                                                            <>
                                                                                                {
                                                                                                    categoryThree.SubTree.map((categoryFour) => (
                                                                                                            <>
                                                                                                                {
                                                                                                                    categoryFour.SubTree.map((categoryFive) => (
                                                                                                                            <li>
                                                                                                                                {categoryFive.Name}
                                                                                                                            </li>
                                                                                                                        )
                                                                                                                    )
                                                                                                                }
                                                                                                            </>
                                                                                                        )
                                                                                                    )
                                                                                                }
                                                                                            </>
                                                                                        )
                                                                                    )
                                                                                }
                                                                            </>
                                                                        )
                                                                    )
                                                                }
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                )
                                            )
                                        }
                                    </>
                                )
                            )
                        } 
                        </>
                    )
                }
            </div>
        </div>
    )
}
