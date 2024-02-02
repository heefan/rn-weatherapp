
import React from 'react';
import {View, StatusBar, Image, SafeAreaView, TextInput} from 'react-native';
import { theme } from "../theme/index";

export default function HomeScreen() {
    return (
        <View style={{flex: 1, position: 'relative'}}>
            <StatusBar barStyle={"light-content"} />
            <Image
                blurRadius={70}
                source={require("../assets/images/bg.png")}
                style={{width: '100%', height: '100%', position: 'absolute'}} />

            <SafeAreaView className={"flex flex-1"} style={{backgroundColor: "red"}}>
                {/* search area */}
                <View style={{backgroundColor: "blue"}}>
                    <View style={{backgroundColor: "green"}}>
                        <TextInput placeholder={'Search City'} placeholderTextColor={'lightgrey'} />
                    </View>
                </View>
            </SafeAreaView>
        </View>

    );
}