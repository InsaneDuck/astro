import Text from "@/components/theming/ThemedComponents/Text";
import View from "@/components/theming/ThemedComponents/View";
import { FC } from "react";
import { StyleSheet } from "react-native";

type ModalProps = {};

const Modal: FC<ModalProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modal</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
    </View>
  );
};
export default Modal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
