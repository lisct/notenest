import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { render } from "../../testUtils/render";
import Footer from "./Footer";

describe("Footer", () => {
  it("renders successfully", () => {
    render(<Footer />);

    const copyrightText = screen.getByText(/© \d{4} NoteNest. All rights reserved./i);
    expect(copyrightText).toBeInTheDocument();

    const currentYear = new Date().getFullYear().toString();
    expect(copyrightText).toHaveTextContent(currentYear);
  });
});
