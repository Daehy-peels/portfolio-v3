import { ImageResponse } from "next/og";
import { getProject } from "@/data/projects";
import { ProjectOgCard } from "@/lib/og-card";

export const alt = "Myat Bhone Kyaw — Project case study";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            backgroundColor: "#060608",
            color: "#f4f4f5",
            fontSize: 56,
          }}
        >
          Myat Bhone Kyaw — Case study
        </div>
      ),
      { ...size },
    );
  }

  return new ImageResponse(<ProjectOgCard project={project} />, { ...size });
}
