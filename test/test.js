'use strict';

const should = require("chai").should();

describe("Scenario 1", function () {
  it("should succeed", function () {

    "test".should.equal("test");
  });

  it("should fail", function () {
    "test".should.equal("test1");
  });
});