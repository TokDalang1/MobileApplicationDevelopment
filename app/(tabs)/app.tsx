import React from "react";
import { useFonts } from "expo-font";
import SignIn from "@/app/src/pages/SignIn";

const App = () => {
  const usefonts = useFonts({
    "Poppins-Regular": require("@/assets/fonts/Poppins-Regular.ttf"), // kalau kamu pakai juga
  });

  return <SignIn />;
};

export default App;
