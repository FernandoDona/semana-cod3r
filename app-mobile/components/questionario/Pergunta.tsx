import { Pergunta as PerguntaModel } from "@/data/model/Pergunta";
import { View, Text, StyleSheet } from "react-native";
import Enunciado from "./Enunciado";
import Opcao from "./Opcao";

interface PerguntaProps {
    pergunta: PerguntaModel;
    responder: (indice: number) => void;
}

export default function Pergunta({ pergunta, responder }: PerguntaProps) {
    return (
        <View style={styles.container}>
            <Enunciado enunciado={pergunta.enunciado} />
            <View style={{ gap: 10 }}>
                {pergunta.opcoes.map((opcao, i) => (
                    <Opcao key={i} indice={i} texto={opcao} onPress={() => responder(i)} />
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 30,
        marginHorizontal: 20
    }
})