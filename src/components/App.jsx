import React, { Component } from "react";
import { List } from "./List";
import { Viewport } from "./Viewport";
import { apiBuildingsGet, apiEquipmentDelete, apiEquipmentsGet } from "utils";

//
// view
//

class View extends Component {
  async componentDidMount() {
    const buildings = await apiBuildingsGet();
    const equipments = await apiEquipmentsGet();
    this.setState({ buildings, equipments });
  }

  state = {
    buildings: [],
    selectedEntity: undefined
  };

  render() {
    const {
      entitySelect,
      handleEntityDelete,
      state: { buildings, equipments, selectedEntity }
    } = this;
    return (
      <div style={style.container}>
        <List
          buildings={buildings}
          entitySelect={entitySelect}
          equipments={equipments}
        />
        <Viewport
          buildings={buildings}
          equipments={equipments}
          onEntityDelete={handleEntityDelete}
          selectedEntity={selectedEntity}
        />
      </div>
    );
  }

  handleEntityDelete = async equipmentId => {
    await apiEquipmentDelete(equipmentId);
    const idx = this.state.equipments.findIndex(
      equipment => equipment._id === equipmentId
    );
    if (idx) {
      const newEquipments = this.state.equipments;
      newEquipments.splice(idx, 1);
      this.setState({ equipments: [...newEquipments] });
    }
  };

  entitySelect = entityId => {
    this.setState({ selectedEntity: entityId });
  };
}

//
// style
//

const style = {
  container: {
    display: "flex",
    height: "100%",
    flexDirection: "row",
    textAlign: "center",
    width: "100%"
  }
};

//
// export
//

export const App = View;
