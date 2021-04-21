import InformationOutlineIcon from "mdi-react/InformationOutlineIcon";
import React, { useState, useEffect } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { connect } from "react-redux";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Checkbox from "@material-ui/core/Checkbox";
import TablePagination from "@material-ui/core/TablePagination";

import MatTableHead from "./MatTableHead";
import MatTableToolbar from "./MatTableToolbar";
import { SupplierInvoiceFetch } from "../../../redux/actions/products";
import ReactTooltip from "react-tooltip";

const getSorting = (order, orderBy) => {
  if (order === "desc") {
    return (a, b) => {
      if (a[orderBy] < b[orderBy]) {
        return -1;
      }
      if (a[orderBy] > b[orderBy]) {
        return 1;
      }
      return 0;
    };
  }
  return (a, b) => {
    if (a[orderBy] > b[orderBy]) {
      return -1;
    }
    if (a[orderBy] < b[orderBy]) {
      return 1;
    }
    return 0;
  };
};

const MatTable = ({ data, SupplierInvoiceFetch, setSelectedData }) => {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("invoice_number");
  const [selected, setSelected] = useState(new Map([]));
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    SupplierInvoiceFetch();
  }, []);

  const handleRequestSort = (property) => {
    const orderByTemp = property;
    let orderTemp = "desc";
    if (orderBy === property && order === "desc") {
      orderTemp = "asc";
    }
    setOrder(orderTemp);
    setOrderBy(orderByTemp);
  };

  const handleSelectAllClick = (checked) => {
    if (checked) {
      const newSelected = new Map();
      data.map((n) => newSelected.set(n.id, true));
      setSelected(newSelected);
      setSelectedData(newSelected);
      return;
    }
    setSelected(new Map([]));
    setSelectedData(new Map([]));
  };

  // HandleSingle chekcbox click
  const handleClick = (e, id) => {
    console.log({ id });
    const newSelected = new Map(selected);
    const value = newSelected.get(id);
    let isActive = true;
    if (value) {
      isActive = false;
    }
    newSelected.set(id, isActive);
    setSelected(newSelected);
    setSelectedData(newSelected);
  };

  const handleChangePage = (item, page) => {
    setPage(page);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(Number(event.target.value));
  };

  const isSelected = (id) => !!selected.get(id);

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

  return (
    <Col lg={12}>
      <Card>
        <CardBody>
          <div className="react-table__wrapper">
            <div className="card__title">
              <h3
                className="bold-text"
                data-tip="Aici vin informatiile pe care le vrei tu"
              >
                🧾 FACTURI PROFORME
                <InformationOutlineIcon
                  style={{ marginBottom: "4px", marginLeft: "15px" }}
                />
              </h3>
              <ReactTooltip
                place="right"
                className="extraClass"
                delayHide={1000}
                effect="solid"
                type="info"
              />
            </div>
          </div>
          <div className="material-table__wrap">
            <Table className="material-table">
              <MatTableHead
                numSelected={[...selected].filter((el) => el[1]).length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={data.length}
              />
              <TableBody>
                {data
                  .sort(getSorting(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((d) => {
                    const select = isSelected(d.id);
                    console.log({ id: d.id });
                    console.log({ select });
                    return (
                      <TableRow
                        className="material-table__row"
                        role="checkbox"
                        onClick={(event) => handleClick(event, d.id)}
                        aria-checked={select}
                        tabIndex={-1}
                        key={d.id}
                        selected={select}
                      >
                        <TableCell
                          className="material-table__cell"
                          padding="checkbox"
                        >
                          <Checkbox
                            checked={select}
                            className="material-table__checkbox"
                          />
                        </TableCell>
                        <TableCell
                          className="material-table__cell material-table__cell-right"
                          component="th"
                          scope="row"
                          padding="none"
                        >
                          {d.restaurant}
                        </TableCell>
                        <TableCell
                          className="material-table__cell material-table__cell-right"
                          component="th"
                          scope="row"
                          padding="none"
                        >
                          {d.product_title}
                        </TableCell>
                        <TableCell className="material-table__cell material-table__cell-right">
                          {d.final_price}
                        </TableCell>
                        <TableCell className="material-table__cell material-table__cell-right">
                          {d.final_price} 
                        </TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 49 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          <TablePagination
            component="div"
            className="material-table__pagination"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            backIconButtonProps={{ "aria-label": "Previous Page" }}
            nextIconButtonProps={{ "aria-label": "Next Page" }}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            nextIGetInPerPageOptions={[5, 10, 15]}
            dir="ltr"
            SelectProps={{
              inputProps: { "aria-label": "rows per page" },
              native: true,
            }}
          />
        </CardBody>
      </Card>
    </Col>
  );
};

const mapStateToProps = (state) => {
  return {
    invoices: state.products.invoiceDetails,
    user: state.products.user,
  };
};
export default connect(mapStateToProps, {
  SupplierInvoiceFetch,
})(MatTable);
