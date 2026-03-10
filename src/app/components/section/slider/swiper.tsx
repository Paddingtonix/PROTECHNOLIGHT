"use client"

import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay, Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { BASE_PATH } from "@/app/static-const"

const slides = [
  { img: `${BASE_PATH}/slider/1.jpg`, alt: "slide 1" },
  { img: `${BASE_PATH}/slider/2.jpg`, alt: "slide 2" },
  { img: `${BASE_PATH}/slider/3.jpg`, alt: "slide 3" },
  { img: `${BASE_PATH}/slider/4.jpg`, alt: "slide 4" },
  { img: `${BASE_PATH}/slider/5.jpg`, alt: "slide 5" },
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