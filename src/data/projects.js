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

// public/classwork 內的檔案會由 Vite 原樣部署，適合保留課堂作業原本的互動。
const classworkBase = `${import.meta.env.BASE_URL}classwork/`;

const classworkProjects = [{
  id: 'waterpark-team-project', type: 'web', title: '水上樂園｜互動導覽網站', year: '2026',
  description: '團隊課程情境提案，整合園區導覽地圖、景點分類、活動與公告資訊，協助旅客規劃參觀。',
  imagePaths: ['web/waterpark-01-1.png'],
  tags: ['團隊專案', 'RWD', 'JavaScript', '互動地圖', 'AI協作'], demoUrl: 'https://fcu-11504-waterpark.dev-hub.io/',
  learningFocus: '資訊架構、互動導覽與響應式網站協作。',
  collaboration: { label: '團隊課程專案', role: '個人負責內容待補' }
}, {
  id: 'classwork-clinic-queue', type: 'web', title: '診所叫號系統', year: '2026',
  description: '模擬掛號、叫號與完成看診流程，並即時統計各種看診狀態。',
  imagePaths: ['web/clinic-queue-01-1.png'],
  tags: ['HTML', 'CSS', 'JavaScript', 'AI協作'], demoUrl: `${classworkBase}clinic-queue.html`,
  embedUrl: `${classworkBase}clinic-queue.html`, embedHeight: 1100,
  learningFocus: 'DOM 操作、狀態更新與資料渲染。'
}, {
  id: 'classwork-work-gallery', type: 'web', title: '我的作品展示館', year: '2026',
  description: '可新增、編輯、篩選與輪播作品的個人收藏展示介面。',
  imagePaths: ['web/work-gallery-01-1.png'],
  tags: ['Vue', 'Tailwind CSS', 'Swiper', 'AI協作'], demoUrl: `${classworkBase}work-gallery.html`,
  embedUrl: `${classworkBase}work-gallery.html`, embedHeight: 1280,
  learningFocus: 'Vue 資料綁定、表單互動、localStorage 與輪播元件。'
}, {
  id: 'classwork-rock-paper-scissors', type: 'web', title: '剪刀石頭布', year: '2026',
  description: '玩家與電腦對戰的互動小遊戲，搭配圖像呈現每回合結果。',
  imagePaths: ['web/rock-paper-scissors-01-1.png'],
  tags: ['JavaScript', 'DOM', '互動遊戲', 'AI協作'], demoUrl: `${classworkBase}rock-paper-scissors/index.html`,
  embedUrl: `${classworkBase}rock-paper-scissors/index.html`, embedHeight: 760,
  learningFocus: '事件監聽、隨機邏輯與條件判斷。'
}, {
  id: 'classwork-member-card', type: 'web', title: '會員小卡產生器', year: '2026',
  description: '輸入會員資料後，即時產生不同等級與樣式的會員卡。',
  imagePaths: ['web/member-card-01-1.png'],
  tags: ['Vue', '表單互動', 'AI協作'], demoUrl: `${classworkBase}member-card.html`,
  embedUrl: `${classworkBase}member-card.html`, embedHeight: 900,
  learningFocus: 'Vue 雙向綁定與即時視覺預覽。'
}, {
  id: 'classwork-score-search', type: 'web', title: '找尋分數作業', year: '2026',
  description: '以成績資料進行查詢與結果呈現的練習。',
  hidden: true,
  tags: ['JavaScript', '資料處理', 'AI協作'], demoUrl: `${classworkBase}score-search.html`,
  embedUrl: `${classworkBase}score-search.html`, embedHeight: 880,
  learningFocus: '陣列資料、查詢流程與條件判斷。'
}, {
  id: 'classwork-grade-report', type: 'web', title: '成績單作業', year: '2026',
  description: '輸入國文、數學與英文分數後，產生計算結果。',
  imagePaths: ['web/grade-report-01-1.png'],
  tags: ['JavaScript', '表單處理', 'AI協作'], demoUrl: `${classworkBase}grade-report.html`,
  embedUrl: `${classworkBase}grade-report.html`, embedHeight: 720,
  learningFocus: '輸入驗證、數值計算與事件處理。'
}, {
  id: 'classwork-calculator', type: 'web', title: '簡易計算機', year: '2026',
  description: '提供加、減、乘、除四則運算的基礎互動練習。',
  imagePaths: ['web/calculator-01-1.png'],
  tags: ['Vue', 'JavaScript', 'AI協作'], demoUrl: `${classworkBase}calculator.html`,
  embedUrl: `${classworkBase}calculator.html`, embedHeight: 700,
  learningFocus: '函式拆分與表單運算。'
}, {
  id: 'classwork-pacman-coin', type: 'web', title: '小精靈吃金幣', year: '2026',
  description: '以純 CSS 關鍵影格製作小精靈移動與吃金幣的動畫。',
  imagePaths: ['web/pacman-coin-01-1.png'],
  tags: ['CSS Animation', 'Keyframes', 'AI協作'], demoUrl: `${classworkBase}pacman-coin.html`,
  embedUrl: `${classworkBase}pacman-coin.html`, embedHeight: 620,
  learningFocus: 'CSS 造型與多段關鍵影格動畫。'
}, {
  id: 'classwork-memory-game', type: 'web', title: '翻牌配對小遊戲', year: '2026',
  description: '以動物圖示進行翻牌配對，記錄翻牌次數、已配對組數與剩餘組數。',
  imagePaths: ['web/memory-game-01-1.png'],
  tags: ['HTML', 'CSS', 'JavaScript', '互動遊戲', 'AI協作'], demoUrl: `${classworkBase}memory-game.html`,
  embedUrl: `${classworkBase}memory-game.html`, embedHeight: 900,
  learningFocus: '陣列洗牌、DOM 動態建立卡牌與配對狀態控制。'
}, {
  id: 'classwork-booking-system', type: 'web', title: '飯店訂房系統', year: '2026',
  description: '依入住日期、人數與房型進行篩選，並計算住宿晚數與訂房總價。',
  imagePaths: ['web/booking-system-01-1.png'],
  tags: ['HTML', 'CSS', 'JavaScript', '資料篩選', 'AI協作'], demoUrl: `${classworkBase}booking-system.html`,
  embedUrl: `${classworkBase}booking-system.html`, embedHeight: 1450,
  learningFocus: '表單驗證、陣列篩選、日期計算與訂單資料渲染。'
}, {
  id: 'classwork-loading-animation', type: 'web', title: '狗追貓 Loading 動畫', year: '2026',
  description: '運用 SASS 與 CSS 動畫製作具情境感的載入畫面。',
  imagePaths: ['web/loading-animation-01-1.png'],
  tags: ['SASS', 'CSS Animation', 'AI協作'], demoUrl: `${classworkBase}loading-animation/index.html`,
  embedUrl: `${classworkBase}loading-animation/index.html`, embedHeight: 520,
  learningFocus: 'SASS 結構與循環動畫設計。'
}];

// 首頁與網頁作品列表會依此排序，優先呈現互動性較高的課堂作業。
const featuredClassworkProjectIds = [
  'waterpark-team-project',
  'classwork-memory-game',
  'classwork-booking-system',
  'classwork-loading-animation',
  'classwork-pacman-coin'
];

const orderedClassworkProjects = [
  ...featuredClassworkProjectIds.map(id => classworkProjects.find(project => project.id === id)),
  ...classworkProjects.filter(project => !featuredClassworkProjectIds.includes(project.id))
].filter(Boolean);

const crystalFlowerLevelLabels = {
  junior: '初級',
  senior: '中級',
  advanced: '高級',
  instructor: '師資',
  'associate-professor': '准教授',
  'professor-training-1': '教授研習（一）',
  accessories: '飾品',
  nature: '寫生',
  'potted-flowers': '盆花',
  otherclass: '其他單品',
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
  { level: 'senior', number: '01', title: '紫藤花語', year: '2026', description: '水晶花中級作品，嘗試以層次堆疊表現花串的自然垂墜感。', materials: '花藝鐵絲、造花液、花藝膠帶' },
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
  { level: 'potted-flowers', number: '01', title: '盆花作品 01', year: '', description: '作品介紹待補', materials: '' },
  { level: 'potted-flowers', number: '02', title: '盆花作品 02', year: '', description: '作品介紹待補', materials: '' },
  { level: 'otherclass', number: '01', title: ' 重瓣洋桔梗 ', year: '', description: '作品介紹待補', materials: '花藝鐵絲、造花液、花藝膠帶' }
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

export const projects = [...orderedClassworkProjects, ...crystalFlowerProjects, {
  id: 'leather-01',
  type: 'handmade',
  category: 'leather',
  title: '小馬鞍手提包',
  year: '2026',
  imagePaths: [
    'leather/leather-01-1.jpg'
  ],
  description: '以手縫與邊油處理完成的簡約卡套，會隨使用時間留下獨特光澤。',
  tags: ['皮件', '鉻鞣皮'],
  materials: '鉻鞣皮、蠟線、邊油'
}, {
  id: 'leather-02',
  type: 'handmade',
  category: 'leather',
  title: '皮件 02',
  year: '',
  imagePaths: ['leather/leather-02-1.jpg'],
  description: '作品介紹待補',
  tags: ['皮件', '鉻鞣皮'],
  materials: ''
}, {
  id: 'leather-03',
  type: 'handmade',
  category: 'leather',
  title: '皮件 03',
  year: '',
  imagePaths: ['leather/leather-03-1.jpg'],
  description: '作品介紹待補',
  tags: ['皮件', '鉻鞣皮'],
  materials: ''
}, {
  id: 'leather-04',
  type: 'handmade',
  category: 'leather',
  title: '皮件 04',
  year: '',
  imagePaths: ['leather/leather-04-1.jpg'],
  description: '作品介紹待補',
  tags: ['皮件', '鉻鞣皮'],
  materials: ''
}, {
  id: 'fabric-01',
  type: 'handmade',
  category: 'fabric',
  title: '布製品 01',
  year: '',
  imagePaths: ['fabric/fabric-01-1.jpg'],
  description: '作品介紹待補',
  tags: ['布製品'],
  materials: ''
}, {
  id: 'fabric-02',
  type: 'handmade',
  category: 'fabric',
  title: '布製品 02',
  year: '',
  imagePaths: ['fabric/fabric-02-1.jpg'],
  description: '作品介紹待補',
  tags: ['布製品'],
  materials: ''
}, {
  id: 'fabric-03',
  type: 'handmade',
  category: 'fabric',
  title: '布製品 03',
  year: '',
  imagePaths: ['fabric/fabric-03-1.jpg'],
  description: '作品介紹待補',
  tags: ['布製品'],
  materials: ''
}, {
  id: 'fabric-04',
  type: 'handmade',
  category: 'fabric',
  title: '布製品 04',
  year: '',
  imagePaths: ['fabric/fabric-04-1.jpg', 'fabric/fabric-04-2.jpg'],
  description: '作品介紹待補',
  tags: ['布製品'],
  materials: ''
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
  id: 'potted-flowers',
  label: '盆花'
},{
  id: 'otherclass',
  label: '其他單品'
}, {
  id: 'daily-handmade',
  label: '日常手作區'
}];
export const leatherTypes = [{
  id: 'all',
  label: '全部作品'
}, {
  id: 'vegetable-tanned',
  label: '植鞣皮',
  tag: '植鞣皮'
}, {
  id: 'chrome-tanned',
  label: '鉻鞣皮',
  tag: '鉻鞣皮'
}];
// 首頁手作精選固定交錯三種分類，新增作品時不會因資料排序而改變首頁呈現。
export const handmadeFeaturedProjectIds = [
  'crystal-flower-junior-01',
  'leather-01',
  'fabric-01',
  'crystal-flower-senior-01',
  'leather-02',
  'fabric-02'
];

export const findProject = id => projects.find(project => project.id === id && !project.hidden);
