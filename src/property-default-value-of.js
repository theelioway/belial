"use strict";

export const propertyDefaultValueOf = (entity) => {
  let { id, rangeIncludes, domainIncludes } = entity;
  if (id === "mainEntityOfPage") {
    return domainIncludes[0];
  } else if (id === "itemListElement") {
    return [];
  } else if (
    ["minPrice", "maxPrice", "minValue", "maxValue", "price", "value"].includes(
      id,
    )
  ) {
    return 0.0;
  } else if (rangeIncludes.includes("DateTime")) {
    return new Date(0).toISOString();
  } else if (rangeIncludes.includes("Date")) {
    return new Date(0).toISOString().slice(0, 10);
  } else if (rangeIncludes.includes("Time")) {
    return new Date(0).toISOString().slice(11).replace("Z", "");
  } else if (rangeIncludes.includes("Boolean")) {
    return false;
  } else if (
    rangeIncludes.some((entityType) =>
      ["Distance", "Duration", "Integer", "Number", "Quantity"].includes(
        entityType,
      ),
    )
  ) {
    return 0;
  } else {
    return "";
  }
};

export default propertyDefaultValueOf;
