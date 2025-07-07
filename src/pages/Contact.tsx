
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail, Phone } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    question: ""
  });

  const [email, setEmail] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const teamMembers = [
    {
      name: "Sarah Johnson",
      title: "Client Service Manager",
      description: "Sarah is your first point of contact, ensuring your questions are answered and you feel comfortable throughout the process.",
      image: null
    },
    {
      name: "David Chen",
      title: "Project Coordinator",
      description: "David oversees project logistics, ensuring solid teamwork and seamlessly positive outcomes.",
      image: null
    },
    {
      name: "Maria Rodriguez",
      title: "Lead Painter & Consultant",
      description: "Maria brings years of experience and artistic vision, happy to discuss project specifics and offer honest advice.",
      image: null
    },
    {
      name: "James Smith",
      title: "Customer Support Specialist",
      description: "James is here to assist with scheduling and any day-to-day queries you might have.",
      image: null
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
                <a href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Home</a>
                <a href="#services" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Services</a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">About Us</a>
                <a href="/contact" className="text-blue-600 px-3 py-2 text-sm font-medium border-b-2 border-blue-600">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Drop Us a Line */}
      <section 
        className="py-16 bg-gradient-to-b from-gray-100 to-white relative"
        style={{
          backgroundImage: 'url("/lovable-uploads/22af506e-d16b-46fd-bd47-bb05b9504d84.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'soft-light'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/80 to-white/80"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Drop Us a Line</h1>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            We'd love to hear from you! Reach out for a free consultation or any questions you have.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-600" />
              <span>123 Paintbrush Lane, Anytown, CA 91234</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-600" />
              <span>contact@toppaintingpros.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-600" />
              <span>(555) 123-4567</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Us</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="w-full"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className="w-full"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="question" className="block text-sm font-medium text-gray-700 mb-2">
                    Question
                  </label>
                  <Textarea
                    id="question"
                    name="question"
                    value={formData.question}
                    onChange={handleInputChange}
                    placeholder="Enter questions or feedback"
                    className="w-full min-h-[120px]"
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  SUBMIT
                </Button>
              </form>
            </div>

            <div className="relative">
              <img 
                src="/lovable-uploads/22af506e-d16b-46fd-bd47-bb05b9504d84.png" 
                alt="Paint brushes and color samples"
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Client Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Meet Our Client Team</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                    <div className="w-full h-full bg-blue-100 flex items-center justify-center">
                      <div className="w-8 h-8 bg-blue-300 rounded-full"></div>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3 text-sm">{member.title}</p>
                  <p className="text-gray-600 text-xs leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {[
              "What types of painting services do you offer?",
              "How long does a typical painting project take?",
              "Are your paints eco-friendly?",
              "Do you provide free estimates?",
              "What areas do you serve?",
              "How do I prepare for a painting project?",
              "Is there a warranty on your work?",
              "Can you help with color selection?",
              "What payment methods do you accept?",
              "How do you handle unexpected issues during painting?"
            ].map((question, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <button className="w-full text-left flex justify-between items-center py-2 text-gray-700 hover:text-blue-600">
                  <span className="font-medium">{question}</span>
                  <span className="text-gray-400">▼</span>
                </button>
              </div>
            ))}
          </div>
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
                <li><a href="#" className="hover:text-blue-600">Residential Painting</a></li>
                <li><a href="#" className="hover:text-blue-600">Commercial Painting</a></li>
                <li><a href="#" className="hover:text-blue-600">Interior Painting</a></li>
                <li><a href="#" className="hover:text-blue-600">Exterior Painting</a></li>
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
                <li><a href="#" className="hover:text-blue-600">Sustainability</a></li>
                <li><a href="#" className="hover:text-blue-600">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Support</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600">Contact Us</a></li>
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

export default Contact;
