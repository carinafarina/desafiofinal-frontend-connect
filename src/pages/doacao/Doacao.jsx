import S from "../Style.module.scss"
import InfoCard from "../../components/infoCard/InfoCard";
import doacaoImg from "../../assets/image/doacaoImg.png";
import projEscola from "../../assets/image/projEscola.png";
import notBook from "../../assets/image/notbook.png";

export default function Doacao() {
  return (
    <main className={S.main}>
      <h1>Doacao</h1>
      <section>
        <article>
           <InfoCard 
           img= {doacaoImg}
           alt="Imagem de uma pessoa carregando uma caixa com doações"
           subtitulo= "Instituto grande familia"
           paragrafo="Contribua com alimentos não perecíveis e ajude famílias em situação de vulnerabilidade."
           textoBotao="Quero Doar"  
           />            
        </article>          

        <article>
          <InfoCard 
          img= {projEscola}
          alt="Imagem de livro"
          subtitulo= "Projeto Futuro na Escola"
          paragrafo="Doe livros, cadernos, lápis, mochilas e canetas para ajudar jovens a continuarem seus estudos com mais estrutura."
          textoBotao="Quero Doar" 
          />           
        </article>

        <article>
          <InfoCard
          img= {notBook}
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