"use strict";

/**
 * Creates a reducer function for use with array.reduce() that transforms and
 * accumulates object properties. The reducer assigns each transformed
 * property to an accumulator object using the property's 'id' as the key.
 *
 * @param {Function} transformer - A function that takes a property object
 *                                 and transforms it in some way.
 * @returns {Function} Returns a reducer function that takes an accumulator
 *                     object and a `entity` object. The reducer applies the
 *                     transformer function to the property and assigns the
 *                     result to the accumulator object using the property's
 *                     'id' as the key.
 * @example
 * const properties = [{ id: 'a', value: 10 }, { id: 'b', value: 20 }];
 * const doubleValue = prop => prop.value * 2;
 * const doubledProperties = properties.reduce(reduceProperties(doubleValue), {});
 * // doubledProperties will be { a: 20, b: 40 }
 */
export const objectArrayReduceProperties = (transformer) => (acc, entity) => {
  acc[entity.id] = transformer(entity);
  return acc;
};

export default objectArrayReduceProperties;
