import { StyleSheet } from "react-native";
import globalStyles, { colors, fontFamilies } from "../../../../utils/global/globalStyles";

const styles = StyleSheet.create({
    container: {
        marginBottom: 30, 
        paddingHorizontal: 0
    },
    title: {
        fontSize: 18,
        marginBottom: 18, 
        color: colors.mainColorT,
        fontFamily: fontFamilies.bold 
    },
    utensilsWrapper: {
      gap: 8, 
      flexWrap: "wrap",
      flexDirection: "row"
    },
    utensilWrapper: {
        gap: 10,
        height: 32,
        paddingLeft: 12, 
        paddingRight: 17, 
        borderRadius: 47,   
        backgroundColor: "#fff", 
        ...globalStyles.horizontalCenter  
    },
    utensilName: {
        color: colors.mainColorT,
        fontFamily: fontFamilies.normal
    }
})

export default styles