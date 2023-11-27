import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  Image,
  StatusBar,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { RPW } from "../../theme/dimensions";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Button from "../../components/Button";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { BarCodeScanner } from "expo-barcode-scanner";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamList } from "../../stacks/AppStack";
import { BLUE, DARK_GREY, WHITE } from "../../theme/colors";
import { CustomText } from "../../components/CustomText";
import {
  INTER_BOLD,
  INTER_MEDIUM,
  INTER_REGULAR,
} from "../../theme/typography";
import { Ionicons } from "@expo/vector-icons";

const Home: React.FC<NativeStackScreenProps<AppStackParamList, "Home">> = ({
  navigation,
}) => {
  const insets = useSafeAreaInsets();
  const [hasPermission, setHasPermission] = useState(false);
  const [scanned, setScanned] = useState(false);
  const [scanning, setScanning] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({
    type,
    data,
  }: {
    type: string;
    data: string;
  }) => {
    setScanned(true);
    console.log(
      `Bar code with type ${type} and data ${data} has been scanned!`
    );
    setScanning(false);
    navigation.navigate("ScanResult", { barcodeType: type, barcodeData: data });
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1, backgroundColor: scanning ? "#000" : "#f7f7f7" }}>
      {scanning ? (
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ flex: 1, height: "100%", width: "100%" }}
        />
      ) : (
        <View style={{ flex: 1 }}>
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
            {/* <View style={{ backgroundColor: BLUE, borderRadius: 8 }}>
              <View
                style={{
                  width: "100%",
                  flexDirection: "row",
                  alignItems: "flex-start",

                  justifyContent: "space-between",
                }}
              >
                <CustomText
                  style={{
                    fontFamily: INTER_BOLD,
                    fontSize: RPW(6),
                    marginRight: 8,
                    color: WHITE,
                    margin: 10,
                  }}
                >
                  ZAID NEBKHOUT
                </CustomText>
                <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
                  <Ionicons
                    name="settings-sharp"
                    size={30}
                    color={WHITE}
                    style={{ margin: 10 }}
                  />
                </TouchableOpacity>
              </View>
              <CustomText
                style={{
                  fontFamily: INTER_MEDIUM,
                  fontSize: 16,
                  marginRight: 8,
                  color: WHITE,
                  marginHorizontal: 10,
                  marginBottom: 10,
                }}
              >
                {"(TMPA)"}
              </CustomText>
            </View> */}
            <Image
              source={require("../../assets/images/Qr.png")}
              resizeMode="contain"
              style={{
                height: 300,
                width: 350,
                marginTop: 200,
                marginBottom: 20,
              }}
            />
            <Button
              name="Scanner le QR code SVP"
              icon={
                <MaterialCommunityIcons
                  name="qrcode-scan"
                  size={24}
                  color={WHITE}
                />
              }
              onClick={() => {
                setScanning(true);
              }}
            />
          </KeyboardAvoidingView>
        </View>
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
