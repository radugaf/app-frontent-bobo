import { Card, CardBody, Col } from "reactstrap";
import Collapse from "../../../shared/components/Collapse";
import MatTable from "./MatTable";

// Edesia
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { GetInquires } from "../../../redux/actions/products";
import Panel from "../../../shared/components/Panel";

const BoxedCollapseFullWidth = ({ inquires, GetInquires }) => {
  console.log({ inquires });
  useEffect(() => {
    GetInquires();
  }, []);

  return (
    <>
      <Col md={12} lg={12}>
        <Card>
          <CardBody>
            <div className="card__title">
              <h3 className="bold-text">🔍 Cereri de Oferta de la:</h3>
            </div>

            {Object.keys(inquires) &&
              Object.keys(inquires).map((key) => (
                <Collapse title={key} className="with-shadow">
                  <MatTable data={inquires[key]} />
                </Collapse>
              ))}
          </CardBody>
        </Card>
      </Col>

      <Col md={12} lg={6}>
        {Object.keys(inquires) &&
          Object.keys(inquires).map((key) => (
            <Panel xs={12} md={12} lg={12} divider title={key} label="nou">
              <MatTable data={inquires[key]} />
            </Panel>
          ))}
      </Col>
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
