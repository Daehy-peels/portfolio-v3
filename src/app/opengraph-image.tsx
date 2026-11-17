import { ImageResponse } from "next/og";
import { OgCard } from "@/lib/og-card";

export const alt = "Myat Bhone Kyaw — Junior Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(<OgCard />, { ...size });
}
