import React from 'react';
import {
  Card, CardBody, Col, Button,
} from 'reactstrap';
import MessageTextOutlineIcon from 'mdi-react/MessageTextOutlineIcon';

const Ava = `${process.env.PUBLIC_URL}/img/12.png`;

const ProfileMain = () => (
  <Col md={12} lg={12} xl={12}>
    <Card>
      <CardBody className="profile__card">
        <div className="profile__information">
          <div className="profile__avatar">
            <img src={Ava} alt="avatar" />
          </div>
          <div className="profile__data">
            <p className="profile__name">User</p>
            <p className="profile__work">Restaurant Name</p>
            <p className="profile__contact">User Email</p>
            <p className="profile__contact" dir="ltr">User Phone Number</p>
          </div>
        </div>
        <div className="profile__stats">
          <div className="profile__stat">
            <p className="profile__stat-number">0</p>
            <p className="profile__stat-title">Produse in Asteptare</p>
          </div>
          <div className="profile__stat">
            <p className="profile__stat-number">0</p>
            <p className="profile__stat-title">Produse Primite</p>
          </div>
          <div className="profile__stat">
            <p className="profile__stat-number">0</p>
            <p className="profile__stat-title">Numar Facturi</p>
          </div>
        </div>
      </CardBody>
    </Card>
  </Col>
);

export default ProfileMain;
