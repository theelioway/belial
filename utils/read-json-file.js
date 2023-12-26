"use strict";
import { promises as fs } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

export const readJsonFile = async (schemaPath) => {
  const GRAPH = await fs.readFile(schemaPath, "utf-8");
  return JSON.parse(GRAPH);
};
export const readJsonFileRelatively = async (importMetaUrl, pathRelatively) =>
  await readJsonFile(
    join(dirname(fileURLToPath(importMetaUrl)), pathRelatively),
  );

export default readJsonFile;
