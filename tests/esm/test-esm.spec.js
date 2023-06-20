
import { getModuleSystem } from "@nidomiro/node-modulesystem-check";

describe("esm", () => {
  it('should return "esm"', () => {
    expect(getModuleSystem()).toBe("esm");
  });
});
