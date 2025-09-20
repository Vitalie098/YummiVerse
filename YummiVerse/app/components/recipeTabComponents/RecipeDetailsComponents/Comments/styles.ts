import { StyleSheet } from "react-native";
import globalStyles, { colors, fontFamilies } from "../../../../utils/global/globalStyles";

const styles = StyleSheet.create({
    container: {
        paddingTop: 21,
        paddingBottom: 50,
        paddingHorizontal: 17,
        backgroundColor: "#fff"
    },
    topWrapper: {
        marginBottom: 24
    },
    title: {
        fontSize: 28,  
        marginBottom: 7,
        color: colors.mainColorT,
        fontFamily: fontFamilies.bold
    },
    subtitle: {
        fontSize: 16, 
        marginBottom: 26,
        color: colors.mainColorT, 
        fontFamily: fontFamilies.normal
    },
    writeWrapper: {
        gap: 8, 
        ...globalStyles.centerAlignedRow
    },
    avatarWrapper: {
        width: 40, 
        height: 40, 
        borderRadius: 20, 
        backgroundColor: "blue"
    },
    inputWrapper: {
        flex: 1, 
        height: 40, 
        borderWidth: 1, 
        borderRadius: 16, 
        paddingHorizontal: 17,
        borderColor: "#B6BDBB", 
        justifyContent: "center"
    },
    input: {
        color: colors.mainColorT,
        fontFamily: fontFamilies.normal
    },
    commentsWrapper: {
        gap: 16
    }
})

export default styles