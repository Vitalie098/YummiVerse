import { StyleSheet } from "react-native";
import globalStyles, { colors, fontFamilies } from "../../../../../../utils/global/globalStyles";

const styles = StyleSheet.create({
    container: {
        paddingBottom: 40,
        paddingHorizontal: 17, 
    },
    topContainer: {
        marginBottom: 39
    },
    titleTop: {
        fontSize: 16, 
        lineHeight: 22, 
        marginBottom: 18,
        color: colors.mainColorT,
        fontFamily: fontFamilies.bold
    },
    ingredientsWrapper: {
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
    titleFooter: {
        fontSize: 16, 
        lineHeight: 22,
        marginBottom: 18,
        color: colors.mainColorT,
        fontFamily: fontFamilies.bold
    },
})

export default styles