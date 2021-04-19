import React, { useState } from "react";
import { Container, Row, Col, Card, CardBody, Button, } from "reactstrap";
import DataReactTable from "./components/DataReactTable";
import InvoiceTemplate from "./components/InvoiceTemplate";
import CreateTableData from "./CreateData";

const DataTable = () => {
  const reactTableData = CreateTableData();

  const [showOne, setShowOne] = useState(true);
  const [showTwo, setShowTwo] = useState(false);

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
        <Col lg={5}>
          <InvoiceTemplate />
          <InvoiceTemplate />
          <InvoiceTemplate />
          <InvoiceTemplate />
        </Col>
        <Col lg={7}>
          <div className="sticky-top sticky-top-custom">
            <DataReactTable reactTableData={reactTableData} />
          </div>
        </Col>
      </Row>
      ) : (
        <Row>
        <Col lg={12}>
          <div className="sticky-top sticky-top-custom">
            <DataReactTable reactTableData={reactTableData} />
          </div>
        </Col>
      </Row>
      )}
    </Container>
  );
};

export default DataTable;
