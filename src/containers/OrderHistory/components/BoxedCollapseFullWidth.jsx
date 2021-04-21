import { Button, Container, Row, Card, CardBody, Col } from "reactstrap";
import Collapse from "../../../shared/components/Collapse";
import MinimalCollapse from "./MinimalCollapse";
import MatTableImport from "./Mattableimport";
import DataReactTable from "./DataReactTable";
import CreateTableData from "./CreateData";

// Edesia
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { GetRestaurantOrder } from "../../../redux/actions/products";

const BoxedCollapseFullWidth = ({ GetRestaurantOrder, orders }) => {
  const [showOne, setShowOne] = useState(true);
  const [showTwo, setShowTwo] = useState(false);

  const reactTableData = CreateTableData();



  useEffect(() => {
    GetRestaurantOrder();
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
                Receptie Marfa
              </Button>
              <Button
            
       onClick={() => setShowOne(!showOne)}
                color="secondary"
                size="sm"
                outline="true"
              >
                Order history archive
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
                  <h3 className="bold-text">📦 Receptie Marfa</h3>
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
                  <h3 className="bold-text">📦 Receptie Marfa 2</h3>
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
                <h3 className="bold-text">📦 Receptie Marfa 2</h3>
              </div>
              <DataReactTable reactTableData={reactTableData} />
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
  GetRestaurantOrder,
})(BoxedCollapseFullWidth);
