import React, { Component } from "react";

//
// view
//

class View extends Component {
  render() {
    const {
      handleDelete,
      handleEdit,
      props: { equipment }
    } = this;
    return (
      <div style={style.container}>
        <p>
          <strong>{equipment.name}</strong>
        </p>
        <p>Количество: {equipment.count}</p>
        <button onClick={handleDelete}>Удалить</button>
        <button onClick={handleEdit}>Изменить</button>
      </div>
    );
  }

  handleEdit = () => {
    const { equipment, onEdit } = this.props;
    onEdit(equipment);
  };

  handleDelete = () => {
    const { equipment, onDelete } = this.props;
    onDelete(equipment._id);
  };
}

//
// style
//

const style = {
  container: {
    backgroundColor: "#aaa",
    borderRadius: "5px",
    height: "100px",
    padding: "10px",
    margin: "10px",
    textAlign: "center",
    width: "300px"
  }
};

//
// export
//

export const Equipment = View;
