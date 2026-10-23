import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PropertyCard } from "@/components/cards";
import { Reveal } from "@/components/reveal";
import type { PropertyRecord } from "@/content/types";

export function PropertyRail({ properties }: { properties: PropertyRecord[] }) {
  const rail = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ previous: false, next: false });
  function updateControls() {
    const element = rail.current;
    if (!element) return;
    setPosition({ previous: element.scrollLeft > 1, next: element.scrollLeft + element.clientWidth < element.scrollWidth - 1 });
  }
  useEffect(() => {
    const element = rail.current;
    if (!element) return;
    const observer = new ResizeObserver(updateControls);
    observer.observe(element);
    updateControls();
    return () => observer.disconnect();
  }, []);
  function scroll(direction: number) {
    const element = rail.current;
    if (!element) return;
    const card = element.firstElementChild;
    const distance = card ? card.getBoundingClientRect().width + 20 : element.clientWidth;
    element.scrollBy({ left: direction * distance, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }
  return (
    <>
      <div className="selected-controls" aria-label="Property carousel controls">
        <Button variant="tool" size="editorial" disabled={!position.previous} onClick={() => scroll(-1)} aria-label="Previous properties" title="Previous properties"><ArrowLeft /></Button>
        <Button variant="tool" size="editorial" disabled={!position.next} onClick={() => scroll(1)} aria-label="Next properties" title="Next properties"><ArrowRight /></Button>
      </div>
      <div ref={rail} onScroll={updateControls} className={`project-rail ${properties.length === 2 ? "project-rail-pair" : ""}`} tabIndex={0} aria-label="Currently listed Dreamland properties">
        {properties.map((property, i) => <Reveal key={property.slug} delay={(i % 3) as 0 | 1 | 2}><PropertyCard property={property} index={i} /></Reveal>)}
      </div>
    </>
  );
}