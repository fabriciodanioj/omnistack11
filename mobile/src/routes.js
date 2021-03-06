import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import Detail from "./pages/Detail";
import Incidents from "./pages/Incidents";

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Incidents"
      >
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Incidents" component={Incidents} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
