import { useMemo } from "react";

const CreateTableData = () => {
  const columns = useMemo(
    () => [
      {
        Header: "#",
        accessor: "id",
        disableGlobalFilter: true,
        width: 65,
      },
      {
        Header: "Furnizor",
        accessor: "product_image",
        disableGlobalFilter: true,
        disableSortBy: true,
        width: 65,

      },
      {
        Header: "Data",
        accessor: "title",
      },
      {
        Header: "Adresa Livrare",
        accessor: "supplier_company.name",
      },
      {
        Header: "Serie / Numar",
        accessor: "total_stock",
        disableGlobalFilter: true,
      },
      {
        Header: "Total",
        accessor: "price",
        disableGlobalFilter: true,
      },
      {
        Header: "Status",
        accessor: "quantity_type",
        disableGlobalFilter: true,
      },
      {
        Header: "Button",
        accessor: "button",
        disableGlobalFilter: true,
        disableSortBy: true,
        width: 160,
      },
    ],
    []
  );

  const data = [];

  const reactTableData = { tableHeaderData: columns, tableRowsData: data };
  return reactTableData;
};

export default CreateTableData;
