import { StyleSheet } from "react-native";
import globalStyles, { colors, fontFamilies } from "../../../../../../utils/global/globalStyles";

const styles = StyleSheet.create({
    container: {
        gap: 16,
        padding: 8,
        height: 123,
        marginBottom: 8,
        borderRadius: 16,  
        marginHorizontal: 17,
        backgroundColor: colors.mainColorT, 
        ...globalStyles.centerAlignedRow
    },
    dots: {
        top: 12.5, 
        right: 10,
        position: "absolute"
    },
    imageWrapper: {
        width: 80, 
        height: 107, 
        borderRadius: 8,
        backgroundColor: "red", 
    }
})

export default styles