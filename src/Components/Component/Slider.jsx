
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const categories = [
  { name: "Cake & Milk", items: 11, image: "/images/cake.png", bg: "bg-green-50" },
  { name: "Organic Kiwi", items: 6, image: "/images/kiwi.png", bg: "bg-green-100" },
  { name: "Peach", items: 6, image: "/images/peach.png", bg: "bg-rose-50" },
  { name: "Read Apple", items: 10, image: "/images/apple.png", bg: "bg-orange-50" },
  { name: "Snacks", items: 11, image: "/images/snacks.png", bg: "bg-yellow-50" },
  { name: "Vegetables", items: 6, image: "/images/lettuce.png", bg: "bg-purple-50" },
  { name: "Strawberry", items: 10, image: "/images/strawberry.png", bg: "bg-green-50" },
  { name: "Black plum", items: 10, image: "/images/plum.png", bg: "bg-red-50" },
  { name: "Custard apple", items: 10, image: "/images/custard.png", bg: "bg-green-50" },
  { name: "Coffee & Tea", items: 11, image: "/images/coffee.png", bg: "bg-yellow-50" },
];

export default function Slider() {
  return (
    <div className="w-full max-w-7xl mx-auto py-8 relative">
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={20}
        navigation
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
        className="px-4"
      >
        {categories.map((cat, i) => (
          <SwiperSlide key={i}>
            <div
              className={`rounded-2xl shadow-sm p-4 text-center hover:shadow-md transition ${cat.bg}`}
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="mx-auto w-16 h-16 object-contain"
              />
              <h3 className="mt-2 font-semibold text-sm">{cat.name}</h3>
              <p className="text-gray-500 text-xs">{cat.items} items</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
