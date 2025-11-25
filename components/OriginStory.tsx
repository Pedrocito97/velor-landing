"use client";

import { motion } from "framer-motion";

interface Stat {
  value: string;
  label: string;
}

interface OriginStoryProps {
  title: string;
  highlight?: string;
  paragraphs: string[];
  stats?: Stat[];
  image?: string;
  imagePosition?: "left" | "right";
  darkMode?: boolean;
}

export function OriginStory({
  title,
  highlight,
  paragraphs,
  stats,
  image,
  imagePosition = "right",
  darkMode = false,
}: OriginStoryProps) {
  const bgClass = darkMode ? "bg-mocha" : "bg-ivory";
  const textClass = darkMode ? "text-ivory" : "text-mocha";
  const mutedClass = darkMode ? "text-ivory/70" : "text-text-muted";

  const ContentSection = () => (
    <motion.div
      className="flex flex-col justify-center"
      initial={{ opacity: 0, x: imagePosition === "right" ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
    >
      <p className="text-velor-gold tracking-[0.4em] text-xs mb-4">
        THE STORY
      </p>
      <h2 className={`font-display text-4xl md:text-5xl ${textClass} tracking-[0.08em] mb-6`}>
        {title}
      </h2>

      {highlight && (
        <p className={`font-display text-xl ${textClass} italic mb-8`}>
          &ldquo;{highlight}&rdquo;
        </p>
      )}

      {/* Stats */}
      {stats && stats.length > 0 && (
        <div className="flex gap-8 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl text-velor-gold mb-1">
                {stat.value}
              </p>
              <p className={`${mutedClass} text-xs tracking-[0.2em]`}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Paragraphs */}
      <div className="space-y-4">
        {paragraphs.map((para, index) => (
          <p key={index} className={`${mutedClass} leading-relaxed`}>
            {para}
          </p>
        ))}
      </div>
    </motion.div>
  );

  const ImageSection = () => (
    <motion.div
      className="relative"
      initial={{ opacity: 0, x: imagePosition === "right" ? 40 : -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        {image ? (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${image}')` }}
          />
        ) : (
          <div className="absolute inset-0 bg-mocha/20" />
        )}
        {/* Overlay */}
        <div className="absolute inset-0 bg-velor-gold/5" />
      </div>
      {/* Corner accents */}
      <div className="absolute -top-4 -left-4 w-16 h-16 border-l-2 border-t-2 border-velor-gold/30" />
      <div className="absolute -bottom-4 -right-4 w-16 h-16 border-r-2 border-b-2 border-velor-gold/30" />
    </motion.div>
  );

  return (
    <section className={`relative py-24 md:py-32 ${bgClass} overflow-hidden`}>
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {imagePosition === "left" ? (
            <>
              <ImageSection />
              <ContentSection />
            </>
          ) : (
            <>
              <ContentSection />
              <ImageSection />
            </>
          )}
        </div>
      </div>
    </section>
  );
}
