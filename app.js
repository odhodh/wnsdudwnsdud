const topics={
  '환경·기후':[['학교 주변 미세먼지는 시간대에 따라 어떻게 달라질까?','센서 데이터를 직접 수집해 교내 공기질을 분석해보세요.'],['우리 학교의 일회용품 사용량을 줄일 수 있을까?','일주일간 사용량을 조사하고 실천 전후를 비교해보세요.']],
  '과학·기술':[['스마트폰 사용 시간은 수면의 질에 영향을 줄까?','간단한 설문과 수면 기록으로 상관관계를 살펴보세요.'],['교실의 소음은 집중력에 어떤 영향을 줄까?','소음의 크기와 과제 수행 시간을 비교해보세요.']],
  '사회·문화':[['우리 반의 뉴스 소비 방식은 어떻게 다를까?','매체별 신뢰도와 이용 습관을 인터뷰해보세요.'],['학교 공간은 모두에게 편리할까?','친구들의 동선을 관찰해 더 나은 공간을 제안해보세요.']],
  '언어·미디어':[['짧은 영상의 제목은 시청 의도에 영향을 줄까?','같은 내용의 제목을 바꿔 반응을 비교해보세요.'],['온라인 댓글의 말투는 어떻게 달라지고 있을까?','주제별 댓글을 분류해 언어 특징을 찾아보세요.']],
  '예술·디자인':[['색의 온도감은 공간의 인상을 바꿀까?','색 조합을 활용해 선호도와 감정 변화를 조사해보세요.'],['학교 안내 표지는 얼마나 직관적일까?','실제 사용자를 대상으로 이해 시간을 측정해보세요.']],
  '건강·생활':[['아침 식사는 오전 수업 집중도와 관계가 있을까?','식사 여부와 자기 평가 집중도를 기록해보세요.'],['공부할 때 듣는 음악은 기억에 영향을 줄까?','음악 조건별 단어 기억 개수를 비교해보세요.']]
};
const chips=document.querySelector('#chips'), selected=new Set(), saved=JSON.parse(localStorage.getItem('savedTopics')||'[]');
Object.keys(topics).forEach(key=>{const b=document.createElement('button');b.className='chip';b.textContent=key;b.onclick=()=>{selected.has(key)?(selected.delete(key),b.classList.remove('selected')):(selected.add(key),b.classList.add('selected'));document.querySelector('#recommendBtn').disabled=!selected.size;document.querySelector('#selectionHint').textContent=selected.size?`${selected.size}개 선택됨`:'복수 선택 가능'};chips.appendChild(b)});
const grid=document.querySelector('#resultGrid');
function render(){grid.innerHTML='';[...selected].flatMap(k=>topics[k].map(x=>({key:k,title:x[0],desc:x[1]}))).slice(0,6).forEach((x,i)=>{const c=document.createElement('article');c.className='card';const isSaved=saved.includes(x.title);c.innerHTML=`<span class="card-tag">${String(i+1).padStart(2,'0')} / ${x.key}</span><h3>${x.title}</h3><p>${x.desc}</p><button class="save ${isSaved?'saved':''}">${isSaved?'♥ 저장됨':'♡ 주제 저장하기'}</button>`;c.querySelector('.save').onclick=()=>{const idx=saved.indexOf(x.title);idx>-1?saved.splice(idx,1):saved.push(x.title);localStorage.setItem('savedTopics',JSON.stringify(saved));updateCount();render()};grid.appendChild(c)})}
function updateCount(){document.querySelector('#savedCount').textContent=saved.length}updateCount();
document.querySelector('#recommendBtn').onclick=()=>{render();document.querySelector('#results').classList.add('show');document.querySelector('#results').scrollIntoView({behavior:'smooth',block:'start'})};
document.querySelector('#resetBtn').onclick=()=>{selected.clear();document.querySelectorAll('.chip').forEach(x=>x.classList.remove('selected'));document.querySelector('#recommendBtn').disabled=true;document.querySelector('#selectionHint').textContent='복수 선택 가능';document.querySelector('#results').classList.remove('show');document.querySelector('#explore').scrollIntoView({behavior:'smooth'})};
document.querySelector('#savedNav').onclick=()=>{if(!saved.length){alert('아직 저장한 주제가 없어요. 마음에 드는 주제의 ♡ 버튼을 눌러보세요.');return}alert(`저장한 주제 ${saved.length}개\n\n${saved.join('\n')}`)};
