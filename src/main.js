import React from 'react';
import ReactDOM from 'react-dom';

// Custom components
import Counter from './Counter';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <Counter />, document.getElementById('mount')
  );
});  
