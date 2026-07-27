import './globals.css'
import type { ReactNode } from 'react'
export const metadata = { title: '탐구의 첫 문장', description: '고등학생을 위한 탐구 주제 탐색기' }
export default function Layout({children}:{children:ReactNode}) { return <html lang="ko"><body>{children}</body></html> }
