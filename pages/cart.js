import { View , StyleSheet , Text } from "react-native";

export default function cart () {
    return(
        <View style={styles.container}>
            <Text>cart page</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  