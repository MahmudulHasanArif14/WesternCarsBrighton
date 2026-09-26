import { cacheLife } from "next/cache";

export async function getCurrentYear(): Promise<number> {
  "use cache";
  cacheLife("days"); // Revalidates daily — plenty for a copyright year
  return new Date().getFullYear();
}
