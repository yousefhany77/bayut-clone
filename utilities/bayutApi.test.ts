import * as bayut from "./bayutAPI";
import { server } from "../mocks/server";
beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe("should test API utility functions", () => {
  it("shoud fetch search autocomplete Results", async () => {
    const controller = new AbortController();
    const hits = await bayut.search("dubai", controller.signal)
    expect(hits).toHaveLength(25)
  });
  it("shoud return empty array if there are no hits",async () => {
    const controller = new AbortController();
    const hits = await bayut.search("", controller.signal)
    expect(hits).toHaveLength(0)
  })
  it("shoud return error",async () => {
    const controller = new AbortController();
    const hits = await bayut.search("ERROR", controller.signal)
    expect(hits).toBe("Request failed with status code 400")
  })
});
