// This file is a fallback for using MaterialIcons on Android and web.

import { AntDesign } from '@expo/vector-icons';
import React, { ComponentProps } from 'react';
import { StyleProp, TextStyle } from 'react-native';

export function IconSymbol({
  size = 50,
  color,
  style,
  name
}: {
  size?: number;
  color?: string ;
  style?: StyleProp<TextStyle>;
  name:ComponentProps<typeof AntDesign>['name']
}) {

  return <AntDesign name={name} size={size} color={color} style={style}/>;
}



// import Ionicons from '@expo/vector-icons/Ionicons';
// import { type IconProps } from '@expo/vector-icons/build/createIconSet';
// import { type ComponentProps } from 'react';
// import { AntDesign } from '@expo/vector-icons';

// export function TabBarIcon({ style, ...rest }: IconProps<ComponentProps<typeof Ionicons>['name']>) {
//   return <Ionicons size={28} style={[{ marginBottom: -3 }, style]} {...rest} />;
// }
