import Header from "@/components/organisms/Header";
import HeroSection from "@/components/organisms/HeroSection";
import AboutSection from "@/components/organisms/AboutSection";
import ServicesSection from "@/components/organisms/ServicesSection";
import StatsSection from "@/components/organisms/StatsSection";
import WorkflowSection from "@/components/organisms/WorkflowSection";
import CaseStudySection from "@/components/organisms/CaseStudySection";
import BlogSection from "@/components/organisms/BlogSection";
import Footer from "@/components/organisms/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />
      
   
      {/* About Section */}
      <AboutSection />


      {/* Stats Section */}
      <StatsSection />



      {/* Workflow Section */}
      <WorkflowSection />
      {/* Services Section */}
      <ServicesSection />


      {/* Case study */}
      <CaseStudySection />

      {/* Blog Section */}
      <BlogSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
