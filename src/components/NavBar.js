import React from 'react';

export function NavBar(props) {
  return (
    <nav className='my-2 my-md-0 mr-md-3'>
      {props.miNavbarsito.map((element, index) => {
        return (
          <a
            className='p-2 text-dark'
            rel='noopener noreferrer'
            target='_blank'
            href={element.url}
            key={`element-navbar-${index}`}
            id={`element-navbar-${index}`} 
          >
            {element.elementName}
          </a>
        );
      })}
    </nav>
  );
}