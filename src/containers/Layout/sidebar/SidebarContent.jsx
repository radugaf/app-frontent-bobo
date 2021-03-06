import React, { Component } from "react";
import PropTypes from "prop-types";
import SidebarLink from "./SidebarLink";
import SidebarCategory from "./SidebarCategory";

class SidebarContent extends Component {
  static propTypes = {
    changeToDark: PropTypes.func.isRequired,
    changeToLight: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  hideSidebar = () => {
    const { onClick } = this.props;
    onClick();
  };

  render() {
    const { changeToDark, changeToLight, user } = this.props;
    const userType = user;
    console.log({userType})

    return (
      <div className="sidebar__content">
        <ul className="sidebar__block">
          <SidebarLink
            icon="pie-chart"
            title="Dashboard"
            route="/pages/dashboard"
            onClick={this.hideSidebar}
          />
          {/* <SidebarLink
            icon="pie-chart"
            title="Order Details"
            route="/pages/order-details"
            onClick={this.hideSidebar}
          /> */}
        </ul>

        <ul className="sidebar__block">
          <SidebarCategory title="Catalog Produse" icon="paperclip">
            <SidebarLink
              icon="home"
              title="Bucatarie"
              route="/pages/products"
              onClick={this.hideSidebar}
            />
            <SidebarLink
              title="Bar"
              route="/pages/products-bar"
              onClick={this.hideSidebar}
            />
            <SidebarLink
              title="Non-Alimentare"
              route="/pages/products-non-alimentare"
              onClick={this.hideSidebar}
            />
            <SidebarLink
              title="Echipamente"
              route="/pages/products-echipamente"
              onClick={this.hideSidebar}
            />
            <SidebarLink
              title="Servicii"
              route="/pages/products-servicii"
              onClick={this.hideSidebar}
            />
            <SidebarLink
              title="Cofetarie"
              route="/pages/products-cofetarie"
              onClick={this.hideSidebar}
            />
          </SidebarCategory>
          <SidebarCategory title="Documente" icon="paperclip">
            <SidebarLink
              title="Procese Verbale"
              route="/pages/invoices"
              onClick={this.hideSidebar}
            />
            <SidebarLink
              title="Achita Facturi"
              route="/pages/edesia-invoices"
              onClick={this.hideSidebar}
            />
            <SidebarLink
              title="Proforme"
              route="/pages/pre-invoice"
              onClick={this.hideSidebar}
            />
          </SidebarCategory>
          {userType &&
            (userType.is_company_owner || userType.is_company_staff) && (
              <>
                <SidebarLink
                  icon="list"
                  title="Cereri de Oferta"
                  route="/pages/inquiries"
                  onClick={this.hideSidebar}
                />
                <SidebarLink
                  icon="chevron-right-circle"
                  title="Comenzi"
                  route="/pages/orders"
                  onClick={this.hideSidebar}
                />
              </>
            )}
          {userType &&
            (userType.is_restaurant_owner || userType.is_restaurant_staff) && (
              <>
                <SidebarLink
                  icon="cart"
                  title="Cosul meu"
                  route="/pages/cart"
                  onClick={this.hideSidebar}
                />
                <SidebarLink
                  icon="list"
                  title="Cere Oferta"
                  route="/pages/wishlist"
                  onClick={this.hideSidebar}
                />
                <SidebarLink
                  icon="checkmark-circle"
                  title="Receptie Marfa"
                  route="/pages/order-history"
                  onClick={this.hideSidebar}
                />
              </>
            )}
        </ul>
        <ul className="sidebar__block">
          <SidebarCategory title="Layout" icon="layers">
            <button
              type="button"
              className="sidebar__link"
              onClick={changeToLight}
            >
              <p className="sidebar__link-title">Light Theme</p>
            </button>
            <button
              type="button"
              className="sidebar__link"
              onClick={changeToDark}
            >
              <p className="sidebar__link-title">Dark Theme</p>
            </button>
          </SidebarCategory>
        </ul>
      </div>
    );
  }
}

export default SidebarContent;
