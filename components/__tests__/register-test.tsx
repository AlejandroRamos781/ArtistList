
import React from 'react';
import { render, fireEvent } from "@testing-library/react-native";
import Login from "../../app/login"; 
import * as expoRouter from "expo-router";
import { Alert } from 'react-native';

// Mocks
jest.spyOn(expoRouter, "useRouter").mockReturnValue({
  push: jest.fn(),
} as any);

describe("Register Component", () => {
  let alertSpy: jest.SpyInstance;

  beforeEach(() => {
    alertSpy = jest.spyOn(Alert, "alert");
  });

  afterEach(() => {
    alertSpy.mockRestore();
  });

  it("should show error when email is invalid", () => {
    const { getByPlaceholderText, getByText } = render(<Login />);

    fireEvent.changeText(getByPlaceholderText("Email"), "invalidemail");
    fireEvent.changeText(getByPlaceholderText("Contraseña"), "Password1!");
    fireEvent.press(getByText("Validar"));
    expect(alertSpy).toHaveBeenCalledWith("Error", "El email debe ser válido y contener '@'.");
  });

  it("should show error when password is invalid", () => {
    const { getByPlaceholderText, getByText } = render(<Login />);

    fireEvent.changeText(getByPlaceholderText("Email"), "test@example.com");
    fireEvent.changeText(getByPlaceholderText("Contraseña"), "123");
    fireEvent.press(getByText("Validar"));
    expect(alertSpy).toHaveBeenCalledWith(
      "Error",
      "La contraseña debe tener mínimo 8 caracteres, una mayúscula, un número y un carácter especial."
    );
  });

  it("should show success message when email and password are valid", () => {
    const { getByPlaceholderText, getByText } = render(<Login />);

    fireEvent.changeText(getByPlaceholderText("Email"), "test@example.com");
    fireEvent.changeText(getByPlaceholderText("Contraseña"), "Password1!");
    fireEvent.press(getByText("Validar"));
    expect(alertSpy).toHaveBeenCalledWith("Los datos son válidos.");
  });

  it("should navigate to './register' when 'Learn more' button is pressed", () => {
    const { getByText } = render(<Login />);
    const { push } = expoRouter.useRouter();
    fireEvent.press(getByText("Learn more"));
    expect(push).toHaveBeenCalledWith({ pathname: "./register" });
  });
});
