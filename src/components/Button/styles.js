import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#58CC82",
        height: 58,
        alignSelf: 'stretch', 
        justifyContent: 'center',
        alignItems: "center",
        //border
        borderRadius: 5,
        borderBottomWidth: 5,
        borderColor: '#57A600'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        borderColor: 'white',
        borderBottomWidth: 1.5
    },
    disabledContainer: {
        backgroundColor: 'lightgrey',
        borderColor: 'grey'
    }

  });

  export default styles