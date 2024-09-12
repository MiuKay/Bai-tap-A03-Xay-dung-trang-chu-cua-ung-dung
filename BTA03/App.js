import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfilePage from "./components/ProfilePage";
import HomePage from "./components/HomePage";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";
import OTPSendPage from "./components/OTPSendPage";
import OTPVerifyPage from "./components/OTPVerifyPage";
import ResetPasswordPage from "./components/ResetPasswordPage";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Profile" component={ProfilePage} />
                <Stack.Screen name="Home" component={HomePage} />
                <Stack.Screen name="Register" component={RegisterPage} />
                <Stack.Screen name="Login" component={LoginPage} />
                <Stack.Screen name="OTPSend" component={OTPSendPage} />
                <Stack.Screen name="OTPVerify" component={OTPVerifyPage} />
                <Stack.Screen name="ResetPassword" component={ResetPasswordPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
