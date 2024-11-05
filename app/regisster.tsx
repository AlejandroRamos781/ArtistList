import React, { useState } from "react";
import { View, TextInput, Button, Alert, Image, Text } from "react-native";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  interface ValidationResult {
    (input: string): boolean;
  }

  const validateEmail: ValidationResult = (email) => {
    // Valida que el email tenga un formato básico correcto
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  interface ValidatePassword {
    (password: string): boolean;
  }

  const validatePassword: ValidatePassword = (password) => {
    // Valida que la contraseña cumpla con los requisitos
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleLogin = () => {
    if (!validateEmail(email)) {
      Alert.alert("Error", "introduce un email válido.");
      return;
    }

    if (!validatePassword(password)) {
      Alert.alert(
        "Error",
        "La contraseña debe tener al menos 8 caracteres, mayúscula, número y carácter especial."
      );
      return;
    }

    Alert.alert("Éxito", "Login correcto");
  };

  return (
    <View>
      {/* Icono de imagen */}
      <Image
        source={{ uri: "icon.png" }}
        testID="icon-image"
        style={{ width: 100, height: 100 }}
      />

      {/* Input de Email */}
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      {/* Input de Password */}
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Botones */}
      <Button title="Iniciar sesión" onPress={handleLogin} />
      <Button title="Registrarse" onPress={() => Alert.alert("Registro")} />
    </View>
  );
};

export default Index;
