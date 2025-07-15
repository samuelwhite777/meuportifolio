// Importa as bibliotecas essenciais do React.
// 'useState' é um hook para adicionar estado a componentes funcionais.
// 'useEffect' é um hook para executar efeitos colaterais em componentes funcionais,
// como manipulação do DOM, chamadas de API, ou configuração de subscriptions.
//
// Imports essential React libraries.
// 'useState' is a hook to add state to functional components.
// 'useEffect' is a hook to perform side effects in functional components,
// such as DOM manipulation, API calls, or setting up subscriptions.
import React, { useState, useEffect } from 'react';

// O componente principal da aplicação. Tudo começa aqui!
// É um componente funcional, o que significa que é uma função JavaScript.
//
// The main application component. Everything starts here!
// It's a functional component, which means it's a JavaScript function.
const App = () => {
  // Define um estado chamado 'activeSection' usando o hook 'useState'.
  // 'activeSection' guarda qual seção do portfólio está ativa no momento (ex: 'home', 'about').
  // O valor inicial é 'home'. 'setActiveSection' é a função que usaremos para mudar esse estado.
  //
  // Defines a state variable called 'activeSection' using the 'useState' hook.
  // 'activeSection' stores which portfolio section is currently active (e.g., 'home', 'about').
  // The initial value is 'home'. 'setActiveSection' is the function we'll use to change this state.
  const [activeSection, setActiveSection] = useState('home');

  // Novo estado para controlar o idioma atual da aplicação.
  // O valor inicial é 'pt' (Português).
  //
  // New state to control the current language of the application.
  // The initial value is 'pt' (Portuguese).
  const [currentLanguage, setCurrentLanguage] = useState('pt');

  // Objeto para armazenar as traduções dos títulos das seções.
  // Para uma aplicação real e grande, isso seria carregado de arquivos de tradução externos (JSON, etc.)
  // usando uma biblioteca de internacionalização (i18n) como `react-i18next`.
  //
  // Object to store section title translations.
  // For a real and large application, this would be loaded from external translation files (JSON, etc.)
  // using an internationalization (i18n) library like `react-i18next`.
  const sectionTitles = {
    home: {
      pt: "Samuel Pedroso: O Polimata da Tecnologia",
      en: "Samuel Pedroso: The Technology Polymath",
      ru: "Самуэль Педросо: Полимат в Технологиях",
      zh: "塞缪尔·佩德罗索：技术多面手",
      ko: "사무엘 페드로소: 기술 박식가",
      ja: "サミュエル・ペドロソ：テクノロジーの博学者",
    },
    about: {
      pt: "Sobre Mim e Minha Abordagem",
      en: "About Me and My Approach",
      ru: "Обо мне и моем подходе",
      zh: "关于我与我的方法",
      ko: "나와 나의 접근 방식에 대해",
      ja: "私と私のアプローチについて",
    },
    experience: {
      pt: "Experiência Profissional: Saquers.Tech",
      en: "Professional Experience: Saquers.Tech",
      ru: "Профессиональный опыт: Saquers.Tech",
      zh: "专业经验：Saquers.Tech",
      ko: "전문 경험: Saquers.Tech",
      ja: "職務経験: Saquers.Tech",
    },
    projectsExpertise: {
      pt: "Projetos & Expertise: Meu Impacto na Tecnologia",
      en: "Projects & Expertise: My Impact on Technology",
      ru: "Проекты и экспертиза: Мое влияние на технологии",
      zh: "项目与专长：我对技术的影响",
      ko: "프로젝트 및 전문 지식: 기술에 대한 나의 영향",
      ja: "プロジェクトと専門知識：テクノロジーにおける私の影響",
    },
    contact: {
      pt: "Entre em Contato",
      en: "Contact Me",
      ru: "Связаться со мной",
      zh: "联系我",
      ko: "연락처",
      ja: "お問い合わせ",
    }
  };

  // Objeto para armazenar as traduções do conteúdo das seções.
  // Cada chave representa uma seção ou um elemento específico dentro dela.
  // Para cada texto, há versões em diferentes idiomas.
  //
  // Object to store section content translations.
  // Each key represents a section or a specific element within it.
  // For each text, there are versions in different languages.
  const contentTranslations = {
    hero: {
      paragraph1: {
        pt: "Sou um entusiasta da tecnologia com uma paixão inabalável por transformar desafios em soluções inovadoras. Minha jornada me levou a ser um verdadeiro polimata no campo da TI, atuando em diversas frentes e gerando impacto significativo.",
        en: "I am a technology enthusiast with an unwavering passion for transforming challenges into innovative solutions. My journey has led me to be a true polymath in the IT field, working on various fronts and generating significant impact.",
        ru: "Я энтузиаст технологий с непоколебимой страстью к превращению вызовов в инновационные решения. Мой путь привел меня к тому, чтобы стать настоящим полиматом в области ИТ, работая по различным направлениям и оказывая значительное влияние.",
        zh: "我是一名技术爱好者，对将挑战转化为创新解决方案抱有坚定不移的热情。我的旅程使我成为IT领域的真正博学者，在各个方面工作并产生重大影响。",
        ko: "저는 도전을 혁신적인 솔루션으로 바꾸는 데 끊임없는 열정을 가진 기술 애호가입니다. 저의 여정은 IT 분야에서 진정한 박식가가 되어 다양한 분야에서 일하며 상당한 영향을 미치게 했습니다.",
        ja: "私は、課題を革新的なソリューションに変えることに揺るぎない情熱を抱くテクノロジー愛好家です。私の旅は、IT分野の真の博学者となり、さまざまな分野で働き、大きな影響を生み出すことにつながりました。",
      },
      paragraph2: {
        pt: "Explore meu portfólio para conhecer minha versatilidade em análise, sustentação, infraestrutura, dados e desenvolvimento, e como minhas contribuições foram decisivas para o sucesso de negócios.",
        en: "Explore my portfolio to discover my versatility in analysis, support, infrastructure, data, and development, and how my contributions have been decisive for business success.",
        ru: "Изучите мое портфолио, чтобы узнать о моей универсальности в анализе, поддержке, инфраструктуре, данных и разработке, а также о том, как мой вклад был решающим для успеха бизнеса.",
        zh: "浏览我的作品集，了解我在分析、支持、基础设施、数据和开发方面的多才多艺，以及我的贡献如何对业务成功起到决定性作用。",
        ko: "제 포트폴리오를 탐색하여 분석, 지원, 인프라, 데이터 및 개발 분야에서의 저의 다재다능함과 저의 기여가 비즈니스 성공에 어떻게 결정적이었는지 알아보십시오.",
        ja: "私のポートフォリオをご覧になり、分析、サポート、インフラストラクチャ、データ、開発における私の多才さと、私の貢献がビジネスの成功にいかに決定的であったかをご覧ください。",
      },
      button: {
        pt: "Saiba Mais Sobre Mim",
        en: "Learn More About Me",
        ru: "Узнать больше обо мне",
        zh: "了解更多关于我",
        ko: "나에 대해 더 알아보기",
        ja: "私についてもっと知る",
      }
    },
    about: {
      paragraph1: {
        pt: "Com mais de 130 pontos em TI e uma trajetória acadêmica diversificada que inclui Direito, Engenharia de Software e Ciência de Dados (mesmo que não concluídas), minha curiosidade e sede por conhecimento são insaciáveis. Essa bagagem me confere uma perspectiva única e uma capacidade de aprendizado por demanda em tempo recorde.",
        en: "With over 130 IT credits and a diverse academic background including Law, Software Engineering, and Data Science (even if not completed), my curiosity and thirst for knowledge are insatiable. This background gives me a unique perspective and an ability to learn on demand in record time.",
        ru: "Имея более 130 баллов по ИТ и разнообразный академический опыт, включая право, разработку программного обеспечения и науку о данных (даже если они не завершены), мое любопытство и жажда знаний ненасытны. Этот опыт дает мне уникальную перспективу и способность учиться по запросу в рекордно короткие сроки.",
        zh: "凭借130多个IT学分和包括法律、软件工程和数据科学（即使未完成）在内的多元化学术背景，我的好奇心和求知欲永不满足。这种背景赋予我独特的视角和在创纪录时间内按需学习的能力。",
        ko: "130점 이상의 IT 학점과 법학, 소프트웨어 공학, 데이터 과학(미완성이라도)을 포함한 다양한 학문적 배경을 바탕으로, 저의 호기심과 지식에 대한 갈증은 끝이 없습니다. 이러한 배경은 저에게 독특한 관점과 기록적인 시간 내에 온디맨드 학습 능력을 제공합니다.",
        ja: "130以上のIT単位と、法学、ソフトウェア工学、データサイエンス（未修了であっても）を含む多様な学歴を持つ私は、飽くなき好奇心と知識への渇望を持っています。この背景は、私に独自の視点と、記録的な速さでオンデマンドで学習する能力を与えてくれます。",
      },
      paragraph2: {
        pt: "Minha lógica de programação e resolução de problemas são focadas em soluções permanentes e eficientes. Possuo conhecimento prático na administração de incidentes e sou um forte defensor do uso de automações para otimizar processos e reduzir falhas humanas.",
        en: "My programming logic and problem-solving are focused on permanent and efficient solutions. I have practical knowledge in incident management and am a strong advocate for using automation to optimize processes and reduce human errors.",
        ru: "Моя логика программирования и решения проблем ориентирована на постоянные и эффективные решения. У меня есть практические знания в управлении инцидентами, и я являюсь решительным сторонником использования автоматизации для оптимизации процессов и снижения человеческих ошибок.",
        zh: "我的编程逻辑和问题解决专注于永久和高效的解决方案。我拥有事件管理方面的实践知识，并且是使用自动化优化流程和减少人为错误的坚定倡导者。",
        ko: "저의 프로그래밍 논리와 문제 해결은 영구적이고 효율적인 솔루션에 중점을 둡니다. 저는 사건 관리 분야에서 실질적인 지식을 가지고 있으며, 프로세스를 최적화하고 인적 오류를 줄이기 위해 자동화를 사용하는 것을 강력히 지지합니다.",
        ja: "私のプログラミングロジックと問題解決は、永続的で効率的なソリューションに焦点を当てています。私はインシデント管理の実践的な知識を持ち、プロセスの最適化と人的エラーの削減のために自動化を使用することを強く提唱しています。",
      },
      paragraph3: {
        pt: "Acredito fielmente que a tecnologia é a ferramenta mais interessante do mundo para salvar vidas, trazer qualidade, segurança e agilidade para a resolução de problemas, e até mesmo para o prolongamento da vida com qualidade de toda a humanidade. Esses são norteadores que me fazem trabalhar nessa área, indo além do dinheiro e da ambição pessoal, com a genuína vontade de contribuir para a humanidade e a transformação do mundo através dessa ferramenta potencializadora.",
        en: "I firmly believe that technology is the most interesting tool in the world for saving lives, bringing quality, security, and agility to problem-solving, and even for extending the quality of life for all humanity. These are the guiding principles that drive me to work in this field, going beyond money and personal ambition, with a genuine desire to contribute to humanity and the transformation of the world through this empowering tool.",
        ru: "Я твердо верю, что технология — это самый интересный инструмент в мире для спасения жизней, обеспечения качества, безопасности и оперативности в решении проблем, а также для продления качественной жизни всего человечества. Эти принципы побуждают меня работать в этой области, выходя за рамки денег и личных амбиций, с искренним желанием внести свой вклад в человечество и преобразование мира с помощью этого мощного инструмента.",
        zh: "我坚信技术是世界上最有趣的工具，可以拯救生命，为解决问题带来质量、安全和敏捷性，甚至可以延长全人类的优质生活。这些是我从事这个领域的指导原则，超越了金钱和个人抱负，真诚地希望通过这个赋能工具为人类和世界的转型做出贡献。",
        ko: "저는 기술이 생명을 구하고, 문제 해결에 품질, 보안 및 민첩성을 제공하며, 심지어 모든 인류의 삶의 질을 연장하는 데 가장 흥미로운 도구라고 굳게 믿습니다. 이것들은 돈과 개인적인 야망을 넘어, 이 강력한 도구를 통해 인류와 세상의 변화에 기여하고자 하는 진정한 열망으로 이 분야에서 일하게 하는 지침입니다.",
        ja: "私は、テクノロジーが命を救い、問題解決に質、安全性、敏捷性をもたらし、さらには全人類の生活の質を延ばすための世界で最も興味深いツールであると固く信じています。これらは、お金や個人的な野心を超え、この強力なツールを通じて人類と世界の変革に貢献したいという純粋な願望を持って、この分野で働く原動力となっています。",
      },
      paragraph4: {
        pt: "Além do meu trabalho profissional, sou impulsionado por projetos pessoais de paixão pela tecnologia que acredito poderem contribuir significativamente para a humanidade e para o futuro dos meus filhos:",
        en: "Beyond my professional work, I am driven by personal passion projects in technology that I believe can significantly contribute to humanity and the future of my children:",
        ru: "Помимо моей профессиональной деятельности, меня движут личные проекты, основанные на страсти к технологиям, которые, как я верю, могут внести значительный вклад в человечество и будущее моих детей:",
        zh: "除了我的专业工作之外，我还被我对技术的热情项目所驱动，我相信这些项目可以为人类和我的孩子的未来做出重大贡献：",
        ko: "전문적인 업무 외에도, 저는 인류와 제 아이들의 미래에 크게 기여할 수 있다고 믿는 기술에 대한 개인적인 열정 프로젝트에 의해 움직입니다:",
        ja: "私の専門的な仕事以外にも、私はテクノロジーに対する個人的な情熱プロジェクトに駆り立てられており、それらが人類と私の子供たちの未来に大きく貢献できると信じています。",
      },
      paragraph5: {
        pt: "Como profissional e pessoa, sou movido pela curiosidade, resiliência e a busca contínua por excelência. Minha capacidade de transitar entre diferentes áreas da tecnologia me permite conectar pontos e entregar valor em cenários complexos.",
        en: "As a professional and a person, I am driven by curiosity, resilience, and the continuous pursuit of excellence. My ability to transition between different areas of technology allows me to connect dots and deliver value in complex scenarios.",
        ru: "Как профессионал и личность, я движим любопытством, стойкостью и постоянным стремлением к совершенству. Моя способность переходить между различными областями технологий позволяет мне связывать точки и приносить ценность в сложных сценариях.",
        zh: "作为一名专业人士和一个人，我被好奇心、韧性和对卓越的持续追求所驱动。我在不同技术领域之间转换的能力使我能够连接点并为复杂场景提供价值。",
        ko: "전문가이자 개인으로서 저는 호기심, 회복력, 그리고 끊임없는 탁월함 추구에 의해 움직입니다. 다양한 기술 분야를 넘나드는 저의 능력은 제가 점들을 연결하고 복잡한 시나리오에서 가치를 제공할 수 있게 합니다.",
        ja: "プロフェッショナルとして、そして個人として、私は好奇心、回復力、そして卓越性の絶え間ない追求に駆り立てられています。テクノロジーの異なる分野間を移行する私の能力は、点と点をつなぎ、複雑なシナリオで価値を提供することを可能にします。",
      },
    },
    experience: {
      title: {
        pt: "Analista de TI II - Sustentação | Saquers.Tech | 12/2023 - 03/2025",
        en: "IT Analyst II - Support | Saquers.Tech | 12/2023 - 03/2025",
        ru: "ИТ-аналитик II - Поддержка | Saquers.Tech | 12/2023 - 03/2025",
        zh: "IT 分析师 II - 支持 | Saquers.Tech | 12/2023 - 03/2025",
        ko: "IT 분석가 II - 지원 | Saquers.Tech | 12/2023 - 03/2025",
        ja: "ITアナリストII - サポート | Saquers.Tech | 2023年12月 - 2025年3月",
      },
      listItems: {
        item1: {
          pt: "Análise e Sustentação Abrangente: Atuação vital na análise e sustentação de TI, garantindo a disponibilidade e o bom funcionamento de sistemas e ferramentas em todos os setores da empresa.",
          en: "Comprehensive Analysis and Support: Vital role in IT analysis and support, ensuring the availability and proper functioning of systems and tools across all company sectors.",
          ru: "Комплексный анализ и поддержка: Жизненно важная роль в анализе и поддержке ИТ, обеспечивающая доступность и надлежащее функционирование систем и инструментов во всех секторах компании.",
          zh: "全面分析与支持：在IT分析和支持中发挥关键作用，确保公司所有部门系统和工具的可用性和正常运行。",
          ko: "종합 분석 및 지원: IT 분석 및 지원에서 중요한 역할을 수행하여 회사 모든 부문에서 시스템 및 도구의 가용성과 적절한 기능을 보장합니다.",
          ja: "包括的な分析とサポート：IT分析とサポートにおいて重要な役割を果たし、会社のすべての部門でシステムとツールの可用性と適切な機能を確保します。",
        },
        item2: {
          pt: "Treinamento e Capacitação: Responsável por ministrar treinamentos para usuários e equipes operacionais, capacitando-os no uso de ferramentas e na compreensão de dados, elevando a autonomia e eficiência.",
          en: "Training and Empowerment: Responsible for conducting training for users and operational teams, empowering them in tool usage and data comprehension, increasing autonomy and efficiency.",
          ru: "Обучение и расширение возможностей: Отвечает за проведение обучения для пользователей и операционных групп, расширяя их возможности в использовании инструментов и понимании данных, повышая автономию и эффективность.",
          zh: "培训与赋能：负责为用户和运营团队提供培训，使其掌握工具使用和数据理解，提高自主性和效率。",
          ko: "교육 및 역량 강화: 사용자 및 운영 팀을 위한 교육을 실시하여 도구 사용 및 데이터 이해 능력을 향상시키고, 자율성과 효율성을 높이는 역할을 담당합니다.",
          ja: "トレーニングと能力開発：ユーザーと運用チーム向けのトレーニングを実施し、ツール使用とデータ理解の能力を向上させ、自律性と効率を高める責任があります。",
        },
        item3: {
          pt: "Observabilidade e Dados: Domínio em ferramentas e técnicas de observabilidade, dados e Power BI, transformando grandes volumes de informação em insights acionáveis para a tomada de decisão.",
          en: "Observability and Data: Proficiency in observability tools and techniques, data, and Power BI, transforming large volumes of information into actionable insights for decision-making.",
          ru: "Наблюдаемость и данные: Владение инструментами и методами наблюдаемости, данными и Power BI, преобразование больших объемов информации в действенные идеи для принятия решений.",
          zh: "可观察性与数据：精通可观察性工具和技术、数据和Power BI，将海量信息转化为可操作的见解，用于决策。",
          ko: "관찰 가능성 및 데이터: 관찰 가능성 도구 및 기술, 데이터, Power BI에 능숙하며, 대량의 정보를 의사 결정에 활용할 수 있는 실행 가능한 통찰력으로 변환합니다.",
          ja: "可観測性とデータ：可観測性ツールと技術、データ、Power BIに精通しており、大量の情報を意思決定のための実行可能な洞察に変換します。",
        },
        item4: {
          pt: "Infraestrutura e Redes: Sólida expertise em infraestrutura, redes e servidores, assegurando a estabilidade e performance dos ambientes tecnológicos.",
          en: "Infrastructure and Networks: Solid expertise in infrastructure, networks, and servers, ensuring the stability and performance of technological environments.",
          ru: "Инфраструктура и сети: Обширный опыт в области инфраструктуры, сетей и серверов, обеспечивающий стабильность и производительность технологических сред.",
          zh: "基础设施与网络：在基础设施、网络和服务器方面拥有扎实的专业知识，确保技术环境的稳定性和性能。",
          ko: "인프라 및 네트워크: 인프라, 네트워크, 서버 분야에서 탄탄한 전문 지식을 보유하고 있으며, 기술 환경의 안정성과 성능을 보장합니다.",
          ja: "インフラストラクチャとネットワーク：インフラストラクチャ、ネットワーク、サーバーに関する確かな専門知識を持ち、技術環境の安定性とパフォーマンスを確保します。",
        },
        item5: {
          pt: "Automação e Desenvolvimento: Experiência prática em desenvolvimento com Python e PowerShell para automação de tarefas, otimizando processos e liberando recursos para iniciativas estratégicas.",
          en: "Automation and Development: Practical experience in development with Python and PowerShell for task automation, optimizing processes and freeing up resources for strategic initiatives.",
          ru: "Автоматизация и разработка: Практический опыт в разработке на Python и PowerShell для автоматизации задач, оптимизации процессов и высвобождения ресурсов для стратегических инициатив.",
          zh: "自动化与开发：拥有使用Python和PowerShell进行任务自动化开发的实践经验，优化流程并为战略举措释放资源。",
          ko: "자동화 및 개발: Python 및 PowerShell을 사용한 작업 자동화 개발에 실용적인 경험이 있으며, 프로세스를 최적화하고 전략적 이니셔티브를 위한 리소스를 확보합니다.",
          ja: "自動化と開発：PythonとPowerShellを使用したタスク自動化開発の実践経験があり、プロセスを最適化し、戦略的イニシアティブのためのリソースを解放します。",
        },
        item6: {
          pt: "Impacto Multifacetado: Minhas contribuições se estenderam desde engenheiros de software e desenvolvedores, passando por analistas, área comercial e operacional, até o CEO e diretores, fornecendo suporte especializado e insights críticos para o negócio.",
          en: "Multifaceted Impact: My contributions extended from software engineers and developers, through analysts, commercial and operational areas, to the CEO and directors, providing specialized support and critical business insights.",
          ru: "Многогранное воздействие: Мой вклад распространялся от инженеров-программистов и разработчиков, через аналитиков, коммерческие и операционные области, до генерального директора и директоров, предоставляя специализированную поддержку и критически важные бизнес-идеи.",
          zh: "多方面影响：我的贡献涵盖了软件工程师和开发人员，以及分析师、商业和运营领域，直至首席执行官和董事，提供专业支持和关键业务洞察。",
          ko: "다각적인 영향: 저의 기여는 소프트웨어 엔지니어와 개발자부터 분석가, 상업 및 운영 분야, 그리고 CEO와 이사들에게까지 확장되어 전문적인 지원과 중요한 비즈니스 통찰력을 제공했습니다.",
          ja: "多面的な影響：私の貢献は、ソフトウェアエンジニアや開発者から、アナリスト、商業および運用部門、さらにはCEOやディレクターまで広がり、専門的なサポートと重要なビジネス洞察を提供しました。",
        },
      }
    },
    projectsExpertise: {
      introParagraph: {
        pt: "Explore abaixo minhas principais áreas de expertise e os cases de sucesso que demonstram como aplico minhas habilidades para gerar valor e resolver desafios complexos.",
        en: "Explore my main areas of expertise below and the success cases that demonstrate how I apply my skills to generate value and solve complex challenges.",
        ru: "Изучите мои основные области экспертизы ниже и примеры успешных кейсов, которые демонстрируют, как я применяю свои навыки для создания ценности и решения сложных задач.",
        zh: "在下方探索我的主要专业领域和成功案例，这些案例展示了我如何运用我的技能创造价值和解决复杂挑战。",
        ko: "아래에서 저의 주요 전문 분야와 복잡한 문제를 해결하고 가치를 창출하기 위해 저의 기술을 어떻게 적용하는지 보여주는 성공 사례를 살펴보십시오.",
        ja: "以下で私の主要な専門分野と、私のスキルをどのように応用して価値を創造し、複雑な課題を解決するかを示す成功事例をご覧ください。",
      },
      personalProjectsTitle: {
        pt: "Meus Projetos Pessoais",
        en: "My Personal Projects",
        ru: "Мои личные проекты",
        zh: "我的个人项目",
        ko: "내 개인 프로젝트",
        ja: "私の個人プロジェクト",
      },
      expertiseAreasTitle: {
        pt: "Minhas Áreas de Expertise",
        en: "My Areas of Expertise",
        ru: "Мои области экспертизы",
        zh: "我的专业领域",
        ko: "내 전문 분야",
        ja: "私の専門分野",
      },
      buttons: {
        github: {
          pt: "Ver no GitHub",
          en: "View on GitHub",
          ru: "Посмотреть на GitHub",
          zh: "在 GitHub 上查看",
          ko: "GitHub에서 보기",
          ja: "GitHubで見る",
        },
        documentation: {
          pt: "Ver Documentação",
          en: "View Documentation",
          ru: "Посмотреть документацию",
          zh: "查看文档",
          ko: "문서 보기",
          ja: "ドキュメントを見る",
        },
      }
    },
    contact: {
      introParagraph: {
        pt: "Interessado em como minhas habilidades e experiência podem agregar valor ao seu projeto ou equipe? Sinta-se à vontade para entrar em contato!",
        en: "Interested in how my skills and experience can add value to your project or team? Feel free to get in touch!",
        ru: "Заинтересованы в том, как мои навыки и опыт могут принести пользу вашему проекту или команде? Не стесняйтесь обращаться!",
        zh: "对我的技能和经验如何为您的项目或团队增值感兴趣？请随时与我联系！",
        ko: "저의 기술과 경험이 귀하의 프로젝트나 팀에 어떻게 가치를 더할 수 있는지 궁금하십니까? 언제든지 연락주세요!",
        ja: "私のスキルと経験があなたのプロジェクトやチームにどのように価値をもたらすか興味がありますか？お気軽にお問い合わせください！",
      },
      emailLabel: {
        pt: "Email:",
        en: "Email:",
        ru: "Электронная почта:",
        zh: "电子邮件：",
        ko: "이메일:",
        ja: "メール：",
      },
      phoneLabel: {
        pt: "Telefone:",
        en: "Phone:",
        ru: "Телефон:",
        zh: "电话：",
        ko: "전화:",
        ja: "電話：",
      },
      locationLabel: {
        pt: "Localização:",
        en: "Location:",
        ru: "Местоположение:",
        zh: "地点：",
        ko: "위치:",
        ja: "場所：",
      }
    },
    footer: {
      copyright: {
        pt: "Todos os direitos reservados.",
        en: "All rights reserved.",
        ru: "Все права защищены.",
        zh: "版权所有。",
        ko: "모든 권리 보유.",
        ja: "全著作権所有。",
      }
    }
  };


  // Usa o hook 'useEffect' para lidar com efeitos colaterais.
  // Neste caso, ele rola a janela para o topo (0, 0) sempre que a 'activeSection' muda.
  // Isso melhora a experiência do usuário, garantindo que a nova seção comece visível.
  // O array de dependências '[activeSection]' significa que este efeito roda toda vez que 'activeSection' mudar.
  //
  // Uses the 'useEffect' hook to handle side effects.
  // In this case, it scrolls the window to the top (0, 0) whenever 'activeSection' changes.
  // This improves user experience by ensuring the new section starts visible.
  // The dependency array '[activeSection]' means this effect runs every time 'activeSection' changes.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeSection]); // Dependência: o efeito é re-executado quando activeSection muda.

  // Componente da Barra de Navegação.
  // É o menu fixo no topo da página que permite navegar entre as seções.
  //
  // Navigation Bar Component.
  // It's the fixed menu at the top of the page that allows navigating between sections.
  const NavBar = () => (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 shadow-lg fixed w-full z-10 top-0 rounded-b-lg">
      {/* 'bg-gradient-to-r from-blue-600 to-indigo-700': Define um gradiente de cor no fundo, da esquerda para a direita.
          'p-4': Adiciona preenchimento (padding) de 16px em todos os lados.
          'shadow-lg': Adiciona uma sombra grande para dar profundidade.
          'fixed w-full z-10 top-0': Torna a barra de navegação fixa no topo da tela, ocupando 100% da largura,
                                     e com um alto z-index para ficar acima de outros elementos.
          'rounded-b-lg': Arredonda os cantos inferiores. */}
      {/* 'bg-gradient-to-r from-blue-600 to-indigo-700': Defines a color gradient background, from left to right.
          'p-4': Adds 16px padding on all sides.
          'shadow-lg': Adds a large shadow for depth.
          'fixed w-full z-10 top-0': Makes the navigation bar fixed at the top of the screen, taking 100% width,
                                     and with a high z-index to stay above other elements.
          'rounded-b-lg': Rounds the bottom corners. */}
      <div className="container mx-auto flex justify-between items-center flex-wrap">
        {/* 'container mx-auto': Centraliza o conteúdo da barra de navegação e limita sua largura.
            'flex justify-between items-center flex-wrap': Usa flexbox para alinhar os itens:
                                                            - 'justify-between': Espaça os itens igualmente.
                                                            - 'items-center': Centraliza verticalmente.
                                                            - 'flex-wrap': Permite que os itens quebrem a linha em telas menores. */}
        {/* 'container mx-auto': Centers the navigation bar content and limits its width.
            'flex justify-between items-center flex-wrap': Uses flexbox to align items:
                                                            - 'justify-between': Spaces items equally.
                                                            - 'items-center': Vertically centers items.
                                                            - 'flex-wrap': Allows items to wrap to the next line on smaller screens. */}
        
        {/* Substitui o texto "Samuel Pedroso" por um símbolo SVG personalizado com as iniciais "SP".
            O SVG é um gráfico vetorial, escalável sem perda de qualidade.
            'text-white cursor-pointer': Define a cor do texto/SVG como branco e muda o cursor ao passar por cima.
            'onClick={() => setActiveSection('home')}': Ao clicar, define a seção ativa como 'home', levando o usuário para o início. */}
        {/* Replaces "Samuel Pedroso" text with a custom SVG symbol for "SP".
            SVG is a vector graphic, scalable without quality loss.
            'text-white cursor-pointer': Sets the text/SVG color to white and changes the cursor on hover.
            'onClick={() => setActiveSection('home')}': On click, sets the active section to 'home', taking the user to the start. */}
        <div className="text-white cursor-pointer flex items-center" onClick={() => setActiveSection('home')}>
          {/* O elemento SVG define o ícone.
              'width="40" height="40"': Define o tamanho do SVG.
              'viewBox="0 0 40 40"': Define a área de visualização interna do SVG.
              'fill="none"': Não preenche o caminho por padrão.
              'xmlns="http://www.w3.org/2000/svg"': Declara o namespace SVG.
              'className="inline-block mr-2"': Torna o SVG um bloco inline e adiciona margem à direita. */}
          {/* The SVG element defines the icon.
              'width="40" height="40"': Sets the SVG size.
              'viewBox="0 0 40 40"': Defines the internal viewing area of the SVG.
              'fill="none"': Does not fill the path by default.
              'xmlns="http://www.w3.org/2000/svg"': Declares the SVG namespace.
              'className="inline-block mr-2"': Makes the SVG an inline block and adds right margin. */}
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block mr-2">
            {/* Um retângulo que serve como fundo para o símbolo.
                'rx="10"': Arredonda os cantos do retângulo.
                'fill="currentColor"': Preenche com a cor do texto pai (branco, definida no div pai). */}
            {/* A rectangle serving as the background for the symbol.
                'rx="10"': Rounds the rectangle corners.
                'fill="currentColor"': Fills with the parent text color (white, defined in the parent div). */}
            <rect width="40" height="40" rx="10" fill="currentColor"/> {/* Background for the symbol */}
            {/* Caminho SVG para a letra 'S' estilizada. */}
            {/* SVG path for the stylized 'S' letter. */}
            <path d="M12 15H20C22.2091 15 24 16.7909 24 19C24 21.2091 22.2091 23 20 23H16V25H24V27H16C13.7909 27 12 25.2091 12 23V15ZM16 17V21H20C20.5523 21 21 20.5523 21 20C21 19.4477 20.5523 19 20 19H16V17Z" fill="#FFFFFF"/> {/* Stylized 'S' */}
            {/* Caminhos SVG para a letra 'P' estilizada. */}
            {/* SVG paths for the stylized 'P' letter. */}
            <path d="M28 15H32V27H28V15Z" fill="#FFFFFF"/> {/* Part of 'P' - vertical bar */}
            <path d="M28 15H32V17H28V15Z" fill="#FFFFFF"/> {/* Part of 'P' - top horizontal bar */}
            <path d="M28 15C30.2091 15 32 16.7909 32 19V21C32 23.2091 30.2091 25 28 25H24V15H28Z" fill="#FFFFFF"/> {/* Part of 'P' - curved top */}
          </svg>
          {/* Mantém o nome "Samuel Pedroso" ao lado do símbolo para maior clareza, especialmente para quem não conhece o logo.
              'text-2xl font-bold tracking-wider': Define o tamanho da fonte, peso e espaçamento entre letras. */}
          {/* Keeps the name "Samuel Pedroso" next to the symbol for clarity, especially for those unfamiliar with the logo.
              'text-2xl font-bold tracking-wider': Sets font size, weight, and letter spacing. */}
          <span className="text-2xl font-bold tracking-wider">Samuel Pedroso</span>
        </div>
        {/* Div que contém os botões de navegação e o seletor de idioma.
            'flex items-center space-x-6 text-lg': Usa flexbox para alinhar os botões e o seletor horizontalmente,
                                                   com espaçamento e tamanho de fonte definidos. */}
        {/* Div containing the navigation buttons and language selector.
            'flex items-center space-x-6 text-lg': Uses flexbox to align buttons and selector horizontally,
                                                   with defined spacing and font size. */}
        <div className="flex items-center space-x-6 text-lg">
          {/* Componentes individuais para cada item da navegação.
              Cada um recebe a 'section' (ID da seção para navegar) e o 'label' (texto visível). */}
          {/* Individual components for each navigation item.
              Each receives the 'section' (ID of the section to navigate to) and the 'label' (visible text). */}
          <NavItem section="home" label="Início" />
          <NavItem section="about" label="Sobre Mim" />
          <NavItem section="experience" label="Experiência" />
          <NavItem section="projects-expertise" label="Projetos & Expertise" />
          <NavItem section="contact" label="Contato" />

          {/* Seletor de Idioma.
              'onChange={(e) => setCurrentLanguage(e.target.value)}': Atualiza o estado 'currentLanguage'
                                                                    com o valor selecionado do dropdown.
              'value={currentLanguage}': Garante que o dropdown reflita o idioma atual do estado.
              'bg-blue-700 text-white rounded-md px-2 py-1 text-base': Estilo para o dropdown. */}
          {/* Language Selector.
              'onChange={(e) => setCurrentLanguage(e.target.value)}': Updates the 'currentLanguage' state
                                                                    with the selected dropdown value.
              'value={currentLanguage}': Ensures the dropdown reflects the current language from the state.
              'bg-blue-700 text-white rounded-md px-2 py-1 text-base': Style for the dropdown. */}
          <select
            onChange={(e) => setCurrentLanguage(e.target.value)}
            value={currentLanguage}
            className="bg-blue-700 text-white rounded-md px-2 py-1 text-base focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            <option value="pt">Português</option>
            <option value="en">English</option>
            <option value="ru">Русский</option>
            <option value="zh">中文</option>
            <option value="ko">한국어</option>
            <option value="ja">日本語</option>
          </select>
        </div>
      </div>
    </nav>
  );

  // Componente de Item de Navegação.
  // Representa um único botão na barra de navegação.
  //
  // Navigation Item Component.
  // Represents a single button in the navigation bar.
  const NavItem = ({ section, label }) => (
    <button
      // 'onClick={() => setActiveSection(section)}': Ao clicar, atualiza o estado 'activeSection' para a seção correspondente.
      //
      // 'onClick={() => setActiveSection(section)}': On click, updates the 'activeSection' state to the corresponding section.
      onClick={() => setActiveSection(section)}
      className={`text-white hover:text-blue-200 transition duration-300 ease-in-out px-3 py-2 rounded-md ${
        // Usa interpolação de string para aplicar classes condicionalmente.
        // Se a seção atual for a 'activeSection', aplica 'bg-blue-700 font-semibold' para destacá-la.
        // 'text-white': Cor do texto branca.
        // 'hover:text-blue-200': Cor do texto azul claro ao passar o mouse.
        // 'transition duration-300 ease-in-out': Adiciona uma transição suave para as mudanças de estilo.
        // 'px-3 py-2': Preenchimento horizontal e vertical.
        // 'rounded-md': Cantos levemente arredondados.
        //
        // Uses string interpolation to apply classes conditionally.
        // If the current section is the 'activeSection', applies 'bg-blue-700 font-semibold' to highlight it.
        // 'text-white': White text color.
        // 'hover:text-blue-200': Light blue text color on hover.
        // 'transition duration-300 ease-in-out': Adds a smooth transition for style changes.
        // 'px-3 py-2': Horizontal and vertical padding.
        // 'rounded-md': Slightly rounded corners.
        activeSection === section ? 'bg-blue-700 font-semibold' : ''
      }`}
    >
      {label}
    </button>
  );

  // Componente Wrapper de Seção.
  // Usado para garantir um estilo consistente em todas as seções do portfólio.
  // Recebe um 'id' (para navegação), um 'title' e 'children' (o conteúdo da seção).
  //
  // Section Wrapper Component.
  // Used to ensure consistent styling across all portfolio sections.
  // Receives an 'id' (for navigation), a 'title', and 'children' (the section's content).
  const Section = ({ id, title, children }) => (
    <section id={id} className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 flex flex-col justify-center items-center text-center">
      {/* 'min-h-screen': Garante que a seção tenha pelo menos a altura da tela.
          'py-20': Preenchimento vertical grande.
          'px-4 sm:px-6 lg:px-8': Preenchimento horizontal responsivo (muda em diferentes tamanhos de tela).
          'bg-gray-900': Fundo cinza escuro para o tema escuro.
          'flex flex-col justify-center items-center text-center': Usa flexbox para centralizar o conteúdo vertical e horizontalmente, e alinha o texto ao centro. */}
      {/* 'min-h-screen': Ensures the section is at least the height of the screen.
          'py-20': Large vertical padding.
          'px-4 sm:px-6 lg:px-8': Responsive horizontal padding (changes at different screen sizes).
          'bg-gray-900': Dark gray background for the dark theme.
          'flex flex-col justify-center items-center text-center': Uses flexbox to center content vertically and horizontally, and aligns text to the center. */}
      
      <div className="max-w-4xl w-full bg-gray-800 p-8 rounded-xl shadow-2xl transform transition-all duration-500 hover:scale-[1.01] border-t-4 border-blue-600">
        {/* 'max-w-4xl': Limita a largura máxima do conteúdo.
            'w-full': Ocupa 100% da largura disponível até o limite máximo.
            'bg-gray-800': Fundo cinza um pouco mais claro que o fundo da seção.
            'p-8': Preenchimento interno.
            'rounded-xl': Cantos bem arredondados.
            'shadow-2xl': Sombra grande.
            'transform transition-all duration-500 hover:scale-[1.01]': Adiciona uma leve animação de escala ao passar o mouse.
            'border-t-4 border-blue-600': Uma borda azul na parte superior para destaque. */}
        {/* 'max-w-4xl': Limits the maximum content width.
            'w-full': Takes 100% of available width up to the maximum limit.
            'bg-gray-800': A slightly lighter gray background than the section background.
            'p-8': Inner padding.
            'rounded-xl': Well-rounded corners.
            'shadow-2xl': Large shadow.
            'transform transition-all duration-500 hover:scale-[1.01]': Adds a slight scale animation on hover.
            'border-t-4 border-blue-600': A blue border at the top for emphasis. */}
        
        <h2 className="text-4xl font-extrabold text-white mb-8 pb-4 border-b-2 border-blue-500">{title}</h2>
        {/* 'text-4xl font-extrabold': Tamanho e peso da fonte para o título.
            'text-white': Cor do texto branca.
            'mb-8 pb-4': Margem inferior e preenchimento inferior.
            'border-b-2 border-blue-500': Uma linha azul na parte inferior do título. */}
        {/* 'text-4xl font-extrabold': Font size and weight for the title.
            'text-white': White text color.
            'mb-8 pb-4': Bottom margin and bottom padding.
            'border-b-2 border-blue-500': A blue line at the bottom of the title. */}
        {children}
      </div>
    </section>
  );

  // Componente da Seção Inicial (Hero Section).
  // É a primeira coisa que o usuário vê ao acessar o portfólio.
  //
  // Hero Section Component.
  // It's the first thing the user sees when accessing the portfolio.
  const HeroSection = () => (
    // O título da seção agora é dinâmico, baseado no idioma selecionado.
    // Se a tradução para o idioma atual não existir, ele volta para o português ('pt').
    //
    // The section title is now dynamic, based on the selected language.
    // If the translation for the current language doesn't exist, it defaults to Portuguese ('pt').
    <Section id="home" title={sectionTitles.home[currentLanguage] || sectionTitles.home.pt}>
      {/* Parágrafos de introdução com cores de texto ajustadas para o tema escuro.
          Os textos dos parágrafos são dinâmicos, usando 'contentTranslations'. */}
      {/* Introduction paragraphs with text colors adjusted for the dark theme.
          The paragraph texts are dynamic, using 'contentTranslations'. */}
      <p className="text-xl text-gray-300 mb-6 leading-relaxed">
        {contentTranslations.hero.paragraph1[currentLanguage] || contentTranslations.hero.paragraph1.pt}
      </p>
      <p className="text-lg text-gray-400">
        {contentTranslations.hero.paragraph2[currentLanguage] || contentTranslations.hero.paragraph2.pt}
      </p>
      <button
        // Botão para navegar para a seção "Sobre Mim".
        // O texto do botão também é dinâmico.
        //
        // Button to navigate to the "About Me" section.
        // The button text is also dynamic.
        onClick={() => setActiveSection('about')}
        className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
      >
        {contentTranslations.hero.button[currentLanguage] || contentTranslations.hero.button.pt}
      </button>
    </Section>
  );

  // Componente da Seção "Sobre Mim".
  // Detalha a trajetória, filosofia e projetos pessoais de Samuel.
  //
  // About Me Section Component.
  // Details Samuel's background, philosophy, and personal projects.
  const AboutSection = () => (
    // O título da seção agora é dinâmico, baseado no idioma selecionado.
    //
    // The section title is now dynamic, based on the selected language.
    <Section id="about" title={sectionTitles.about[currentLanguage] || sectionTitles.about.pt}>
      {/* Parágrafos com informações sobre a formação e abordagem profissional.
          As cores do texto são ajustadas para o tema escuro.
          Os textos dos parágrafos são dinâmicos, usando 'contentTranslations'. */}
      {/* Paragraphs with information about professional background and approach.
          Text colors are adjusted for the dark theme.
          The paragraph texts are dynamic, using 'contentTranslations'. */}
      <p className="text-lg text-gray-300 mb-6 leading-relaxed">
        {contentTranslations.about.paragraph1[currentLanguage] || contentTranslations.about.paragraph1.pt}
      </p>
      <p className="text-lg text-gray-300 mb-6 leading-relaxed">
        {contentTranslations.about.paragraph2[currentLanguage] || contentTranslations.about.paragraph2.pt}
      </p>
      <p className="text-lg text-gray-300 mb-6 leading-relaxed font-semibold text-blue-400">
        {contentTranslations.about.paragraph3[currentLanguage] || contentTranslations.about.paragraph3.pt}
      </p>
      <p className="text-lg text-gray-300 mb-6 leading-relaxed">
        {contentTranslations.about.paragraph4[currentLanguage] || contentTranslations.about.paragraph4.pt}
      </p>
      <ul className="list-disc list-inside text-lg text-gray-300 space-y-2 mb-6 text-left mx-auto max-w-2xl">
        <li>
          {/* O nome do projeto agora é dinâmico, buscando do objeto 'personalProjectsData' */}
          {/* The project name is now dynamic, fetched from the 'personalProjectsData' object */}
          <strong>{personalProjectsData[0].name[currentLanguage] || personalProjectsData[0].name.pt}:</strong> {personalProjectsData[0].description[currentLanguage] || personalProjectsData[0].description.pt}
        </li>
        <li>
          {/* O nome do projeto agora é dinâmico, buscando do objeto 'personalProjectsData' */}
          {/* The project name is now dynamic, fetched from the 'personalProjectsData' object */}
          <strong>{personalProjectsData[1].name[currentLanguage] || personalProjectsData[1].name.pt}:</strong> {personalProjectsData[1].description[currentLanguage] || personalProjectsData[1].description.pt}
        </li>
      </ul>
      <p className="text-lg text-gray-300 leading-relaxed">
        {contentTranslations.about.paragraph5[currentLanguage] || contentTranslations.about.paragraph5.pt}
      </p>
    </Section>
  );

  // Componente da Seção de Experiência Profissional.
  // Detalha a experiência de Samuel na Saquers.Tech.
  //
  // Professional Experience Section Component.
  // Details Samuel's experience at Saquers.Tech.
  const ExperienceSection = () => (
    // O título da seção agora é dinâmico, baseado no idioma selecionado.
    //
    // The section title is now dynamic, based on the selected language.
    <Section id="experience" title={sectionTitles.experience[currentLanguage] || sectionTitles.experience.pt}>
      <div className="text-left w-full">
        {/* Título da posição e lista de responsabilidades/conquistas.
            As cores do texto são ajustadas para o tema escuro e palavras em negrito.
            O título da posição agora é dinâmico. */}
        {/* Position title and list of responsibilities/achievements.
            Text colors are adjusted for the dark theme and bolded words.
            The position title is now dynamic. */}
        <h3 className="text-2xl font-semibold text-gray-200 mb-4">{contentTranslations.experience.title[currentLanguage] || contentTranslations.experience.title.pt}</h3>
        <ul className="list-disc list-inside text-lg text-gray-300 space-y-3">
          <li>
            <strong>{contentTranslations.experience.listItems.item1[currentLanguage]?.split(':')[0]}:</strong> {contentTranslations.experience.listItems.item1[currentLanguage]?.split(':')[1]}
          </li>
          <li>
            <strong>{contentTranslations.experience.listItems.item2[currentLanguage]?.split(':')[0]}:</strong> {contentTranslations.experience.listItems.item2[currentLanguage]?.split(':')[1]}
          </li>
          <li>
            <strong>{contentTranslations.experience.listItems.item3[currentLanguage]?.split(':')[0]}:</strong> {contentTranslations.experience.listItems.item3[currentLanguage]?.split(':')[1]}
          </li>
          <li>
            <strong>{contentTranslations.experience.listItems.item4[currentLanguage]?.split(':')[0]}:</strong> {contentTranslations.experience.listItems.item4[currentLanguage]?.split(':')[1]}
          </li>
          <li>
            <strong>{contentTranslations.experience.listItems.item5[currentLanguage]?.split(':')[0]}:</strong> {contentTranslations.experience.listItems.item5[currentLanguage]?.split(':')[1]}
          </li>
          <li>
            <strong>{contentTranslations.experience.listItems.item6[currentLanguage]?.split(':')[0]}:</strong> {contentTranslations.experience.listItems.item6[currentLanguage]?.split(':')[1]}
          </li>
        </ul>
      </div>
    </Section>
  );

  // Componente de Item de Acordeão.
  // Usado na seção "Projetos & Expertise" para expandir/recolher conteúdo.
  //
  // Accordion Item Component.
  // Used in the "Projects & Expertise" section to expand/collapse content.
  const AccordionItem = ({ title, content, isOpen, onClick }) => (
    <div className="border border-gray-700 rounded-lg mb-4 shadow-sm"> {/* Adjusted border color for dark theme */}
      {/* Botão que controla a expansão/recolhimento do acordeão.
          'flex justify-between items-center w-full p-5 text-left': Layout flexível para o título e o ícone.
          'text-xl font-semibold text-gray-100 bg-gray-700 hover:bg-gray-600': Estilo do botão para o tema escuro.
          'rounded-lg transition-all duration-300': Cantos arredondados e transição suave. */}
      {/* Button that controls the expansion/collapse of the accordion.
          'flex justify-between items-center w-full p-5 text-left': Flexible layout for the title and icon.
          'text-xl font-semibold text-gray-100 bg-gray-700 hover:bg-gray-600': Button style for the dark theme.
          'rounded-lg transition-all duration-300': Rounded corners and smooth transition. */}
      <button
        onClick={onClick} // Chama a função 'onClick' passada como prop para alternar o estado.
        className="flex justify-between items-center w-full p-5 text-left text-xl font-semibold text-gray-100 bg-gray-700 hover:bg-gray-600 rounded-lg transition-all duration-300"
      >
        {title}
        {/* Ícone de seta que gira quando o acordeão está aberto.
            'w-6 h-6': Tamanho do ícone.
            'transform transition-transform duration-300': Permite a animação de rotação.
            '${isOpen ? 'rotate-180' : ''}': Gira 180 graus se 'isOpen' for verdadeiro. */}
        {/* Arrow icon that rotates when the accordion is open.
            'w-6 h-6': Icon size.
            'transform transition-transform duration-300': Enables rotation animation.
            '${isOpen ? 'rotate-180' : ''}': Rotates 180 degrees if 'isOpen' is true. */}
        <svg
          className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      {/* Conteúdo do acordeão, visível apenas se 'isOpen' for verdadeiro.
          'p-5 border-t border-gray-700 bg-gray-800 text-gray-300': Estilo do conteúdo para o tema escuro. */}
      {/* Accordion content, visible only if 'isOpen' is true.
          'p-5 border-t border-gray-700 bg-gray-800 text-gray-300': Content style for the dark theme. */}
      {isOpen && (
        <div className="p-5 border-t border-gray-700 bg-gray-800 text-gray-300">
          {content}
        </div>
      )}
    </div>
  );

  // Componente da Seção de Projetos e Expertise.
  // Combina a lista de projetos pessoais com as áreas de expertise em acordeões.
  //
  // Projects and Expertise Section Component.
  // Combines the list of personal projects with expertise areas in accordions.
  const ProjectsAndExpertiseSection = () => {
    // Estado para controlar qual item do acordeão está aberto.
    // 'null' significa que nenhum está aberto inicialmente.
    //
    // State to control which accordion item is open.
    // 'null' means none are open initially.
    const [openItem, setOpenItem] = useState(null);

    // Função para alternar o estado de um item do acordeão.
    // Se o item clicado já estiver aberto, ele é fechado (setOpenItem(null)).
    // Caso contrário, ele é aberto (setOpenItem(index)).
    //
    // Function to toggle the state of an accordion item.
    // If the clicked item is already open, it's closed (setOpenItem(null)).
    // Otherwise, it's opened (setOpenItem(index)).
    const toggleItem = (index) => {
      setOpenItem(openItem === index ? null : index);
    };

    // Dados para os itens do acordeão na seção de expertise.
    // Cada objeto contém um 'title' e o 'content' a ser exibido.
    // O conteúdo é JSX, permitindo estrutura HTML e Tailwind CSS.
    // Os textos agora incluem traduções para cada idioma.
    //
    // Data for the accordion items in the expertise section.
    // Each object contains a 'title' and the 'content' to be displayed.
    // The content now includes translations for each language.
    const expertiseData = [
      {
        title: {
          pt: 'Inteligência Artificial (IA) & Inovação',
          en: 'Artificial Intelligence (AI) & Innovation',
          ru: 'Искусственный интеллект (ИИ) и инновации',
          zh: '人工智能 (AI) 与创新',
          ko: '인공지능 (AI) 및 혁신',
          ja: '人工知能 (AI) とイノベーション',
        },
        content: (
          <div className="text-lg text-gray-300 space-y-4"> {/* Adjusted text color for dark theme */}
            <p>
              {contentTranslations.expertise.aiInnovation.paragraph1[currentLanguage] || contentTranslations.expertise.aiInnovation.paragraph1.pt}
            </p>
            <h4 className="font-semibold text-gray-200">{contentTranslations.expertise.aiInnovation.expertiseTitle[currentLanguage] || contentTranslations.expertise.aiInnovation.expertiseTitle.pt}</h4>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li><strong>{contentTranslations.expertise.aiInnovation.listItems.item1[currentLanguage] || contentTranslations.expertise.aiInnovation.listItems.item1.pt}</strong></li>
              <li><strong>{contentTranslations.expertise.aiInnovation.listItems.item2[currentLanguage] || contentTranslations.expertise.aiInnovation.listItems.item2.pt}</strong>.</li> {/* Nova habilidade adicionada */}
              <li><strong>{contentTranslations.expertise.aiInnovation.listItems.item3[currentLanguage] || contentTranslations.expertise.aiInnovation.listItems.item3.pt}</strong></li>
              <li><strong>{contentTranslations.expertise.aiInnovation.listItems.item4[currentLanguage] || contentTranslations.expertise.aiInnovation.listItems.item4.pt}</strong></li>
              <li><strong>{contentTranslations.expertise.aiInnovation.listItems.item5[currentLanguage] || contentTranslations.expertise.aiInnovation.listItems.item5.pt}</strong></li>
            </ul>
            <h4 className="font-semibold text-gray-200">{contentTranslations.expertise.aiInnovation.casesTitle[currentLanguage] || contentTranslations.expertise.aiInnovation.casesTitle.pt}</h4>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                <strong>{contentTranslations.expertise.aiInnovation.casesList.case1[currentLanguage]?.split(':')[0]}:</strong> {contentTranslations.expertise.aiInnovation.casesList.case1[currentLanguage]?.split(':')[1]}
              </li>
              <li>
                <strong>{contentTranslations.expertise.aiInnovation.casesList.case2[currentLanguage]?.split(':')[0]}:</strong> {contentTranslations.expertise.aiInnovation.casesList.case2[currentLanguage]?.split(':')[1]}
              </li>
              <li>
                <strong>{contentTranslations.expertise.aiInnovation.casesList.case3[currentLanguage]?.split(':')[0]}:</strong> {contentTranslations.expertise.aiInnovation.casesList.case3[currentLanguage]?.split(':')[1]}
              </li>
            </ul>
          </div>
        ),
      },
      {
        title: {
          pt: 'Análise, Sustentação & Treinamento',
          en: 'Analysis, Support & Training',
          ru: 'Анализ, поддержка и обучение',
          zh: '分析、支持与培训',
          ko: '분석, 지원 및 교육',
          ja: '分析、サポート、トレーニング',
        },
        content: (
          <div className="text-lg text-gray-300 space-y-4"> {/* Adjusted text color for dark theme */}
            <p>
              {contentTranslations.expertise.analysisSupportTraining.paragraph1[currentLanguage] || contentTranslations.expertise.analysisSupportTraining.paragraph1.pt}
            </p>
            <h4 className="font-semibold text-gray-200">{contentTranslations.expertise.analysisSupportTraining.keySkillsTitle[currentLanguage] || contentTranslations.expertise.analysisSupportTraining.keySkillsTitle.pt}</h4>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li><strong>{contentTranslations.expertise.analysisSupportTraining.listItems.item1[currentLanguage] || contentTranslations.expertise.analysisSupportTraining.listItems.item1.pt}</strong></li>
              <li><strong>{contentTranslations.expertise.analysisSupportTraining.listItems.item2[currentLanguage] || contentTranslations.expertise.analysisSupportTraining.listItems.item2.pt}</strong></li>
              <li><strong>{contentTranslations.expertise.analysisSupportTraining.listItems.item3[currentLanguage] || contentTranslations.expertise.analysisSupportTraining.listItems.item3.pt}</strong></li>
              <li><strong>{contentTranslations.expertise.analysisSupportTraining.listItems.item4[currentLanguage] || contentTranslations.expertise.analysisSupportTraining.listItems.item4.pt}</strong></li>
              <li><strong>{contentTranslations.expertise.analysisSupportTraining.listItems.item5[currentLanguage]?.split(':')[0]}:</strong> {contentTranslations.expertise.analysisSupportTraining.listItems.item5[currentLanguage]?.split(':')[1]}</li>
            </ul>
            <h4 className="font-semibold text-gray-200">{contentTranslations.expertise.analysisSupportTraining.casesTitle[currentLanguage] || contentTranslations.expertise.analysisSupportTraining.casesTitle.pt}</h4>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                <strong>{contentTranslations.expertise.analysisSupportTraining.casesList.case1[currentLanguage]?.split(':')[0]}:</strong> {contentTranslations.expertise.analysisSupportTraining.casesList.case1[currentLanguage]?.split(':')[1]}
              </li>
              <li>
                <strong>{contentTranslations.expertise.analysisSupportTraining.casesList.case2[currentLanguage]?.split(':')[0]}:</strong> {contentTranslations.expertise.analysisSupportTraining.casesList.case2[currentLanguage]?.split(':')[1]}
              </li>
            </ul>
          </div>
        ),
      },
      {
        title: {
          pt: 'Dados, Observabilidade & Business Intelligence',
          en: 'Data, Observability & Business Intelligence',
          ru: 'Данные, наблюдаемость и бизнес-аналитика',
          zh: '数据、可观察性与商业智能',
          ko: '데이터, 관찰 가능성 및 비즈니스 인텔리전스',
          ja: 'データ、可観測性、ビジネスインテリジェンス',
        },
        content: (
          <div className="text-lg text-gray-300 space-y-4"> {/* Adjusted text color for dark theme */}
            <p>
              {contentTranslations.expertise.dataObservabilityBI.paragraph1[currentLanguage] || contentTranslations.expertise.dataObservabilityBI.paragraph1.pt}
            </p>
            <h4 className="font-semibold text-gray-200">{contentTranslations.expertise.dataObservabilityBI.toolsTechTitle[currentLanguage] || contentTranslations.expertise.dataObservabilityBI.toolsTechTitle.pt}</h4>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li><strong>{contentTranslations.expertise.dataObservabilityBI.listItems.item1[currentLanguage] || contentTranslations.expertise.dataObservabilityBI.listItems.item1.pt}</strong></li>
              <li><strong>{contentTranslations.expertise.dataObservabilityBI.listItems.item2[currentLanguage]?.split(':')[0]}:</strong> {contentTranslations.expertise.dataObservabilityBI.listItems.item2[currentLanguage]?.split(':')[1]}</li>
              <li><strong>{contentTranslations.expertise.dataObservabilityBI.listItems.item3[currentLanguage]?.split(':')[0]}:</strong> {contentTranslations.expertise.dataObservabilityBI.listItems.item3[currentLanguage]?.split(':')[1]}</li>
              <li><strong>{contentTranslations.expertise.dataObservabilityBI.listItems.item4[currentLanguage]?.split(':')[0]}:</strong> {contentTranslations.expertise.dataObservabilityBI.listItems.item4[currentLanguage]?.split(':')[1]}</li>
              <li><strong>{contentTranslations.expertise.dataObservabilityBI.listItems.item5[currentLanguage] || contentTranslations.expertise.dataObservabilityBI.listItems.item5.pt}</strong></li>
              <li><strong>{contentTranslations.expertise.dataObservabilityBI.listItems.item6[currentLanguage] || contentTranslations.expertise.dataObservabilityBI.listItems.item6.pt}</strong></li>
            </ul>
            <h4 className="font-semibold text-gray-200">{contentTranslations.expertise.dataObservabilityBI.casesTitle[currentLanguage] || contentTranslations.expertise.dataObservabilityBI.casesTitle.pt}</h4>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                <strong>{contentTranslations.expertise.dataObservabilityBI.casesList.case1[currentLanguage]?.split(':')[0]}:</strong> {contentTranslations.expertise.dataObservabilityBI.casesList.case1[currentLanguage]?.split(':')[1]}
              </li>
              <li>
                <strong>{contentTranslations.expertise.dataObservabilityBI.casesList.case2[currentLanguage]?.split(':')[0]}:</strong> {contentTranslations.expertise.dataObservabilityBI.casesList.case2[currentLanguage]?.split(':')[1]}
              </li>
            </ul>
          </div>
        ),
      },
      {
        title: {
          pt: 'Infraestrutura, Redes & Servidores',
          en: 'Infrastructure, Networks & Servers',
          ru: 'Инфраструктура, сети и серверы',
          zh: '基础设施、网络与服务器',
          ko: '인프라, 네트워크 및 서버',
          ja: 'インフラストラクチャ、ネットワーク、サーバー',
        },
        content: (
          <div className="text-lg text-gray-300 space-y-4"> {/* Adjusted text color for dark theme */}
            <p>
              {contentTranslations.expertise.infrastructureNetworksServers.paragraph1[currentLanguage] || contentTranslations.expertise.infrastructureNetworksServers.paragraph1.pt}
            </p>
            <h4 className="font-semibold text-gray-200">{contentTranslations.expertise.infrastructureNetworksServers.knowledgeTitle[currentLanguage] || contentTranslations.expertise.infrastructureNetworksServers.knowledgeTitle.pt}</h4>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li><strong>{contentTranslations.expertise.infrastructureNetworksServers.listItems.item1[currentLanguage]?.split(':')[0]}:</strong> {contentTranslations.expertise.infrastructureNetworksServers.listItems.item1[currentLanguage]?.split(':')[1]}</li>
              <li><strong>{contentTranslations.expertise.infrastructureNetworksServers.listItems.item2[currentLanguage]?.split(':')[0]}:</strong> {contentTranslations.expertise.infrastructureNetworksServers.listItems.item2[currentLanguage]?.split(':')[1]}</li>
              <li><strong>{contentTranslations.expertise.infrastructureNetworksServers.listItems.item3[currentLanguage] || contentTranslations.expertise.infrastructureNetworksServers.listItems.item3.pt}</strong></li>
              <li><strong>{contentTranslations.expertise.infrastructureNetworksServers.listItems.item4[currentLanguage] || contentTranslations.expertise.infrastructureNetworksServers.listItems.item4.pt}</strong></li>
            </ul>
            <h4 className="font-semibold text-gray-200">{contentTranslations.expertise.infrastructureNetworksServers.casesTitle[currentLanguage] || contentTranslations.expertise.infrastructureNetworksServers.casesTitle.pt}</h4>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                <strong>{contentTranslations.expertise.infrastructureNetworksServers.casesList.case1[currentLanguage]?.split(':')[0]}:</strong> {contentTranslations.expertise.infrastructureNetworksServers.casesList.case1[currentLanguage]?.split(':')[1]}
              </li>
              <li>
                <strong>{contentTranslations.expertise.infrastructureNetworksServers.casesList.case2[currentLanguage]?.split(':')[0]}:</strong> {contentTranslations.expertise.infrastructureNetworksServers.casesList.case2[currentLanguage]?.split(':')[1]}
              </li>
            </ul>
          </div>
        ),
      },
      {
        title: {
          pt: 'Desenvolvimento & Automação',
          en: 'Development & Automation',
          ru: 'Разработка и автоматизация',
          zh: '开发与自动化',
          ko: '개발 및 자동화',
          ja: '開発と自動化',
        },
        content: (
          <div className="text-lg text-gray-300 space-y-4"> {/* Adjusted text color for dark theme */}
            <p>
              {contentTranslations.expertise.developmentAutomation.paragraph1[currentLanguage] || contentTranslations.expertise.developmentAutomation.paragraph1.pt}
            </p>
            <h4 className="font-semibold text-gray-200">{contentTranslations.expertise.developmentAutomation.languagesToolsTitle[currentLanguage] || contentTranslations.expertise.developmentAutomation.languagesToolsTitle.pt}</h4>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li><strong>{contentTranslations.expertise.developmentAutomation.listItems.item1[currentLanguage]?.split(':')[0]}:</strong> {contentTranslations.expertise.developmentAutomation.listItems.item1[currentLanguage]?.split(':')[1]}</li>
              <li><strong>{contentTranslations.expertise.developmentAutomation.listItems.item2[currentLanguage] || contentTranslations.expertise.developmentAutomation.listItems.item2.pt}</strong></li>
              <li><strong>{contentTranslations.expertise.developmentAutomation.listItems.item3[currentLanguage] || contentTranslations.expertise.developmentAutomation.listItems.item3.pt}</strong></li>
              <li><strong>{contentTranslations.expertise.developmentAutomation.listItems.item4[currentLanguage]?.split(':')[0]}:</strong> {contentTranslations.expertise.developmentAutomation.listItems.item4[currentLanguage]?.split(':')[1]}</li>
            </ul>
            <h4 className="font-semibold text-gray-200">{contentTranslations.expertise.developmentAutomation.casesTitle[currentLanguage] || contentTranslations.expertise.developmentAutomation.casesTitle.pt}</h4>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                <strong>{contentTranslations.expertise.developmentAutomation.casesList.case1[currentLanguage]?.split(':')[0]}:</strong> {contentTranslations.expertise.developmentAutomation.casesList.case1[currentLanguage]?.split(':')[1]}
              </li>
              <li>
                <strong>{contentTranslations.expertise.developmentAutomation.casesList.case2[currentLanguage]?.split(':')[0]}:</strong> {contentTranslations.expertise.developmentAutomation.casesList.case2[currentLanguage]?.split(':')[1]}
              </li>
            </ul>
          </div>
        ),
      },
      {
        title: {
          pt: 'Metodologias & Soft Skills',
          en: 'Methodologies & Soft Skills',
          ru: 'Методологии и мягкие навыки',
          zh: '方法论与软技能',
          ko: '방법론 및 소프트 스킬',
          ja: '方法論とソフトスキル',
        },
        content: (
          <div className="text-lg text-gray-300 space-y-4"> {/* Adjusted text color for dark theme */}
            <p>
              {contentTranslations.expertise.methodologiesSoftSkills.paragraph1[currentLanguage] || contentTranslations.expertise.methodologiesSoftSkills.paragraph1.pt}
            </p>
            <h4 className="font-semibold text-gray-200">{contentTranslations.expertise.methodologiesSoftSkills.skillsTitle[currentLanguage] || contentTranslations.expertise.methodologiesSoftSkills.skillsTitle.pt}</h4>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li><strong>{contentTranslations.expertise.methodologiesSoftSkills.listItems.item1[currentLanguage] || contentTranslations.expertise.methodologiesSoftSkills.listItems.item1.pt}</strong></li>
              <li><strong>{contentTranslations.expertise.methodologiesSoftSkills.listItems.item2[currentLanguage]?.split(':')[0]}:</strong> {contentTranslations.expertise.methodologiesSoftSkills.listItems.item2[currentLanguage]?.split(':')[1]}</li>
              <li><strong>{contentTranslations.expertise.methodologiesSoftSkills.listItems.item3[currentLanguage] || contentTranslations.expertise.methodologiesSoftSkills.listItems.item3.pt}</strong></li>
              <li><strong>{contentTranslations.expertise.methodologiesSoftSkills.listItems.item4[currentLanguage] || contentTranslations.expertise.methodologiesSoftSkills.listItems.item4.pt}</strong>.</li> {/* Nova habilidade adicionada */}
              <li><strong>{contentTranslations.expertise.methodologiesSoftSkills.listItems.item5[currentLanguage]?.split(':')[0]}:</strong> {contentTranslations.expertise.methodologiesSoftSkills.listItems.item5[currentLanguage]?.split(':')[1]}</li>
              <li><strong>{contentTranslations.expertise.methodologiesSoftSkills.listItems.item6[currentLanguage] || contentTranslations.expertise.methodologiesSoftSkills.listItems.item6.pt}</strong></li>
            </ul>
            <h4 className="font-semibold text-gray-200">{contentTranslations.expertise.methodologiesSoftSkills.impactTitle[currentLanguage] || contentTranslations.expertise.methodologiesSoftSkills.impactTitle.pt}</h4>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                <strong>{contentTranslations.expertise.methodologiesSoftSkills.impactList.item1[currentLanguage]?.split(':')[0]}:</strong> {contentTranslations.expertise.methodologiesSoftSkills.impactList.item1[currentLanguage]?.split(':')[1]}
              </li>
              <li>
                <strong>{contentTranslations.expertise.methodologiesSoftSkills.impactList.item2[currentLanguage]?.split(':')[0]}:</strong> {contentTranslations.expertise.methodologiesSoftSkills.impactList.item2[currentLanguage]?.split(':')[1]}
              </li>
            </ul>
          </div>
        ),
      },
    ];

    // Dados para os projetos pessoais.
    // Cada objeto representa um projeto com seu nome, descrição, link para o GitHub e link para documentação.
    // Os campos 'name' e 'description' agora são objetos com traduções.
    //
    // Data for personal projects.
    // Each object represents a project with its name, description, GitHub link, and documentation link.
    // The 'name' and 'description' fields are now objects with translations.
    const personalProjectsData = [
      {
        name: {
          pt: 'ESCAMBO (Criptomoeda)',
          en: 'ESCAMBO (Cryptocurrency)',
          ru: 'ЭСКАМБО (Криптовалюта)',
          zh: 'ESCAMBO（加密货币）',
          ko: '이스캄보 (암호화폐)',
          ja: 'エスカンボ（暗号通貨）',
        },
        description: {
          pt: 'Uma criptomoeda idealizada para financiar um DApp de criação de moedas próprias, atreladas a produtos reais. O objetivo é gerar um "escambo digital" futuro, oferecendo uma alternativa para fugir das oscilações de preço de moedas fiduciárias fracas.',
          en: 'A cryptocurrency designed to finance a DApp for creating proprietary currencies, linked to real products. The goal is to generate a future "digital barter," offering an alternative to escape the price fluctuations of weak fiat currencies.',
          ru: 'Криптовалюта, предназначенная для финансирования DApp по созданию собственных валют, привязанных к реальным продуктам. Цель состоит в создании будущего «цифрового бартера», предлагающего альтернативу для ухода от колебаний цен слабых фиатных валют.',
          zh: '一种旨在为创建与实际产品挂钩的专有货币的DApp提供资金的加密货币。目标是创建未来的“数字易货”，提供一种替代方案，以摆脱弱势法定货币的价格波动。',
          ko: '실제 제품과 연동된 자체 통화를 생성하는 DApp에 자금을 지원하기 위해 고안된 암호화폐입니다. 목표는 약한 법정 화폐의 가격 변동에서 벗어날 대안을 제공하는 미래의 "디지털 물물교환"을 생성하는 것입니다.',
          ja: '実際の製品に紐付けられた独自の通貨を作成するためのDAppに資金を提供するために考案された暗号通貨です。目的は、将来の「デジタル物々交換」を生成し、弱い法定通貨の価格変動から逃れる代替手段を提供することです。',
        },
        githubLink: 'https://github.com/seu-usuario/escambo-crypto', // Substitua com o link real do seu repositório
        documentationLink: 'https://docs.escambo.com.br', // Substitua com o link real da documentação
      },
      {
        name: {
          pt: 'VOTEX (Sistema de Votação em Blockchain)',
          en: 'VOTEX (Blockchain Voting System)',
          ru: 'VOTEX (Система голосования на блокчейне)',
          zh: 'VOTEX（区块链投票系统）',
          ko: 'VOTEX (블록체인 투표 시스템)',
          ja: 'VOTEX（ブロックチェーン投票システム）',
        },
        description: {
          pt: 'Um sistema de votações seguro, anônimo e auditável, construído sobre o ambiente da blockchain. Utiliza uma certificadora de identidade digital para garantir tanto a segurança quanto o anonimato dos votantes, promovendo transparência e confiança em processos democráticos.',
          en: 'A secure, anonymous, and auditable voting system built on the blockchain environment. It uses a digital identity certifier to ensure both the security and anonymity of voters, promoting transparency and trust in democratic processes.',
        ru: 'Безопасная, анонимная и проверяемая система голосования, построенная на блокчейн-среде. Использует сертификатор цифровой идентификации для обеспечения как безопасности, так и анонимности избирателей, способствуя прозрачности и доверию в демократических процессах.',
        zh: '一个建立在区块链环境上的安全、匿名和可审计的投票系统。它使用数字身份认证器来确保投票者的安全性和匿名性，从而促进民主过程中的透明度和信任。',
        ko: '블록체인 환경 위에 구축된 안전하고 익명이며 감사 가능한 투표 시스템입니다. 디지털 신원 인증기를 사용하여 유권자의 보안과 익명성을 모두 보장하여 민주적 절차의 투명성과 신뢰를 증진합니다.',
        ja: 'ブロックチェーン環境上に構築された、安全で匿名かつ監査可能な投票システムです。デジタルID認証局を使用して、投票者のセキュリティと匿名性の両方を確保し、民主的なプロセスにおける透明性と信頼を促進します。',
        },
        githubLink: 'https://github.com/seu-usuario/votex-blockchain', // Substitua com o link real do seu repositório
        documentationLink: 'https://docs.votex.com.br', // Substitua com o link real da documentação
      },
    ];

    return (
      // O título da seção agora é dinâmico, baseado no idioma selecionado.
      //
      // The section title is now dynamic, based on the selected language.
      <Section id="projects-expertise" title={sectionTitles.projectsExpertise[currentLanguage] || sectionTitles.projectsExpertise.pt}>
        {/* Parágrafo de introdução para a seção de projetos e expertise. */}
        {/* Introduction paragraph for the projects and expertise section. */}
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          {contentTranslations.projectsExpertise.introParagraph[currentLanguage] || contentTranslations.projectsExpertise.introParagraph.pt}
        </p>

        {/* Seção de Meus Projetos Pessoais. */}
        {/* Personal Projects Section. */}
        <div className="w-full mb-8">
          {/* Título da subseção de projetos pessoais. */}
          {/* Title of the personal projects subsection. */}
          <h3 className="text-3xl font-bold text-white mb-6 pb-2 border-b-2 border-blue-400 text-center">
            {contentTranslations.projectsExpertise.personalProjectsTitle[currentLanguage] || contentTranslations.projectsExpertise.personalProjectsTitle.pt}
          </h3>
          {/* Grade de layout para exibir os projetos.
              'grid grid-cols-1 md:grid-cols-2': Em telas pequenas, uma coluna; em telas médias e maiores, duas colunas.
              'gap-6': Espaçamento entre os itens da grade. */}
          {/* Grid layout to display projects.
              'grid grid-cols-1 md:grid-cols-2': On small screens, one column; on medium and larger screens, two columns.
              'gap-6': Spacing between grid items. */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Mapeia o array 'personalProjectsData' para renderizar um card para cada projeto.
                'key={index}': Importante para o React identificar cada item na lista. */}
            {/* Maps the 'personalProjectsData' array to render a card for each project.
                'key={index}': Important for React to identify each item in the list. */}
            {personalProjectsData.map((project, index) => (
              <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-md border border-gray-600 hover:shadow-lg transition-shadow duration-300">
                {/* 'bg-gray-700': Fundo cinza escuro para o card.
                    'p-6': Preenchimento interno.
                    'rounded-lg': Cantos arredondados.
                    'shadow-md border border-gray-600': Sombra e borda para o card.
                    'hover:shadow-lg transition-shadow duration-300': Animação de sombra ao passar o mouse. */}
                {/* 'bg-gray-700': Dark gray background for the card.
                    'p-6': Inner padding.
                    'rounded-lg': Rounded corners.
                    'shadow-md border border-gray-600': Shadow and border for the card.
                    'hover:shadow-lg transition-shadow duration-300': Shadow animation on hover. */}
                <h4 className="text-xl font-semibold text-blue-300 mb-2">
                  {project.name[currentLanguage] || project.name.pt}
                </h4>
                <p className="text-gray-300 mb-4">
                  {project.description[currentLanguage] || project.description.pt}
                </p>
                <div className="flex flex-wrap gap-3 mt-4"> {/* Flex container for buttons */}
                  {/* Renderiza o botão "Ver no GitHub" apenas se 'githubLink' existir. */}
                  {/* Renders the "View on GitHub" button only if 'githubLink' exists. */}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank" // Abre o link em uma nova aba.
                      rel="noopener noreferrer" // Medida de segurança para links externos.
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors duration-300"
                    >
                      {contentTranslations.projectsExpertise.buttons.github[currentLanguage] || contentTranslations.projectsExpertise.buttons.github.pt}
                      {/* Ícone de seta para indicar que é um link externo. */}
                      {/* Arrow icon to indicate it's an external link. */}
                      <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                        <path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </a>
                  )}
                  {/* Renderiza o botão "Ver Documentação" apenas se 'documentationLink' existir. */}
                  {/* Renders the "View Documentation" button only if 'documentationLink' exists. */}
                  {project.documentationLink && (
                    <a
                      href={project.documentationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700 transition-colors duration-300"
                    >
                      {contentTranslations.projectsExpertise.buttons.documentation[currentLanguage] || contentTranslations.projectsExpertise.buttons.documentation.pt}
                      {/* Ícone de documento. */}
                      {/* Document icon. */}
                      <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                        <path fillRule="evenodd" d="M4 5a2 2 0 012-2h2V1a1 1 0 011-1h2a1 1 0 011 1v2h2a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 2a1 1 0 000 2h6a1 1 0 100-2H7zm-1 4a1 1 0 100 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Seção de Expertise (Acordeão). */}
        {/* Expertise Section (Accordion). */}
        <div className="w-full">
          {/* Título da subseção de áreas de expertise. */}
          {/* Title of the expertise areas subsection. */}
          <h3 className="text-3xl font-bold text-white mb-6 pb-2 border-b-2 border-blue-400 text-center">
            {contentTranslations.projectsExpertise.expertiseAreasTitle[currentLanguage] || contentTranslations.projectsExpertise.expertiseAreasTitle.pt}
          </h3>
          {/* Mapeia o array 'expertiseData' para renderizar os itens do acordeão. */}
          {/* Maps the 'expertiseData' array to render the accordion items. */}
          {expertiseData.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title[currentLanguage] || item.title.pt} // Título do acordeão agora é dinâmico
              content={item.content}
              isOpen={openItem === index} // Passa o estado de 'isOpen' para o item do acordeão.
              onClick={() => toggleItem(index)} // Passa a função para alternar o estado do item.
            />
          ))}
        </div>
      </Section>
    );
  };

  // Componente da Seção de Contato.
  // Fornece informações de contato para Samuel.
  //
  // Contact Section Component.
  // Provides contact information for Samuel.
  const ContactSection = () => (
    // O título da seção agora é dinâmico, baseado no idioma selecionado.
    //
    // The section title is now dynamic, based on the selected language.
    <Section id="contact" title={sectionTitles.contact[currentLanguage] || sectionTitles.contact.pt}>
      {/* Parágrafo de introdução para a seção de contato. */}
      {/* Introduction paragraph for the contact section. */}
      <p className="text-lg text-gray-300 mb-4">
        {contentTranslations.contact.introParagraph[currentLanguage] || contentTranslations.contact.introParagraph.pt}
      </p>
      {/* Informações de contato com links clicáveis. */}
      {/* Contact information with clickable links. */}
      <div className="flex flex-col items-center space-y-4 text-lg text-gray-200">
        <p>
          <strong>{contentTranslations.contact.emailLabel[currentLanguage] || contentTranslations.contact.emailLabel.pt}</strong> <a href="mailto:samuelwhite777@outlook.com.br" className="text-blue-400 hover:underline">samuelwhite777@outlook.com.br</a>
        </p>
        <p>
          <strong>{contentTranslations.contact.phoneLabel[currentLanguage] || contentTranslations.contact.phoneLabel.pt}</strong> <a href="tel:+5551993278018" className="text-blue-400 hover:underline">51 99327-8018</a>
        </p>
        <p>
          <strong>{contentTranslations.contact.locationLabel[currentLanguage] || contentTranslations.contact.locationLabel.pt}</strong> Itapema - SC, Brasil
        </p>
        {/* Você pode adicionar links para LinkedIn ou GitHub aqui se desejar. */}
        {/* You can add LinkedIn ou GitHub links here if you wish. */}
      </div>
    </Section>
  );

  // Função que decide qual seção renderizar com base no estado 'activeSection'.
  //
  // Function that decides which section to render based on the 'activeSection' state.
  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HeroSection />;
      case 'about':
        return <AboutSection />;
      case 'experience':
        return <ExperienceSection />;
      case 'projects-expertise': // Nome da seção atualizado.
        return <ProjectsAndExpertiseSection />;
      case 'contact':
        return <ContactSection />;
      default: // Caso nenhum corresponda, volta para a seção inicial.
        return <HeroSection />;
    }
  };

  return (
    // O div principal que envolve toda a aplicação.
    // 'font-sans antialiased': Define uma fonte sem serifa e suaviza o texto.
    // 'bg-gray-900 text-gray-100': Define o fundo global como cinza escuro e a cor do texto padrão como cinza claro.
    //
    // The main div that wraps the entire application.
    // 'font-sans antialiased': Sets a sans-serif font and antialiases text.
    // 'bg-gray-900 text-gray-100': Sets the global background to dark gray and the default text color to light gray.
    <div className="font-sans antialiased bg-gray-900 text-gray-100">
      {/* ATENÇÃO: O CDN do Tailwind CSS já está no index.html.
          Não é necessário incluí-lo aqui novamente. */}
      {/* ATTENTION: The Tailwind CSS CDN is already in index.html.
          It is not necessary to include it here again. */}
      <NavBar /> {/* Renderiza a barra de navegação. */}
      <main className="pt-16"> {/* 'pt-16': Adiciona preenchimento superior para compensar a altura da barra de navegação fixa. */}
        {/* Renders the navigation bar. */}
        {/* 'pt-16': Adds top padding to account for the height of the fixed navigation bar. */}
        {renderSection()} {/* Renderiza a seção ativa. */}
        {/* Renders the active section. */}
      </main>
      <footer className="bg-gray-800 text-white p-6 text-center rounded-t-lg">
        {/* Rodapé da página.
            'bg-gray-800 text-white p-6 text-center rounded-t-lg': Estilo do rodapé para o tema escuro. */}
        {/* Page footer.
            'bg-gray-800 text-white p-6 text-center rounded-t-lg': Footer style for the dark theme. */}
        <p>&copy; {new Date().getFullYear()} Samuel Pedroso. {contentTranslations.footer.copyright[currentLanguage] || contentTranslations.footer.copyright.pt}</p>
      </footer>
    </div>
  );
};

// Exporta o componente App para que ele possa ser usado em outros arquivos (geralmente index.js).
//
// Exports the App component for use in other files (typically index.js).
export default App;

