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
        Header: "Data Emiterii",
        accessor: "dataEmiterii",
      },
      {
        Header: "Data Platii",
        accessor: "dataPlatii",
      },
      {
        Header: "Serie",
        accessor: "serie",
        disableGlobalFilter: true,
      },
      {
        Header: "Numar",
        accessor: "numar",
        disableGlobalFilter: true,
      },
      {
        Header: "Valoare Totala",
        accessor: "valoareTotala",
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
