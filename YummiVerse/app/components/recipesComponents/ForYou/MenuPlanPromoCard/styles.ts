import { StyleSheet } from "react-native";
import globalStyles, { colors, fontFamilies } from "../../../../utils/global/globalStyles";

const styles = StyleSheet.create({
    container: {
        padding: 24,
        borderRadius: 16,
        marginHorizontal: 17, 
        backgroundColor: "#ECE7E3", 
        ...globalStyles.centeredContent
    },
    text: {
        fontSize: 18,
        marginTop: 15, 
        lineHeight: 26,  
        marginBottom: 16,
        textAlign: "center",
        color: colors.mainColorT, 
        fontFamily: fontFamilies.bold
    },
    buttonWrapper: {
        height: 48, 
        width: "100%", 
        borderRadius: 16,
        ...globalStyles.centeredContent,
        backgroundColor: colors.mainColorT
    },
    buttonText: {
        fontSize: 16, 
        color: "#fff",
        fontFamily: fontFamilies.bold
    }
})

export default styles