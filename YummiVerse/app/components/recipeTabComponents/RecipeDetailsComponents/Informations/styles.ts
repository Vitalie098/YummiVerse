import { StyleSheet } from "react-native";
import globalStyles, { colors, fontFamilies } from "../../../../utils/global/globalStyles";

const styles = StyleSheet.create({
    container: {
        marginBottom: 24,
        paddingBottom: 30,
        marginHorizontal: 16, 
        borderBottomWidth: 1, 
        borderColor: "#D9D9D9"
    },
    textWrapper: {
        gap: 21, 
        marginBottom: 24,
        flexDirection: "row"  
    },
    text: {
        fontSize: 16, 
        lineHeight: 22,
        fontFamily: fontFamilies.normal
    },
    hiddenText: {
        left: -500,
        position: "absolute"  
    },
    arrow: {
        justifyContent: "flex-end" 
    },
    buttonsWrapper: { 
        gap: 16,
        flexWrap: "wrap",
        ...globalStyles.centerAlignedRow
    },
    buttonWrapper: {
        gap: 9,
        height: 40, 
        paddingLeft: 14, 
        paddingRight: 26, 
        borderRadius: 25, 
        backgroundColor: "#fff", 
        ...globalStyles.horizontalCenter
    },
    buttonText: {
        fontSize: 16, 
        lineHeight: 22, 
        color: colors.mainColorT,
        fontFamily: fontFamilies.normal
    }
})

export default styles