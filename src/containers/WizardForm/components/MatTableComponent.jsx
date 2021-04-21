import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import CreateTableData from "./CreateData";
import MatTable from "./MatTable";
import { SupplierInvoiceFetch } from "../../../redux/actions/products";

const MatTableComponent = ({ invoices, SupplierInvoiceFetch }) => {
  const reactTableData = CreateTableData();
  const [selectData, setSelectData] = useState([]);

  console.log({ invoices });
  useEffect(() => {
    SupplierInvoiceFetch();
  }, []);
  console.log({ selectData, invoices });

  
  return (
            <MatTable data={invoices} setSelectedData={(data)=>setSelectData(data)} />
  );
};

const mapStateToProps = (state) => {
  return {
    invoices: state.products.invoiceDetails,
  };
};

export default connect(mapStateToProps, {
  SupplierInvoiceFetch,
})(MatTableComponent);
