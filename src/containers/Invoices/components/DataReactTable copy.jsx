import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from "axios";
import { Card, CardBody, Col } from "reactstrap";
import ReactTableBase from "../../../shared/components/table/ReactTableBase";
import {
  ProductFetch,
  AddToCart,
  SetToken,
  SupplierProductFetch,
  tokenConfig,
} from "../../../redux/actions/products";
import { toastr } from "react-redux-toastr";

import requests, { URL, BACKEND_URL } from "../../../requests";

const DataReactTable = ({
  ProductFetch,
  AddToCart,
  products,
  SupplierProductFetch,
  reactTableData,
}) => {
  console.log({ rows: reactTableData.tableRowsData, products });

  const [isResizable, setIsResizable] = useState(true);
  const [isSortable, setIsSortable] = useState(true);
  const [withPagination, setWithPaginationTable] = useState(true);
  const [withSearchEngine, setWithSearchEngine] = useState(true);

  const call = async () => {
    let userType = await axios.get(
      `${BACKEND_URL}${requests.GET_CHECK_USER_TYPE}`,
      tokenConfig()
    );
    userType = (userType && userType.data && userType.data.data) || {
      is_restaurant_owner: true,
    };
    if (userType && (userType.is_company_owner || userType.is_company_staff)) {
      SupplierProductFetch();
    }
    if (
      userType &&
      (userType.is_restaurant_staff || userType.is_restaurant_owner)
    ) {
      ProductFetch();
    }
  };

  useEffect(() => {
    call();
  }, []);

  const onSubmit = (e, product_id) => {
    e.preventDefault();
    AddToCart({ product_id: product_id });
    // toastr.success(`Add To ${type}`, `Add To ${type} successfully added `);
  };

  const tableConfig = {
    isResizable,
    isSortable,
    withPagination,
    withSearchEngine,
    manualPageSize: [20, 20, 30, 40],
    placeholder: "Cauta Produs ...",
  };

  const newProducts =
    products &&
    products.map((product) => {
      let className = "";
      let buttonName = "Cart";
      if (product.instant_delivery) {
        className = "btn btn-success btn-sm w-100";
        buttonName = "Cart";
      } else {
        className = "btn btn-primary btn-sm w-100";
        buttonName = "Wishlist";
      }

      product["button"] = (
        <div
          class={className}
          onClick={(e) => {
            onSubmit(e, product.id, buttonName);
          }}
        >
          Adauga in {buttonName}
        </div>
      );

      product["product_image"] = (
        <img src={`${URL}${product.image_main}`}></img>
      );

      return product;
    });

  return (
    <Col md={12} lg={12}>
      <Card>
        <CardBody>
          <div className="react-table__wrapper">
            <div className="card__title">
              <h3 className="bold-text">🍲 Catalog Produse</h3>
            </div>
          </div>
          <ReactTableBase
            key={withSearchEngine || isResizable ? "modified" : "common"}
            columns={reactTableData.tableHeaderData}
            data={newProducts}
            tableConfig={tableConfig}
          />
        </CardBody>
      </Card>
    </Col>
  );
};

DataReactTable.propTypes = {
  reactTableData: PropTypes.shape({
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
    products: state.products.productsDetails,
    authErrors: state.products.error,
    user: state.products.user,
  };
};

export default connect(mapStateToProps, {
  ProductFetch,
  AddToCart,
  SetToken,
  SupplierProductFetch,
})(DataReactTable);
