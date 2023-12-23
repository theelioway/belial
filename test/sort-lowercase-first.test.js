"use strict";
import { should } from "chai";

import {
  defaultSort,
  sortLowercaseFirst,
  sortObjectEntriesLowercaseFirst,
} from "../src/sort-lowercase-first.js";

should();

const DEALT = [
  "CAT",
  "CaT",
  "TAC",
  "TAc",
  "TaC",
  "Tac",
  "cAT",
  "cAt",
  "cAt",
  "caT",
  "cat",
  "tAc",
  "tAc",
  "tac",
].sort();

const EXPECTED = [
  "cAT",
  "cAt",
  "cAt",
  "caT",
  "cat",
  "tAc",
  "tAc",
  "tac",
  "CAT",
  "CaT",
  "TAC",
  "TAc",
  "TaC",
  "Tac",
];

describe("function | sortLowercaseFirst", () => {
  it("`.sort(sortLowercaseFirst)` unremittingly", async () => {
    let UNSORTED = [...DEALT];
    let SORTED = [...UNSORTED];
    SORTED.sort(sortLowercaseFirst);
    let REVERSED = [...SORTED].reverse();
    REVERSED.should.not.equal(SORTED, "REVERSED.should.not.equal(SORTED)");
    REVERSED.should.not.eql(SORTED, "REVERSED.should.not.eql(SORTED)");
    let UNREVERSED = [...REVERSED].sort(sortLowercaseFirst);
    UNREVERSED.sort(sortLowercaseFirst);
    UNREVERSED.should.eql(SORTED, "UNREVERSED.should.eql(SORTED)");
    SORTED.should.eql(UNREVERSED, "SORTED.should.eql(UNREVERSED)");
    SORTED.should.eql(EXPECTED, "SORTED.should.eql(EXPECTED)");
  });
  it("`.reverse().sort(defaultSort)` same as `DEALT`", async () => {
    let SORTED = [...DEALT].reverse().sort(defaultSort);
    SORTED.should.not.equal(DEALT, "SORTED.should.not.equal(DEALT)");
    SORTED.should.eql(DEALT, "SORTED.should.eql(DEALT)");
  });
  it("`.reverse().sort()` same as `DEALT`", async () => {
    let SORTED = [...DEALT].reverse().sort();
    SORTED.should.not.equal(DEALT, "SORTED.should.not.equal(DEALT)");
    SORTED.should.eql(DEALT, "SORTED.should.eql(DEALT)");
  });
  it("`Object.entries.sort()` keys", async () => {
    let SORTED = Object.entries({
      sameAs: "",
      subjectOf: "",
      identifier: "thing",
      url: "",
      ItemList: {
        itemListElement: [],
        itemListOrder: "",
        numberOfItems: 0,
      },
      image: "",
      additionalType: "",
      disambiguatingDescription: "",
      alternateName: "",
      mainEntityOfPage: "Thing",
      name: "",
      potentialAction: "",
      description: "",
    }).sort(sortObjectEntriesLowercaseFirst);
    SORTED.should.eql([
      ["additionalType", ""],
      ["alternateName", ""],
      ["description", ""],
      ["disambiguatingDescription", ""],
      ["identifier", "thing"],
      ["image", ""],
      ["mainEntityOfPage", "Thing"],
      ["name", ""],
      ["potentialAction", ""],
      ["sameAs", ""],
      ["subjectOf", ""],
      ["url", ""],
      [
        "ItemList",
        { itemListElement: [], itemListOrder: "", numberOfItems: 0 },
      ],
    ]);
    Object.fromEntries(SORTED).should.eql({
      additionalType: "",
      alternateName: "",
      description: "",
      disambiguatingDescription: "",
      identifier: "thing",
      image: "",
      mainEntityOfPage: "Thing",
      name: "",
      potentialAction: "",
      sameAs: "",
      subjectOf: "",
      url: "",
      ItemList: { itemListElement: [], itemListOrder: "", numberOfItems: 0 },
    });
  });
});
