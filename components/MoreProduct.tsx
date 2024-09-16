import React from 'react'
import { StyleSheet, View, Image, Text, ScrollView } from 'react-native'

const MoreProduct: React.FC = () => {
  return (
    <ScrollView
      horizontal
      contentContainerStyle={styles.scrollContainer}
      showsHorizontalScrollIndicator={false}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <View key={index} style={styles.itemContainer}>
          <Image
            style={styles.image}
            source={require('../assets/chair1.png')}
          />
          <Text style={styles.offer}>45%OFF</Text>
          <Text style={styles.productname}>EKERO</Text>
          <Text style={styles.pricing1}>$230.00</Text>
          <Text style={styles.pricing2}>$512.28</Text>
        </View>
      ))}
    </ScrollView>
  )
}

export default MoreProduct

const styles = StyleSheet.create({
  scrollContainer: {
    paddingVertical: 10,
    marginLeft: 16,
  },
  itemContainer: {
    width: 152,
    marginRight: 16,
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 14,
    shadowColor: 'F8F8F8',
    shadowOpacity: 1,
    shadowRadius: 12,
    elevation: 3,
  },
  image: {
    width: 120,
    height: 121,
    borderRadius: 8,
    marginBottom: 8,
  },
  offer: {
    fontFamily: 'manrope-regular',
    fontWeight: '400',
    fontSize: 12,
    color: 'white',
    position: 'absolute',
    bottom: 93,
    left: 16,
    backgroundColor: 'red',
    paddingHorizontal: 4,
    borderRadius: 4,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  productname: {
    fontFamily: 'manrope-regular',
    fontWeight: '400',
    fontSize: 14,
    marginBottom: 2,
  },
  pricing1: {
    fontFamily: 'manrope-regular',
    fontWeight: '700',
    fontSize: 20,
    marginBottom: 2,
  },
  pricing2: {
    fontFamily: 'manrope-regular',
    fontWeight: '400',
    fontSize: 12,
    textDecorationLine: 'line-through',
  },
})
