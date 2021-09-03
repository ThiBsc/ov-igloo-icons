/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <ActivatedNote /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const ActivatedNote = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z\" fill=\"#FCC205\"/><path d=\"M9.429 3H3.75a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75H8M9.429 3 13 6.571M9.429 3v2.821c0 .415.335.75.75.75H13m0 0V8.18\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","24":"<svg width=\"24\" height=\"25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M18 21.25a3 3 0 1 0 0-6 3 3 0 0 0 0 6z\" fill=\"#FCC205\"/><path d=\"M15 5.25H5.5a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5H13m2-14 4 4m-4-4v3.5a.5.5 0 0 0 .5.5H19m0 0v4M9 9.25h2M9 12.25h6M9 15.25h3\" stroke=\"#233043\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 28a4 4 0 1 0 0-8 4 4 0 0 0 0 8z\" fill=\"#FCC205\"/><path d=\"M20 6.667H7.333a.667.667 0 0 0-.666.666v17.334c0 .368.298.666.666.666h10M20 6.667 25.333 12M20 6.667v4.666c0 .369.299.667.667.667h4.666m0 0v5.333M12 12h2.667M12 16h8M12 20h4\" stroke=\"#233043\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

ActivatedNote.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

ActivatedNote.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default ActivatedNote;