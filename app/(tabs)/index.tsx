import { products } from '@/data/product';
import { router } from 'expo-router';
import { Image, StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import Octicons from '@expo/vector-icons/Octicons';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Index() {
    return (
        <ScrollView>
            <View style={styles.all}>
                <View style={styles.topmenu}>
                    <AntDesign name="menu" size={24} color="black" />
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Home</Text>
                    <Octicons name="bell" size={24} color="black" />
                </View>

                <View style={styles.searchcont}>
                    <View style={styles.searchbar}>
                        <Feather name="search" size={17} color="#8e8e93" />
                        <Text style={styles.searchtext}> Pesquisar</Text>
                    </View>
                    <View style={styles.filterbottom}>
                        <Ionicons name="options-outline" size={24} color="black" />
                    </View>
                </View>

                <ScrollView>
                    {products.map((product) => (
                        <Pressable
                            key={product.id}
                            onPress={() => router.push(`/products/${product.id}`)}
                        >
                            <View style={styles.contProduct}>
                                <Image
                                    source={product.image}
                                    style={styles.productImage}
                                />
                                
                                    <Text style={{fontWeight: 'bold'}}>{product.name}</Text>
                                    <Text style={styles.buyButtom}>Comprar</Text>
                                
                            </View>
                        </Pressable>
                    ))}
                </ScrollView>
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
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
        flexDirection: 'row',
        gap: '5%',
    },

    searchbar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#eee8e8ff',
        width: '85%',
        height: 38,
        borderRadius: 10,
        paddingHorizontal: 12,
    },

    filterbottom: {
        backgroundColor: "#f04a4aff",
        padding: 7,
        borderRadius: 10,
    },

    searchtext: {
        color: '#8e8e93',
        fontSize: 15,
    },

    productImage: {
        width: 150,
        height: 150,
        borderRadius: 8,
        marginLeft: 10,
        marginBlock: 10,
        borderWidth: 2,
        borderColor: '#c2c2c2'
    },

    contProduct: {
        flexDirection: 'row',
        gap: 7,
        alignItems: 'center',
        borderTopWidth: 1,
        borderColor: '#c2c2c2'
    },

    buyButtom: {
        padding: 7,
        backgroundColor: "#f04a4aff",
        borderRadius: 10,
        marginRight: 5
    },

    
})