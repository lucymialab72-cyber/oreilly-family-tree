"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import type { Document, PersonDocuments } from "@/data/documents";

// ═══════════════════════════════════════════════
// LIGHTBOX MODAL
// ═══════════════════════════════════════════════

interface LightboxProps {
  doc: Document;
  allDocs: Document[];
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

function Lightbox({ doc, allDocs, onClose, onNext, onPrev }: LightboxProps) {
  const currentIndex = allDocs.findIndex((d) => d.file === doc.file);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, onNext, onPrev]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-w-7xl w-full mx-2 flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white/70 hover:text-white text-2xl font-light transition-colors z-10"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Navigation arrows */}
        {allDocs.length > 1 && (
          <>
            <button
              onClick={onPrev}
              disabled={currentIndex === 0}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-white/70 hover:text-white text-3xl disabled:opacity-20 transition-colors z-10"
              aria-label="Previous"
            >
              ‹
            </button>
            <button
              onClick={onNext}
              disabled={currentIndex === allDocs.length - 1}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-white/70 hover:text-white text-3xl disabled:opacity-20 transition-colors z-10"
              aria-label="Next"
            >
              ›
            </button>
          </>
        )}

        {/* Document image */}
        <div className="bg-white p-3 shadow-2xl rounded-sm max-h-[90vh] overflow-auto cursor-zoom-in"
          onClick={(e) => {
            // Toggle zoom on click
            const img = e.currentTarget.querySelector('img');
            if (img) {
              if (img.style.maxHeight === 'none') {
                img.style.maxHeight = '85vh';
                img.style.maxWidth = '100%';
                e.currentTarget.style.cursor = 'zoom-in';
              } else {
                img.style.maxHeight = 'none';
                img.style.maxWidth = 'none';
                e.currentTarget.style.cursor = 'zoom-out';
              }
            }
            e.stopPropagation();
          }}
        >
          <img
            src={`/docs/${doc.file}`}
            alt={doc.caption}
            className="object-contain"
            style={{ display: "block", maxHeight: "85vh", maxWidth: "100%" }}
          />
        </div>
        <p className="text-white/50 text-xs mt-2 text-center">Click image to zoom in · Click again to zoom out</p>

        {/* Caption */}
        <div className="mt-4 text-center">
          <p className="text-white/90 text-sm font-medium">{doc.caption}</p>
          {allDocs.length > 1 && (
            <p className="text-white/40 text-xs mt-1">
              {currentIndex + 1} of {allDocs.length}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════
// THUMBNAIL CARD
// ═══════════════════════════════════════════════

interface ThumbnailProps {
  doc: Document;
  onClick: () => void;
}

function Thumbnail({ doc, onClick }: ThumbnailProps) {
  const [error, setError] = useState(false);

  return (
    <button
      onClick={onClick}
      className="group relative border border-border bg-white rounded-sm overflow-hidden hover:border-gold hover:shadow-md transition-all duration-200 text-left w-full"
    >
      {/* Image area */}
      <div className="aspect-[3/4] overflow-hidden bg-cream/50 relative">
        {!error ? (
          <img
            src={`/docs/${doc.file}`}
            alt={doc.caption}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={() => setError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-ink-muted text-xs p-2 text-center">
            <span>📄 Document</span>
          </div>
        )}
        {/* Photo badge */}
        {doc.isPhoto && (
          <div className="absolute top-1.5 left-1.5 bg-gold text-white text-[9px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded-sm">
            Photo
          </div>
        )}
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 text-white text-2xl transition-opacity">🔍</span>
        </div>
      </div>

      {/* Caption */}
      <div className="p-2">
        <p
          className="text-[10px] text-ink-light leading-tight line-clamp-2"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          {doc.caption}
        </p>
      </div>
    </button>
  );
}

// ═══════════════════════════════════════════════
// MAIN DOCUMENT GALLERY COMPONENT
// ═══════════════════════════════════════════════

interface DocumentGalleryProps {
  personDocs: PersonDocuments[];  // one or more people's docs to show
  title?: string;
}

export default function DocumentGallery({ personDocs, title = "Primary Source Documents" }: DocumentGalleryProps) {
  const [lightboxDoc, setLightboxDoc] = useState<Document | null>(null);
  const [lightboxDocs, setLightboxDocs] = useState<Document[]>([]);

  // Flatten all docs for lightbox navigation context
  const openLightbox = useCallback((doc: Document, contextDocs: Document[]) => {
    setLightboxDoc(doc);
    setLightboxDocs(contextDocs);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxDoc(null);
    setLightboxDocs([]);
  }, []);

  const nextDoc = useCallback(() => {
    if (!lightboxDoc) return;
    const idx = lightboxDocs.findIndex((d) => d.file === lightboxDoc.file);
    if (idx < lightboxDocs.length - 1) setLightboxDoc(lightboxDocs[idx + 1]);
  }, [lightboxDoc, lightboxDocs]);

  const prevDoc = useCallback(() => {
    if (!lightboxDoc) return;
    const idx = lightboxDocs.findIndex((d) => d.file === lightboxDoc.file);
    if (idx > 0) setLightboxDoc(lightboxDocs[idx - 1]);
  }, [lightboxDoc, lightboxDocs]);

  if (personDocs.length === 0 || personDocs.every((pd) => pd.docs.length === 0)) {
    return null;
  }

  const totalDocs = personDocs.reduce((sum, pd) => sum + pd.docs.length, 0);

  return (
    <>
      {lightboxDoc && (
        <Lightbox
          doc={lightboxDoc}
          allDocs={lightboxDocs}
          onClose={closeLightbox}
          onNext={nextDoc}
          onPrev={prevDoc}
        />
      )}

      <section className="mt-16">
        <div className="flex items-center gap-3 mb-8">
          <h2
            className="text-2xl font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {title}
          </h2>
          <span
            className="text-xs text-ink-muted bg-cream px-2 py-1 rounded-sm border border-border-light"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            {totalDocs} documents
          </span>
        </div>

        {personDocs.map((pd, groupIdx) => (
          pd.docs.length > 0 && (
            <div key={groupIdx} className="mb-12 last:mb-0">
              <h3
                className="text-lg font-semibold mb-1"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {pd.personName}
              </h3>
              <p
                className="text-xs text-ink-muted mb-4"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {pd.docs.length} document{pd.docs.length !== 1 ? "s" : ""} · Click any image to view full size
              </p>
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {pd.docs.map((doc, docIdx) => (
                  <Thumbnail
                    key={docIdx}
                    doc={doc}
                    onClick={() => openLightbox(doc, pd.docs)}
                  />
                ))}
              </div>
            </div>
          )
        ))}
      </section>
    </>
  );
}
