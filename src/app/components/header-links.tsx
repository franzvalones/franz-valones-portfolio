import { FaJava, FaPhp, FaReact } from "react-icons/fa";
import { SiDart, SiJavascript, SiGo, SiTypescript, SiFlutter, SiNextdotjs } from "react-icons/si";

const techIcons = [
  { Icon: FaJava, name: "Java" },
  { Icon: FaPhp, name: "PHP" },
  { Icon: SiDart, name: "Dart" },
  { Icon: SiJavascript, name: "JavaScript" },
  { Icon: SiGo, name: "Go" },
  { Icon: SiTypescript, name: "TypeScript" },
  { Icon: FaReact, name: "React" },
  { Icon: SiFlutter, name: "Flutter" },
  { Icon: SiNextdotjs, name: "Next.js" },
];
 
export default function HeaderTechStack() {
  return (
    <div className="w-full max-w-[400px] overflow-hidden py-6 md:max-w-[900px]">
      <div className="flex justify-center animate-marquee">
        {[...techIcons, ...techIcons].map(({ Icon, name }, index) => (
          <div
            key={index}
            className="flex justify-center mx-6 flex-shrink-0 
                       text-gray-800 dark:text-gray-100"
          >
            <Icon className="h-12 w-12" aria-label={name} />
          </div>
        ))}
      </div>
    </div>
  );
}
