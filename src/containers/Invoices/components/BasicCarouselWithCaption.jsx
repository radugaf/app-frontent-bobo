import React, { Fragment, useState } from "react";
import { useTranslation } from 'react-i18next';
import { Card, CardBody, Col, Row, Table } from 'reactstrap';
import Carousel from '../../../shared/components/carousel/CarouselSingle';
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";


const data = [
  { id: 0 },
  { id: 1 },
  { id: 2 },
  { id: 3 },
];



const BasicCarouselWithCaption = () => {

  const { t } = useTranslation('common');

  const invoiceNumber = "#EM000001";
  const invoiceAddress =
  "Aspirity Creative Web Studio 44 Shirley Ave. West Chicago, IL +8 (224) 243-4543";

  const invoiceData = [
    { title: "Wordpress Plugin Apollo 200", quantity: 1, cost: 27 },
    { title: "Easy Pro Admin Template", quantity: 1, cost: 59 },
    { title: "Spirit HTML Template", quantity: 2, cost: 20 },
  ];

  const ToastSuccess = () => (
    <Fragment>
      <div className="toastify-header pb-0">
        <div className="title-wrapper">
          <h6 className="toast-title">Copiat!</h6>
        </div>
      </div>
    </Fragment>
  );
  
    const [copied, setCopied] = useState(false);

    const onCopy = () => {
      setCopied(true);
      toast.success(<ToastSuccess />, {
        autoClose: 3000,
        hideProgressBar: true,
        closeButton: false,
      });
    };

  return (
    <Col md={12} lg={12} xl={12}>
      <Card style={{ width: "100% !important"}}>
        <CardBody>
          <Carousel>
            {data.map(item => (
              <div className="Test" key={item.id}>
                  <Row>
                    <Col md={12} lg={5}>
                      <Table>
                        <tbody>
                          <tr>
                            <th>Numar Factura</th>
                            <td className="custom-td">{invoiceNumber}
                            <CopyToClipboard
                                className="invoice-address-custom-button"
                                onCopy={onCopy}
                                text={invoiceNumber}
                              >
                                <button>Copy!</button>
                              </CopyToClipboard></td>
                          </tr>
                          <tr>
                            <th>Data</th>
                            <td className="custom-td">
                              12.02.2021
                            </td>
                          </tr>
                          <tr>
                            <th>Nume Restaurant</th>
                            <td className="custom-td">Ceva restaurant</td>
                          </tr>
                          <tr>
                            <th>Nume supplier</th>
                            <td className="custom-td">Kaufland</td>
                          </tr>
                          <tr>
                            <th>Suma fara TVA</th>
                            <td className="custom-td">130 Ron</td>
                          </tr>
                          <tr>
                            <th>TVA</th>
                            <td className="custom-td">20 Ron</td>
                          </tr>
                          <tr>
                            <th>Suma Totala</th>
                            <td className="custom-td">150 Ron</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Col>
                    <Col md={12} lg={7}>
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
                    </Col>
                  </Row>
              </div>
            ))}
          </Carousel>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicCarouselWithCaption;
