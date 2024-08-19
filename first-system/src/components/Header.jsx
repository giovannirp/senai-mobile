import React from 'react';

const Header = () => {
  const headerStyle = {
    backgroundColor: 'rgb(209 211 213)',
    padding: '20px',
    textAlign: 'center',
    borderBottom: '2px solid rgb(7 74 140)'
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