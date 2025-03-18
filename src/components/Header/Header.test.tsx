import { render } from "../../testUtils/render";
import Header from "./Header";

describe("Header", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<Header />);
    }).not.toThrow();
  });
});
