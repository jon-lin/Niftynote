import React from 'react';
import HomeSidebar from './home_sidebar/home_sidebar';

const App = ({ children }) => (
  <div>
    <HomeSidebar />
    { children }
  </div>
);

export default App;
