// src/pages/_app.tsx
import { SessionProvider } from 'next-auth/react';
import { DefaultSeo } from 'next-seo';
import type { AppType } from 'next/dist/shared/lib/utils';
import { Toaster } from 'react-hot-toast';
import { useDialogStore } from 'src/client-data/state/use-dialog-store';
import superjson from 'superjson';

import { Header } from '@components/layout/header/Header';
import { Dialog } from '@components/shared/dialog/Dialog';
import {
    SkipToContent,
    contentID,
} from '@components/shared/skip-to-content/SkipToContent';

import { httpBatchLink } from '@trpc/client/links/httpBatchLink';
import { loggerLink } from '@trpc/client/links/loggerLink';
import { withTRPC } from '@trpc/next';

import { config } from '../../site.config';
import type { AppRouter } from '../server/router';
import '../styles/globals.css';

const App: AppType = ({ Component, pageProps: { session, ...pageProps } }) => {
    const { isOpen, handleDialogClose, dialogContent } = useDialogStore();

    return (
        <>
            <DefaultSeo {...config} />
            <SessionProvider session={session}>
                <div className="flex min-h-screen grow flex-col">
                    <SkipToContent />
                    <Header />
                    <div id={contentID} />
                    <Toaster
                        position="bottom-left"
                        gutter={8}
                        toastOptions={{
                            duration: 5000,
                            style: {
                                background: '#171717',
                                color: '#fff',
                                border: '1px solid #333333',
                                paddingLeft: '1rem',
                                paddingRight: '1rem',
                            },
                        }}
                    />

                    <Component {...pageProps} />
                    <Dialog open={isOpen} onOpenChange={handleDialogClose}>
                        {dialogContent}
                    </Dialog>
                </div>
            </SessionProvider>
        </>
    );
};

const getBaseUrl = () => {
    if (typeof window !== 'undefined') return ''; // browser should use relative url
    if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url
    return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
};

export default withTRPC<AppRouter>({
    config() {
        /**
         * If you want to use SSR, you need to use the server's full URL
         * @link https://trpc.io/docs/ssr
         */
        const url = `${getBaseUrl()}/api/trpc`;

        const links = [
            loggerLink(),
            httpBatchLink({
                maxBatchSize: 10,
                url,
            }),
        ];

        return {
            url,
            links,
            transformer: superjson,
            /**
             * @link https://react-query.tanstack.com/reference/QueryClient
             */
            // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
        };
    },
    /**
     * @link https://trpc.io/docs/ssr
     */
    ssr: true,
})(App);
