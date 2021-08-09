import React from 'react';
import SubcategoryBlock from '../SubcategoryBlock';

function Subcategories({ categories }) {
  return (
    <>
      {
        categories.Data.CategoryTree.SubTree && categories.Data.CategoryTree.SubTree.length > 0 && (
          <section className="subcategories-container">
            {
              categories.Data.CategoryTree.SubTree.map((subcategories, index) => (
                <SubcategoryBlock
                  key={index}
                  parentCategory={subcategories.ParentId}
                  categoryId={subcategories.Id}
                  image={subcategories.Thumbnail}
                  alt={subcategories.Name}
                  title={subcategories.Name}
                />
              ))
            }
          </section>
        )
      }
    </>
  );
}

export default Subcategories;