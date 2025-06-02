export function publicAsset(path: string) {
  const baseURL = useRuntimeConfig().app.baseURL;

  return `${baseURL}${path}`;
}