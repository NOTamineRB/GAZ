import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  StatusBar,
  Platform,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RPH, RPW } from "../../theme/dimensions";
import { CustomText } from "../../components/CustomText";
import Checkbox from "expo-checkbox";

import {
  INTER_BOLD,
  INTER_MEDIUM,
  INTER_REGULAR,
} from "../../theme/typography";
import {
  BLACK,
  BLUE,
  DARK_GREY,
  INPUT_GREY,
  LIGHT_GREY,
} from "../../theme/colors";
import Wave from "../../assets/images/svg/wave.svg";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
  Login: undefined; // Add the definition for the "Login" screen
};

const Login: React.FC<NativeStackScreenProps<RootStackParamList, "Login">> = ({
  navigation,
}) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [emailError, setEmailError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [remember, setRemember] = React.useState(false);
  const insets = useSafeAreaInsets();

  const validate = () => {
    if (email === "") {
      setEmailError("Veuillez entrer votre email");
    }
    if (password === "") {
      setPasswordError("Veuillez entrer votre mot de passe");
    }
    return email !== "" && password !== "";
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#F7F7F7" }}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "android" ? "position" : "padding"}
        keyboardVerticalOffset={-100}
        style={{
          flex: 1,
          paddingHorizontal: RPW(5.2),
          paddingTop: Platform.OS == "ios" ? insets.top + 0 : insets.top,
          paddingBottom: insets.bottom,
        }}
      >
        <StatusBar />
        <View
          style={{
            width: "100%",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <Image
            source={require("../../assets/images/Logo.png")}
            resizeMode="contain"
            style={{ height: 100, width: 350, marginTop: 80, marginBottom: 20 }}
          />
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <CustomText
              style={{
                fontFamily: INTER_BOLD,
                fontSize: RPW(5.5),
                marginRight: 8,
                color: BLACK,
              }}
            >
              Bienvenue!
            </CustomText>
            {/* <Wave width={30} height={30} /> */}
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              marginTop: 6,
              marginBottom: 30,
            }}
          >
            <CustomText
              style={{
                fontFamily: INTER_REGULAR,
                fontSize: 16,
                marginRight: 8,
                color: DARK_GREY,
              }}
            >
              Merci d’entrer votre email et mot de passe pour vous connecter à
              l’espace de{" "}
              <CustomText
                style={{
                  fontFamily: INTER_BOLD,
                  color: BLACK,
                }}
              >
                GAZ
              </CustomText>
            </CustomText>
          </View>
          <Input
            label="Email"
            placeholder="Entrez votre email"
            value={email}
            onChangeText={(text: React.SetStateAction<string>) => {
              setEmail(text);
              setEmailError("");
            }}
            error={emailError}
            placeholderTextColor={LIGHT_GREY}
          />
          <Input
            label="Mot de passe"
            placeholder="Entrez votre mot de passe"
            value={password}
            ispassword={true}
            onChangeText={(text: React.SetStateAction<string>) => {
              setPassword(text);
              setPasswordError("");
            }}
            error={passwordError}
            placeholderTextColor={LIGHT_GREY}
          />
          <View
            style={{
              width: "100%",
              marginTop: 4,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Checkbox
                style={{
                  marginRight: 8,
                  height: 16,
                  width: 16,
                  borderRadius: 4,
                  borderWidth: 1,
                }}
                value={remember}
                onValueChange={setRemember}
                color={remember ? BLUE : INPUT_GREY}
              />
              {/* <TouchableOpacity
                style={{ marginRight: 8 }}
                activeOpacity={0.8}
                onPress={() => {
                  setRemember(!remember);
                }}
              >
                <Image
                  source={
                    remember
                      ? require("../../assets/icons/check.png")
                      : require("../../assets/icons/ncheck.png")
                  }
                  style={{ width: 16, height: 16 }}
                />
              </TouchableOpacity> */}

              <CustomText
                style={{
                  fontFamily: INTER_REGULAR,
                  fontSize: 14,
                  color: BLACK,
                }}
              >
                Se souvenir de moi
              </CustomText>
            </View>
            <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
              <CustomText
                style={{
                  fontFamily: INTER_MEDIUM,
                  fontSize: 14,
                  color: BLUE,
                }}
              >
                Mot de passe oublié ?
              </CustomText>
            </TouchableOpacity>
          </View>
          <Button
            name="Se connecter"
            onClick={() => {
              navigation.navigate("Home" as any);
            }}
          />
          <View style={{ height: 16 }} />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
