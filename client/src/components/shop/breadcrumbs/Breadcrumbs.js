import React, { useEffect } from 'react';
import { NavLink } from "react-router-dom";

function Breadcrumbs(props) {

  console.log(props.categoryId);

  return (
    <section className="breadcrumbs-container">
      <ul className="breadcrumbs">
        <li className="breadcrumbs-item">
          <NavLink to="/" className="breadcrumbs-link" exact>
            Homepage
          </NavLink>
        </li>
        <li className="breadcrumbs-item">
          <NavLink to={`/catalog/${props.parentCategoryId}`} className="breadcrumbs-link" exact>
            Catalog
          </NavLink>
        </li>
        <li className="breadcrumbs-item">
          <NavLink to={`/catalog/${props.parentCategoryId}/${props.categoryId}`}  className="breadcrumbs-link" exact>
            Category
          </NavLink>
        </li>
      </ul>
    </section>
  );
}

export default Breadcrumbs;