import React from 'react';

const Header = () => {
  const headerStyle = {
    backgroundColor: '#f8f9fa',
    padding: '20px',
    textAlign: 'center',
    borderBottom: '1px solid #dee2e6'
  };

  const titleStyle = {
    margin: 0,
    fontSize: '24px',
    color: '#343a40'
  };

  return (
    <header style={headerStyle}>
      <h1 style={titleStyle}>Meu Site</h1>
    </header>
  );
};

export default Header;