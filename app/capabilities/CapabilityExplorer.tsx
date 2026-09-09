"use client";

import { useMemo, useState } from "react";
import { FUNCTIONS, INGREDIENTS, type CapabilityFunction } from "@/lib/capabilities";
import styles from "./capabilities.module.css";

function functionLabel(fns: CapabilityFunction[]) {
  return fns.map((f) => f.name).join(" · ");
}

export function CapabilityExplorer() {
  const [active, setActive] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  const activeFn = active ? FUNCTIONS.find((f) => f.id === active) ?? null : null;

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return INGREDIENTS.filter((ing) => {
      if (activeFn && !ing.functions.includes(activeFn)) return false;
      if (q && !ing.name.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [activeFn, query]);

  const pick = (id: string | null) => {
    setActive(id);
    document.getElementById("library")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const filtered = Boolean(activeFn) || query.trim().length > 0;

  return (
    <>
      {/* Health functions */}
      <section className={`container ${styles.functionsSection}`}>
        <div className={styles.functionsHead} data-reveal>
          <div className="eyebrow">
            <span className="eyebrow-rule" />
            Health Functions
          </div>
          <h2 className={styles.functionsHeading}>Pick a direction, see what we can put behind it</h2>
          <p className={styles.functionsIntro}>
            Every wellness product starts by choosing what it&apos;s for. These are the positionings we formulate
            toward most often. Select one to see the ingredients we can build it with.
          </p>
        </div>
        <div className={styles.functionsGrid} data-reveal-stagger>
          {FUNCTIONS.map((fn) => (
            <button
              key={fn.id}
              type="button"
              className={styles.fnCard}
              data-active={active === fn.id || undefined}
              aria-pressed={active === fn.id}
              onClick={() => pick(fn.id)}
              data-reveal
            >
              <span className={styles.fnName}>{fn.name}</span>
              <span className={styles.fnBlurb}>{fn.blurb}</span>
              <span className={styles.fnMeta}>{fn.ingredients.length} ingredients</span>
            </button>
          ))}
        </div>
      </section>

      {/* Ingredient library */}
      <section id="library" className={styles.libraryBand}>
        <div className={`container ${styles.libraryInner}`}>
          <div className={styles.libraryHead} data-reveal>
            <div>
              <div className="eyebrow">
                <span className="eyebrow-rule" />
                Ingredient Library
              </div>
              <h2 className={styles.libraryHeading}>
                {activeFn ? (
                  <>
                    Ingredients for <em>{activeFn.name}</em>
                  </>
                ) : (
                  <>
                    Every ingredient we <em>work with</em>
                  </>
                )}
              </h2>
            </div>
            <p className={styles.libraryIntro}>
              {activeFn
                ? activeFn.blurb
                : "Search for an ingredient you already have in mind, or narrow the list by function. Listed for formulation reference; no claims are made or implied."}
            </p>
          </div>

          <div className={styles.controls} data-reveal>
            <label className={styles.searchWrap}>
              <svg className={styles.searchIcon} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.6" />
                <path d="M10.5 10.5L14 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
              <input
                type="search"
                className={styles.search}
                placeholder="Search an ingredient, e.g. tongkat ali"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search ingredients"
              />
            </label>
            <div className={styles.chips} role="group" aria-label="Filter by function">
              <button
                type="button"
                className={active === null ? styles.chipActive : styles.chip}
                onClick={() => setActive(null)}
              >
                All functions
              </button>
              {FUNCTIONS.map((fn) => (
                <button
                  key={fn.id}
                  type="button"
                  className={active === fn.id ? styles.chipActive : styles.chip}
                  onClick={() => setActive(active === fn.id ? null : fn.id)}
                >
                  {fn.name}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.resultsBar}>
            <span className={styles.resultsCount}>
              {results.length} {results.length === 1 ? "ingredient" : "ingredients"}
              {activeFn ? ` in ${activeFn.name}` : ""}
              {query.trim() ? ` matching “${query.trim()}”` : ""}
            </span>
            {filtered && (
              <button
                type="button"
                className={styles.clear}
                onClick={() => {
                  setActive(null);
                  setQuery("");
                }}
              >
                Clear
              </button>
            )}
          </div>

          {results.length > 0 ? (
            <ul className={styles.ingredientGrid}>
              {results.map((ing) => (
                <li key={ing.name} className={styles.ingredient}>
                  <span className={styles.ingredientName}>{ing.name}</span>
                  <span className={styles.ingredientFns}>{functionLabel(ing.functions)}</span>
                </li>
              ))}
            </ul>
          ) : (
            <div className={styles.empty}>
              <p className={styles.emptyHeading}>Nothing here matches &ldquo;{query.trim()}&rdquo;.</p>
              <p className={styles.emptyCopy}>
                This list isn&apos;t the edge of what we can do. If you have a specific ingredient in mind, tell us and
                we&apos;ll look into sourcing it.
              </p>
              <a href="/contact#enquiry" className={styles.emptyLink}>
                Ask about this ingredient
              </a>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
