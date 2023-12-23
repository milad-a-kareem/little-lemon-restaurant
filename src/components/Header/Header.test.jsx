import { describe, it, expect } from "vitest";
import { render, screen } from "../../utils/test-utils";
import Header from "./Header";

describe("Header", () => {
  it("the text is visible", () => {
    render(<Header />);
    expect(screen.getByText("Header")).toBeInTheDocument();
  });
});
