import React from "react";
import { Col, Container, Row } from "reactstrap";
import ProfileMain from "./components/ProfileMain";
import ProfileTabs from "./components/ProfileTabs";

const UserProfile = () => {
  return (
    <Container>
      <div className="profile">
        <Row>
          <ProfileTabs />
        </Row>
      </div>
    </Container>
  );
};

export default UserProfile;
