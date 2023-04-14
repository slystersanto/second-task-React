import logo from './logo.svg';
import './App.css';
import Nav from './Nav.js';
import Content from './Content';
import { useState } from 'react';


function App() {
  const [cart, setCart] = useState(0);
  const data = [
    {
      h5: "Fancy product",
      islinethrough:false,
      price: "$40.00 - $80.00",
      price1: "",
      star: "",
    },
    {
      h5: "Special Item",
      islinethrough:true,
      price:"$20.00" ,
      price1: "$18.00",
      star: "⭐⭐⭐⭐⭐",
    },
    {
      h5: "Sale Item",
      islinethrough:true,
      price: "$50.00",
      price1: "$25.00",
      star: "",
    },
    {
      h5: "Popular Item",
      islinethrough:false,      
      price: "$40.00",
      price1: "",
      star: "⭐⭐⭐⭐⭐",
    },
    {
      h5: "Sale Item",
      islinethrough:true,
      price: "$50.00",
      price1:"$25.00",
      star: "",
    },
    {
      h5: "Fancy product",
      islinethrough:false,
      price: "$120.00 - $280.00",
      price1: "",
      star: "",
    },
    {
      h5: "Special Item",
      islinethrough:true,
      price: "$20.00",
      price1: "$18.00",
      star: "⭐⭐⭐⭐⭐",
    },
    {
      h5: "Popular Item",
      islinethrough:false,
      price: "$40.00",
      price1: "",
      star: "⭐⭐⭐⭐⭐",
    }
  ]

  return (
    <div className="App">
      <Nav cartCount={cart} />
      <Head />
      <section class="py-5">
        <div class="container px-4 px-lg-5 mt-5">
          <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {data.map((ele) => <Content content={ele} cart={cart} setCart={setCart}/>)}
          </div>
        </div>
      </section>
      <Foot />
    </div>
  );
};
function Head() {
  return (
    <header class="bg-dark py-5">
      <div class="container px-4 px-lg-5 my-5">
        <div class="text-center text-white">
          <h1 class="display-4 fw-bolder">Shop in style</h1>
          <p class="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
        </div>
      </div>
    </header>
  )
}

function Foot() {
  return (
    <footer class="py-5 bg-dark">
      <div class="container"><p class="m-0 text-center text-white">Copyright © Your Website 2022</p></div>
    </footer>
  )
}
export default App;