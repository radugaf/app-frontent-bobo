import React from 'react';
import {
  Card, CardBody, Col
} from 'reactstrap';

const TotalBookings = () => (
  <Col md={12} xl={3} lg={6} xs={12}>
    <Card>
      <CardBody className="dashboard__booking-card">
        <div className="dashboard__booking-total-container">
          <h5 className="dashboard__booking-total-title dashboard__booking-total-title--green">
            472
          </h5>
        </div>
        <h5 className="dashboard__booking-total-description">Comenzi Completate</h5>
      </CardBody>
    </Card>
  </Col>
);

export default TotalBookings;
