describe('pigVowel', function() {
  it("will add, 'ay,' to words beginning with a vowel", function() {
    expect(pigVowel("apple")).to.equal("appleay");
  });
});

describe('pigLatin', function() {
  it("will add, 'ay,' to words beginning with a vowel", function() {
    expect(pigVowel("apple")).to.equal("appleay");
  });
  it("will append first letter of word and, 'ay' to end of word", function() {
    expect(pigConsanant("torch")).to.equal("orchtay");
  });
  it("will append first consecutive consanants and, 'ay,' to end of word", function() {
    expect(pigConsanant("school")).to.equal("oolschay");
  });
  it("if 'qu' is one of the opening consanants, it will be appended to end of word followed by 'ay'", function() {
    expect(pigConsanant("queal")).to.equal("ealquay");
  });
});

describe('pigConsanant', function() {
  it("will append first letter of word and, 'ay' to end of word", function() {
    expect(pigConsanant("torch")).to.equal("orchtay");
  });
  it("will append first consecutive consanants and, 'ay,' to end of word", function() {
    expect(pigConsanant("school")).to.equal("oolschay");
  });
});
