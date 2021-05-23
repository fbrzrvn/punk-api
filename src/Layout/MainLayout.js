import React, { useEffect } from 'react';
import Header from '../components/Header';
import '../index.css';

const MainLayout = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main className="main__container">{children}</main>
    </>
  );
};

export default MainLayout;
