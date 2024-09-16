import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { scale } from '../utils/dimension'

interface SizeItem {
  label: string
  value: string
}

const sizes: SizeItem[] = [
  { label: 'Width', value: '70cm' },
  { label: 'Depth', value: '70cm' },
  { label: 'Height', value: '70cm' },
  { label: 'Seat Width', value: '70cm' },
  { label: 'Seat Depth', value: '70cm' },
  { label: 'Seat Height', value: '70cm' },
]

const Size: React.FC = () => {
  const [isSizeVisible, setIsSizeVisible] = useState<boolean>(false)

  const toggleSize = () => {
    setIsSizeVisible(!isSizeVisible)
  }

  return (
    <View style={styles.sectionpart}>
      <View style={styles.dheader}>
        <Text style={styles.sizesection}>Size</Text>
        <TouchableOpacity onPress={toggleSize}>
          <Icon name={isSizeVisible ? 'angle-up' : 'angle-down'} size={20} />
        </TouchableOpacity>
      </View>
      {isSizeVisible && (
        <>
          {sizes.map((item, index) => (
            <View key={index}>
              <View style={styles.dheader}>
                <Text style={styles.prDescription}>{item.label}:</Text>
                <Text style={styles.prDescription}>{item.value}</Text>
              </View>
              {index < sizes.length - 1 && <View style={styles.borderBottom} />}
            </View>
          ))}
          <Image
            style={styles.sizeimg}
            source={require('../assets/chair1.png')}
          />
        </>
      )}
    </View>
  )
}

export default Size

const styles = StyleSheet.create({
  sectionpart: {
    padding: 16,
  },
  dheader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sizesection: {
    fontFamily: 'manrope-regular',
    fontWeight: '700',
    fontSize: 18,
    paddingBottom: 12,
  },
  prDescription: {
    fontFamily: 'manrope-regular',
    fontWeight: '400',
    fontSize: 14,
  },
  sizeimg: {
    alignSelf: 'center',
    width: 264 * scale,
    height: 264 * scale,
    marginTop: 20,
  },
  borderBottom: {
    height: 1,
    backgroundColor: '#E0E0E0',
    margin: 10,
  },
})
