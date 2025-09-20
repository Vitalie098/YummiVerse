import { StyleSheet } from "react-native";
import { fontFamilies } from "../../../../../utils/global/globalStyles";

const styles = StyleSheet.create({
    text: {
        fontSize: 18, 
        color: "#fff", 
        lineHeight: 26,
        fontFamily: fontFamilies.bold
    },
    largeText: {
        fontSize: 35,
        color: '#fff',
        lineHeight: 42,
        textAlign: 'center',
        fontFamily: fontFamilies.bold,
    },
})

export default styles