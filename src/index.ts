export function isDecimalString(value: string): boolean {
  if (typeof value !== 'string') throw new TypeError('Expected text');
  return /^[+-]?(?:\d+(?:\.\d*)?|\.\d+)$/u.test(value);
}
