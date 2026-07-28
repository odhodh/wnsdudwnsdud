declare module 'vite' {
  // The Sites helper is not part of the Next.js runtime. This minimal ambient
  // type keeps Next's repository-wide type check compatible with that helper.
  export type Plugin = any;
}
