import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";

export interface PaginaProps {
    children: React.ReactNode;
}

const backgroundImage = require("@/assets/images/background.jpg");

export default function Pagina({ children }: PaginaProps) {
    return <View style={styles.container}>
        <ImageBackground 
            source={backgroundImage} 
            style={styles.image} 
            imageStyle={{ opacity: 0.5 }}
            resizeMode="cover"
        >
            {children}
        </ImageBackground>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black"
    },
    image: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    }
})
