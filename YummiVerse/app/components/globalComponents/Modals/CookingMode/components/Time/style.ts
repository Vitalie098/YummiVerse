import { StyleSheet } from "react-native";
import globalStyles, { colors, fontFamilies } from "../../../../../../utils/global/globalStyles";

const styles = StyleSheet.create({
    container: {
        gap: 5,
        ...globalStyles.centerAlignedRow    
    },
    time: {
        color: "#fff",
        lineHeight: 20,
        fontFamily: fontFamilies.normal
    },
})


export default styles