import { StyleSheet } from "react-native";
import globalStyles, { fontFamilies } from "../../../../../utils/global/globalStyles";

const styles = StyleSheet.create({
  container: {
    gap: 12, 
    ...globalStyles.centerAlignedRow
  },
  categoryImgWrapper: {
    width: 32, 
    height: 32, 
    borderRadius: 50, 
    backgroundColor: "red"
  },
  detailsWrapper: {
    gap: 4
  },
  title: {
    fontSize: 12, 
    color: "#fff",
    fontFamily: fontFamilies.normal
  },
  subtitleWrapper: {
    gap: 4,
    ...globalStyles.centerAlignedRow
  },
  subtitle: {
    fontSize: 12, 
    color: "#fff",
    fontFamily: fontFamilies.bold
  },
  buttonsWrapper: {
    gap: 17,
    ...globalStyles.centerAlignedRow
  },
  followButton: {
    width: 69, 
    height: 30, 
    borderWidth: 1,
    borderRadius: 8, 
    borderColor: "#fff", 
    ...globalStyles.centeredContent
  },
  buttonText: {
    color: "#fff",
    fontFamily: fontFamilies.bold
  }
})

export default styles