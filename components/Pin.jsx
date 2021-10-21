/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Pin /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Pin = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m7.073 5.872-.105.742a.75.75 0 0 0 .636-.212l-.53-.53Zm-3.008.859.483.574-.483-.574Zm-.01.461-.53.53.53-.53Zm4.952 4.952.53-.53-.53.53Zm.461-.01.574.483-.574-.483Zm.86-3.008-.531-.53a.75.75 0 0 0-.212.635l.742-.105Zm.519-5.967a.417.417 0 0 1-.59 0l1.061-1.06a1.083 1.083 0 0 0-1.532 0l1.06 1.06ZM7.604 6.402l3.243-3.243-1.061-1.06L6.543 5.34l1.06 1.06Zm-3.056.903a3.08 3.08 0 0 1 2.42-.691l.21-1.485a4.58 4.58 0 0 0-3.596 1.028l.966 1.148Zm.037-.643c.15.15.19.45-.037.643l-.966-1.148c-.51.429-.468 1.155-.058 1.565l1.061-1.06Zm4.952 4.952L4.585 6.662l-1.06 1.06 4.951 4.952 1.061-1.06Zm-.643.037a.438.438 0 0 1 .643-.037l-1.06 1.06c.41.41 1.136.453 1.565-.057l-1.148-.966Zm.69-2.42a3.08 3.08 0 0 1-.69 2.42l1.148.966A4.58 4.58 0 0 0 11.07 9.02l-1.485.211Zm3.456-3.879L9.797 8.595l1.06 1.06 3.244-3.242-1.061-1.06Zm0 .59a.417.417 0 0 1 0-.59l1.06 1.06a1.083 1.083 0 0 0 0-1.531l-1.06 1.06Zm-2.783-2.783L13.04 5.94l1.06-1.06-2.782-2.783-1.06 1.06Z\" fill=\"#233043\"/><path d=\"m6.536 9.674-2.828 2.828\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"m11.14 9.338 4.688-4.688 3.82 3.82-4.687 4.688a.75.75 0 0 0-.213.636 4.999 4.999 0 0 1-.924 3.675L6.83 10.474a4.999 4.999 0 0 1 3.675-.924.75.75 0 0 0 .636-.212Zm5.454-6.043a1.083 1.083 0 0 0-1.532 0l-4.727 4.727a6.49 6.49 0 0 0-4.863 1.624 1.07 1.07 0 0 0-.038 1.555l3.31 3.31-3.713 3.712a.75.75 0 0 0 1.061 1.06l3.712-3.712 3.294 3.293a1.07 1.07 0 0 0 1.554-.038 6.49 6.49 0 0 0 1.624-4.862l4.728-4.728a1.083 1.083 0 0 0 0-1.532l-4.41-4.41Z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m20.868 5.021.708.707-.708-.707Zm-6.721 6.722-.141.99a1 1 0 0 0 .848-.283l-.707-.707Zm-6.268 1.939-.676-.737.676.737Zm-.005.466-.707.708.707-.707Zm10.375 10.376.707-.707-.707.707Zm.467-.006-.737-.676.737.677Zm1.939-6.267-.707-.707a1 1 0 0 0-.283.848l.99-.141Zm6.721-6.722.707.707-.707-.707Zm-5.8-5.8a.667.667 0 0 1-.943 0l1.414-1.415a1.333 1.333 0 0 0-1.886 0l1.415 1.414Zm-6.722 6.721 6.722-6.722-1.415-1.414-6.722 6.722 1.415 1.414ZM8.555 14.42a6.659 6.659 0 0 1 5.45-1.686l.282-1.98a8.658 8.658 0 0 0-7.084 2.192l1.352 1.474Zm.026-.978a.677.677 0 0 1-.026.978l-1.352-1.474a1.323 1.323 0 0 0-.036 1.91l1.414-1.414Zm10.375 10.376L8.581 13.44l-1.414 1.415L17.542 25.23l1.414-1.414Zm-.977.025a.677.677 0 0 1 .977-.025l-1.414 1.414a1.323 1.323 0 0 0 1.91-.036l-1.473-1.353Zm1.686-5.45a6.659 6.659 0 0 1-1.686 5.45l1.474 1.353a8.659 8.659 0 0 0 2.192-7.085l-1.98.282Zm7.004-7.57-6.721 6.722 1.414 1.414 6.722-6.722-1.415-1.414Zm0 .943a.667.667 0 0 1 0-.943l1.415 1.414c.52-.52.52-1.365 0-1.885l-1.415 1.414Zm-6.036-6.037 6.036 6.037 1.415-1.414-6.037-6.037-1.414 1.414Z\" fill=\"#233043\"/><path d=\"m13.073 19.347-5.657 5.657\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Pin.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

Pin.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default Pin;
