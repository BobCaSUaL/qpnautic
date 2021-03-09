import { ValueOf } from "react-native-gesture-handler/lib/typescript/typeUtils";

export type PropStylesI<StyleT extends {}> = {
  [K in keyof StyleT as `${K & string}Style`]?: StyleT[K]
}
export type MergedStylesI<StyleT extends {}> = {
  [K in keyof StyleT]: StyleT[K] | Array<StyleT[K]>
}

export function mergeStylesFromProp<StyleT extends {}>(
  propStyles: PropStylesI<StyleT>,
  style: StyleT
): MergedStylesI<StyleT> {
  let acc: Partial<MergedStylesI<StyleT>> = {}
  let keys = Object.keys(style) as Array<keyof StyleT>;
  for (const key of keys) {
    const propStyle = propStyles[`${key}Style` as keyof PropStylesI<StyleT>];
    if (propStyle) {
      acc[key] = [style[key], propStyle] as ValueOf<MergedStylesI<StyleT>>;
    } else {
      acc[key] = style[key];
    }
  }

  return acc as MergedStylesI<StyleT>
}