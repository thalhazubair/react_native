import React, { useState } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'

import ProductDetails from '../components/ProductDetails'
import ProductImage from '../components/ProductImage'
import ColorSection from '../components/ColorSection'
import Description from '../components/Description'
import Size from '../components/Size'
import Recent from '../components/Recent'
import Cart from '../components/Cart'
import ImageProvider from '../context/ImageContext'

const Home = () => {
  const [images, setImages] = useState({
    main: require('../assets/chair1.png'),
    sub1: require('../assets/chair1.png'),
    sub2: require('../assets/chair2.png'),
    sub3: require('../assets/chair3.png'),
  })

  const handleColorChange = (color: any) => {
    if (color === 'Green') {
      setImages({
        main: require('../assets/greenchair1.png'),
        sub1: require('../assets/greenchair1.png'),
        sub2: require('../assets/greenchair2.png'),
        sub3: require('../assets/greenchair3.png'),
      })
    } else {
      setImages({
        main: require('../assets/chair1.png'),
        sub1: require('../assets/chair1.png'),
        sub2: require('../assets/chair2.png'),
        sub3: require('../assets/chair3.png'),
      })
    }
  }

  return (
    <ScrollView>
      <View style={styles.Details}>
        <ImageProvider>
          <ProductImage />
          <ProductDetails />
          <ColorSection />
          <Description />
          <Size />
          <Recent />
          <Cart />
        </ImageProvider>
      </View>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  Details: {
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 24,
    elevation: 5,
  },
})
