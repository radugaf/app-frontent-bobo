import React, { useEffect } from "react";
import { Container, Row } from "reactstrap";
import { connect } from "react-redux";

import MatTable from "./components/MatTable";
import RecentOrders from "./components/RecentOrders";
import OrdersListTable from './components/OrdersListTable'
import CreateDataOrderListTable from './components/CreateData';
import {
  GetAddToCart,
  DeleteCart,
  UpdateCart,
  PlaceOrder,
  GetInquires,
} from "../../redux/actions/products";

const MaterialTable = ({ GetAddToCart, carts }) => {
  
  useEffect(() => {
    GetAddToCart();
  }, []);

  // const header = [
  //   {
  //     accessor: 'product_item_id',
  //     Header: 'id',
  //     width: 65,
  //   },
  //   {
  //     accessor: 'product_title',
  //     Header: 'Nume Produs',
  //     disableGlobalFilter: true,
  //   },
  //   {
  //     accessor: 'quantity_by_restaurant',
  //     Header: 'Cantitate Dorita',
  //   },
  //   {
  //     accessor: 'custom_status',
  //     Header: 'Status',
    
  //   },
  // ];
  
  // const orderListTableData = CreateTableData({newColumns:header});
  // console.log({carts})
  const reactTableData = CreateDataOrderListTable();

  return (
    <Container>
      <Row>
        <MatTable carts={carts} />
        <OrdersListTable orderListTableData={reactTableData} carts={carts}/>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    inquires: state.products.inquiredDetails,
    carts: state.products.cartsDetails,
    user: state.products.user,
  };
};

export default connect(mapStateToProps, {
  GetInquires,
  GetAddToCart,
  DeleteCart,
  UpdateCart,
  PlaceOrder,
})(MaterialTable);
