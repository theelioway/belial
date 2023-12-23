"use strict";

export const reduceAncestorClassesOf =
  (entity) => (acc, potentialAncestor, _, array) => {
    const { id } = potentialAncestor;
    const { subClassOf } = entity;
    if (subClassOf && subClassOf.includes(id)) {
      acc.push(
        potentialAncestor,
        ...array.reduce(reduceAncestorClassesOf(potentialAncestor), []),
      );
    }
    return acc;
  };

export default reduceAncestorClassesOf;
