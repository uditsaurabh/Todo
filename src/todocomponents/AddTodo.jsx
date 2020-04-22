import React from "react";

function AddTodo(props) {
  return (
    <div>
      <div className="form-group">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            props.addItem(e.target[0].value);
            e.target[0].value = "";
          }}
        >
          <textarea className="form-control" rows="5" id="comment"></textarea>
          <button className="btn btn-success">Add Me !!!</button>
        </form>
      </div>
    </div>
  );
}

export default AddTodo;
