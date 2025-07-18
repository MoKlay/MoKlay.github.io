import { type PropsWithChildren } from 'react'
import Header from '../components/Header/index';

export default function Layout({children}: PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
