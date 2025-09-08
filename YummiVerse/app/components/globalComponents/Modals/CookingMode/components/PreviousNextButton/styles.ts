import { StyleSheet } from "react-native";
import globalStyles, { colors, fontFamilies } from "../../../../../../utils/global/globalStyles";

const styles = StyleSheet.create({
    container: {
        width: 40, 
        height: 40, 
        borderWidth: 1, 
        borderRadius: 16,  
        backgroundColor: "transparent",
        ...globalStyles.centeredContent
    }
})

export default styles