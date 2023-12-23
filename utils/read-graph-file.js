"use strict";
import { readJsonFile, readJsonFileRelatively } from "./read-json-file.js";

export const readGraphFile = (schemaPath) => readJsonFile(schemaPath)["@graph"];

export const readGraphFileRelatively = (importMetaUrl, pathRelatively) =>
  readJsonFileRelatively(importMetaUrl, pathRelatively)["@graph"];

export default readGraphFile;
