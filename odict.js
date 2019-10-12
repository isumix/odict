/* eslint-disable no-unused-vars */

export const isDict = dict =>
  typeof dict === 'object' && dict !== null && ! Array.isArray(dict);

export const isEmpty = dict => {
  for (const key in dict)
    return false;
  return true;
};

export const reduce = (dict, reducer, accumulator) => {
  for (const key in dict)
    accumulator = reducer(accumulator, dict[key], key, dict);
  return accumulator;
};

export const map = (dict, mapper) => {
  const result = [];
  for (const key in dict)
    result.push(mapper(dict[key], key, dict));
  return result;
};

export function* iterable (dict) {
  let count = 0;
  for (const key in dict) {
    yield [key, dict[key]];
    count ++;
  }
  return count;
}
