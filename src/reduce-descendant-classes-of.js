"use strict";

export const reduceDescendantClassesOf =
  (entity) => (acc, potentialDesendant, _, GRAPH) => {
    const { subClassOf } = potentialDesendant;
    const { id } = entity;
    if (subClassOf && subClassOf.includes(id)) {
      acc.push(
        potentialDesendant,
        ...GRAPH.reduce(reduceDescendantClassesOf(potentialDesendant), []),
      );
    }
    return acc;
  };

export default reduceDescendantClassesOf;
