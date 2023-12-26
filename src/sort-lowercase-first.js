"use strict";
export const intlCollator = Intl.Collator("kf", { caseFirst: "upper" }).compare;

export const defaultSort = (a, b) => {
  const strA = String(a);
  const strB = String(b);

  if (strA < strB) {
    return -1;
  }
  if (strA > strB) {
    return 1;
  }
  return 0;
};

export const sortLowercaseFirst = (a, b) => {
  const strA = String(a);
  const strB = String(b);

  const upperStrA = strA[0].toUpperCase();
  const upperStrB = strB[0].toUpperCase();

  if (upperStrA === strA[0] && upperStrB !== strB[0]) {
    return 1;
  }

  if (upperStrA !== strA[0] && upperStrB === strB[0]) {
    return -1;
  }

  return defaultSort(a, b);
};

export const sortObjectEntriesLowercaseFirst = (a, b) =>
  sortLowercaseFirst(a[0], b[0]);

export default sortLowercaseFirst;
