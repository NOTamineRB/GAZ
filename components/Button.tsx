import React from "react";
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import {
  BLACK,
  BLUE,
  GREY,
  INPUT_GREY,
  LIGHT_BLUE,
  LIGHT_LIGHT_GREY,
  PURPLE,
  WHITE,
} from "../theme/colors";
import { INTER_MEDIUM, INTER_REGULAR } from "../theme/typography";
import { CustomText } from "./CustomText";

interface ButtonProps {
  name?: string;
  loading?: boolean;
  onClick: () => void;
  disabled?: boolean;
  icon?: React.ReactNode;
  backgroundColor?: string;
}

const Button = ({
  name,
  loading,
  onClick,
  disabled = false,
  icon,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onClick}
      disabled={disabled}
      style={{
        backgroundColor: BLUE,
        borderWidth: 1,
        borderColor: INPUT_GREY,
        width: "100%",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      {loading && (
        <ActivityIndicator
          color={WHITE}
          style={{
            marginRight: 8,
          }}
        />
      )}

      <CustomText
        style={{
          color: WHITE,
          fontFamily: INTER_MEDIUM,
          fontSize: 16,
          marginRight: icon ? 8 : 0,
        }}
      >
        {name}
      </CustomText>
      {icon}
    </TouchableOpacity>
  );
};

export default Button;
