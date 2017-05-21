// Modified version of RouteTransition from react-router-transition

// Will be using this instead of TransitionMotion from react-motion
// to keep transitions uniform and reusable.

import React, { cloneElement, createElement, Component } from "react";

import { TransitionMotion, spring } from "react-motion";
import PropTypes from "prop-types";

function ensureSpring(styles) {
  return Object.keys(styles).reduce((acc, key) => {
    const value = styles[key];
    acc[key] = typeof value === "number" ? spring(value) : value;
    return acc;
  }, {});
}

class Transition extends Component {
  constructor(props) {
    super(props);
    this.renderChild = this.renderChild.bind(this);
    this.renderChildren = this.renderChildren.bind(this);
    this.willEnter = this.willEnter.bind(this);
    this.willLeave = this.willLeave.bind(this);
  }

  getDefaultStyles() {
    if (!this.props.runOnMount) {
      return null;
    }

    if (!this.props.children) {
      return [];
    }

    return [
      {
        key: this.props.identifier,
        data: this.props.children,
        style: this.props.atEnter,
      },
    ];
  }

  getStyles() {
    if (!this.props.children) {
      console.log("var");
      return [];
    }

    return [
      {
        key: this.props.identifier,
        data: this.props.children,
        style: ensureSpring(this.props.atActive),
      },
    ];
  }

  willEnter() {
    return this.props.atEnter;
  }

  willLeave() {
    return ensureSpring(this.props.atLeave);
  }

  renderChild(config) {
    const props = {
      style: this.props.mapStyles(config.style),
      key: config.key,
    };

    return this.props.component
      ? createElement(this.props.component, props, config.data)
      : cloneElement(config.data, props);
  }

  renderChildren(interpolatedStyles) {
    return (
      <div className={this.props.className} style={this.props.style}>
        {interpolatedStyles.map(this.renderChild)}
      </div>
    );
  }

  render() {
    return (
      <TransitionMotion
        defaultStyles={this.getDefaultStyles()}
        styles={this.getStyles()}
        willEnter={this.willEnter}
        willLeave={this.willLeave}
      >
        {this.renderChildren}
      </TransitionMotion>
    );
  }
}

Transition.defaultProps = {
  component: "div",
  runOnMount: true,
  mapStyles: val => val,
};

Transition.propTypes = {
  className: PropTypes.string,
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  identifier: PropTypes.string.isRequired,
  atEnter: PropTypes.object.isRequired,
  atActive: PropTypes.object.isRequired,
  atLeave: PropTypes.object.isRequired,
  mapStyles: PropTypes.func,
  runOnMount: PropTypes.bool,
  style: PropTypes.object,
};

export default Transition;
