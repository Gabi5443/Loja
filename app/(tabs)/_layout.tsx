import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';

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
                },
                tabBarActiveTintColor: '#f04a4aff',
                tabBarInactiveTintColor: '#8e8e93',
            }}
        >
            <Tabs.Screen 
                name="index"
                options={{
                     title: "home",
                     tabBarIcon: ({ color, size }) => (
                    <Ionicons name="home-outline" size={size} color={color} />
                     )
                    }} 
                />
            <Tabs.Screen 
                name="index_carrinho"
                options={{ 
                    title: "carrinho", 
                    tabBarIcon: ({ color, size }) => (
                    <Feather name="shopping-cart" size={size} color={color} />
                    )
                     }} />
            <Tabs.Screen 
                name="index_perfil"
                options={{ 
                    title: "perfil",
                    tabBarIcon: ({ color, size }) => (
                    <Ionicons name="person-outline" size={size} color={color} />
                    )
                 }} />
        </Tabs >

    )
}