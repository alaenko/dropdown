import React, { useState } from 'react';
import DropdownItem from './DropdownItem';

function DropdownList(props) {
  const [active, setActive] = useState('Profile Information');
  const items = ['Profile Information', 'Change Password', 'Become PRO', 'Help', 'Log Out'];

  const onSelectItem = item => {
    setActive(item);
  }
        
  return (
    <DropdownItem items={items} active={active} onSelectItem={onSelectItem}/>
  )
}


export default DropdownList

