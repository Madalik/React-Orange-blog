import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faUtensils,
  faShoePrints,
  faPlane,
  faCar,
  faTshirt,
} from "@fortawesome/free-solid-svg-icons";

const TravelHints = () => {
  return (
    <div className="container py-5">
      <header className="text-center">
        <h1 className="display-4">Smart travel</h1>
      </header>

      <div className="row">
        <div className="col-lg-11 mx-auto">
          <div className="row py-5">
            <div className="col-lg-4">
              <figure className="rounded p-3 bg-white shadow-sm">
                <img
                  src="https://st.depositphotos.com/2288675/2454/i/600/depositphotos_24543787-stock-photo-hotel.jpg"
                  alt=""
                  className="w-100 card-img-top"
                ></img>
                <figcaption className="p-4 card-img-bottom">
                  <p className="mb-0 text-small text-muted font-italic">
                    Trivago’s hotel search allows users to compare hotel prices
                    in just a few clicks from more than 300 booking sites.
                  </p>
                  <a target="_blank" href="https://www.trivago.com/">
                    <button className="btn btn btn-outline-warning">
                      <FontAwesomeIcon icon={faBed }  /> 
                       Where to sleep
                    </button>
                  </a>
                </figcaption>
              </figure>
            </div>
            <div className="col-lg-4">
              <figure className="rounded p-3 bg-white shadow-sm">
                <img
                  src="https://www.lironboylston.com/wp-content/uploads/2020/12/WBC_7095.jpg"
                  alt=""
                  className="w-100 card-img-top"
                ></img>
                <figcaption className="p-4 card-img-bottom">
                  <p className="mb-0 text-small text-muted font-italic">
                    EatLocal is about celebrating culture and food, people and
                    nature.Browse the finest culinary events and find out more
                    about local gastronomy
                  </p>
                  <a target="_blank" href="https://booking.mytransylvania.ro/">
                    <button className="btn btn btn-outline-warning">
                      <FontAwesomeIcon icon={faUtensils} />
                      Where to eat
                    </button>
                  </a>
                </figcaption>
              </figure>
            </div>
            <div className="col-lg-4">
              <figure className="rounded p-3 bg-white shadow-sm">
                <img
                  src="https://w0.peakpx.com/wallpaper/186/69/HD-wallpaper-tourist-bicycle-hiking-camping.jpg"
                  alt=""
                  className="w-100 card-img-top"
                ></img>
                <figcaption className="p-4 card-img-bottom">
                  <p className="mb-0 text-small text-muted font-italic">
                    Looking for tours, events or attractions?We offer you access
                    to tours, events, attractions, cruises, transfers and other
                    activities.
                  </p>
                  <a target="_blank" href="https://www.tripadvisor.com/">
                    <button className="btn  btn btn-outline-warning">
                      <FontAwesomeIcon icon={faShoePrints} />
                      What to do
                    </button>
                  </a>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-11 mx-auto">
          <div className="row py-5">
            <div className="col-lg-4">
              <figure className="rounded p-3 bg-white shadow-sm">
                <img
                  src="data:image/jpeg;base64,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"
                  alt=""
                  className="w-100 card-img-top"
                ></img>
                <figcaption className="p-4 card-img-bottom">
                  <p className="mb-0 text-small text-muted font-italic">
                    Find cheap flights, travel deals, hotels & car hire from
                    over 1200 travel providers. Compare flexible tickets &
                    hotels with free cancellation.
                  </p>
                  <a target="_blank" href="https://www.skyscanner.ro/">
                    <button className="btn btn btn-outline-warning">
                      <FontAwesomeIcon icon={faPlane} />
                      Plane tickets
                    </button>
                  </a>
                </figcaption>
              </figure>
            </div>
            <div className="col-lg-4">
              <figure className="rounded p-3 bg-white shadow-sm">
                <img
                  src="https://www.kindpng.com/picc/m/739-7395806_car-rental-marrakech-delivery-new-car-key-hd.png"
                  alt=""
                  className="w-100 card-img-top"
                ></img>
                <figcaption className="p-4 card-img-bottom">
                  <p className="mb-0 text-small text-muted font-italic">
                    Find It Cheaper And We'll Beat It. No Cancellation or
                    Amendment Fees! We Speak Your Language. No Credit Card Fees.
                    Unbeatable Prices..
                  </p>
                  <a target="_blank" href="https://www.rentalcars.com/">
                    <button className="btn btn btn-outline-warning">
                      <FontAwesomeIcon icon={faCar} />
                      Rent a car
                    </button>
                  </a>
                </figcaption>
              </figure>
            </div>
            <div className="col-lg-4">
              <figure className="rounded p-3 bg-white shadow-sm">
                <img
                  src="https://cdn.traveltripper.io/site-assets/192_680_9235/media/2017-11-10-161748/mts-what-to-pack-for-new-york-city-trip.jpg"
                  alt=""
                  className="w-100 card-img-top"
                ></img>
                <figcaption className="p-4 card-img-bottom">
                  <p className="mb-0 text-small text-muted font-italic">
                    SmarterTravel deliver expert travel tips, inspiring
                    destination stories, and timely travel news to feed your
                    passion for seeing the world.
                  </p>
                  <a target="_blank" href="https://www.smartertravel.com/">
                    <button className="btn  btn btn-outline-warning">
                      <FontAwesomeIcon icon={faTshirt} />
                      Tips & Tricks
                    </button>
                  </a>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TravelHints;
