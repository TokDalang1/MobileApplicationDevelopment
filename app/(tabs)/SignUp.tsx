import React from "react";
import { useFonts } from "expo-font";
import SignUp from "@/app/src/pages/SignUp";

const App = () => {
  const usefonts = useFonts({
    "Poppins-Regular": require("@/assets/fonts/Poppins-Regular.ttf"), // kalau kamu pakai juga
  });

  return <SignUp />;
};

export default App;
