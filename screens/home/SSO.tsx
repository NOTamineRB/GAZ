import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";

const SSO = () => {
  return (
    <WebView
      style={{
        flex: 1,
        marginTop: 50,
      }}
      source={{
        uri: "https://test-sso.tangermedpcs.ma/sso?RelayState=Tc3lLI1gvLqDsMSsv3d8j8RwC7bnQSf6g10OhCyr6fcNtRHXAoGxf761&SAMLRequest=nFLNbhMxEH4Va%2B77m03SWN2VQiNEpAJREzhwm3gnraX1ePHMAn171LRIBaQIcbW%2FX%2Fu7FgzDaNeTPvAdfZ1I1PwIA4t9umhhSmwjihfLGEisOrtfv7%2B1dV5aFKGkPjK8ooyXOWOKGl0cwGw3Lfg%2Bo%2FpYLSt0zXy2aE6umTf14mq5wlnvro6EK0flaYX9AsxnSuIjt1DnJZityERbFkXWFuqynmVVmVXLQ1XZcmHrVd7MZ1%2FAbEjUM%2BqZ%2BaA6ii0KJdFMJOaKfE8pUD86yQMWIhHM%2Blevm8gyBUp7St%2B8o093t39I4Dj%2BLYFhKNAJmN1L1zeee8%2F3lx%2Fm%2BAwS%2B%2B5w2GW7j%2FsDdOfPseemybyNKaBeFnk68X12OkMtsXp9hO7fIgdS7FHxunjl2r3s4wMG2m52cfDu8T%2BSaEIWT6xg1sMQv98kQqUWNE0ERfds%2BfsKu58BAAD%2F%2Fw%3D%3D",
      }}
    />
  );
};

export default SSO;

const styles = StyleSheet.create({});
