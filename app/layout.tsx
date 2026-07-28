import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: '세특 스튜디오', description: '학생 활동 기록을 과목별 세특 초안으로 정리합니다.' };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="ko"><body>{children}</body></html>; }
