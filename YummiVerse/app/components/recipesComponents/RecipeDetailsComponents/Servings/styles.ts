import { StyleSheet } from "react-native";
import globalStyles, { colors, fontFamilies } from "../../../../utils/global/globalStyles";

const styles = StyleSheet.create({
    backgroundColor: {
        backgroundColor: "rgba(236, 231, 227, .5)"
    },
    container: {
        borderRadius: 16, 
        paddingBottom: 56,
        paddingHorizontal: 16,  
        backgroundColor: "#fff"   
    },
    title: {
        fontSize: 28, 
        lineHeight: 36,
        marginBottom: 18, 
        fontFamily: fontFamilies.bold
    },
    couponWrapper: {
        gap: 41,
        height: 126, 
        width: "100%", 
        marginBottom: 16,
        paddingHorizontal: 16, 
        backgroundColor: "#ECE7E3", 
        ...globalStyles.centerAlignedRow
    },
    imgWrapper: {
        width: 69, 
        height: 92, 
        backgroundColor: "red"
    },
    percentage: {
        fontSize: 18, 
        lineHeight: 26, 
        marginBottom: 5,
        color: colors.mainColorT,
        fontFamily: fontFamilies.bold
    },
    text: {
        lineHeight: 20, 
        marginBottom: 12,
        color: colors.mainColorT,
        fontFamily: fontFamilies.normal 
    },
    buttomRedeemWrapper: {
        borderBottomWidth: 1, 
        alignSelf: "flex-start",
        borderColor: colors.mainColorT    
    },
    buttonRedeemText: {
        top: 4,
        fontSize: 16, 
        lineHeight: 22, 
        color: colors.mainColorT,
        fontFamily: fontFamilies.bold
    }
})

export default styles