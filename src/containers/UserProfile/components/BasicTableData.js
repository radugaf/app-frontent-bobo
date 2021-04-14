const BasicTableData = () => {
  const header = [
    { id: 1, title: "#" },
    { id: 2, title: "User" },
    { id: 3, title: "Products" },
    { id: 4, title: "Documents" },
    { id: 5, title: "Casul de cumparaturi" },
    { id: 6, title: "Wishlist" },
  ];

  const headerResponsive = [
    { id: 1, title: "#" },
    { id: 2, title: "User" },
    { id: 3, title: "Products" },
    { id: 4, title: "Documents" },
    { id: 5, title: "Casul de cumparaturi" },
    { id: 6, title: "Wishlist" },
  ];

  const rows = [
    {
      id: 1,
      first: "User",
      last: "Products",
      username: <input type="checkbox" className="colored-click" />,
      status: <input type="checkbox" className="colored-click" />,
      badge: "Work",
      age: "21",
      date: "1990/12/01",
      location: "Melbourne",
      status_resp: "success",
      badge_resp: "In Progress",
    },
 
  ];

  const basicTableData = {
    tableHeaderData: header,
    tableHeaderResponsiveData: headerResponsive,
    tableRowsData: rows,
  };
  return basicTableData;
};

export default BasicTableData;
