import HeroSection from '@/components/sections/HeroSection';
import WhatIBuildSection from '@/components/sections/WhatIBuildSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <HeroSection />
      <WhatIBuildSection />
    </main>
  );
}
