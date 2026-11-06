import * as api from '@lp-labs/decimal-string-validator';
import { isDecimalString } from '@lp-labs/decimal-string-validator';
console.log(isDecimalString('-.75'));
// @ts-expect-error invalid argument must be rejected by declarations
api.isDecimalString(1);
