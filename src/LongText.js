import React from 'react';

const LongText = ({ children, bold }) =>
  <div id={bold && "bold"}className="longText">
    {children}
  </div>

  export default LongText;