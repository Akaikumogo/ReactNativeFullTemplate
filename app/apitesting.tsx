import {View, Text, TextInput, ScrollView} from "react-native";
import React, {useEffect, useState} from "react";
import {useGetVideos} from "@/Api/Contents/VideoContents";
import Button from "@/components/Button";
import {Image} from "expo-image";

const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";
interface Item {
    uuid: string;
    title: string;
    description: string;
    keywords: string;
    snippet: string;
    url: string;
    image_url: string;
    language: string;
    published_at: string;
    source: string;
    categories: string[];
    relevance_score: number;
}

export default function apitesting() {
    const [text, setText] = useState<string>("News");
    const {data: NewsArray, isLoading, isError} = useGetVideos(text, 1);
    const [inputText, setInputText] = useState<string>("");
    const buttonFunction = () => {
        setText(inputText);
    };

    return (
        <View className="flex-1 h-full  py-[50px]  items-center justify-strat bg-black">
            <View className=" flex  flex-row px-[10px] justify-center items-center  h-[50px] max-w-[400px]  w-full ">
                <TextInput
                    className="bg-white  py-[15px]  w-[70%] px-[10px] rounded-lg border-slate-400"
                    onChangeText={(value) => setInputText(value)}
                    value={inputText}
                />
                <Button
                    text={"search"}
                    width={""}
                    additionalStyle={" w-[25%] "}
                    pressFunction={() => buttonFunction()}
                />
            </View>
            <ScrollView className="w-full mt-4">
                {NewsArray
                    ? Array(20)
                      .fill(NewsArray?.data)
                      .flat()
                      ?.map((item: Item, index: number) => (
                          <View key={index} className="bg-white p-4 mb-2 rounded-lg mx-2">
                              <Image
                                  className="w-full h-[200px] rounded-md"
                                  source={item?.image_url}
                                  placeholder={{blurhash}}
                                  contentFit="cover"
                                  transition={500}
                              />
                              <Text>{item?.title}</Text>
                          </View>
                      ))
                    : null}
                {isLoading ? (
                    Array(20)
                    .fill([1])
                    .flat()
                    ?.map((item: any, index: number) => (
                        <View key={index} className="bg-white p-4 mb-2 rounded-lg mx-2">
                            <View className="w-full bg-black h-[200px] rounded-md" />
                            <View className="w-full rounded-md bg-black mt-[5px] " />
                        </View>
                    ))
                ) : isError ? (
                    <Text className="text-white text-[24px]  mx-auto">Error...</Text>
                ) : !NewsArray || NewsArray?.data.length === 0 ? (
                    <Text className="text-white text-[24px]  mx-auto">No data</Text>
                ) : null}
            </ScrollView>
        </View>
    );
}
