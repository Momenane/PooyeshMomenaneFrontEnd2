import React from 'react'
import PropTypes from 'prop-types'
import './ListGroupPanel.css'

const ListGroupPanel = ({
  items,
  textProperty,
  valueProperty,
  selectedItem,
  onItemSelect
}) => {

  return (
    <div className="d-flex flex-wrap panel-selectBtnContainer">
      {items.map(item => {
        return(
        <button
          onClick={() => onItemSelect(item)}
          key={item[valueProperty]}
          className={
            item[textProperty] === selectedItem[textProperty] ? "btn panel-selectBtn active" : "panel-selectBtn"
          }
        >
          {item[textProperty]}
        </button>
      )})}
    </div>
  );
};

ListGroupPanel.propTypes={
  onItemSelect:PropTypes.func.isRequired,
  items:PropTypes.array.isRequired,
  selectedItem:PropTypes.object
}

ListGroupPanel.defaultProps = {
  textProperty: "name",
  valueProperty: "id"
};

export default ListGroupPanel;