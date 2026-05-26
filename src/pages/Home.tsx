import { motion } from "framer-motion";
import { Background } from "@/components/portfolio/Background";
import { Logo } from "@/components/portfolio/Logo";
import { NavigationBar } from "@/components/portfolio/NavigationBar";
import { MobileMenu } from "@/components/portfolio/MobileMenu";
import { SocialNav } from "@/components/portfolio/SocialNav";
import { FixedDiscPlayer } from "@/components/portfolio/FixedDiscPlayer";
import { HudEffects } from "@/components/portfolio/HudEffects";
import { HomeSection } from "@/components/portfolio/sections/HomeSection";
import { AboutSection } from "@/components/portfolio/sections/AboutSection";
import { ProjectsSection } from "@/components/portfolio/sections/ProjectsSection";
import { ExperienceSection } from "@/components/portfolio/sections/ExperienceSection";
import { CertificationsSection } from "@/components/portfolio/sections/CertificationsSection";
import { YouTubeSection } from "@/components/portfolio/sections/YouTubeSection";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative min-h-screen w-full overflow-x-hidden"
    >
      <Background />
      <Logo />
      <NavigationBar />
      <MobileMenu />
      <SocialNav />
      <FixedDiscPlayer />
      <HudEffects />

      <div className="portfolio-page pt-20 sm:pt-24 md:pt-40 pb-24 sm:pb-28 md:pb-32 space-y-4">
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <CertificationsSection />
        <YouTubeSection />
      </div>

      <footer className="portfolio-footer relative z-10 w-full px-4 py-10 sm:py-12 md:py-14 text-center">
        <p className="portfolio-footer__text font-display text-white/45 text-xs sm:text-sm md:text-base lg:text-lg break-words">
          <span className="opacity-60">{"<"}</span>
          <span className="px-1.5 sm:px-2 md:px-3">
            ThatInsaneGuy &nbsp; &times; &nbsp; Cursor.AI
          </span>
          <span className="opacity-60">{"/>"}</span>
        </p>
      </footer>
 
 
 
    </motion.main>
  );
}
