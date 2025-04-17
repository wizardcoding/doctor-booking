import Header from "@/components/header";
import { Provider } from "react-redux";
import { store } from "@/app/store/store";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Provider store={store}>
        <Header />
        {children}
      </Provider>
    </main>
  );
}
