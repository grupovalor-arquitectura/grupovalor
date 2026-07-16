import DashboardActions from "../components/dashboard/DashboardActions";
import DashboardStats from "../components/dashboard/DashboardStats";
import DashboardFeatured from "../components/dashboard/DashboardFeatured";

export default function Dashboard() {
  return (
    <>
      <DashboardActions />

      <DashboardStats />

      <DashboardFeatured />
    </>
  );
}