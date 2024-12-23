"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";

import cloudLeft from "../../../public/images/cloud-left.webp";
import cloudRight from "../../../public/images/cloud-right.webp";

export const Clouds = () => {
  const { scrollY } = useScroll();
  const x = useTransform(scrollY, [0, 1280], [0, 200]);

  return (
    <>
      <motion.div
        style={{ x: x }}
        className="absolute -left-24 top-0 h-[320px] w-[320px] sm:h-[560px] sm:w-[560px]"
      >
        <Image
          src={cloudLeft}
          alt={`Cumbres`}
          fill
          className="object-contain object-center"
          priority
        />
      </motion.div>
      <motion.div
        style={{ x: x }}
        className="absolute -right-24 -top-12 h-[320px] w-[320px] sm:h-[560px] sm:w-[560px]"
      >
        <Image
          src={cloudRight}
          alt={`Cumbres`}
          fill
          className="object-contain object-center"
          priority
        />
      </motion.div>
    </>
  );
};
