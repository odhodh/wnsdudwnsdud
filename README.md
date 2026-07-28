# 세특 스튜디오

학생 활동 키워드를 수집·작성·검토하는 3-에이전트 세특 초안 웹앱입니다.

## 실행

1. `npm install`
2. `.env.local`에 `.env.example`의 Supabase/Gemini 값을 입력합니다.
3. Supabase SQL Editor에서 `supabase/schema.sql`을 실행합니다.
4. `npm run dev` 또는 Vercel에 저장소를 연결해 배포합니다.

Gemini API 키가 없는 경우에도 입력 내용을 바탕으로 로컬 안전 초안을 표시합니다. 키가 있으면 선택한 모델로 생성하고, 검토 지침을 포함한 JSON 응답을 받습니다. API 키는 `/api/generate` 서버 라우트에서만 외부 Gemini API에 전달됩니다.

## Vercel + Supabase 호환성 체크 포인트

- App Router 서버 라우트는 Vercel Node.js 런타임에서 실행됩니다.
- Supabase 서비스 역할 키는 `SUPABASE_SERVICE_ROLE_KEY`로만 서버에 등록해야 합니다.
- `setuk_records`는 과목별 1행 구조이며 생성일시를 포함합니다.
- RLS는 켜져 있고, 브라우저에서 직접 DB를 호출하지 않습니다.
- 배포 전 Vercel 환경 변수에 `NEXT_PUBLIC_SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `GEMINI_API_KEY`를 등록하세요. 개인 메뉴에서 입력한 키가 있으면 해당 요청에 우선 사용됩니다.
