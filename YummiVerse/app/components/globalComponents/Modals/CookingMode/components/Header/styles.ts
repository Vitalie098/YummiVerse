import { StyleSheet } from "react-native";
import globalStyles, { colors, fontFamilies } from "../../../../../../utils/global/globalStyles";

const styles = StyleSheet.create({
    container: {
        marginBottom: 18,
        ...globalStyles.horizontalSpaceBetween
    },
    topWrapper: {
        gap: 8, 
        flex: 1,
        ...globalStyles.centerAlignedRow
    },
    recipeName: {
        width: "65%",
        fontSize: 16, 
        color: "#fff", 
        lineHeight: 22, 
        fontFamily: fontFamilies.bold  
    },
    middleWrapper: {
        gap: 4, 
        marginBottom: 16,
        ...globalStyles.centerAlignedRow    
    },
    stepLine: {
        flex: 1, 
        height: 3, 
        borderRadius: 70,
        backgroundColor: "rgba(217, 217, 217, .5)"
    },
    allStepsButtonWrapper: {
        gap: 9,
        width: 104, 
        height: 30, 
        borderWidth: 1, 
        borderRadius: 8,  
        ...globalStyles.horizontalCenter
    },
    allStepsButtonText: {
        lineHeight: 20,
        fontFamily: fontFamilies.bold
    }
})

export default styles