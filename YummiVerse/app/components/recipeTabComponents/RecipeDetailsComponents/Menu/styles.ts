import { StyleSheet } from "react-native";
import globalStyles, { colors, fontFamilies } from "../../../../utils/global/globalStyles";

const styles = StyleSheet.create({
    menuWrapper: {
        paddingBottom: 26,
        ...globalStyles.horizontalSpaceAround
    },
    menu: {
        fontSize: 16, 
        lineHeight: 22, 
        color: colors.mainColorT,
        fontFamily: fontFamilies.normal
    },
    bold: {
        fontFamily: fontFamilies.bold
    },
    animated: {
        left: 0,
        bottom: 0, 
        position: "absolute" 
    }
})

export default styles