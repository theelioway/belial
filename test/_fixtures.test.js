"use strict";
import fs from "fs";
import { should } from "chai";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

should();

let DIR = dirname(fileURLToPath(import.meta.url));

describe("test", () => {
  it("verifies `quantumUniverse` fixture", async () => {
    const graph = JSON.parse(
      fs.readFileSync(
        join(DIR, "./fixtures/quantumUniverse-simplified-20231222.json"),
        "utf-8",
      ),
    );
    graph.length.should.eql(4);
  });
  it("verifies `tinyUniverse` fixture", async () => {
    const graph = JSON.parse(
      fs.readFileSync(
        join(DIR, "./fixtures/tinyUniverse-simplified-20231222.json"),
        "utf-8",
      ),
    );
    graph.length.should.eql(5);
  });
  it("verifies `schemaorgv9.0` fixture", async () => {
    const graph = JSON.parse(
      fs.readFileSync(
        join(DIR, "./fixtures/schemaorg-simplified-20231222.json"),
        "utf-8",
      ),
    );
    graph.length.should.eql(2565);
  });
});
