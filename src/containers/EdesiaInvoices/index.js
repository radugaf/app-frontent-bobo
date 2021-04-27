import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Card, CardBody, Button, } from "reactstrap";
import DataReactTable from "./components/DataReactTable";
import InvoiceTemplate from "./components/InvoiceTemplate";
import CreateTableData from "./components/CreateData";
import MatTable from "./components/MatTable";
import { SupplierInvoiceFetch } from "../../redux/actions/products";

const DataTable = ({ invoices, SupplierInvoiceFetch }) => {
  const reactTableData = CreateTableData();
  const [selectData, setSelectData] = useState([]);

  console.log({ invoices });
  useEffect(() => {
    SupplierInvoiceFetch();
  }, []);
  console.log({ selectData, invoices });

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
                De achitat
              </Button>
              <Button
                onClick={() => setShowOne(!showOne)}
                color="secondary"
                size="sm"
                outline="true"
              >
                Istoric facturi
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
      {showOne ? (
      <Row>
        <Col lg={5}>
          {invoices &&
            invoices.map((invoice) => {
              if (!!selectData?.get?.(invoice.id)) {
                return <InvoiceTemplate invoice={invoice} />;
              }
            })}
        </Col>
        <Col lg={7}>
          {/* <DataReactTable reactTableData={reactTableData} /> */}
          {invoices?.length>0?(
          <div className="sticky-top sticky-top-custom">
            <MatTable data={invoices} setSelectedData={(data)=>setSelectData(data)} />
          </div>
          ):(
            <h1>Invoices Empty</h1>
          )}
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

const mapStateToProps = (state) => {
  return {
    invoices: state.products.invoiceDetails,
  };
};

export default connect(mapStateToProps, {
  SupplierInvoiceFetch,
})(DataTable);
