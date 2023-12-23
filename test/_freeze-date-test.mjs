import { should } from "chai";
should();

function freezeDate() {
  return new Date("1983-06-12");
}
let originalDateNow = Date.now;

describe("date | example: freeze dates in tests", () => {
  beforeEach(() => {
    Date.now = freezeDate;
  });

  afterEach(() => {
    Date.now = originalDateNow;
  });

  it("travelled back in time to olden days", () => {
    Date.now().should.eql(new Date("1983-06-12"));
  });
});
