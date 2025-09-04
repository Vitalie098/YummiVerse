import { StyleSheet } from "react-native";
import globalStyles, { colors, fontFamilies } from "../../../../utils/global/globalStyles";

const styles = StyleSheet.create({
    container: {
        paddingTop: 20, 
        paddingBottom: 32,
    },
    topWrapper: {
        marginBottom: 32,
        ...globalStyles.horizontalSpaceBetween
    },
    title: {
        fontSize: 28, 
        lineHeight: 36, 
        color: colors.mainColorT,
        fontFamily: fontFamilies.bold
    },
    counterWrapper: {
        flex: 0,
        width: 109, 
        height: 46, 
        paddingHorizontal: 16, 
        backgroundColor: "rgba(217,217,217,.5)"
    },
    counterText: {
        fontSize: 18, 
        lineHeight: 26,
        fontFamily: fontFamilies.normal
    },
    subtitle: {
        fontSize: 16, 
        lineHeight: 22, 
        marginBottom: 22,
        color: colors.mainColorT,
        fontFamily: fontFamilies.bold
    },
    flatListContainer: {
        gap: 16
    },
    ingredientWrapper: { 
        gap: 16,
        ...globalStyles.centerAlignedRow
    },
    imageWrapper: {
        width: 48, 
        height: 48, 
        borderRadius: 20, 
        backgroundColor: colors.mainColorT
    },
    ingredientName: {
        fontSize: 16, 
        lineHeight: 22,
        color: colors.mainColorT,
        fontFamily: fontFamilies.normal
    },
    quantity: {
        color: "#757575"
    }
})

export default styles