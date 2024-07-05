import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function index() {
  return (
    <View className="flex-1 py-[10px]  items-center justify-center bg-black">
      <View className=" h-[50px]">
        <Text className="text-white">Assalomu Alaykum</Text>
        <Link className="text-white" href={"/apitesting"}>
          ApiTEsting
        </Link>
      </View>
    </View>
  );
}
