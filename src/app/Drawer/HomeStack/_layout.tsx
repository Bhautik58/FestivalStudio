//Global imports
import { Stack } from 'expo-router';

export default function HomeStackLayout() {
    return (
        <Stack  screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home/index" />
            <Stack.Screen name="Calendar/index" />
            <Stack.Screen name="Search/index" />
            <Stack.Screen name="Festivals/[id]" />
        </Stack>
    );
}
