
import React from 'react';
import {View, StatusBar, Image, SafeAreaView, TextInput, Touchable, TouchableOpacity} from 'react-native';
import { theme } from "../theme/index";
import { MagnifyingGlassIcon } from "react-native-heroicons/mini";
import { useState } from 'react';

export default function HomeScreen() {
    const [showSearch, toggleSearch] = useState(false)

    return (
        <View style={{flex: 1, position: 'relative'}}>
            <StatusBar style="light" />
            <Image
                blurRadius={70}
                source={require("../assets/images/bg.png")}
                className="absolute h-full w-full" />

            <SafeAreaView className={"flex flex-1"}>
                {/* Make a search bar */}
                <View className={"mx-4 relative z-50"}>
                    <View
                        className={"flex-row justify-end items-center rounded-full"}
                        style={{backgroundColor: showSearch ? theme.bgWhite(0.2) : "transparent"}}>
                        {
                            showSearch? (
                                <TextInput
                                    className={"text-white text-base pb-1 flex-1 h-10 pl-6"}
                                    placeholder="Search City"
                                    placeholderTextColor={"lightgray"}
                                />
                            ): null
                        }

                        <TouchableOpacity
                            onPress={() => toggleSearch(!showSearch)}
                            style={{backgroundColor: theme.bgWhite(0.3)}}
                            className={"rounded-full p-3 m-1"}>

                            <MagnifyingGlassIcon size="25" color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </View>

    );
}