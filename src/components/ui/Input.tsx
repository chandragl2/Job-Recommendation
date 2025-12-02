import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({ label, error, className, ...props }: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-slate-700 mb-2">
          {label}
        </label>
      )}
      <input
        className={cn(
          "w-full px-4 py-2.5 border border-slate-300 rounded-lg",
          "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500",
          "bg-white text-slate-900 placeholder:text-slate-400",
          "transition-colors duration-200",
          error && "border-red-500 focus:ring-red-500",
          className
        )}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}
