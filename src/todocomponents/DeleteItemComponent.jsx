import React from "react";

function DeleteItemComponent(props) {
  return (
    <>
      <button className="btn btn-warning" onClick={props.deleteItem}>
        Delete
      </button>
    </>
  );
}

export default DeleteItemComponent;
