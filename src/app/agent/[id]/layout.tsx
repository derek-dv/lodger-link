import Sidebar from "./component/Sidebar";

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  return (
    <div>
      <Sidebar id={params.id} />
      <div className="p-4 sm:ml-64">{children}</div>
    </div>
  );
}
