import '../style.scss';
import React from 'react';

import List from '../list';

function Home(props) {
  const title = React.createElement('h1', null, 'todos');

  return React.createElement('div', {
    className: 'container',
    children: [title, List()]
  });
}

export default Home;
