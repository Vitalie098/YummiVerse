import { StyleSheet } from "react-native";
import globalStyles, { colors, fontFamilies } from "../../../../utils/global/globalStyles";

const styles = StyleSheet.create({
    imgWrapper: {
        height: 393, 
        width: "100%", 
        paddingTop: 70,
        backgroundColor: "red"
    },
    imgWrapperTop: {
        gap: 8,
        zIndex: 2,
        paddingLeft: 21, 
        paddingRight: 16, 
        ...globalStyles.horizontalSpaceBetween
    },
    infoWrapper: {
        gap: 8,
        ...globalStyles.centerAlignedRow
    },
    brandWrapper: {
        width: 49, 
        height: 32,
        borderRadius: 16,
        backgroundColor: "#FFF01D",
    },
    timeWrapper: {
        width: 60, 
        height: 32, 
        borderRadius: 16, 
        backgroundColor: "#fff"
    },
    footerWrapper: {
        top: -16, 
        paddingTop: 24, 
        marginBottom: 14,
        paddingHorizontal: 16, 
        borderTopEndRadius: 16, 
        borderTopLeftRadius: 16,
        backgroundColor: colors.mainColorB  
    },
    title: {
        fontSize: 28, 
        lineHeight: 36, 
        marginBottom: 31,
        color: colors.mainColorT, 
        fontFamily: fontFamilies.bold
    },
    buttonsWrapper: { 
        gap: 8, 
        marginBottom: 35,
        ...globalStyles.centerAlignedRow
    },
    buttonCook: {
        flex: 1,
        height: 48, 
        borderRadius: 16, 
        ...globalStyles.centeredContent,
        backgroundColor: colors.mainColorT, 
    },
    buttonCookText: {
        fontSize: 16,  
        color: "#fff",
        lineHeight: 22,
        fontFamily: fontFamilies.bold
    },
    actionButton: {
        width: 48,
        height: 48,  
        borderWidth: 2, 
        borderRadius: 16, 
        borderColor: colors.mainColorT,
        ...globalStyles.centeredContent
    },
    menuText: {
        fontSize: 16, 
        lineHeight: 22, 
        color: colors.mainColorT
    },
    animatedBar: {
        left: 0,
        bottom: -26, 
        position: "absolute", 
    }
})

export default styles