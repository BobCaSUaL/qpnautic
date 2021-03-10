import { useRef } from "react";
import { ValueOf } from "react-native-gesture-handler/lib/typescript/typeUtils";

export type PropStylesI<StyleT extends {}> = {
  [K in keyof StyleT as `${K & string}Style`]?: StyleT[K]
}
export type MergedStylesI<StyleT extends {}> = {
  [K in keyof StyleT]: StyleT[K] | Array<StyleT[K]>
}

export type ExtendingStylePropsT<getStyleT extends ({}) => any> = PropStylesI<ReturnType<getStyleT>> & Parameters<getStyleT>[0]

export function _shallowEquals() {
  return false
}

export function _mergeStylesFromProp<StyleT extends {}>(
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

/**
 * Recompute the style if needed.
 * 
 * use case:
 * ```
 * // note that you must fistly define the getStyle
 * 
 * interface Props extends ExtendingStylePropsT<typeof getStyle> {
 *   ....
 * }
 * 
 * export const MyComponent = (props: Props) => {
 *   const styles = useStylesheet(props, getStyle);
 *   return (
 *      // NOTE: this is evaluated as [getStyles(...).container, props.containerStyle]
 *     <View style={styles.container}>
 *       <View style={styles.contentContainer}>
 *       </View> 
 *     </View>
 *   );
 * }
 * 
 * ```
 * 
 * @param props - the component props (note: the component props must extends the type of this object)
 * @param getStyle - the getStyle function (used also as basic source of type inference)
 * @param equalsPredicate - the equality predicate. It defaults to shallowEquals.
 */
export function useStylesheet<getStyleT extends ({}) => any>(
  props: ExtendingStylePropsT<getStyleT>,
  getStyle: getStyleT,
  equalsPredicate: (
    props: ExtendingStylePropsT<getStyleT>,
    prevProps: ExtendingStylePropsT<getStyleT>
  ) => boolean = _shallowEquals
) {
  const options: Parameters<getStyleT>[0] = props;
  const val = useRef(_mergeStylesFromProp(props, getStyle(options)));
  const prevProps = useRef({ ...props });

  if (!equalsPredicate(props, prevProps.current)) {
    val.current = _mergeStylesFromProp(props, getStyle(options));
    prevProps.current = { ...props };
  }
  return val.current;
}