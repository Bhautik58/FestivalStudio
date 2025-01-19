//Global imports
import { useEffect, useState } from "react";
import { PermissionsAndroid, Platform } from "react-native";
import messaging from '@react-native-firebase/messaging';

const useFcm = () => {
    const [token, setToken] = useState('');

    useEffect(() => {
        checkPermission();
    }, [])

    const checkPermission = async () => {
        if (Platform.OS === 'android' && Platform.Version >= 33) {
            checkAndroidPermission();
        } else {
            const enabled = await messaging().hasPermission();
            if (enabled == 1) {
                getToken()
            } else {
                requestPermission();
            }
        }
    }

    const checkAndroidPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
                {
                    title: 'DUMPExpress',
                    message: 'DUMPExpress wants to send notification to your app',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                }
            )
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                getToken()
            } else {
            }
        } catch (err) {

        }
    }

    //function to request permission for push notifications
    const requestPermission = async () => {
        try {
            await messaging().requestPermission();
            getToken();
        } catch (error) {

        }
    }

    const getToken = async () => {
        try {
            let fcmToken = await messaging().getToken();
            if (fcmToken) {
                setToken(fcmToken)
            }
        } catch (error) {
            console.log(error, 'error')
        }
    }

    return { token }

}

export default useFcm;