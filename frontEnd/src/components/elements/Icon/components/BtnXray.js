import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Svg = styled.svg`
  .cls-1 {
    fill: url(#linear-gradient);
  }
  .cls-2 {
    fill: #f5c910;
  }
  .cls-3 {
    fill: #555;
  }
  .cls-4 {
    fill: none;
  }
`;

export default class BtnXray extends Component {
  static propTypes = {};
  static defaultProps = {};
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300 300"
      >
        <defs>
          <linearGradient id="linear-gradient" x1=".368" x2=".675" y2="1" gradientUnits="objectBoundingBox">
            <stop offset="0" stopColor="#2f3843" />
            <stop offset="1" stopColor="#1d1d1d" />
          </linearGradient>
        </defs>
        <g id="btn_xray_n" transform="translate(-163 -221)">
          <rect id="Rectangle_1655" width="300" height="300" className="cls-1" data-name="Rectangle 1655" transform="translate(163 221)" />
          <path id="Subtraction_5" d="M-2857.858 1305.706l-.352-.352h.706l-.352.352zm14.353-14.353h-28.283l70.5-70.5-70.5-70.5h28.284l56.358 56.358 14.142 14.142-14.143 14.147-56.358 56.357zm-14-155h-.706l.353-.353.351.351z" className="cls-2" data-name="Subtraction 5" transform="translate(3099.789 -850)" />
          <path id="Subtraction_6" d="M-2716.437 1305.706l-.352-.352h.706l-.352.352zm13.93-14.352h-28.282l-49.286-49.287 14.142-14.142 63.429 63.428zm-63.428-77.573l-14.141-14.139 49.286-49.287h28.285zm49.85-77.429h-.706l.353-.353.351.351z" className="cls-3" data-name="Subtraction 6" transform="translate(3099.789 -850)" />
          <rect id="btn_xray_n-2" width="300" height="300" className="cls-4" data-name="btn_xray_n" rx="10" transform="translate(163 221)" />
        </g>
      </Svg>
    );
  }
}
