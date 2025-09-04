import { StyleSheet } from "react-native";
import { colors } from "../../../../utils/global/globalStyles";
import { absoluteMenyHeight } from "../../../../utils/global/globalValues";

const styles = StyleSheet.create({
    container: {
        top: 0,
        left: 0,
        right: 0, 
        zIndex: 9999,
        position: "absolute",
        paddingHorizontal: 16,
        justifyContent: "flex-end",
        height: absoluteMenyHeight, 
        backgroundColor: colors.mainColorB,
    }
})

export default styles