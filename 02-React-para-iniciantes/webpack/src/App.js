import React from 'react';
import './app.css';

function App() {
  return (
    <div>
      <a href="https://www.google.com">Google</a>
    </div>
  );
};


export default App;


/** sem a configuração do webpack.config.js
 * React.createElement(
    'a',
    { href: 'https://www.google.com'},
    'Origamid'
  );
 */