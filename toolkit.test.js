// @ts-nocheck
import {
  addTransparency,
  formatDateAndTime,
  copyTextToClipboard,
  openNewTab,
  formatBalance,
  getTimeAgo,
  goTo,
  areObjectsEqual,
  extractKeys,
  deepClone,
  handle,
} from "./toolkit";

// Before all tests
beforeAll(() => {
  // Mock the global.navigator object
  global.navigator = { clipboard: { writeText: jest.fn() } };
  // Mock the global.window object
  global.window = { open: jest.fn() };
});

// After all tests
afterAll(() => {
  // Clean up the mocks
  global.navigator = undefined;
  global.window = undefined;
});

describe("Nuxt-Toolkit Tests", () => {
  // Test for addTransparency
  test("addTransparency function", () => {
    expect(addTransparency("#ff5733", 0.5)).toBe("rgba(255, 87, 51, 0.5)");
  });

  // Test for formatDateAndTime
  test("formatDateAndTime function", () => {
    const timestamp = new Date("2023-01-01T00:00:00Z").getTime();
    expect(formatDateAndTime(timestamp)).toEqual({
      date: "1 Jan, 2023",
      time: "12:00 AM",
    });
  });

  // Test for copyTextToClipboard
  test("copyTextToClipboard function", () => {
    // Mock clipboard and notifier
    global.navigator.clipboard = { writeText: jest.fn() };
    const notifier = { showMessage: jest.fn() };
    copyTextToClipboard.call({ $notifier: notifier }, "test link");
    expect(global.navigator.clipboard.writeText).toHaveBeenCalledWith(
      "test link"
    );
    expect(notifier.showMessage).toHaveBeenCalledWith({
      content: "Copied to clipboard",
    });
  });

  // Test for openNewTab
  test("openNewTab function", () => {
    // Mock window.open
    global.window.open = jest.fn();
    openNewTab("https://example.com");
    expect(global.window.open).toHaveBeenCalledWith(
      "https://example.com",
      "_blank"
    );
  });

  // Test for formatBalance
  test("formatBalance function", () => {
    expect(formatBalance(1234567.89)).toBe("1,234,567.89");
    expect(formatBalance(null)).toBe("0.0");
  });

  // Test for getTimeAgo
  test("getTimeAgo function", () => {
    const oneHourAgo = Date.now() - 3600000;
    expect(getTimeAgo(oneHourAgo)).toContain("hour ago");
  });

  // Test for goTo
  test("goTo function", () => {
    const router = { push: jest.fn() };
    goTo.call({ $router: router }, "/test-path");
    expect(router.push).toHaveBeenCalledWith({ path: "/test-path" });
  });

  // Test for areObjectsEqual
  test("areObjectsEqual function", () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 1, b: 2 };
    const obj3 = { a: 2, b: 3 };
    expect(areObjectsEqual(obj1, obj2)).toBeTruthy();
    expect(areObjectsEqual(obj1, obj3)).toBeFalsy();
  });

  // Test for extractKeys
  test("extractKeys function", () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(extractKeys(obj, ["a", "c"])).toEqual({ a: 1, c: 3 });
  });

  // Test for deepClone
  test("deepClone function", () => {
    const obj = { a: { b: 2 } };
    const clonedObj = deepClone(obj);
    expect(clonedObj).toEqual(obj);
    expect(clonedObj).not.toBe(obj);
  });

  describe("handle function", () => {
    it("should resolve data correctly", async () => {
      const promise = Promise.resolve("test data");
      const [data, error] = await handle(promise);
      expect(data).toBe("test data");
      expect(error).toBeUndefined();
    });

    it("should catch errors correctly", async () => {
      const promise = Promise.reject(new Error("test error"));
      const [data, error] = await handle(promise);
      expect(data).toBeUndefined();
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe("test error");
    });
  });
});
