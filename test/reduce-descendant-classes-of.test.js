"use strict";
import { should } from "chai";
import { readJsonFileRelatively } from "../utils/index.js";

import reduceDescendantClassesOf from "../src/reduce-descendant-classes-of.js";

should();

describe("function | reduceDescendantClassesOf", () => {
  it("reduces `tinyUniverse` descendant classes of `Cosmos`", async () => {
    const graph = readJsonFileRelatively(
      import.meta.url,
      "./fixtures/tinyUniverse-simplified-20231222.json",
    );
    graph
      .reduce(reduceDescendantClassesOf({ id: "Cosmos" }), [])
      .should.eql([]);
  });
  it("reduces `schemaorgv9.0` descendant classes of `InformAction`", async () => {
    const graph = readJsonFileRelatively(
      import.meta.url,
      "./fixtures/schemaorg-simplified-20231222.json",
    );
    graph
      .reduce(reduceDescendantClassesOf({ id: "InformAction" }), [])
      .map((p) => p.id)
      .should.eql(["ConfirmAction", "RsvpAction"]);
  });
  it("reduces `schemaorgv9.0` descendant classes of `CommunicateAction`", async () => {
    const graph = readJsonFileRelatively(
      import.meta.url,
      "./fixtures/schemaorg-simplified-20231222.json",
    );
    graph
      .reduce(reduceDescendantClassesOf({ id: "CommunicateAction" }), [])
      .map((p) => p.id)
      .sort()
      .should.eql([
        "AskAction",
        "CheckInAction",
        "CheckOutAction",
        "CommentAction",
        "ConfirmAction",
        "InformAction",
        "InviteAction",
        "ReplyAction",
        "RsvpAction",
        "ShareAction",
      ]);
  });
});
