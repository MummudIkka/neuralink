import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Mission from "@/components/Mission";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import FloatingElements from "@/components/FloatingElements";

export default function Home() {
  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-cyan-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>
      </div>

      {/* Floating 3D Elements */}
      <FloatingElements />

      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <Mission />
        <CaseStudies />
        <Testimonials />
        <CallToAction />
      </div>
    </div>
  );
}
