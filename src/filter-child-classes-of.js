"use strict";

export const filterChildClassesOf =
  ({ id }) =>
  ({ subClassOf }) =>
    subClassOf && subClassOf.includes(id);

export default filterChildClassesOf;
