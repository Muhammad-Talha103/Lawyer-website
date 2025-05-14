import { Star } from "lucide-react"
import Image from "next/image"
import ellipce1 from "@/images/image1.png"


const testimonials = [
  {
    id: 1,
    name: "Yogesh Arora",
    company: "Smartyields Agro Pvt Ltd | Incorporation",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    testimonial:
      "Lorem ipsum dolor sit amet consectetur. Leo vitae velit egestas purus quis. In adipiscing pulvinar facilisi posuere. Mauris faucibus vitae tristique varius ut pellentesque. Eleifend elit.",
  },
  {
    id: 2,
    name: "Yogesh Arora",
    company: "Smartyields Agro Pvt Ltd | Incorporation",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    testimonial:
      "Lorem ipsum dolor sit amet consectetur. Leo vitae velit egestas purus quis. In adipiscing pulvinar facilisi posuere. Mauris faucibus vitae tristique varius ut pellentesque. Eleifend elit.",
  },
  {
    id: 3,
    name: "Yogesh Arora",
    company: "Smartyields Agro Pvt Ltd | Incorporation",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    testimonial:
      "Lorem ipsum dolor sit amet consectetur. Leo vitae velit egestas purus quis. In adipiscing pulvinar facilisi posuere. Mauris faucibus vitae tristique varius ut pellentesque. Eleifend elit.",
  },
]

export default function SuccessStories() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-medium text-slate-700 mb-2">Success Stories</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-red-600">To Know About Our Lawyers</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </section>
  )
}

interface Testimonial {
  id: number
  name: string
  company: string
  image: string
  rating: number
  testimonial: string
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const { name, company, image, testimonial: text, rating } = testimonial

  return (
    <div className="flex flex-col items-center">
      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4 relative z-10">
        <Image
          src={ellipce1}
          alt={name}
          width={100}
          height={100}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="border border-gray-100 rounded-lg shadow-sm p-6 -mt-12 pt-16 w-full">
        <h4 className="text-xl font-bold text-center">{name}</h4>
        <p className="text-gray-600 text-center mb-2">{company}</p>

        <div className="flex justify-center mb-4">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          ))}
        </div>

        <div className="relative">
          <span className="text-gray-200 text-6xl absolute top-0 left-0">"</span>
          <p className="text-gray-700 relative z-10 pl-6 pt-2">{text}</p>
        </div>
      </div>
    </div>
  )
}
