declare module 'vite' {
  interface Plugin {
    configResolved?: (config: any) => void;
    closeBundle?: () => void | Promise<void>;
  }
}
