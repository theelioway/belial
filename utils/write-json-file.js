"use strict";
import { promises as fs } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

export const writeJsonFile = async (schemaPath, json) =>
  await fs.writeFile(schemaPath, JSON.stringify(json, null, 2), "utf-8");

export const writeJsonFileRelatively = async (
  importMetaUrl,
  pathRelatively,
  json,
) =>
  await writeJsonFile(
    join(dirname(fileURLToPath(importMetaUrl)), pathRelatively),
    json,
  );

export default writeJsonFile;
