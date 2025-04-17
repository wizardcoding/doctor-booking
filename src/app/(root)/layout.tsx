import StoreProvider from "@/components/provider";
import Header from "@/components/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <StoreProvider>
        <Header />
        {children}
      </StoreProvider>
    </main>
  );
}
