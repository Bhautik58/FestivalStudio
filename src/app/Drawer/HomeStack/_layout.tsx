//Global imports
import { Stack } from 'expo-router';

export default function HomeStackLayout() {
    return (
        <Stack  screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" />
            <Stack.Screen name="Calendar" />
            <Stack.Screen name="Search" />
            <Stack.Screen name="Festivals/[id]" />
        </Stack>
    );
}
