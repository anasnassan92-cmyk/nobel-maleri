import { useRef, useState, type PointerEvent } from "react";

interface BeforeAfterProps {
  before: string;
  after: string;
  label?: string;
}

export function BeforeAfter({ before, after, label }: BeforeAfterProps) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  function updateFromEvent(clientX: number) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, pct)));
  }

  function onDown(e: PointerEvent<HTMLDivElement>) {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updateFromEvent(e.clientX);
  }
  function onMove(e: PointerEvent<HTMLDivElement>) {
    if (!dragging.current) return;
    updateFromEvent(e.clientX);
  }
  function onUp(e: PointerEvent<HTMLDivElement>) {
    dragging.current = false;
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
  }

  return (
    <div className="space-y-3">
      {label && <p className="eyebrow text-navy">{label}</p>}
      <div
        ref={ref}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerCancel={onUp}
        className="relative aspect-[4/3] w-full cursor-ew-resize overflow-hidden bg-navy-deep select-none"
      >
        <img src={after} alt="Efter" className="absolute inset-0 h-full w-full object-cover" draggable={false} />
        <div
          className="absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: `${pos}%` }}
        >
          <img
            src={before}
            alt="Före"
            className="absolute inset-0 h-full object-cover"
            style={{ width: ref.current ? `${ref.current.getBoundingClientRect().width}px` : "100%" }}
            draggable={false}
          />
        </div>

        {/* Labels */}
        <span className="pointer-events-none absolute left-4 top-4 rounded-sm bg-navy/80 px-3 py-1 text-xs uppercase tracking-widest text-cream">
          Före
        </span>
        <span className="pointer-events-none absolute right-4 top-4 rounded-sm bg-cream/90 px-3 py-1 text-xs uppercase tracking-widest text-navy">
          Efter
        </span>

        {/* Divider + handle */}
        <div
          className="pointer-events-none absolute inset-y-0 w-0.5 bg-cream"
          style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
        />
        <div
          className="absolute top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-cream text-navy shadow-lg"
          style={{ left: `${pos}%` }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 6l-6 6 6 6" />
            <path d="M15 6l6 6-6 6" />
          </svg>
        </div>
      </div>
    </div>
  );
}
