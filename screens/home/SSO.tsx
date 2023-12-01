import React, { useRef, useState } from "react";
import { WebView } from "react-native-webview";
import CookieManager from "@react-native-cookies/cookies";
import { Platform } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamList } from "../../stacks/AppStack";

const REACT_APP_SSO_URL = "https://test-app.tangermedpcs.ma";

const SSO: React.FC<NativeStackScreenProps<AppStackParamList, "SSO">> = ({
  navigation,
}) => {
  const webViewRef = useRef(null);
  const [hasPermission, setHasPermission] = useState(false);

  const onLoadEnd = () => {
    if (Platform.OS === "android") {
      CookieManager.get(REACT_APP_SSO_URL, true).then((res) => {
        // console.log("CookieManager.get =>", res["Token"].value);
      });
    } else {
      CookieManager.getAll(true).then((res) => {
        // console.log("CookieManager.result =>", res["Token"].value);
        if (res["Token"]) {
          const token = res["Token"].value;

          //store user token
          fetch(`${REACT_APP_SSO_URL}/api/profile/users/my-organizations`, {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          })
            .then((response) => response.json())
            .then((data) => {
              const result = data["result"];
              const tmzObject = result.find(
                (item: { name: string }) => item.name === "TMZ"
              );
              const hasGAZmobile =
                tmzObject.extra["gaz-fonction"] == "managergaz";
              console.log("Nigger can use the APP", hasGAZmobile);
              // const organizations = result.organizations;
              // console.log("organizations =>", organizations);
              // Check if there is an organization with the name 'TMZ'
              // const hasTMZOrganization = organizations.some(
              //   (org: { name: string }) =>
              //     // org.name === "TMZ" || org.name === "TAC"
              //     org.name === "TMZ"
              // );
              // if (hasTMZOrganization) {
              //   setHasPermission(true);
              // }
              // {
              //   hasPermission && navigation.navigate("Home");
              // }

              // Print the result
              // console.log("Has TMZ Organization:", hasTMZOrganization);

              // Handle the result as needed
            })
            .catch((error) => {
              console.error("Error fetching ORG:", error);
            });
        }
      });
    }
  };

  return (
    <WebView
      ref={webViewRef}
      source={{ uri: REACT_APP_SSO_URL }}
      style={{ flex: 1, marginTop: 50 }}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      sharedCookiesEnabled={true}
      onLoadEnd={onLoadEnd}
      onNavigationStateChange={(nav) => {
        // console.log("nav =>", nav.url);
        CookieManager.get(nav.url).then(async (res) => {
          // store cookies in local storage
          // console.log("onchange Cookie =>", res);
          if (res["Token"]) {
            const token = res["Token"];
            // store user token
          }
        });
      }}
    />
  );
};

export default SSO;
