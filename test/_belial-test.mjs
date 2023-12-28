"use strict";
import { should } from "chai";
import belial from "../belial.js";

should();

describe("module | belial", () => {
  it("exports these functions", async () => {
    let oldab = await belial();
    Object.keys(oldab).should.be.eql([
      "defaultSort",
      "filterChildClassesOf",
      "filterPropertiesOf",
      "findOf",
      "mapSimplerGraph",
      "metaOf",
      "objectArrayReduceProperties",
      "objectArraySortById",
      "reduceAncestorClassesOf",
      "reduceDescendantClassesOf",
      "sortLowercaseFirst",
      "sortObjectEntriesLowercaseFirst",
      "valueOf",
    ]);
  });
});
