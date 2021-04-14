import React, { useState } from 'react';
import {
  Card, CardBody, Col, ButtonToolbar,
} from 'reactstrap';
import HeartIcon from 'mdi-react/HeartIcon';
import StarIcon from 'mdi-react/StarIcon';
import StarOutlineIcon from 'mdi-react/StarOutlineIcon';
import { Link } from 'react-router-dom';
import ProductGallery from './ProductGallery';
import images from './imgs';
import ProductTabs from './ProductTabs';
import ColorSelect from './ColorSelect';

const ProductCard = () => {
  const [color, setColor] = useState('white');

  const onLike = () => {
    if (color === 'white') {
      setColor('#70bbfd');
    } else {
      setColor('white');
    }
  };

  return (
    <Col md={12} lg={12}>
      <Card>
        <CardBody>
          <div className="product-card">
            <ProductGallery images={images} />
            <div className="product-card__info">
              <h3 className="product-card__title">Product Name</h3>
              
              <h1 className="product-card__price">17.19 RON</h1>
              <p className="typography-message">
               Description Here
              </p>
              <form className="form product-card__form">
               
                <ButtonToolbar className="product-card__btn-toolbar">
                  <Link className="btn btn-success" to="/e-commerce/cart">Add to cart</Link>
             
                </ButtonToolbar>
                
              </form>
              <br />
              <br />
              <ProductTabs />
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProductCard;
