import React from "react";
import { Container, Row, Col } from "reactstrap";
import DataReactTable from "./components/DataReactTable";
import InvoiceTemplate from "./components/InvoiceTemplate";
import CreateTableData from "./CreateData";

const DataTable = () => {
  const reactTableData = CreateTableData();
  
  return (
    <Container>
      <Row>
        <Col lg={5} >
          <InvoiceTemplate />
          <InvoiceTemplate />
          <InvoiceTemplate />
          <InvoiceTemplate />
        </Col>
        <Col lg={7}>
          <div className='sticky-top sticky-top-custom'>
          <DataReactTable reactTableData={reactTableData} />
          </div>
        </Col>

      </Row>
    </Container>
  );
};

export default DataTable;