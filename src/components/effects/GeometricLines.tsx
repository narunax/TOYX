"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { clsx } from "clsx";

interface GeometricLinesProps {
    className?: string;
    mode?: 'light' | 'dark';
}

interface LineData {
    id: number;
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    opacity: number;
    parallaxFactor: number;
}

export default function GeometricLines({ className, mode = 'light' }: GeometricLinesProps) {
    const [lines, setLines] = useState<LineData[]>([]);
    const { scrollY } = useScroll();

    // スクロール量に応じて全体を微妙に移動させる（パララックス）
    // 個々の線ではなくコンテナ全体を動かす方がパフォーマンスに良いが、
    // ランダムな深度表現のために、今回は個々の線またはグループごとの移動は避ける（重さ対策最優先）。
    // ここではシンプルに、スクロールに応じてy座標を逆方向に少し動かすことで「浮遊感」を出す。
    const y1 = useTransform(scrollY, [0, 1000], [0, -50]);
    const y2 = useTransform(scrollY, [0, 1000], [0, -20]);

    useEffect(() => {
        // Hydration mismatchを防ぐため、クライアントサイドでのみ生成
        const count = 24; // 線の本数
        const newLines = Array.from({ length: count }).map((_, i) => ({
            id: i,
            x1: Math.random() * 100,
            y1: Math.random() * 100,
            x2: Math.random() * 100,
            y2: Math.random() * 100,
            opacity: Math.random() * 0.5 + 0.2, // 0.2 - 0.7
            parallaxFactor: Math.random() * 0.5 + 0.5, // 0.5 - 1.0 (今回は未使用だが拡張用)
        }));
        setLines(newLines);
    }, []);

    // モードに応じた色設定
    const strokeColor = mode === 'dark'
        ? 'rgba(255, 255, 255, 0.4)'
        : 'rgba(100, 116, 139, 0.5)'; // Slate-500 base

    if (lines.length === 0) return null;

    return (
        <div
            className={clsx(
                "fixed inset-0 z-[-1] pointer-events-none overflow-hidden touch-none",
                className
            )}
            aria-hidden="true"
        >
            <motion.svg
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
                style={{ y: y1 }} // 全体をスクロール連動で動かす（軽量）
            >
                {lines.map((line) => (
                    <line
                        key={line.id}
                        x1={`${line.x1}%`}
                        y1={`${line.y1}%`}
                        x2={`${line.x2}%`}
                        y2={`${line.y2}%`}
                        stroke={strokeColor}
                        strokeWidth="1.0"
                        strokeOpacity={line.opacity}
                    />
                ))}
            </motion.svg>

            {/* もう一層追加して、動く速度を変えることで奥行きを出す（軽量パララックス） */}
            <motion.svg
                className="absolute inset-0 w-full h-full opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                style={{ y: y2 }}
            >
                {lines.slice(0, 8).map((line) => ( // 一部の線だけ複製して別レイヤーで動かす
                    <line
                        key={`layer2-${line.id}`}
                        x1={`${100 - line.x1}%`} // 位置を少しずらす（反転）
                        y1={`${line.y1}%`}
                        x2={`${100 - line.x2}%`}
                        y2={`${line.y2}%`}
                        stroke={strokeColor}
                        strokeWidth="0.5"
                        strokeOpacity={line.opacity * 0.5}
                    />
                ))}
            </motion.svg>
        </div>
    );
}
