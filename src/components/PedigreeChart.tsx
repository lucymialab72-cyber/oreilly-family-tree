"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import type { PedigreeNode, PedigreeTree } from "@/data/pedigree-data";

// ═══════════════════════════════════════════════
// FLATTEN TREE INTO POSITIONED NODES
// ═══════════════════════════════════════════════

interface PositionedNode {
  node: PedigreeNode;
  col: number;       // generation column (0 = focal)
  row: number;       // vertical position
  rowSpan: number;   // how many rows this node spans for centering
  parentRow?: number; // row of the child this connects to
}

interface ConnectorLine {
  fromCol: number;
  fromRow: number;
  fromSpan: number;
  toCol: number;
  toRow: number;
  toSpan: number;
}

function flattenTree(tree: PedigreeTree) {
  const nodes: PositionedNode[] = [];
  const lines: ConnectorLine[] = [];

  // Calculate max depth
  function getDepth(n: PedigreeNode | undefined, d: number): number {
    if (!n) return d;
    return Math.max(
      getDepth(n.father, d + 1),
      getDepth(n.mother, d + 1)
    );
  }
  const maxDepth = Math.min(getDepth(tree.focal, 0), 4);
  const totalRows = Math.pow(2, maxDepth); // e.g., 8 rows for 3 ancestor generations

  // Recursively place nodes
  function placeNode(
    node: PedigreeNode | undefined,
    col: number,
    startRow: number,
    rowSpan: number
  ) {
    if (!node || col > maxDepth) return;

    nodes.push({
      node,
      col,
      row: startRow,
      rowSpan,
    });

    if (col < maxDepth) {
      const halfSpan = rowSpan / 2;

      // Father in top half
      if (node.father) {
        placeNode(node.father, col + 1, startRow, halfSpan);
        lines.push({
          fromCol: col, fromRow: startRow, fromSpan: rowSpan,
          toCol: col + 1, toRow: startRow, toSpan: halfSpan,
        });
      }

      // Mother in bottom half
      if (node.mother) {
        placeNode(node.mother, col + 1, startRow + halfSpan, halfSpan);
        lines.push({
          fromCol: col, fromRow: startRow, fromSpan: rowSpan,
          toCol: col + 1, toRow: startRow + halfSpan, toSpan: halfSpan,
        });
      }
    }
  }

  placeNode(tree.focal, 0, 0, totalRows);

  return { nodes, lines, maxDepth, totalRows };
}

// ═══════════════════════════════════════════════
// PERSON BOX
// ═══════════════════════════════════════════════

function PersonBox({
  node,
  size = "normal",
}: {
  node: PedigreeNode;
  size?: "focal" | "normal" | "small";
}) {
  const isMale = node.gender === "M";
  const bgColor = isMale ? "#F0F6FF" : "#FFF0F5";
  const borderColor = isMale ? "#B0C8E8" : "#E8B0C8";
  const nameColor = isMale ? "#3A6A9F" : "#9F3A6A";

  const years = [node.born, node.died].filter(Boolean).join("–") || "dates unknown";

  const handleClick = () => {
    if (!node.scrollId) return;
    const el = document.getElementById(node.scrollId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      el.classList.add("pedigree-highlight");
      setTimeout(() => el.classList.remove("pedigree-highlight"), 2000);
    }
  };

  const sizeStyles = {
    focal: { padding: "12px 16px", minWidth: "170px", maxWidth: "210px" },
    normal: { padding: "8px 12px", minWidth: "140px", maxWidth: "175px" },
    small: { padding: "6px 8px", minWidth: "115px", maxWidth: "145px" },
  };

  const style = sizeStyles[size];

  return (
    <button
      onClick={handleClick}
      disabled={!node.scrollId}
      className={`rounded-md border-2 text-left transition-all duration-200 shrink-0 ${
        node.scrollId
          ? "cursor-pointer hover:shadow-md hover:scale-[1.02]"
          : "cursor-default"
      }`}
      style={{
        backgroundColor: bgColor,
        borderColor,
        padding: style.padding,
        minWidth: style.minWidth,
        maxWidth: style.maxWidth,
      }}
      title={node.scrollId ? `Click to see ${node.name}'s details` : node.name}
    >
      <p
        className={`font-bold leading-tight ${
          size === "focal" ? "text-[13px]" : size === "small" ? "text-[10px]" : "text-[11px]"
        }`}
        style={{ color: nameColor, fontFamily: "var(--font-sans)" }}
      >
        {node.name}
      </p>
      <p
        className={`text-ink-muted leading-tight mt-0.5 ${
          size === "focal" ? "text-[11px]" : "text-[9px]"
        }`}
        style={{ fontFamily: "var(--font-sans)" }}
      >
        {years}
      </p>
      {node.birthPlace && (
        <p
          className={`text-ink-muted/60 leading-tight ${
            size === "focal" ? "text-[10px]" : "text-[8px]"
          }`}
          style={{ fontFamily: "var(--font-sans)" }}
        >
          {node.birthPlace}
        </p>
      )}
    </button>
  );
}

// ═══════════════════════════════════════════════
// MAIN CHART — Grid-based layout
// ═══════════════════════════════════════════════

export default function PedigreeChart({
  tree,
  colorAccent,
}: {
  tree: PedigreeTree;
  colorAccent: string;
}) {
  const [showBackButton, setShowBackButton] = useState(false);
  const chartId = `pedigree-chart-${tree.familyId}`;

  const handleScroll = useCallback(() => {
    const chartEl = document.getElementById(chartId);
    if (chartEl) {
      const rect = chartEl.getBoundingClientRect();
      setShowBackButton(rect.bottom < -100);
    }
  }, [chartId]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToChart = () => {
    const el = document.getElementById(chartId);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const { nodes, lines, maxDepth, totalRows } = useMemo(
    () => flattenTree(tree),
    [tree]
  );

  // Calculate row height based on depth
  const ROW_HEIGHT = maxDepth >= 3 ? 60 : 70;
  const COL_WIDTH = maxDepth >= 3 ? 200 : 220;
  const GAP = maxDepth >= 3 ? 40 : 50;

  const chartHeight = totalRows * ROW_HEIGHT;
  const chartWidth = (maxDepth + 1) * COL_WIDTH + maxDepth * GAP + 60; // extra for spouse

  return (
    <>
      <section id={chartId} className="max-w-6xl mx-auto px-4 py-10 scroll-mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-6">
            <h2
              className="text-2xl font-bold mb-2"
              style={{ fontFamily: "var(--font-display)", color: colorAccent }}
            >
              {tree.title}
            </h2>
            <p className="text-sm text-ink-muted" style={{ fontFamily: "var(--font-sans)" }}>
              Click any ancestor to jump to their details below
            </p>
            <div className="flex items-center justify-center gap-4 mt-3">
              <span className="flex items-center gap-1.5 text-[11px]" style={{ fontFamily: "var(--font-sans)" }}>
                <span className="inline-block w-3 h-3 rounded-sm border" style={{ backgroundColor: "#F0F6FF", borderColor: "#B0C8E8" }} />
                Male
              </span>
              <span className="flex items-center gap-1.5 text-[11px]" style={{ fontFamily: "var(--font-sans)" }}>
                <span className="inline-block w-3 h-3 rounded-sm border" style={{ backgroundColor: "#FFF0F5", borderColor: "#E8B0C8" }} />
                Female
              </span>
            </div>
          </div>

          {/* Chart — horizontal scroll on mobile */}
          <div className="overflow-x-auto pb-4 -mx-4 px-4">
            <svg
              width={chartWidth}
              height={chartHeight + 80}
              viewBox={`0 0 ${chartWidth} ${chartHeight + 80}`}
              className="block mx-auto"
              style={{ minWidth: `${chartWidth}px` }}
            >
              {/* Connecting lines */}
              {lines.map((line, i) => {
                const fromX = line.fromCol * (COL_WIDTH + GAP) + COL_WIDTH;
                const fromY = line.fromRow * ROW_HEIGHT + (line.fromSpan * ROW_HEIGHT) / 2 + 40;
                const toX = line.toCol * (COL_WIDTH + GAP);
                const toY = line.toRow * ROW_HEIGHT + (line.toSpan * ROW_HEIGHT) / 2 + 40;
                const midX = (fromX + toX) / 2;

                return (
                  <g key={`line-${i}`}>
                    {/* Horizontal from parent */}
                    <line x1={fromX} y1={fromY} x2={midX} y2={fromY} stroke="#B8860B" strokeWidth="2" />
                    {/* Vertical connector */}
                    <line x1={midX} y1={fromY} x2={midX} y2={toY} stroke="#B8860B" strokeWidth="2" />
                    {/* Horizontal to child */}
                    <line x1={midX} y1={toY} x2={toX} y2={toY} stroke="#B8860B" strokeWidth="2" />
                  </g>
                );
              })}

              {/* Person nodes */}
              {nodes.map((pos, i) => {
                const x = pos.col * (COL_WIDTH + GAP);
                const y = pos.row * ROW_HEIGHT + (pos.rowSpan * ROW_HEIGHT) / 2 + 40;
                const size: "focal" | "normal" | "small" =
                  pos.col === 0 ? "focal" : pos.col >= maxDepth ? "small" : "normal";

                return (
                  <foreignObject
                    key={`node-${i}`}
                    x={x}
                    y={y - (size === "focal" ? 35 : size === "small" ? 22 : 28)}
                    width={COL_WIDTH}
                    height={size === "focal" ? 70 : size === "small" ? 44 : 56}
                    overflow="visible"
                  >
                    <div className="flex items-center h-full">
                      <PersonBox node={pos.node} size={size} />
                    </div>
                  </foreignObject>
                );
              })}

              {/* Spouse box — below focal person */}
              {(() => {
                const focalY = (totalRows * ROW_HEIGHT) / 2 + 40;
                return (
                  <foreignObject
                    x={0}
                    y={focalY + 40}
                    width={COL_WIDTH}
                    height={50}
                    overflow="visible"
                  >
                    <div className="flex items-center gap-1">
                      <span className="text-[10px] text-gold font-medium shrink-0" style={{ fontFamily: "var(--font-sans)" }}>
                        m.
                      </span>
                      <PersonBox node={tree.spouse} size="small" />
                    </div>
                  </foreignObject>
                );
              })()}
            </svg>
          </div>
        </motion.div>
      </section>

      {/* Floating back-to-chart button */}
      {showBackButton && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={scrollToChart}
          className="fixed bottom-20 md:bottom-6 right-4 z-40 flex items-center gap-2 px-4 py-2.5 bg-white/95 border border-border-light rounded-full shadow-lg hover:shadow-xl hover:bg-white transition-all text-sm font-medium"
          style={{ fontFamily: "var(--font-sans)", color: colorAccent }}
        >
          ↑ Back to Chart
        </motion.button>
      )}
    </>
  );
}
