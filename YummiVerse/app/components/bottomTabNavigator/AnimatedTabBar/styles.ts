import { StyleSheet } from "react-native"
import { colors } from "../../utils/global/globalStyles"

const styles = StyleSheet.create({
  tabBar: {
    bottom: 0,
    width: "100%",
    shadowRadius: 12,
    zIndex: 888,
    elevation: 20,
    borderTopWidth: 0,
    shadowOpacity: 0.2,
    overflow: 'visible',
    position: "absolute",
    shadowColor: '#000000',
    backgroundColor: "#fff",
    shadowOffset: {height: 1, width: 1}
  },
  svgWrapper: {
    position: 'absolute',
    top: -10,
  },
  tabBarContainer: {
    marginTop: 17.5,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
})

export default styles