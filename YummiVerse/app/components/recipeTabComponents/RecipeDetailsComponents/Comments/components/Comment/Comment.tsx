import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from "./styles"
import LikeCommentButton from '../LikeCommentButton'
import globalStyles from '../../../../../../utils/global/globalStyles'

interface IComment {
  item: any,
  index?: number
  isCommentScreen?: boolean
  onFocusReplyHandler?: () => void
}

const Comment = ({item, index, isCommentScreen, onFocusReplyHandler}: IComment) => {
  return (
    <View style={[!isCommentScreen && styles.container, isCommentScreen && index != 0 && styles.commentsScreenContainer]}>
      {isCommentScreen && index != 0 &&  <View style={styles.line}/> }
     
      <View style={{flex: 1}}>
        <View style={[globalStyles.horizontalSpaceBetween, isCommentScreen && index != 0  && {marginLeft: 15}]}>
          <View style={styles.headerLeft}>
            <View style={styles.userAvatar}/>
            
            <View>
              <Text style={styles.username}>{item.name}</Text>
              <Text style={styles.textColor}>{item.time} ago</Text>
            </View>
          </View>
        </View>

        <View style={[isCommentScreen &&  styles.modeCommentWrapper]}> 
          {isCommentScreen && index == 0 &&  <View style={styles.line}/>}
         
          <View style={[isCommentScreen && styles.contentWrapper]}>
            <Text style={styles.comment}>{item.comment}</Text>

            <View style={styles.footer}>
              <View style={styles.likeCommentWrapper}>
                <TouchableOpacity>
                  <LikeCommentButton likes={item.likes} type={"like"}/>
                </TouchableOpacity>
                
                <TouchableOpacity>
                  <LikeCommentButton likes={item.comments} type={"comment"}/>
                </TouchableOpacity>
                
              </View>

              <TouchableOpacity onPress={onFocusReplyHandler}>
                <Text style={styles.textColor}>Reply</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Comment