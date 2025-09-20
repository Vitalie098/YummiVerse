import { StyleSheet } from "react-native";
import globalStyles, { colors, fontFamilies } from "../../../../../../utils/global/globalStyles";

const styles = StyleSheet.create({
    container: {
        padding: 15,
        borderWidth: 1, 
        borderRadius: 16, 
        borderColor: "#D9D9D9", 
    },
    commentsScreenContainer: {
        paddingLeft: 18.5,
        flexDirection: "row"
        
    },
    headerLeft: { 
        gap: 8, 
        marginBottom: 20,
        ...globalStyles.centerAlignedRow
    },
    userAvatar: {
        width: 38, 
        height: 38, 
        borderRadius: 20, 
        backgroundColor: "red"
    },
    username: {
        marginBottom: 4,
        color: colors.mainColorT,
        fontFamily: fontFamilies.bold
    },
    textColor: {
        color: colors.mainColorT,
        fontFamily: fontFamilies.normal
    },
    comment: {
        fontSize: 16,
        marginBottom: 18,
        color: colors.mainColorT,
        fontFamily: fontFamilies.normal
    },
    footer: { 
        gap: 13,
        ...globalStyles.centerAlignedRow
    },
    likeCommentWrapper: {
        gap: 8,
        ...globalStyles.centerAlignedRow
    },
    modeCommentWrapper: {
        gap: 15,
        paddingLeft: 18.5, 
        flexDirection: "row"
    },
    line: {
        width: 12, 
        height: "100%",
        borderLeftWidth: 1, 
        borderBottomWidth: 1,
        borderColor: "rgba(0,0,0,.2)",
        borderBottomLeftRadius: 8
    },
    contentWrapper: {
        paddingBottom: 27
    }

})

export default styles