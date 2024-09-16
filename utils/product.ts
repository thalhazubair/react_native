// products.ts
import { ImageSourcePropType } from 'react-native'

export interface Product {
  id: number
  image: ImageSourcePropType
  offer: string
  name: string
  price: string
  originalPrice: string
  rating: string
}

const products: Product[] = [
  {
    id: 1,
    image: require('../assets/chair1.png'),
    offer: '45% OFF',
    name: 'EKERO',
    price: '$230.00',
    originalPrice: '$512.28',
    rating: '4.9 (300)',
  },
  {
    id: 2,
    image: require('../assets/greenchair1.png'),
    offer: '30% OFF',
    name: 'LUND',
    price: '$180.00',
    originalPrice: '$257.00',
    rating: '4.7 (150)',
  },
  {
    id: 3,
    image: require('../assets/newimage3.png'),
    offer: '50% OFF',
    name: 'HOLM',
    price: '$120.00',
    originalPrice: '$240.00',
    rating: '4.8 (200)',
  },
  {
    id: 4,
    image: require('../assets/newimage2.png'),
    offer: '20% OFF',
    name: 'SÖDER',
    price: '$250.00',
    originalPrice: '$312.50',
    rating: '4.6 (100)',
  },
  {
    id: 5,
    image: require('../assets/newchair1.png'),
    offer: '10% OFF',
    name: 'KARL',
    price: '$200.00',
    originalPrice: '$222.22',
    rating: '4.5 (50)',
  },
]

export default products
