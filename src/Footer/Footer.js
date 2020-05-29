import React from "react";
import {MDBContainer} from "mdbreact";

const FooterPage = () => {
  return (
      <div className="footer-copyright text-center py-3" style={{fontSize: 12}}>
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://github.com/gcrespe"> Giuliano Crespe </a>
        </MDBContainer>
      </div>
  );
}

export default FooterPage;