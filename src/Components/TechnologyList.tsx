// import { useState, type FC } from "react";

// import TechnologyCard from "./TechnologyCard";

// import type { Technology, Category } from "../types/technology";

// interface TechnologyListProps {
//   technologies: Technology[];

//   selectedStack: Technology[];

//   loading: boolean;

//   onAdd: (technology: Technology) => void;
// }

// const TechnologyList: FC<TechnologyListProps> = ({
//   technologies,
//   selectedStack,
//   loading,
//   onAdd,
// }) => {
//   const [activeCategory, setActiveCategory] = useState<string>("All");

//   const categories: ("All" | Category)[] = [
//     "All",
//     "Frontend",
//     "Backend",
//     "Database",
//     "Language",
//     "Styling",
//     "DevOps",
//     "Tools",
//   ];

//   const filteredTechnologies =
//     activeCategory === "All"
//       ? technologies
//       : technologies.filter(
//           (technology) => technology.category === activeCategory,
//         );

//   return (
//     <div>
//       {/* Section Heading */}

//       <div>
//         <h2 className="text-3xl font-bold text-slate-800">
//           Explore Technologies
//         </h2>

//         <p className="mt-2 text-slate-500">
//           Discover popular technologies and build your perfect development
//           stack.
//         </p>
//       </div>

//       {/* Category Buttons */}

//       <div className="my-7 flex flex-wrap gap-3">
//         {categories.map((category) => (
//           <button
//             key={category}
//             onClick={() => setActiveCategory(category)}
//             className={`rounded-full px-4 py-2 text-sm font-medium transition ${
//               activeCategory === category
//                 ? "brand-gradient text-white shadow-md"
//                 : "bg-slate-200 text-slate-600 hover:bg-slate-300"
//             }`}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       {/* Loading State */}

//       {loading ? (
//         <div className="flex min-h-[400px] flex-col items-center justify-center gap-4">
//           <div className="h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-pink-500"></div>

//           <p className="font-medium text-slate-500">Loading technologies...</p>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
//           {filteredTechnologies.map((technology) => (
//             <TechnologyCard
//               key={technology.id}
//               technology={technology}
//               selectedStack={selectedStack}
//               onAdd={onAdd}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default TechnologyList;
