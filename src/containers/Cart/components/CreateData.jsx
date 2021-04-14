import { useMemo } from 'react';

const defaultColumn=[
  {
    accessor: 'product_item_id',
    Header: 'id',
    width: 65,
  },
  {
    accessor: 'product_title',
    Header: 'Nume Produs',
    disableGlobalFilter: true,
  },
  {
    accessor: 'quantity_by_restaurant',
    Header: 'Cantitate Dorita',
  },
  {
    accessor: 'custom_status',
    Header: 'Status',
  
  },
]
const CreateDataOrderListTable = ({newColumns=defaultColumn}) => {
  const columns = useMemo(
    () =>newColumns , [],
  );

  const data = [];
  
  const orderListTableData = { tableHeaderData: columns, tableRowsData: data };
  return orderListTableData;
};

export default CreateDataOrderListTable;
