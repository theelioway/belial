"use strict";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import fs from "fs";

export const writeJsonFile = (schemaPath, json) =>
  fs.writeFileSync(schemaPath, JSON.stringify(json, null, 2), "utf-8");

export const writeJsonFileRelatively = (importMetaUrl, pathRelatively, json) =>
  writeJsonFile(
    join(dirname(fileURLToPath(importMetaUrl)), pathRelatively),
    json,
  );

export default writeJsonFile;
