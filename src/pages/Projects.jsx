
import { useState, useMemo } from 'react';

import ProjectCard from '../components/ProjectCard';

const data = [
    {
        id: 1,
        title: "Project One",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        image: "https://via.placeholder.com/300x200",
        link: "https://example.com/project-one"
    },
]

export default function Projects() {


    const [search, setSearch] = useState("");

    const filteredProjects = useMemo(() => {
        return data
            ?.filter((p) =>
                p.title.toLowerCase().includes(search.toLowerCase())
            )
            .slice(0, 12);
    }, [data, search]);

    // if (isLoading) return <h2>Loading...</h2>;

    return (
        <div>
            <h2 className="text-2xl mb-6">Projects</h2>

            {/* 🔍 Search */}
            <div className="mb-6">
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="p-2 w-full border border-[var(--border)] rounded-lg outline-none focus:border-[var(--accent)]"
                    type="text"
                    placeholder="Search projects..."
                />
            </div>

            {/* 📦 Projects */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
}