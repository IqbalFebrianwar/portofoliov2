import { PropsWithChildren } from "react";


export default function GlassCard({ children }: PropsWithChildren) {
return (
<div className="max-w-xl w-full mx-auto rounded-3xl bg-white/40 backdrop-blur-md shadow-lg p-8 border border-white/60">
{children}
</div>
);
}