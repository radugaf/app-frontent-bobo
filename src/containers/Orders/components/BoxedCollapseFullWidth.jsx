import { Button, Container, Row, Card, CardBody, Col } from "reactstrap";
import Collapse from "../../../shared/components/Collapse";
import MinimalCollapse from "./MinimalCollapse";
import MatTableImport from "./Mattableimport";

// Edesia
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { GetSupplierOrder } from "../../../redux/actions/products";

const BoxedCollapseFullWidth = ({ GetSupplierOrder, orders }) => {
  const [showOne, setShowOne] = useState(true);
  const [showTwo, setShowTwo] = useState(false);

  useEffect(() => {
    GetSupplierOrder();
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <CardBody>
              <Button
                onClick={() => setShowOne(!showOne)}
                color="secondary"
                size="sm"
                outline="true"
              >
                Comenzi in asteptare
              </Button>
              <Button
                onClick={() => setShowOne(!showOne)}
                color="secondary"
                size="sm"
                outline="true"
              >
                Istoric comenzi
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
      {showOne ? (
        <Row>
          <Col md={12} lg={6}>
            <Card>
              <CardBody>
                <div className="card__title">
                  <h3 className="bold-text">Comenzi cu livrare personala</h3>
                </div>
                <Collapse>
                  {Object.keys(orders) &&
                    Object.keys(orders).map((key) => (
                      <MinimalCollapse keys={key} data={orders} />
                    ))}
                </Collapse>
              </CardBody>
            </Card>
          </Col>
          <Col md={12} lg={6}>
            <Card>
              <CardBody>
                <div className="card__title">
                  <h3 className="bold-text">Comenzi cu livrare prin curier</h3>
                </div>
                {Object.keys(orders) &&
                  Object.keys(orders).map((key) => (
                    <MatTableImport keys={key} data={orders} />
                  ))}
              </CardBody>
            </Card>
          </Col>
        </Row>
      ) : (
        <Row>
          <Col md={12} lg={12}>
            <Card>
              <CardBody>
                <div className="card__title">
                  <h3 className="bold-text">Istoric Comenzi</h3>
                </div>
                {Object.keys(orders) &&
                  Object.keys(orders).map((key) => (
                    <MatTableImport keys={key} data={orders} />
                  ))}
              </CardBody>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};

const mapStateToProps = (state) => {
  console.log({ state });
  return {
    carts: state.products.cartsDetails,
    orders: state.products.restaurantOrdersDetails,
    user: state.products.user,
  };
};
export default connect(mapStateToProps, {
  GetSupplierOrder,
})(BoxedCollapseFullWidth);
