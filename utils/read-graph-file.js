"use strict";
import { readJsonFile, readJsonFileRelatively } from "./read-json-file.js";

export const readGraphFile = async (schemaPath) => {
  const GRAPH = await readJsonFile(schemaPath);
  return GRAPH["@graph"];
};
export const readGraphFileRelatively = async (
  importMetaUrl,
  pathRelatively,
) => {
  const GRAPH = await readJsonFileRelatively(importMetaUrl, pathRelatively);
  return GRAPH["@graph"];
};
export default readGraphFile;
