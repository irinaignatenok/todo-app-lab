import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        backgroundColor: '#ffffff',
        margin: 7,
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#8e3cd9'
    },
    title: {
        color: '#8e3cd9',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center'
    },
    description: {
        color: '#9c9c9c'
    },
    descriptionBlock: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})


export default styles;