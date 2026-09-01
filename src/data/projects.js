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

const crystalFlowerLevelLabels = {
  junior: '初級',
  senior: '中級',
  advanced: '高級',
  instructor: '師資',
  'associate-professor': '准教授',
  'professor-training-1': '教授研習（一）',
  accessories: '飾品',
  nature: '寫生',
  'daily-handmade': '日常手作'
};

const getCrystalFlowerImagePaths = (folder, imagePrefix, number) => [1, 2]
  .map(position => `flower/${folder}/${imagePrefix}-${number}-${position}.jpg`)
  .filter(imagePath => Boolean(localImages[`../img/${imagePath}`]));

// 每筆資料都可直接補上作品名稱、年份、介紹與材料；圖片則依編號自動對應。
const crystalFlowerDrafts = [
  { level: 'junior', number: '01', title: '玫瑰花', year: '2026', description: '水晶花初級課程作品，粉紫色的玫瑰花。', materials: '花藝鐵絲、造花液、花藝膠帶' },
  { level: 'junior', number: '02', title: '初級作品 02', year: '', description: '作品介紹待補', materials: '' },
  { level: 'junior', number: '03', title: '初級作品 03', year: '', description: '作品介紹待補', materials: '' },
  { level: 'junior', number: '04', title: '初級作品 04', year: '', description: '作品介紹待補', materials: '' },
  { level: 'junior', number: '05', title: '初級作品 05', year: '', description: '作品介紹待補', materials: '' },
  { level: 'junior', number: '06', title: '初級作品 06', year: '', description: '作品介紹待補', materials: '' },
  { level: 'junior', number: '07', title: '初級作品 07', year: '', description: '作品介紹待補', materials: '' },
  { level: 'junior', number: '08', title: '初級作品 08', year: '', description: '作品介紹待補', materials: '' },
  { level: 'junior', number: '09', title: '初級作品 09', year: '', description: '作品介紹待補', materials: '' },
  { level: 'junior', number: '10', title: '初級作品 10', year: '', description: '作品介紹待補', materials: '' },
  { level: 'junior', number: '11', title: '初級作品 11', year: '', description: '作品介紹待補', materials: '' },
  { level: 'junior', number: '12', title: '初級作品 12', year: '', description: '作品介紹待補', materials: '' },
  { level: 'senior', number: '01', title: '紫藤花語', year: '2026', description: '水晶花中級作品，嘗試以層次堆疊表現花串的自然垂墜感。', materials: '金屬線、水晶膠、花藝膠帶' },
  { level: 'senior', number: '02', title: '中級作品 02', year: '', description: '作品介紹待補', materials: '' },
  { level: 'senior', number: '03', title: '中級作品 03', year: '', description: '作品介紹待補', materials: '' },
  { level: 'senior', number: '04', title: '中級作品 04', year: '', description: '作品介紹待補', materials: '' },
  { level: 'senior', number: '05', title: '中級作品 05', year: '', description: '作品介紹待補', materials: '' },
  { level: 'senior', number: '06', title: '中級作品 06', year: '', description: '作品介紹待補', materials: '' },
  { level: 'senior', number: '07', title: '中級作品 07', year: '', description: '作品介紹待補', materials: '' },
  { level: 'senior', number: '08', title: '中級作品 08', year: '', description: '作品介紹待補', materials: '' },
  { level: 'senior', number: '09', title: '中級作品 09', year: '', description: '作品介紹待補', materials: '' },
  { level: 'senior', number: '10', title: '中級作品 10', year: '', description: '作品介紹待補', materials: '' },
  { level: 'senior', number: '11', title: '中級作品 11', year: '', description: '作品介紹待補', materials: '' },
  { level: 'senior', number: '12', title: '中級作品 12', year: '', description: '作品介紹待補', materials: '' },
  { level: 'advanced', number: '01', title: '高級作品 01', year: '', description: '作品介紹待補', materials: '' },
  { level: 'advanced', number: '02', title: '高級作品 02', year: '', description: '作品介紹待補', materials: '' },
  { level: 'advanced', number: '03', title: '高級作品 03', year: '', description: '作品介紹待補', materials: '' },
  { level: 'advanced', number: '04', title: '高級作品 04', year: '', description: '作品介紹待補', materials: '' },
  { level: 'advanced', number: '05', title: '高級作品 05', year: '', description: '作品介紹待補', materials: '' },
  { level: 'advanced', number: '06', title: '高級作品 06', year: '', description: '作品介紹待補', materials: '' },
  { level: 'advanced', number: '07', title: '高級作品 07', year: '', description: '作品介紹待補', materials: '' },
  { level: 'advanced', number: '08', title: '高級作品 08', year: '', description: '作品介紹待補', materials: '' },
  { level: 'advanced', number: '09', title: '高級作品 09', year: '', description: '作品介紹待補', materials: '' },
  { level: 'advanced', number: '10', title: '高級作品 10', year: '', description: '作品介紹待補', materials: '' },
  { level: 'advanced', number: '11', title: '高級作品 11', year: '', description: '作品介紹待補', materials: '' },
  { level: 'advanced', number: '12', title: '高級作品 12', year: '', description: '作品介紹待補', materials: '' },
  { level: 'instructor', number: '01', title: '師資作品 01', year: '', description: '作品介紹待補', materials: '' },
  { level: 'instructor', number: '02', title: '師資作品 02', year: '', description: '作品介紹待補', materials: '' },
  { level: 'instructor', number: '03', title: '師資作品 03', year: '', description: '作品介紹待補', materials: '' },
  { level: 'instructor', number: '04', title: '師資作品 04', year: '', description: '作品介紹待補', materials: '' },
  { level: 'instructor', number: '05', title: '師資作品 05', year: '', description: '作品介紹待補', materials: '' },
  { level: 'instructor', number: '06', title: '師資作品 06', year: '', description: '作品介紹待補', materials: '' },
  { level: 'instructor', number: '07', title: '師資作品 07', year: '', description: '作品介紹待補', materials: '' },
  { level: 'instructor', number: '08', title: '師資作品 08', year: '', description: '作品介紹待補', materials: '' },
  { level: 'instructor', number: '09', title: '師資作品 09', year: '', description: '作品介紹待補', materials: '' },
  { level: 'instructor', number: '10', title: '師資作品 10', year: '', description: '作品介紹待補', materials: '' },
  { level: 'instructor', number: '11', title: '師資作品 11', year: '', description: '作品介紹待補', materials: '' },
  { level: 'instructor', number: '12', title: '師資作品 12', year: '', description: '作品介紹待補', materials: '' },
  { level: 'associate-professor', imageFolder: 'professor', imagePrefix: 'professor', number: '01', title: '准教授作品 01', year: '', description: '作品介紹待補', materials: '' },
  { level: 'associate-professor', imageFolder: 'professor', imagePrefix: 'professor', number: '02', title: '准教授作品 02', year: '', description: '作品介紹待補', materials: '' },
  { level: 'associate-professor', imageFolder: 'professor', imagePrefix: 'professor', number: '03', title: '准教授作品 03', year: '', description: '作品介紹待補', materials: '' },
  { level: 'associate-professor', imageFolder: 'professor', imagePrefix: 'professor', number: '04', title: '准教授作品 04', year: '', description: '作品介紹待補', materials: '' },
  { level: 'associate-professor', imageFolder: 'professor', imagePrefix: 'professor', number: '05', title: '准教授作品 05', year: '', description: '作品介紹待補', materials: '' },
  { level: 'associate-professor', imageFolder: 'professor', imagePrefix: 'professor', number: '06', title: '准教授作品 06', year: '', description: '作品介紹待補', materials: '' },
  { level: 'associate-professor', imageFolder: 'professor', imagePrefix: 'professor', number: '07', title: '准教授作品 07', year: '', description: '作品介紹待補', materials: '' },
  { level: 'associate-professor', imageFolder: 'professor', imagePrefix: 'professor', number: '08', title: '准教授作品 08', year: '', description: '作品介紹待補', materials: '' },
  { level: 'associate-professor', imageFolder: 'professor', imagePrefix: 'professor', number: '09', title: '准教授作品 09', year: '', description: '作品介紹待補', materials: '' },
  { level: 'associate-professor', imageFolder: 'professor', imagePrefix: 'professor', number: '10', title: '准教授作品 10', year: '', description: '作品介紹待補', materials: '' },
  { level: 'professor-training-1', imageFolder: 'professor1', imagePrefix: 'professor1', number: '01', title: '教授研習（一）作品 01', year: '', description: '作品介紹待補', materials: '' },
  { level: 'professor-training-1', imageFolder: 'professor1', imagePrefix: 'professor1', number: '02', title: '教授研習（一）作品 02', year: '', description: '作品介紹待補', materials: '' },
  { level: 'professor-training-1', imageFolder: 'professor1', imagePrefix: 'professor1', number: '03', title: '教授研習（一）作品 03', year: '', description: '作品介紹待補', materials: '' },
  { level: 'professor-training-1', imageFolder: 'professor1', imagePrefix: 'professor1', number: '04', title: '教授研習（一）作品 04', year: '', description: '作品介紹待補', materials: '' },
  { level: 'professor-training-1', imageFolder: 'professor1', imagePrefix: 'professor1', number: '05', title: '教授研習（一）作品 05', year: '', description: '作品介紹待補', materials: '' },
  { level: 'professor-training-1', imageFolder: 'professor1', imagePrefix: 'professor1', number: '06', title: '教授研習（一）作品 06', year: '', description: '作品介紹待補', materials: '' },
  { level: 'professor-training-1', imageFolder: 'professor1', imagePrefix: 'professor1', number: '07', title: '教授研習（一）作品 07', year: '', description: '作品介紹待補', materials: '' },
  { level: 'professor-training-1', imageFolder: 'professor1', imagePrefix: 'professor1', number: '08', title: '教授研習（一）作品 08', year: '', description: '作品介紹待補', materials: '' },
  { level: 'professor-training-1', imageFolder: 'professor1', imagePrefix: 'professor1', number: '09', title: '教授研習（一）作品 09', year: '', description: '作品介紹待補', materials: '' },
  { level: 'professor-training-1', imageFolder: 'professor1', imagePrefix: 'professor1', number: '10', title: '教授研習（一）作品 10', year: '', description: '作品介紹待補', materials: '' },
  { level: 'accessories', number: '01', title: '飾品作品 01', year: '', description: '作品介紹待補', materials: '' },
  { level: 'accessories', number: '02', title: '飾品作品 02', year: '', description: '作品介紹待補', materials: '' },
  { level: 'accessories', number: '03', title: '飾品作品 03', year: '', description: '作品介紹待補', materials: '' },
  { level: 'accessories', number: '04', title: '飾品作品 04', year: '', description: '作品介紹待補', materials: '' },
  { level: 'accessories', number: '05', title: '飾品作品 05', year: '', description: '作品介紹待補', materials: '' },
  { level: 'accessories', number: '06', title: '飾品作品 06', year: '', description: '作品介紹待補', materials: '' },
  { level: 'accessories', number: '07', title: '飾品作品 07', year: '', description: '作品介紹待補', materials: '' },
  { level: 'accessories', number: '08', title: '飾品作品 08', year: '', description: '作品介紹待補', materials: '' },
  { level: 'accessories', number: '09', title: '飾品作品 09', year: '', description: '作品介紹待補', materials: '' },
  { level: 'accessories', number: '10', title: '飾品作品 10', year: '', description: '作品介紹待補', materials: '' },
  { level: 'accessories', number: '11', title: '飾品作品 11', year: '', description: '作品介紹待補', materials: '' },
  { level: 'accessories', number: '12', title: '飾品作品 12', year: '', description: '作品介紹待補', materials: '' },
  { level: 'accessories', number: '13', title: '飾品作品 13', year: '', description: '作品介紹待補', materials: '' },
  { level: 'accessories', number: '14', title: '飾品作品 14', year: '', description: '作品介紹待補', materials: '' },
  { level: 'accessories', number: '15', title: '飾品作品 15', year: '', description: '作品介紹待補', materials: '' },
  { level: 'accessories', number: '16', title: '飾品作品 16', year: '', description: '作品介紹待補', materials: '' },
  { level: 'accessories', number: '17', title: '飾品作品 17', year: '', description: '作品介紹待補', materials: '' },
  { level: 'accessories', number: '18', title: '飾品作品 18', year: '', description: '作品介紹待補', materials: '' },
  { level: 'accessories', number: '19', title: '飾品作品 19', year: '', description: '作品介紹待補', materials: '' },
  { level: 'accessories', number: '20', title: '飾品作品 20', year: '', description: '作品介紹待補', materials: '' },
  { level: 'accessories', number: '21', title: '飾品作品 21', year: '', description: '作品介紹待補', materials: '' },
  { level: 'accessories', number: '22', title: '飾品作品 22', year: '', description: '作品介紹待補', materials: '' },
  { level: 'accessories', number: '23', title: '飾品作品 23', year: '', description: '作品介紹待補', materials: '' },
  { level: 'accessories', number: '24', title: '飾品作品 24', year: '', description: '作品介紹待補', materials: '' },
  { level: 'nature', number: '01', title: '寫生作品 01', year: '', description: '作品介紹待補', materials: '' },
  { level: 'nature', number: '02', title: '寫生作品 02', year: '', description: '作品介紹待補', materials: '' },
  { level: 'nature', number: '03', title: '寫生作品 03', year: '', description: '作品介紹待補', materials: '' },
  { level: 'nature', number: '04', title: '寫生作品 04', year: '', description: '作品介紹待補', materials: '' },
  { level: 'nature', number: '05', title: '寫生作品 05', year: '', description: '作品介紹待補', materials: '' },
  { level: 'nature', number: '06', title: '寫生作品 06', year: '', description: '作品介紹待補', materials: '' },
  { level: 'nature', number: '07', title: '寫生作品 07', year: '', description: '作品介紹待補', materials: '' },
  { level: 'nature', number: '08', title: '寫生作品 08', year: '', description: '作品介紹待補', materials: '' },
  { level: 'nature', number: '09', title: '寫生作品 09', year: '', description: '作品介紹待補', materials: '' },
  { level: 'nature', number: '10', title: '寫生作品 10', year: '', description: '作品介紹待補', materials: '' },
  { level: 'nature', number: '11', title: '寫生作品 11', year: '', description: '作品介紹待補', materials: '' },
  { level: 'nature', number: '12', title: '寫生作品 12', year: '', description: '作品介紹待補', materials: '' },
  { level: 'daily-handmade', imageFolder: 'otherclass', imagePrefix: 'otherclass', number: '01', title: '日常手作 01', year: '', description: '作品介紹待補', materials: '' }
];

const crystalFlowerProjects = crystalFlowerDrafts.map(project => ({
  ...project,
  id: `crystal-flower-${project.level}-${project.number}`,
  type: 'handmade',
  category: 'crystal-flower',
  imagePaths: getCrystalFlowerImagePaths(
    project.imageFolder ?? project.level,
    project.imagePrefix ?? project.level,
    project.number
  ),
  tags: ['水晶花', crystalFlowerLevelLabels[project.level]]
}));

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
}, ...crystalFlowerProjects, {
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
},{
  id: 'otherclass',
  label: '其他單品'
}, {
  id: 'daily-handmade',
  label: '日常手作區'
}];
export const findProject = id => projects.find(project => project.id === id);
