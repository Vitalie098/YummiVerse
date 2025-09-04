import { StyleSheet } from "react-native";
import globalStyles, { colors, fontFamilies } from "../../../../../../utils/global/globalStyles";

const styles = StyleSheet.create({
    container: {
        gap: 8, 
        width: 64, 
        height: 32, 
        borderRadius: 20,
        ...globalStyles.horizontalCenter,
        backgroundColor: "rgba(236, 231, 227, .5)"
    },
    text: {
        fontSize: 16, 
        color: colors.mainColorT,
        fontFamily: fontFamilies.normal
    }
})

export default styles