import { should } from "chai";
should();

describe("mocha | never fails", () => {
  it("passed as expected", () => {
    true.should.be.ok;
  });
});
