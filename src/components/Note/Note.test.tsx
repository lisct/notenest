import { render } from "../../testUtils/render";
import Note from "./Note";

describe("Note", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<Note title="this is a title" date="2025-03-17T10:30:00Z" />);
    }).not.toThrow();
  });
});
