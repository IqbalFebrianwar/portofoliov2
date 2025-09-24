"use client";
import { useEffect, useRef } from "react";


export default function Hearts({ count = 18 }: { count?: number }) {
const containerRef = useRef<HTMLDivElement>(null);


useEffect(() => {
const el = containerRef.current!;
const hearts = Array.from({ length: count }).map(() => {
const node = document.createElement("span");
node.className = "heart pointer-events-none";
node.style.color = `hsl(${Math.random()*10+350} 80% 70%)`;
node.style.left = Math.random() * 100 + "vw";
node.style.bottom = "-20px";
node.style.animation = `floatUp ${12 + Math.random()*6}s linear ${Math.random()*6}s infinite`;
node.style.opacity = String(0.4 + Math.random()*0.5);
el.appendChild(node);
return node;
});
return () => { hearts.forEach(h => h.remove()); };
}, [count]);


return <div ref={containerRef} className="fixed inset-0 overflow-hidden -z-10" aria-hidden />;
}