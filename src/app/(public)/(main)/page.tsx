import dynamic from "next/dynamic";

const HomeComponent = dynamic(() => import("@/components/home/homeComponent"));

export default function Home() {
  return (
    <HomeComponent />
  );
}
