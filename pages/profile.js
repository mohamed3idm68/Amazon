import { View } from "react-native";
import { StyleSheet , Text } from "react-native";

export default function profile () {
    return(
        <View style = {styles.container}>
            <Text>profile page</Text>
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