import CompanyHeader from "./CompanyHeader";

export default function CompanyLayout({ children }) {
  return (
    <>
       <CompanyHeader />
      {children}
    </>
  );
}