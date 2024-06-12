function ButtonOne(props) {
  return (<span className="m-4">

    <button className="btn px-5 py-2 rounded-pill mb-4  mx-auto " style={{
      background: "linear-gradient(to bottom, #135D66 0%, #22A6B6 100%)", color: "white" ,fontSize:"1.2rem"
    }}>
      {props.content}
    </button>
  </span>)


}

export default ButtonOne;
