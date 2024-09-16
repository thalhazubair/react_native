import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const Description: React.FC = () => {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState<boolean>(false)

  const toggleDescription = () => {
    setIsDescriptionVisible(!isDescriptionVisible)
  }
  return (
    <>
      <View style={styles.sectionpart}>
        <View style={styles.dheader}>
          <Text style={styles.sizesection}>Product Description</Text>
          <TouchableOpacity onPress={toggleDescription}>
            <Icon
              name={isDescriptionVisible ? 'angle-up' : 'angle-down'}
              size={20}
            />
          </TouchableOpacity>
        </View>
        {isDescriptionVisible && (
          <Text style={styles.prDescription}>
            Choose a stylish dark color or brighten up your home with colorful
            sarongs. The EKERÖ armchair has a sleek and modern look with two
            sides that meet at the back – and a waist support for added comfort!
          </Text>
        )}
      </View>
      <View style={styles.borderBottom}></View>
    </>
  )
}

export default Description

const styles = StyleSheet.create({
  sectionpart: {
    padding: 16,
    gap: 10,
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
  },
  prDescription: {
    fontFamily: 'manrope-regular',
    fontWeight: '400',
    fontSize: 14,
  },
  borderBottom: {
    height: 1,
    backgroundColor: '#E0E0E0',
  },
})
