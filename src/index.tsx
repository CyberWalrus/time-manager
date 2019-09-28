import React from 'react';
import { render } from 'react-dom';

const init = (): void => {
  render(<div>Hello</div>, document.querySelector('#app'));
};

init();
