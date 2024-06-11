function ButtonOne(props){
return(<>
<button className="btn px-5 py-4 rounded-pill mb-4 d-block mx-auto" style={{ background: "linear-gradient(to bottom, #135D66 0%, #22A6B6 100%)", color: "white" }}>
  {props.content}
</button>
</>)


}
export default ButtonOne;