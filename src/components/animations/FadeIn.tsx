"use client";

import { motion } from "framer-motion";

export const FadeIn = ({ children, delay = 0, direction = "up", distance = 20 }: { children: React.ReactNode, delay?: number, direction?: "up" | "down" | "left" | "right", distance?: number }) => {
    const directions = {
        up: { y: distance },
        down: { y: -distance },
        left: { x: distance },
        right: { x: -distance },
    };

    return (
        <motion.div
            initial={{ opacity: 0, ...directions[direction] }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.8,
                delay,
                ease: [0.21, 0.47, 0.32, 0.98],
            }}
        >
            {children}
        </motion.div>
    );
};
