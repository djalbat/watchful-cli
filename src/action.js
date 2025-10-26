"use strict";

import { executeOperations } from "./utilities/callback";

export default function action(operations, callback, context) {
  executeOperations(operations, (completed) => {
    const success = completed;  ///

    callback(success);
  }, context);
}
