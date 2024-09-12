import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from "react-native";

export default function ResetPasswordPage({ route, navigation }) {
    const { email } = route.params;
    const [newPassword, setNewPassword] = useState("");

    const handleResetPassword = () => {
        fetch('http://192.168.1.29:3000/api/auth/reset-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, newPassword }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                Alert.alert("Thông báo", "Mật khẩu đã được đặt lại thành công.");
                navigation.navigate("Login");
            } else {
                Alert.alert("Thông báo", data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            Alert.alert("Thông báo", "Có lỗi xảy ra. Vui lòng thử lại.");
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Đặt Lại Mật Khẩu</Text>
            <Text style={styles.label}>Mật khẩu mới</Text>
            <TextInput 
                style={styles.input} 
                value={newPassword} 
                onChangeText={setNewPassword} 
                secureTextEntry
            />
            <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
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
        marginBottom: 20,
        textAlign: 'center',
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
