import { StyleSheet } from "react-native";
import globalStyles, { colors, fontFamilies } from "../../../../utils/global/globalStyles";

const styles = StyleSheet.create({
    container: {
        //top: -14, 
        paddingTop: 47, 
        paddingBottom: 32,
        paddingHorizontal: 16, 
        backgroundColor: "rgba(236, 231, 227, .5)"  
    },
    headerWrapper: {
        marginBottom: 25,
        ...globalStyles.horizontalSpaceBetween
    },
    title: {
        fontSize: 28, 
        color: colors.mainColorT, 
        fontFamily: fontFamilies.bold
    },
    steps: {
        fontSize: 18, 
        color: colors.mainColorT,
        fontFamily: fontFamilies.normal
    },
    stepsWrapper: {
        gap: 16, 
        marginBottom: 16
    },
    advicesWrapper: {
        gap: 16
    }
})

export default styles