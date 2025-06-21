import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Maximize, MapPin, Check } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function ApartmentDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Get apartment data from language file
  const apartment = t.apartmentDescriptions[id || ""];
  
  if (!apartment) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 container py-20">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Apartment Not Found</h1>
            <Button onClick={() => navigate(-1)}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Go Back
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 mt-20">
        {/* Hero Section */}
        <section className="relative">
          <div className="container max-w-6xl">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
              <img 
                src={apartment.image} 
                alt={apartment.name}
                className="w-full h-full object-cover mt-20 rounded-2xl"
              />
            </div>
            
            {/* Back Button */}
            <Button
              variant="outline"
              className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back
            </Button>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12">
          <div className="container max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  {apartment.name}
                </h1>
                
                <div className="flex flex-wrap gap-4 text-muted-foreground mb-6">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{apartment.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Maximize className="h-4 w-4 mr-1" />
                    <span>{apartment.size} m²</span>
                  </div>
                </div>

                <div className="prose dark:prose-invert max-w-none mb-8">
                  <h2 className="text-xl font-semibold mb-4">Description</h2>
                  <p className="text-muted-foreground">{apartment.description}</p>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">Features</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {apartment.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <Check className="h-4 w-4 mr-2 text-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 rounded-xl border p-6 bg-card">
                  <h2 className="text-xl font-semibold mb-4">Hubungi via WhatsApp</h2>
                  <p className="text-muted-foreground mb-6">
                    Tertarik dengan properti ini? Hubungi kami untuk informasi lebih lanjut atau untuk menjadwalkan konsultasi.
                  </p>
                  <Button 
                    className="w-full mb-4"
                    onClick={() => {
                      const phoneNumber = "6281227162297";
                      const message = `Halo, saya ingin konsultasi tentang jasa las ${apartment.name}.`;
                      window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
                    }}
                  >
                    Hubungi via WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <WhatsAppButton phoneNumber="6281332413700" />
    </div>
  );
} 