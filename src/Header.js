import React from 'react';
import BackNav from './BackNav';

const Header = ({children}) =>
  <div className="header">
  <div className="container hc">
  <h3>{children}</h3>
  <BackNav />
  </div>
  </div>

export default Header