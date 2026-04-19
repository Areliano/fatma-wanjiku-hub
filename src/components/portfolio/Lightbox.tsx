import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type LightboxImage = { src: string; title: string; description?: string };

type LightboxProps = {
  images: LightboxImage[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

const Lightbox = ({ images, index, onClose, onPrev, onNext }: LightboxProps) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  const current = images[index];
  if (!current) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-secondary/95 backdrop-blur-md animate-fade-in grid place-items-center p-4 sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={current.title}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-11 h-11 rounded-full bg-card/95 hover:bg-card text-foreground grid place-items-center shadow-elegant transition-smooth z-10"
        aria-label="Close"
      >
        <X size={20} />
      </button>

      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-card/95 hover:bg-card text-foreground grid place-items-center shadow-elegant transition-smooth z-10"
            aria-label="Previous"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-card/95 hover:bg-card text-foreground grid place-items-center shadow-elegant transition-smooth z-10"
            aria-label="Next"
          >
            <ChevronRight size={22} />
          </button>
        </>
      )}

      <div
        className="relative max-w-6xl w-full max-h-[88vh] flex flex-col items-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={current.src}
          alt={current.title}
          className="max-h-[78vh] w-auto max-w-full object-contain rounded-2xl shadow-elegant animate-scale-in"
        />
        <div className="text-center text-primary-foreground">
          <h3 className="font-bold text-lg">{current.title}</h3>
          {current.description && (
            <p className="text-sm opacity-80 mt-1">{current.description}</p>
          )}
          <p className="text-xs opacity-60 mt-2">
            {index + 1} / {images.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
