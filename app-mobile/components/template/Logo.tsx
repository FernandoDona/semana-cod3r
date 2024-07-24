import { Text, View, StyleSheet } from 'react-native';

export default function Logo() {
    return (
        <View>
            <Text style={styles.primario}>SPACE QUIZ</Text>
            <Text style={styles.secundario}>Perguntas de outro mundo!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    primario: {
        color: "white",
        fontSize: 35,
        fontFamily: "SOLARSPACEDEMO-Regular",
        textAlign: "center"
    },
    secundario: {
        color: "white",
        fontSize: 20,
        fontFamily: "SPACEMISSION",
        textAlign: "center"
    }
})
