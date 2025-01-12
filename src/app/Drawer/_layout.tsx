//Global imports
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

//File imports
import { Colors, Sizes } from '../../utils';

//Component imports
import { CustomDrawer } from '../../components';

export default function DrawerLayout() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer
                drawerContent={(props) => <CustomDrawer {...props} />}

                screenOptions={{
                    headerShown: true,
                    drawerStyle: {
                        width: Sizes.FindSize(260),
                        backgroundColor: 'transparent',
                        opacity : 0.7
                    },
                    swipeEnabled : false,
                }}
            >
                <Drawer.Screen name="HomeStack" options={{ title: "Home Drawer" }} />
            </Drawer>
        </GestureHandlerRootView>
    );
}
