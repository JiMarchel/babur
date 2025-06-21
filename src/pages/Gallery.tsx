import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import Helm from "@/components/Helm";

// Sample gallery images
const galleryImages = [
  {
    id: 1,
    src: "gallery/1.jpeg",
    alt: "Tenda Radius Modern",
    width: 1600,
    height: 717,
  },
  {
    id: 2,
    src: "gallery/2.jpeg",
    alt: "Kanopi Carport Minimalis",
    width: 717,
    height: 1600,
  },
  {
    id: 3,
    src: "gallery/3.jpeg",
    alt: "Tenda",
    width: 777,
    height: 1600,
  },
  {
    id: 4,
    src: "gallery/4.jpeg",
    alt: "Tenda",
    width: 777,
    height: 1600,
  },
  {
    id: 5,
    src: "gallery/5.jpeg",
    alt: "Tenda Setengah Radius",
    width: 1600,
    height: 777,
  },
  {
    id: 6,
    src: "gallery/6.jpeg",
    alt: "Tenda Bulat Exclusive",
    width: 777,
    height: 1600,
  },
  {
    id: 7,
    src: "gallery/7.jpeg",
    alt: "Tenda Melengkung",
    width: 800,
    height: 600,
  },
  {
    id: 8,
    src: "gallery/8.jpeg",
    alt: "Tenda Melengkung",
    width: 800,
    height: 600,
  },
  {
    id: 9,
    src: "gallery/9.jpeg",
    alt: "Tenda Melengkung",
    width: 800,
    height: 600,
  },
  {
    id: 10,
    src: "gallery/10.jpeg",
    alt: "Tenda Melengkung",
    width: 800,
    height: 600,
  },
  {
    id: 11,
    src: "gallery/11.jpeg",
    alt: "Tenda Melengkung",
    width: 800,
    height: 600,
  },
  {
    id: 12,
    src: "gallery/12.jpeg",
    alt: "Tenda Melengkung",
    width: 800,
    height: 600,
  },
  {
    id: 13,
    src: "gallery/13.jpeg",
    alt: "Tenda Melengkung",
    width: 800,
    height: 600,
  },
  {
    id: 14,
    src: "gallery/14.jpeg",
    alt: "Tenda Melengkung",
    width: 800,
    height: 600,
  },
  {
    id: 15,
    src: "gallery/15.jpeg",
    alt: "Tenda Melengkung",
    width: 800,
    height: 600,
  },
  {
    id: 16,
    src: "gallery/16.jpeg",
    alt: "Tenda Melengkung",
    width: 800,
    height: 600,
  },
  {
    id: 17,
    src: "gallery/17.jpeg",
    alt: "Tenda Melengkung",
    width: 800,
    height: 600,
  },
  {
    id: 18,
    src: "gallery/18.jpeg",
    alt: "Tenda Melengkung",
    width: 800,
    height: 600,
  },
  {
    id: 19,
    src: "gallery/19.jpeg",
    alt: "Tenda Melengkung",
    width: 800,
    height: 600,
  },
  {
    id: 20,
    src: "gallery/20.jpeg",
    alt: "Tenda Melengkung",
    width: 800,
    height: 600,
  },
  {
    id: 21,
    src: "gallery/21.jpeg",
    alt: "Tenda Melengkung",
    width: 800,
    height: 600,
  },
  {
    id: 22,
    src: "gallery/22.jpeg",
    alt: "Tenda Melengkung",
    width: 800,
    height: 600,
  },
  {
    id: 23,
    src: "gallery/23.jpeg",
    alt: "Tenda Melengkung",
    width: 800,
    height: 600,
  },
  {
    id: 24,
    src: "gallery/24.jpeg",
    alt: "Tenda Melengkung",
    width: 800,
    height: 600,
  },
  {
    id: 25,
    src: "gallery/25.jpeg",
    alt: "Tenda Melengkung",
    width: 800,
    height: 600,
  },
  {
    id: 26,
    src: "gallery/26.jpeg",
    alt: "Tenda Melengkung",
    width: 800,
    height: 600,
  },
  {
    id: 27,
    src: "gallery/27.jpeg",
    alt: "Tenda Melengkung",
    width: 800,
    height: 600,
  },
  {
    id: 28,
    src: "gallery/28.jpeg",
    alt: "Tenda Melengkung",
    width: 800,
    height: 600,
  },
  {
    id: 29,
    src: "gallery/29.jpeg",
    alt: "Tenda Melengkung",
    width: 800,
    height: 600,
  },
  {
    id: 30,
    src: "gallery/30.jpeg",
    alt: "Tenda Melengkung",
    width: 800,
    height: 600,
  },
];

export default function Gallery() {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filteredImages, setFilteredImages] = useState(galleryImages);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  // Handle lightbox navigation
  const navigateGallery = (direction: "prev" | "next") => {
    if (selectedImage === null) return;

    const currentIndex = filteredImages.findIndex(
      (img) => img.id === selectedImage
    );
    let newIndex;

    if (direction === "prev") {
      newIndex =
        currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex =
        currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }

    setSelectedImage(filteredImages[newIndex].id);
  };

  // Handle keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;

      if (e.key === "Escape") {
        setSelectedImage(null);
      } else if (e.key === "ArrowLeft") {
        navigateGallery("prev");
      } else if (e.key === "ArrowRight") {
        navigateGallery("next");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, filteredImages]);

  const selectedImageData = filteredImages.find((img) => img.id === selectedImage);

  return (
    <>
      <Helm
        content="Galeri foto tenda membran Surabaya - koleksi kerja kami dalam pembuatan dan pemasangan tenda membran berkualitas tinggi untuk berbagai acara dan kebutuhan bisnis."
        href="/gallery"
        title="Galeri Tenda Membran"
      />
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1 pt-20">
          {/* Header Section */}
          <section className="relative py-20 bg-gradient-to-r from-sea-light to-white dark:from-sea-dark dark:to-background overflow-hidden">
            <div className="container relative z-10">
              <div className="max-w-3xl mx-auto text-center animate-fade-in">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  {t.gallery.title}
                </h1>
                <p className="text-muted-foreground text-lg mb-6">
                  {t.gallery.subtitle}
                </p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
              <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-primary/50 blur-3xl" />
              <div className="absolute bottom-10 right-40 w-48 h-48 rounded-full bg-sea-light blur-3xl" />
            </div>
          </section>

          <section className="py-8 px-2">
            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredImages.map((image, index) => (
                <div
                  key={image.id}
                  className="relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer group animate-fade-in"
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                  onClick={() => setSelectedImage(image.id)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    title={image.alt}
                    loading="lazy"
                    width={image.width}
                    height={image.height}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white">{image.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>

        <Footer />

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in">
            <button
              className="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-white/10 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </button>

            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-4 rounded-full hover:bg-white/10 transition-colors"
              onClick={() => navigateGallery("prev")}
            >
              <span className="sr-only">Previous</span>
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <div className="max-w-5xl max-h-[80vh] overflow-hidden">
              {selectedImageData && (
                <img
                  src={selectedImageData.src}
                  alt={selectedImageData.alt}
                  title={selectedImageData.alt}
                  width={selectedImageData.width}
                  height={selectedImageData.height}
                  className="max-w-full max-h-[80vh] object-contain"
                />
              )}
            </div>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-4 rounded-full hover:bg-white/10 transition-colors"
              onClick={() => navigateGallery("next")}
            >
              <span className="sr-only">Next</span>
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </>
  );
}
