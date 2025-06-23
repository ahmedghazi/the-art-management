import "./styles/index.scss";
import "./global.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import website from "./config/website";
import { PageContextProvider } from "./context/PageContext";
import { getSettings } from "./sanity-api/sanity-queries";
import { LocaleContextProvider } from "./context/LocaleContext";
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity";
import DesignSystem from "./components/ui/DS";
import BackToTop from "./components/ui/BackToTop";

export const metadata = {
  metadataBase: new URL(website.url),
  title: {
    template: `%s — ${website.title}`,
  },
  description: website.description,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = await getSettings();
  const { isEnabled } = await draftMode();

  return (
    <html lang='fr'>
      <body className={"is-loading"} data-theme='theme-tam'>
        <div id='page'>
          <LocaleContextProvider>
            <PageContextProvider>
              <Header settings={settings} />

              <main>
                {children}
                {/* <DesignSystem /> */}
              </main>
              <Footer settings={settings} />
              <BackToTop />

              {isEnabled && (
                <VisualEditing
                  zIndex={1000} // Optional
                />
              )}
            </PageContextProvider>
          </LocaleContextProvider>
        </div>
      </body>
    </html>
  );
}
