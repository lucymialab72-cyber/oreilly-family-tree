"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import type { PedigreeNode, PedigreeTree } from "@/data/pedigree-data";

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
  const accentColor = isMale ? "#4A7AB5" : "#B54A7A";

  const years = [node.born, node.died].filter(Boolean).join("–") || "dates unknown";

  const handleClick = () => {
    if (!node.scrollId) return;
    const el = document.getElementById(node.scrollId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      // Flash highlight
      el.classList.add("pedigree-highlight");
      setTimeout(() => el.classList.remove("pedigree-highlight"), 2000);
    }
  };

  const paddingClass =
    size === "focal"
      ? "px-4 py-3"
      : size === "small"
      ? "px-2 py-1.5"
      : "px-3 py-2";

  const widthClass =
    size === "focal"
      ? "min-w-[180px] max-w-[220px]"
      : size === "small"
      ? "min-w-[120px] max-w-[150px]"
      : "min-w-[140px] max-w-[180px]";

  return (
    <button
      onClick={handleClick}
      disabled={!node.scrollId}
      className={`${paddingClass} ${widthClass} rounded-md border-2 text-left transition-all duration-200 ${
        node.scrollId
          ? "cursor-pointer hover:shadow-md hover:scale-[1.03] active:scale-[0.98]"
          : "cursor-default"
      }`}
      style={{
        backgroundColor: bgColor,
        borderColor: borderColor,
      }}
      title={node.scrollId ? `Click to see ${node.name}'s details` : node.name}
    >
      <p
        className={`font-bold leading-tight ${
          size === "focal" ? "text-sm" : size === "small" ? "text-[10px]" : "text-xs"
        }`}
        style={{ color: accentColor, fontFamily: "var(--font-sans)" }}
      >
        {node.name}
      </p>
      <p
        className={`text-ink-muted leading-tight mt-0.5 ${
          size === "focal" ? "text-xs" : "text-[10px]"
        }`}
        style={{ fontFamily: "var(--font-sans)" }}
      >
        {years}
      </p>
      {node.birthPlace && (
        <p
          className={`text-ink-muted/70 leading-tight ${
            size === "focal" ? "text-[11px]" : "text-[9px]"
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
// CONNECTOR LINES
// ═══════════════════════════════════════════════

function HorizontalLine({ width = 24 }: { width?: number }) {
  return (
    <div
      className="shrink-0"
      style={{
        width: `${width}px`,
        height: "2px",
        backgroundColor: "#B8860B",
      }}
    />
  );
}

function VerticalBracket() {
  return (
    <div className="flex flex-col items-center shrink-0" style={{ width: "2px" }}>
      <div className="flex-1" style={{ width: "2px", backgroundColor: "#B8860B" }} />
    </div>
  );
}

// ═══════════════════════════════════════════════
// PAIR GROUP — Renders a father-mother pair with bracket
// ═══════════════════════════════════════════════

function PairGroup({
  father,
  mother,
  size = "normal",
  showChildren = true,
}: {
  father?: PedigreeNode;
  mother?: PedigreeNode;
  size?: "normal" | "small";
  showChildren?: boolean;
}) {
  if (!father && !mother) return null;

  return (
    <div className="flex items-center">
      {showChildren && <HorizontalLine width={16} />}
      <div className="flex flex-col gap-2">
        {father && <PersonBox node={father} size={size} />}
        {mother && <PersonBox node={mother} size={size} />}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════
// ANCESTOR BRANCH — Recursive render of a person + their ancestors
// ═══════════════════════════════════════════════

function AncestorBranch({
  node,
  depth = 0,
  maxDepth = 3,
}: {
  node: PedigreeNode;
  depth?: number;
  maxDepth?: number;
}) {
  const hasParents = node.father || node.mother;
  const size = depth >= 2 ? "small" : "normal";

  if (depth >= maxDepth || !hasParents) {
    return <PersonBox node={node} size={size} />;
  }

  return (
    <div className="flex items-center">
      <PersonBox node={node} size={size} />
      <HorizontalLine width={depth >= 2 ? 12 : 20} />
      {/* Vertical bracket connecting father/mother */}
      <div className="relative flex flex-col">
        {/* Top half - father side */}
        <div className="flex items-end">
          <div className="flex flex-col items-start">
            <div style={{ height: "1px" }} />
            <div
              className="self-start"
              style={{
                width: depth >= 2 ? "12px" : "20px",
                height: "2px",
                backgroundColor: "#B8860B",
              }}
            />
          </div>
          <div className="flex items-center">
            {node.father ? (
              <AncestorBranch node={node.father} depth={depth + 1} maxDepth={maxDepth} />
            ) : (
              <div className="min-w-[120px] px-2 py-1 text-[10px] text-ink-muted italic" style={{ fontFamily: "var(--font-sans)" }}>
                Unknown
              </div>
            )}
          </div>
        </div>

        {/* Vertical connector */}
        <div
          className="self-start"
          style={{
            width: "2px",
            height: "8px",
            backgroundColor: "#B8860B",
          }}
        />

        {/* Bottom half - mother side */}
        <div className="flex items-start">
          <div className="flex flex-col items-start">
            <div
              className="self-start"
              style={{
                width: depth >= 2 ? "12px" : "20px",
                height: "2px",
                backgroundColor: "#B8860B",
              }}
            />
          </div>
          <div className="flex items-center">
            {node.mother ? (
              <AncestorBranch node={node.mother} depth={depth + 1} maxDepth={maxDepth} />
            ) : (
              <div className="min-w-[120px] px-2 py-1 text-[10px] text-ink-muted italic" style={{ fontFamily: "var(--font-sans)" }}>
                Unknown
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════
// MAIN PEDIGREE CHART COMPONENT
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
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Compute max depth based on tree
  const getMaxDepth = (node: PedigreeNode, d: number): number => {
    const fatherDepth = node.father ? getMaxDepth(node.father, d + 1) : d;
    const motherDepth = node.mother ? getMaxDepth(node.mother, d + 1) : d;
    return Math.max(fatherDepth, motherDepth);
  };
  const maxDepth = Math.min(getMaxDepth(tree.focal, 0), 4);

  // Determine generations label
  const genLabels: string[] = [];
  if (maxDepth >= 0) genLabels.push("Grandparent");
  if (maxDepth >= 1) genLabels.push("Great-Grandparents");
  if (maxDepth >= 2) genLabels.push("2× Great-Grandparents");
  if (maxDepth >= 3) genLabels.push("3× Great-Grandparents");

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
            <p
              className="text-sm text-ink-muted"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Click any ancestor to jump to their details below
            </p>
            {/* Generation legend */}
            <div className="flex items-center justify-center gap-4 mt-3 flex-wrap">
              <span className="flex items-center gap-1.5 text-[11px]" style={{ fontFamily: "var(--font-sans)" }}>
                <span
                  className="inline-block w-3 h-3 rounded-sm border"
                  style={{ backgroundColor: "#F0F6FF", borderColor: "#B0C8E8" }}
                />
                Male
              </span>
              <span className="flex items-center gap-1.5 text-[11px]" style={{ fontFamily: "var(--font-sans)" }}>
                <span
                  className="inline-block w-3 h-3 rounded-sm border"
                  style={{ backgroundColor: "#FFF0F5", borderColor: "#E8B0C8" }}
                />
                Female
              </span>
            </div>
          </div>

          {/* Chart container — horizontal scroll on mobile */}
          <div className="overflow-x-auto pb-4 -mx-4 px-4">
            <div className="inline-flex items-center min-w-max">
              {/* Focal person + spouse */}
              <div className="flex flex-col items-center gap-1 mr-1">
                <PersonBox node={tree.focal} size="focal" />
                <div className="flex items-center gap-1">
                  <span className="text-[10px] text-gold font-medium" style={{ fontFamily: "var(--font-sans)" }}>
                    m.
                  </span>
                  <PersonBox node={tree.spouse} size="small" />
                </div>
              </div>

              {/* Connector to parents */}
              <HorizontalLine width={20} />

              {/* Ancestor tree */}
              <div className="relative flex flex-col">
                {/* Father branch */}
                <div className="flex items-end">
                  <div className="flex flex-col items-start">
                    <div style={{ height: "1px" }} />
                    <div
                      style={{
                        width: "20px",
                        height: "2px",
                        backgroundColor: "#B8860B",
                      }}
                    />
                  </div>
                  {tree.focal.father && (
                    <AncestorBranch
                      node={tree.focal.father}
                      depth={1}
                      maxDepth={maxDepth}
                    />
                  )}
                </div>

                {/* Vertical connector */}
                <div
                  className="self-start"
                  style={{
                    width: "2px",
                    height: "8px",
                    backgroundColor: "#B8860B",
                  }}
                />

                {/* Mother branch */}
                <div className="flex items-start">
                  <div className="flex flex-col items-start">
                    <div
                      style={{
                        width: "20px",
                        height: "2px",
                        backgroundColor: "#B8860B",
                      }}
                    />
                  </div>
                  {tree.focal.mother && (
                    <AncestorBranch
                      node={tree.focal.mother}
                      depth={1}
                      maxDepth={maxDepth}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Floating back-to-chart button */}
      {showBackButton && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToChart}
          className="fixed bottom-20 md:bottom-6 right-4 z-40 flex items-center gap-2 px-4 py-2.5 bg-white/95 border border-border-light rounded-full shadow-lg hover:shadow-xl hover:bg-white transition-all text-sm font-medium"
          style={{
            fontFamily: "var(--font-sans)",
            color: colorAccent,
          }}
        >
          ↑ Back to Chart
        </motion.button>
      )}
    </>
  );
}
