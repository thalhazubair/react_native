import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

const Cart: React.FC = () => {
  const [isWishlistAdded, setIsWishlistAdded] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const toggleWishlist = () => {
    setIsWishlistAdded(!isWishlistAdded)
  }

  const handleAddToCart = () => {
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      Alert.alert('Confirmation', 'Item added to cart successfully!', [
        { text: 'OK' },
      ])
    }, 2000)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.wishlistButton,
          isWishlistAdded && styles.wishlistActive,
        ]}
        onPress={toggleWishlist}
      >
        <Icon
          name={isWishlistAdded ? 'heart' : 'heart-o'}
          size={18}
          color={isWishlistAdded ? 'red' : 'black'}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.cartButton}
        onPress={handleAddToCart}
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator size="small" color="#ffffff" />
        ) : (
          <Text style={styles.cartButtonText}>Add to Cart</Text>
        )}
      </TouchableOpacity>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 12,
    gap: 16,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    shadowColor: 'F8F8F8',
    shadowOpacity: 1,
    shadowRadius: 12,
    elevation: 5,
  },
  wishlistButton: {
    width: 66,
    height: 44,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#156651',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wishlistActive: {
    borderColor: 'red',
  },
  cartButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 8,
    backgroundColor: '#156651',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
})
