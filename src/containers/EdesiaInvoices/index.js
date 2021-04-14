import React, { useEffect } from "react";
import { connect } from "react-redux";  
import { Container, Row } from "reactstrap";
import DataReactTable from "./components/DataReactTable";
import InvoiceTemplate from "./components/InvoiceTemplate";
import CreateTableData from "./CreateData";
import MatTable from "./components/MatTable";
import { SupplierInvoiceFetch } from "../../redux/actions/products";

const DataTable = ({ invoices, SupplierInvoiceFetch }) => {
  const reactTableData = CreateTableData();

  console.log({ invoices})
  useEffect(() => {
    SupplierInvoiceFetch();
  }, []);

  return (
    <Container>
      <Row>
        {/* <DataReactTable reactTableData={reactTableData} /> */}
        <InvoiceTemplate />
        <MatTable data={invoices}  />
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    invoices: state.products.invoiceDetails,
  };
};

export default connect(mapStateToProps, {
  SupplierInvoiceFetch,
})(DataTable);
