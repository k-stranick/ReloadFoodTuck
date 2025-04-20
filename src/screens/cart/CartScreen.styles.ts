import { StyleSheet } from 'react-native';
import { Color } from '../../config/constants/Colors';

export const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    header: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
    empty: { fontSize: 18, color: '#999' },
    total: {
        marginTop: 20,
        textAlign: 'right',
    },
    clear: {
        fontSize: 16,
    },
    clearButton: {
        backgroundColor: Color.BUTTON_COLOR2,
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 100,
    },
    checkoutButton: {
        backgroundColor: Color.BUTTON_COLOR2,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    cartRow: {
        flexDirection: "row",
        alignItems: "flex-start",
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    removeButton: {
        fontSize: 18,
        paddingHorizontal: 8,
        paddingTop: 4,
    },
    itemContent: {
        flex: 1,
        paddingRight: 8,
    },
    mods: {
        fontSize: 14,
        color: "#666",
        marginTop: 2,
    },
    priceColumn: {
        justifyContent: "flex-start",
        alignItems: "flex-end",
        minWidth: 70,
    },
    headerRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        backgroundColor: "#f9f9f9",
    },
    cartHeaderRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },

});
