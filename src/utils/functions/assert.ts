export function assert(condition: boolean, error?: string): asserts condition {
  if (condition === false) {
    throw new Error(error ?? 'Assertion failed');
  }
}
