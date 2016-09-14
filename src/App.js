import React from 'react';
import { Link } from 'react-router';
import './styles/main.scss';

const App = ({ children }) => (
  <div>
    <header className="header">
      <div className="container">
        <Link to="/">
          <img src="/images/logo-dark.svg" alt="Colorizr" width="200" />
        </Link>
        <nav className="menu">
          <ul>
            <li className="menu__item">
              <Link
                className="menu__link"
                activeClassName="menu__link--active"
                to="/create"
              >
                Create
              </Link>
            </li>
            <li className="menu__item">
              <Link
                className="menu__link"
                activeClassName="menu__link--active"
                to="/explore"
              >
                  Explore
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    {children}

    <footer className="footer">
      <div className="container">
          by Zhelnov Ivan
      </div>
    </footer>
  </div>
);

App.propTypes = {
  children: React.PropTypes.object
};

export default App;
