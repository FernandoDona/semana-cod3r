import Pagina from "@/components/template/Pagina";
import Logo from "@/components/template/Logo";
import { Text, View } from "react-native";
import Pergunta from "@/components/questionario/Pergunta";
import useQuestionario from "@/data/hooks/useQuestionario";
import Resultado from "@/components/questionario/Resultado";

export default function Index() {
  const { pergunta, totalDePerguntas, pontuacao, concluido, reiniciar, responder } = useQuestionario();
  
  return (
    <Pagina>
      <View style={{gap: 40}}>
        <Logo />
        { concluido 
          ? <Resultado pontuacao={pontuacao} totalDePerguntas={totalDePerguntas} reiniciar={reiniciar} /> 
          : <Pergunta pergunta={pergunta} responder={responder} />
        }
      </View>
    </Pagina>
  );
}
