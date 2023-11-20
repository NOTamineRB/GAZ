import React, { useState } from "react";
import {
  Image,
  TextInput,
  TouchableOpacity,
  View,
  useColorScheme,
} from "react-native";
import { INTER_REGULAR } from "../theme/typography";
import {
  BLACK,
  BLUE,
  DARK_INPUT,
  GREY,
  LIGHT_GREY,
  PURPLE,
  RED,
  BLACK_RED,
  WHITE,
} from "../theme/colors";
import { CustomText } from "./CustomText";

interface InputProps {
  label: string;
  placeholder: string;
  ispassword?: boolean;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
  onChangeText?: (text: string) => void;
  value: string;
  error: string;
  placeholderTextColor: string;
}

const Input = ({
  label,
  placeholder,
  ispassword = false,
  keyboardType = "default",
  onChangeText,
  value,
  error,
  placeholderTextColor,
}: InputProps) => {
  const colorScheme = useColorScheme();
  const [icon, setIcon] = React.useState(false);
  return (
    <View
      style={{
        width: "100%",
        marginVertical: 8,
      }}
    >
      <CustomText
        style={{
          fontFamily: INTER_REGULAR,
          fontSize: 14,
          color: error ? RED : BLACK,
          marginBottom: 8,
        }}
      >
        {error ? error : label}
      </CustomText>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          borderWidth: 1,
          borderColor: error !== "" ? RED : value ? BLUE : LIGHT_GREY,

          borderRadius: 5,
          height: 40,
          paddingHorizontal: 12,
          marginBottom: 8,
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: error ? "#D92D2010" : WHITE,
        }}
      >
        <TextInput
          style={{
            fontFamily: INTER_REGULAR,
            fontSize: 14,
            width: "90%",
            height: "100%",
            color: BLACK,
          }}
          secureTextEntry={ispassword ? !icon : false}
          keyboardType={keyboardType}
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
        />

        {ispassword && (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              setIcon(!icon);
            }}
          >
            <Image
              source={
                !icon
                  ? require("../assets/icons/eye-off.png")
                  : require("../assets/icons/eye.png")
              }
              style={{
                width: 16,
                height: 12,
                tintColor: error ? RED : GREY,
              }}
            />
          </TouchableOpacity>
        )}
        {error && !ispassword && (
          <View>
            <Image
              source={require("../assets/icons/alert-circle.png")}
              style={{
                width: 16,
                height: 16,
                tintColor: error ? RED : GREY,
              }}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default Input;
