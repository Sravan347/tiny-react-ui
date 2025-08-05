// src/components/App.test.jsx
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

// ✅ Register mocks first
vi.mock("./NotFound.jsx", () => ({
  default: () => <div>Mock NotFound</div>,
}));
 
vi.mock("./Counter.jsx", () => ({
  default: () => <div>Mock Counter Component</div>,
}));

vi.mock("./SearchFunctionality.jsx", () => ({
  default: () => <div>Mock Search Component</div>,
}));

vi.mock("./Nav.jsx", () => ({
  default: () => <nav>Mock Nav</nav>,
}));

// ✅ Now import the App
import App from "../App";

// ✅ Helper function
const renderWithRoute = (route = "/") => {
  render(
    <MemoryRouter initialEntries={[route]}>
      <App />
    </MemoryRouter>
  );
};

describe("App routing", () => {
  it("renders the Nav bar", () => {
    renderWithRoute("/counter");
    expect(screen.getByText(/mock nav/i)).toBeInTheDocument();
  });

  it("renders the Counter page", () => {
    renderWithRoute("/counter");
    expect(screen.getByText(/mock counter component/i)).toBeInTheDocument();
  });

  it("renders the Search page", () => {
    renderWithRoute("/search");
    expect(screen.getByText(/mock search component/i)).toBeInTheDocument();
  });

  it("renders NotFound page on unknown route", () => {
  renderWithRoute("/unknown-page");
  expect(screen.getByText(/mock notfound/i)).toBeInTheDocument();
});

});
