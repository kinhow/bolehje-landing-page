import { MainLayout } from "@/layouts";
import { BolehJe, WhyBolehJe, Relaje, AnatomyOfBolehJe, MoreFeatures, GooglePlay, GetInTouch } from "@/features";

const HomePage = () => {
  return (
    <MainLayout>
      <div className="max-w-[1200px] mx-auto grid gap-10 grid-cols-12">
        <div className="flex flex-col gap-10 col-span-5">
          <BolehJe />
          <Relaje />
          <MoreFeatures />
        </div>
        <div className="flex flex-col gap-10 col-span-7">
          <WhyBolehJe />
          <AnatomyOfBolehJe />

          <div className="grid gap-10 grid-cols-12">
            <div className="flex gap-10 col-span-6">
              <GooglePlay />
            </div>
            <div className="flex gap-10 col-span-6">
              <GetInTouch />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default HomePage;
