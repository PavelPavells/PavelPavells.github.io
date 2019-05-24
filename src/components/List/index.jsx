import React, { Component } from "react";
import Tree from "react-animated-tree";
import { ListItem } from "./ListItem";
import { entityChildrenFiniteEquipmentsGet } from "../../utils/entity";

//
// view
//

class View extends Component {
  render() {
    const { buildings } = this.props;
    return (
      <div style={style.container}>
        {buildings.map(building => {
          return this.renderEntity(building);
        })}
      </div>
    );
  }

  renderEntity = entity => {
    const { equipments } = this.props;
    const entityEquipments = entityChildrenFiniteEquipmentsGet(
      entity,
      equipments
    );
    if (!entity.rooms && !entity.children) {
      return (
        <Tree
          content={
            <ListItem
              count={entityEquipments && entityEquipments.length}
              entity={entity}
              onClick={this.handleEntityClick}
            />
          }
          key={entity.id || entity._id}
          style={style.tree}
        />
      );
    } else {
      return (
        <Tree
          content={
            <ListItem
              count={entityEquipments && entityEquipments.length}
              entity={entity}
              onClick={this.handleEntityClick}
            />
          }
          key={entity.id || entity._id}
          style={style.tree}
        >
          {entity.rooms
            ? entity.rooms.map(entity => this.renderEntity(entity))
            : entity.children.map(entity => this.renderEntity(entity))}
        </Tree>
      );
    }
  };

  handleEntityClick = entity => {
    this.props.entitySelect(entity);
  };
}

//
// style
//

const style = {
  container: {
    alignItems: "flex-start",
    backgroundColor: "#373737",
    color: "white",
    display: "flex",
    flexDirection: "column",
    fill: "white",
    justifyContent: "flex-start",
    padding: "10px",
    width: "300px"
  },
  tree: {
    textAlign: "left",
    whiteSpace: "wrap"
  }
};

//
// export
//

export const List = View;
