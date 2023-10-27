import { getByRole, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MyButton } from "./MyButton";

describe("MyButton", () => {
  it("should render with a button component", () => {
    const { getByRole } = render(<MyButton />);
    expect(getByRole("button")).toBeInTheDocument();
  });
});
