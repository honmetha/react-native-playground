import * as React from "react";
import { StyleSheet, View, TextInput, Button, Alert } from "react-native";

export default function AddTodo({ submitHandler }) {
  const [text, setText] = React.useState("");

  const changeHandler = (val) => {
    setText(val);
  };

  const pressHandler = (text) => {
    if (text.length > 3) {
      submitHandler(text);
      setText("");
    } else {
      Alert.alert("OOPS!", "Todos must be over 3 chars long", [
        {
          text: "Understood",
          onPress: () => console.log("alert closed"),
        },
      ]);
    }
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="new to do..."
        value={text}
        onChangeText={changeHandler}
      />
      <Button
        onPress={() => pressHandler(text)}
        title="add todo"
        color="coral"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
