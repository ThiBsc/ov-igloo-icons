/* THIS FILE IS GENERATED. DO NOT EDIT IT. */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";

import { getSvgProps } from "./helper/get-svg-props";

import './styles/icon.css';

/**
 * Renders a <Settings /> component
 *
 * @param {Object} props
 * @param {('small'|'medium'|'large')} [props.size=small] - the icon size
 * @param {string} [props.ariaLabel] - the label for accessibility
 */
const Settings = ({size, ariaLabel, className, ...other}) => {
const svgData = {"16":"<svg width=\"16\" height=\"16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m6.68 3.522.213.72a.75.75 0 0 0 .477-.424l-.69-.296zM7.334 2v-.75a.75.75 0 0 0-.689.455l.69.295zM5.767 3.901l-.279.697a.75.75 0 0 0 .638-.038l-.36-.659zm-1.538-.615.278-.696a.75.75 0 0 0-.809.166l.53.53zm-.943.943-.53-.53a.75.75 0 0 0-.166.808l.696-.278zm.615 1.538.659.36a.75.75 0 0 0 .038-.639l-.697.279zm-.379.914.296.69a.75.75 0 0 0 .424-.478l-.72-.212zM2 7.333l-.295-.689a.75.75 0 0 0-.455.69H2zm0 1.334h-.75c0 .3.179.57.455.689L2 8.666zm1.522.652.72-.212a.75.75 0 0 0-.424-.477l-.296.69zm.38.914.696.279a.75.75 0 0 0-.038-.638l-.659.359zm-.616 1.538-.696-.278a.75.75 0 0 0 .166.809l.53-.53zm.943.943-.53.53a.75.75 0 0 0 .808.166l-.278-.696zm1.538-.615.36-.659a.75.75 0 0 0-.639-.038l.279.697zm.914.379.69-.296a.75.75 0 0 0-.478-.424l-.212.72zM7.333 14l-.689.295a.75.75 0 0 0 .69.455V14zm1.334 0v.75a.75.75 0 0 0 .689-.455L8.666 14zm.652-1.522-.212-.72a.75.75 0 0 0-.477.424l.69.296zm.914-.38.279-.696a.75.75 0 0 0-.638.038l.359.659zm1.538.616-.278.696a.75.75 0 0 0 .809-.166l-.53-.53zm.943-.943.53.53a.75.75 0 0 0 .166-.808l-.696.278zm-.615-1.538-.659-.36a.75.75 0 0 0-.038.639l.697-.279zm.379-.914-.296-.69a.75.75 0 0 0-.424.478l.72.212zM14 8.667l.295.689a.75.75 0 0 0 .455-.69H14zm0-1.334h.75a.75.75 0 0 0-.455-.689l-.295.69zm-1.522-.652-.72.212a.75.75 0 0 0 .424.477l.296-.69zm-.38-.914-.696-.279a.75.75 0 0 0 .039.638l.658-.359zm.616-1.538.696.278a.75.75 0 0 0-.166-.809l-.53.53zm-.943-.943.53-.53a.75.75 0 0 0-.808-.166l.278.696zm-1.538.615-.36.659a.75.75 0 0 0 .639.038l-.279-.697zm-.914-.379-.69.296a.75.75 0 0 0 .478.424l.212-.72zM8.667 2l.689-.295a.75.75 0 0 0-.69-.455V2zM7.37 3.818l.653-1.523-1.379-.59-.652 1.522 1.378.59zm-1.244.742c.242-.132.498-.24.767-.318l-.424-1.44c-.372.11-.727.259-1.061.441l.718 1.317zM3.95 3.982l1.538.616.557-1.393-1.538-.615-.557 1.392zm-.134.777.943-.943-1.06-1.06-.943.943 1.06 1.06zm.782.73L3.982 3.95l-1.392.557.615 1.539 1.393-.558zm-.356 1.404c.079-.269.186-.525.318-.767l-1.317-.718c-.182.334-.33.689-.44 1.061l1.439.424zm-1.947 1.13 1.523-.653-.591-1.378-1.522.652.59 1.379zm.455.644V7.333h-1.5v1.334h1.5zm1.068-.037-1.523-.653-.59 1.379 1.522.652.59-1.378zm.742 1.244a3.888 3.888 0 0 1-.318-.767l-1.44.424c.11.372.259.727.441 1.061l1.317-.718zm-.578 2.176.616-1.538-1.393-.558-.615 1.539 1.392.557zm.777.134-.943-.943-1.06 1.06.942.943 1.061-1.06zm.73-.782-1.539.616.557 1.392 1.538-.615-.557-1.393zm1.404.356a3.882 3.882 0 0 1-.767-.318l-.718 1.317c.334.182.689.33 1.061.44l.424-1.439zm1.13 1.947-.653-1.523-1.378.591.652 1.522 1.379-.59zm.644-.455H7.333v1.5h1.334v-1.5zm-.037-1.068-.653 1.523 1.379.59.652-1.522-1.378-.59zm1.244-.742a3.882 3.882 0 0 1-.767.318l.424 1.44c.372-.11.727-.259 1.061-.441l-.718-1.317zm2.176.578-1.538-.616-.558 1.393 1.539.615.557-1.392zm.134-.777-.943.943 1.06 1.06.943-.942-1.06-1.061zm-.782-.73.616 1.539 1.392-.557-.615-1.539-1.393.557zm.356-1.404a3.887 3.887 0 0 1-.317.767l1.316.718c.182-.334.33-.689.44-1.061l-1.439-.424zm1.947-1.13-1.523.653.591 1.378 1.522-.652-.59-1.379zm-.455-.644v1.334h1.5V7.333h-1.5zm-1.068.037 1.523.653.59-1.379-1.522-.652-.59 1.378zm-.742-1.244c.132.242.24.498.318.767l1.44-.424a5.384 5.384 0 0 0-.44-1.061l-1.317.718zm.578-2.176-.616 1.538 1.393.558.615-1.539-1.392-.557zm-.777-.134.943.943 1.06-1.06-.942-.943-1.061 1.06zm-.73.782 1.539-.616-.557-1.392-1.538.615.557 1.393zm-1.404-.356c.269.079.525.186.767.318l.718-1.317a5.388 5.388 0 0 0-1.061-.44l-.424 1.439zm-1.13-1.947.653 1.523 1.378-.591-.652-1.522-1.379.59zm-.644.455h1.334v-1.5H7.333v1.5z\" fill=\"#233043\"/><circle cx=\"7.875\" cy=\"7.875\" r=\"2\" stroke=\"#233043\" stroke-width=\"1.5\"/></svg>","24":"<svg width=\"24\" height=\"25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M11.063 4.063v-.75a.75.75 0 0 0-.69.454l.69.296zm-.918 2.14.212.72a.75.75 0 0 0 .477-.424l-.689-.296zm2.793-2.14.689-.296a.75.75 0 0 0-.69-.454v.75zm.917 2.14-.69.296a.75.75 0 0 0 .478.424l.212-.72zm1.285.533-.36.658a.75.75 0 0 0 .639.039l-.279-.697zm2.163-.865.53-.53a.75.75 0 0 0-.808-.166l.278.696zm1.326 1.326.697.278a.75.75 0 0 0-.166-.809l-.53.53zm-.865 2.163-.696-.279a.75.75 0 0 0 .038.638l.658-.36zm.533 1.285-.72.212a.75.75 0 0 0 .424.477l.296-.689zm2.14.918h.75a.75.75 0 0 0-.454-.69l-.296.69zm0 1.874.296.69a.75.75 0 0 0 .454-.69h-.75zm-2.14.918-.296-.69a.75.75 0 0 0-.424.478l.72.212zm-.533 1.285-.658-.36a.75.75 0 0 0-.039.639l.697-.279zm.865 2.163.53.53a.75.75 0 0 0 .167-.808l-.697.278zm-1.326 1.326-.278.697a.75.75 0 0 0 .809-.166l-.53-.53zm-2.163-.865.279-.697a.75.75 0 0 0-.638.039l.36.658zm-1.285.533-.212-.72a.75.75 0 0 0-.477.424l.689.296zm-.918 2.14v.75a.75.75 0 0 0 .69-.454l-.69-.296zm-1.874 0-.69.296a.75.75 0 0 0 .69.454v-.75zm-.918-2.14.69-.296a.75.75 0 0 0-.478-.424l-.212.72zm-1.285-.533.36-.658a.75.75 0 0 0-.639-.039l.279.697zm-2.163.865-.53.53a.75.75 0 0 0 .808.167l-.278-.697zM5.37 17.803l-.696-.278a.75.75 0 0 0 .166.809l.53-.53zm.865-2.163.697.279a.75.75 0 0 0-.039-.638l-.658.36zm-.533-1.285.72-.212a.75.75 0 0 0-.424-.477l-.296.689zm-2.14-.918h-.75c0 .3.178.572.454.69l.296-.69zm0-1.874-.296-.69a.75.75 0 0 0-.454.69h.75zm2.14-.918.296.69a.75.75 0 0 0 .424-.478l-.72-.212zm.533-1.285.658.36a.75.75 0 0 0 .039-.639l-.697.279zm-.865-2.163-.53-.53a.75.75 0 0 0-.166.808l.696-.278zM6.697 5.87l.278-.696a.75.75 0 0 0-.809.166l.53.53zm2.163.865-.279.696a.75.75 0 0 0 .638-.038l-.36-.658zm1.513-2.969-.917 2.14 1.378.592.918-2.141-1.379-.59zm2.565-.454h-1.876v1.5h1.876v-1.5zm1.606 2.595-.917-2.14-1.379.59.918 2.14 1.378-.59zm.956.17a7.27 7.27 0 0 0-1.433-.594l-.424 1.439c.399.117.78.276 1.138.471l.719-1.316zm1.525-.903-2.163.865.557 1.393 2.163-.866-.557-1.392zm2.135 1.491-1.326-1.325-1.061 1.06 1.326 1.326 1.06-1.06zm-.7 2.972.866-2.163-1.393-.557-.865 2.163 1.392.557zm.556.795a7.275 7.275 0 0 0-.594-1.432l-1.316.718c.195.358.354.74.471 1.138l1.44-.424zm1.717.44-2.14-.917L18 11.334l2.141.918.59-1.379zm.454 2.565v-1.876h-1.5v1.876h1.5zm-2.595 1.606 2.14-.917-.59-1.379-2.14.918.59 1.378zm-.17.955c.246-.45.446-.93.594-1.432l-1.439-.424c-.117.399-.276.78-.471 1.138l1.316.718zm.904 1.526-.866-2.163-1.393.557.866 2.163 1.393-.557zm-1.492 2.135 1.326-1.326-1.061-1.061-1.326 1.326 1.06 1.06zm-2.972-.7 2.163.866.557-1.393-2.163-.866-.557 1.393zm-.795.556a7.272 7.272 0 0 0 1.433-.594l-.72-1.316a5.774 5.774 0 0 1-1.137.471l.424 1.44zm-.44 1.717.917-2.14-1.378-.592-.918 2.141 1.379.59zm-2.565.454h1.876v-1.5h-1.876v1.5zm-1.606-2.595.917 2.14 1.379-.59-.918-2.14-1.378.59zm-.956-.17c.451.246.931.446 1.433.594l.424-1.439a5.773 5.773 0 0 1-1.138-.471L8.5 18.922zm-1.525.904 2.163-.866-.557-1.393-2.163.866.557 1.393zm-2.134-1.492 1.325 1.326 1.061-1.061-1.326-1.326-1.06 1.06zm.699-2.972-.865 2.163 1.392.557.866-2.163-1.393-.557zm-.556-.795c.148.502.348.982.594 1.433l1.316-.72a5.77 5.77 0 0 1-.471-1.137l-1.44.424zm-1.717-.44 2.14.917L6 13.666l-2.141-.918-.59 1.379zm-.454-2.565v1.876h1.5v-1.876h-1.5zm2.595-1.606-2.14.917.59 1.379 2.14-.918-.59-1.378zM5.578 9c-.246.451-.446.931-.594 1.433l1.439.424a5.77 5.77 0 0 1 .471-1.138L5.578 9zm-.903-1.525.865 2.163 1.393-.557-.866-2.163-1.392.557zm1.491-2.134L4.841 6.666 5.9 7.727l1.326-1.326-1.06-1.06zm2.972.699-2.163-.865-.557 1.392 2.163.865.557-1.392zm.795-.556a7.272 7.272 0 0 0-1.433.594l.72 1.316a5.773 5.773 0 0 1 1.137-.471l-.424-1.44zm4.505 7.016A2.437 2.437 0 0 1 12 14.938v1.5a3.938 3.938 0 0 0 3.938-3.938h-1.5zM12 10.062a2.437 2.437 0 0 1 2.438 2.438h1.5A3.938 3.938 0 0 0 12 8.562v1.5zM9.562 12.5A2.437 2.437 0 0 1 12 10.062v-1.5A3.938 3.938 0 0 0 8.062 12.5h1.5zM12 14.938A2.437 2.437 0 0 1 9.562 12.5h-1.5A3.938 3.938 0 0 0 12 16.438v-1.5z\" fill=\"#233043\"/></svg>","32":"<svg width=\"32\" height=\"32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14.75 4.75v-1a1 1 0 0 0-.92.606l.92.394zm-1.223 2.854.282.96a1 1 0 0 0 .637-.566l-.92-.394zM17.25 4.75l.92-.394a1 1 0 0 0-.92-.606v1zm1.223 2.854-.919.394a1 1 0 0 0 .637.566l.282-.96zm1.714.71-.48.879a1 1 0 0 0 .851.05l-.371-.928zm2.884-1.153.707-.707a1 1 0 0 0-1.078-.221l.371.928zM24.84 8.93l.928.371a1 1 0 0 0-.221-1.078l-.707.707zm-1.154 2.884-.928-.371a1 1 0 0 0 .05.85l.878-.479zm.71 1.714-.959.282a1 1 0 0 0 .566.637l.394-.92zm2.855 1.223h1a1 1 0 0 0-.606-.92l-.394.92zm0 2.5.394.92a1 1 0 0 0 .606-.92h-1zm-2.854 1.223-.394-.919a1 1 0 0 0-.566.637l.96.282zm-.71 1.714-.879-.48a1 1 0 0 0-.05.851l.928-.371zm1.153 2.884.707.707a1 1 0 0 0 .221-1.078l-.928.371zM23.07 24.84l-.371.928a1 1 0 0 0 1.078-.221l-.707-.707zm-2.884-1.154.371-.928a1 1 0 0 0-.85.05l.479.878zm-1.714.71-.282-.959a1 1 0 0 0-.637.566l.92.393zM17.25 27.25v1a1 1 0 0 0 .92-.606l-.92-.394zm-2.5 0-.92.394a1 1 0 0 0 .92.606v-1zm-1.223-2.855.919-.393a1 1 0 0 0-.637-.566l-.282.96zm-1.714-.71.48-.878a1 1 0 0 0-.851-.05l.371.928zM8.93 24.84l-.707.707a1 1 0 0 0 1.078.221l-.371-.928zM7.161 23.07l-.928-.371a1 1 0 0 0 .221 1.078l.707-.707zm1.154-2.884.928.371a1 1 0 0 0-.05-.85l-.878.479zm-.71-1.714.959-.282a1 1 0 0 0-.566-.637l-.394.92zM4.75 17.25h-1a1 1 0 0 0 .606.92l.394-.92zm0-2.5-.394-.92a1 1 0 0 0-.606.92h1zm2.854-1.223.394.919a1 1 0 0 0 .566-.637l-.96-.282zm.71-1.714.879.48a1 1 0 0 0 .05-.851l-.928.371zM7.162 8.929l-.707-.707A1 1 0 0 0 6.233 9.3l.928-.371zM8.93 7.161l.371-.928a1 1 0 0 0-1.078.221l.707.707zm2.884 1.154-.371.928a1 1 0 0 0 .85-.05l-.479-.878zm2.018-3.959L12.608 7.21l1.838.788 1.223-2.854-1.838-.788zm3.419-.606h-2.5v2h2.5v-2zm2.142 3.46L18.17 4.356l-1.838.788 1.223 2.854 1.838-.788zm1.274.227a9.696 9.696 0 0 0-1.91-.792l-.565 1.919c.532.156 1.04.368 1.517.629l.958-1.756zM22.7 6.233l-2.884 1.153.742 1.857 2.884-1.153-.742-1.857zm2.846 1.989-1.768-1.768-1.414 1.414 1.768 1.768 1.414-1.414zm-.932 3.963L25.767 9.3l-1.857-.742-1.153 2.884 1.857.742zm.74 1.06a9.696 9.696 0 0 0-.791-1.911l-1.755.958c.26.478.472.986.628 1.517l1.919-.565zm2.29.586-2.854-1.224-.788 1.839 2.854 1.223.788-1.838zm.606 3.419v-2.5h-2v2.5h2zm-3.46 2.142 2.854-1.223-.788-1.838-2.854 1.223.788 1.838zm-.227 1.274c.328-.601.595-1.24.792-1.91l-1.919-.565a7.697 7.697 0 0 1-.629 1.517l1.756.958zm1.204 2.034-1.153-2.884-1.857.742 1.153 2.884 1.857-.742zm-1.989 2.846 1.768-1.768-1.414-1.414-1.768 1.768 1.414 1.414zm-3.963-.932 2.885 1.153.742-1.857-2.884-1.153-.743 1.857zm-1.06.74a9.695 9.695 0 0 0 1.911-.791l-.958-1.756c-.478.261-.985.473-1.517.63l.565 1.918zm-.586 2.29 1.223-2.855-1.838-.788-1.223 2.855 1.838.788zm-3.419.606h2.5v-2h-2.5v2zm-2.143-3.46 1.224 2.854 1.838-.788-1.223-2.855-1.838.788zm-1.273-.227c.601.328 1.24.595 1.91.792l.565-1.919a7.695 7.695 0 0 1-1.516-.629l-.959 1.756zM9.3 25.767l2.885-1.153-.743-1.857-2.884 1.153.742 1.857zm-2.846-1.989 1.768 1.768 1.414-1.414-1.768-1.768-1.414 1.414zm.932-3.962L6.233 22.7l1.857.742 1.153-2.884-1.857-.742zm-.74-1.06c.196.67.463 1.309.791 1.91l1.756-.958a7.694 7.694 0 0 1-.63-1.517l-1.918.565zm-2.29-.587 2.855 1.223.787-1.838-2.854-1.223-.788 1.838zm-.606-3.42v2.5h2v-2.5h-2zm3.46-2.142-2.854 1.224.788 1.838 2.854-1.223-.787-1.839zm.227-1.273a9.698 9.698 0 0 0-.792 1.91l1.919.565a7.696 7.696 0 0 1 .629-1.517l-1.756-.958zM6.233 9.3l1.153 2.884 1.857-.742L8.09 8.558 6.233 9.3zm1.989-2.846L6.454 8.222l1.414 1.414 1.768-1.768-1.414-1.414zm3.963.932L9.3 6.233 8.558 8.09l2.884 1.153.742-1.857zm1.06-.741c-.67.197-1.31.464-1.911.792l.958 1.756c.478-.261.986-.473 1.517-.63l-.564-1.918zM19.25 16A3.25 3.25 0 0 1 16 19.25v2c2.9 0 5.25-2.35 5.25-5.25h-2zM16 12.75A3.25 3.25 0 0 1 19.25 16h2c0-2.9-2.35-5.25-5.25-5.25v2zM12.75 16A3.25 3.25 0 0 1 16 12.75v-2A5.25 5.25 0 0 0 10.75 16h2zM16 19.25A3.25 3.25 0 0 1 12.75 16h-2c0 2.9 2.35 5.25 5.25 5.25v-2z\" fill=\"#233043\"/></svg>"}
const props = getSvgProps({ size, ariaLabel, className, ...other });

if (svgData[props.iconSize] === undefined) {
  console.warn('this icon is not available in this size');
  return <span className="empty"></span>;
}

const icon = parse(svgData[props.iconSize], props.options);
return <>{icon}</>;
};

Settings.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  ariaLabel: PropTypes.string,
};

Settings.defaultProps = {
  size: "medium",
  ariaLabel: "",
};

export default Settings;
