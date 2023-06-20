describe("commonjs", () => {
  it('should return "commonjs"', () => {
    const { getModuleSystem } = require("node-modulesystem-check");

    expect(getModuleSystem()).toBe("commonjs");
  });
});
