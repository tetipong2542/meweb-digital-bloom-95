
import React from 'react'
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ModeToggle } from "@/components/mode-toggle"
import { MobileNav } from "@/components/nav/mobile-nav"

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-4">
          <div>
            <a href="/">
              <img
                className="block dark:hidden"
                src="/logo.svg"
                alt="imgsrc Logo"
                width={36}
                height={36}
              />
            </a>

            <a href="/">
              <img
                className="hidden dark:block"
                src="/logo_dark.svg"
                alt="imgsrc Logo"
                width={36}
                height={36}
              />
            </a>
          </div>
        </div>

        <div className="hidden space-x-2 sm:flex">
          <Button variant="link">
            <a href="#" target="_blank">
              Support
            </a>
          </Button>

          <ModeToggle />
        </div>

        {/* Mobile navigation */}
        <div className="flex space-x-2 sm:hidden">
          <ModeToggle />

          <MobileNav />
        </div>
      </nav>

      <main className="mx-auto min-h-[calc(100dvh-84px)] max-w-7xl px-2 py-6 sm:px-6 lg:px-8">
        {children}
      </main>

      <Separator />

      <footer className="mx-auto max-w-7xl px-2 py-6 sm:px-6 lg:px-8">
        <div className="flex justify-between">
          <div className="flex items-center space-x-2">
            <div className="font-mono font-semibold">
              <a href="https://imgsrc.io">.imgsrc</a>
            </div>

            <div>
              <Button variant="link" asChild>
                <a href="/">Home</a>
              </Button>

              <Button variant="link" asChild>
                <a href="#" target="_blank">
                  Support
                </a>
              </Button>
            </div>
          </div>

          {/* only shows on Desktop */}
          <div className="hidden items-center gap-x-2 md:inline-flex">
            <svg
              className="h-2 w-2 fill-green-400"
              viewBox="0 0 6 6"
              aria-hidden="true"
            >
              <circle cx={3} cy={3} r={3} />
            </svg>
            <span className="font-mono text-sm font-medium">
              Operational
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}
