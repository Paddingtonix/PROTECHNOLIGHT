"use client"

import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay, Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const slides = [
  { img: "/slider/1.jpg", alt: "slide 1" },
  { img: "/slider/2.jpg", alt: "slide 2" },
  { img: "/slider/3.jpg", alt: "slide 3" },
  { img: "/slider/4.jpg", alt: "slide 3" },
  { img: "/slider/5.jpg", alt: "slide 3" },
]

export default function HeroSlider() {
  return (
    <div className="hero-slider">
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            loop
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <div className="hero-slider__image">
                        <Image
                            src={slide.img}
                            alt={slide.alt}
                            fill
                            priority={index === 0}
                        />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
  )
}