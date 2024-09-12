import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function RegisterPage({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleRegister = () => {
        if (!email || !password || !confirmPassword) {
            alert("Vui lòng điền đầy đủ thông tin.");
            return;
        }
    
        if (password !== confirmPassword) {
            alert("Mật khẩu không khớp.");
            return;
        }
    
        fetch('http://192.168.1.29:3000/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.success) {
                alert("Đăng ký thành công!");
                navigation.replace("Login");
            } else {
                alert("Đăng ký thất bại. Vui lòng thử lại.");
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert("Có lỗi xảy ra. Vui lòng thử lại.");
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register</Text>

            <Text style={styles.label}>Email</Text>
            <TextInput 
                style={styles.input} 
                value={email} 
                onChangeText={setEmail} 
                keyboardType="email-address"
            />

            <Text style={styles.label}>Mật khẩu</Text>
            <TextInput 
                style={styles.input} 
                value={password} 
                onChangeText={setPassword} 
                secureTextEntry
            />

            <Text style={styles.label}>Xác nhận mật khẩu</Text>
            <TextInput 
                style={styles.input} 
                value={confirmPassword} 
                onChangeText={setConfirmPassword} 
                secureTextEntry
            />

            <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
                <Text style={styles.registerButtonText}>Đăng ký</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("Login")}>
                <Text style={styles.backButtonText}>Quay về</Text>
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
    registerButton: {
        marginTop: 20,
        backgroundColor: "#2196F3",
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    registerButtonText: {
        fontSize: 16,
        color: "#fff",
    },
    backButton: {
        marginTop: 20,
        alignItems: 'center',
    },
    backButtonText: {
        fontSize: 16,
        color: "#2196F3",
    },
});
