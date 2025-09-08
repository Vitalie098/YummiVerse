import { StyleSheet } from "react-native";
import globalStyles, { colors, fontFamilies } from "../../../../utils/global/globalStyles";

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: "#EAE6E2",
    },
    contentWrapper: {
        flex: 1,
        paddingHorizontal: 17
    },
    header: {
        marginBottom: 41,
        ...globalStyles.horizontalCenter
    },
    arrowWrapper: {
        left: 4,
        position: "absolute"
    },
    headerText: {
        fontSize: 16, 
        color: colors.mainColorT, 
        fontFamily: fontFamilies.bold
    },
    textsWrapper: {
        marginBottom: 25
    },
    title: {
        fontSize: 36, 
        marginBottom: 6,
        textAlign: "center", 
        color: colors.mainColorT,
        fontFamily: fontFamilies.bold
    },
    subtitle: {
        fontSize: 16, 
        lineHeight: 22,
        textAlign: "center", 
        color: colors.mainColorT,
        fontFamily: fontFamilies.normal
    },
    bigSize: {
        fontSize: 40
    }
})

export default styles