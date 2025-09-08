import { StyleSheet } from "react-native";
import globalStyles, { colors, fontFamilies } from "../../../../utils/global/globalStyles";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 12,
        paddingHorizontal: 16,
    },
    hadnleIndicator: {
        width: 48,
        height: 4, 
        backgroundColor: "#D9D9D9"
    },
    question: {
        fontSize: 16, 
        lineHeight: 22, 
        marginBottom: 24,
        textAlign: "center",
        color: colors.mainColorT,
        fontFamily: fontFamilies.bold
    },
    buttonsWrapper: {
        gap: 16, 
        height: 48,
        ...globalStyles.centerAlignedRow
    },
    count: {
        fontSize: 20, 
        lineHeight: 28, 
        color: colors.mainColorT,
        fontFamily: fontFamilies.bold
    },
    confirmButtonWrapper: { 
        width: 94, 
        height: "100%", 
        borderRadius: 16, 
        ...globalStyles.centeredContent,
        backgroundColor: colors.mainColorT
    },
    confirmButtonText: {
        fontSize: 16, 
        color: "#fff", 
        lineHeight: 22,
        fontFamily: fontFamilies.bold
    }
})

export default styles