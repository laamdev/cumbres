"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

const PeakIcon = ({ mouseX, peak }: { mouseX: MotionValue; peak: any }) => {
  const ref = useRef<HTMLDivElement>(null);
  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [40, 100, 40]);
  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="relative aspect-square grow rounded-full bg-neutral-400"
    >
      <Link href={`${peak.slug}`}>
        <Image
          src={peak.imageUrl}
          alt={peak.name}
          fill
          className="rounded-full"
        />
      </Link>
    </motion.div>
  );
};

export const PeakList = ({ peaks }: { peaks: any }) => {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="mx-auto mt-12 flex gap-4 rounded-2xl bg-branding-green px-4 py-3"
    >
      {peaks.map((peak: any, peakId: number) => (
        <PeakIcon mouseX={mouseX} key={peakId} peak={peak} />
      ))}
    </motion.div>
  );
};
