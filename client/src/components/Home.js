import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {
  return (
    <div>
        <div
            id="carouselExampleAutoplaying"
            className="carousel slide"
            data-bs-ride="carousel"
            >
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Falloy.ai%2Fwp-content%2Fuploads%2F2023%2F04%2Findustries-consumer-electronics.jpeg&f=1&nofb=1&ipt=4d6cc2807d447c2cd37f1d9ca4883691f858beb673bc6dc614ea4b212313c9c6&ipo=images" className="d-block w-100" alt="fix this error!" />
                </div>
                <div className="carousel-item">
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.imgur.com%2FEbMZ1ET.jpg&f=1&nofb=1&ipt=2da6bbac528958edd9a0c4d7b22bec4e5a550907137a8974075a555aa5e42c7f&ipo=images" className="d-block w-100" alt="fix this error!" />
                </div>
                <div className="carousel-item">
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftechlog360.com%2Fwp-content%2Fuploads%2F2019%2F03%2FGadget-Collections.jpeg&f=1&nofb=1&ipt=d0b0e0759f5ba7d183b6ced0232d10d5824101e2193d9ab38462dd4af1e34733&ipo=images" className="d-block w-100" alt="fix this error!" />
                </div>
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>

        <div className='all-products'>
            <h1>Discover our products</h1>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ratione! Quia animi autem tenetur ab libero doloribus? Ipsa nulla aliquam laboriosam excepturi temporibus. Culpa, aspernatur harum veritatis iure commodi inventore.</h3>
            <div className='products-icons'>
                <img className='icon' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.stickpng.com%2Fimages%2F5a452598546ddca7e1fcbc80.png&f=1&nofb=1&ipt=b58dd40763d3b6b180d545f0abb5672585ae172f836f97688bb1c1b8f2d8f8df&ipo=images'/>
                <img className='icon' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ficon-library.com%2Fimages%2Fsmartwatch-icon%2Fsmartwatch-icon-18.jpg&f=1&nofb=1&ipt=f0cde4480674382b841da6bf6943055c52f8742744fe27ddc2726712cb37bb80&ipo=images'/>
                <img className='icon' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ficon-library.com%2Fimages%2Farduino-icon%2Farduino-icon-20.jpg&f=1&nofb=1&ipt=e99eeaf94b102fc1bfd2cbb55cd69befd0b1b689c47d40e7541f03ca6feb5740&ipo=images'/>
                <img className='icon' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fopengameart.org%2Fsites%2Fdefault%2Ffiles%2FpsController.png&f=1&nofb=1&ipt=a209eaf258bc9a726b91dcc96849829ca9f43c46fca2142b96f5ce48ae1eb566&ipo=images'/>
            </div>
        </div>
    </div>
  )
}

export default Home