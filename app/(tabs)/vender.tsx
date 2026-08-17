import { CameraView, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function VenderScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [cameraAberta, setCameraAberta] = useState(false);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          Precisamos da sua permissão para abrir a câmera e tirar foto do produto!
        </Text>
        <Button onPress={requestPermission} title="Conceder Permissão" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {cameraAberta ? (
        // se a câmera estiver aberta, exibe o preview da câmera
        <CameraView style={styles.camera}>
          <TouchableOpacity 
            style={styles.fecharButton} 
            onPress={() => setCameraAberta(false)}
          >
            <Text style={styles.textButton}>Fechar Câmera</Text>
          </TouchableOpacity>
        </CameraView>
      ) : (
        // tela inicial para clicar e abrir a câmera
        <View style={styles.content}>
          <Text style={styles.title}>Anuncie sua Roupa </Text>
          <Text style={styles.subtitle}>Tire uma foto bem bonita do seu desapego!</Text>
          
          <TouchableOpacity 
            style={styles.openButton} 
            onPress={() => setCameraAberta(true)}
          >
            <Text style={styles.openButtonText}>📷 Tirar Foto do Produto</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
    fontSize: 16,
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  openButton: {
    backgroundColor: '#f04a4a', 
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 10,
  },
  openButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  camera: {
    flex: 1,
  },
  fecharButton: {
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 15,
    borderRadius: 10,
  },
  textButton: {
    color: '#fff',
    fontWeight: 'bold',
  },
});