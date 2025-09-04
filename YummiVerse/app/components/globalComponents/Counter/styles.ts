import { StyleSheet } from "react-native";
import globalStyles, { colors, fontFamilies } from "../../../utils/global/globalStyles";

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        height: "100%", 
        borderRadius: 16, 
        paddingHorizontal: 25, 
        backgroundColor: "#ECE7E3", 
        ...globalStyles.horizontalSpaceBetween
    },
    text: {
        fontSize: 20, 
        lineHeight: 28,
        color: colors.mainColorT,
        fontFamily: fontFamilies.bold
    }
})

export default styles