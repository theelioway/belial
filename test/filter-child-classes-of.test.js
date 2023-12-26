"use strict";
import { should } from "chai";
import { readJsonFileRelatively } from "../utils/index.js";

import filterChildClassesOf from "../src/filter-child-classes-of.js";

should();

describe("function | filterChildclassesOf", () => {
  it("filtered `tinyUniverse` descendant classes of `Cosmos`", async () => {
    const graph = await readJsonFileRelatively(
      import.meta.url,
      "./fixtures/tinyUniverse-simplified-20231222.json",
    );
    graph
      .filter(filterChildClassesOf("Cosmos"))
      .map((p) => p.id)
      .should.eql([]);
  });
  it("filtered `schemaorgv9.0` descendant classes of `CommunicateAction`", async () => {
    const graph = await readJsonFileRelatively(
      import.meta.url,
      "./fixtures/schemaorg-simplified-20231222.json",
    );
    graph
      .filter(filterChildClassesOf({ id: "CommunicateAction" }))
      .map((p) => p.id)
      .sort()
      .should.eql([
        "AskAction",
        "CheckInAction",
        "CheckOutAction",
        "CommentAction",
        "InformAction",
        "InviteAction",
        "ReplyAction",
        "ShareAction",
      ]);
  });
});
