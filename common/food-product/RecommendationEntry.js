import React, { Component, PropTypes } from 'react';
import ProductNutrientDetails from './ProductNutrientDetails';

class RecommendationEntry extends Component {
  constructor(props) {
    super(props);
    this.showProductDetails = this.showProductDetails.bind(this);
  }

  showProductDetails(e) {
    e.preventDefault();
    this.props.showProductDetails(this.props.product.UPC);
  }

  render() {
    const { product, selectedProduct, basicInfo } = this.props;
    return (
      <div>
        <h3 onClick={this.showProductDetails}>{product.UPC}{product.name} Recommendation for: {product.quality} {product.nutrient}</h3>
        {selectedProduct !== product.UPC ? null :
        (<div>
          <div>
            <p>Name: {product.name}</p>
            <p>Brand: {product.brand}</p>
            <p>Barcode: {product.UPC}</p>
          </div>
          {Object.keys(product).map((key) => {
            return (key === 'name' || key === 'brand' || key === 'UPC' || key === 'nutrient' || key === 'quality') ? null :
            (<ProductNutrientDetails
              key={key}
              comparedLevel={basicInfo[key]}
              nutrient={key}
              nutrientLevel={product[key]}
            />);
          })}
        </div>)}
      </div>
    );
  }
}

RecommendationEntry.propTypes = {
  product: PropTypes.object.isRequired,
  showProductDetails: PropTypes.func.isRequired,
  selectedProduct: PropTypes.number.isRequired,
  basicInfo: PropTypes.object.isRequired
};

export default RecommendationEntry;
