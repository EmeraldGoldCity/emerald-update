import { useEffect, useRef, useState } from 'react';
import type { FleetCategoryTab } from '@/data/fleet';

interface Props {
  tabs: FleetCategoryTab[];
  initial?: string;
  layoutSelector?: string;
}

export function FleetFilterTabs({
  tabs,
  initial = 'All',
  layoutSelector = '[data-fleet-layout]',
}: Props) {
  const [active, setActive] = useState<string>(initial);
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);

  useEffect(() => {
    if (typeof document === 'undefined') return;

    const layout = document.querySelector<HTMLElement>(layoutSelector);
    if (!layout) return;

    layout.dataset.activeCategory = active;

    const cards = layout.querySelectorAll<HTMLElement>('[data-fleet-card-wrap]');
    cards.forEach((wrap) => {
      const cat = wrap.dataset.category ?? '';
      wrap.hidden = active !== 'All' && cat !== active;
    });
  }, [active, layoutSelector]);

  function onKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    const idx = tabs.findIndex((t) => t.value === active);
    if (idx < 0) return;

    let next = idx;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      next = (idx + 1) % tabs.length;
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      next = (idx - 1 + tabs.length) % tabs.length;
    } else if (e.key === 'Home') {
      next = 0;
    } else if (e.key === 'End') {
      next = tabs.length - 1;
    } else {
      return;
    }

    e.preventDefault();
    const nextValue = tabs[next].value;
    setActive(nextValue);
    buttonRefs.current[next]?.focus();
  }

  return (
    <div
      role="tablist"
      aria-label="Filter vehicles by category"
      onKeyDown={onKeyDown}
      className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3 sm:gap-x-9"
    >
      {tabs.map((tab, i) => {
        const isActive = active === tab.value;
        return (
          <button
            key={tab.value}
            type="button"
            role="tab"
            id={`fleet-tab-${tab.value.replace(/\s+/g, '-').toLowerCase()}`}
            aria-selected={isActive}
            tabIndex={isActive ? 0 : -1}
            ref={(el) => { buttonRefs.current[i] = el; }}
            onClick={() => setActive(tab.value)}
            className="ecl-focusable group relative inline-flex items-center pb-2 font-sans text-xs font-medium uppercase tracking-[0.2em] transition-colors duration-300"
          >
            <span
              className={
                isActive
                  ? 'text-brand-forest'
                  : 'text-neutral-500 group-hover:text-brand-forest'
              }
            >
              {tab.label}
            </span>
            <span
              aria-hidden="true"
              className={`absolute inset-x-0 bottom-0 h-px origin-center bg-brand-gold transition-transform duration-500 ease-out ${
                isActive ? 'scale-x-100' : 'scale-x-0'
              }`}
            />
          </button>
        );
      })}
    </div>
  );
}