
import React from "react";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AnimatedButton } from "./ui/AnimatedButton";
import { Mail, MapPin, Phone } from "lucide-react";
import { SocialLinks } from "./ui/SocialLinks";
import { useToast } from "@/components/ui/use-toast";

export const Contact: React.FC = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // In a real implementation, you would handle form submission to a backend service
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
  };

  const contactInfo = [
    { 
      icon: <Mail className="h-5 w-5" />, 
      label: "Email", 
      value: "hello@yourdomain.com",
      href: "mailto:hello@yourdomain.com"
    },
    { 
      icon: <Phone className="h-5 w-5" />, 
      label: "Phone", 
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    { 
      icon: <MapPin className="h-5 w-5" />, 
      label: "Location", 
      value: "San Francisco, CA",
      href: null
    },
  ];

  return (
    <section id="contact" className="section bg-gray-50 py-24">
      <div className="container">
        <SectionHeading subtitle="Get In Touch" title="Let's Build Something Together" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Reveal>
            <div className="bg-white rounded-xl shadow-subtle p-8 h-full border border-gray-100">
              <h3 className="text-xl font-semibold mb-6 font-display">Contact Information</h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <Reveal key={item.label} delay={index * 100} direction="up">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">{item.label}</p>
                        {item.href ? (
                          <a 
                            href={item.href} 
                            className="text-gray-900 font-medium hover:text-gray-600 transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-gray-900 font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
              
              <div className="pt-6 border-t border-gray-100">
                <h4 className="text-sm font-medium mb-4">Follow me on social media</h4>
                <SocialLinks />
              </div>
            </div>
          </Reveal>
          
          <Reveal delay={100}>
            <div className="bg-white rounded-xl shadow-subtle p-8 h-full border border-gray-100">
              <h3 className="text-xl font-semibold mb-6 font-display">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Enter your name"
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      required
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="What is this regarding?"
                    required
                    className="w-full"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project, questions, or feedback..."
                    required
                    className="w-full min-h-[120px]"
                  />
                </div>
                
                <AnimatedButton type="submit" className="w-full font-medium">
                  Send Message
                </AnimatedButton>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
