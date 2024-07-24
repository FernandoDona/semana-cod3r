import { Pressable, Text, StyleSheet } from "react-native"

interface OpcaoProps {
    indice: number
    texto: string
    onPress: () => void
}

export default function Opcao(props: OpcaoProps) {
    return (
        <Pressable style={styles.container} onPress={props.onPress}>
            <Text style={styles.texto}>{props.texto}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "green",
        paddingHorizontal: 25,
        paddingVertical: 10,
        borderRadius: 50,
    },
    texto: {
        color: "white",
        fontSize: 22,
    }
})