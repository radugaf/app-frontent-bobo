import { Fragment, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { toast } from 'react-toastify'
import { Check } from 'react-feather'

import {
  Card, Col, Button, ButtonToolbar, Table, CardBody,
} from 'reactstrap';

const invoiceData = [
  { title: 'Wordpress Plugin Apollo 200', quantity: 1, cost: 27 },
  { title: 'Easy Pro Admin Template', quantity: 1, cost: 59 },
  { title: 'Spirit HTML Template', quantity: 2, cost: 20 },
];

const ToastSuccess = () => (
  <Fragment>
    <div className='toastify-header pb-0'>
      <div className='title-wrapper'>
        <h6 className='toast-title'>Copiat!</h6>
      </div>
    </div>
  </Fragment>
)


const InvoiceTemplate = () => {

  const invoiceNumber='#EM000001';
  const invoiceAddress='Aspirity Creative Web Studio 44 Shirley Ave. West Chicago, IL +8 (224) 243-4543'

    const [copied, setCopied] = useState(false)
  
    const onCopy = () => {
      setCopied(true)
      toast.success(<ToastSuccess />, {
        autoClose: 3000,
        hideProgressBar: true,
        closeButton: false
      })
    }

  return(
  <Col lg={12}>
    <Card>
      <CardBody className="invoice">
        <div className="invoice__head">
          <div className="invoice__head-left">
            <div className="invoice__logo" />
            <address className='invoice-custom-address'>
              {invoiceAddress}
              <CopyToClipboard className='invoice-address-custom-button' onCopy={onCopy} text={invoiceAddress}>
            <button>
            Copy!
            </button>
            </CopyToClipboard>
            </address>
          </div>
          <div className="invoice__head-right invoice__head-right-custom">
            <h4 className='custom-h4'>Invoice {invoiceNumber}
            <CopyToClipboard className='invoice-button-custom' onCopy={onCopy} text={invoiceNumber}>
            <button>
            Copy!
            </button>
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
            <Button>Print</Button>
            <Button className="btn btn-success">Mark as Paid</Button>
          </ButtonToolbar>
        </div>
      </CardBody>
    </Card>
  </Col>
  )
}

export default InvoiceTemplate;
