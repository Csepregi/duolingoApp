import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    optionContainer: {
        borderWidth: 2,
        borderBottomWidth: 4,
        borderColor: "Lightgrey",
        borderRadius: 10, 
        width: '48%', 
        height: '48%',
        alignItems: 'center',
        padding: 10
    },
    optionImage: {
        width: '100%',
        flex: 1,
        fontWeight: 'bold'
    },
    optionText: {
        color: 'black'
    },
    selectedContainer: {
        backgroundColor:'#DDFFE',
        borderColor: '#81D5FE'
    },
    selectedText: {
        color: '#40BEF7',
        fontWeight: 'bold'
    }
  });

  export default styles