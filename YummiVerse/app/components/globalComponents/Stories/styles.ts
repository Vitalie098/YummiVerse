import { StyleSheet } from "react-native";
import globalStyles from "../../../utils/global/globalStyles";
import { screenHeight, screenWidth } from "../../../utils/global/globalValues";

const styles = StyleSheet.create({
  container: {
    width: screenWidth, 
    height: screenHeight
  },
  imageWrapper: {
    ...StyleSheet.absoluteFillObject
  },
  header: {
    width: "100%",
    position: "absolute", 
    paddingHorizontal: 16,
  },
  progressWrapper: {
    gap: 4,
    marginBottom: 17, 
    ...globalStyles.centerAlignedRow  
  },
  progress: {
    flex: 1,
    height: 3,
    borderRadius: 200,
    overflow: 'hidden',
    backgroundColor: 'rgba(255,255,255,0.3)'
  },
  animatedProgress: {
    height: 3,
    backgroundColor: '#fff'
  },
  image: {
    flex: 1
  },
  buttonsWrapper: {
    flexDirection: 'row',
    ...StyleSheet.absoluteFillObject
  }
})

export default styles