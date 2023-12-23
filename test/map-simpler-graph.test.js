"use strict";
import { should } from "chai";
import {
  readGraphFileRelatively,
  readJsonFileRelatively,
  writeJsonFileRelatively,
} from "../utils/index.js";

import mapSimplerGraph from "../src/map-simpler-graph.js";

should();

let newFixtureDate = false;
/** @TODO Uncomment if anything changes and you need a new fixture. */
// newFixtureDate = new Date().toISOString().replace(/\D/g, "").slice(0, 8);

describe("function | mapSimplerGraph", () => {
  it("simplified the `quantumUniverse` graph", async () => {
    const simpler = readGraphFileRelatively(
      import.meta.url,
      "./fixtures/quantumUniverse.jsonld",
    ).map(mapSimplerGraph("d:/"));
    if (newFixtureDate) {
      writeJsonFileRelatively(
        import.meta.url,
        `./fixtures/quantumUniverse-simplified-${newFixtureDate}.json`,
        simpler,
      );
    }
    const graph = readJsonFileRelatively(
      import.meta.url,
      "./fixtures/quantumUniverse-simplified-20231222.json",
    );
    simpler.should.eql([
      {
        id: "Cosmos",
        type: ["Class"],
      },
      {
        id: "Bigness",
        type: ["Class"],
      },
      {
        id: "Integer",
        type: ["Class", "DataType"],
      },
      {
        id: "isBig",
        type: ["Property"],
        domainIncludes: ["Cosmos"],
        rangeIncludes: ["Bigness", "Text"],
      },
    ]);
    simpler.should.eql(graph);
  });
  it("simplified the `tinyUniverse` graph", async () => {
    const simpler = readGraphFileRelatively(
      import.meta.url,
      "./fixtures/tinyUniverse.jsonld",
    ).map(mapSimplerGraph("d:/"));
    simpler.should.eql([
      {
        id: "Cosmos",
        type: ["Class"],
        comment: "Comment Cosmos",
      },
      {
        id: "size",
        type: ["Property"],
        comment: "Comment size",
        domainIncludes: ["Cosmos"],
        rangeIncludes: ["Bigness", "Text"],
      },
      {
        id: "Bigness",
        type: ["Class"],
        comment: "Comment Bigness",
      },
      {
        id: "Big",
        type: ["Bigness"],
        comment: "Comment Big",
      },
      {
        id: "Text",
        type: ["Class", "DataType"],
        comment: "Comment Text",
      },
    ]);
    if (newFixtureDate) {
      writeJsonFileRelatively(
        import.meta.url,
        `./fixtures/tinyUniverse-simplified-${newFixtureDate}.json`,
        simpler,
      );
    }
    const graph = readJsonFileRelatively(
      import.meta.url,
      "./fixtures/tinyUniverse-simplified-20231222.json",
    );
    simpler.should.eql(graph);
  });
  it("simplified the `schemaorgv9.0` graph", async () => {
    const simpler = readGraphFileRelatively(
      import.meta.url,
      "../schemaorg/data/releases/9.0/schemaorg-all-http.jsonld",
    ).map(mapSimplerGraph("http://schema.org/"));
    if (newFixtureDate) {
      writeJsonFileRelatively(
        import.meta.url,
        `./fixtures/schemaorg-simplified-${newFixtureDate}.json`,
        simpler,
      );
    }
    const graph = readJsonFileRelatively(
      import.meta.url,
      "./fixtures/schemaorg-simplified-20231222.json",
    );
    simpler.should.eql(graph);
  });
});
