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
    <>

              <Select

                isMulti
                name="colors"
                options={groupedOptions}
                formatGroupLabel={formatGroupLabel}
                className="basic-multi-select"
                classNamePrefix="select"
                placeholder="Bauturi / sucuri si cafea"
              />
<br /> 
            </>       
  );
};

export default CategoryButtons;