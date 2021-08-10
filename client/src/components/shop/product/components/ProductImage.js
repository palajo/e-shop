import React from 'react';
import ProductImagePlaceholder from '../../../../assets/images/products/no-image.svg';

function ProductImage({ photo, description }) {
  return (
    <div className="product-image">
      {
        photo ? (
          <img src={photo} alt={description}/>
        ) : (
          <img src={ProductImagePlaceholder} alt={description} />
        )
      }
    </div>
  );
}

export default ProductImage;