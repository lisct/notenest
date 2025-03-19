import { screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { render } from "../../testUtils/render";
import DetailPage from "./DetailPage";
import {
  getLocalStorageItem,
  setLocalStorageItem,
  removeLocalStorageItem,
} from "../../components/lib/localStorage";

jest.mock("uuid", () => ({
  v4: jest.fn(() => "unique-uuid-1234"),
}));

const mockDate = new Date(2025, 2, 18);
global.Date = jest.fn(() => mockDate) as unknown as DateConstructor;
global.Date.now = jest.fn(() => mockDate.getTime());
global.Date.parse = jest.fn(() => mockDate.getTime());
global.Date.UTC = jest.fn(
  (
    year: number,
    monthIndex: number,
    date: number = 1,
    hours: number = 0,
    minutes: number = 0,
    seconds: number = 0,
    ms: number = 0
  ) => {
    return new Date(year, monthIndex, date, hours, minutes, seconds, ms).getTime();
  }
);

jest.mock("../../components/lib/localStorage", () => ({
  getLocalStorageItem: jest.fn(),
  setLocalStorageItem: jest.fn(),
  removeLocalStorageItem: jest.fn(),
}));

describe("DetailPage", () => {
  beforeEach(() => {
    localStorage.clear();
    (getLocalStorageItem as jest.Mock).mockClear();
    (setLocalStorageItem as jest.Mock).mockClear();
  });

  it("create a new note and update localStorage and state", async () => {
    (getLocalStorageItem as jest.Mock).mockReturnValue([]);

    render(<DetailPage />);

    const newNote = {
      title: "Test Note",
      createdTime: new Date().toISOString(),
      id: "unique-uuid-1234",
      content: "Test Content",
    };

    const createButton = screen.getByText("Create Note");
    fireEvent.click(createButton);

    await waitFor(() => {
      const form = screen.getByTestId("create-note-form");
      const titleInput = screen.getByPlaceholderText(/Title/i);
      const contentInput = screen.getByPlaceholderText(/Content/i);

      fireEvent.change(titleInput, { target: { value: newNote.title } });
      fireEvent.change(contentInput, { target: { value: newNote.content } });

      fireEvent.submit(form);
    });

    expect(setLocalStorageItem).toHaveBeenCalledWith(newNote);

    const title = screen.getByText(/Test Note/i);
    expect(title).toBeInTheDocument();
  });

  it("deletes a note and updates localStorage and state", async () => {
    const mockNote = {
      id: "unique-note-1234",
      title: "Sample Note",
      content: "Sample Content",
      createdTime: new Date().toISOString(),
    };

    (getLocalStorageItem as jest.Mock).mockReturnValue([mockNote]);

    render(<DetailPage />);

    expect(screen.getByText("Sample Note")).toBeInTheDocument();

    const deleteButton = screen.getByTestId("delete-button");
    fireEvent.click(deleteButton);

    await waitFor(() => {
      expect(removeLocalStorageItem).toHaveBeenCalledWith(mockNote.id);
      expect(screen.queryByText("Sample Note")).not.toBeInTheDocument();
    });
  });
});
