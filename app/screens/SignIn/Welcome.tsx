import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../../GlobalStyles";
import CustomButton from "../../components/CustomButton";
import LogoText from "../../components/LogoText";

type Props = {
  navigation: any;
  route: any;
};

const Welcome = ({ navigation }: Props) => {
  const handleOnPress = () => {
    navigation.navigate("SignIn");
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <LogoText size={54} variant="large" />
      </View>
      <View style={styles.actionable}>
        <CustomButton size="medium" right="arrowRight">
          Let's Get Sexy
        </CustomButton>
        <View style={styles.actionableLabelContainer}>
          <Text style={styles.label}>Already have an account?</Text>
          <Text onPress={handleOnPress} style={styles.signInLabel}>
            Sign In
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 300,
    paddingBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
  },
  logoContainer: {
    marginBottom: 226,
  },
  logoLabel: {
    fontSize: 40,
    lineHeight: 50,
    marginBottom: 226,
    color: Colors.orange100,
    fontFamily: "IntegralCF",
    textTransform: "uppercase",
  },
  actionable: {
    display: "flex",
    columnGap: 26,
  },
  actionableLabelContainer: {
    marginTop: 26,
    flexDirection: "row",
    justifyContent: "center",
  },
  label: {
    lineHeight: 25,
    fontSize: 17,
    fontFamily: "Satoshi",
    color: Colors.neutral400,
  },
  signInLabel: {
    lineHeight: 25,
    fontSize: 17,
    marginLeft: 6,
    fontFamily: "Satoshi",
    color: Colors.orange100,
  },
});
