import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="d-flex flex-wrap justify-content-center align-items-center py-3 border-top" style={{ backgroundColor: '#162447', color: '#fff', fontWeight: 'bold', margin: '0' }}>
      <div className="col-md-4 d-flex align-items-center justify-content-center">
        <Link to="/" className="mb-3 me-2 mb-md-0 text-decoration-none lh-1">
          {/* <svg className="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg> */}
        </Link>
        <span >© 2024 BiteBlitz, Inc</span>
      </div>

      <ul className="nav col-md-4 justify-content-center list-unstyled d-flex">
        {/* <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
        <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
        <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li> */}
      </ul>
    </footer>
  );
}
