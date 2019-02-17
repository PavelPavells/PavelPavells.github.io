import React, { Component } from "react";
import { entityChildrenFiniteEquipmentsGet } from "utils";
import { Equipment } from "./Equipment";

//
// view
//

class View extends Component {
  componentDidUpdate(prevProps) {
    const {
      props: { equipments, selectedEntity }
    } = this;
    if (
      selectedEntity &&
      (selectedEntity !== prevProps.selectedEntity ||
        equipments !== prevProps.equipments)
    ) {
      const currentEquipments = entityChildrenFiniteEquipmentsGet(
        selectedEntity,
        equipments
      );
      this.setState({ currentEquipments });
    }
  }
  state = {
    currentEquipments: []
  };

  render() {
    const {
      props: { onEntityDelete },
      state: { currentEquipments }
    } = this;
    return (
      <div style={style.container}>
        {currentEquipments.map(equipment => (
          <Equipment
            equipment={equipment}
            key={equipment._id}
            onDelete={onEntityDelete}
          />
        ))}
      </div>
    );
  }
}

//
// style
//

const style = {
  container: {
    alignContent: "flex-start",
    alignItems: "flex-start",
    display: "flex",
    flexFlow: "row wrap",
    flex: 1,
    justifyContent: "center",
    overflowY: "scroll",
    padding: "10px"
  }
};

//
// export
//

export const Viewport = View;
