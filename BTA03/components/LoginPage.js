import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function LoginPage({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        fetch('http://192.168.1.29:3000/api/auth/login', {  // Thay URL bằng API của bạn
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }), // Gửi dữ liệu người dùng
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert("Đăng nhập thành công!");
                navigation.replace("Home");  // Chuyển đến trang chính
            } else {
                alert("Email hoặc mật khẩu không đúng. Vui lòng thử lại.");
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert("Có lỗi xảy ra. Vui lòng thử lại.");
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>

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

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Đăng nhập</Text>
            </TouchableOpacity>

            <View style={styles.linksContainer}>
                <View style={styles.leftContainer}>
                    <Text style={styles.text}>Bạn chưa có tài khoản?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                        <Text style={styles.linkText}>Đăng ký</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("OTPSend")}>
                    <Text style={styles.linkText}>Quên mật khẩu?</Text>
                </TouchableOpacity>
            </View>
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
        marginBottom: 20,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
    },
    linksContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        color: "#000", // Màu đen cho văn bản
    },
    linkText: {
        color: "#2196F3", // Màu xanh cho liên kết
        fontSize: 16,
        marginLeft: 5,
    },
});
