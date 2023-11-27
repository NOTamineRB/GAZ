import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamList } from "../../stacks/AppStack";
import { RPW } from "../../theme/dimensions";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CustomText } from "../../components/CustomText";
import { INTER_BOLD, INTER_REGULAR } from "../../theme/typography";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { BLACK, DARK_GREY, LIGHT_LIGHT_GREY } from "../../theme/colors";
type ScanResultProps = NativeStackScreenProps<AppStackParamList, "ScanResult">;
const ScanResult: React.FC<ScanResultProps> = ({ route }) => {
  const [expand, setExpand] = React.useState(false);

  const insets = useSafeAreaInsets();

  // Access the parameters passed from the previous screen
  // const { barcodeType, barcodeData } = route.params;
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
        <View style={{ backgroundColor: LIGHT_LIGHT_GREY, borderRadius: 8 }}>
          <ImageBackground
            source={require("../../assets/images/yes.png")}
            resizeMode="contain"
            tintColor={"green"}
            style={
              {
                // justifyContent: "center",
                // alignItems: "center",
              }
            }
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 8,
                marginTop: 8,
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
                Badge
              </CustomText>
              <CustomText
                style={{
                  fontFamily: INTER_BOLD,
                  fontSize: RPW(5.5),
                  marginRight: 8,
                  color: BLACK,
                }}
              >
                <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
                  <AntDesign name="close" size={24} color="black" />
                </TouchableOpacity>
              </CustomText>
            </View>
            <View
              style={{
                justifyContent: "center",
                flexDirection: "row",
                margin: 10,
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
                Société :
              </CustomText>
              <CustomText
                style={{
                  fontFamily: INTER_REGULAR,
                  fontSize: 16,
                  marginRight: 8,
                  color: BLACK,
                }}
              >
                PCS S.A.R.L
              </CustomText>
            </View>
            <View
              style={{
                justifyContent: "center",
                flexDirection: "row",
                margin: 10,
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
                CIN :
              </CustomText>
              <CustomText
                style={{
                  fontFamily: INTER_REGULAR,
                  fontSize: 16,
                  marginRight: 8,
                  color: BLACK,
                }}
              >
                K542008
              </CustomText>
            </View>
            <View
              style={{
                justifyContent: "center",
                flexDirection: "row",
                margin: 10,
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
                Genre :
              </CustomText>
              <CustomText
                style={{
                  fontFamily: INTER_REGULAR,
                  fontSize: 16,
                  marginRight: 8,
                  color: BLACK,
                }}
              >
                home
              </CustomText>
            </View>
            {!expand ? (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  setExpand(!expand);
                }}
                style={{
                  justifyContent: "center",
                  flexDirection: "row",
                  margin: 10,
                  alignItems: "center",
                }}
              >
                <CustomText
                  style={{
                    fontFamily: INTER_BOLD,
                    fontSize: 14,
                    color: BLACK,
                  }}
                >
                  Show more
                </CustomText>
                <MaterialIcons name="expand-more" size={24} color="black" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  setExpand(!expand);
                }}
                style={{
                  justifyContent: "center",
                  flexDirection: "row",
                  margin: 10,
                  alignItems: "center",
                }}
              >
                <CustomText
                  style={{
                    fontFamily: INTER_BOLD,
                    fontSize: 14,
                    color: BLACK,
                  }}
                >
                  Show Less
                </CustomText>
                <MaterialIcons name="expand-less" size={24} color="black" />
              </TouchableOpacity>
            )}
          </ImageBackground>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ScanResult;

const styles = StyleSheet.create({});
