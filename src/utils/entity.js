export const entityChildrenFiniteEquipmentsGet = (entity, equipments) => {
  const entityChildrenFiniteIds = entityChildrenFiniteIdsGet(entity);
  const entityChildrenFiniteEquipments = entitiesEquipmentsGet(
    entityChildrenFiniteIds,
    equipments
  );
  return entityChildrenFiniteEquipments;
};

export const entityChildrenFiniteIdsGet = entity => {
  let entityIds = [];
  if (entity instanceof Array) {
    entity.forEach(entity => {
      entityIds = entityIds.concat(entityChildrenFiniteIdsGet(entity));
    });
  } else {
    if (entity.rooms) {
      entityIds = entityIds.concat(entityChildrenFiniteIdsGet(entity.rooms));
    } else if (entity.children) {
      entityIds = entityIds.concat(entityChildrenFiniteIdsGet(entity.children));
    } else {
      entityIds.push(entity.id);
    }
  }
  return entityIds;
};

export const entitiesEquipmentsGet = (entityIds, equipments) => {
  return entityIds
    .map(entityId =>
      equipments.filter(equipment => equipment.room === entityId)
    )
    .reduce((accumulator, item) => accumulator.concat(item), []);
};
