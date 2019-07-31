import React, { useState } from 'react';
import DropdownList from './DropdownList';

function Dropdown(props) {
  const [openToggle, setOpenToggle] = useState(false);

  const toggleOpen = (e) => {
    e.preventDefault();
    setOpenToggle(prevState => !prevState);
    //document.querySelector('#wrapper').classList.toggle('open');
  } 
  return (
    <div id="wrapper" className={openToggle ? 'dropdown-wrapper open' : 'dropdown-wrapper'}>
      <button id="toggle" className="btn" onClick={toggleOpen}>
        <span>Account Settings</span>
        <i className="material-icons">public</i>
      </button>
      <DropdownList />
    </div>
  )
}

export default Dropdown

