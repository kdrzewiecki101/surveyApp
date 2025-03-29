import { Text, View, Image } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image source={require('../assets/images/react-logo.png')} />
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Text>123</Text>
    </View>
  );
}

