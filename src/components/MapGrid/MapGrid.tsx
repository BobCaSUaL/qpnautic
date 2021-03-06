import { Col, Grid, Row } from 'native-base';
import React from 'react'
import { StyleProp, ViewStyle } from 'react-native';


interface Props<P> {
  items: P[][]
  component: React.ComponentType<P>
  style?: StyleProp<ViewStyle>
  colStyle?: StyleProp<ViewStyle>
  rowStyle?: StyleProp<ViewStyle>
}

export function MapGrid<P>(props: Props<P>) {
  const {
    items,
    component: Component,
    colStyle,
    rowStyle,
    ...restProps
  } = props;
  return (
    <Grid {...restProps}>
      {items.map((column) => (
        <Col style={colStyle}>
          {column.map((row) => (
            <Row style={rowStyle}>
              <Component {...row} />
            </Row>
          ))}
        </Col>
      ))}
    </Grid>
  )
}