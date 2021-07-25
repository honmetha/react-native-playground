import * as React from "react";
import { Button, TextInput, View } from "react-native";
import { globalStyles } from "../styles/global";
import { Formik } from "formik";

export default function ReviewForm() {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        onSubmit={(values) => {
          console.log(`values`, values);
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Review title"
              onChangeText={props.handleChange("title")}
              value={props.values.title}
              placeholderTextColor={"gray"}
            />
            <TextInput
              multiline
              style={globalStyles.input}
              placeholder="Review body"
              onChangeText={props.handleChange("body")}
              value={props.values.body}
              placeholderTextColor={"gray"}
            />
            <TextInput
              style={globalStyles.input}
              placeholder="Rating (1-5)"
              onChangeText={props.handleChange("rating")}
              value={props.values.rating}
              keyboardType="numeric"
              placeholderTextColor={"gray"}
            />
            <Button title="submit" color="blue" onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}
