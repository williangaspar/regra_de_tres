Regra = require(".././www/js/regra.js");

describe("Regra", function() {
  console.log(Regra)

  it("Calcular N1", function(done) {
    expect(Regra([null, 100, 8, 80])).toBe(10);
    expect(Regra([null, 110, 10, 40])).toBe(27.5);
    done();
  });

  it("Calcular N2", function(done) {
    expect(Regra([10, null, 8, 80])).toBe(100);
    expect(Regra([5, null, 2, 8.3])).toBe(20.75);
    done();
  });

  it("Calcular N3", function(done) {
    expect(Regra([10, 100, null, 80])).toBe(8);
    expect(Regra([5, 20.75, null, 8.3])).toBe(2);
    done();
  });

  it("Calcular N4", function(done) {
    expect(Regra([10, 100, 8, null])).toBe(80);
    expect(Regra([5, 20.75, 2, null])).toBe(8.3);
    done();
  });

  it("Calcular todos os campos preenchidos", function(done) {
    expect(Regra([5, 20.75, 2, 8.2])).toBe("");
    done();
  });

});
