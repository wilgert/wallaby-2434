Object.defineProperty(window, 'getComputedStyle', {
  value: () => ['-webkit-appearance'],
});
Object.defineProperty(window, 'CSS', { value: () => ({}) });
Object.defineProperty(window, 'matchMedia', {
  value: () => ({
    matches: false,
    addListener: () => {},
    removeListener: () => {},
  }),
});
Object.defineProperty(document.body.style, 'transform', {
  value: () => {
    return {
      enumerable: true,
      configurable: true,
    };
  },
});
Object.defineProperty(window, 'getComputedStyle', {
  value: () => ({
    getPropertyValue: (prop) => {
      return '';
    },
  }),
});
const WARN_SUPPRESSING_PATTERNS = [
  /Could not find Angular Material core theme/,
  /Could not find HammerJS/,
];

// tslint:disable-next-line:no-console
const warn = console.warn;

Object.defineProperty(console, 'warn', {
  value: (...params: string[]) => {
    if (!WARN_SUPPRESSING_PATTERNS.some((pattern) => pattern.test(params[0]))) {
      warn(...params);
    }
  },
});

// Fix for Application Insight error during tests: ReferenceError: define is not defined
const globalAny: any = global;
globalAny.define = () => {};
