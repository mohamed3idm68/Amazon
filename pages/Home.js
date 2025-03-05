import { useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Icon from 'react-native-vector-icons/FontAwesome';



export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://omardiaa.com/YouTube/ReactNative/amazonProducts.php", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        dispatch({ type: "add/update", payload: res });
      });
  }, []);


  const ads = useSelector(state => {
    return state.adsReducers[0]
  })

  console.log("ads" , ads)

  return (
    <View style = {styles.container}>
      <Text>Results</Text> 
      <View style={{flexDirection:"row" , margin:20 , backgroundColor:"blue" , padding:15 , width:300}}>
        <Icon name="map-marker" style={{fontSize:18}} />
         <Text style={{marginLeft:5}}>Deliver to cairo - omar</Text>
      </View>
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
