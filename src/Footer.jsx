import React from "react";

function Footer(){
    var d = new Date().getFullYear();
  return (<footer>
  <p>Copyright @{d}</p>
  </footer>);
}

export {Footer};