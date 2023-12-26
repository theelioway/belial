"use strict";

export const reduceAncestorClassesOf =
  (entity) => (acc, potentialAncestor, _, GRAPH) => {
    const { id } = potentialAncestor;
    const { subClassOf } = entity;
    if (subClassOf && subClassOf.includes(id)) {
      acc.push(
        potentialAncestor,
        ...GRAPH.reduce(reduceAncestorClassesOf(potentialAncestor), []),
      );
    }
    return acc;
  };

export default reduceAncestorClassesOf;
