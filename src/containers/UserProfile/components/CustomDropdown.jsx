import { FormGroup } from "@material-ui/core";
import React from "react";
import { Row, Col, Form, Label, Input } from "reactstrap";

const CustomDrowdown = () => {
  return (
    <Row>
        <Col style={{padding: '15px', boxSizing: "border-box"}} lg='3'>
        Produse
        <FormGroup row>&nbsp;&nbsp;
        <Col  sm={{ size: 10 }}>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" id="checkbox1" />{' '}
              Bucatarie
            </Label>
            <Label check>
              <Input type="checkbox" id="checkbox2" />{' '}
              Bar
            </Label>
            <Label check>
              <Input type="checkbox" id="checkbox3" />{' '}
              Non-Alimentare
            </Label>
            <Label check>
              <Input type="checkbox" id="checkbox2" />{' '}
              Echipamente
            </Label>
            <Label check>
              <Input type="checkbox" id="checkbox2" />{' '}
              Servicii
            </Label>
            <Label check>
              <Input type="checkbox" id="checkbox2" />{' '}
              Cofetarie
            </Label>
          </FormGroup>
        </Col>
      </FormGroup>
        </Col>
        <Col style={{paddingTop: '15px', boxSizing: "border-box"}} lg='3'>
        Documente
        <FormGroup row>&nbsp;&nbsp;
        <Col  sm={{ size: 10 }}>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" id="checkbox1" />{' '}
              Bucatarie
            </Label>
            <Label check>
              <Input type="checkbox" id="checkbox2" />{' '}
              Bar
            </Label>
            <Label check>
              <Input type="checkbox" id="checkbox3" />{' '}
              Non-Alimentare
            </Label>
            <Label check>
              <Input type="checkbox" id="checkbox2" />{' '}
              Echipamente
            </Label>
            <Label check>
              <Input type="checkbox" id="checkbox2" />{' '}
              Servicii
            </Label>
            <Label check>
              <Input type="checkbox" id="checkbox2" />{' '}
              Cofetarie
            </Label>
          </FormGroup>
        </Col>
      </FormGroup>
        </Col>
        <Col style={{paddingTop: '15px', boxSizing: "border-box"}} lg='3'>
        Cart
        <FormGroup row>&nbsp;&nbsp;
        <Col  sm={{ size: 10 }}>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" id="checkbox1" />{' '}
              Bucatarie
            </Label>
            <Label check>
              <Input type="checkbox" id="checkbox2" />{' '}
              Bar
            </Label>
            <Label check>
              <Input type="checkbox" id="checkbox3" />{' '}
              Non-Alimentare
            </Label>
            <Label check>
              <Input type="checkbox" id="checkbox2" />{' '}
              Echipamente
            </Label>
            <Label check>
              <Input type="checkbox" id="checkbox2" />{' '}
              Servicii
            </Label>
            <Label check>
              <Input type="checkbox" id="checkbox2" />{' '}
              Cofetarie
            </Label>
          </FormGroup>
        </Col>
      </FormGroup>
        </Col>
        <Col style={{paddingTop: '15px', boxSizing: "border-box"}} lg='3'>
        Oferte
        <FormGroup row>&nbsp;&nbsp;
        <Col  sm={{ size: 10 }}>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" id="checkbox1" />{' '}
              Bucatarie
            </Label>
            <Label check>
              <Input type="checkbox" id="checkbox2" />{' '}
              Bar
            </Label>
            <Label check>
              <Input type="checkbox" id="checkbox3" />{' '}
              Non-Alimentare
            </Label>
            <Label check>
              <Input type="checkbox" id="checkbox2" />{' '}
              Echipamente
            </Label>
            <Label check>
              <Input type="checkbox" id="checkbox2" />{' '}
              Servicii
            </Label>
            <Label check>
              <Input type="checkbox" id="checkbox2" />{' '}
              Cofetarie
            </Label>
          </FormGroup>
        </Col>
      </FormGroup>
        </Col>
    </Row>
  );
};

{
  /* <BasicTable />; */
}

export default CustomDrowdown;
