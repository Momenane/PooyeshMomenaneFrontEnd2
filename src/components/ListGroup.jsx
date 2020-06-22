import React from 'react'
import PropTypes from 'prop-types'
import './ListGroup.css'

const ListGroup = ({
  items,
  textProperty,
  valueProperty,
  selectedItem,
  onItemSelect
}) => {

  return (
    <div className="d-flex flex-wrap needy-selectBtnContainer">
      {items.map(item => {
        // console.log(selectedItem[textProperty]===item[textProperty])

        return(
        <button
          onClick={() => onItemSelect(item)}
          key={item[valueProperty]}
          className={
            item[textProperty] === selectedItem[textProperty] ? "btn needy-selectBtn active" : "needy-selectBtn"
          }
        >
          {item[textProperty]}
        </button>
      )})}
    </div>
  );
};

ListGroup.propTypes={
  onItemSelect:PropTypes.func.isRequired,
  items:PropTypes.array.isRequired,
  selectedItem:PropTypes.object
}

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "id"
};

export default ListGroup;