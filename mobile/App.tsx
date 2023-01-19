import { Text, StatusBar } from "react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold
} from '@expo-google-fonts/inter'
import { Loading } from "./src/components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold
  });

  if (!fontsLoaded) {
    return (
      <Loading />
    )
  }
  return (
    <>
      <Text style={{ backgroundColor: "#09090a", flex: 1, alignItems: "center" }}> x</Text >
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

    </>
  )
};
