import React from 'react';
import ReactDOM from './node_modules/react-dom';
import App from './components/App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
