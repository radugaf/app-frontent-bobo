import React from "react";
import { Container, Row } from "reactstrap";
import DataReactTable from "./components/DataReactTable";
import InvoiceTemplate from "./components/InvoiceTemplate";
import CreateTableData from "./CreateData";

const DataTable = () => {
  const reactTableData = CreateTableData();

  return (
    <Container>
      <Row>
        <DataReactTable reactTableData={reactTableData} />
        <InvoiceTemplate />
      </Row>
    </Container>
  );
};

export default DataTable;