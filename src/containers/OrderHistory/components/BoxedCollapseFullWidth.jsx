import { Button, Container, Row, Card, CardBody, Col } from "reactstrap";
import CreateTableData from "./CreateData";
import InvoiceTemplate from "./InvoiceTemplate";
import MatTable from "./MatTable";
import { SupplierInvoiceFetch } from "../../../redux/actions/products";
import DataReactTable from "./DataReactTable";

// Edesia
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { GetRestaurantOrder } from "../../../redux/actions/products";

const BoxedCollapseFullWidth = ({ invoices, SupplierInvoiceFetc }) => {

  const [selectData, setSelectData] = useState([]);

  const [showOne, setShowOne] = useState(true);
  const [showTwo, setShowTwo] = useState(false);
  const [showThree, setShowThree] = useState(false);
  const [showFour, setShowFour] = useState(false);

  function clickOne() {
    setShowOne(true);
    setShowTwo(false);
    setShowThree(false);
    setShowFour(false);
  }

  function clickTwo() {
    setShowOne(false);
    setShowTwo(true);
    setShowThree(false);
    setShowFour(false);
  }

  function clickThree() {
    setShowOne(false);
    setShowTwo(false);
    setShowThree(true);
    setShowFour(false);
  }

  function clickFour() {
    setShowOne(false);
    setShowTwo(false);
    setShowThree(false);
    setShowFour(true);
  }

  useEffect(() => {
    SupplierInvoiceFetch();
  }, []);

  const reactTableData = CreateTableData();

  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <CardBody>
              <Button
                onClick={clickOne}
                color="secondary"
                size="sm"
                outline="true"
              >
                Livrari Curier
              </Button>
              <Button
                onClick={clickTwo}
                color="secondary"
                size="sm"
                outline="true"
              >
                Livrari Furnizor
              </Button>
              <Button
                onClick={clickThree}
                color="secondary"
                size="sm"
                outline="true"
              >
                Receptii Partiale
              </Button>
              <Button
                onClick={clickFour}
                color="secondary"
                size="sm"
                outline="true"
              >
                Istoric Receptii
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {showOne ? (
        <>
          <div>
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
                {invoices?.length > 0 ? (
                  <div className="sticky-top sticky-top-custom">
                    <MatTable
                      data={invoices}
                      setSelectedData={(data) => setSelectData(data)}
                    />
                  </div>
                ) : (
                  <h1>Nu sunt livrari curier</h1>
                )}
              </Col>
            </Row>
          </div>
        </>
      ) : null}

      {showTwo ? (
              <>
          <div>
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
                {invoices?.length > 0 ? (
                  <div className="sticky-top sticky-top-custom">
                    <MatTable
                      data={invoices}
                      setSelectedData={(data) => setSelectData(data)}
                    />
                  </div>
                ) : (
                  <h1>Nu sunt livrari curier</h1>
                )}
              </Col>
            </Row>
          </div>
        </>
      ) : null}

      {showThree ? (
              <>
              <div>
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
                    {invoices?.length > 0 ? (
                      <div className="sticky-top sticky-top-custom">
                        <MatTable
                          data={invoices}
                          setSelectedData={(data) => setSelectData(data)}
                        />
                      </div>
                    ) : (
                      <h1>Nu sunt livrari partiale</h1>
                    )}
                  </Col>
                </Row>
              </div>
            </>
      ) : null}

      {showFour ? (
        <>
          <DataReactTable reactTableData={reactTableData} />
        </>
      ) : null}
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    carts: state.products.cartsDetails,
    orders: state.products.restaurantOrdersDetails,
    user: state.products.user,
    invoices: state.products.invoiceDetails,
  };
};


export default connect(mapStateToProps, {
  SupplierInvoiceFetch,
})(BoxedCollapseFullWidth);
