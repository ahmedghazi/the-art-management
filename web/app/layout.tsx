import "./styles/index.scss";
import "./global.css";

import { PageContextProvider } from "./context/PageContext";
import { getSettings } from "./sanity-api/sanity-queries";
import { LocaleContextProvider } from "./context/LocaleContext";
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity";
import { ViewTransitions } from "next-view-transitions";
import Header from "./components/Header";
import Footer from "./components/Footer";
import website from "./config/website";
import Splash from "./components/Splash";

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
    <ViewTransitions>
      <html lang='en'>
        <body className={"is-loading"} data-theme='theme-tam'>
          <div id='page'>
            <LocaleContextProvider>
              <PageContextProvider>
                <Header settings={settings} />

                <main>
                  {children}
                  <div className='visually-hidden grid-sample px-sm'>
                    <div className='grid grid--8'>
                      <div className='item'></div>
                    </div>
                  </div>
                  {/* <DesignSystem /> */}
                </main>
                <Footer settings={settings} />
                <Splash settings={settings} />

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
    </ViewTransitions>
  );
}
