import { StyleSheet } from "react-native";
import globalStyles, { colors, fontFamilies } from "../../../../utils/global/globalStyles";
import { screenHeight } from "../../../../utils/global/globalValues";

const styles = StyleSheet.create(({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    contentWrapper: {
        flex: 1, 
        paddingHorizontal: 17
    },
    close: {
        marginTop: 19,
        marginBottom: 40,
        alignSelf: "flex-end", 
    },
    textsWrapper: {
        marginBottom: 16,
        paddingHorizontal: 6 
    },
    title: {
        fontSize: 50, 
        lineHeight: 56,
        marginBottom: 8, 
        textAlign: "center", 
        color: colors.mainColorT,
        fontFamily: fontFamilies.bold
    },
    subtitle: {
        fontSize: 18, 
        lineHeight: 26, 
        textAlign: "center",
        color: colors.mainColorT, 
        fontFamily: fontFamilies.normal
    },
    buttonsWrapper: {
        gap: 8, 
        marginBottom: 20
    },
    button: {
        gap: 12, 
        height: 46, 
        borderWidth: 2,
        borderRadius: 16,
        borderColor: colors.mainColorT,
        ...globalStyles.horizontalCenter
    },
    buttonText: {
        fontSize: 16, 
        lineHeight: 22,
        fontFamily: fontFamilies.bold
    },
    extraButton: {
        alignSelf: "center",
        borderBottomWidth: 1, 
        borderBottomColor: colors.mainColorT, 
    },
    extraButtonText: {
        fontSize: 16, 
        lineHeight: 22,
        color: colors.mainColorT, 
        fontFamily: fontFamilies.bold
    },
    imagesWrapper: {
        top: 60,
        width: "100%", 
        height: (48.283 * screenHeight) / 100
    },
    confetti: {
        position: "absolute",
    }
}))

export default styles