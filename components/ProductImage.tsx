import React, { useEffect, useState } from 'react'
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native'

import { scale } from '../utils/dimension'

import Badge from './Badge'

const ProductImage = ({ images }: any) => {
  const [mainImage, setMainImage] = useState(images.main)

  const handleSubImagePress = (image: any) => {
    setMainImage(image)
  }

  useEffect(() => {
    setMainImage(images.main)
  }, [images])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subcontainer}>
        <Badge />
        <Image style={styles.mainimg} source={mainImage} />
      </View>
      <View style={styles.subImagesContainer}>
        <TouchableOpacity onPress={() => handleSubImagePress(images.sub1)}>
          <Image style={styles.subimg} source={images.sub1} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSubImagePress(images.sub2)}>
          <Image style={styles.subimg} source={images.sub2} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSubImagePress(images.sub3)}>
          <Image style={styles.subimg} source={images.sub3} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default ProductImage

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
  },
  subcontainer: {
    flexDirection: 'row',
  },
  mainimg: {
    width: 264 * scale,
    height: 264 * scale,
  },
  subImagesContainer: {
    flexDirection: 'row',
    marginTop: 20,
    paddingVertical: 12,
    gap: 16 * scale,
    justifyContent: 'center',
  },
  subimg: {
    width: 54 * scale,
    height: 54 * scale,
    borderRadius: 10,
  },
})
