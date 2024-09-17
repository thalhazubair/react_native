import React, { createContext, useState } from 'react'

export const ImageContext = createContext<any>(null)

const ImageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [images, setImages] = useState({
    main: require('../assets/chair1.png'),
    sub1: require('../assets/chair1.png'),
    sub2: require('../assets/chair2.png'),
    sub3: require('../assets/chair3.png'),
  })

  return (
    <ImageContext.Provider value={{ images, setImages }}>
      {children}
    </ImageContext.Provider>
  )
}

export default ImageProvider
