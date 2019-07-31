import React from 'react'
import PropTypes from 'prop-types'

function DropdownItem(props) {
  const {items, active, onSelectItem} = props;

  return (
    <ul id="dropdown" className="dropdown">
    {items.map((item, index) => (
      <li key = {index} className={item === active ? 'active' : null}>
        <a href='#' onClick={() => onSelectItem(item)}>{item}</a>
      </li>
    ))}
    </ul>
  )
}

DropdownItem.propTypes = {
  items: PropTypes.array.isRequired,
  active: PropTypes.string.isRequired,
  onSelectItem: PropTypes.func.isRequired
}

export default DropdownItem

