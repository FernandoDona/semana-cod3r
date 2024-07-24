import { LinearGradient } from "expo-linear-gradient";
import { View, Text, StyleSheet } from "react-native";

interface EnunciadoProps {
    enunciado: string;
}

export default function Enunciado({ enunciado }: EnunciadoProps) {
    return (
        <View style={styles.container}>
            <LinearGradient colors={["rgba(0,0,0,0.4)", "transparent"]} style={styles.background} />
            <Text style={styles.texto}>{enunciado}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#852E9C",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        borderRadius: 10,
    },
    background: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    },
    texto: {
        fontSize: 23,
        color: "white",
        textAlign: "center",
        fontWeight: "bold",
        opacity: 0.8
    }
})