const BasicTableData = () => {
  const header = [
    { id: 1, title: '#' },
    { id: 2, title: 'Denumire' },
    { id: 3, title: 'Valoare' },
  ];

  const headerResponsive = [
    { id: 1, title: '#' },
    { id: 2, title: 'Denumire' },
    { id: 3, title: 'Valoare' },
  ];

  const rows = [{
    id: 1,
    first: 'Valoare energetica',
    last: '35 kcal/100 g',

  }, {
    id: 2,
    first: 'Glucide',
    last: '	6.3 g/100 g',

  }, {
    id: 3,
    first: 'Fibre',
    last: '	1.1 g/100 g',

  }, {
    id: 4,
    first: 'Sodiu',
    last: '0.35 g/100 g',

  }, {
    id: 5,
    first: 'Proteine',
    last: '	1.2 g/100 g',
    
  }];

  const basicTableData = { tableHeaderData: header, tableHeaderResponsiveData: headerResponsive, tableRowsData: rows };
  return basicTableData;
};

export default BasicTableData;
