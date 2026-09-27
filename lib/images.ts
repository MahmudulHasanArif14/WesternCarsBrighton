// lib/images.ts
const U = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`;

export const IMAGES = {
  hero: U("photo-1549194388-f61be84a6e9e", 1400), // black cab on UK street
  heroAlt: U("photo-1519003722824-194d4455a60c", 1400), // UK taxi close-up
  airport: U("photo-1436491865332-7a61a109cc05", 900), // airplane / airport
  gatwick: U("photo-1569154941061-e231b4725ef1", 900), // airport terminal
  corporate: U("photo-1556761175-b413da4baf72", 900), // business passenger
  event: U("photo-1492684223066-81342ee5ff30", 900), // event / night out
  accessible: U("photo-1560472354-b33ff0c44a43", 900), // accessibility / wheels
  local: U("photo-1513635269975-59663e0ac1ad", 900), // Brighton pier / UK coast
  brightonPier: U("photo-1513635269975-59663e0ac1ad", 1600), // Brighton Pier
  driver: U("photo-1449965408869-eaa3f722e40d", 1200), // driver at wheel
  fleet: U("photo-1502161254066-6c74afbf07aa", 1200), // car lineup
  aboutTeam: U("photo-1521737604893-d14cc237f11d", 1200), // team
  og: U("photo-1513635269975-59663e0ac1ad", 1200), // OG fallback
};

export type ImageKey = keyof typeof IMAGES;
