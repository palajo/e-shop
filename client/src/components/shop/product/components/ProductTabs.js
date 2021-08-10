import React, { useState } from 'react';
import ProductSpecifications from './tabs/ProductSpecifications';
import ProductTechnicalInfo from './tabs/ProductTechnicalInfo';
import ProductAdditionalInfo from './tabs/ProductAdditionalInfo';

function ProductTabs({ productId }) {

  const [tab, setTab] = useState('Specifications');

  const tabsSwitch = () => {
    switch (tab) {
      case 'Specifications':
        return <ProductSpecifications productId={productId} />

      case 'Technical information':
        return <ProductTechnicalInfo productId={productId} />

      case 'Additional information':
        return <ProductAdditionalInfo productId={productId} />

      default:
        return 'default case'
    }
  };

  const handleTabSwitch = (title) => {
    setTab(title);
  };

  return (
    <div className="product-container-row">
      <div className="product-tabs-container">
        <ul className="product-tabs-nav">
          <li
            className={`product-tabs-nav-item ${tab === 'Specifications' ? 'active' : null}`}
            onClick={() => handleTabSwitch('Specifications')}
          >
            Specifications
          </li>
          <li
            className={`product-tabs-nav-item ${tab === 'Technical information' ? 'active' : null}`}
            onClick={() => handleTabSwitch('Technical information')}
          >
            Technical information
          </li>
          <li
            className={`product-tabs-nav-item ${tab === 'Additional information' ? 'active' : null}`}
            onClick={() => handleTabSwitch('Additional information')}
          >
            Additional information
          </li>
        </ul>
        <div className="product-tab-content">
          <div className="product-tab-pane">
            {tabsSwitch()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductTabs;