"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function PageWrapper({ children }) {
  const pathname = usePathname();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState("fadeIn");

  useEffect(() => {
    setTransitionStage("fadeOut"); // start fade out when path changes
    const timeout = setTimeout(() => {
      setDisplayChildren(children);
      setTransitionStage("fadeIn"); // then fade in new page
    }, 500); // match animation duration

    return () => clearTimeout(timeout);
  }, [pathname, children]);

  return (
    <div className={`transition-container ${transitionStage}`}>
      {displayChildren}
    </div>
  );
}
