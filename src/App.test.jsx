import { describe, it, expect } from "vitest";
import { render, screen } from "./utils/test-utils";
import App from "./App";

describe("App", () => {
  it("renders Header text", () => {
    render(<App />);
    expect(screen.getByText("Little Lemon Restaurant")).toBeInTheDocument();
  });
});
