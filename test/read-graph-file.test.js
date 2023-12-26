"use strict";
import { should } from "chai";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

import { readGraphFile, readGraphFileRelatively } from "../utils/index.js";

should();

let DIR = dirname(fileURLToPath(import.meta.url));

describe("function | readGraphFile", () => {
  it("gets quantumUniverse", async () => {
    const rdfPath = join(DIR, "./fixtures/quantumUniverse.jsonld");
    const GRAPH = await readGraphFile(rdfPath);
    GRAPH.length.should.eql(4);
  });
  it("gets tinyUniverse", async () => {
    const rdfPath = join(DIR, "./fixtures/tinyUniverse.jsonld");
    const GRAPH = await readGraphFile(rdfPath);
    GRAPH.length.should.eql(5);
  });
  it("gets schemaorg 9.0", async () => {
    const rdfPath = join(
      DIR,
      "../schemaorg/data/releases/9.0/schemaorg-all-http.jsonld",
    );
    const GRAPH = await readGraphFile(rdfPath);
    GRAPH.length.should.eql(2565);
  });
});

describe("function | readGraphFileRelatively", () => {
  it("gets quantumUniverse", async () => {
    const rdfPath = "./fixtures/quantumUniverse.jsonld";
    const GRAPH = await readGraphFileRelatively(import.meta.url, rdfPath);
    GRAPH.length.should.eql(4);
  });
  it("gets tinyUniverse", async () => {
    const rdfPath = "./fixtures/tinyUniverse.jsonld";
    const GRAPH = await readGraphFileRelatively(import.meta.url, rdfPath);
    GRAPH.length.should.eql(5);
  });
  it("gets schemaorg 9.0", async () => {
    const rdfPath = "../schemaorg/data/releases/9.0/schemaorg-all-http.jsonld";
    const GRAPH = await readGraphFileRelatively(import.meta.url, rdfPath);
    GRAPH.length.should.eql(2565);
  });
});
