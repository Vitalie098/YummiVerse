import { StyleSheet } from "react-native";
import globalStyles, { colors, fontFamilies } from "../../../../../utils/global/globalStyles";

const styles = StyleSheet.create({
    container: {
        marginBottom: 25,
        ...globalStyles.horizontalSpaceBetween
    },
    sectionActionText: {
        color: colors.mainColorT,
        fontFamily: fontFamilies.normal
    },
    divided: {
        fontFamily: fontFamilies.bold
    },
    sectionTitle: {
        flex: 1,
        fontSize: 24,
        marginRight: 15,
        color: colors.mainColorT,
        fontFamily: fontFamilies.bold
    },
    buttonFB: {
        color: colors.mainColorT,
        fontFamily: fontFamilies.bold
    }
})

export default styles