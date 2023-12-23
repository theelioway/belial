"use strict";
import { should } from "chai";
import belial from "../belial.js";

should();

describe("module | belial", () => {
  it("all of belial without raising an error", async () => {
    let oldab = await belial();
    Object.keys(oldab).should.be.eql([
      "defaultSort",
      "filterChildClassesOf",
      "filterPropertiesOf",
      "findOf",
      "mapSimplerGraph",
      "propertyDefaultValueOf",
      "reduceAncestorClassesOf",
      "reduceDescendantClassesOf",
      "sortById",
      "sortLowercaseFirst",
      "sortObjectEntriesLowercaseFirst",
    ]);
  });
});
