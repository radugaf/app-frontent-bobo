import React, { useState } from "react";
import PropTypes from "prop-types";
import { Collapse, Button, ButtonToolbar, Card } from "reactstrap";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import NotificationsIcon from "mdi-react/NotificationsIcon";

const notifications = [
  {
    id: 0,
    ava: `${process.env.PUBLIC_URL}/img/topbar/ava.png`,
    name: "Cristopher Changer",
    message: " has started a new project",
    date: "09:02",
  },
  {
    id: 1,
    ava: `${process.env.PUBLIC_URL}/img/topbar/ava2.png`,
    name: "Sveta Narry",
    message: " has closed a project",
    date: "09:00",
  },
  {
    id: 2,
    ava: `${process.env.PUBLIC_URL}/img/topbar/ava3.png`,
    name: "Lory McQueen",
    message: " has started a new project as a Project Managert",
    date: "08:43",
  },
  {
    id: 3,
    ava: `${process.env.PUBLIC_URL}/img/topbar/ava2.png`,
    name: "Cristopher Changer",
    message: " has closed a project",
    date: "08:43",
  },
];

const TopbarNotification = ({ handleSubmit }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleNotification = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="topbar__collapse">
      <button
        className="topbar__btn"
        type="button"
        onClick={toggleNotification}
      >
        <NotificationsIcon />
      </button>
      {isCollapsed && (
        <button
          className="topbar__back"
          type="button"
          onClick={toggleNotification}
        />
      )}
      <Collapse isOpen={isCollapsed} className="topbar__collapse-content .custom-ontop">
        <div className='custom-dropdown-component custom .custom-ontop'>
          <p className="topbar__collapse-title">Cum te putem ajuta?</p>
          <form className="form form--horizontal custom-collapse-form" onSubmit={handleSubmit}>
            <Field name="textarea" component="textarea" type="text" placeholder="Ce prob ai patron?" />
            <Button color="primary" type="submit" className='custom-collapse-button'>
              Submit
            </Button>
        </form>
        </div>
        
      </Collapse>
    </div>
  );
};

TopbarNotification.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: "horizontal_form", // a unique identifier for this form
})(TopbarNotification);
