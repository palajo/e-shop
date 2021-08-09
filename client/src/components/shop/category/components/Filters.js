import React from 'react';
import filters from '../../../api/filters';
import { CSSTransition } from 'react-transition-group';
import FiltersModal from '../FiltersModal';

function Filters({ width, showFilter, toggleShowFilter, showFiltersModal, toggleFiltersModal }) {
  return (
    <>
      {
        width >= 1024 ? (
          <div className="category-container-filters">
            {
              filters.map((filter, index) => (
                <div className={showFilter[index] ? 'filters-block hidden' : 'filters-block'}
                     key={index}>
                  <button className="filters-button" onClick={() => toggleShowFilter(index)}>
                    {filter.filterTitle} <span>({filter.filterQuantity})</span>
                  </button>
                  <CSSTransition
                    in={index === 0 ? !showFilter[index] : showFilter[index]}
                    timeout={400}
                    classNames="filters-animation"
                    unmountOnExit
                    key={index}
                  >
                    <div className="filters-container">
                      <div className="filters-search">
                        <input type="text" placeholder="Search.." className="filter-search-input"/>
                      </div>
                      <ul className="filters-nav">
                        {
                          filter.filters.map((subfilter, index) => (
                            <li className="filters-nav-item" key={index}>
                              <div className="filters-nav-link">
                                <input type="checkbox" className="custom-checkbox"
                                       name="checkbox-example"
                                       id={subfilter.filterTitle + index}/>
                                <label
                                  htmlFor={subfilter.filterTitle + index}>{subfilter.filterTitle}<span>({subfilter.filterQuantity})</span></label>
                              </div>
                            </li>
                          ))
                        }
                      </ul>
                    </div>
                  </CSSTransition>
                </div>
              ))
            }
          </div>
        ) : (
          <FiltersModal
            showFiltersModal={showFiltersModal}
            toggleFiltersModal={toggleFiltersModal}
            showFilter={showFilter}
            toggleShowFilter={toggleShowFilter}
          />
        )
      }
    </>
  );
}

export default Filters;