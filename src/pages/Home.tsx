
import React from 'react'
import { TemplateStoreProvider } from '@/providers/template-store-provider'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import HomePage from './HomePage'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <TemplateStoreProvider>
        <Layout>
          <HomePage />
        </Layout>
        <Toaster />
      </TemplateStoreProvider>
    </ThemeProvider>
  )
}
