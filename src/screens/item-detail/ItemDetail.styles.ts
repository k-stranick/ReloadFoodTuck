import { StyleSheet } from "react-native";
import { Color } from "../../config/constants/Colors";

export const styles = StyleSheet.create({
    card: {
        marginHorizontal: 16,
    },
    toppingSection: {
        marginTop: 12,
    },
    toppingLabel: {
        marginBottom: 6,
    },
    toppingItem: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 6,
    },
    toppingIndicator: {
        width: 20,
        height: 20,
        borderWidth: 3,
        borderRadius: 6,
        borderColor: Color.BOX_OUTLINE,
        marginRight: 8,
    },
    actionRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 16,
        // push the Add button to the right
        justifyContent: "space-between",
    },

    button: {
        backgroundColor: Color.BUTTON_COLOR2,
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 6,
    },
    buttonPressed: {
        backgroundColor: Color.BUTTON_COLOR2_PRESSED,
    },
    buttonText: {
        color: Color.TEXT,
        textAlign: "center",
        fontWeight: "bold",
    },
    quantityRow: {
        flexDirection: "row",
        alignItems: "center",
    },
    qtyButton: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: Color.BUTTON_COLOR2,
        alignItems: "center",
        justifyContent: "center",
    },
    qtyButtonPressed: {
        backgroundColor: Color.BUTTON_COLOR2_PRESSED,
    },
    qtyButtonText: {
        fontSize: 18,
        color: Color.TEXT,
        lineHeight: 20,
    },
    qtyDisplay: {
        minWidth: 32,
        marginHorizontal: 8,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 4,
        paddingHorizontal: 8,
        backgroundColor: Color.LIGHT_GOLD,   // e.g. a soft grey/goldish
        borderRadius: 4,
    },
    qtyDisplayText: {
        fontSize: 16,
        fontWeight: "bold",
        color: Color.TEXT,
    },

    centeredCard: {
        alignSelf: "center",
        maxWidth: 700,
    },
    scrollViewContent: {
        alignItems: "center",
        paddingVertical: 16,
    },
    safeArea: {
        flex: 1,
    },
    themedView: {
        flex: 1,
    },
});