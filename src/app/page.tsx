import Main from '@/components/Main/Main'
import { Titillium_Web } from 'next/font/google'

const TitilliumWeb = Titillium_Web({ subsets: ['latin'], weight: '300' })

export default function Home () {
  return (
   <div className={TitilliumWeb.className}>
    <Main />
   </div>
  )
}
