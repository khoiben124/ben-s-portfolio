import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import ProjectGallery from "@/components/ProjectGallery";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <main className="min-h-screen px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-stone-400 hover:text-orange-500 transition-colors mb-8 text-sm"
        >
          <span>←</span> Back to all projects
        </Link>

        <p className="text-stone-500 text-sm font-mono mb-3">
          {project.period}
          {project.role ? ` · ${project.role}` : ""}
        </p>

        <h1 className="font-serif text-4xl md:text-5xl text-stone-100 mb-4 leading-tight">
          {project.title}
        </h1>

        <p className="text-stone-300 text-lg leading-relaxed mb-8 max-w-3xl">
          {project.shortDescription}
        </p>

        <div className="flex flex-wrap gap-2 mb-12">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-sm text-stone-300 bg-stone-800 px-3 py-1 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="aspect-video bg-stone-900 rounded-lg overflow-hidden mb-12 border border-stone-800">
          {project.inProgress ? (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-stone-900 to-stone-800 text-center p-6">
              <div className="text-orange-500 text-6xl mb-4">⚙</div>
              <p className="text-stone-200 text-xl font-medium mb-2">In Progress</p>
              <p className="text-stone-400 text-sm">This project is actively being developed. Photos coming soon.</p>
            </div>
          ) : (
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="md:col-span-2 space-y-5">
            <h2 className="text-orange-500 text-sm uppercase tracking-wider mb-4">
              Overview
            </h2>
            {project.longDescription.map((paragraph, i) => (
              <p
                key={i}
                className="text-stone-300 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div>
            <h2 className="text-orange-500 text-sm uppercase tracking-wider mb-4">
              Highlights
            </h2>
            <ul className="space-y-3">
              {project.highlights.map((h) => (
                <li key={h} className="text-stone-300 text-sm flex gap-2">
                  <span className="text-orange-500 mt-0.5">▸</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {project.gallery.length > 0 && (
          <div className="mb-12">
            <h2 className="text-orange-500 text-sm uppercase tracking-wider mb-6">
              Gallery
            </h2>
            <ProjectGallery images={project.gallery} />
          </div>
        )}

        <div className="border-t border-stone-800 pt-8 text-center">
          <Link
            href="/#projects"
            className="inline-block px-6 py-3 border border-stone-700 hover:border-stone-100 text-stone-100 font-medium rounded-md transition-colors"
          >
            ← Back to all projects
          </Link>
        </div>
      </div>
    </main>
  );
}