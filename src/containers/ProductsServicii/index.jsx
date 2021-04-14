import React from "react";
import { Container, Row } from "reactstrap";
import CategoryButtons from "./components/CategoryButtons";
import DataReactTable from "./components/DataReactTable";
import CreateTableData from "./CreateData";

const DataTable = () => {
  const reactTableData = CreateTableData();

  return (
    <Container>
      <Row>
        <CategoryButtons />
        <DataReactTable reactTableData={reactTableData} />
      </Row>
    </Container>
  );
};

export default DataTable;