"use strict";

export const filterPropertiesOf =
  ({ id }) =>
  ({ domainIncludes }) =>
    domainIncludes && domainIncludes.includes(id);

export default filterPropertiesOf;
