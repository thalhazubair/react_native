import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Link } from '@react-navigation/native'

import HorizontalScroll from './MoreProduct'

const Recent = () => {
  return (
    <View style={styles.frequent}>
      <View style={[styles.dheader, { paddingHorizontal: 16 }]}>
        <Text style={styles.frequentsection}>Frequently bought</Text>
        <Link to={{ screen: 'Dummy' }}>
          <Text style={styles.seemore}>See More</Text>
        </Link>
      </View>
      <HorizontalScroll />
    </View>
  )
}

export default Recent

const styles = StyleSheet.create({
  frequent: {
    marginVertical: 10,
  },
  frequentsection: {
    fontFamily: 'manrope-regular',
    fontWeight: '700',
    fontSize: 20,
  },
  seemore: {
    fontFamily: 'manrope-regular',
    fontWeight: '700',
    fontSize: 14,
    color: '#156651',
    textDecorationLine: 'underline',
  },
  dheader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})
