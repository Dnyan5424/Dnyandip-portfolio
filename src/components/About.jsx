import React from "react";
import { motion } from "framer-motion";
import {
  FaBrain,
  FaLightbulb,
  FaPeopleArrows,
  FaRocket,
} from "react-icons/fa6";
import { profileImage } from "../assets/images";

const cards = [
  {
    title: "Problem Solving",
    description:
      "I break vague ideas into systems, priorities, and shippable milestones.",
    Icon: FaBrain,
  },
  {
    title: "Creativity",
    description:
      "I care about interface feel, narrative structure, and product differentiation.",
    Icon: FaLightbulb,
  },
  {
    title: "Teamwork",
    description:
      "I collaborate with clarity, ship iteratively, and keep feedback loops tight.",
    Icon: FaPeopleArrows,
  },
  {
    title: "Continuous Learning",
    description:
      "I keep exploring AI, frontend architecture, and better engineering habits.",
    Icon: FaRocket,
  },
];

export default function About() {
  const MotionDiv = motion.div;
  const MotionImg = motion.img;

  return (
    <div className="mx-auto max-w-7xl">
      <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">

        {/* PROFILE CARD */}
        <MotionDiv
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto w-full max-w-md"
        >
          <MotionDiv
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ rotateY: 8, rotateX: 4, scale: 1.03 }}
            style={{ transformStyle: "preserve-3d" }}
            className="relative overflow-hidden rounded-[2.5rem] p-[2px]
            bg-gradient-to-br from-cyan-400/40 via-purple-500/30 to-blue-500/40"
          >
            <div className="relative rounded-[2.5rem] bg-[#070b18] p-5 backdrop-blur-xl">

              {/* glow background */}
              <div className="absolute inset-0 opacity-40 blur-3xl bg-gradient-to-br from-cyan-500 to-purple-600" />

              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">

                {/* profile image */}
                <MotionImg
                  src={profileImage}
                  alt="Dnyandip Katkar profile"
                  loading="lazy"
                  decoding="async"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6 }}
                  className="h-full w-full object-cover object-top"
                />

                {/* gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80" />

                {/* profile info */}
                <div className="absolute bottom-8 left-8 z-10">
                  <p className="font-space text-xs uppercase tracking-[0.4em] text-cyan-300/80">
                    Developer
                  </p>

                  <h3 className="mt-3 font-space text-4xl font-bold text-white">
                    Dnyan
                  </h3>

                  <p className="mt-3 max-w-xs text-sm leading-7 text-slate-300/80">
                    Computer Engineer exploring web systems, AI workflows,
                    data analytics, and future-focused technologies.
                  </p>
                </div>
              </div>
            </div>
          </MotionDiv>
        </MotionDiv>

        {/* ABOUT TEXT */}
        <MotionDiv
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <p className="font-space text-xs font-bold uppercase tracking-[0.5em] text-cyan-200/75">
              About
            </p>

            <h2 className="font-space text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
              Building across data, web, AI/ML, and emerging technology domains.
            </h2>

            <div className="max-w-3xl space-y-5 text-base leading-8 text-slate-300/72 sm:text-lg">
              <p>
                Experienced with data analysis including data cleaning and interpretation.
                Skilled in SQL and Excel for efficient data management and reporting.
                Strong understanding of teamwork dynamics and adaptable to evolving
                analytical challenges.
              </p>

              <p>
                Positive problem solver with a passion for uncovering insights through
                data-driven analysis. Well-versed in statistical methodologies and
                proficient in Python, SQL, and data visualization techniques.
              </p>

              <p>
                Alongside analytics, I enjoy building responsive web interfaces,
                exploring AI and machine learning workflows, and learning blockchain
                concepts that shape the next generation of digital products.
              </p>
            </div>
          </div>

          {/* SKILL CARDS */}
          <div className="grid gap-4 sm:grid-cols-2">
            {cards.map(({ title, description, Icon }, index) => (
              <MotionDiv
                key={title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="rounded-[1.8rem] p-6 backdrop-blur-xl
                bg-gradient-to-br from-white/5 to-white/2 border border-white/10"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl
                bg-gradient-to-br from-cyan-300/20 to-fuchsia-500/20 text-cyan-200">
                  {React.createElement(Icon)}
                </div>

                <h3 className="font-space text-xl font-bold">{title}</h3>

                <p className="mt-3 text-sm leading-7 text-slate-300/68">
                  {description}
                </p>
              </MotionDiv>
            ))}
          </div>
        </MotionDiv>

      </div>
    </div>
  );
}
