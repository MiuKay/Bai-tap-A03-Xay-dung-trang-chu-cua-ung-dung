import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from "react-native";

export default function OTPVerifyPage({ route, navigation }) {
    const { email } = route.params;
    const [otpCode, setOtpCode] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const handleVerifyOTP = () => {
        fetch('http://192.168.1.29:3000/api/auth/otp/verify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, otpCode, newPassword }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                Alert.alert("Thông báo", "Mật khẩu đã được đặt lại thành công!");
                navigation.replace("Login");
            } else {
                Alert.alert("Thông báo", "Có lỗi xảy ra. Vui lòng thử lại.");
            }
        })
        .catch(error => {
            console.error('Error:', error);
            Alert.alert("Thông báo", "Có lỗi xảy ra. Vui lòng thử lại.");
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Xác Thực OTP</Text>
            <Text style={styles.label}>Email</Text>
            <TextInput 
                style={styles.input} 
                value={email} 
                editable={false}
            />
            <Text style={styles.label}>Mã OTP</Text>
            <TextInput 
                style={styles.input} 
                value={otpCode} 
                onChangeText={setOtpCode} 
                keyboardType="numeric"
            />
            <Text style={styles.label}>Mật khẩu mới</Text>
            <TextInput 
                style={styles.input} 
                value={newPassword} 
                onChangeText={setNewPassword} 
                secureTextEntry
            />
            <TouchableOpacity style={styles.button} onPress={handleVerifyOTP}>
                <Text style={styles.buttonText}>Đặt lại mật khẩu</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    label: {
        fontSize: 18,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        marginBottom: 15,
        borderRadius: 5,
    },
    button: {
        backgroundColor: "#2196F3",
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
    },
});
