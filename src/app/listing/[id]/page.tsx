import { AiFillStar } from "react-icons/ai";
import listings from "@/app/assets/listings.json";
import ListingImages from "./components/ListingImages";
import BookingForm from "./components/BookingForm";
import ListingDetail from "./components/ListingDetail";
import ListingReviews from "./components/ListingReviews";
import { ListingProps } from "@/app/types/listing";
interface PageProps {
  params: {
    id: number;
  };
}

const getListing: (id: number) => ListingProps | undefined = (id) => {
  return listings.listings.find((listing) => listing.id === id);
};

const Listing: React.FC<PageProps> = async ({ params }) => {
  // const router = useRouter();
  const id: number = Number(params.id);
  const listing = await getListing(id);

  return (
    <div className="w-11/12 mt-6 mx-auto ">
      <h1 className="font-medium text-2xl">{listing?.title}</h1>
      <div className="flex items-center gap-3 text-sm font-semibold">
        <div className="flex items-center font-bold">
          <AiFillStar />
          <p>{listing!.review / 2}</p>
        </div>
        <p>{`${listing?.number_of_reviews} reviews`}</p>
        <p>{listing?.location}</p>
      </div>
      <ListingImages listing={listing} />
      <div className="mt-4">
        <div className="flex flex-wrap gap-32 justify-between">
          <ListingDetail listing={listing} />
          <BookingForm listing={listing} />
        </div>
      </div>
      <hr className="my-5" />
      <div className="">
        <ListingReviews listing={listing} />
      </div>
      <hr className="my-5" />
    </div>
  );
};

export default Listing;
