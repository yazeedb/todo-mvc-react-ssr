import '../style.scss';

import React from 'react';

function Home(props) {
  const title = React.createElement('h1', null, 'todos');
  return React.createElement('div', { className: 'container' }, title);
}

export default Home;
