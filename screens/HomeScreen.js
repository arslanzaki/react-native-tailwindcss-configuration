import React, { useLayoutEffect } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView>
      <Text className="text-blue-700 font-bold text-3xl text-center mt-8">
        HomeScreen
      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
