import { GlobalProvider } from '@/components/globalContext';
import DashboardLayout from '@/components/Layout/DashboardLayout';
import '@/styles/datatables.css';
import '@/styles/globals.css';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import 'mantine-datatable/styles.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  const noLayoutPages = ['/login']

  const content = noLayoutPages.includes(router.pathname) ? (
    <Component {...pageProps} />
  ) : (
    <MantineProvider defaultColorScheme="auto">
      <DashboardLayout>
        <Component {...pageProps} />
      </DashboardLayout>
    </MantineProvider>
  )

  return <GlobalProvider>{content}</GlobalProvider>
}
