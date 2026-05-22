import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";
import { Background } from "@/components/portfolio/Background";

export default function NotFound() {
  return (
    <div className="relative min-h-screen w-full grid place-items-center px-6">
      <Background />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="neon-panel max-w-md w-full p-8 text-center space-y-4"
      >
        <div className="flex items-center justify-center gap-3 text-neon-cyan">
          <AlertCircle className="h-8 w-8 text-[var(--neon-cyan)]" />
          <h1 className="font-display text-3xl text-white">404</h1>
        </div>
        <p className="font-hand text-lg text-white/80">
          This page wandered off into the void.
        </p>
        <a
          href="/"
          className="code-tag code-tag--default inline-block hover:opacity-100"
        >
          <span className="code-tag__bracket">{"<"}</span>
          <span className="code-tag__slash">/</span>
          <span className="code-tag__name">home</span>
          <span className="code-tag__bracket">{">"}</span>
        </a>
      </motion.div>
    </div>
  );
}
