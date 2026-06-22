const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const languageToggle = document.querySelector(".language-toggle");
const currentYear = new Date().getFullYear();

const translations = {
  en: {
    pageTitle: "Lehan Xiao | Marketing Specialist | Biotech",
    pageDescription: "Lehan Xiao - Marketing Specialist in biotech with a background in epidemiology, public health, and international marketing.",
    navAbout: "About",
    navEducation: "Education",
    navExperience: "Experience",
    navSkills: "Skills",
    navProjects: "Projects",
    navContact: "Contact",
    heroEyebrow: "Biotech Marketing & Public Health",
    heroName: "Lehan Xiao",
    heroTitle: "Marketing Specialist | Biotech",
    heroIntro: "Biotech marketing professional with a background in epidemiology, public health, and international marketing.",
    heroContact: "Get in Touch",
    heroLinkedIn: "View LinkedIn",
    profileAlt: "Lehan Xiao in a green mountain landscape",
    highlightDegree: "ScM",
    highlightDegreeText: "Epidemiology training at Johns Hopkins University",
    highlightBiotech: "Biotech",
    highlightBiotechText: "Overseas marketing and academic support",
    highlightGlobal: "Global",
    highlightGlobalText: "International market focus",
    aboutEyebrow: "About Me",
    aboutHeading: "Connecting scientific insight with market execution.",
    aboutP1: "I am a biotech marketing professional focused on translating scientific and clinical value into clear market communication, distributor support, and product education. My work sits at the intersection of healthcare, global business, and evidence-based public health.",
    aboutP2: "With graduate training in epidemiology and a public health foundation, I bring an international perspective to biotech marketing, market strategy development, marketing event promotion, and professional communication. I am especially interested in connecting scientific products with global partners, distributors, and healthcare audiences.",
    educationEyebrow: "Education",
    educationHeading: "Academic background",
    educationJhu: "Johns Hopkins University",
    educationJhuDegree: "ScM in Epidemiology",
    educationJhuText: "Advanced training in epidemiologic methods, quantitative research, and disease modeling.",
    educationSysu: "Sun Yat-sen University",
    educationSysuDegree: "Bachelor of Medicine in Public Health",
    educationSysuText: "Foundation in public health, preventive medicine, biostatistics, and healthcare systems.",
    experienceEyebrow: "Professional Experience",
    experienceHeading: "Biotech marketing and international market support",
    experienceCompany: "Jafron Biomedical",
    experienceRole: "Marketing / International Market Support / Biotech",
    experiencePill: "Current role",
    experienceBullet1: "Support international marketing strategy, overseas market communication, and distributor-facing initiatives.",
    experienceBullet2: "Promote marketing events and prepare professional communication materials for international audiences.",
    experienceBullet3: "Develop training content that communicates product positioning, value propositions, and application scenarios.",
    experienceBullet4: "Conduct market analysis to identify opportunities, regional needs, and competitive considerations.",
    experienceBullet5: "Map key opinion leaders and market stakeholders to support strategic international market development.",
    skillsEyebrow: "Skills",
    skillsHeading: "Core capabilities",
    skillMarket: "Market analysis",
    skillMarketing: "International marketing",
    skillEpidemiology: "Epidemiology",
    skillData: "Data analysis",
    skillPowerPoint: "PowerPoint",
    skillExcel: "Excel",
    skillR: "R",
    skillPython: "Python",
    projectsEyebrow: "Projects",
    projectsHeading: "Selected work",
    project1Title: "Overseas Market Expansion Support",
    project1Text: "Supported international market development through distributor communication, market research, and localized product education.",
    project2Title: "Training Material Development",
    project2Text: "Created structured materials for product training, clinical background education, and distributor onboarding.",
    project3Title: "Marketing Strategy Making",
    project3Text: "Supported marketing strategy development through market research, audience analysis, positioning, and communication planning.",
    project4Title: "Marketing Communication Support",
    project4Text: "Developed marketing-focused materials and communication support to strengthen product positioning and international outreach.",
    contactEyebrow: "Contact",
    contactHeading: "Let’s connect.",
    contactLinkedIn: "LinkedIn Profile",
    contactLocation: "Zhuhai / Guangzhou",
    footer: `© ${currentYear} Lehan Xiao. All rights reserved.`
  },
  zh: {
    pageTitle: "肖乐晗 | 生物科技市场专员",
    pageDescription: "肖乐晗 - 具备流行病学、公共卫生与国际市场背景的生物科技市场专员。",
    navAbout: "关于我",
    navEducation: "教育背景",
    navExperience: "工作经历",
    navSkills: "技能",
    navProjects: "项目",
    navContact: "联系",
    heroEyebrow: "生物科技市场 | 公共卫生",
    heroName: "肖乐晗",
    heroTitle: "市场专员 | 生物科技",
    heroIntro: "具备流行病学、公共卫生与国际市场背景的生物科技市场专业人士。",
    heroContact: "联系我",
    heroLinkedIn: "查看 LinkedIn",
    profileAlt: "肖乐晗在绿色山景前的照片",
    highlightDegree: "理学硕士",
    highlightDegreeText: "约翰·霍普金斯大学流行病学",
    highlightBiotech: "生物科技",
    highlightBiotechText: "海外市场推广与学术支持",
    highlightGlobal: "国际化",
    highlightGlobalText: "聚焦国际市场拓展",
    aboutEyebrow: "关于我",
    aboutHeading: "学术理解与市场执行",
    aboutP1: "目前从事生物科技市场工作，主要负责国际市场支持、产品与学术资料梳理、经销商沟通及培训材料准备，帮助海外团队更清楚地理解产品价值与应用场景。",
    aboutP2: "具备流行病学和公共卫生背景，熟悉市场分析、活动推广和专业沟通。希望把学术训练中的证据意识和结构化思考，应用到国际市场拓展与品牌传播中。",
    educationEyebrow: "教育背景",
    educationHeading: "学术背景",
    educationJhu: "约翰斯·霍普金斯大学",
    educationJhuDegree: "流行病学理学硕士",
    educationJhuText: "接受流行病学方法、定量研究和疾病建模方面的系统训练。",
    educationSysu: "中山大学",
    educationSysuDegree: "公共卫生医学学士",
    educationSysuText: "具备临床医学、公共卫生、生物统计和医疗卫生体系方面的基础训练。",
    experienceEyebrow: "工作经历",
    experienceHeading: "生物科技市场与国际市场支持",
    experienceCompany: "健帆生物",
    experienceRole: "市场专员",
    experiencePill: "当前职位",
    experienceBullet1: "支持国际市场策略、海外市场沟通和面向经销商的市场项目。",
    experienceBullet2: "推进市场活动，并为国际受众准备专业沟通材料。",
    experienceBullet3: "开发培训内容，清晰传达产品定位、价值主张和应用场景。",
    experienceBullet4: "开展市场分析，识别市场机会、区域需求和竞争因素。",
    experienceBullet5: "梳理关键意见领袖和市场相关方，支持国际市场战略发展。",
    skillsEyebrow: "技能",
    skillsHeading: "核心能力",
    skillMarket: "市场分析",
    skillMarketing: "国际市场营销",
    skillEpidemiology: "流行病学",
    skillData: "数据分析",
    skillPowerPoint: "PowerPoint",
    skillExcel: "Excel",
    skillR: "R",
    skillPython: "Python",
    projectsEyebrow: "项目",
    projectsHeading: "代表工作",
    project1Title: "海外市场拓展支持",
    project1Text: "通过经销商沟通、市场研究和本地化产品教育，支持国际市场发展。",
    project2Title: "培训材料编撰",
    project2Text: "制作产品培训、临床背景教育和经销商培训相关的结构化材料。",
    project3Title: "市场策略制定",
    project3Text: "通过市场研究、受众分析、定位梳理和传播规划，支持市场策略制定。",
    project4Title: "市场沟通支持",
    project4Text: "开发市场导向材料和沟通支持内容，强化产品定位与国际传播。",
    contactEyebrow: "联系",
    contactHeading: "欢迎联系",
    contactLinkedIn: "LinkedIn 主页",
    contactLocation: "珠海/广州",
    footer: `© ${currentYear} 肖乐晗。保留所有权利。`
  }
};

const savedLanguage = localStorage.getItem("siteLanguage");
let currentLanguage = savedLanguage === "zh" ? "zh" : "en";

function applyLanguage(language) {
  const copy = translations[language];

  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.title = copy.pageTitle;

  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute("content", copy.pageDescription);
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (copy[key]) {
      element.textContent = copy[key];
    }
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const key = element.dataset.i18nAlt;
    if (copy[key]) {
      element.setAttribute("alt", copy[key]);
    }
  });

  if (languageToggle) {
    languageToggle.textContent = language === "zh" ? "EN" : "中文";
    languageToggle.setAttribute(
      "aria-label",
      language === "zh" ? "Switch to English" : "切换到中文"
    );
  }
}

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Open navigation");
    });
  });
}

if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    currentLanguage = currentLanguage === "zh" ? "en" : "zh";
    localStorage.setItem("siteLanguage", currentLanguage);
    applyLanguage(currentLanguage);
  });
}

applyLanguage(currentLanguage);
