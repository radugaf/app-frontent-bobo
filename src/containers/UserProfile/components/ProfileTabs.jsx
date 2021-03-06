import React, { useState } from 'react';
import {
  Card, Col, Nav, NavItem, NavLink, TabContent, TabPane,
} from 'reactstrap';
import classnames from 'classnames';
import ProfileActivities from './ProfileActivities';
import showResults from './Show';
import ProfileSettings from './ProfileSettings';
import BusinessSettings from './BusinessSettings';

const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState('1');
  const initialValues = {
    username: 'Larry Boom',
    email: 'boom@mail.com',
  };

  const handleToggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  return (
    <Col md={12} lg={12} xl={12}>
      <Card>
        <div className="profile__card tabs tabs--bordered-bottom">
          <div className="tabs__wrap">
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '1' })}
                  onClick={() => handleToggle('1')}
                >
                  Permisiuni
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '2' })}
                  onClick={() => handleToggle('2')}
                >
                  Setari Business
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '3' })}
                  onClick={() => handleToggle('3')}
                >
                  Setari Profil
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <ProfileActivities />
              </TabPane>

              <TabPane tabId="2">
                <BusinessSettings />
              </TabPane>
        
              <TabPane tabId="3">
                <ProfileSettings onSubmit={showResults} initialValues={initialValues} />
              </TabPane>
            </TabContent>
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default ProfileTabs;
