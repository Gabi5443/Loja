import { Image, StyleSheet, Text, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import Octicons from '@expo/vector-icons/Octicons';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Index() {
    return (
        <View style={styles.all}>
            <View style={styles.topmenu}>
                <AntDesign name="menu" size={24} color="black" />
                <Text style={{fontWeight: 'bold', fontSize: 20 }}>Home</Text>
                <Octicons name="bell" size={24} color="black" />
            </View>

            <View style={styles.searchcont}>
                <View style={styles.searchbar}>
                    <Feather name="search" size={17} color="#8e8e93" />
                    <Text style={styles.searchtext}> Pesquisar</Text>
                </View>
            <Ionicons name="options-outline" size={24} color="black"/>
            </View>
        </View>
         );
}
const styles = StyleSheet. create({
    all: {
        
    },

    topmenu: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        marginTop: 20,
    }, 

    searchcont: {
        paddingVertical: 25,
        paddingHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },

    searchbar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#eee8e8ff',
        width: '90%',
        height: 38,
        borderRadius: 10,
        paddingHorizontal: 12,
    },

    searchtext: {
        color: '#8e8e93',
        fontSize: 15,
    },
})