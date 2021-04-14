import React from 'react';
import {
  Card, Col, Button, ButtonToolbar, Table, CardBody,
} from 'reactstrap';

const invoiceData = [
  { title: 'Wordpress Plugin Apollo 200', quantity: 1, cost: 27 },
  { title: 'Easy Pro Admin Template', quantity: 1, cost: 59 },
  { title: 'Spirit HTML Template', quantity: 2, cost: 20 },
];

const InvoiceTemplate = () => (
  <Col md={12} lg={6}>
    <Card>
      <CardBody className="invoice">
        <div className="invoice__head">
          <div className="invoice__head-left">
            <div className="invoice__logo" />
            <p>Aspirity Creative Web Studio </p>
            <p>44 Shirley Ave.</p>
            <p>West Chicago,</p>
            <p>IL 60185 </p>
            <p dir="ltr">+8 (224) 243-4543</p>
          </div>
          <div className="invoice__head-right">
            <h4>Invoice #EM000001</h4>
            <p className="invoice__date">Februarie 23, 2020</p>
            <p>Maria Morris</p>
            <p>Project Manager at BLX</p>
            <p>mariam@company.co</p>
            <p>44 Shirley Ave.</p>
            <p>West Chicago, IL 60185</p>
          </div>
        </div>
        <Table className="table--bordered" responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Item Name</th>
              <th>Quantity</th>
              <th>Unit Cost</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {invoiceData.map((item, index) => (
              <tr key={`index_${item.title}`}>
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td>{item.quantity}</td>
                <td>{item.cost} RON</td>
                <td>{item.quantity * item.cost} RON</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className="invoice__total">
          <p>Sub - Total amount: 126.00 RON</p>
          <p>VAT: 20.00 RON</p>
          <p className="invoice__grand-total">Grand Total: 146.00 RON</p>
          <ButtonToolbar className="invoice__toolbar">
            <Button>Print</Button>
          </ButtonToolbar>
        </div>
      </CardBody>
    </Card>
  </Col>
);

export default InvoiceTemplate;
