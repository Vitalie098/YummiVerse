import { StyleSheet } from "react-native";
import globalStyles, { colors, fontFamilies } from "../../../../../../utils/global/globalStyles";

const styles = StyleSheet.create({
    container: {
        marginBottom: 18,
        alignSelf: "flex-end", 
    },
    initialTimer: {
        gap: 10, 
        width: 131, 
        height: 40, 
        borderWidth: 1, 
        borderRadius: 16, 
        ...globalStyles.horizontalCenter
    },
    text: {
        fontSize: 13, 
        fontFamily: fontFamilies.bold
    },
    runningTimer: {
        gap: 8, 
        width: 86, 
        height: 35, 
        borderRadius: 16, 
        paddingHorizontal: 10,
        backgroundColor: colors.mainColorB,
        ...globalStyles.horizontalCenter
    },
    arrowWrapper: {
        top: 4.5,
        left: 7.5
    },
    time: {
        flex: 1,
        color: colors.mainColorT,
        fontFamily: fontFamilies.normal 
    }
})

export default styles