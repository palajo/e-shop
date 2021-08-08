import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {listCatalog} from "../../../redux/actions/catalogActions";
import {NavLink} from "react-router-dom";
import Loading from "../../utils/Loading";

function Breadcrumbs({ categoryId, categoryDepth }) {
  // fetching API data
  const dispatch = useDispatch();

  const catalogList = useSelector((state) => state.catalogList);
  const { loading, error, catalog } = catalogList;

  useEffect(() => {
    dispatch(listCatalog());
  }, [dispatch]);

  console.log(catalog);

  const filteredCategory = () => {
    for (let i = 0; i < 3; i++) {
      return 'Hello world';
    }
  }

  return (
    <section className="breadcrumbs-container">
      {
        loading ? (
          <Loading />
        ) : error ? (
          <>{error}</>
        ) : (
          <>
            {filteredCategory()}
            <ul className="breadcrumbs">
              <li className="breadcrumbs-item">
                <NavLink to="/" className="breadcrumbs-link" exact>
                  Homepage
                </NavLink>
              </li>
              <li className="breadcrumbs-item">
                <NavLink to={`/catalog/`} className="breadcrumbs-link" exact>
                  Catalog
                </NavLink>
              </li>
              <li className="breadcrumbs-item">
                <NavLink to={`/catalog/`}  className="breadcrumbs-link" exact>
                  Category
                </NavLink>
              </li>
            </ul>
          </>
        )
      }

    </section>
  );
}

export default Breadcrumbs;