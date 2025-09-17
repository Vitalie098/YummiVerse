import { StyleSheet } from "react-native";
import globalStyles, { colors, fontFamilies } from '../../../../utils/global/globalStyles';

const styles = StyleSheet.create({
    container: {
        marginBottom: 17,
        ...globalStyles.centerAlignedRow
    },
    filterIconWrapper: {
        width: 40, 
        height: 40, 
        borderWidth: 2, 
        marginLeft: 17,
        marginRight: 24,
        borderRadius: 16, 
        borderColor: colors.mainColorT, 
        ...globalStyles.centeredContent, 
    },
    filterOptionWrapper: {
        height: 38, 
        borderWidth: 2, 
        borderRadius: 16,
        paddingHorizontal: 15, 
        borderColor: colors.mainColorT,
        ...globalStyles.centeredContent,
    },
    text: {
        fontSize: 12,
        color: colors.mainColorT,
        fontFamily: fontFamilies.bold
    },
    selected: {
        backgroundColor: colors.mainColorT
    },
    selectedText: {
        color: "#fff"
    }
})

export default styles