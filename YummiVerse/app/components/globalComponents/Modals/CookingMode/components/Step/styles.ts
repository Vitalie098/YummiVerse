import { StyleSheet } from "react-native";
import globalStyles, { colors, fontFamilies } from "../../../../../../utils/global/globalStyles";

const styles = StyleSheet.create({
    container: { 
        marginBottom: 16,
        ...globalStyles.centerAlignedRow
    },
    step: {
        width: 64,
        fontSize: 16, 
        lineHeight: 22, 
        color: colors.mainColorT,
        fontFamily: fontFamilies.normal
    },
    line: {
        flex: 1, 
        height: 1, 
        backgroundColor: "#D9D9D9"
    },
    contentWrapper: {
        gap: 17,
        flexDirection: "row", 
    },
    imageWrapper: {
        width: 64, 
        height: 85.33, 
        borderRadius: 8, 
        backgroundColor: colors.mainColorT
    },
    text: { 
        flex: 1,
        fontSize: 16, 
        lineHeight: 22,
        color: colors.mainColorT,
        fontFamily: fontFamilies.normal
    },
    timeWrapper: {
        width: 48, 
        height: 24, 
        marginTop: 5,
        borderWidth: 1,
        marginBottom: 9,
        borderRadius: 25,
        borderColor: "#ECE7E3", 
        justifyContent: "center",
    },
    detailsWrapper: {
        flex: 1
    },
    currentStepWrapper: {
        width: 86, 
        height: 24, 
        marginLeft: 8,
        borderRadius: 25, 
        backgroundColor: colors.mainColorT, 
        ...globalStyles.centeredContent
    },
    currentStepText: {
        fontSize: 12, 
        color: "#fff", 
        lineHeight: 14,
        fontFamily: fontFamilies.normal
    },
    stepBold: {
        fontFamily: fontFamilies.bold
    },
    lineBlack: {
        backgroundColor: colors.mainColorT
    },
    contentWrapperSelected: {
        padding: 7, 
        borderWidth: 1, 
        borderRadius: 8,
        borderColor: colors.mainColorT
    }
})

export default styles