import BlobBackground from "../_components/background/BlobBackground";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <BlobBackground />
      {children}
    </>
  );
}
