"use client";
export default function DecorativeBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-teal-200/30 blur-[120px] animate-float" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-emerald-100/30 blur-[120px] animate-float-slow" />
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
        <defs><pattern id="clinical" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="#14B8A6" strokeWidth="0.5"/><circle cx="30" cy="30" r="1" fill="#14B8A6"/></pattern></defs>
        <rect width="100%" height="100%" fill="url(#clinical)" />
      </svg>
      <svg className="absolute top-[10%] left-[5%] w-[300px] h-[300px] opacity-[0.03]" viewBox="0 0 100 100">
        <line x1="0" y1="0" x2="100" y2="100" stroke="#14B8A6" strokeWidth="0.5" className="line-draw" />
        <line x1="100" y1="0" x2="0" y2="100" stroke="#14B8A6" strokeWidth="0.5" className="line-draw" style={{ animationDelay: '0.5s' }} />
      </svg>
    </div>
  );
}