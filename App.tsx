import { StatusBar } from "expo-status-bar";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { useEffect, useState } from "react";
import Icon from "./components/Icon";
import CustomTextInput from "./components/CustomTextInput";
import CustomButton from "./components/CustomButton";
import CustomChip from "./components/CustomChip";
import CustomIconChip from "./components/CustomIconChip";
import CustomProgressBar from "./components/CustomProgressBar";
import { Colors } from "./GlobalStyles";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.orange100,
    onSurfaceVariant: Colors.neutral350,
  },
};

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        Satoshi: require("./assets/fonts/Satoshi/Satoshi-Regular.otf"),
        SatoshiBold: require("./assets/fonts/Satoshi/Satoshi-Medium.otf"),
        IntegralCF: require("./assets/fonts/Integral-CF/Fontspring-DEMO-integralcf-regular.otf"),
      });
      setFontLoaded(true);
    };

    loadFonts();
  }, []);

  if (!fontLoaded) {
    return null;
  }

  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        {/* <Text style={{ fontFamily: "Satoshi", fontSize: 24 }}>
          Hello Satoshi
        </Text>
        <Text style={{ fontFamily: "IntegralCF", fontSize: 24 }}>
          Hello Integral CF
        </Text>
        <Text style={{ fontFamily: "Satoshi", fontSize: 16 }}>
          armelhell@icloud.com
        </Text>
        <View style={styles.textInputContainer}>
          <CustomTextInput variant="primary" label="Email" />
        </View>
        <View style={styles.textInputContainer}>
          <CustomTextInput
            variant="primary"
            label="Label Name"
            iconName="target"
          />
        </View>
        <View style={styles.textInputContainer}>
          <CustomTextInput
            variant="secondary"
            placeholder="Placeholder"
            iconName="arrowRight"
          />
        </View>
        <View style={styles.textInputContainer}>
          <CustomTextInput
            variant="filled"
            filledLabel="You'll be using this email to log in"
            filledValue="armelhell@icloud.com"
          />
        </View> */}
        {/* <View style={styles.textInputContainer}>
          <CustomTextInput
            variant="filled"
            filledLabel="You'll be using this email to log in"
            filledValue="armelhell@icloud.com"
          />
        </View> */}
        {/* <View style={styles.buttonContainer}>
          <CustomButton size="small">Start Workout</CustomButton>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton size="large" left="schedule" right="arrowRight">
            Start Workout
          </CustomButton>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton size="large" left="playFilled">
            Start Workout
          </CustomButton>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton size="medium" right="arrowRight">
            Start Workout
          </CustomButton>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton size="xlarge" left="playFilled">
            Start Workout
          </CustomButton>
        </View>
        <StatusBar style="auto" />
      </View> */}
        {/* <View style={styles.buttonContainer}>
          <CustomChip>Mark as completed</CustomChip>
        </View>
        <View style={styles.buttonContainer}>
          <CustomChip left="favoriteEmpty" right="moreHorizontal" children="" />
        </View>
        <View style={styles.buttonContainer}>
          <CustomIconChip iconName="chevronLeft" size="small" children="" />
        </View>
        <View style={styles.buttonContainer}>
          <CustomIconChip iconName="close" size="large" children="" />
        </View> */}
        <View style={styles.buttonContainer}>
          <CustomProgressBar progress={15} size="xlarge" />
        </View>
        <View style={styles.buttonContainer}>
          <CustomProgressBar progress={15} size="large" />
        </View>
        <View style={styles.buttonContainer}>
          <CustomProgressBar progress={15} size="medium" />
        </View>
        <View style={styles.buttonContainer}>
          <CustomProgressBar progress={15} size="small" />
        </View>
      </View>
    </PaperProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    marginTop: 200,
  },
  textInputContainer: {
    marginBottom: 8,
  },
  buttonContainer: {
    marginBottom: 10,
    // alignItems: "flex-start",
    // textAlign: "right",
  },
  searchTextInputContainer: {
    alignSelf: "flex-end",
    marginBottom: 8,
    marginEnd: 30,
  },
});
