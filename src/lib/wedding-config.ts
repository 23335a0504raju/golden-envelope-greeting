export const weddingConfig = {
  brideName: "Aishwarya",
  groomName: "Karthik",
  weddingDate: "14 February 2027",
  venue: "Sri Venkateswara Kalyana Mandapam, Chennai",
} as const;

export type WeddingConfig = typeof weddingConfig;