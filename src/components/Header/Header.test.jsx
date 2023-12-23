import { describe, it, expect } from "vitest";
import { render, screen } from "../../utils/test-utils";
import Header from "./Header";

describe("Header", () => {
  it("renders header title text", () => {
    render(<Header />);
    expect(screen.getByText("Little Lemon Restaurant")).toBeInTheDocument();
  });
});
