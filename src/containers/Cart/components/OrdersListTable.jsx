import React, { useEffect } from "react";
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

const OrdersListTable = ({
  orderListTableData,
  GetInquires,
  reactTableData,
  carts,
}) => {
  const tableConfig = {
    isEditable: false,
    isSortable: true,
    isResizable: false,
    withPagination: true,
    withSearchEngine: true,
    manualPageSize: [10, 20, 30, 40],
    placeholder: "Cauta produs...",
  };


const header = [
  { id: 0, title: "#" },
  { id: 1, title: "Produs" },
  { id: 2, title: "Canitate Dorita" },

  { id: 3, title: "Status" },
  { id: 4, title: "Timer" },
];

  useEffect(() => {
    GetInquires();
  }, []);

  const cartsData = (carts && carts.not_instant_delivery_items) || [];

  const newProducts = cartsData.map((item) => {
    if (!item.is_enquiry_solved && item.custom_status !== "COMPLETED") {
      return item
    }
  });
  console.log({newProducts})
  return (
    <Col md={12} lg={12}>
      <Card>
        <CardBody>
          <div className="card__title">
            <h3 className="bold-text">Pending Enquiry</h3>
          </div>
          <ReactTableBase
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
