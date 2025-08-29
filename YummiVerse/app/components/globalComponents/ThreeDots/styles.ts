import { StyleSheet } from "react-native";
import { colors } from "../../../utils/global/globalStyles";

const styles = StyleSheet.create({
    circle: {
        width: 4,
        height: 4, 
        marginRight: 3,
        borderRadius: 2,
        backgroundColor: "fff"
    },
    darkMode: {
        backgroundColor: colors.mainColorB
    }
})

export default styles