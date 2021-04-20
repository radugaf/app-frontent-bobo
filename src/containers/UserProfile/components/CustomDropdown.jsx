import { FormGroup } from "@material-ui/core";
import React from "react";
import { Row, Col, Form, Label, Input } from "reactstrap";

const CustomDrowdown = () => {
  return (
    <Row style={{ width: '100%', boxSizing: "border-box"}}>
      <Col style={{ padding: "15px", boxSizing: "border-box" }} lg="3">
        Vizualizare Produse
        <FormGroup row>
          &nbsp;&nbsp;
          <Col sm={{ size: 10 }}>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" id="checkbox1" /> Bucatarie
              </Label>
              <Label check>
                <Input type="checkbox" id="checkbox2" /> Bar
              </Label>
              <Label check>
                <Input type="checkbox" id="checkbox3" /> Non-Alimentare
              </Label>
              <Label check>
                <Input type="checkbox" id="checkbox2" /> Echipamente
              </Label>
              <Label check>
                <Input type="checkbox" id="checkbox2" /> Servicii
              </Label>
              <Label check>
                <Input type="checkbox" id="checkbox2" /> Cofetarie
              </Label>
            </FormGroup>
          </Col>
        </FormGroup>
      </Col>
      <Col style={{ paddingTop: "15px", boxSizing: "border-box" }} lg="3">
        Procese Verbale
        <FormGroup row>
          &nbsp;&nbsp;
          <Col sm={{ size: 10 }}>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" id="checkbox1" /> Procese verbale
              </Label>
              <Label check>
                <Input type="checkbox" id="checkbox2" /> Istoric Procese Verbale
              </Label>
            </FormGroup>
          </Col>
        </FormGroup>
      </Col>
      <Col style={{ paddingTop: "15px", boxSizing: "border-box" }} lg="3">
        Facturi
        <FormGroup row>
          &nbsp;&nbsp;
          <Col sm={{ size: 10 }}>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" id="checkbox1" /> Facturi in asteptare
              </Label>
              <Label check>
                <Input type="checkbox" id="checkbox2" /> Istoric facturi
              </Label>
            </FormGroup>
          </Col>
        </FormGroup>
      </Col>
      <Col style={{ paddingTop: "15px", boxSizing: "border-box" }} lg="3">
        Proforme
        <FormGroup row>
          &nbsp;&nbsp;
          <Col sm={{ size: 10 }}>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" id="checkbox1" /> Proforme in asteptare
              </Label>
              <Label check>
                <Input type="checkbox" id="checkbox2" /> Istoric proforme
              </Label>
            </FormGroup>
          </Col>
        </FormGroup>
      </Col>
      <Col style={{ paddingTop: "15px", boxSizing: "border-box" }} lg="3">
        Marfa
        <FormGroup row>
          &nbsp;&nbsp;
          <Col sm={{ size: 10 }}>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" id="checkbox1" /> Receptie Marfa
              </Label>
              <Label check>
                <Input type="checkbox" id="checkbox2" /> Istoric Receptie Marfa
              </Label>
            </FormGroup>
          </Col>
        </FormGroup>
      </Col>
      <Col style={{ paddingTop: "15px", boxSizing: "border-box" }} lg="3">
        Cart & Wishlist
        <FormGroup row>
          &nbsp;&nbsp;
          <Col sm={{ size: 10 }}>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" id="checkbox1" /> Vizualizare cart
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" id="checkbox1" /> Vizualizare wishlist
              </Label>
            </FormGroup>
          </Col>
        </FormGroup>
      </Col>
      <Col style={{ paddingTop: "15px", boxSizing: "border-box" }} lg="3">
        Catalog
        <FormGroup row>
          &nbsp;&nbsp;
          <Col sm={{ size: 10 }}>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" id="checkbox1" /> Gestionare Catalog
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" id="checkbox1" /> Vizualizare Catalog
              </Label>
            </FormGroup>
          </Col>
        </FormGroup>
      </Col>
      <Col style={{ paddingTop: "15px", boxSizing: "border-box" }} lg="3">
        Profil
        <FormGroup row>
          &nbsp;&nbsp;
          <Col sm={{ size: 10 }}>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" id="checkbox1" /> Gestionare profil personal
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" id="checkbox1" /> Gestionare profil S.R.L
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" id="checkbox1" /> Dashboard S.R.L
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
