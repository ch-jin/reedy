import React from "react";
import { render } from "enzyme";
import { StyledDropdown, DropdownContent } from "../styles/dropdown";

test("StyledDropdown renders with the correct styles", () => {
  const wrapper = render(<StyledDropdown />);
  expect(wrapper).toMatchSnapshotWithGlamor();
});

test("DropdownContent renders with the correct styles", () => {
  const wrapper = render(<DropdownContent />);
  expect(wrapper).toMatchSnapshotWithGlamor();
});
