"use strict";
import { should } from "chai";
import propertyDefaultValueOf from "../src/property-default-value-of.js";

should();

describe("function | propertyDefaultValueOf", () => {
  it("Integer", async () => {
    propertyDefaultValueOf({
      id: "doesntMatter",
      rangeIncludes: ["Integer"],
    }).should.be.eql(0);
  });
  it("Distance", async () => {
    propertyDefaultValueOf({
      id: "doesntMatter",
      rangeIncludes: ["Distance"],
    }).should.be.eql(0);
  });
  it("Duration", async () => {
    propertyDefaultValueOf({
      id: "doesntMatter",
      rangeIncludes: ["Duration"],
    }).should.be.eql(0);
  });
  it("Number", async () => {
    propertyDefaultValueOf({
      id: "doesntMatter",
      rangeIncludes: ["Number"],
    }).should.be.eql(0);
  });
  it("Quantity", async () => {
    propertyDefaultValueOf({
      id: "doesntMatter",
      rangeIncludes: ["Quantity"],
    }).should.be.eql(0);
  });
  it("Text", async () => {
    propertyDefaultValueOf({
      id: "doesntMatter",
      rangeIncludes: ["Text"],
    }).should.be.eql("");
  });
  it("DateTime", async () => {
    propertyDefaultValueOf({
      id: "doesntMatter",
      rangeIncludes: ["DateTime"],
    }).should.be.eql("1970-01-01T00:00:00.000Z");
  });
  it("Date", async () => {
    propertyDefaultValueOf({
      id: "doesntMatter",
      rangeIncludes: ["Date"],
    }).should.be.eql("1970-01-01");
  });
  it("Time", async () => {
    propertyDefaultValueOf({
      id: "doesntMatter",
      rangeIncludes: ["Time"],
    }).should.be.eql("00:00:00.000");
  });
  it("Boolean", async () => {
    propertyDefaultValueOf({
      id: "doesntMatter",
      rangeIncludes: ["Boolean"],
    }).should.be.false;
  });
  it("minPrice, maxPrice, minValue, maxValue, price, value", async () => {
    let props = [
      "minPrice",
      "maxPrice",
      "minValue",
      "maxValue",
      "price",
      "value",
    ];
    for (let p = 0; p < props.length; p++) {
      let propName = props[p];
      propertyDefaultValueOf({
        id: propName,
        rangeIncludes: ["DoesntMatter"],
      }).should.be.eql(0.0);
    }
  });
  it("mainEntityOfPage", async () => {
    propertyDefaultValueOf({
      id: "mainEntityOfPage",
      domainIncludes: ["Matters"],
      rangeIncludes: ["DoesntMatter"],
    }).should.be.eql("Matters");
  });
  it("else defaults Text", async () => {
    propertyDefaultValueOf({
      id: "doesntMatter",
      rangeIncludes: ["DoesntMatter"],
    }).should.be.eql("");
  });
});
