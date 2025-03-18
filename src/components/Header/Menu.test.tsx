import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { render } from "../../testUtils/render";
import Menu from "./Menu";

describe("Menu Component", () => {
  test("renders all navigation links correctly", () => {
    render(<Menu />);

    expect(screen.getByRole("link", { name: /notes/i })).toHaveAttribute("href", "/");
    expect(screen.getByRole("link", { name: /details/i })).toHaveAttribute("href", "/details");
    expect(screen.getByRole("link", { name: /login/i })).toHaveAttribute("href", "/login");
  });
});
