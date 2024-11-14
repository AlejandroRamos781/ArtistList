import React, { useState } from "react";
import {
  View,
  Button,
  TextInput,
  Alert,
  Image,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";


export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
    const router = useRouter();
  const validateEmail = (email: string): boolean => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const validatePassword = (password: string): boolean => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/.test(password);
  };

  const handleSubmit = () => {
    if (!validateEmail(email)) {
      Alert.alert("Error", "El email debe ser válido y contener '@'.");
    } else if (!validatePassword(password)) {
      Alert.alert(
        "Error",
        "La contraseña debe tener mínimo 8 caracteres, una mayúscula, un número y un carácter especial."
      );
    } else {
      Alert.alert("Los datos son válidos.");
    }
  };

  const learnmore = () => {
    router.push({
        pathname:"./register"
    })
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5fcff' }}>
      <Image
        source={{
          uri: "https://media.licdn.com/dms/image/v2/D4E0BAQErsDgSuIWN4w/company-logo_200_200/company-logo_200_200/0/1681406186808?e=2147483647&v=beta&t=HB9Sc1kW9HaXrVpKIgMhU4kdasYTiKFbuLybGSNK-Oc",
        }}
        style={styles.image}
      />
     
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}

      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />

  
      
      <Button title="Validar" onPress={handleSubmit} />
      <Button title="Learn more" onPress={learnmore}></Button>
    
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: "80%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 15,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
});