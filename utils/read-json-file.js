"use strict";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import fs from "fs";

export const readJsonFile = (schemaPath) =>
  JSON.parse(fs.readFileSync(schemaPath, "utf-8"));

export const readJsonFileRelatively = (importMetaUrl, pathRelatively) =>
  readJsonFile(join(dirname(fileURLToPath(importMetaUrl)), pathRelatively));

export default readJsonFile;
