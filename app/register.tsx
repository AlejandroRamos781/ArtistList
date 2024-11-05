import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Button,
  TextInput,
  Alert,
  Image,
  StyleSheet,
  Text,
} from "react-native";

export default function Register() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [conf, SetConf] = useState<string>("");

  const router = useRouter();
  const validateEmail = (email: string): boolean => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const validatePassword = (password: string): boolean => {
    return /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[$@$!%?&])([A-Za-z\d$@$!%?&]|[^ ]){8,15}$/.test(
      password
    );
  };

  const validateSamePass = (pass: string, confPass: string): boolean => {
    if (pass == confPass) {
      return true;
    }
    return false;
  };

  const handleSubmit = () => {
    if (!validateEmail(email)) {
      Alert.alert("Error", "El email debe ser válido y contener '@'.");
    } else if (!validatePassword(password)) {
      Alert.alert(
        "Error",
        "La contraseña debe tener mínimo 8 caracteres, una mayúscula, un número y un carácter especial."
      );
    } else if (!validateSamePass(password, conf)) {
      Alert.alert(
        "Las contraseñas no coinciden",
        "Verifica que los datos ingresados sean correctos"
      );
    } else {
      Alert.alert("Los datos son válidos.");
    }
  };

  const learnmore = () => {
    router.push({
      pathname: "./index",
    });
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5fcff",
      }}
    >
      <Image
        source={{
          uri: "https://media.licdn.com/dms/image/v2/D4E0BAQErsDgSuIWN4w/company-logo_200_200/company-logo_200_200/0/1681406186808?e=2147483647&v=beta&t=HB9Sc1kW9HaXrVpKIgMhU4kdasYTiKFbuLybGSNK-Oc",
        }}
        style={styles.image}
      />
      <Text style={{ fontWeight: "bold" }}>Register</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={false}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmar contraseña"
        value={conf}
        onChangeText={SetConf}
        secureTextEntry={false}
      />

      <Button title="Validar" onPress={handleSubmit} />
      <Button title="Learn more" onPress={learnmore} />
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
