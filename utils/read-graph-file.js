"use strict";
import { fsReadJson } from "@elioway/abdiel";

export const readGraphFile = async (schemaPath) => {
  const GRAPH = await fsReadJson(schemaPath);
  return GRAPH["@graph"];
};

export default readGraphFile;
