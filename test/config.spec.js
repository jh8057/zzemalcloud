import { mount } from "@vue/test-utils";
import configEnv from "~/server/config/config.js";

describe("config", () => {
  test("is a config - PORT.", () => {
    expect(configEnv.PORT).toBe(3000);
  });

});
