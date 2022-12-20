import React from 'react';
import overview_content from 'static/text/project-overview';

const Product = () => {
  return (
    <>
      <h1>Gonna be the product overview page</h1>
      {overview_content.map((content, index) => {
        return (
          <div>
            <h2>{content.title}</h2>
            <p>{content.paragraph}</p>
          </div>
        );
      })}
    </>
  );
};

export default Product;
