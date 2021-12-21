import { SmallItem } from "./SmallItem";

export const Items = () => {
  return (
    <div className="zack">
      {/* <h1>Products</h1> */}
      <SmallItem
        title="Books"
        desc="mohd Umair is a aouther of this book,this book is all about the science "
        price="Rs=499/-"
        url="https://m.media-amazon.com/images/I/81JAeyThZML._AC_UY218_.jpg"
      />
      <SmallItem
        title="Samsung Tv 56inch Tv"
        desc="this is a large size TV which covers the whole Room"
        price="Rs=49999/-"
        url="https://m.media-amazon.com/images/I/71m0Nn4vqOL._AC_UY218_.jpg"

      />
      <SmallItem
        title=" iphone 13ProMax Mobile"
        desc="8GB RAM, 256GB,COLOR-GREEN,OS13"
        price="Rs=180000/-"
        url="https://m.media-amazon.com/images/I/61IJBsHm97L._AC_UY218_.jpg"

      />
      <SmallItem
        title="Hp EliteBook Laptop"
        desc="4gb Ram, 512ssd,almond display,battery=9hours,light weight, color =Silver "
        price="Rs=44999/-"
        url="https://m.media-amazon.com/images/I/71SEOppr3RL._AC_UY218_.jpg"

      />
    </div>
  );
};
