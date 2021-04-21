import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Card, CardBody, Col } from "reactstrap";
import ReactTableBase from "../../../shared/components/table/ReactTableBase";
import { connect } from "react-redux";
import {
  GetInquires,
  GetAddToCart,
  DeleteCart,
  UpdateCart,
  PlaceOrder,
} from "../../../redux/actions/products";

import requests, { URL, BACKEND_URL } from "../../../requests";

const OrdersListTable = ({ orderListTableData, GetInquires, carts }) => {
  const [withSearchEngine, setWithSearchEngine] = useState(true);
  const [isResizable, setIsResizable] = useState(true);

  useEffect(() => {
    GetInquires();
  }, []);

  const tableConfig = {
    isEditable: false,
    isSortable: true,
    isResizable: false,
    withPagination: true,
    withSearchEngine: true,
    manualPageSize: [10, 20, 30, 40],
    placeholder: "Cauta produs...",
  };

  const cartsData = (carts && carts.not_instant_delivery_items) || [];

  const newProducts = cartsData.map((item) => {
    if (!item.is_enquiry_solved && item.custom_status !== "COMPLETED") {
      item["product_image_url"] = <img src={`${URL}/media/upload/images/placeholder-image_7LG7FZb.png`}></img>;
      return item;
    }
  });

  console.log({ newProducts });

  return (
    <Col md={12} lg={12}>
      <Card>
        <CardBody>
          <div className="card__title">
            <h3 className="bold-text">Pending Enquiry</h3>
          </div>
          <ReactTableBase
            key={withSearchEngine || isResizable ? "modified" : "common"}
            columns={orderListTableData.tableHeaderData}
            data={newProducts}
            tableConfig={tableConfig}
          />
        </CardBody>
      </Card>
    </Col>
  );
};

OrdersListTable.propTypes = {
  orderListTableData: PropTypes.shape({
    tableHeaderData: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string,
        name: PropTypes.string,
      })
    ),
    tableRowsData: PropTypes.arrayOf(PropTypes.shape()),
    defaultTableHeaderData: PropTypes.arrayOf(PropTypes.shape()),
    defaultTableRowData: PropTypes.arrayOf(PropTypes.shape()),
  }).isRequired,
};

const mapStateToProps = (state) => {
  return {
    inquires: state.products.inquiredDetails,
    user: state.products.user,
    // carts: state.products.cartsDetails,
  };
};

export default connect(mapStateToProps, {
  GetInquires,
  GetAddToCart,
  DeleteCart,
  UpdateCart,
  PlaceOrder,
})(OrdersListTable);
