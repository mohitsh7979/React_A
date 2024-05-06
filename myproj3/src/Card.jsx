import i from './images/myphoto.avif'

function Card(){
    
    let name = "Aman";
    let D = new Date()
     
    let e = D.toDateString()
    console.log(e)
    return(

        <div className="card">
            <img src={i} alt="" />
            <h1>My Name is {name}</h1>
            <p>Date : {e}</p>
        </div>
    )
}

export default Card;