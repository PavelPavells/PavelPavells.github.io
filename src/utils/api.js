/* global Scorocode */

Scorocode.Init({
  ApplicationID: "3196b2e873234547ad8b06ed636d3538",
  JavaScriptKey: "5e85f685a23e44e6abad95accc1dd2ea",
  MasterKey: "659d718ff9664f6fafbdb79efc93cb34"
});

export const apiBuildingsGet = async () => {
  const Buildings = new Scorocode.Query("buildings");
  const finded = await Buildings.find();
  const buildings = finded.result;
  return buildings;
};

export const apiEquipmentsGet = async () => {
  const Equipment = new Scorocode.Query("equipment");
  const finded = await Equipment.find();
  const equipments = finded.result;
  return equipments;
};

export const apiEquipmentAdd = async equipment => {
  const Equipment = new Scorocode.Object("equipment");
  Equipment.set("name", equipment.name)
    .set("room", equipment.room)
    .set("count", equipment.count);
  const result = await Equipment.save();
  return result;
};

export const apiEquipmentDelete = async equipmentId => {
  const Equipment = new Scorocode.Object("equipment");
  const item = await Equipment.getById(equipmentId);
  await Equipment.remove(item);
};

export const apiEquipmentUpdate = async equipment => {
  const Equipment = new Scorocode.Object("equipment");
  Equipment.set("_id", equipment._id)
    .set("name", equipment.name)
    .set("count", equipment.count);
  const result = await Equipment.save();
  return result;
};
