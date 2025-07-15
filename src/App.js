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
       