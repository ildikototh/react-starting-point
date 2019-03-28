import React from 'react';
import { any } from 'prop-types';
import classNames from 'classnames';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = ({
  children, className,
}) => {
  const classes = classNames(
    {
      [className]: true,
    },
  );

  return (
    <div>
      <Header />
      <main className={classes}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: any,
  className: any,
};

Layout.defaultProps = {
  children: <span />,
  className: '',
};

export default Layout;
