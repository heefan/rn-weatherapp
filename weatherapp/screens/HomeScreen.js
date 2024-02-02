
import React from 'react';
import {View, StatusBar, Image } from 'react-native';

export default function HomeScreen() {
    return (
        <View style={{flex: 1, position: 'relative'}}>
            <StatusBar barStyle={"light-content"} />
            <Image
                blurRadius={70}
                source={require("../assets/images/bg.png")}
                style={{width: '100%', height: '100%', position: 'absolute'}} />
        </View>
    );
}