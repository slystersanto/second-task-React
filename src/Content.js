import { useState } from 'react';


 function Content({ content,cart,setCart }) {

    const [isVisible, setVisible] = useState(true);

    
    function IncreaseCart() {
        return setCart(cart + 1);
    }
    function DecreaseCart() {
        return setCart(cart - 1);
    }


    return (
        <div>

            <div class="col mb-5">
                <div class="card h-100">
                    <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                    <div class="card-body">
                        <div class="text-center">
                            <h5 class="fw-bolder">{content.h5}</h5>
                            <div class="d-flex justify-content-center small text-warning mb-2">{content.star}</div>
                            {content.islinethrough?<span><span className={content.islinethrough?"text-muted text-decoration-line-through":""}>{content.price}</span><span> {content.price1}</span></span>:<span>{content.price}</span>}
                        </div>
                    </div>
                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <button onClick={() => {
                            setVisible(!isVisible);
                            isVisible ? IncreaseCart() : DecreaseCart()
                        }}>{isVisible ? "Add to Cart" : "Remove"}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;