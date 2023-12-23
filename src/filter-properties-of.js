"use strict";

/**
 * @example graph.filter mainEntityOfPage's properties
 * @reurns [identifier,potentialAction,url,etc]
 */
export const filterPropertiesOf =
  ({ id }) =>
  ({ domainIncludes }) =>
    domainIncludes && domainIncludes.includes(id);

export default filterPropertiesOf;
