// This file is a fallback for using MaterialIcons on Android and web.

import { SymbolWeight } from 'expo-symbols';
import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { SvgXml } from "react-native-svg";

export function IconSymbol({
  size = 50,
  color,
  style,
  svgMarkup,
}: {
  size?: number;
  color: string ;
  style?: StyleProp<ViewStyle>;
  weight?: SymbolWeight;
  svgMarkup: string;
}) {
  const updatedSvgMarkup = svgMarkup.replace(/fill="[^"]*"/g, `fill="${color}"`);
  return <SvgXml style={style} width={size} height={size} xml={updatedSvgMarkup} />;
}
