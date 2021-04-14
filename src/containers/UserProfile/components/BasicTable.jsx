import React from "react";
import { useTranslation } from "react-i18next";
import { Card, CardBody, Col, Badge, Table } from "reactstrap";
import BasicTableData from "./BasicTableData";

const { tableHeaderData, tableRowsData } = BasicTableData();

const BasicTable = () => {
  const { t } = useTranslation("common");

  return (
    <Col lg={12}>
      <Card>
        <Table responsive hover>
          <thead>
            <tr>
              {tableHeaderData.map((item) => (
                <th key={item.id}>{item.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableRowsData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.first}</td>
                <td>{item.status}</td>
                <td>{item.username}</td>
                <td>{item.status}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </Col>
  );
};

export default BasicTable;
