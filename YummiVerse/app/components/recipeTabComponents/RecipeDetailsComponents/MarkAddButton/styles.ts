import { StyleSheet } from "react-native";
import globalStyles, { colors, fontFamilies } from "../../../../utils/global/globalStyles";

const styles = StyleSheet.create({
    button: {
        gap: 10, 
        height: 46, 
        borderRadius: 16, 
        ...globalStyles.horizontalCenter,
        backgroundColor: colors.mainColorT
    },
    buttonWhite: {
       borderWidth: 2, 
       backgroundColor: "#fff", 
       borderColor: colors.mainColorT
    },
    text: {
        fontSize: 16, 
        color: "#fff",
        lineHeight: 22, 
        fontFamily: fontFamilies.bold
    },
    textBlack: {
        color: colors.mainColorT,
    }
})

export default styles