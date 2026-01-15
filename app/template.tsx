import PageTransitionWrapper from './_components/PageTransitionWrapper'

export default function Template({ children }: { children: React.ReactNode }) {
  return <PageTransitionWrapper>
    {children}
  </PageTransitionWrapper>
}
