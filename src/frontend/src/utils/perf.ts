// Development-only performance utilities
// These are no-ops in production builds

const isDev = import.meta.env.DEV;

export function perfTime(label: string): void {
  if (isDev) {
    console.time(label);
  }
}

export function perfTimeEnd(label: string): void {
  if (isDev) {
    console.timeEnd(label);
  }
}

export function perfMark(name: string): void {
  if (isDev && typeof performance !== 'undefined' && performance.mark) {
    performance.mark(name);
  }
}

export function perfMeasure(name: string, startMark: string, endMark: string): void {
  if (isDev && typeof performance !== 'undefined' && performance.measure) {
    try {
      performance.measure(name, startMark, endMark);
    } catch (e) {
      // Marks may not exist, ignore
    }
  }
}
