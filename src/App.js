import { useState } from "react";
import './App.css';



function App() {
  const data = [

    {

      sale: ".",
      title: "450❌300",
      sub_title: "Fancy Product",
      rating: ".",
      price: "$40.00-$80.00",
      btn: "View Options",

    },
    {
      sale: <span>Sale</span>,
      title: "450❌300",
      sub_title: "Special Item",
      rating: "⭐⭐⭐⭐⭐",
      price: <s>$20.00</s>,
      str: "$18.00",
      btn: "Add to cart",

    },
    {
      sale: <span>Sale</span>,
      title: "450❌300",
      sub_title: "Sale Item",
      rating: ".",
      price: <s>$50.00</s>,
      str: "$25.00",
      btn: "Add to cart",

    },
    {
      sale: ".",
      title: "450❌300",
      sub_title: "Popular Item",
      rating: "⭐⭐⭐⭐⭐",
      price: "$40.00",
      btn: "Add to cart",

    },
    {
      sale: <span>Sale</span>,
      title: "450❌300",
      sub_title: "Sale Item",
      rating: ".",
      price: <s>$50.00</s>,
      str: "$25.00",
      btn: "Add to cart",

    },
    {
      sale: ".",
      title: "450❌300",
      sub_title: "Fancy Product",
      rating: ".",
      price: "$120.00-$280.00",
      btn: "View options",

    },
    {
      sale: <span>Sale</span>,
      title: "450❌300",
      sub_title: "Special Item",
      rating: "⭐⭐⭐⭐⭐",
      price: <s>$20.00</s>,
      str: " $18.00",
      btn: "Add to cart",

    },
    {
      sale: ".",
      title: "450❌300",
      sub_title: "Popular Item",
      rating: "⭐⭐⭐⭐⭐",
      price: "$40.00",
      btn: "Add to cart",

    },
  ];

  // const [item, setItem] = useState(0);
  const [count,setCount]=useState(0);
  return (
    <div className="App">
     <div> <span id='cart'>🛒Cart{count}</span></div>
<div>

      <div className='header'>Shop in Style <br></br><span className="header-1"> With this shop hompeage template</span></div>
      
      </div>
      {data.map((item, index) => (

        <Subscription
          key={index}
          heading={item.heading}
          sale={item.sale}
          title={item.title}
          sub_title={item.sub_title}
          rating={item.rating}
          price={item.price}
          str={item.str}
          btn={item.btn}
          index={index}
          count={count}
          setCount={setCount}
          
         

        />
      ))}
      <div><p className='footer'>Copyright ©️ Your Website 2023</p></div>

    </div>

  );
}




export default App;


function Subscription({sale,title,sub_title,rating,str,btn,index,price,count,setCount}) {
 
  const [showBtn, setShowBtn] = useState(true);
  
  const handleCartAdd = () => {
    setShowBtn(!showBtn);
    setCount(count+1);


  }
  const handleCartRemove=()=>{
    setShowBtn(!showBtn)
    setCount(count-1);
  }
  return (

    <div className='container'>
      
      <div className='cards'>
        <div id="sale">{sale}</div>
        <p className='title'>{title}</p>
        <hr></hr>
        <p className="sub-title">{sub_title}</p>
        <p className='rating'>{rating} </p>
        <p className='str'>{price} {str}</p>
        {/* <button type="button" onClick={()=>handleCartAdd()}>{showBtn ? (btn) : <p onClick={()=>removeCard()} > remove </p>} </button> */}
        { showBtn ?  <button type="button" onClick={()=>handleCartAdd()} className="btn"> {btn} </button> :  <button  type="button"onClick={()=>handleCartRemove()} className="btn">remove</button>}  

        <div>

        </div>


      </div>
    </div>

  )
}









