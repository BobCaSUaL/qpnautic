import { Col, Grid, Row } from 'native-base';
import React from 'react'
import { StyleProp, ViewStyle } from 'react-native';


interface Props<P> {
  items: Array<Array<P & { key?: string }> & { key?: string }>
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
      {items.map((column, index) => (
        <Col key={column.key || index} style={colStyle}>
          {column.map((row, index) => (
            <Row key={row.key || index} style={rowStyle}>
              <Component {...row} />
            </Row>
          ))}
        </Col>
      ))}
    </Grid>
  )
}