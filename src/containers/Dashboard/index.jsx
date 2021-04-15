import { Container, Row } from "reactstrap";
import React, { useEffect } from "react";
import { connect } from "react-redux";

import { deleteNewOrderTableData } from "../../redux/actions/newOrderTableActions";
import { NewOrderTableProps } from "../../shared/prop-types/TablesProps";

import WeeklyStat from "./components/WeeklyStat";
import Reservations from "./components/Reservations";
import TotalBookings from "./components/TotalBookings";
import TotalBookings2 from "./components/TotalBookings2";
import TotalBookings3 from "./components/TotalBookings3";
import TotalBookings4 from "./components/TotalBookings4";
import BTC from "./components/BTC"

import {
  GetAddToCart,
  DeleteCart,
  UpdateCart,
  PlaceOrder,
  GetInquires,
} from "../../redux/actions/products";
import ShortReminders from "./components/ShortReminders";
import SalesReport from "./components/SalesReport";
import NewOrders from "./components/NewOrders";

const onDeleteRow = (dispatch, newOrder) => (index) => {
  const arrayCopy = [...newOrder];
  arrayCopy.splice(index, 1);
  dispatch(deleteNewOrderTableData(arrayCopy));
};

const Dashboard = ({ GetAddToCart, carts, newOrder }) => {
  useEffect(() => {
    GetAddToCart();
  }, []);

  return (
    <Container className="dashboard">
      <Row>
        <TotalBookings />
        <TotalBookings2 />
        <TotalBookings3 />
        <TotalBookings4 />

        <NewOrders newOrder={newOrder} carts={carts} />
        <NewOrders newOrder={newOrder} />
      </Row>
      <Row>
        <ShortReminders />
        <BTC />
        <NewOrders newOrder={newOrder} />
        <NewOrders newOrder={newOrder} />
        <WeeklyStat />
        
      </Row>
    </Container>
  );
};

Dashboard.propTypes = {
  newOrder: NewOrderTableProps.isRequired,
};

const mapStateToProps = (state) => {
  return {
    inquires: state.products.inquiredDetails,
    carts: state.products.cartsDetails,
    user: state.products.user,
    newOrder: state.newOrder.items,
  };
};

export default connect(mapStateToProps, {
  GetInquires,
  GetAddToCart,
  DeleteCart,
  UpdateCart,
  PlaceOrder,
})(Dashboard);
