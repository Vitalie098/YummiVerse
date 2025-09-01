import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        gap: 21, 
        width: "100%",
        position: "absolute", 
        paddingHorizontal: 16
    },
    title: {
        fontSize: 40, 
        color: "#fff",
        lineHeight: 44, 
        fontWeight: "700" 
    },
    buttonsWrapper: {
        gap: 11,
        flexDirection: "row", 
        alignItems: "center", 
    },
    seeButton: {
        flex: 1, 
        height: 48, 
        borderRadius: 16,
        alignItems: "center",  
        backgroundColor: "#fff",
        justifyContent: "center", 
    },
    buttonText: {
        fontSize: 16,
        color: "#06231C", 
        fontWeight: "700", 
    },
    addButton: {
        width: 48, 
        height: 48, 
        borderWidth: 2, 
        borderRadius: 16, 
        borderColor: "#fff",
        alignItems: "center", 
        justifyContent: "center", 
    }
})

export default styles