import React from 'react';
import { NavBar } from './NavBar';

function Header({companyName,navBarContent}) {
  return (
    <div className='d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm'>
      <h5 className='my-0 mr-md-auto font-weight-normal'>
          { companyName }
      </h5>

      <NavBar 
        miNavbarsito = {navBarContent}
      />

      <a className='btn btn-outline-primary' href='/'>
        Sign up
      </a>

    </div>
  );
}
export default Header;