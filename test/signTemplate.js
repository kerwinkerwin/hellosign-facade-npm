var expect = require("chai").expect;
var request = require("request");
require('dotenv').load();
var hellosignCredentials = {apiKey:process.env.HELLOSIGN_KEY};
var hellosign = require('../index.js')(hellosignCredentials);

describe("signTemplate", function(done){
  var testContact = {
    firstName :"john",
    lastName : "tester",
    email: "test@test.com"
  };

  it("is defined",function(done){
    expect(hellosign).to.have.ownProperty('signTemplate');
    done();
  });
});
