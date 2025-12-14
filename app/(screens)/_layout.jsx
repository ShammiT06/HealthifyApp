import { Stack } from "expo-router";

export default function RootLayout() {
    return <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="Age" />
        <Stack.Screen name="Weight" />
        <Stack.Screen name="Height" />
        <Stack.Screen name="Overalldata" />
    </Stack>;
}
