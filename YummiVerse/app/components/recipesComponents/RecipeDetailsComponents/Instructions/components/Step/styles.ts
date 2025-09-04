import { StyleSheet } from "react-native";
import globalStyles, { colors, fontFamilies } from "../../../../../../utils/global/globalStyles";

const styles = StyleSheet.create({
    container: {
        padding: 18, 
        borderRadius: 16,
        backgroundColor: "#fff" 
    },
    top: {
        marginBottom: 33,
        ...globalStyles.horizontalSpaceBetween
    },
    textColor: {
        color: colors.mainColorT,
        fontFamily: fontFamilies.normal
    },
    timeWrapper: { 
        gap: 4,
        ...globalStyles.centerAlignedRow
    },
    titleWrapper: { 
        marginBottom: 12,
        ...globalStyles.horizontalSpaceBetween
    },
    title: {
        fontSize: 22,
        color: colors.mainColorT,
        fontFamily: fontFamilies.bold
    },
    checkButton: {
        width: 20, 
        height: 20, 
        borderRadius: 5,
        borderWidth: 1.5,
        borderColor: colors.mainColorT,
        ...globalStyles.centeredContent
    },
    checked: {
        backgroundColor: colors.mainColorT
    },
    subtitle: { 
        fontSize: 16, 
        lineHeight: 22, 
        color: colors.mainColorT,
        fontFamily: fontFamilies.normal
    },
    subtitleMargin: {
        marginBottom: 17
    },
    imageWrapper: {
        height: 245, 
        width: "100%",  
        borderRadius: 16, 
        backgroundColor: "blue"
    },
    imageMargin: {
        marginBottom: 10
    },
    infosWrapper: {
        gap: 9
    },
    infoWrapper: { 
        gap: 8,
        ...globalStyles.centerAlignedRow
    },
    infoText: {
        fontSize: 12, 
        color: "#757575",
        fontFamily: fontFamilies.normal
    }
})

export default styles