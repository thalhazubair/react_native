import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const ProductDetails: React.FC = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.productname}>EKERO</Text>
        <View style={styles.pricing}>
          <Text style={styles.pricing1}>$230.00</Text>
          <Text style={styles.pricing2}>$512.28</Text>
          <Text style={styles.offer}>45%OFF</Text>
        </View>
        <View style={styles.ratingContainer}>
          <Icon name="star" size={18} color="#FFD700" style={styles.starIcon} />
          <Text style={styles.rating}>4.9 (300)</Text>
        </View>
        <View style={{ paddingTop: 10 }}>
          <Text style={styles.description}>
            A minimalist chair with a reversible back cushion provides soft
            support for your back and has two sides to wear.
          </Text>
        </View>
      </View>
      <View style={styles.borderBottom}></View>
    </>
  )
}

export default ProductDetails

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  productname: {
    fontFamily: 'manrope-regular',
    fontWeight: '400',
    fontSize: 16,
  },
  pricing: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  pricing1: {
    fontFamily: 'manrope-regular',
    fontWeight: '800',
    fontSize: 32,
  },
  pricing2: {
    fontFamily: 'manrope-regular',
    fontWeight: '400',
    fontSize: 14,
    textDecorationLine: 'line-through',
  },
  offer: {
    fontFamily: 'manrope-regular',
    fontWeight: '400',
    fontSize: 12,
    width: 60,
    height: 20,
    paddingHorizontal: 6,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: '#E44A4A',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  description: {
    fontFamily: 'manrope-regular',
    fontWeight: '400',
    fontSize: 16,
  },
  borderBottom: {
    height: 1,
    backgroundColor: '#E0E0E0',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    gap: 4
  },
  starIcon: {
    marginRight: 4,
  },
  rating: {
    fontFamily: 'manrope-regular',
    fontWeight: '400',
    fontSize: 12,
    marginRight: 4,
  },
})
