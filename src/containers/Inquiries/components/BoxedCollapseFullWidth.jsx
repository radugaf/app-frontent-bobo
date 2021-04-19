import Collapse from "../../../shared/components/Collapse";
import MatTable from "./MatTable";
import { Button, Container, Row, Card, CardBody, Col } from "reactstrap";

// Edesia
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { GetInquires } from "../../../redux/actions/products";
import Panel from "../../../shared/components/Panel";

const BoxedCollapseFullWidth = ({ inquires, GetInquires }) => {
  console.log({ inquires });
  useEffect(() => {
    GetInquires();
  }, []);

  const [showOne, setShowOne] = useState(true);
  const [showTwo, setShowTwo] = useState(false);

  return (
    <>
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
                  Cereri de oferta
                </Button>
                <Button
                  onClick={() => setShowOne(!showOne)}
                  color="secondary"
                  size="sm"
                  outline="true"
                >
                  Istoric cereri de oferta
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
                    <h3 className="bold-text">Cereri de oferta</h3>
                  </div>
                  {Object.keys(inquires) &&
                    Object.keys(inquires).map((key) => (
                      <MatTable data={inquires[key]} />
                    ))}
                </CardBody>
              </Card>
            </Col>
            <Col md={12} lg={6}>
              <Card>
                <CardBody>
                  <div className="card__title">
                    <h3 className="bold-text">Cereri de oferta 2</h3>
                  </div>
                  <Panel
                    xs={12}
                    md={12}
                    lg={12}
                    divider
                    title="Element Divider Panel"
                    label="nou"
                  >
                    <p className="typography-message">
                      Folly words widow one downs few age every seven. If miss
                      part by fact he park just shew. Discovered had get
                      considered projection who favourable. Necessary up
                      knowledge it tolerably. Unwilling departure education is
                      be dashwoods or an. Use off agreeable law unwilling sir
                      deficient curiosity instantly.
                    </p>
                  </Panel>
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
                    <h3 className="bold-text">Istoric Cereri de oferta</h3>
                  </div>
                  {Object.keys(inquires) &&
                    Object.keys(inquires).map((key) => (
                      <MatTable data={inquires[key]} />
                    ))}
                </CardBody>
              </Card>
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log({ state });
  return {
    inquires: state.products.inquiredDetails,
    user: state.products.user,
  };
};

export default connect(mapStateToProps, {
  GetInquires,
})(BoxedCollapseFullWidth);
