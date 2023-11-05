import Image from "next/image";
import Navbar from "./components/Navbar";
import Listing from "./components/Listing";
import img from "./assets/cabin.jpeg";
import listing from "./assets/listings.json";

export default function Home() {
  return (
    <div className="w-11/12 mt-6 mx-auto flex flex-wrap justify-center">
      {listing.listings.map((list) => (
        <div className="pb-4 pr-3">
          <Listing
            id={list.id}
            title={list.title}
            description={list.description}
            location={list.location}
            price={list.price}
            imageUrl={`https://source.unsplash.com/random/500x500?${list.type}`}
            numberOfReviews={list.number_of_reviews}
            reviews={list.review}
          />
        </div>
      ))}
    </div>
  );
}
