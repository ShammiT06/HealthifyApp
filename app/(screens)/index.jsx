import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function index() {
    const { name } = useLocalSearchParams()
    const age = "24"
    console.log(name)
    return (
        <SafeAreaView style={{flex:1}}>
            <View style={Styles.conatiner}>
                <Text>Hello {name}</Text>
         
            <TouchableOpacity onPress={()=>{
                router.push({
                    pathname:"/(screens)/Weight",
                    params:{
                        name : name,
                        age : age
                    }
                })
            }}>
                <Text>Age</Text>
            </TouchableOpacity>
               </View>
        </SafeAreaView>

    )
}


const Styles = StyleSheet.create({
    conatiner:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})