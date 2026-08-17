import { products } from '@/data/product';
import { useLocalSearchParams, router } from 'expo-router';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function ProductDetail() {
  const { id } = useLocalSearchParams();


  const product = products.find(
    (product) => product.id === id
  );

  if (!product) {
    return (
      <View>
        <Text>Produto não encontrado.</Text>
      </View>
    );
  };


  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/(tabs)')}
        >
          <Text style={styles.buttonText}><Ionicons name="chevron-back" size={24} color="#fff" /></Text>
        </TouchableOpacity>
      </View>
      <Image
        source={product.image}
        style={styles.productImage}
      />
      <Text style={styles.title}>{product.name}</Text>
      <View style={styles.line}>
        <Text style={{ fontWeight: 'bold' }}>R$ {product.price}</Text>
        <Text style={styles.addButtom}>Adicionar ao carrinho</Text>
      </View>
      <Text style={styles.description}>{product.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
    width: '15%',
    height: '5%',
  },
  button: {
    backgroundColor: "#f04a4aff",
    padding: 5,
    borderRadius: 8,
  },
  buttonText: {
    textAlign: 'center',
  },

  productImage: {
    width: 300,
    height: 300,
    borderRadius: 8,
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#c2c2c2'
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: '5%',
    textAlign: 'center'
  },

  line: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '3%',
    alignItems: 'center',
  },

  addButtom: {
    padding: 7,
    paddingHorizontal: 50,
    backgroundColor: "#f04a4aff",
    borderRadius: 10,
    color: '#fff',
    fontWeight: 'bold',
  },

  description: {
    margin: 10,
    borderTopWidth: 1,
    borderColor: '#c2c2c2',
    fontSize: 14,
    color: '#666',
  },
});



