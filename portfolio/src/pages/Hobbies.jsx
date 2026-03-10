import React from "react";
import { motion } from "framer-motion";
import cert from "../assets/cert.jpeg";
import halo from "../assets/halo.jpeg";
import gym from "../assets/gym.jpeg";
import travel from "../assets/travel.jpeg"; 

function Hobbies() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white px-6 py-20">
      <div className="w-full max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24 space-y-6"
        >
          <h1 className="text-4xl md:text-3xl font-bold tracking-tight">
            How I Spend Time
          </h1>

          <p className="text-neutral-400 text-lg max-w-xl mx-auto">
            Things I spend time on outside of programming — the activities that
            keep me curious, disciplined, and constantly improving.
          </p>

          <div className="flex justify-center">
            <div className="h-1 w-24 bg-red-500/60 rounded-full" />
          </div>
        </motion.div>

        {/* Hobby Sections */}
        <div className="space-y-32">

          <Section
            title="Weightlifting"
            text="The disaster of 2020 and Covid stunted some of my early schooling by making everything online, it made it hard to stay focused and determined.
            I discovered weightlifting and strength training, its taught me discipline and consistency."
            image={gym}
            reverse={false}
          />

          <Section
            title="Video games"
            text={
              <>
                By far my favorite game of all time is Halo. I've played it since I was a kid
                and it's been a constant source of inspiration and creativity. I love it so much
                you can even take a look at the community I grew over on Instagram at{" "}
                <a
                  href="https://instagram.com/halo.tv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600/80 hover:text-red-400/80 underline underline-offset-4"
                >
                  @halo.tv
                </a>.
              </>
            }
            image={halo}
            reverse={true}
          />

          <Section
            title="Traveling"
            text="Exploring new places has always been one of my favorite pastimes. Whether it's a small town nearby I've never been to before, or somewhere breathtaking like the Grand Canyon or Niagara Falls up in Canada, I love to see what the world has to offer. Every new place gives me a fresh perspective and reminds me there's always more to discover."
            image={travel}
            reverse={false}
          />

          <Section
            title="Learning"
            text="I'm always trying to improve and expand my thinking. Even during schooling I would be taking extra online courses from places like Coursera to expand my knowledge
            and learn new skills. I'm always learning and trying to improve myself, whether it be through a Youtube video or a book."
            image={cert}
            reverse={true}
          />

        </div>
      </div>
    </div>
  );
}

// Reusable section to display hobbie info along with image
// Reverse prop is used to reverse the order of the text and image

function Section({ title, text, image, reverse }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
    >
      {/* Text */}
      <div className={`${reverse ? "lg:order-2" : ""} space-y-6`}>
        <h2 className="text-3xl font-bold">{title}</h2>
        <div className="text-neutral-300 leading-relaxed text-lg">{text}</div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="h-1 w-24 bg-gray-600/80 rounded-full"
        />
      </div>

      {/* Image */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className={`${reverse ? "lg:order-1" : ""}`}
      >
      <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="max-w-full max-h-full rounded-3xl shadow-xl object-contain"
        />
      </div>
      </motion.div>
    </motion.div>
  );
}

export default Hobbies;