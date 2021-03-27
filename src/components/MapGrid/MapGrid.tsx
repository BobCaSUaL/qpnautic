import { Col, Grid, Row } from 'native-base';
import React from 'react'
import { StyleProp, ViewProps, ViewStyle } from 'react-native';


interface Props<P> {
  as?: React.ComponentType<ViewProps>
  items: Array<Array<P & { key?: string }> & { key?: string }>
  component: React.ComponentType<P>
  containertStyle?: StyleProp<ViewStyle>
  colStyle?: StyleProp<ViewStyle>
  rowStyle?: StyleProp<ViewStyle>
}

export function MapGrid<P>({
  as: RootComponent = Grid,
  items,
  component: Component,
  containertStyle,
  colStyle,
  rowStyle,
  ...restProps
}: Props<P>) {
  return (
    <RootComponent {...restProps} style={containertStyle}>
      {items.map((column, index) => (
        <Col key={column.key || index} style={colStyle}>
          {column.map((row, index) => (
            <Row key={row.key || index} style={rowStyle}>
              <Component {...row} />
            </Row>
          ))}
        </Col>
      ))}
    </RootComponent>
  )
}