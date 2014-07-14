describe("titleCase", function() {

});

describe("titleCase", function() {
  it("capitalizes the first letter of a word", function() {
    titleCase("cat").should.equal("Cat");
  });
  it("capitalizes the first letter of a word regardless of length", function() {
    titleCase("awesomeness").should.equal("Awesomeness");
  });
  it("capitalizes the first letter of a word and the rest is in lowercase", function() {
    titleCase("caroLyn").should.equal("Carolyn");
  });
  it("capitalizes the first letter of all words and the lowercases the rest", function() {
    titleCase("auSTin stewARd").should.equal("Austin Steward");
  });
  it("ignores capitalizing the first letter of 'and', 'or', & 'the'", function() {
    titleCase("ovER The AND OR").should.equal("Over the and or");
  });
});
