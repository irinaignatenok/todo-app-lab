import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        backgroundColor: "#f4f4f5",

        padding: 10,
        flex: 1
    },
    errorContainer: {
        borderLeftWidth: 5,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#c00',
        borderLeftColor: '#c00',
        padding: 7,
        backgroundColor: '#ffffff'
    },
    errorMessage: {
        color: '#c00'
    },
    errorTitle: {
        color: '#c00',
        fontWeight: 'bold'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#8e3cd9',
        paddingHorizontal: 10,
        paddingVertical: 7,
        marginTop: 30,
        backgroundColor: '#ffffff'
    },
    switch: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: Platform.OS === 'ios' ? 10 : 0
    },
    switchText: {
        color: '#8e3cd9',
        fontWeight: 'bold',
        paddingTop: 10,
        marginRight: Platform.OS === 'ios' ? 10 : 0
    },
    btn: {
        color: '#fff',
        backgroundColor: '#8e3cd9'
    },
    loadingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loadingText: {
        color: '#444',
        fontSize: 21,
        marginTop: 10
    }
})

export default styles;