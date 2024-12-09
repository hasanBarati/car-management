import { View, Text } from "react-native";
import React from "react";
import Svg, { Circle, Defs, Image, Pattern, Rect, Use } from "react-native-svg";

export default function Back() {
  return (
    <Svg width="64" height="64" viewBox="0 0 64 64" fill="none">
      <Circle cx="34" cy="30" r="30" fill="#82857D" />
      <Rect width="64" height="64" fill="url(#pattern0_466_1391)" />
      <Defs>
        <Pattern
          id="pattern0_466_1391"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <Use xlinkHref="#image0_466_1391" transform="scale(0.015625)" />
        </Pattern>
        <Image
          id="image0_466_1391"
          width="64"
          height="64"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAwUlEQVR4nO3aOwoCQRCE4brKYmRi4sn0sr6CmeoOBBe8gjILBqKpIPT/hZNVTU/DwkoAAAAAAOBf2F7Z3vfeJ1WTmRvbc0Q8bB9VNXxUKyA/w8/jTEXD3whfQXLzZuyDN28WnipIFp5ZeMHCc+mFN5cJP9g+lQ0/2L6ULiCrP4GhtbaOiOurhIi4296qkkYJooSBSRAlLJgEUcKCSRAlLJgEUcKCbwd9LeGsavK9hIMq6r1Ptnclf5AAAAAAAEA/9QSp83p5nxhZpAAAAABJRU5ErkJggg=="
        />
      </Defs>
    </Svg>
  );
}

