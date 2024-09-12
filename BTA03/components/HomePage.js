import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Modal, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Import hình ảnh avatar
import profileImage from "../assets/anhcam.png";
import homeImage from "../assets/home.png";

function HomePage() {
    return (
        <View style={styles.container}>
            
            <Text style={styles.textHome}>Home_Page</Text>
        </View>
    );
}

function ProfilePage({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Do you want to log out?</Text>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={[styles.button, styles.buttonLogOut]}
                                onPress={() => {
                                    setModalVisible(!modalVisible);
                                    navigation.replace("Login");
                                }}
                            >
                                <Text style={styles.buttonText}>Log Out</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.buttonTextCancel}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            <Text style={styles.textHome}>Profile Page</Text>
            <TouchableOpacity
                style={styles.showModalButton}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.showModalText}>Show Modal</Text>
            </TouchableOpacity>
        </View>
    );
}

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name="Home" component={HomePage}
                options={{
                    tabBarIcon: () => (
                        <Image
                            source={homeImage}
                            style={styles.avatar}
                        />
                    ),
                }} />
            <Tab.Screen
                name="Profile"
                component={ProfilePage}
                options={{
                    tabBarIcon: () => (
                        <Image
                            source={profileImage}
                            style={styles.avatar}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    textHome: {
        fontSize: 40,
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 15,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
    },
    button: {
        padding: 10,
        borderRadius: 5,
        marginHorizontal: 10,
    },
    buttonLogOut: {
        backgroundColor: "#f44336", // Màu đỏ
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
    },
    buttonTextCancel: {
        color: "#f44336", // Màu đỏ cho nút Cancel
        fontSize: 16,
    },
    showModalButton: {
        marginTop: 20,
        padding: 10,
    },
    showModalText: {
        color: "#2196F3", // Màu xanh
        fontSize: 16,
    },
});
