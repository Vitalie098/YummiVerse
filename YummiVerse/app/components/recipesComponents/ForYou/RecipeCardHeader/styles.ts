import { StyleSheet } from "react-native";
import globalStyles, { colors, fontFamilies } from "../../../../utils/global/globalStyles";

const styles = StyleSheet.create({
    brand: {
        height: 28,
        width: 43.2, 
        marginRight: 9,
        borderRadius: 16, 
        backgroundColor: colors.mainColorB 
    },
    metric: {
        width: 28, 
        height: 28, 
        borderWidth: 2.5, 
        borderRadius: 50, 
        borderColor: "#2B9559",
        backgroundColor: "#fff", 
        ...globalStyles.centeredContent    
    },
    textMetric: {
        color: colors.mainColorT,
        fontFamily: fontFamilies.bold
    }
})

export default styles

