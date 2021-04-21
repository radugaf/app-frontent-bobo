import { useMemo } from "react";

const CreateDataOrderListTable = () => {
  const defaultColumn = useMemo(
    () => [
      {
        accessor: "product_item_id",
        Header: "id",
        width: 65,
      },
      {
        Header: "Image",
        accessor: "product_image_url",
        disableGlobalFilter: true,
        disableSortBy: true,
        width: 65,
      },
      {
        accessor: "product_title",
        Header: "Nume Produs",
        disableGlobalFilter: true,
      },
      {
        accessor: "quantity_by_restaurant",
        Header: "Cantitate Dorita",
      },
      {
        accessor: "custom_status",
        Header: "Status",
      },
    ],
    []
  );

  const data = [];

  const orderListTableData = { tableHeaderData: defaultColumn, tableRowsData: data };
  return orderListTableData;
};


export default CreateDataOrderListTable;

