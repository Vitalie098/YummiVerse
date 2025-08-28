import { StyleSheet } from "react-native";
import globalStyles, { colors, fontFamilies } from "../../../../utils/global/globalStyles";

const styles = StyleSheet.create({
    container: {
        width: 106,
    },
    flatListWrapper: {
        marginBottom: 48, 
        ...globalStyles.centerAlignedRow
    },
    title: {
        fontSize: 24,  
        marginBottom: 12,
        paddingHorizontal: 17,
        color: colors.mainColorT,
        fontFamily: fontFamilies.bold
    },
    containerCard: {
        height: 106,
        width: "100%",
        borderWidth: 3, 
        marginBottom: 5,
        borderRadius: 40, 
        borderColor: colors.mainColorB,
        ...globalStyles.centeredContent
    },
    containerImage: {
        width: 96,
        height: 96, 
        borderWidth: 2, 
        borderRadius: 40, 
        borderColor: "#fff",
        backgroundColor: colors.mainColorT, 
    },
    text: { 
        textAlign: "center",
        color: colors.mainColorT, 
        fontFamily: fontFamilies.bold
    },
    image: {
        width: "100%",
        height: "100%",
    },
    flatListContainerStyle: {
        gap: 6
    }
    
})

export default styles