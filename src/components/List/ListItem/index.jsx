import React, { Component } from "react";

//
// view
//

class View extends Component {
  render() {
    const {
      handleClick,
      props: {
        count,
        entity: { name: entityName }
      }
    } = this;
    return (
      <span
        onClick={handleClick}
        style={{ cursor: "pointer" }}
        title={entityName}
      >
        {count ? `${entityName}(${count})` : `${entityName}`}
      </span>
    );
  }
  handleClick = () => {
    this.props.onClick(this.props.entity);
  };
}

//
// export
//

export const ListItem = View;
