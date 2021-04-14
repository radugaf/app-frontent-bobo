import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import classNames from "classnames";
import PropTypes from "prop-types";
import Topbar from "./topbar/Topbar";
import Sidebar from "./sidebar/Sidebar";
import {
  changeThemeToDark,
  changeThemeToLight,
} from "../../redux/actions/themeActions";
import {
  changeMobileSidebarVisibility,
  changeSidebarVisibility,
} from "../../redux/actions/sidebarActions";
import { CustomizerProps, SidebarProps, ThemeProps, RTLProps, UserProps } from "../../shared/prop-types/ReducerProps";
import { BasicNotification } from "../../shared/components/Notification";
import NotificationSystem from "rc-notification";

let notification = null;

NotificationSystem.newInstance(
  { style: { top: 65 } },
  (n) => (notification = n)
);

const Layout = ({ dispatch, sidebar, theme, rtl, user }) => {
  // useEffect(() => {
  //   const title = 'API Response';
  //   const message = 'Test notification'; 

  //   const notificationInitialProps = {
  //     content: (
  //       <BasicNotification title={title} message={message} theme={theme} />
  //     ),
  //     closable: true,
  //     duration: 5,
  //     style: { top: 0, left: "calc(100vw - 100%)" },
  //     className: `right-up ${rtl.direction}-support`,
  //   };
  //   notification.notice(notificationInitialProps);

  //   const notificationIntervalKey = setInterval(() => {
  //     notification.notice({
  //       ...notificationInitialProps,
  //       content: (
  //         <BasicNotification title={title} message={message} theme={theme} />
  //       ),
  //       className: `right-up ${rtl.direction}-support`,
  //       onClose() {
  //         setTimeout(() => {
  //           clearInterval(notificationIntervalKey);
  //         });
  //       },
  //     });
  //   }, 100);
  //   setTimeout(() => {
  //     clearInterval(notificationIntervalKey);
  //   }, 5000);
  //   return () => notification.destroy();
  // }, [rtl.direction, theme]);

  const sidebarVisibility = () => {
    dispatch(changeSidebarVisibility());
  };

  const mobileSidebarVisibility = () => {
    dispatch(changeMobileSidebarVisibility());
  };

  const changeToDark = () => {
    dispatch(changeThemeToDark());
  };

  const changeToLight = () => {
    dispatch(changeThemeToLight());
  };

  const layoutClass = classNames({
    layout: true,
    "layout--collapse": sidebar.collapse,
  });

  return (
    <div className={layoutClass}>
      <Topbar
        changeMobileSidebarVisibility={mobileSidebarVisibility}
        changeSidebarVisibility={sidebarVisibility}
        user={user}
      />
      <Sidebar
        sidebar={sidebar}
        changeToDark={changeToDark}
        changeToLight={changeToLight}
        changeMobileSidebarVisibility={changeMobileSidebarVisibility}
        user={user}
      />
    </div>
  );
};

Layout.propTypes = {
  dispatch: PropTypes.func.isRequired,
  sidebar: SidebarProps.isRequired,
  customizer: CustomizerProps.isRequired,
  theme: ThemeProps.isRequired,
  rtl: RTLProps.isRequired,
  user: UserProps.isRequired,
};

export default withRouter(
  connect((state) => {
   console.log({state})
   return{ customizer: state.customizer,
    sidebar: state.sidebar,
    theme: state.theme,
    rtl: state.rtl,
    user: state.products.user,
  }})(Layout)
);
