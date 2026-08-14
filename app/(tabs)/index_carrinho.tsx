import { Image, StyleSheet, Text, View } from "react-native";
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Index() {
    return (
        <View style={styles.all}>
            <View style={styles.topicon}>
                <AntDesign name="menu" size={24} color="black" />
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Carrinho</Text>
                <Feather name="more-horizontal" size={30} color="black"/>
            </View>

            <View style={styles.resto}>
                <Text style={{textAlign: 'center', marginTop: '50%'}}>Não há produtos no carrinho </Text>
            </View>

            <View style={styles.end}>
                <Text style={{fontWeight: 'bold'}}>R$ 0,00</Text>
                <Text style={styles.finalizarButtom}>Finalizar</Text>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    all: {

    },
    topicon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        marginTop: 20,
    },

    resto: {
        borderTopWidth: 1,
        marginVertical: 15,
    },

    end: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: '5%',
        alignItems: 'center',
        marginTop: "110%",
    },

    finalizarButtom: {
        padding: 7,
        paddingHorizontal: 50,
        backgroundColor: "#f04a4aff",
        borderRadius: 10,
    },
})