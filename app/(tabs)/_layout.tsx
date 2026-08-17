import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import { View } from 'react-native';

export default function RootLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#eee8e8ff',
                    borderTopWidth: 0.5,
                    height: 60,
                    paddingBottom: 8,
                    borderRadius: 10,
                },
                tabBarActiveTintColor: '#f04a4aff',
                tabBarInactiveTintColor: '#8e8e93',
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home-outline" size={size} color={color} />
                    )
                }}
            />

            <Tabs.Screen
                name="vender"
                options={{
                    title: 'Vender',
                    tabBarIcon: ({ size }) => (
                        <View style={{
                            backgroundColor: '#f04a4aff',
                            padding: 8,
                            borderRadius: 20, 
                            alignItems: 'center',
                            marginTop: -20, 
                        }}>
                            <Ionicons name="scan" size={size} color="#ffffff" />
                        </View>
                    ),
                }}
            />
            <Tabs.Screen
                name="index_carrinho"
                options={{
                    title: "Carrinho",
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="shopping-cart" size={size} color={color} />
                    )
                }} />

        </Tabs >

    )
}