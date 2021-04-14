import React, { useState } from 'react';
import {
  Nav, NavItem, NavLink, TabContent, TabPane,
} from 'reactstrap';
import classnames from 'classnames';
import BasicTable from './BasicTable'

const ProductTabs = () => {
  const [activeTab, setActiveTabs] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTabs(tab);
  };

  return (
    <div className="tabs">
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => toggle('1')}
          >
            Detalii Pastrare Produs
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => toggle('2')}
          >
            Ingrediente
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => toggle('3')}
          >
            Nutritie
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab} className="typography-message">
        <TabPane tabId="1">
          <p>
A se pastra la loc uscat si racoros, ferit de actiunea directa a soarelui.
          </p>
         
        </TabPane>
        <TabPane tabId="2">
          <p>Rosii, sare, corector de aciditate (acid citric).
          </p>
        </TabPane>
        <TabPane tabId="3">
          <BasicTable />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default ProductTabs;
