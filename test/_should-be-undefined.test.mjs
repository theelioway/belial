"use strict";
import { should } from "chai";

should();

const value = undefined;

describe("should | be `undefined` test", () => {
  it("crashes testing `undefined.should`", () => {
    try {
      // You cannot do this, even though it is documented.
      value.should.be.undefined;
    } catch (error) {
      String(error).should.be.equal(
        "TypeError: Cannot read properties of undefined (reading 'should')",
      );
      String(error).should.include("TypeError");
    }
  });
  it("testing `undefined` with `should()`", () => {
    should().equal(value, undefined);
  });
});
