import dynamic from "next/dynamic";

const MainUI = dynamic(() => import("@/components/home/mainUI"));
const ContentUI = dynamic(() => import("@/components/home/contentUI"));
const BannerUI = dynamic(() => import("@/components/home/bannerUI"));
const ServiceUI = dynamic(() => import("@/components/home/serviceUI"));
const SkillsUI = dynamic(() => import("@/components/home/skillsUI"));
const ProjectsUI = dynamic(() => import("@/components/home/projects"));
const NavbarUI = dynamic(() => import("@/components/home/navbarUI"));
const PriceUI = dynamic(() => import("@/components/home/price"));
const FooterUI = dynamic(() => import("@/components/home/footerUI"));
const KonsultasiUI = dynamic(() => import("@/components/home/konsultanUI"));

export default function Home() {
  return (
    <MainUI>
      <NavbarUI />
      <ContentUI>
        <BannerUI />
        <ServiceUI />
        <SkillsUI />
        <ProjectsUI />
        <PriceUI />
        <KonsultasiUI />
        <FooterUI />
      </ContentUI>
    </MainUI>
  );
}
