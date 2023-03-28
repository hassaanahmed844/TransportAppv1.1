import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Basic_Button from "../components/Basic_Button";
import Number_Field from "../components/Number_Field";

const OTP_Conformation = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        background: "#",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `linear-gradient(to bottom, rgb(244, 197, 87), rgb(254, 130, 58))`,
      }}
    >
      <Image style={styles.logo} source={require("../assets/Logo.png")} />

      <Text style={styles.heading}> School Transport Service </Text>

      <View style={{ paddingTop: 34 }} />

      <Text> Enter Mobile Number to Register </Text>
      <Number_Field name="Enter OTP" placeHolder="Enter OTP" />
      <View style={{ margin: 10 }} />
      <Basic_Button
        name="Proceed"
        onPress={() => {
          navigation.navigate("SignUp_Form");
        }}
      />
    </View>
  );
};
export default OTP_Conformation;

const styles = StyleSheet.create({
  logo: {
    alignItems: "center",
    justifyContent: "center",

    width: 300,
    height: 300,
  },
  heading: {
    fontWeight: "bold",
    textAlign: "center",

    fontSize: 30,
  },
});
