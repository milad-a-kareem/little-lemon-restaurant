import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "../../utils/test-utils";
import Form from "./Form";

describe("Form", () => {
  it("renders the form title", () => {
    render(<Form />);
    expect(screen.getByText("Table Reservation Form")).toBeInTheDocument();
  });
  it("submits the form successfully", () => {
    window.alert=()=>{};
    const alertSpy = vi.spyOn(window, "alert");
    render(<Form />);
    fireEvent.change(screen.getByTestId("name"), {
      target: { value: "milad" },
    });
    fireEvent.change(screen.getByTestId("email"), {
      target: { value: "milad.kareem@gmail.com" },
    });
    fireEvent.change(screen.getByTestId("phone"), {
      target: { value: "+9647504611557" },
    });
    fireEvent.change(screen.getByTestId("seats"), { target: { value: "34" } });
    fireEvent.change(screen.getByTestId("dateTime"), {
      target: { value: "2023-12-23T22:30:00" },
    });

    fireEvent.click(screen.getByTestId("submit"));

    expect(alertSpy).toHaveBeenCalled();
  });
});
