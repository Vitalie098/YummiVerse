import { StyleSheet } from "react-native";
import globalStyles, { colors, fontFamilies } from "../../../../../../utils/global/globalStyles";

const styles = StyleSheet.create({
    container: {
        marginBottom: 30,
        ...globalStyles.endAlignedFlex
    },
    cp: {
        paddingTop: 35
    },
    instruction: {
        fontSize: 22,  
        lineHeight: 28, 
        marginBottom: 38,
        fontFamily: fontFamilies.bold
    },
    bigText: {
        fontSize: 50,
        lineHeight: 56,
        color: colors.mainColorT,
        fontFamily: fontFamilies.normal
    },
    buttonWrapper: {
        gap: 12.5,
        width: 162, 
        height: 40, 
        borderWidth: 1, 
        borderRadius: 16,  
        backgroundColor: "transparent",
        ...globalStyles.horizontalCenter
    },
    buttonText: {
        lineHeight: 20, 
        fontFamily: fontFamilies.bold
    },
    prevNextWrapper: {
        gap: 4,
        ...globalStyles.centerAlignedRow,
    }
})

export default styles