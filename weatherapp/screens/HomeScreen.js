
import React from 'react';
import {View, StatusBar, Image, SafeAreaView, TextInput, Touchable, TouchableOpacity, Text} from 'react-native';
import { theme } from "../theme/index";
import { MagnifyingGlassIcon, MapPinIcon} from "react-native-heroicons/mini";
import { useState } from 'react';

export default function HomeScreen() {
    const [showSearch, toggleSearch] = useState(false)
    const [locations, setLocations] = useState([1,2,3])

    const handleLocation = (loc) => {
        console.log("location: " + loc)
    }

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

                    {
                        locations.length >0 && showSearch? (
                            <View className="absolute w-full bg-gray-300 top-16 rounded-3xl">
                                {
                                    locations.map((loc, index) => {
                                        // don't show border at last item
                                        let showBorder = index+1 != locations.length
                                        let borderClass = showBorder? "border-b-2 border-b-gray-400" : ""

                                        return (
                                            <TouchableOpacity
                                                onPress={() => handleLocation(loc)}
                                                key={index}
                                                className={"flex-row items-center border-0 p-3 px-4 mb-1" + borderClass}
                                            >
                                                <MapPinIcon size="20" color="gray" />
                                                <Text className="text-black text-lg ml-2">London, United Kingdom</Text>
                                            </TouchableOpacity>
                                        )
                                    })
                                }
                            </View>
                        ): null
                    }
                </View>

                {/* forecast section */}
                <View className={"mx-4 flex justify-around flex-1 mb-2"}>
                    {/*location*/}
                    <Text className={"text-white text-center text-2xl font-bold"}>
                        London,
                        <Text className={"text-lg font-semibold text-gray-300"}>
                            United Kingdom
                        </Text>

                    </Text>

                   {/*weather icon*/}
                    <View className={"flex-row justify-center"}>
                        <Image source={require("../assets/images/partlycloudy.png")}
                               className={"w-52 h-52"} />
                    </View>

                    {/*degree celcius*/}
                    <View className={"space-y-2"}>
                        <Text className={"text-center font-bold text-white text-6xl ml-5"}>
                            23&#176;
                        </Text>
                        <Text className={"text-center text-white text-xl tracking-widest"}>
                            Partly Cloudy
                        </Text>
                    </View>

                    {/*other stats*/}
                    <View className={"flex-row justify-between mx-4"}>
                        <View className={"flex-row space-x-2 items-center"}>
                            <Image source={require("../assets/icons/wind.png")}
                                   className={"h-6 w-6"} />
                            <Text className={"text-white font-semibold text-base"}>
                                22km
                            </Text>
                        </View>


                        <View className={"flex-row space-x-2 items-center"}>
                            <Image source={require("../assets/icons/drop.png")}
                                   className={"h-6 w-6"} />
                            <Text className={"text-white font-semibold text-base"}>
                                23%
                            </Text>
                        </View>

                        <View className={"flex-row space-x-2 items-center"}>
                            <Image source={require("../assets/images/sun.png")}
                                   className={"h-6 w-6"} />
                            <Text className={"text-white font-semibold text-base"}>
                                6:05 AM
                            </Text>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </View>

    );
}