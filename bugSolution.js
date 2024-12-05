function foo(a, b) {
  // Handle undefined and null values
  const aValue = a ?? 0;
  const bValue = b ?? 0;

  return aValue + bValue;
}

console.log(foo(undefined, 5)); // 5
console.log(foo(null, 5)); // 5
console.log(foo(void 0, 5)); // 5