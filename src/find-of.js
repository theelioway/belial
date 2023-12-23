"use strict";

export const findOf =
  ({ id: entityId }) =>
  ({ id }) =>
    id === entityId;

export default findOf;
