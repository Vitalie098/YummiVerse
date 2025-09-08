import { StyleSheet } from "react-native";
import globalStyles, { fontFamilies } from "../../../../../../utils/global/globalStyles";

const styles = StyleSheet.create({
    container: {
        gap: 16, 
        padding: 8,
        height: 123, 
        borderRadius: 16, 
        backgroundColor: "#fff", 
        ...globalStyles.centerAlignedRow  
    },
    dots: {
        top: 13,
        right: 10, 
        position: "absolute"
    },
    imageWrapper: {
        width: 80, 
        height: 107, 
        borderRadius: 8,
        backgroundColor: "red"
    },
    contentWrapper: {
        flex: 1
    },
    text: { 
        fontSize: 16, 
        width: "85%",
        lineHeight: 26, 
        fontFamily: fontFamilies.bold
    }
})

export default styles