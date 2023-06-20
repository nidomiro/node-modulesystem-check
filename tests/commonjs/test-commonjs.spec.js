describe("commonjs", () => {
  it('should return "commonjs"', () => {
    const { getModuleSystem } = require("@nidomiro/node-modulesystem-check");

    expect(getModuleSystem()).toBe("commonjs");
  });
});
