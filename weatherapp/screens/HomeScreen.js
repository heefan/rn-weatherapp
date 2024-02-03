
import React from 'react';
import {View, StatusBar, Image, SafeAreaView, TextInput, Touchable, TouchableOpacity} from 'react-native';
import { theme } from "../theme/index";

export default function HomeScreen() {
    return (
        <View style={{flex: 1, position: 'relative'}}>
            <StatusBar style="light" />
            <Image
                blurRadius={70}
                source={require("../assets/images/bg.png")}
                className="absolute h-full w-full" />

            <SafeAreaView className={"flex flex-1 bg-blue-950"}>
                {/* Make a search bar */}
                <View className={"mx-4 relative z-50 bg-red-700"}>
                    <View
                        className={"flex-row justify-end items-center rounded-full"}
                        style={{backgroundColor: theme.bgWhite(1)}}>

                        <TextInput
                            className={"text-white text-base pb-1 flex-1 h-10 pl-6"}
                            placeholder="Search City"
                            placeholderTextColor={"lightgray"}
                        />

                        <TouchableOpacity></TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </View>

    );
}