function ButtonTwo(props){
    return(<>
    <button className="btn px-5 py-2 mb-4 d-block mx-auto" style={{ background: "linear-gradient(to bottom, #135D66 0%, #22A6B6 100%)", color: "white",fontSize:"1.7rem"}}>
      {props.content}
    </button>
    </>)
    
    
    }
    export default ButtonTwo;
