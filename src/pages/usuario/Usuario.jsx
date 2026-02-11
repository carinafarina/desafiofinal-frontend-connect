import s from "./usuario.module.scss"
import foto from "../../assets/image/oii.png"

export default function Usuario() {
  return (
    <main className={s.main}>
      <section>
        <img src={foto} alt="Imagem do perfil do usuario"/>
      <div className={s.div}>
        <h1>Carina Farina</h1>
        <h2>Voluntário Ativo</h2>
        <p>Apaixonado por fazer a diferença na comunidade. Acredito que pequenas ações podem transformar vidas e estou sempre em busca de novas oportunidades para ajudar.</p>
        <ul>
          <li>Sâo Paulo - SP</li>
          <li>carinafarina2024@gmail.com</li>
          <li>Membro desde Fevereiro 2026</li>
        </ul>
        <ul>
          <li>Educação</li>
          <li>Meio Ambiente </li>
          <li>Assistência Social</li>
          <li>Design</li>
        </ul>
      </div>
      </section>
    </main>
  )
}