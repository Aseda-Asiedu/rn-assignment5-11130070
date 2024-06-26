import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MyTabs from "./AppPub";
import { ThemeContext } from "./ThemeContext";
import React, { useState } from "react";

const Stack = createStackNavigator();

export default function App() {
    const [theme, setTheme] = useState({ mode: 'light' });

    const changeTheme = (newTheme) => {
        let mode;
        if (!newTheme) {
            const mode = theme.mode === 'light' ? 'dark' : 'light';
            newTheme = { mode };
        }
        setTheme(newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={MyTabs} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        </ThemeContext.Provider>
    );
}
