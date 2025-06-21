import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ApartmentCard, { ApartmentProps } from "@/components/ApartmentCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CloudSunRain,
  HandCoins,
  BriefcaseBusiness,
  Star,
  Tent,
  ThumbsUp,
  MessageCircleQuestion,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ContactForm } from "@/components/ContactForm";
import Helm from "@/components/Helm";

// Featured apartments data from language file
const createFeaturedApartments = (t: any): ApartmentProps[] => {
  return [
    {
      id: "1",
      name: t.apartmentDescriptions["1"].name,
      description: t.apartmentDescriptions["1"].description,
      price: 180,
      capacity: t.apartmentDescriptions["1"].capacity,
      size: parseInt(t.apartmentDescriptions["1"].size),
      image: t.apartmentDescriptions["1"].image,
      location: t.apartmentDescriptions["1"].location,
      features: t.apartmentDescriptions["1"].features,
    },
    {
      id: "2",
      name: t.apartmentDescriptions["2"].name,
      description: t.apartmentDescriptions["2"].description,
      price: 250,
      capacity: t.apartmentDescriptions["2"].capacity,
      size: parseInt(t.apartmentDescriptions["2"].size),
      image: t.apartmentDescriptions["2"].image,
      location: t.apartmentDescriptions["2"].location,
      features: t.apartmentDescriptions["2"].features,
    },
    {
      id: "3",
      name: t.apartmentDescriptions["3"].name,
      description: t.apartmentDescriptions["3"].description,
      price: 150,
      capacity: t.apartmentDescriptions["3"].capacity,
      size: parseInt(t.apartmentDescriptions["3"].size),
      image: t.apartmentDescriptions["3"].image,
      location: t.apartmentDescriptions["3"].location,
      features: t.apartmentDescriptions["3"].features,
    },
  ];
};

export default function Index() {
  const { t } = useLanguage();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  // Feature items
  const features = [
    {
      icon: <ThumbsUp className="h-8 w-8 text-primary" />,
      title: t.home.amenities.features.beachfront.title,
      description: t.home.amenities.features.beachfront.description,
    },
    {
      icon: <Star className="h-8 w-8 text-primary" />,
      title: t.home.amenities.features.pools.title,
      description: t.home.amenities.features.pools.description,
    },
    {
      icon: <BriefcaseBusiness className="h-8 w-8 text-primary" />,
      title: t.home.amenities.features.restaurant.title,
      description: t.home.amenities.features.restaurant.description,
    },
    {
      icon: <MessageCircleQuestion className="h-8 w-8 text-primary" />,
      title: t.home.amenities.features.wifi.title,
      description: t.home.amenities.features.wifi.description,
    },
    {
      icon: <HandCoins className="h-8 w-8 text-primary" />,
      title: t.home.amenities.features.bar.title,
      description: t.home.amenities.features.bar.description,
    },
    {
      icon: <CloudSunRain className="h-8 w-8 text-primary" />,
      title: t.home.amenities.features.location.title,
      description: t.home.amenities.features.location.description,
    },
  ];

  const featuredApartments = createFeaturedApartments(t);

  return (
    <>
      <Helm
        content="Jasa Pembuatan dan Pemasangan Tenda Membran Surabaya - Spesialis Las Tenda Membran Berkualitas"
        href="/"
        title="Beranda"
        ogImage="/background-beranda.png"
      />
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1">
          {/* Hero Section */}
          <HeroSection />

          {/* WhatsApp Button */}
          <WhatsAppButton phoneNumber="6281227162297" />

          {/* Welcome Section */}
          <section id="welcome" className="section">
            <div className="container">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="animate-fade-in [animation-delay:100ms]">
                  <span className="text-sm text-primary font-medium uppercase tracking-wider">
                    {t.home.welcome.subtitle}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                    {t.home.welcome.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {t.home.welcome.description1}
                  </p>
                  <p className="text-muted-foreground mb-8">
                    {t.home.welcome.description2}
                  </p>
                  <Button
                    className="btn-primary"
                    onClick={() => {
                      const phoneNumber = "6281227162297"; // Phone number without special characters
                      const message =
                        "Halo, saya ingin konsultasi tentang jasa las"; // Pre-defined message
                      window.open(
                        `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                          message
                        )}`,
                        "_blank"
                      );
                    }}
                  >
                    {t.home.welcome.learnMore}{" "}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                <div className="relative animate-fade-in [animation-delay:300ms]">
                  <div className="aspect-[4/2.2] rounded-2xl overflow-hidden">
                    <img
                      src="/background-beranda.png"
                      alt="Seaside view"
                      className="w-full h-full object-cover bg-cover bg-center rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Booking Form Section */}
          <section className="relative py-20 bg-gradient-to-r from-sea-light to-white dark:from-sea-dark dark:to-background overflow-hidden">
            <div className="container relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="animate-fade-in">
                  <span className="text-sm text-primary font-medium uppercase tracking-wider">
                    {t.home.booking.subtitle}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                    {t.home.booking.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {t.home.booking.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {t.home.booking.benefits.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3">
                          <ArrowRight className="h-3 w-3" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-6 md:text-4xl md:mt-2 lg:mt-12">
                    {t.contact.sendMessage}
                  </h2>
                  <ContactForm />
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
              <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-primary/50 blur-3xl" />
              <div className="absolute bottom-10 right-40 w-48 h-48 rounded-full bg-sea-light blur-3xl" />
            </div>
          </section>

          {/* Featured Apartments */}
          <section className="section">
            <div className="container">
              <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
                <span className="text-sm text-primary font-medium uppercase tracking-wider">
                  {t.home.featuredApartments.subtitle}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                  {t.home.featuredApartments.title}
                </h2>
                <p className="text-muted-foreground">
                  {t.home.featuredApartments.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredApartments.map((apartment, index) => (
                  <div
                    key={apartment.id}
                    className="animate-fade-in"
                    style={{
                      animationDelay: `${(index + 1) * 100}ms`,
                    }}
                  >
                    <ApartmentCard apartment={apartment} />
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <Button asChild className="btn-primary">
                  <Link to="/apartments">
                    {t.home.featuredApartments.viewAll}{" "}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <TestimonialsSection />

          {/* Features Section */}
          <section className="section bg-card">
            <div className="container">
              <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
                <span className="text-sm text-primary font-medium uppercase tracking-wider">
                  {t.home.amenities.subtitle}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                  {t.home.amenities.title}
                </h2>
                <p className="text-muted-foreground">
                  {t.home.amenities.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="glass-card p-6 rounded-xl animate-fade-in flex flex-col items-center text-center"
                    style={{
                      animationDelay: `${(index + 1) * 100}ms`,
                    }}
                  >
                    <div className="mb-4 p-3 rounded-full bg-primary/10">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="relative py-24 bg-primary/5">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  {t.home.cta.title}
                </h2>
                <p className="text-muted-foreground mb-8">
                  {t.home.cta.description}
                </p>
                <Button
                  size="lg"
                  className="btn-primary"
                  onClick={() => {
                    const phoneNumber = "6281227162297";
                    const message =
                      "Halo, saya ingin konsultasi tentang jasa las";
                    window.open(
                      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                        message
                      )}`,
                      "_blank"
                    );
                  }}
                >
                  {t.home.cta.bookNow}
                </Button>
              </div>
            </div>

            {/* Decorative waves */}
            <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
              <svg
                className="absolute bottom-0 w-full h-24 fill-background"
                preserveAspectRatio="none"
                viewBox="0 0 1440 74"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0,37.1L40,34.5C80,32,160,27,240,29.6C320,32,400,42,480,42.9C560,44,640,35,720,32.1C800,30,880,34,960,40.8C1040,47,1120,56,1200,56.6C1280,57,1360,48,1400,43.3L1440,39.1L1440,74L1400,74C1360,74,1280,74,1200,74C1120,74,1040,74,960,74C880,74,800,74,720,74C640,74,560,74,480,74C400,74,320,74,240,74C160,74,80,74,40,74L0,74Z"
                  className="animate-wave opacity-50"
                />
                <path
                  d="M0,37.1L40,34.5C80,32,160,27,240,29.6C320,32,400,42,480,42.9C560,44,640,35,720,32.1C800,30,880,34,960,40.8C1040,47,1120,56,1200,56.6C1280,57,1360,48,1400,43.3L1440,39.1L1440,74L1400,74C1360,74,1280,74,1200,74C1120,74,1040,74,960,74C880,74,800,74,720,74C640,74,560,74,480,74C400,74,320,74,240,74C160,74,80,74,40,74L0,74Z"
                  className="animate-wave opacity-100 [animation-delay:-4s]"
                />
              </svg>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
