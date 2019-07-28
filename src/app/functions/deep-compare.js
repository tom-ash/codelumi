export function differentObjects(a, b) {
  return !deepCompare(a, b)
}

export function deepCompare(a, b) {
  if (a === b) return true;
  if (!a || !b || (typeof a !== 'object' && typeof b !== 'object')) return a === b;
  if (a === null || a === undefined || b === null || b === undefined) return false;
  let keys = Object.keys(a);
  if (keys.length !== Object.keys(b).length) return false;
  return keys.every(k => deepCompare(a[k], b[k]));
}