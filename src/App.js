import React from 'react';
import Dropdown from './Dropdown';

function App() {
  const dropdownItems = ['Yes', 'Probably Not', 'No'];

  return (
    <div className="App">
      <Dropdown items={dropdownItems} />
    </div>
  );
}

export default App;
