import { StyleSheet } from "react-native";
import globalStyles, { colors, fontFamilies } from "../../../../utils/global/globalStyles";

const styles = StyleSheet.create({
    container: {
        marginBottom: 31,
        paddingHorizontal: 17,
        ...globalStyles.horizontalSpaceBetween
    },
    text: {
        fontSize: 28, 
        color: colors.mainColorT, 
        fontFamily: fontFamilies.bold
    },
    modeWrapper: {
        width: 74,
        height: 40, 
        padding: 4, 
        borderRadius: 50,
        backgroundColor: "#D9D9D980", 
        ...globalStyles.horizontalCenter   
    },
    button: {
        width: 32, 
        height: 32, 
        marginRight: 2, 
        borderRadius: 50,
        ...globalStyles.centeredContent 
    }
})

export default styles