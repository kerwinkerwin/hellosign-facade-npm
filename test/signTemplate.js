var expect = require("chai").expect;
var request = require("request");
require('dotenv').load();
var hellosignCredentials = {apiKey:process.env.HELLOSIGN_KEY};
var hellosign = require('../index.js')(hellosignCredentials);

describe("signTemplate", function(){
  console.log(hellosign.signTemplate);

  before(function(done){
    this.timeout(5000);
    var tester = {
      name:"john",
      email:"kerwin@enspiral.com"
    };
    console.log("in");
    hellosign.signTemplate(tester,function(response){
      console.log("hello");
      console.log(response);
      done();
    });
  });
  it("is defined",function(done){
    expect(hellosign).to.have.ownProperty('signTemplate');
    done();
  });
  // it("sends an invoice", function(done){
  // });
});
