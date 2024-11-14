export const preFetchImage = async (src: string) => {
  if (!src) return;
  const img = new Image();
  img.src = src;
  await new Promise((resolve, reject) => {
    img.onload = () => resolve(true);
    img.onerror = (error) => reject(error);
  });
};
