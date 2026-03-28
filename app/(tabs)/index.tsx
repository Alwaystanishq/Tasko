import { useMutation, useQuery } from "convex/react";
import { StyleSheet, Text, View } from "react-native";
import { api } from "@/convex/_generated/api";

export default function Index() {
  const todos = useQuery(api.todos.getTodos);
  const addTodo = useMutation(api.todos.addTodo);
  const clearAllTodos = useMutation(api.todos.clearAllTodos);


  return (
    <View style={Styles.container}>
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
