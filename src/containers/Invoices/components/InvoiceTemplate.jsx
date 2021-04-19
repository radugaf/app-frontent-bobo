import { Fragment, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import { Check } from "react-feather";
import BasicCarouselWithCaption from "./BasicCarouselWithCaption";
import { Field, reduxForm } from "redux-form";
import renderFileInputField from "../../../shared/components/form/FileInput";
import PropTypes from 'prop-types';

import {
  Label,
  FormText,
  Form,
  InputGroup,
  InputGroupAddon,
  Input,
  InputGroupText,
  Row,
  Card,
  Col,
  Button,
  ButtonToolbar,
  Table,
  CardBody,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { FormGroup } from "@material-ui/core";

const invoiceData = [
  { title: "Wordpress Plugin Apollo 200", quantity: 1, cost: 27 },
  { title: "Easy Pro Admin Template", quantity: 1, cost: 59 },
  { title: "Spirit HTML Template", quantity: 2, cost: 20 },
];

const invoiceNumber = "#EM000001";
const invoiceAddress =
  "Aspirity Creative Web Studio 44 Shirley Ave. West Chicago, IL +8 (224) 243-4543";

const ToastSuccess = () => (
  <Fragment>
    <div className="toastify-header pb-0">
      <div className="title-wrapper">
        <h6 className="toast-title">Copiat!</h6>
      </div>
    </div>
  </Fragment>
);

const InvoiceTemplate = () => {
  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    setCopied(true);
    toast.success(<ToastSuccess />, {
      autoClose: 3000,
      hideProgressBar: true,
      closeButton: false,
    });
  };

  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);

  const toggle = () => setModal(!modal);
  const toggle2 = () => setModal2(!modal2);

  return (
    <Col lg={12}>
      <Card>
        <CardBody className="invoice">
          <div className="invoice__head">
            <div className="invoice__head-left">
              <div className="invoice__logo" />
              <address className="invoice-custom-address">
                {invoiceAddress}
                <CopyToClipboard
                  className="invoice-address-custom-button"
                  onCopy={onCopy}
                  text={invoiceAddress}
                >
                  <button>Copy!</button>
                </CopyToClipboard>
              </address>
            </div>
            <div className="invoice__head-right invoice__head-right-custom">
              <h4 className="custom-h4">
                Invoice {invoiceNumber}
                <CopyToClipboard
                  className="invoice-button-custom"
                  onCopy={onCopy}
                  text={invoiceNumber}
                >
                  <button>Copy!</button>
                </CopyToClipboard>
              </h4>
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
              <Button
                className="margin-left-custom btn-custom2"
                color="danger"
                onClick={toggle2}
              >
                Report
              </Button>
              <Modal
                style={{ maxWidth: "1000px" }}
                isOpen={modal2}
                toggle={toggle2}
              >
                <ModalHeader toggle={toggle2}>Raporteaza :</ModalHeader>
                <ModalBody>
                  <FormGroup style={{ height: "400px" }}>
                    <Input
                      style={{ height: "100%" }}
                      type="textarea"
                      name="text"
                      id="exampleText"
                      placeholder="Subiect"
                    />
                  </FormGroup>
                </ModalBody>
                <ModalFooter>
                  {" "}
                  <Button color="success" onClick={toggle2}>
                    Trimite
                  </Button>
                  <Button color="secondary" onClick={toggle2}>
                    Anuleaza
                  </Button>
                </ModalFooter>
              </Modal>
              <Button className="btn-custom2">Print</Button>
              <Button onClick={toggle} className="btn btn-success btn-custom2">
                Mark as Paid
              </Button>
              <Modal
                style={{ maxWidth: "1000px" }}
                isOpen={modal}
                toggle={toggle}
              >
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                  <BasicCarouselWithCaption />
                </ModalBody>
                <ModalFooter style={{ maxWidth: "1000px" }}>
                  <Row className="input-custom-row">
                    <Col lg="6" md="6">
                      <Form style={{ width: "100%" }}>
                        <FormGroup>
                          <InputGroup>
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>Plateste partial</InputGroupText>
                            </InputGroupAddon>
                            <Input value="125 Ron" />
                          </InputGroup>
                        </FormGroup>
                      </Form>
                    </Col>
                    <Col lg="6" md="6">
                        <div className="form__form-group">
                          <span className="form__form-group-label">
                            Adauga Dovada
                          </span>
                          <div className="form__form-group-field">
                            <Field
                              name="file"
                              component={renderFileInputField}
                            />
                          </div>
                        </div>
                      {/* <Form style={{ width: "100%", position: "relative" }}>
                        <Input
                          style={{ opacity: "0", padding: "10px" }}
                          type="file"
                          name="file"
                          id="exampleFile"
                        />
                        <Button
                          color="secondary"
                          className="custom-modal-button"
                        >
                          Incarca Dovada
                        </Button>
                      </Form> */}
                    </Col>
                  </Row>
                </ModalFooter>
                <ModalFooter>
                  <Button onClick={toggle} className="btn btn-success">
                    Mark as Paid
                  </Button>
                  <Button color="secondary" onClick={toggle}>
                    Anuleaza
                  </Button>
                </ModalFooter>
              </Modal>
            </ButtonToolbar>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

InvoiceTemplate.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'horizontal_form', // a unique identifier for this form
})(InvoiceTemplate);


