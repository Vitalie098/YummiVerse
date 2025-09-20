import { StyleSheet } from "react-native";
import globalStyles, { colors, fontFamilies } from "../../../../../../utils/global/globalStyles";

const styles = StyleSheet.create({
    container: {
        gap: 17,
        height: 102,
        width: "100%", 
        borderRadius: 16, 
        ...globalStyles.horizontalCenter,
        backgroundColor: colors.mainColorB, 
    },
    contentWrapper: {
        flex: 1
    },
    title: {
        fontSize: 18, 
        marginBottom: 10,
        color: colors.mainColorT,
        fontFamily: fontFamilies.bold
    },
    subtitle: {
        lineHeight: 20,
        color: colors.mainColorT,
        fontFamily: fontFamilies.normal
    }
})

export default styles