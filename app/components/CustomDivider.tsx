import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Divider, DividerProps } from "react-native-paper";
import { Colors } from "../GlobalStyles";

interface Props extends DividerProps {
  rightLabel?: string;
  middleLabel?: string;
  leftLabel?: string;
}

const CustomDivider = ({
  rightLabel,
  middleLabel,
  leftLabel,
  ...props
}: Props) => {
  return (
    <>
      {leftLabel && !rightLabel && !middleLabel && (
        <View style={[styles.container, props.style]}>
          <Text style={[styles.label, styles.marginRight]}>{leftLabel}</Text>
          <Divider style={styles.divider} />
        </View>
      )}
      {rightLabel && !leftLabel && !middleLabel && (
        <View style={[styles.container, props.style]}>
          <Divider style={styles.divider} />
          <Text style={[styles.label, styles.marginLeft]}>{rightLabel}</Text>
        </View>
      )}
      {leftLabel && rightLabel && (
        <View style={[styles.container, props.style]}>
          <Text style={[styles.label, styles.marginRight]}>{leftLabel}</Text>
          <Divider style={styles.divider} />
          <Text style={[styles.label, styles.marginLeft]}>{rightLabel}</Text>
        </View>
      )}
      {middleLabel && (
        <View style={[styles.container, props.style]}>
          <Divider style={styles.divider} />
          <Text style={[styles.label, styles.marginHorizontal]}>
            {middleLabel}
          </Text>
          <Divider style={styles.divider} />
        </View>
      )}
    </>
  );
};

export default CustomDivider;

const marginValue = 14;

const styles = StyleSheet.create({
  container: {
    width: 320,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  label: {
    color: Colors.orange100,
    fontSize: 16,
  },
  divider: {
    backgroundColor: Colors.neutral400,
    height: 2,
    flex: 1,
  },
  marginRight: {
    marginRight: marginValue,
  },
  marginLeft: {
    marginLeft: marginValue,
  },
  marginHorizontal: {
    marginHorizontal: marginValue,
  },
});
