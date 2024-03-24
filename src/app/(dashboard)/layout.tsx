import { UserNav } from "@/app/components/ui/user-nav";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="container">
      <UserNav />
      {children}
    </div>
  );
}
