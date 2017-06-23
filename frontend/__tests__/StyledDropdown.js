import React from "react";
import { render } from "enzyme";
import { StyledDropdown } from "../styles/dropdown";

test("the component renders with default state ", () => {
  const wrapper = render(<StyledDropdown />);
  expect(wrapper).toMatchSnapshotWithGlamor();
});
