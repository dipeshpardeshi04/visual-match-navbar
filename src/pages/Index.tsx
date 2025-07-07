
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock, Leaf, Award, Users, Shield } from "lucide-react";

const Index = () => {
  const [email, setEmail] = useState("");

  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      title: "Founder & Lead Painter",
      description: "With over 15 years in the industry, John founded Top Painting Pros with a vision for quality and customer satisfaction.",
      image: "/lovable-uploads/1c278d26-bafe-4717-a9b1-d57eb22d3eca.png"
    },
    {
      id: 2,
      name: "Jane Smith",
      title: "Project Manager",
      description: "Jane coordinates projects with unmatched efficiency and flair, and with her budget-considering our skilled teams effectively.",
      image: null
    },
    {
      id: 3,
      name: "Robert Johnson",
      title: "Eco-Friendly Specialist",
      description: "Robert leads our commitment to sustainability, sourcing and using the best eco-friendly paints and materials.",
      image: null
    },
    {
      id: 4,
      name: "Emily Davis",
      title: "Senior Painter",
      description: "Emily's attention to detail and meticulous technique guarantee a flawless finish on every surface she touches.",
      image: null
    },
    {
      id: 5,
      name: "Michael Brown",
      title: "Customer Relations",
      description: "Michael is dedicated to ensuring a positive customer experience from the initial consultation to project completion.",
      image: null
    },
    {
      id: 6,
      name: "Sarah Wilson",
      title: "Color Consultant",
      description: "Sarah helps clients choose the perfect color palettes to bring their vision to life with expert guidance.",
      image: null
    }
  ];

  const values = [
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-500" />,
      title: "Professionalism",
      description: "We conduct every job with expertise, reliability, and respect."
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-500" />,
      title: "Trust",
      description: "Building lasting relationships through honesty and transparent communication."
    },
    {
      icon: <Award className="w-6 h-6 text-blue-500" />,
      title: "Quality",
      description: "Delivering superior craftsmanship and durable, beautiful results."
    },
    {
      icon: <Leaf className="w-6 h-6 text-blue-500" />,
      title: "Eco-Consciousness",
      description: "Prioritizing sustainable practices and environmentally friendly products."
    },
    {
      icon: <Users className="w-6 h-6 text-blue-500" />,
      title: "Customer Focus",
      description: "Centering client needs and satisfaction in every decision."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-500" />,
      title: "Integrity",
      description: "Operating with honesty and strong ethical principles."
    }
  ];

  const whyChooseUs = [
    {
      icon: <Award className="w-12 h-12 text-blue-500 mx-auto mb-4" />,
      title: "Quality Craftsmanship",
      description: "We use premium materials and employ skilled painters for a durable, beautiful finish."
    },
    {
      icon: <Clock className="w-12 h-12 text-blue-500 mx-auto mb-4" />,
      title: "Timely Completion",
      description: "We respect your time and scheduling, efficiently completing projects on schedule."
    },
    {
      icon: <Leaf className="w-12 h-12 text-blue-500 mx-auto mb-4" />,
      title: "Eco-Conscious Practices",
      description: "Committed to sustainable practices with eco-friendly, low-VOC paints and responsible disposal."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-900">Top Painting Pros</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Home</a>
                <a href="#services" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Services</a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">About Us</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Our Story */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h1>
              <p className="text-gray-600 leading-relaxed">
                Founded in 2020, Top Painting Pros started with a simple goal: to provide 
                exceptional painting services with unmatched reliability and a warm, 
                environmentally friendly practice. What began as a small local team has 
                grown into a trusted name, known for transforming spaces and exceeding 
                client expectations across the region. Our journey is built on a foundation of 
                hard work, dedication to craft, and a deep respect for the communities we 
                serve.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/1c278d26-bafe-4717-a9b1-d57eb22d3eca.png" 
                alt="Team meeting"
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission & Values</h2>
            <div className="max-w-2xl mx-auto">
              <div className="border-l-4 border-blue-500 pl-6">
                <p className="text-gray-600 italic text-lg">
                  To deliver exceptional painting services that enhance the beauty and value of 
                  properties, while upholding the highest standards of professionalism, trust, and 
                  environmental responsibility.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {value.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{value.title}:</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Meet Our Professional Team</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.id} className="text-center">
                <CardContent className="p-6">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                    {member.image ? (
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-blue-100 flex items-center justify-center">
                        <Users className="w-8 h-8 text-blue-500" />
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.title}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Top Painting Pros?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                {item.icon}
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Space?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and discover the difference professional 
            painting can make.
          </p>
          <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
            Request a Free Quote
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Top Painting Pros</h3>
            <p className="text-gray-600 mb-6">Stay Updated with Our Painting Tips & Offers</p>
            
            <div className="max-w-md mx-auto flex gap-2">
              <Input 
                type="email" 
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
              />
              <Button className="bg-blue-600 hover:bg-blue-700">Subscribe</Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Services</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600">Interior Painting</a></li>
                <li><a href="#" className="hover:text-blue-600">Exterior Painting</a></li>
                <li><a href="#" className="hover:text-blue-600">Commercial Projects</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600">Blog</a></li>
                <li><a href="#" className="hover:text-blue-600">FAQ</a></li>
                <li><a href="#" className="hover:text-blue-600">Testimonials</a></li>
                <li><a href="#" className="hover:text-blue-600">Gallery</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600">About Us</a></li>
                <li><a href="#" className="hover:text-blue-600">Our Team</a></li>
                <li><a href="#" className="hover:text-blue-600">Careers</a></li>
                <li><a href="#" className="hover:text-blue-600">Contact Info</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Support</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600">Help Center</a></li>
                <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-600">Terms of Service</a></li>
                <li><a href="#" className="hover:text-blue-600">Sitemap</a></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t text-sm text-gray-600">
            <p>© 2024 Top Painting Pros • Privacy Policy • Terms of Service</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <span>English</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
