# JavaScript + Operator Unexpected Behavior with undefined and null

This repository demonstrates an unexpected behavior of JavaScript's `+` operator when used with `undefined` and `null` values.

## Bug Description

The `+` operator in JavaScript behaves differently when encountering `undefined` and `null`. When one operand is `undefined`, it coerces to `NaN`, leading to `NaN` as the result.  However, when one operand is `null`, it coerces to `0`, leading to a different outcome.

## Bug Reproduction

1. Clone this repository.
2. Open `bug.js`.
3. Run the code using Node.js or a similar JavaScript environment.
4. Observe the unexpected results.

## Solution

The solution involves explicitly checking for `undefined` and `null` values and handling them appropriately before performing the addition operation. This can be achieved by using a conditional statement to handle them or by using the nullish coalescing operator (`??`) to provide default values.

## Additional Notes

This behavior is important to be aware of to prevent unexpected results in your JavaScript applications. Always handle `undefined` and `null` appropriately to avoid these issues. 