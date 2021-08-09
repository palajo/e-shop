import React from 'react';
import { NavLink } from 'react-router-dom';

function Pagination() {
  return (
    <section className="pagination-container">
      <ul className="pagination">
        <li className="pagination-item">
          <NavLink to="/catalog/category" className="pagination-link" exact>
            1
          </NavLink>
        </li>
        <li className="pagination-item">
          <NavLink to="/" className="pagination-link" exact>
            2
          </NavLink>
        </li>
        <li className="pagination-item">
          <NavLink to="/" className="pagination-link" exact>
            3
          </NavLink>
        </li>
        <li className="pagination-item">
          <NavLink to="/" className="pagination-link" exact>
            ...
          </NavLink>
        </li>
        <li className="pagination-item">
          <NavLink to="/" className="pagination-link" exact>
            13
          </NavLink>
        </li>
        <li className="pagination-item">
          <NavLink to="/" className="pagination-link" exact>
            14
          </NavLink>
        </li>
      </ul>
    </section>
  );
}

export default Pagination;