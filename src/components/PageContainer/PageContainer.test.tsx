import { render } from "../../testUtils/render";
import PageContainer from "./PageContainer";

describe("PageContainer", () => {
  it("renders successfully", () => {
    expect(() => {
      render(
        <PageContainer>
          <h1>Content</h1>
        </PageContainer>
      );
    }).not.toThrow();
  });
});
