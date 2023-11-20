import React, { Component, ComponentProps } from "react";
import { Text as RNText, TextProps as RNTextProps } from "react-native";

interface CustomTextProps extends RNTextProps {
  allowFontScaling?: boolean;
}

export class CustomText extends Component<CustomTextProps> {
  static defaultProps: CustomTextProps = {
    allowFontScaling: false, // Set the default value to false
  };

  render() {
    return <RNText {...this.props} />;
  }
}
