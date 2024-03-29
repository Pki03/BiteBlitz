import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Carousel } from 'bootstrap';

export default function MyCarousel() {
  useEffect(() => {
    // Initialize the carousel when the component mounts
    const carousel = new Carousel(document.getElementById('carouselExampleFade'));

    // Optionally, you can pause the carousel on hover
    document.getElementById('carouselExampleFade').addEventListener('mouseenter', () => {
      carousel.pause();
    });

    document.getElementById('carouselExampleFade').addEventListener('mouseleave', () => {
      carousel.cycle();
    });

    return () => {
      // Cleanup when the component unmounts
      document.getElementById('carouselExampleFade').removeEventListener('mouseenter', () => {
        carousel.pause();
      });

      document.getElementById('carouselExampleFade').removeEventListener('mouseleave', () => {
        carousel.cycle();
      });
    };
  }, []);

  return (
    <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner" id='carousel'>
          <div className='carousel-caption' style={{ zIndex: '10' }}>
            {/* <div className="d-flex justify-content-center">
              <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-dark my-2 my-sm-0-inline" type="submit">Search</button>
              </form>
            </div> */}
          </div>
          <div className="carousel-item active">
            <img className="d-block w-100" src="https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="First slide" style={{ objectFit: 'cover' }} />
          </div>
        
          <div className="carousel-item">
            <img className="d-block w-100" src="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZvb2R8ZW58MHwwfDB8fHww" alt="Third slide" style={{ objectFit: 'cover' }} />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJ1cmdlcnxlbnwwfDB8MHx8fDA%3D" alt="Fourth slide" style={{ objectFit: 'cover' }} />
          </div>
          
          <div className="carousel-item">
            <img className="d-block w-100" src="https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5kaWFuJTIwZm9vZHxlbnwwfDB8MHx8fDA%3D%3D" alt="Fifth slide" style={{ objectFit: 'cover' }} />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://images.unsplash.com/photo-1597692493647-25bd4240a3f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBhc3RhfGVufDB8MHwwfHx8MA%3D%3D" alt="Fifth slide" style={{ objectFit: 'cover' }} />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9zYXxlbnwwfDB8MHx8fDA%3D" alt="Fifth slide" style={{ objectFit: 'cover' }} />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
