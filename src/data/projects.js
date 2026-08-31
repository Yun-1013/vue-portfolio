export const projects = [{
  id: 'cafe-landing',
  type: 'web',
  title: '午後咖啡店',
  year: '2026',
  cover: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=85',
  description: '以溫暖色調打造的咖啡店品牌首頁，練習響應式版面與細節動畫。',
  tags: ['HTML', 'CSS', 'RWD'],
  demoUrl: '#',
  githubUrl: '#'
}, {
  id: 'weather-dashboard',
  type: 'web',
  title: '晴雨之間',
  year: '2026',
  cover: 'https://images.unsplash.com/photo-1499346030926-9a72daac6c63?auto=format&fit=crop&w=1000&q=85',
  description: '整合天氣資料的視覺化儀表板，依照不同天氣切換畫面情緒。',
  tags: ['Vue', 'JavaScript', 'API'],
  demoUrl: '#',
  githubUrl: '#'
}, {
  id: 'plant-shop',
  type: 'web',
  title: '綠意選物',
  year: '2025',
  cover: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1000&q=85',
  description: '植物選物品牌的購物介面提案，著重產品資訊與留白層次。',
  tags: ['Vue', 'UI Design', 'CSS'],
  demoUrl: '#',
  githubUrl: '#'
}, {
  id: 'crystal-flower-beginner-01',
  type: 'handmade',
  category: 'crystal-flower',
  level: 'beginner',
  title: '春日小花',
  year: '2026',
  cover: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1000&q=85',
  description: '水晶花初級課程作品，練習花瓣塑形與基礎配色。',
  tags: ['水晶花', '初級'],
  materials: '金屬線、水晶膠、花藝膠帶'
}, {
  id: 'crystal-flower-intermediate-01',
  type: 'handmade',
  category: 'crystal-flower',
  level: 'intermediate',
  title: '紫藤花語',
  year: '2026',
  cover: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1000&q=85',
  description: '水晶花中級作品，嘗試以層次堆疊表現花串的自然垂墜感。',
  tags: ['水晶花', '中級'],
  materials: '金屬線、水晶膠、花藝膠帶'
}, {
  id: 'crystal-flower-jewelry-01',
  type: 'handmade',
  category: 'crystal-flower',
  level: 'jewelry',
  title: '花語耳飾',
  year: '2025',
  cover: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=85',
  description: '將水晶花縮小成日常可配戴的輕盈飾品。',
  tags: ['水晶花', '飾品'],
  materials: '金屬線、水晶膠、耳針配件'
}, {
  id: 'leather-card-holder-01',
  type: 'handmade',
  category: 'leather',
  title: '植鞣皮卡套',
  year: '2026',
  cover: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1000&q=85',
  description: '以手縫與邊油處理完成的簡約卡套，會隨使用時間留下獨特光澤。',
  tags: ['皮件', '植鞣皮'],
  materials: '植鞣皮、蠟線、邊油'
}];
export const crystalFlowerLevels = [{
  id: 'all',
  label: '全部作品'
}, {
  id: 'beginner',
  label: '初級'
}, {
  id: 'intermediate',
  label: '中級'
}, {
  id: 'advanced',
  label: '高級'
}, {
  id: 'instructor',
  label: '師資'
}, {
  id: 'associate-professor',
  label: '准教授'
}, {
  id: 'professor-training-1',
  label: '教授研習（一）'
}, {
  id: 'jewelry',
  label: '飾品'
}, {
  id: 'sketching',
  label: '寫生'
}, {
  id: 'daily-handmade',
  label: '日常手作區'
}];
export const findProject = id => projects.find(project => project.id === id);
