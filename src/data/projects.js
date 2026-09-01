// 將 src/img 內的圖片交由 Vite 自動載入與打包。
// 新增作品時只需要填寫 imagePaths，不必逐張 import 圖片。
const localImages = import.meta.glob('../img/**/*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
  import: 'default'
});

const getLocalImage = imagePath => {
  const image = localImages[`../img/${imagePath}`];

  if (!image) {
    console.warn(`找不到作品圖片：${imagePath}`);
  }

  return image;
};

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
},
 {
  id: 'crystal-flower-junior-01',
  type: 'handmade',
  category: 'crystal-flower',
  level: 'junior',
  title: '玫瑰花',
  year: '2026',
  imagePaths: [
    'flower/junior/junior-01-1.jpg'
  ],
  description: '水晶花初級課程作品，粉紫色的玫瑰花。',
  tags: ['水晶花', '初級'],
  materials: '花藝鐵絲、造花液、花藝膠帶'
}, 
{
  id: 'crystal-flower-senior-01',
  type: 'handmade',
  category: 'crystal-flower',
  level: 'senior',
  title: '紫藤花語',
  year: '2026',
  cover: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1000&q=85',
  description: '水晶花中級作品，嘗試以層次堆疊表現花串的自然垂墜感。',
  tags: ['水晶花', '中級'],
  materials: '金屬線、水晶膠、花藝膠帶'
}, {
  id: 'crystal-flower-accessories-01',
  type: 'handmade',
  category: 'crystal-flower',
  level: 'accessories',
  title: '花語耳飾',
  year: '2025',
  imagePaths: [
    'flower/accessories/accessories-01-1.jpg'
  ],
  description: '將水晶花縮小成日常可配戴的輕盈飾品。',
  tags: ['水晶花', '飾品'],
  materials: '金屬線、水晶膠、耳針配件'
}, {
  id: 'leather-card-holder-01',
  type: 'handmade',
  category: 'leather',
  title: '植鞣皮卡套',
  year: '2026',
  imagePaths: [
    'leather/card-holder-01-1.jpg'
  ],
  description: '以手縫與邊油處理完成的簡約卡套，會隨使用時間留下獨特光澤。',
  tags: ['皮件', '植鞣皮'],
  materials: '植鞣皮、蠟線、邊油'
}].map(project => {
  // imagePaths 的第一張是卡片封面；詳細頁會使用全部圖片。
  const images = (project.imagePaths ?? []).map(getLocalImage).filter(Boolean);
  const fallbackImages = project.cover ? [project.cover] : [];

  return {
    ...project,
    cover: images[0] ?? project.cover,
    images: images.length ? images : fallbackImages
  };
});
export const crystalFlowerLevels = [{
  id: 'all',
  label: '全部作品'
}, {
  id: 'junior',
  label: '初級'
}, {
  id: 'senior',
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
  id: 'accessories',
  label: '飾品'
}, {
  id: 'nature',
  label: '寫生'
}, {
  id: 'daily-handmade',
  label: '日常手作區'
}];
export const findProject = id => projects.find(project => project.id === id);
