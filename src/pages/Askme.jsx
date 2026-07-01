import { useState, useEffect, useRef } from "react";
import FieldName from "../components/common/FieldName";
import { SqureBage } from "../components/HomePageComponents/Bage";

const Askme = () => {
  const URL = "https://ai-assistant-portfolio-chi.vercel.app/";
  const [shouldLoad, setShouldLoad] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px 200px 0px" },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      id="askme"
      ref={sectionRef}
      className="h-[110vh]  w-full  py-10  mt-10  flex flex-col  item-start justify-around gap-4 transition-all duration-300 "
    >
      <FieldName fieldName={"ai assistant"} text={"Ask me anything"} />
      <div className="flex flex-col gap-1.5">
        <p className="text-(--text-muted) font-sans text-sm md:text-base leading-relaxed max-w-xl">
          Have questions about my experience, projects, or skills? My AI
          assistant answers on my behalf.
        </p>
      </div>
      <SqureBage className="inline-flex w-fit items-center gap-2 rounded-xs border  border-amber-500/30 bg-[rgba(214,182,3,0.06)] px-3 py-1 text-[13px] font-mono font-medium text-amber-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-all duration-200 ">
        Note: If the AI Assistant is unavailable or not responding, the backend
        services may be temporarily paused. Please try again later
      </SqureBage>

      <div className="w-full   h-[600px] m-auto  overflow-hidden shadow-inner transition-colors duration-200 focus-within:border-[var(--accent)] ">
        {shouldLoad ? (
          <iframe
            className="w-full h-full bg-transparent"
            src={URL}
            title="AI Assistant Chat"
          ></iframe>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-md">
            <span className="text-(--text-muted) font-mono text-sm animate-pulse">
              Loading AI Assistant...
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Askme;
