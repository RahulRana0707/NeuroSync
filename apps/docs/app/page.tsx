import GridPattern from "@/components/magicui/animated-grid-pattern";
import { Button } from "@/components/ui/button";
import { ThemeToggler } from "@/components/ui/theme-toggler";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <>
      <div className="relative flex min-h-screen w-full items-center justify-center gap-8 flex-col rounded-lg border bg-background p-20 md:shadow-xl">
        <h2 className="w-full z-20 font-semibold text-center text-balance text-8xl xs:text-4xl md:text-6xl lg:text-7xl">
          NeuroSync is the new way to challenge your mind.
        </h2>
        <h3 className="w-full z-20 font-normal text-center text-balance text-3xl xs:text-xl md:text-2xl lg:text-3xl">
          Beautifully designed, real-time multiplayer memory game built with
          cutting-edge web technologies for an immersive brain-training
          experience.
        </h3>
        <div className="flex gap-4">
          <Button
            variant="default"
            className="font-medium text-base text-pretty"
            size={"lg"}
          >
            Play Now for Free →
          </Button>
          <Button
            variant="ghost"
            size={"lg"}
            className="font-medium text-base text-pretty"
          >
            ✨ Discover NeuroSync Features →
          </Button>
        </div>
        <GridPattern
          numSquares={35}
          maxOpacity={0.2}
          duration={2}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[100%] skew-y-12"
          )}
        />
        <div className="absolute top-0 right-0 z-20 p-8">
          <ThemeToggler />
        </div>
      </div>
    </>
  );
}
