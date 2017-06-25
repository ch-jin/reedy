import React from "react";
import { render } from "enzyme";
import {
  StyledDropdown,
  DropdownContent,
  DropdownButton,
  DropdownEmptyItem,
  Line,
  Bold,
  StyledFeedDropdown,
  StyledFeedButtons,
  IndicatorIcons,
} from "../styles/dropdown";

test("StyledDropdown renders with the correct styles", () => {
  const wrapper = render(<StyledDropdown />);
  expect(wrapper).toMatchSnapshotWithGlamor();
});

test("DropdownContent renders with the correct styles", () => {
  const wrapper = render(<DropdownContent />);
  expect(wrapper).toMatchSnapshotWithGlamor();
});

test("DropdownButton renders with the correct styles", () => {
  const wrapper = render(<DropdownButton />);
  expect(wrapper).toMatchSnapshotWithGlamor();
});

test("DropdownEmptyItem renders with the correct styles", () => {
  const wrapper = render(<DropdownEmptyItem />);
  expect(wrapper).toMatchSnapshotWithGlamor();
});

test("Line renders with the correct styles", () => {
  const wrapper = render(<Line />);
  expect(wrapper).toMatchSnapshotWithGlamor();
});

test("Bold renders with the correct styles", () => {
  const wrapper = render(<Bold />);
  expect(wrapper).toMatchSnapshotWithGlamor();
});

test("StyledFeedDropdown renders with the correct styles", () => {
  const wrapper = render(<StyledFeedDropdown />);
  expect(wrapper).toMatchSnapshotWithGlamor();
});

test("StyledFeedButtons renders with the correct styles", () => {
  test("renders correct color when followed prop is passed in", () => {
    const wrapper = render(<StyledFeedButtons followed />);
    expect(wrapper).toMatchSnapshotWithGlamor();
  });

  test("renders correct color when there is no followed prop", () => {
    const wrapper = render(<StyledFeedButtons />);
    expect(wrapper).toMatchSnapshotWithGlamor();
  });
});

test("IndicatorIcons renders with the correct styles", () => {
  test("renders correct color when delete prop is given", () => {
    const wrapper = render(<IndicatorIcons delete />);
    expect(wrapper).toMatchSnapshotWithGlamor();
  });
  test("renders correct color when no delete prop is given", () => {
    const wrapper = render(<IndicatorIcons />);
    expect(wrapper).toMatchSnapshotWithGlamor();
  });
});
