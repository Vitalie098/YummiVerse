import { StyleSheet } from "react-native";
import globalStyles, { colors, fontFamilies } from "../../../../../../utils/global/globalStyles";

const styles = StyleSheet.create({
    imageContainer: {
        width: "100%", 
        marginBottom: 40,
        height: "56.572%", 
        alignSelf: "center", 
    },
    image: {
        width: "100%", 
        height: "100%"
    },
    buttonsWrapper: {
        gap: 8,
        ...globalStyles.centerAlignedRow
    },
    button: {
        flex: 1,
        height: 48, 
        borderWidth: 2,
        borderRadius: 16,   
        borderColor: colors.mainColorT, 
        ...globalStyles.centeredContent
    },
    text: {
        top: -2,
        fontSize: 16, 
        color: colors.mainColorT, 
        fontFamily: fontFamilies.bold
    },
    blackButton: {
        backgroundColor: colors.mainColorT
    },
    whiteText: {
        color: "#fff"
    }
})

export default styles