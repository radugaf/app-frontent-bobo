import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Badge, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown, Table,
} from 'reactstrap';
import classNames from 'classnames';
import DotsHorizontalIcon from 'mdi-react/DotsHorizontalIcon';
import ChevronDownIcon from 'mdi-react/ChevronDownIcon';
import { NewOrderTableProps } from '../../../shared/prop-types/TablesProps';

import Panel from '../../../shared/components/Panel';

const DropDownMore = ({ index, handleDeleteRow }) => (
  <UncontrolledDropdown className="dashboard__table-more">
    <DropdownToggle>
      <p><DotsHorizontalIcon /></p>
    </DropdownToggle>
    <DropdownMenu className="dropdown__menu">
      <Link to={`/e_commerce_dashboard/edit/${index}`}><DropdownItem>Edit</DropdownItem></Link>
      <DropdownItem onClick={handleDeleteRow}>Delete</DropdownItem>
    </DropdownMenu>
  </UncontrolledDropdown>
);

DropDownMore.propTypes = {
  index: PropTypes.number.isRequired,
  handleDeleteRow: PropTypes.func.isRequired,
};

const NewOrderAmount = ({ quantity }) => {
  const amountClass = classNames({
    'dashboard__table-orders-amount': true,
    'dashboard__table-orders-amount--medium': quantity <= 100,
    'dashboard__table-orders-amount--low': quantity <= 20,
  });
  if (quantity > 150) {
    return (
      <div className={amountClass}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <span>{quantity}</span>
      </div>
    );
  } if (quantity > 100) {
    return (
      <div className={amountClass}>
        <div />
        <div />
        <div />
        <div />
        <span>{quantity}</span>
      </div>
    );
  } if (quantity > 50) {
    return (
      <div className={amountClass}>
        <div />
        <div />
        <div />
        <span>{quantity}</span>
      </div>
    );
  } if (quantity > 20) {
    return (
      <div className={amountClass}>
        <div />
        <div />
        <span>{quantity}</span>
      </div>
    );
  }
  return (
    <div className={amountClass}>
      <div />
      <span>{quantity}</span>
    </div>
  );
};

NewOrderAmount.propTypes = {
  quantity: PropTypes.number,
};

NewOrderAmount.defaultProps = {
  quantity: 0,
};

const NewOrders = ({carts, newOrder, onDeleteRow }) => {
  const cartsData = (carts && carts?.not_instant_delivery_items) || [];
  console.log({cartsData})
  const header = [
    { id: 0, title: "#" },
    { id: 1, title: "Produs" },
    { id: 2, title: "Canitate Dorita" },
  
    { id: 3, title: "Status" },
    { id: 4, title: "Timer" },
  ];
  

  return (
    <Panel
      xl={6}
      lg={12}
      md={12}
      title='Cereri de oferta in asteptare'
      
    >
      <Table responsive striped className="dashboard__table-orders" >
      <thead>
          <tr>
            {header.map((item) => (
              <th key={item.id}>{item.title}</th>
            ))}
          </tr>
        </thead>
        <tbody style={{
        height: "100px"             
    }}>
        {cartsData.map((item) => {
            if (!item.is_enquiry_solved && item.custom_status !== "COMPLETED") {
              return (
                <tr key={item.product_item_id}>
                  <td>{item.product_item_id}</td>
                  <td>{item.product_title}</td>
                  <td>{item.quantity_by_restaurant}</td>
                  <td>24:00h</td>
                  <td>
                    <Badge color={item.badge}>{item.custom_status}</Badge>
                  </td>
                </tr>
              );
            }
          })}
          {!cartsData && newOrder?.map?.((order, index) => (
            <tr key={`cell-${index}`}>
              <td className="dashboard__table-orders-title">
                <div className="dashboard__table-orders-img-wrap">
                  <div className="dashboard__table-orders-img" style={{ backgroundImage: `url(${order.img})` }} />
                </div>
                {order.title}
              </td>
              <td>
                <NewOrderAmount quantity={order.quantity} />
              </td>
              <td>{order.sold}</td>
              <td className="dashboard__table-orders-total" dir="ltr">{order.total}</td>
              <td>
                <DropDownMore index={index} handleDeleteRow={e => onDeleteRow(index, e)} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Panel>
  );
};

NewOrders.propTypes = {
  newOrder: NewOrderTableProps.isRequired,
  onDeleteRow: PropTypes.func.isRequired,
};

export default NewOrders;
