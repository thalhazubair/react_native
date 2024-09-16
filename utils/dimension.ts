import { Dimensions } from 'react-native'

const { width: screenWidth } = Dimensions.get('window')
const scale = screenWidth / 375

export { screenWidth, scale }
