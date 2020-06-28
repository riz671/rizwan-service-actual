import React from 'react';
import Logo from './Logo.svg';
import Women from './Main_Nav-Subcomponents/Women.jsx';
import Men from './Main_Nav-Subcomponents/Men.jsx';
import Accessories from './Main_Nav-Subcomponents/Accessories.jsx';
import We_Are_Alo from './Main_Nav-Subcomponents/We_Are_Alo.jsx';
import Search from './Main_Nav-Subcomponents/Search.jsx';
import Authentication from './Main_Nav-Subcomponents/Authentication.jsx';
import Cart from './Main_Nav-Subcomponents/Cart.jsx';

export default class Main_Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="Main-Nav Menu">

        <div id="logo">
          <Logo />
        </div>

        <div className="Main-Nav Menu-Choices">
          <ul>
            <li className="main-nav__item"> <a href=""> {"NEW IN"} </a> </li>
            <Women name={"WOMEN"} />
            <Men name={"MEN"} />
            <Accessories name={"ACCESSORIES"} />
          </ul>
        </div>

        <div className="Main-Nav we-are-alo">
          <ul>
            <We_Are_Alo name={"WE ARE ALO"} />
          </ul>
        </div>

        <div className="Main-Nav Navbar-icons">
          <ul>
            <Search />
            <Authentication />
            <Cart />
          </ul>
        </div>

      </div >
    )
  }
}