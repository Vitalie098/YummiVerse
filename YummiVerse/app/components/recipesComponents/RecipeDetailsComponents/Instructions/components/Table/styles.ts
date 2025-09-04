import { StyleSheet } from "react-native";
import globalStyles, { colors, fontFamilies } from "../../../../../../utils/global/globalStyles";

const styles = StyleSheet.create({
    container: {
        paddingTop: 18, 
        paddingBottom: 2, 
        borderRadius: 16, 
        marginBottom: 60,
        backgroundColor: colors.mainColorB 
    },
    top: {
        marginBottom: 20,
        paddingHorizontal: 16, 
        ...globalStyles.horizontalSpaceBetween
    },
    text: {
        fontSize: 18, 
        color: colors.mainColorT,
        fontFamily: fontFamilies.bold
    },
    timeWrapper: {
        gap: 8,
        ...globalStyles.centerAlignedRow
    },
    time: {
        fontSize: 18, 
        color: colors.mainColorT,
        fontFamily: fontFamilies.bold
    },
    contentWrapper: { 
        gap: 2,
        paddingHorizontal: 2, 
        ...globalStyles.centerAlignedRow
    },
    column: {
        gap: 5,
        flex: 1, 
        height: 68, 
        borderRadius: 4, 
        paddingHorizontal: 17,  
        backgroundColor: "#fff", 
        justifyContent: "center",
    },
    column1: {
        borderBottomLeftRadius: 16 
    },
    column3: {
       borderBottomRightRadius: 16
    },
    value: {
        fontSize: 18, 
        color: colors.mainColorT,
        fontFamily: fontFamilies.bold
    },
    textColor: {
        color: colors.mainColorT,
        fontFamily: fontFamilies.normal
    }
})

export default styles