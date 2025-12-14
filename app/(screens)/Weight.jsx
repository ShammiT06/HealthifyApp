import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useLocalSearchParams } from 'expo-router'

export default function Weight() {
  const {name,age} = useLocalSearchParams()
  const weight = "80"
  return (
    <SafeAreaView>
      <View>

        
        <Text>Weight {age}</Text>
      </View>
    </SafeAreaView>

  )
}