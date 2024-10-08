import React, { useContext } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

import { scale } from '../utils/dimension'
import { ImageContext } from '../context/ImageContext'

const colors = [
  { color: '#FFA200', name: 'Orange' },
  { color: '#51804D', name: 'Green' },
  { color: '#3357FF', name: 'Blue' },
  { color: '#BE4545', name: 'Red' },
]

const ColorSection: React.FC = () => {
  const { setImages } = useContext(ImageContext)

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
    <>
      <View style={styles.container}>
        <Text style={styles.colorsection}>Colors</Text>
        <View style={styles.colorcontainer}>
          {colors.map((color, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleColorChange(color.name)}
            >
              <View key={index} style={[styles.colorBox]}>
                <View
                  style={[
                    styles.colorDisplay,
                    { backgroundColor: color.color },
                  ]}
                />
                <Text style={styles.colorName}>{color.name}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.borderBottom}></View>
    </>
  )
}

export default ColorSection

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 10,
  },
  colorsection: {
    fontFamily: 'manrope-regular',
    fontWeight: '700',
    fontSize: 18,
  },
  colorcontainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 20,
  },
  colorBox: {
    width: 163 * scale,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    padding: 12,
  },
  colorDisplay: {
    width: 35,
    height: 35,
    borderRadius: 5,
    marginRight: 8,
  },
  colorName: {
    fontFamily: 'manrope-regular',
    fontWeight: '400',
    fontSize: 14,
  },
  borderBottom: {
    height: 1,
    backgroundColor: '#E0E0E0',
    margin: 10,
  },
})
