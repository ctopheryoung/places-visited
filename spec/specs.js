describe("Place", function() {
  it("will create a new object", function() {
    var testPlace = new Place("Ecuador", "2013", "plantains");
    expect(testPlace.locale).to.equal("Ecuador");
    expect(testPlace.year).to.equal("2013");
    expect(testPlace.food).to.equal("plantains");
  });
});
