import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import DataReactTable from "./components/DataReactTable";
import InvoiceTemplate from "./components/InvoiceTemplate";
import CreateTableData from "./CreateData";
import MatTable from "./components/MatTable";
import { SupplierInvoiceFetch } from "../../redux/actions/products";

const DataTable = ({ invoices, SupplierInvoiceFetch }) => {
  const reactTableData = CreateTableData();

  console.log({ invoices });
  useEffect(() => {
    SupplierInvoiceFetch();
  }, []);
  
  // const mystyle = {
  //   position: "-webkit-sticky",
  //   position: "sticky",
  //   top: "0px",
  // };

  return (
    <Container>
      <Row>
        <Col lg={5}>
          <InvoiceTemplate />
          <InvoiceTemplate />
        </Col>
        <Col lg={7}>
          {/* <DataReactTable reactTableData={reactTableData} /> */}
          <MatTable data={invoices} />
        </Col>
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
