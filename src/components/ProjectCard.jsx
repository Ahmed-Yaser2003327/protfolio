import { Link } from "react-router-dom";
import { memo } from "react";
function ProjectCard({ project }) {
    return (
        <div className="border border-[var(--border)] p-4 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-[var(--text-h)]">
                {project.title}
            </h3>

            <p className="text-sm text-[var(--text)] mt-2 line-clamp-2">
                {project.body}
            </p>

            <Link
                to={`/projects/${project.id}`}
                className="inline-block mt-3 text-[var(--accent)] hover:underline"
            >
                View Details →
            </Link>
        </div>
    );
}


export default memo(ProjectCard);