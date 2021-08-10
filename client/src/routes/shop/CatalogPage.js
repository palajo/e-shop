import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { listCategory } from '../../redux/actions/categoryActions';
import Loading from '../../components/utils/Loading';

export default function CatalogPage(props) {

  const dispatch = useDispatch();
  const categoryId = props.match.params.id;

  const categoryList = useSelector((state) => state.categoryList);
  const { loading, error, categories } = categoryList;

  useEffect(() => {
    dispatch(listCategory(categoryId));
  }, [dispatch, categoryId]);

  const [showSubcategories, setShowSubcategories] = useState(5);

  const handleShowSubcategories = (index, count) => {
    setShowSubcategories(count)
  };

  return (
    <>
      {
        loading ? (
          <Loading
            fullheight
          />
        ) : error ? (
          <div>
            {error}
          </div>
        ) : (
          <div id="wrapper">
            <div className="container">
              <div className="row">
                <main className="full-width">
                  <section className="breadcrumbs-container">
                    <ul className="breadcrumbs">
                      <li className="breadcrumbs-item">
                        <NavLink to="/" className="breadcrumbs-link" exact>
                          Mainpage
                        </NavLink>
                      </li>
                      <li className="breadcrumbs-item">
                        <NavLink to={`/catalog/${categoryId}`} className="breadcrumbs-link" exact>
                          {categories.Data.CategoryTree.Name}
                        </NavLink>
                      </li>
                    </ul>
                  </section>
                  <section className="page-container">
                    <div className="page-container-header">
                      <div className="page-container-title">
                        {
                          categories.Data.CategoryTree.Name
                        }
                      </div>
                    </div>
                    <div className="page-container-body no-padding">
                      {
                        categories.Data.CategoryTree.SubTree.map((subcategories, index) => (
                          <div className="catalog-block" key={index}>
                            <div className="catalog-image">
                              <NavLink to={`/catalog/${subcategories.ParentId}/${subcategories.Id}`}>
                                <img src={subcategories.Thumbnail} alt={subcategories.Name} />
                              </NavLink>
                            </div>
                            <div className="catalog-title">
                              <NavLink to={`/catalog/${subcategories.ParentId}/${subcategories.Id}`}>
                                {subcategories.Name}
                              </NavLink>
                            </div>
                            <div className="catalog-subcategories">
                              <ul className="subcategories">
                                {
                                  subcategories.SubTree.slice(0, 5).map((subcategories, index) => (
                                    <li className="subcategories-item" key={index}>
                                      <NavLink to={`/catalog/${subcategories.ParentId}/${subcategories.Id}`} className="subcategories-link">
                                        {subcategories.Name}
                                      </NavLink>
                                    </li>
                                  ))
                                }
                              </ul>
                            </div>
                          </div>
                        ))
                      }
                    </div>
                  </section>
                </main>
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}
