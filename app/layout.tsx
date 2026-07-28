import './globals.css'
import type { ReactNode } from 'react'
export const metadata={title:'세특 스튜디오',description:'학생 활동을 세부능력 및 특기사항 초안으로 정리하는 교사 업무 보조 도구'}
export default function Layout({children}:{children:ReactNode}){return <html lang="ko"><body>{children}</body></html>}
