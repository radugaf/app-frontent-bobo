import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import Select from "react-select";
import {
  legume,
  groupedOptions,
  groupedOptions2,
  groupedOptions3,
  groupedOptions4,
  groupedOptions5,
  groupedOptions6,
  groupedOptions7,
  groupedOptions8,
  branzeturi,
  generale,
  fructe,
  carne,
  mezeluri,
} from "./data";

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
            <Col md={12} lg={12}>
              <Select
                defaultValue={[legume[2], fructe[3]]}
                isMulti
                name="colors"
                options={groupedOptions}
                formatGroupLabel={formatGroupLabel}
                className="basic-multi-select"
                classNamePrefix="select"
                placeholder="Fructe si Legume"
              />
            </Col>
            {/* <Col md={12} lg={3}>
              <Select
                defaultValue={[branzeturi[2], generale[3]]}
                isMulti
                name="colors"
                options={groupedOptions2}
                formatGroupLabel={formatGroupLabel}
                className="basic-multi-select"
                classNamePrefix="select"
                placeholder="Lactate si Oua"
              />
            </Col>
            <Col md={12} lg={3}>
              <Select
                defaultValue={[mezeluri[2], carne[3]]}
                isMulti
                name="colors"
                options={groupedOptions3}
                formatGroupLabel={formatGroupLabel}
                className="basic-multi-select"
                classNamePrefix="select"
                placeholder="Carne si Mezeluri"
              />
            </Col>
            <Col md={12} lg={3}>
              <Select
                isMulti
                name="colors"
                options={groupedOptions4}
                formatGroupLabel={formatGroupLabel}
                className="basic-multi-select"
                classNamePrefix="select"
                placeholder="Peste si Fructe de Mare"
              />
            </Col> */}
          </Row>
          {/* <br />
          <Row>
            <Col md={12} lg={3}>
              <Select
                isMulti
                name="colors"
                options={groupedOptions5}
                formatGroupLabel={formatGroupLabel}
                className="basic-multi-select"
                classNamePrefix="select"
                placeholder="Alimente de Baza"
              />
            </Col>
            <Col md={12} lg={3}>
              <Select
                isMulti
                name="colors"
                options={groupedOptions6}
                formatGroupLabel={formatGroupLabel}
                className="basic-multi-select"
                classNamePrefix="select"
                placeholder="Sosuri si Paste de Tomate"
              />
            </Col>
            <Col md={12} lg={3}>
              <Select
                isMulti
                name="colors"
                options={groupedOptions7}
                formatGroupLabel={formatGroupLabel}
                className="basic-multi-select"
                classNamePrefix="select"
                placeholder="Paste si Orez"
              />
            </Col>
            <Col md={12} lg={3}>
              <Select
                isMulti
                name="colors"
                options={groupedOptions8}
                formatGroupLabel={formatGroupLabel}
                className="basic-multi-select"
                classNamePrefix="select"
                placeholder="Dulce"
              />
            </Col>
          </Row> */}
        </CardBody>
      </Card>
    </Col>
  );
};

export default CategoryButtons;
