import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    title: {
        fontSize: 18, 
        fontWeight: 'bold', 
        alignSelf: 'stretch'
    }, 
    sentenceContainer: {
        borderWidth: 1, 
        borderWidth: 'lightgrey',
        borderRadius: 5,
        padding: 10
    }, 
    row: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        alignItems: 'center',
        margin: 10,
        marginBottom: 0
    },
    sentence: {
        fontSize: 16
    },
    textInput: {
        alignSelf: 'stretch',
        flex: 1,
        backgroundColor: '#ebebeb',
        borderWidth: 1,
        borderColor: 'lightGrey', 
        borderRadius: 10,
        padding: 10,
        fontSize: 16
    }, 
    mascot: {
        width: '30%',
        aspectRatio: 3/4,
        marginRight: 10,

    }

})

export default styles;