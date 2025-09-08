import { StyleSheet } from "react-native";
import globalStyles, { colors, fontFamilies } from "../../../../../../utils/global/globalStyles";

const styles = StyleSheet.create({
    container: {
        paddingTop: 14,
        marginBottom: 47,
        ...globalStyles.horizontalSpaceBetween
    },
    leftSideWrapper: {
        gap: 8, 
        flex: 1,
        ...globalStyles.centerAlignedRow
    },
    text: {
        width: "65%",
        fontSize: 16, 
        color: "#fff", 
        lineHeight: 22,  
        fontFamily: fontFamilies.bold 
    },
})

export default styles