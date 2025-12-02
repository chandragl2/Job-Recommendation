import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "bg-primary-600 text-slate-900 hover:bg-primary-700 shadow-md hover:shadow-lg font-semibold",
    secondary:
      "bg-slate-300 text-slate-900 hover:bg-slate-400 font-semibold shadow-sm",
    ghost: "bg-transparent text-primary-600 hover:bg-primary-50 font-semibold",
    danger: "bg-red-600 text-white hover:bg-red-700 font-semibold",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm rounded-md",
    md: "px-4 py-2 text-base rounded-lg",
    lg: "px-6 py-3 text-lg rounded-xl",
  };

  return (
    <button
      className={cn(
        "font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
}
