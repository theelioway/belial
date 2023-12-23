"use strict";

export const reduceDescendantClassesOf =
  (entity) => (acc, potentialDesendant, _, array) => {
    const { subClassOf } = potentialDesendant;
    const { id } = entity;
    if (subClassOf && subClassOf.includes(id)) {
      acc.push(
        potentialDesendant,
        ...array.reduce(reduceDescendantClassesOf(potentialDesendant), []),
      );
    }
    return acc;
  };

export default reduceDescendantClassesOf;
