import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Badge = () => {
  return (
    <View style={styles.ribbonWrapper}>
      <View style={styles.ribbonContainer}>
        <Text style={styles.ribbonText}>Best Seller</Text>
        <View style={styles.rightTriangle}></View>
        <View style={styles.leftTriangle}></View>
      </View>
    </View>
  )
}

export default Badge

const styles = StyleSheet.create({
  ribbonWrapper: {
    zIndex: 1,
  },
  ribbonContainer: {
    height: 23,
    width: 70,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  ribbonText: {
    color: 'white',
    fontFamily: 'manrope-regular',
    fontWeight: '700',
    fontSize: 12,
    lineHeight: 14.4,
  },
  rightTriangle: {
    position: 'absolute',
    right: -21,
    top: 2,
    width: 23,
    height: 0,
    borderLeftWidth: 20,
    borderLeftColor: 'transparent',
    borderTopWidth: 20,
    borderTopColor: 'red',
    transform: [{ rotate: '-90deg' }],
  },
  leftTriangle: {
    position: 'absolute',
    right: -21,
    bottom: 0,
    width: 23,
    height: 0,
    borderLeftWidth: 20,
    borderLeftColor: 'transparent',
    borderTopWidth: 20,
    borderTopColor: 'red',
    transform: [{ rotate: '180deg' }],
  },
})
