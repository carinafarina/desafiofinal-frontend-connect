

import S from "../Style.module.scss"
import InfoCard from "../../components/infoCard/InfoCard";
import mutirao from "../../assets/image/mutirao.png";
import tecnologia from "../../assets/image/tecnologia.png";
import esporte from "../../assets/image/esporte.png";

export default function Voluntariado() {
  return (
    <main className={S.main}>
      <h1>Voluntariado</h1>
      <section>
        <article>
           <InfoCard 
           img= {mutirao}
           alt="Imagem de 3 pessoas carregando caixas de reciclagem "
           subtitulo= "Mutirão de reciclagem"
           paragrafo="Coletar materiais recicláveis e orientar sobre descarte consciente."
           textoBotao="Quero Participar"  
           />            
        </article>          

        <article>
          <InfoCard 
          img= {tecnologia}
          alt="Imagem de livro"
          subtitulo= "Projeto Futuro na Escola"
          paragrafo="Doe livros, cadernos, lápis, mochilas e canetas para ajudar jovens a continuarem seus estudos com mais estrutura."
          textoBotao="Quero Doar" 
          />           
        </article>

        <article>
          <InfoCard
          img= {esporte}
          alt="Imagem de uma pessoa carregando uma caixa com doações"
          subtitulo= "Instituto Conecta Jovem"
          paragrafo="Doe computadores usados, tablets ou celulares em bom estado para permitir que jovens tenham acesso ao mundo digital e novas oportunidades."
          textoBotao="Quero Doar"          
          /> 
        </article>
      </section>
    </main>
  )
}