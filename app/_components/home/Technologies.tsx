import DockerLogo from "@/app/_assets/DockerLogo";
import NestLogo from "@/app/_assets/NestLogo";
import NextLogo from "@/app/_assets/NextLogo";
import PGIcon from "@/app/_assets/PGIcon";
import ReactLogo from "@/app/_assets/ReactLogo";
import TSLogo from "@/app/_assets/TSLogo";
import TSQueryLogo from "@/app/_assets/TSQueryLogo";
import TWLogo from "@/app/_assets/TWLogo";

export default function TechnologiesSection() {
  const techs = [
    { icon: TSLogo, label: 'TypeScript' },
    { icon: ReactLogo, label: 'React' },
    { icon: NextLogo, label: 'Next.js' },
    { icon: TWLogo, label: 'Tailwind' },
    { icon: TSQueryLogo, label: 'TanStack Query' },
    { icon: NestLogo, label: 'Nest.js' },
    { icon: PGIcon, label: 'PostgreSQL' },
    { icon: DockerLogo, label: 'Docker' },
  ]
  return (
    <section className="py-12">
      <h2 className="pb-4 text-3xl font-bold">Technologies</h2>
      <div className="grid grid-cols-3 gap-4 pt-4 place-items-center sm:grid-cols-3 sm:gap-8 md:grid-cols-4 xl:grid-cols-8">
        {techs.map(t => (
          <div key={t.label} className="flex flex-col items-center justify-center w-20 gap-2 transition-transform rounded-md bg-accent-foreground/10 aspect-square backdrop-blur-xs hover:scale-110 sm:w-32">
            <t.icon className="size-10" />
            <span className="text-sm font-medium text-center">{t.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
