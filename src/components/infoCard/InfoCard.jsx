import S from "./infoCard.module.scss"

export default function InfoCard(props) {
  return (
    <article className={S.article}>
        <img src={props.img} alt={props.alt}/>
        <h2>{props.subtitulo}</h2>
        <p>{props.paragrafo}</p>  
        <p>{props.segparagrafo}</p> 
        <button>{props.textoBotao}</button>    
    </article>
  )
}
