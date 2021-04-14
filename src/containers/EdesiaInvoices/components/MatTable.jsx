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

const MatTable = ({ data, SupplierInvoiceFetch }) => {
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
      return;
    }
    setSelected(new Map([]));
  };

  // HandleSingle chekcbox click
  const handleClick = (id) => {
    const newSelected = new Map(selected);
    const value = newSelected.get(id);
    let isActive = true;
    if (value) {
      isActive = false;
    }
    newSelected.set(id, isActive);
    setSelected(newSelected);
  };

  const handleChangePage = (item) => {
    setPage(item);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(Number(event.target.value));
  };

  const isSelected = (id) => !!selected.get(id);

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

  return (
    <>
      <Col md={12} lg={7}>
        <Card>
          <CardBody>
            <div className="card__title">
              <h3 className="bold-text">🧾 ACHTIA FACTURI</h3>
            </div>
            {/* <MatTableToolbar
              selectedData={[...selected]
                .filter((el) => el[1])
                .map((el) => el[0])}
              numSelected={[...selected].filter((el) => el[1]).length}
              onRequestSort={handleRequestSort}
            /> */}
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
                            {d.invoice_number}
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
                            {d.final_price} RON
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
    </>
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
