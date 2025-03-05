import { View } from "react-native";
import { StyleSheet , Text } from "react-native";

export default function Item () {
    return(
        <View style ={styles.container}>
            <Text>item page</Text>
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