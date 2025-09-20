import { LayoutChangeEvent } from 'react-native'
import React from 'react'
import Informations from '../Informations'
import Servings from '../Servings'
import Instructions from '../Instructions'
import Comments from '../Comments'

interface IContent {
	handleLayout: (event: LayoutChangeEvent) => void
}

const Content = ({handleLayout}: IContent) => {
  return (
    <>
      <Informations />
      <Servings handleLayout={handleLayout} />
      <Instructions handleLayout={handleLayout} />
      <Comments handleLayout={handleLayout} />
    </>
  )
}

export default React.memo(Content)