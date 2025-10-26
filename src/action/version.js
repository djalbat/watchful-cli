"use strict";

import { packageUtilities } from "necessary";

import { WATCHFUL_CLI } from "../constants";

const { getVersion } = packageUtilities;

export default function versionAction() {
  const version = getVersion(); ///

  console.log(`${WATCHFUL_CLI} version ${version}`);
}
