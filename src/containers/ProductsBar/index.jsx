import React from "react";
import { Container, Row } from "reactstrap";
import CategoryButtonsTwo from "./components/CategoryButtonsTwo";
import DataReactTable from "./components/DataReactTable";
import CreateTableData from "./CreateData";

const DataTable = () => {
  const reactTableData = CreateTableData();

  return (
    <Container>
      <Row>
        <CategoryButtonsTwo />
        <DataReactTable reactTableData={reactTableData} />
      </Row>
    </Container>
  );
};

export default DataTable;