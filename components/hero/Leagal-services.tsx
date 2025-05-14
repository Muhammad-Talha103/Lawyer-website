import { FileText, Building2, Gavel, Scroll, FileSignature, Building } from "lucide-react"


const services = [
  {
    title: "Immigration assistance",
    description: "Lorem ipsum dolor sit amet consectetur. Vel mattis vel quam at.",
    icon: FileText,
    bgColor: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    title: "Intellectual property",
    description: "Lorem ipsum dolor sit amet consectetur. Vel mattis vel quam at.",
    icon: Building2,
    bgColor: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    title: "Complaince lawyer",
    description: "Lorem ipsum dolor sit amet consectetur. Vel mattis vel quam at.",
    icon: Gavel,
    bgColor: "bg-pink-50",
    iconColor: "text-pink-600",
  },
  {
    title: "Making a will",
    description: "Lorem ipsum dolor sit amet consectetur. Vel mattis vel quam at.",
    icon: Scroll,
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    title: "Legal documentation",
    description: "Lorem ipsum dolor sit amet consectetur. Vel mattis vel quam at.",
    icon: FileSignature,
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    title: "Estate planning",
    description: "Lorem ipsum dolor sit amet consectetur. Vel mattis vel quam at.",
    icon: Building,
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
  },
]

export default function LegalServicesPlatform() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-medium text-slate-700 mb-2">Experience a smarter</h1>
        <h2 className="text-4xl md:text-5xl font-bold text-red-600">legal solution platform in your hand</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-200">
        {services.slice(0, 3).map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-200 border-t border-gray-200">
        {services.slice(3, 6).map((service, index) => (
          <ServiceCard key={index + 3} service={service} />
        ))}
      </div>

      <div className="flex justify-center mt-12">
        
        <button className="hover:bg-[#dc1f28e0] bg-[#DC1F27] cursor-pointer  items-center text-white w-[224px] h-[50px] rounded-lg mt-5">
            Talk to lawyer
          </button>
      </div>
    </div>
  )
}

interface Service {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  bgColor: string;
  iconColor: string;
}

function ServiceCard({ service }: { service: Service }) {
  const { title, description, icon: Icon, bgColor, iconColor } = service

  return (
    <div className="p-6 md:p-8">
      <div className={`${bgColor} w-16 h-16 rounded-lg flex items-center justify-center mb-4`}>
        <Icon className={`${iconColor} w-6 h-6`} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
