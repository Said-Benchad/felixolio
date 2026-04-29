export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-black/30 text-xs uppercase tracking-widest mb-3 font-medium">
      {children}
    </p>
  );
}
