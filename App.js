import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [mensagem, setMensagem] = useState('');

  function handleSubmit(){
    const alt = parseFloat(altura) / 100;
    const imc = parseFloat(peso) / (alt * alt);

    if (imc < 18.6) {
      setMensagem("Você está abaixo do peso! Seu IMC foi:" + imc.toFixed(2));
    }else if (imc >= 18.6 && imc < 24.9) {
      setMensagem("Você está no peso ideal! Seu IMC foi:" + imc.toFixed(2));
    }else if (imc >= 24.9 && imc < 34.9) {
      setMensagem(
        "Você está ligeiramente acima do peso! Seu IMC foi:" + imc.toFixed(2)
      );
    }else if (imc > 34.9) {
      setMensagem(
        "Cuidado, você está acima do peso! Seu IMC foi:" + imc.toFixed(2)
      );
    }

  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de IMC</Text>
      <Text style={styles.text}>Vamos calcular o seu IMC?</Text>

      <TextInput
        style={[styles.input, { textAlign: 'center' }]}
        value={peso}
        onChangeText={ (peso) => setPeso(peso) }
        placeholder='Peso em (kg) Ex: 82,7'
        placeholderTextColor="#747477"
        keyboardType='numeric'
      />

      <TextInput
        style={[styles.input, { textAlign: 'center' }]}
        value={altura}
        onChangeText={ (altura) => setAltura(altura) }
        placeholder='Altura em (cm) Ex: 173'
        placeholderTextColor="#747477"
        keyboardType='numeric'
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

      <Text style={[styles.result, { textAlign: 'center' }]}>{mensagem}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#F3F9FF',
    justifyContent:'center'
  },
  title:{
    textAlign:'center',
    marginTop:40,
    fontSize:35,
    fontWeight:'bold',
    color:'#100f0f'
  },
  text:{
    textAlign:'center',
    color:'#100f0f',
    marginTop:20,
    fontSize:17
  },
  input:{
   backgroundColor:'#100f0f',
   borderRadius:10,
   margin:15,
   padding:10,
   fontSize:20,
   color:'#F3F9FF',
  },
  button:{
    justifyContent:'center',
    alignItems:'center',
    margin:15,
    backgroundColor:'#e06e3b',
    padding:10,
    borderRadius:10,
  },
  buttonText:{
    color:'#F3F9FF',
    fontSize:25
  },
  result:{
    color:'#100f0f',
    fontSize:18,
    fontWeight:'bold',
    margin:28,
  }
});