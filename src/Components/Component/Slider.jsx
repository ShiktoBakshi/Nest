
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const categories = [
  {
    name: " Blackberry",
    items: 11,
    image: "https://i.ibb.co.com/jvRLZS8v/Figure-5.png",
    bg: "bg-green-50",
  },
  {
    name: "Organic Turmeric",
    items: 6,
    image: "https://i.ibb.co.com/zVvjTYGf/Figure-1.png",
    bg: "bg-green-100",
  },
  {
    name: " Cabbage",
    items: 6,
    image: "https://i.ibb.co.com/hFpFGNPw/Figure-2.png",
    bg: "bg-rose-50",
  },
  {
    name: "Strawberry",
    items: 10,
    image: "https://i.ibb.co.com/CpWSrS14/Figure-3.png",
    bg: "bg-orange-50",
  },
  {
    name: " Malta",
    items: 11,
    image: "https://i.ibb.co.com/HDZrQq4p/Figure-6.png",
    bg: "bg-yellow-50",
  },
  {
    name: " Burger",
    items: 6,
    image: "https://i.ibb.co.com/CpF6S2Ct/Figure-7.png",
    bg: "bg-purple-50",
  },
  {
    name: "Kiwi berry",
    items: 10,
    image: "https://i.ibb.co.com/p6DQF02G/Figure-8.png",
    bg: "bg-green-50",
  },
  {
    name: "Black plum",
    items: 10,
    image: "https://i.ibb.co.com/nqSbSVNm/Figure-9.png",
    bg: "bg-red-50",
  },
  {
    name: "Custard apple",
    items: 10,
    image: "https://i.ibb.co.com/X1tXpVC/Figure-10.png",
    bg: "bg-green-50",
  },
  {
    name: "Coffee & Tea",
    items: 11,
    image: "https://i.ibb.co.com/gMhftbnj/Figure-4.png",
    bg: "bg-yellow-50",
  },
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
