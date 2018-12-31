import React from 'react';
import ReactDOM from 'react-dom';
import MainNav from '../components/MainNav.jsx';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainNav />, div);
  ReactDOM.unmountComponentAtNode(div);
});
