import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: "#fff" },
    header: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
    empty: { fontSize: 18, color: "#999" },
    itemRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: "#eee",
    },
    itemText: { fontSize: 16 },
    itemPrice: { fontSize: 16, color: "#444" },
    remove: { fontSize: 18, color: "red", paddingHorizontal: 10 },
    total: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "right",
    },
    clear: {
        marginTop: 10,
        fontSize: 16,
        color: "blue",
        textAlign: "right",
        textDecorationLine: "underline",
    },
    clearButton: {
        backgroundColor: "#f8f8f8",
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
        marginTop: 20,
    }
});

