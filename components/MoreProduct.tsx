import React from 'react'
import { StyleSheet, View, Image, Text, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import products, {Product} from '../utils/product'


const MoreProduct: React.FC = () => {
  const renderItem = ({ item }: { item: Product }) => (
    <View key={item.id} style={styles.itemContainer}>
      <Image style={styles.image} source={item.image} />
      <Text style={styles.offer}>{item.offer}</Text>
      <Text style={styles.productname}>{item.name}</Text>
      <Text style={styles.pricing1}>{item.price}</Text>
      <Text style={styles.pricing2}>{item.originalPrice}</Text>
      <View style={styles.ratingContainer}>
        <Icon name="star" size={18} color="#FFD700" style={styles.starIcon} />
        <Text style={styles.rating}>{item.rating}</Text>
      </View>
    </View>
  )

  return (
    <FlatList
      horizontal
      data={products}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollContainer}
    />
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
    bottom: 118,
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
  },
  pricing2: {
    fontFamily: 'manrope-regular',
    fontWeight: '400',
    fontSize: 12,
    textDecorationLine: 'line-through',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingVertical: 4
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
