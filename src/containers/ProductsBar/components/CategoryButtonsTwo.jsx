import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import Select from "react-select";
import { apaSucuri, vinuri, bere, aperitiveSpirtoase, cafea } from "./data";

const groupStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};
const groupBadgeStyles = {
  backgroundColor: "#EBECF0",
  borderRadius: "2em",
  color: "#172B4D",
  display: "inline-block",
  fontSize: 12,
  fontWeight: "normal",
  lineHeight: "1",
  minWidth: 1,
  padding: "0.16666666666667em 0.5em",
  textAlign: "center",
};

const formatGroupLabel = (data) => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
);

const CategoryButtons = () => {
  return (
    <Col md={12} lg={12}>
      <Card>
        <CardBody>
          <Row>
            <Col md={12} lg={3}>
              <Select
                isMulti
                name="colors"
                options={apaSucuri}
                formatGroupLabel={formatGroupLabel}
                className="basic-multi-select"
                classNamePrefix="select"
                placeholder="Apa si Sucuri"
              />
            </Col>
            <Col md={12} lg={3}>
              <Select
                isMulti
                name="colors"
                options={vinuri}
                formatGroupLabel={formatGroupLabel}
                className="basic-multi-select"
                classNamePrefix="select"
                placeholder="Vinuri"
              />
            </Col>
            <Col md={12} lg={3}>
              <Select
                isMulti
                name="colors"
                options={bere}
                formatGroupLabel={formatGroupLabel}
                className="basic-multi-select"
                classNamePrefix="select"
                placeholder="Bere"
              />
            </Col>
            <Col md={12} lg={3}>
              <Select
                isMulti
                name="colors"
                options={aperitiveSpirtoase}
                formatGroupLabel={formatGroupLabel}
                className="basic-multi-select"
                classNamePrefix="select"
                placeholder="Aperitive Spirtoase"
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col md={12} lg={3}>
              <Select
                isMulti
                name="colors"
                options={cafea}
                formatGroupLabel={formatGroupLabel}
                className="basic-multi-select"
                classNamePrefix="select"
                placeholder="Cafea"
              />
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CategoryButtons;
