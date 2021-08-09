import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listCategory } from '../../redux/actions/categoryActions';
import CategoryProducts from '../../components/shop/category/CategoryProducts';
import Loading from '../../components/utils/Loading';
import Breadcrumbs from "../../components/shop/breadcrumbs/Breadcrumbs";
import Pagination from '../../components/shop/category/components/Pagination';
import Subcategories from '../../components/shop/category/components/Subcategories';
import Filters from '../../components/shop/category/components/Filters';

export default function CategoryPage(props) {

  const categoryId = props.match.params.categoryId;
  const parentCategoryId = props.match.params.parentCategoryId;

  // fetching category data
  const dispatch = useDispatch();

  const categoryList = useSelector((state) => state.categoryList);
  const { loading, error, categories } = categoryList;

  useEffect(() => {
    dispatch(listCategory(categoryId));
  }, [categoryId]);


  // listen to screen width
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);


  // filters sidebar
  const [showFilter, setShowFilter] = useState(false);

  const toggleShowFilter = (index) => setShowFilter(showFilter => ({
    ...showFilter,
    [index]: !showFilter[index]
  }));


  // filters modal
  const [showFiltersModal, setShowFiltersModal] = useState(false);

  const toggleFiltersModal = () => {
    setShowFiltersModal(!showFiltersModal);
  };


  return (
    <div id="wrapper">
      <div className="container">
        <div className="row">
          <main className="full-width">
            {
              loading ? (
                <Loading />
              ) : error ? (
                <div>
                  {error}
                </div>
              ) : (
                <>
                  <Breadcrumbs categoryId={categoryId} parentCategoryId={parentCategoryId} />
                  <Subcategories categories={categories} />
                  <section className="category-container">
                    <div className="category-container-header">
                      <div className="category-container-title">
                        {
                          categories.Data.CategoryTree.Name
                        }
                      </div>
                      {
                        width <= 1023 ? (
                          <div className="category-container-toggle-filters">
                            <button className="button button-icon button-icon-text" onClick={toggleFiltersModal}>
                              <div className="icon filter"></div>
                              Filters
                            </button>
                          </div>
                        ) : (
                          <div className="category-container-sort">
                            <div className="sort-block">
                              <select name="show-on-page" id="show-on-page" className="show-on-page">
                                <option value="relevant">Most Relevant</option>
                                <option value="popular">Most Popular</option>
                                <option value="hightolow">Price (from high to low)</option>
                                <option value="lowtohigh">Price (from low to high)</option>
                              </select>
                            </div>
                            <div className="sort-block">
                              <select name="show-on-page" id="show-on-page" className="show-on-page">
                                <option value="15">15</option>
                                <option value="25">25</option>
                                <option value="45">45</option>
                              </select>
                            </div>
                          </div>
                        )
                      }
                    </div>
                    <div className="category-container-body">
                      <Filters
                        width={width}
                        showFilter={showFilter}
                        toggleShowFilter={toggleShowFilter}
                        showFiltersModal={showFiltersModal}
                        toggleFiltersModal={toggleFiltersModal}
                      />
                      <CategoryProducts categoryId={categoryId} />
                    </div>
                  </section>
                  <Pagination />
                </>
              )
            }
          </main>
        </div>
      </div>
    </div>
  )
}
