// Editorial articles in 8 locales: en, zh, zh-tw, es, fr, de, ja, ko.
// Each article: slugBase, category, tags, publishedDate, title{8}, excerpt{8}, content{8}.

const ARTICLES = [
  {
    slugBase: 'compound-interest-formula-examples',
    category: 'Investing Basics',
    tags: ['Compound Interest', 'Formulas', 'Beginners'],
    publishedDate: '2025-11-10T00:00:00.000Z',
    title: {
      en: 'Compound Interest Explained: Formula, Examples, and the Math Behind Our Calculator',
      zh: '复利详解：公式、实例以及我们计算器背后的数学原理',
      'zh-TW': '複利詳解：公式、實例以及計算器背後的數學原理',
      es: 'Interés compuesto explicado: fórmula, ejemplos y la matemática de la calculadora',
      fr: 'Intérêts composés expliqués : formule, exemples et calculs',
      de: 'Zinseszins erklärt: Formel, Beispiele und die Mathematik dahinter',
      ja: '複利を解説：計算式・具体例・計算機の仕組み',
      ko: '복리 완벽 설명: 공식, 예시와 계산기 원리',
    },
    excerpt: {
      en: 'The single most important formula in personal finance, with three concrete examples — plus how compounding frequency quietly boosts returns.',
      zh: '个人理财中最重要的公式，通过三个具体实例讲解——以及复利频率如何悄悄提升收益。',
      'zh-tw': '個人理財中最重要的公式，透過三個具體實例講解，以及複利頻率如何悄悄提升收益。',
      es: 'La fórmula más importante de las finanzas personales, con tres ejemplos concretos y el efecto de la frecuencia de capitalización.',
      fr: 'La formule la plus importante des finances personnelles, avec trois exemples concrets et l’effet de la fréquence de capitalisation.',
      de: 'Die wichtigste Formel der Geldanlage – mit drei Beispielen und dem Effekt der Zinsfrequenz.',
      ja: '資産形成で最も重要な計算式を3つの具体例と複利頻度の効果で解説します。',
      ko: '재테크에서 가장 중요한 공식을 세 가지 예시와 복리 주기 효과로 설명합니다.',
    },
    content: {
      en: '## Introduction\nCompound interest is interest on interest: each period\'s earnings join the balance, so the next period earns on a larger base. Over years this creates exponential growth — the reason small early contributions beat large late ones.\n## The core formula\nLump sum with periodic compounding: A = P × (1 + r/n)^(n×t), where P is principal, r the annual rate, n periods per year, t years. With monthly contributions an annuity term is added — exactly what our Compound Interest Calculator computes and charts.\n## Example 1: lump sum only\n$10,000 at 8% compounded annually for 20 years: A = 10,000 × 1.08^20 ≈ $46,610. Over $36,000 is pure interest — more than triple the deposit.\n## Example 2: monthly habit\nAdd $300/month at 8% (monthly compounding) for 20 years. Contributions total $72,000, balance reaches ≈ $177,000. Compounding supplies more than half the final value.\n## Example 3: frequency matters\nAt 8% nominal, $10,000 over 20 years ≈ $46,610 annual vs ≈ $49,268 monthly compounding. Same rate, free extra return from crediting interest more often.\n## Using our calculator\nEnter principal, monthly amount, rate, years and frequency, then study the contributions-vs-interest split. Lower the rate by 2 points to see your margin of safety. Save State bookmarks scenarios; Download PDF keeps a dated record.',
      zh: '## 引言\n复利就是“利滚利”：每一期的收益都会加入本金，下一期在更大的基数上计息。多年下来增长是指数型的——这就是早开始的小额定投胜过晚开始大额投入的原因。\n## 核心公式\n整笔投资按期复利：A = P × (1 + r/n)^(n×t)，P 为本金，r 为年利率，n 为每年复利次数，t 为年数。有每月定投时再加年金终值项——这正是复利计算器计算并绘图的内容。\n## 实例一：整笔投资\n10,000 美元按 8% 年复利 20 年：A ≈ 46,610 美元，其中超 36,000 美元是纯利息，是本金的三倍多。\n## 实例二：每月定投\n同样 8%（按月复利）每月投 300 美元坚持 20 年：累计投入 72,000 美元，余额约 177,000 美元，复利贡献超过一半。\n## 实例三：频率的影响\n名义 8% 下 10,000 美元 20 年：按年复利约 46,610 美元，按月复利约 49,268 美元。利率相同，只因结息更频繁就多出收益。\n## 使用计算器验证\n输入本金、月投、利率、年限和频率，观察“投入 vs 利息”拆分。把利率调低 2 个点，差距就是安全边际。用 Save State 收藏方案，用 PDF 导出做年度复盘。',
      'zh-tw': '## 引言\n複利就是「利滾利」：每一期的收益都會加入本金，下一期在更大的基數上計息。多年下來增長是指數型的——這就是早開始的小額定投勝過晚開始大額投入的原因。\n## 核心公式\n整筆投資按期複利：A = P × (1 + r/n)^(n×t)，P 為本金，r 為年利率，n 為每年複利次數，t 為年數。有每月定投時再加上年金終值項——這正是複利計算器計算並繪圖的內容。\n## 實例一：整筆投資\n10,000 美元按 8% 年複利 20 年：A ≈ 46,610 美元，其中超過 36,000 美元是純利息，是本金的三倍多。\n## 實例二：每月定投\n同樣 8%（按月複利）每月投 300 美元堅持 20 年：累計投入 72,000 美元，餘額約 177,000 美元，複利貢獻超過一半。\n## 實例三：頻率的影響\n名義 8% 下 10,000 美元 20 年：按年複利約 46,610 美元，按月複利約 49,268 美元。利率相同，只因結息更頻繁就多出收益。\n## 使用計算器驗證\n輸入本金、月投、利率、年限和頻率，觀察「投入 vs 利息」拆分。把利率調低 2 個點，差距就是安全邊際。用 Save State 收藏方案，用 PDF 匯出做年度複盤。',
      es: '## Introducción\nEl interés compuesto es interés sobre intereses: cada período las ganancias se suman al saldo y el siguiente período rinde sobre una base mayor. Con los años el crecimiento es exponencial — por eso pequeñas aportaciones tempranas superan a grandes aportaciones tardías.\n## La fórmula central\nCapital único con capitalización periódica: A = P × (1 + r/n)^(n×t), donde P es el principal, r la tasa anual, n los períodos por año y t los años. Con aportaciones mensuales se añade un término de anualidad — exactamente lo que calcula y grafica nuestra calculadora.\n## Ejemplo 1: capital único\n$10.000 al 8% anual durante 20 años: A ≈ $46.610. Más de $36.000 son intereses puros — más del triple del depósito.\n## Ejemplo 2: hábito mensual\nAñade $300/mes al 8% (capitalización mensual) durante 20 años. Aportas $72.000 y el saldo llega a ≈ $177.000. La capitalización aporta más de la mitad del valor final.\n## Ejemplo 3: la frecuencia importa\nAl 8% nominal, $10.000 en 20 años ≈ $46.610 anual frente a ≈ $49.268 mensual. Misma tasa, rendimiento extra gratis por acreditar intereses más a menudo.\n## Usa nuestra calculadora\nIntroduce principal, aporte mensual, tasa, años y frecuencia, y estudia el reparto aportaciones-vs-intereses. Baja la tasa 2 puntos para ver tu margen de seguridad. Guarda escenarios con Save State y exporta el PDF para tu revisión anual.',
      fr: '## Introduction\nLes intérêts composés, c’est des intérêts sur des intérêts : chaque période, les gains rejoignent le solde, et la période suivante rapporte sur une base plus large. Sur des années, la croissance devient exponentielle — voilà pourquoi de petites contributions précoces battent de grosses contributions tardives.\n## La formule centrale\nCapital unique à capitalisation périodique : A = P × (1 + r/n)^(n×t), où P est le capital, r le taux annuel, n les périodes par an et t les années. Avec des versements mensuels s’ajoute un terme de rente — exactement ce que notre calculateur calcule et trace.\n## Exemple 1 : capital unique\n10 000 $ à 8 % capitalisés annuellement pendant 20 ans : A ≈ 46 610 $. Plus de 36 000 $ sont des intérêts purs — plus du triple du dépôt.\n## Exemple 2 : habitude mensuelle\nAjoutez 300 $/mois à 8 % (mensuel) pendant 20 ans. Apports totaux 72 000 $, solde ≈ 177 000 $. La capitalisation fournit plus de la moitié de la valeur finale.\n## Exemple 3 : la fréquence compte\nÀ 8 % nominal, 10 000 $ sur 20 ans ≈ 46 610 $ en annuel contre ≈ 49 268 $ en mensuel. Même taux, rendement supplémentaire gratuit grâce à des intérêts crédités plus souvent.\n## Utilisez notre calculateur\nSaisissez capital, versement mensuel, taux, durée et fréquence, puis étudiez le partage apports-vs-intérêts. Baissez le taux de 2 points pour voir votre marge de sécurité. Sauvegardez les scénarios et exportez le PDF pour le bilan annuel.',
      de: '## Einführung\nZinseszins bedeutet Zinsen auf Zinsen: Jede Periode werden Erträge dem Guthaben zugeschlagen, die nächste Periode verzinst also eine größere Basis. Über Jahre entsteht exponentielles Wachstum — darum schlagen kleine frühe Beiträge große späte.\n## Die Kernformel\nEinmalbetrag mit periodischer Verzinsung: A = P × (1 + r/n)^(n×t), mit P als Kapital, r als Jahreszins, n Perioden pro Jahr, t Jahre. Bei Monatsraten kommt ein Rententerm hinzu — genau das berechnet und zeichnet unser Rechner.\n## Beispiel 1: Einmalbetrag\n10.000 $ zu 8 % jährlich über 20 Jahre: A ≈ 46.610 $. Über 36.000 $ sind reine Zinsen — mehr als das Dreifache der Einzahlung.\n## Beispiel 2: Monatsgewohnheit\n300 $/Monat zu 8 % (monatlich) über 20 Jahre: 72.000 $ eingezahlt, Endstand ≈ 177.000 $. Der Zinseszins liefert mehr als die Hälfte des Endwerts.\n## Beispiel 3: Frequenz zählt\nBei 8 % nominal: 10.000 $ über 20 Jahre ≈ 46.610 $ jährlich vs. ≈ 49.268 $ monatlich. Gleicher Zins, gratis Extrarendite durch häufigere Zinsgutschrift.\n## Rechner nutzen\nKapital, Monatsrate, Zins, Jahre und Frequenz eingeben und die Aufteilung Beiträge-vs-Zinsen studieren. Zins um 2 Punkte senken für die Sicherheitsmarge. Szenarien per Save State sichern, PDF für die Jahresbilanz exportieren.',
      ja: '## はじめに\n複利とは「利息に付く利息」です。各期間の収益が残高に加わり、次の期間はより大きな元本で運用されます。年月を重ねると指数関数的な成長となり、少額でも早い積立が後の大口を上回る理由です。\n## 基本の計算式\n一括投資の定期複利：A = P × (1 + r/n)^(n×t)。Pは元本、rは年利、nは年間の複利回数、tは年数です。毎月積立がある場合は年金終価が加わります——当サイトの複利計算機がまさにこれを計算・グラフ化します。\n## 例1：一括投資のみ\n10,000ドルを年利8％・年複利で20年：A ≈ 46,610ドル。うち36,000ドル超が純粋な利息で、元本の3倍以上です。\n## 例2：毎月の習慣\n同じ8％（月複利）で毎月300ドルを20年積立。投入合計72,000ドルに対し残高は約177,000ドル。最終残高の半分以上が複利の寄与です。\n## 例3：頻度が効く\n名目8％で10,000ドルを20年：年複利で約46,610ドル、月複利で約49,268ドル。同じ利率でも、利息の付く頻度が高いだけで上乗せが生まれます。\n## 計算機の使い方\n元本・月額・利率・年数・頻度を入力し、「投入 vs 利息」の内訳を確認します。利率を2ポイント下げて安全余裕を把握。Save Stateで条件を保存し、PDF出力で年次レビューに活用しましょう。',
      ko: '## 소개\n복리란 “이자에 붙는 이자”입니다. 매 기간의 수익이 잔액에 합산되어 다음 기간에는 더 큰 원금으로 운용됩니다. 세월이 쌓이면 기하급수적 성장이 되어, 이른 소액 적립이 늦은 거액을 앞지르는 이유입니다.\n## 핵심 공식\n목돈의 정기 복리: A = P × (1 + r/n)^(n×t). P는 원금, r은 연이율, n은 연간 복리 횟수, t는 연수입니다. 매월 적립이 있으면 연금 종가가 더해집니다 — 바로 이 사이트의 복리 계산기가 계산·차트로 보여주는 값입니다.\n## 예시 1: 목돈만\n10,000달러를 연 8%·연복리로 20년: A ≈ 46,610달러. 그중 36,000달러 이상이 순수 이자로 원금의 3배가 넘습니다.\n## 예시 2: 매월 습관\n같은 8%(월복리)로 매월 300달러씩 20년 적립. 납입 합계 72,000달러に対し 잔액은 약 177,000달러. 최종 잔액의 절반 이상이 복리 기여분입니다.\n## 예시 3: 주기가 중요\n명목 8%로 10,000달러를 20년: 연복리 약 46,610달러, 월복리 약 49,268달러. 같은 금리인데도 이자가 붙는 빈도가 높을수록 덤이 생깁니다.\n## 계산기 활용법\n원금·월 납입·수익률·기간·주기를 입력하고 “납입 vs 이자” 분할을 확인하세요. 수익률을 2%p 낮춰 안전마진을 점검하고, Save State로 시나리오를 저장, PDF로 연례 점검에 활용하세요.',
    },
  },
  {
    slugBase: 'sip-calculator-how-much-invest-monthly',
    category: 'Wealth Building',
    tags: ['SIP', 'Monthly Investing', 'Planning'],
    publishedDate: '2025-11-24T00:00:00.000Z',
    title: {
      en: 'SIP Calculator Guide: How Much Should You Invest Every Month?',
      zh: 'SIP 定投计算器指南：每个月应该投多少钱？',
      'zh-tw': 'SIP 定投計算器指南：每個月應該投多少錢？',
      es: 'Guía SIP: ¿cuánto deberías invertir cada mes?',
      fr: 'Guide SIP : combien investir chaque mois ?',
      de: 'SIP-Rechner-Anleitung: Wie viel solltest du monatlich investieren?',
      ja: 'SIP積立ガイド：毎月いくら投資すべきか？',
      ko: 'SIP 적립 가이드: 매달 얼마를 투자해야 할까?',
    },
    excerpt: {
      en: 'Set a target, pick a realistic return range, solve for the monthly amount — with numbers for 5, 10 and 20-year goals.',
      zh: '定目标、选合理的收益区间、反推月投金额——附 5 年、10 年、20 年目标的测算实例。',
      'zh-tw': '定目標、選合理的收益區間、反推月投金額——附 5 年、10 年、20 年目標的測算實例。',
      es: 'Fija un objetivo, elige un rango de rentabilidad realista y calcula tu aporte mensual, con cifras a 5, 10 y 20 años.',
      fr: 'Fixez un objectif, choisissez un rendement réaliste et calculez votre versement mensuel, avec des chiffres à 5, 10 et 20 ans.',
      de: 'Ziel setzen, realistische Rendite wählen, Monatsrate berechnen – mit Zahlen für 5, 10 und 20 Jahre.',
      ja: '目標を決め、現実的な利回りを選び、毎月の積立額を逆算。5年・10年・20年の試算付き。',
      ko: '목표를 정하고 현실적인 수익률을 선택해 월 적립액을 역산하세요. 5·10·20년 시뮬레이션 포함.',
    },
    content: {
      en: '## Introduction\nA Systematic Investment Plan turns willpower into automation: a fixed sum invested monthly that compounds. The core question — "how much per month?" — is answered with simple math plus honest assumptions.\n## The SIP formula\nFV = P × [((1 + r)^n − 1) / r] × (1 + r), with P monthly amount, r monthly rate (annual/12), n months. Our SIP Calculator runs this instantly and splits total invested vs estimated gains.\n## Worked examples at 10%\n$500/month for 5 years ≈ $38,700 (invested $30,000). For 10 years ≈ $102,400 (invested $60,000). For 20 years ≈ $379,700 (invested $120,000). Time, not timing, compounds.\n## The goal-backwards workflow\n1. Name goal and deadline (e.g. $50,000 in 5 years). 2. Run 8% and 6%, not just 10%. 3. Raise the monthly amount until the conservative case hits the goal. 4. Automate the transfer the day after payday.\n## SIP vs lump sum, honestly\nAt a constant rate, day-one lump sum always wins mathematically. In volatile markets, SIPs win behaviorally: no timing decisions, automatic buying through dips, sustainable budgeting. For salaried investors, behavior beats math.',
      zh: '## 引言\nSIP 定投把意志力变成自动化：每月固定金额投入并复利。核心问题“每月投多少？”用简单数学加诚实假设即可回答。\n## SIP 公式\nFV = P × [((1 + r)^n − 1) / r] × (1 + r)，P 为月投金额，r 为月利率（年利率/12），n 为月数。SIP 计算器瞬间完成计算，并拆分累计投入与预估收益。\n## 按 10% 测算\n每月 500 美元 5 年约 38,700 美元（投入 30,000）；10 年约 102,400 美元（投入 60,000）；20 年约 379,700 美元（投入 120,000）。起作用的是时间，不是择时。\n## 倒推工作流\n1. 明确目标和期限（如 5 年后 50,000 美元）。2. 同时跑 8% 和 6%，不要只看 10%。3. 上调月投直到保守情形达标。4. 发薪日第二天自动扣款。\n## 定投 vs 一次性投入\n恒定利率下第一天全仓永远数学占优；真实波动市场中定投行为占优：不用择时、下跌自动买入、预算可持续。对工薪族，行为胜过数学。',
      'zh-tw': '## 引言\nSIP 定投把意志力變成自動化：每月固定金額投入並複利。核心問題「每月投多少？」用簡單數學加誠實假設即可回答。\n## SIP 公式\nFV = P × [((1 + r)^n − 1) / r] × (1 + r)，P 為月投金額，r 為月利率（年利率/12），n 為月數。SIP 計算器瞬間完成計算，並拆分累計投入與預估收益。\n## 按 10% 測算\n每月 500 美元 5 年約 38,700 美元（投入 30,000）；10 年約 102,400 美元（投入 60,000）；20 年約 379,700 美元（投入 120,000）。起作用的是時間，不是擇時。\n## 倒推工作流\n1. 明確目標和期限（如 5 年後 50,000 美元）。2. 同時跑 8% 和 6%，不要只看 10%。3. 上調月投直到保守情形達標。4. 發薪日第二天自動扣款。\n## 定投 vs 一次性投入\n恆定利率下第一天全倉永遠數學佔優；真實波動市場中定投行為佔優：不用擇時、下跌自動買入、預算可持續。對工薪族，行為勝過數學。',
      es: '## Introducción\nUn plan de inversión sistemática convierte la fuerza de voluntad en automatización: una suma fija mensual que se capitaliza. La pregunta clave —¿cuánto al mes?— se responde con matemática simple y supuestos honestos.\n## La fórmula SIP\nFV = P × [((1 + r)^n − 1) / r] × (1 + r), con P aporte mensual, r tasa mensual (anual/12), n meses. Nuestra calculadora lo resuelve al instante y separa lo aportado de las ganancias.\n## Ejemplos al 10 %\n$500/mes 5 años ≈ $38.700 (aportado $30.000). 10 años ≈ $102.400 (aportado $60.000). 20 años ≈ $379.700 (aportado $120.000). El tiempo, no el timing, capitaliza.\n## Flujo desde el objetivo\n1. Define meta y plazo (ej. $50.000 en 5 años). 2. Calcula al 8 % y 6 %, no solo al 10 %. 3. Sube el aporte hasta que el caso conservador cumpla. 4. Automatiza el día después del salario.\n## SIP vs. capital único\nA tasa constante, todo el primer día siempre gana matemáticamente. En mercados volátiles, el SIP gana conductualmente: sin decisiones de timing, compras automáticas en caídas y presupuesto sostenible.',
      fr: '## Introduction\nUn plan d’investissement systématique transforme la volonté en automatisme : une somme fixe versée chaque mois qui se capitalise. La question clé — combien par mois ? — se résout avec des maths simples et des hypothèses honnêtes.\n## La formule SIP\nFV = P × [((1 + r)^n − 1) / r] × (1 + r), avec P versement mensuel, r taux mensuel (annuel/12), n mois. Notre calculateur résout cela instantanément et sépare apports et gains.\n## Exemples à 10 %\n500 $/mois 5 ans ≈ 38 700 $ (versé 30 000). 10 ans ≈ 102 400 $ (versé 60 000). 20 ans ≈ 379 700 $ (versé 120 000). C’est le temps, pas le timing, qui capitalise.\n## Méthode depuis l’objectif\n1. Nommez but et échéance (ex. 50 000 $ en 5 ans). 2. Testez 8 % et 6 %, pas seulement 10 %. 3. Augmentez le versement jusqu’à ce que le cas prudent atteigne l’objectif. 4. Automatisez au lendemain du salaire.\n## SIP vs capital unique\nÀ taux constant, tout le premier jour gagne toujours mathématiquement. Sur des marchés volatils, le SIP gagne comportementalement : pas de market timing, achats automatiques dans les creux, budget tenable.',
      de: '## Einführung\nEin systematischer Sparplan verwandelt Willenskraft in Automatik: ein fester Monatsbetrag, der sich verzinst. Die Kernfrage — wie viel pro Monat? — beantwortet einfache Mathematik plus ehrliche Annahmen.\n## Die SIP-Formel\nFV = P × [((1 + r)^n − 1) / r] × (1 + r), mit P Monatsrate, r Monatszins (Jahr/12), n Monate. Unser Rechner löst das sofort und trennt Einzahlungen von Gewinnen.\n## Beispiele bei 10 %\n500 $/Monat 5 Jahre ≈ 38.700 $ (eingezahlt 30.000). 10 Jahre ≈ 102.400 $ (eingezahlt 60.000). 20 Jahre ≈ 379.700 $ (eingezahlt 120.000). Die Zeit, nicht das Timing, verzinst.\n## Ablauf vom Ziel her\n1. Ziel und Frist benennen (z. B. 50.000 $ in 5 Jahren). 2. Mit 8 % und 6 % rechnen, nicht nur 10 %. 3. Monatsrate erhöhen, bis der vorsichtige Fall das Ziel trifft. 4. Am Tag nach dem Gehalt automatisieren.\n## SIP vs. Einmalbetrag\nBei konstantem Zins gewinnt Tag-eins-Vollinvestition mathematisch immer. In volatilen Märkten gewinnt SIP verhaltensseitig: kein Timing, automatische Käufe in Dips, tragfähiges Budget.',
      ja: '## はじめに\nSIP（積立投資）は意志の力を自動化に変えます。毎月定額を投じて複利で育てる仕組みです。「毎月いくら？」という問いは、シンプルな計算と誠実な前提で答えが出ます。\n## SIPの計算式\nFV = P × [((1 + r)^n − 1) / r] × (1 + r)。Pは月額、rは月利（年利/12）、nは月数です。当サイトのSIP計算機が即時に計算し、投入合計と利益を分けて表示します。\n## 年利10％での試算\n月500ドル×5年 ≈ 38,700ドル（投入30,000）。10年 ≈ 102,400ドル（投入60,000）。20年 ≈ 379,700ドル（投入120,000）。効くのはタイミングではなく時間です。\n## 目標からの逆算手順\n1. 目標と期限を決める（例：5年後に50,000ドル）。2. 10％だけでなく8％と6％でも試す。3. 保守ケースで達成するまで月額を上げる。4. 給料日の翌日に自動引落。\n## 積立 vs 一括、正直な比較\n一定利率の数学では初日一括が常に勝ちます。変動する現実市場では積立が行動面で勝ちます。タイミング不要・下落時も自動購入・無理のない予算——給与生活者には行動が数学に勝ります。',
      ko: '## 소개\nSIP(적립식 투자)는 의지력을 자동화로 바꿉니다. 매월 정액을 투자해 복리로 키우는 구조입니다. “매달 얼마?”라는 질문은 간단한 계산과 정직한 가정으로 답이 나옵니다.\n## SIP 공식\nFV = P × [((1 + r)^n − 1) / r] × (1 + r). P는 월 납입액, r은 월이율(연이율/12), n은 개월 수입니다. 이 사이트의 SIP 계산기가 즉시 계산하고 납입 합계와 수익을 나눠 보여줍니다.\n## 연 10% 시뮬레이션\n월 500달러×5년 ≈ 38,700달러(납입 30,000). 10년 ≈ 102,400달러(납입 60,000). 20년 ≈ 379,700달러(납입 120,000). 효과를 내는 것은 타이밍이 아니라 시간입니다.\n## 목표 역산 절차\n1. 목표와 기한 확정(예: 5년 후 50,000달러). 2. 10%뿐 아니라 8%·6%도 실행. 3. 보수 시나리오가 달성될 때까지 월액을 올림. 4. 급여일 다음날 자동이체.\n## 적립 vs 목돈, 솔직 비교\n일정 금리 수학에서는 첫날 목돈이 항상 승리합니다. 변동하는 실제 시장에서는 적립이 행동 면에서 승리합니다. 타이밍 불필요·하락장 자동 매수·무무리한 예산 — 월급 생활자에게는 행동이 수학을 이깁니다.',
    },
  },
  {
    slugBase: 'cagr-vs-absolute-return',
    category: 'Investing Basics',
    tags: ['CAGR', 'Returns', 'Comparison'],
    publishedDate: '2025-12-08T00:00:00.000Z',
    title: {
      en: 'CAGR vs Absolute Return: How to Compare Investments Held for Different Periods',
      zh: 'CAGR vs 绝对收益：如何公平比较持有期不同的投资？',
      'zh-tw': 'CAGR vs 絕對收益：如何公平比較持有期不同的投資？',
      es: 'CAGR vs. rentabilidad absoluta: cómo comparar inversiones',
      fr: 'CAGR vs rendement absolu : comment comparer les placements',
      de: 'CAGR vs. absolute Rendite: Investments fair vergleichen',
      ja: 'CAGRと絶対リターン：保有期間が違う投資の比べ方',
      ko: 'CAGR vs 절대수익률: 보유 기간이 다른 투자 비교법',
    },
    excerpt: {
      en: 'A 60% gain in 3 years vs 120% in 7 years — which is better? CAGR annualizes both so you can actually compare.',
      zh: '3 年赚 60% 和 7 年赚 120%，哪个更好？CAGR 把两者年化后才能真正比较。',
      'zh-tw': '3 年賺 60% 和 7 年賺 120%，哪個更好？CAGR 把兩者年化後才能真正比較。',
      es: '¿60 % en 3 años o 120 % en 7 años? El CAGR anualiza ambos para compararlos de verdad.',
      fr: '60 % en 3 ans ou 120 % en 7 ans ? Le CAGR annualise les deux pour une vraie comparaison.',
      de: '60 % in 3 Jahren oder 120 % in 7 Jahren? CAGR annualisiert beides für einen fairen Vergleich.',
      ja: '3年で60％と7年で120％、どちらが優秀？CAGRで年率化して初めて公平に比較できます。',
      ko: '3년 60%와 7년 120%, 어느 쪽이 더 좋을까? CAGR로 연율화해야 공정하게 비교할 수 있습니다.',
    },
    content: {
      en: '## Introduction\nAbsolute return ((End − Start)/Start) ignores time. A 100% gain over 2 years and over 10 years look identical — economically worlds apart. CAGR fixes this by annualizing growth.\n## The formula\nCAGR = (Ending / Beginning)^(1 / Years) − 1. Example: $10,000 → $16,000 in 3 years is 60% absolute but ≈ 17% CAGR. $10,000 → $22,000 in 7 years is 120% absolute but only ≈ 12% CAGR. The "smaller" absolute winner compounds faster per year.\n## When CAGR shines\nComparing funds with different inception dates, judging whether a multi-year stock run beat an index, or sanity-checking pitches ("tripled money!" — over how many years?). Our CAGR Calculator gives rate plus total growth in one step.\n## Three pitfalls\nFirst, CAGR smooths volatility — a +50%/−30% ride and a steady climb can share one CAGR but feel nothing alike. Second, it ignores interim cash flows; with deposits and withdrawals use XIRR. Third, past CAGR never guarantees future returns.\n## Key takeaway\nAbsolute return answers "how much did I make", CAGR answers "how fast did it compound per year". Any cross-period comparison must be annualized.',
      zh: '## 引言\n绝对收益（(期末 − 期初)/期初）忽略了时间。2 年翻倍和 10 年翻倍看起来一样，经济含义却天差地别。CAGR 通过年化解决了这个问题。\n## 公式\nCAGR = (期末 / 期初)^(1 / 年数) − 1。例如 10,000 美元 3 年变 16,000 美元，绝对收益 60%，CAGR ≈ 17%。10,000 美元 7 年变 22,000 美元，绝对收益 120%，CAGR 却只有约 12%。绝对值更小的反而是更快的年化复利者。\n## 适用场景\n比较成立时间不同的基金、判断多年牛股是否跑赢指数、拆穿销售话术（“翻了 3 倍！”——用了多少年？）。CAGR 计算器一步给出年化利率和总增长。\n## 三个陷阱\n第一，CAGR 磨平波动：+50%/−30% 的过山车和稳步爬升可能 CAGR 相同，体验完全不同。第二，它忽略中途现金流；有存取请用 XIRR。第三，过往 CAGR 永不保证未来。\n## 结论\n“赚了多少”看绝对收益，“每年复利多快”看 CAGR。任何跨持有期的比较都必须年化。',
      'zh-tw': '## 引言\n絕對收益（(期末 − 期初)/期初）忽略了時間。2 年翻倍和 10 年翻倍看起來一樣，經濟含義卻天差地別。CAGR 透過年化解決了這個問題。\n## 公式\nCAGR = (期末 / 期初)^(1 / 年數) − 1。例如 10,000 美元 3 年變 16,000 美元，絕對收益 60%，CAGR ≈ 17%。10,000 美元 7 年變 22,000 美元，絕對收益 120%，CAGR 卻只有約 12%。絕對值更小的反而是更快的年化複利者。\n## 適用場景\n比較成立時間不同的基金、判斷多年牛股是否跑贏指數、拆穿銷售話術（「翻了 3 倍！」——用了多少年？）。CAGR 計算器一步給出年化利率和總增長。\n## 三個陷阱\n第一，CAGR 磨平波動：+50%/−30% 的過山車和穩步爬升可能 CAGR 相同，體驗完全不同。第二，它忽略中途現金流；有存取請用 XIRR。第三，過往 CAGR 永不保證未來。\n## 結論\n「賺了多少」看絕對收益，「每年複利多快」看 CAGR。任何跨持有期的比較都必須年化。',
      es: '## Introducción\nLa rentabilidad absoluta ((Fin − Inicio)/Inicio) ignora el tiempo. Un 100 % en 2 años y en 10 años parecen iguales — económicamente son mundos distintos. El CAGR lo corrige anualizando el crecimiento.\n## La fórmula\nCAGR = (Final / Inicial)^(1 / Años) − 1. Ejemplo: $10.000 → $16.000 en 3 años es 60 % absoluto pero ≈ 17 % CAGR. $10.000 → $22.000 en 7 años es 120 % absoluto pero solo ≈ 12 % CAGR. El “menor” ganador absoluto capitaliza más rápido por año.\n## Cuándo brilla el CAGR\nComparar fondos con distintas fechas de inicio, juzgar si una acción multianual batió al índice o verificar promesas (“¡triplicamos!” — ¿en cuántos años?). Nuestra calculadora da tasa y crecimiento total en un paso.\n## Tres trampas\nPrimero, el CAGR suaviza la volatilidad: un +50 %/−30 % y una subida estable pueden compartir CAGR con sensaciones opuestas. Segundo, ignora flujos intermedios; con depósitos y retiros usa TIR.X. Tercero, el CAGR pasado nunca garantiza el futuro.\n## Conclusión\nLa rentabilidad absoluta responde “cuánto gané”, el CAGR “a qué ritmo anualizó”. Toda comparación entre períodos debe anualizarse.',
      fr: '## Introduction\nLe rendement absolu ((Fin − Début)/Début) ignore le temps. +100 % en 2 ans et en 10 ans semblent identiques — économiquement, des mondes opposés. Le CAGR corrige cela en annualisant la croissance.\n## La formule\nCAGR = (Fin / Début)^(1 / Années) − 1. Exemple : 10 000 $ → 16 000 $ en 3 ans = 60 % absolu mais ≈ 17 % CAGR. 10 000 $ → 22 000 $ en 7 ans = 120 % absolu mais ≈ 12 % CAGR seulement. Le « plus petit » gagnant absolu capitalise plus vite par an.\n## Quand le CAGR excelle\nComparer des fonds de dates différentes, juger si une action pluriannuelle a battu l’indice, ou vérifier les promesses (« triplé ! » — en combien d’années ?). Notre calculateur donne taux et croissance totale en une étape.\n## Trois pièges\nD’abord, le CAGR lisse la volatilité : +50 %/−30 % et une montée régulière peuvent partager un CAGR aux ressentis opposés. Ensuite, il ignore les flux intermédiaires ; avec dépôts et retraits, utilisez le TRI.X. Enfin, le CAGR passé ne garantit jamais l’avenir.\n## Conclusion\nLe rendement absolu répond « combien ai-je gagné », le CAGR « à quel rythme annuel ». Toute comparaison entre périodes doit être annualisée.',
      de: '## Einführung\nDie absolute Rendite ((Ende − Start)/Start) ignoriert die Zeit. +100 % in 2 Jahren und in 10 Jahren sehen gleich aus — ökonomisch Welten dazwischen. CAGR behebt das durch Annualisierung.\n## Die Formel\nCAGR = (Ende / Start)^(1 / Jahre) − 1. Beispiel: 10.000 $ → 16.000 $ in 3 Jahren = 60 % absolut, aber ≈ 17 % CAGR. 10.000 $ → 22.000 $ in 7 Jahren = 120 % absolut, aber nur ≈ 12 % CAGR. Der „kleinere“ absolute Gewinner verzinst pro Jahr schneller.\n## Wann CAGR glänzt\nFonds mit verschiedenen Startdaten vergleichen, prüfen ob eine Mehrjahresaktie den Index schlug, oder Versprechen checken („verdreifacht!“ — in wie vielen Jahren?). Unser Rechner liefert Rate plus Gesamtwachstum in einem Schritt.\n## Drei Fallen\nErstens glättet CAGR Volatilität: +50 %/−30 % Achterbahn und stetiger Anstieg können dieselbe CAGR bei völlig anderem Erleben haben. Zweitens ignoriert sie Zwischen-Cashflows; bei Ein-/Auszahlungen XINTZINSFUSS nutzen. Drittens garantiert vergangene CAGR nie die Zukunft.\n## Fazit\nAbsolute Rendite beantwortet „wie viel habe ich verdient“, CAGR „wie schnell verzinste es pro Jahr“. Jeder periodenübergreifende Vergleich muss annualisiert werden.',
      ja: '## はじめに\n絶対リターン（(期末 − 期初)/期初）は時間を無視します。2年で2倍と10年で2倍は同じに見えますが、経済的な意味は別世界です。CAGRは成長を年率化してこの問題を解決します。\n## 計算式\nCAGR = (期末 / 期初)^(1 / 年数) − 1。例：10,000ドル→16,000ドル（3年）は絶対60％ですがCAGR約17％。10,000ドル→22,000ドル（7年）は絶対120％ですがCAGRは約12％にすぎません。絶対値が小さい方が年率では速いのです。\n## 活躍する場面\n設定日の違うファンド比較、複数年の株高が指数に勝ったかの判定、営業トークの検証（「3倍にしました！」——何年で？）。当サイトのCAGR計算機が利率と総成長を一挙に算出します。\n## 3つの落とし穴\n第一にCAGRは変動を均す：+50％/−30％のジェットコースターと steady な上昇が同じCAGRでも体感は別物。第二に途中入出金を無視するので、入出金のある資産はXIRRを使う。第三に過去CAGRは未来を保証しない。\n## 結論\n「いくら儲けたか」は絶対リターン、「年率何％で複利したか」はCAGR。保有期間の異なる比較は必ず年率化しましょう。',
      ko: '## 소개\n절대수익률((기말 − 기초)/기초)은 시간을 무시합니다. 2년 만에 2배와 10년 만에 2배는 같아 보이지만 경제적 의미는 딴 세상입니다. CAGR은 성장을 연율화해 이 문제를 해결합니다.\n## 공식\nCAGR = (기말 / 기초)^(1 / 연수) − 1. 예: 10,000달러→16,000달러(3년)는 절대 60%지만 CAGR 약 17%. 10,000달러→22,000달러(7년)는 절대 120%지만 CAGR은 약 12%에 불과합니다. 절대값이 작은 쪽이 연간 복리는 더 빠릅니다.\n## 빛나는 장면\n설정일이 다른 펀드 비교, 수년간의 주가 상승이 지수를 이겼는지 판단, 영업 멘트 검증(“3배로 불렸습니다!” — 몇 년 만에?). 이 사이트의 CAGR 계산기가 이율과 총 성장을 한 번에 계산합니다.\n## 세 가지 함정\n첫째, CAGR은 변동성을 평탄화합니다. +50%/−30% 롤러코스터와 꾸준한 상승이 같은 CAGRでも 체감은 별개. 둘째, 중간 입출금을 무시하므로 입출금이 있는 자산은 XIRR을 사용. 셋째, 과거 CAGR은 미래를 보장하지 않습니다.\n## 결론\n“얼마 벌었나”는 절대수익률, “연 몇 %로 복리됐나”는 CAGR. 보유 기간이 다른 비교는 반드시 연율화하세요.',
    },
  },
  {
    slugBase: 'retirement-corpus-planning-guide',
    category: 'Retirement',
    tags: ['Retirement', 'Corpus', 'Planning'],
    publishedDate: '2025-12-22T00:00:00.000Z',
    title: {
      en: 'Retirement Corpus Planning: A Step-by-Step Guide with Our Calculator',
      zh: '退休金规划：跟着我们的计算器一步步算出你的目标金额',
      'zh-tw': '退休金規劃：跟著計算器一步步算出目標金額',
      es: 'Planifica tu jubilación paso a paso con nuestra calculadora',
      fr: 'Planifiez votre retraite étape par étape avec notre calculateur',
      de: 'Ruhestandsplanung Schritt für Schritt mit unserem Rechner',
      ja: '退職資金計画：計算機で目標金額を逆算する手順',
      ko: '은퇴 자금 계획: 계산기로 목표 금액을 역산하는 방법',
    },
    excerpt: {
      en: 'From current age to corpus gap to monthly action number — a complete workflow with conservative assumptions.',
      zh: '从当前年龄到资金缺口再到每月行动数字——一套完整的退休规划工作流，基于保守假设。',
      'zh-tw': '從當前年齡到資金缺口再到每月行動數字——一套完整的退休規劃工作流，基於保守假設。',
      es: 'Del objetivo al aporte mensual: un flujo completo de planificación con supuestos conservadores.',
      fr: 'De l’objectif au versement mensuel : une méthode complète avec hypothèses prudentes.',
      de: 'Vom Ziel zum Monatsbeitrag: kompletter Planungsablauf mit konservativen Annahmen.',
      ja: '目標金額から毎月の積立額まで、保守的な前提に基づく完全な計画手順。',
      ko: '목표 금액에서 월 적립액까지, 보수적 가정을 적용한 완전한 계획 절차.',
    },
    content: {
      en: '## Introduction\nRetirement planning fails when vague ("save more") and succeeds when numeric: target corpus, projected corpus, monthly gap. This guide turns our Retirement Calculator into that plan.\n## Step 1: honest inputs\nEnter age, retirement age, savings, monthly investment, expected return. Run moderate (7%) then conservative (5%). If the conservative corpus covers needs, the plan is robust; if only the optimistic one does, it is fragile.\n## Step 2: read three outputs\nCorpus is the projected total, invested is what you put in, wealth gained — the difference — is compounding\'s gift, usually exceeding contributions over 20+ years. Starting five years earlier beats saving 20% more later.\n## Step 3: close the gap\nShort on the conservative case? Three levers: contribute more monthly, retire 2–3 years later, or (carefully) accept more risk. Prefer the first two — they are guaranteed, returns are not.\n## Step 4: think in real terms\n$1M in 30 years at 3% inflation buys what ~$412,000 buys today. Target a larger nominal corpus or mentally discount outputs. Our calculator shows nominal values — interpret them in real terms.',
      zh: '## 引言\n退休规划败于模糊（“多存点”），成于具体：目标金额、预计金额、每月缺口。本指南把退休计算器变成这套方案。\n## 第一步：诚实输入\n输入年龄、退休年龄、已有储蓄、月投金额、预期收益。先跑中等收益（7%），再跑保守收益（5%）。保守情形能覆盖需求，计划才稳健；只有乐观情形才够，就是脆弱的。\n## 第二步：读懂三个输出\n退休金总额是预计总数，累计投入是放进去的钱，两者之差“复利赠送”在 20 年以上通常超过投入本身。早开始 5 年胜过晚存多 20%。\n## 第三步：弥合缺口\n保守情形不够？三个杠杆：每月多投、推迟 2–3 年退休，或（谨慎地）承担更高风险。优先前两个——它们是确定的，收益不是。\n## 第四步：按实际购买力思考\n30 年后的 100 万美元按 3% 通胀只相当于今天约 41.2 万。要么定更高名义目标，要么在心里打折。计算器显示名义值，请用实际购买力去理解。',
      'zh-tw': '## 引言\n退休規劃敗於模糊（「多存點」），成於具體：目標金額、預計金額、每月缺口。本指南把退休計算器變成這套方案。\n## 第一步：誠實輸入\n輸入年齡、退休年齡、已有儲蓄、月投金額、預期收益。先跑中等收益（7%），再跑保守收益（5%）。保守情形能覆蓋需求，計劃才穩健；只有樂觀情形才夠，就是脆弱的。\n## 第二步：讀懂三個輸出\n退休金總額是預計總數，累計投入是放進去的錢，兩者之差「複利贈送」在 20 年以上通常超過投入本身。早開始 5 年勝過晚存多 20%。\n## 第三步：彌合缺口\n保守情形不夠？三個槓桿：每月多投、推遲 2–3 年退休，或（謹慎地）承擔更高風險。優先前兩個——它們是確定的，收益不是。\n## 第四步：按實際購買力思考\n30 年後的 100 萬美元按 3% 通膨只相當於今天約 41.2 萬。要麼定更高名義目標，要麼在心裡打折。計算器顯示名義值，請用實際購買力去理解。',
      es: '## Introducción\nLa planificación de la jubilación fracasa si es vaga (“ahorra más”) y triunfa si es numérica: capital objetivo, capital proyectado, brecha mensual. Esta guía convierte nuestra calculadora en ese plan.\n## Paso 1: datos honestos\nEdad, edad de jubilación, ahorros, aporte mensual, rentabilidad esperada. Calcula al 7 % moderado y luego al 5 % conservador. Si el caso conservador cubre tus necesidades, el plan es sólido; si solo el optimista lo hace, es frágil.\n## Paso 2: lee tres resultados\nEl capital es el total proyectado, lo invertido es lo que aportas, la riqueza ganada —la diferencia— es el regalo de la capitalización, que suele superar las aportaciones en 20+ años. Empezar cinco años antes supera ahorrar 20 % más después.\n## Paso 3: cierra la brecha\n¿Corto en el caso conservador? Tres palancas: aportar más al mes, jubilarte 2–3 años después o (con cuidado) asumir más riesgo. Prefiere las dos primeras —son seguras, los rendimientos no.\n## Paso 4: piensa en términos reales\n$1M en 30 años con 3 % de inflación compra lo que ~$412.000 hoy. Apunta a un capital nominal mayor o descuenta mentalmente. Nuestra calculadora muestra valores nominales —interprétalos en términos reales.',
      fr: '## Introduction\nLa planification retraite échoue quand elle est vague (« épargnez plus ») et réussit quand elle est chiffrée : capital cible, capital projeté, écart mensuel. Ce guide transforme notre calculateur en ce plan.\n## Étape 1 : des données honnêtes\nÂge, âge de départ, épargne, versement mensuel, rendement attendu. Calculez à 7 % modéré puis à 5 % prudent. Si le cas prudent couvre vos besoins, le plan est robuste ; si seul l’optimiste y parvient, il est fragile.\n## Étape 2 : lisez trois résultats\nLe capital est le total projeté, l’investi ce que vous apportez, la richesse gagnée — la différence — est le cadeau de la capitalisation, qui dépasse généralement les apports sur 20+ ans. Commencer cinq ans plus tôt bat 20 % d’épargne en plus plus tard.\n## Étape 3 : comblez l’écart\nCourt dans le cas prudent ? Trois leviers : verser plus par mois, partir 2–3 ans plus tard ou (prudemment) accepter plus de risque. Préférez les deux premiers — ils sont garantis, les rendements non.\n## Étape 4 : pensez en termes réels\n1 M$ dans 30 ans à 3 % d’inflation achète ce que ~412 000 $ achètent aujourd’hui. Visez un capital nominal plus élevé ou décotez mentalement. Notre calculateur affiche des valeurs nominales — interprétez-les en termes réels.',
      de: '## Einführung\nRuhestandsplanung scheitert vage („mehr sparen“) und gelingt numerisch: Zielkapital, projiziertes Kapital, Monatslücke. Diese Anleitung macht unseren Rechner zu diesem Plan.\n## Schritt 1: ehrliche Eingaben\nAlter, Rentenalter, Ersparnisse, Monatsrate, erwartete Rendite. Erst moderat (7 %), dann konservativ (5 %) rechnen. Deckt der konservative Fall den Bedarf, ist der Plan robust; nur der optimistische, ist er fragil.\n## Schritt 2: drei Ergebnisse lesen\nDas Kapital ist das projizierte Total, investiert das Eingezahlte, der Vermögenszuwachs — die Differenz — ist das Geschenk des Zinseszinses, meist größer als die Beiträge über 20+ Jahre. Fünf Jahre früher starten schlägt 20 % mehr Sparen später.\n## Schritt 3: Lücke schließen\nKonservativ zu kurz? Drei Hebel: mehr Monatsrate, 2–3 Jahre später in Rente oder (vorsichtig) mehr Risiko. Bevorzuge die ersten beiden — sie sind sicher, Renditen nicht.\n## Schritt 4: real denken\n1 Mio. $ in 30 Jahren bei 3 % Inflation kauft, was ~412.000 $ heute kaufen. Ziele auf höheres Nominalkapital oder discontiere mental. Unser Rechner zeigt Nominalwerte — interpretiere sie real.',
      ja: '## はじめに\n退職計画は曖昧だと失敗し（「もっと貯めよう」）、数値化すると成功します。目標金額・予測金額・毎月の差額です。本ガイドで退職計算機をその計画に変えましょう。\n## ステップ1：正直な入力\n年齢・退職年齢・貯蓄・月額・期待利回りを入力。まず中庸（7％）、次に保守（5％）で試します。保守ケースで足りれば堅牢、楽観ケースでのみ足りるなら脆弱です。\n## ステップ2：3つの出力を読む\n退職資産は予測合計、投入合計は出したお金、その差「複利の贈り物」は20年超では投入を上回るのが普通です。5年早く始めることは、後から20％多く貯めることに勝ります。\n## ステップ3：差を埋める\n保守ケースで不足？3つのレバー：月額を増やす、2～3年退職を延ばす、（慎重に）リスクを上げる。前2者を優先——それらは確実で、利回りは確実ではありません。\n## ステップ4：実質で考える\n3％の物価上昇で30年後の100万ドルは、現在の約41.2万ドル分の購買力です。名目目標を上げるか、心の中で割り引いてください。計算機は名目値を表示します——実質で解釈しましょう。',
      ko: '## 소개\n은퇴 계획은 모호하면 실패하고(“더 저축하자”), 수치화하면 성공합니다. 목표 금액·예상 금액·매월 격차입니다. 본 가이드로 은퇴 계산기를 그 계획으로 바꾸세요.\n## 1단계: 정직한 입력\n나이·은퇴 나이·저축·월액·기대수익률을 입력. 먼저 중립(7%), 다음 보수(5%)로 실행합니다. 보수 케이스로 충분하면 견고하고, 낙관 케이스로만 충분하면 취약합니다.\n## 2단계: 세 가지 출력 읽기\n은퇴 자산은 예상 합계, 납입 합계는 낸 돈, 그 차액 “복리의 선물”은 20년 이상에서는 납입을 웃도는 것이 보통입니다. 5년 일찍 시작하는 것은 나중에 20% 더 저축하는 것을 이깁니다.\n## 3단계: 격차 메우기\n보수 케이스에서 부족? 세 가지 레버: 월액을 늘린다, 2~3년 은퇴를 늦춘다, (신중히) 리스크를 높인다. 앞의 둘을 우선 — 그것들은 확실하고 수익률은 확실하지 않습니다.\n## 4단계: 실질로 생각하기\n물가 3%에서 30년 후 100만 달러는 현재 약 41.2만 달러어치 구매력입니다. 명목 목표를 올리거나 마음속으로 할인하세요. 계산기는 명목값을 표시합니다 — 실질로 해석하세요.',
    },
  },
  {
    slugBase: 'rule-of-72-double-your-money',
    category: 'Wealth Building',
    tags: ['Rule of 72', 'Mental Math', 'Compounding'],
    publishedDate: '2026-01-05T00:00:00.000Z',
    title: {
      en: 'The Rule of 72: Estimate Doubling Time in Seconds (and When It Breaks)',
      zh: '72 法则：几秒钟估算资金翻倍时间（以及它何时失效）',
      'zh-tw': '72 法則：幾秒鐘估算資金翻倍時間',
      es: 'La regla del 72: estima en segundos cuándo se duplica tu dinero',
      fr: 'La règle des 72 : estimez le doublement en quelques secondes',
      de: 'Die 72er-Regel: Verdopplungszeit in Sekunden schätzen',
      ja: '72の法則：資金が倍になる期間を秒で見積もる',
      ko: '72 법칙: 돈이 두 배가 되는 기간을 몇 초 만에 추정하기',
    },
    excerpt: {
      en: 'Years to double ≈ 72 ÷ rate. Why it works, a table from 2% to 12%, and the limits every investor should know.',
      zh: '翻倍年数 ≈ 72 ÷ 利率。为什么有效、2% 到 12% 速查表，以及每个投资者都该知道的局限。',
      'zh-tw': '翻倍年數 ≈ 72 ÷ 利率。為什麼有效、2% 到 12% 速查表，以及每個投資者都該知道的局限。',
      es: 'Años para duplicar ≈ 72 ÷ tasa. Por qué funciona, tabla del 2 % al 12 % y sus límites.',
      fr: 'Années pour doubler ≈ 72 ÷ taux. Pourquoi ça marche, table de 2 % à 12 % et limites.',
      de: 'Jahre bis zur Verdopplung ≈ 72 ÷ Zinssatz. Warum es funktioniert, Tabelle von 2 % bis 12 % und Grenzen.',
      ja: '倍になる年数 ≈ 72 ÷ 利回り。仕組み、2％～12％早見表、注意点を解説。',
      ko: '두 배가 되는 햇수 ≈ 72 ÷ 수익률. 원리, 2%~12% 조견표와 한계를 설명합니다.',
    },
    content: {
      en: '## Introduction\nDivide 72 by your annual return and you get roughly the years to double money. At 8%, about 9 years; at 6%, about 12. The fastest sanity check in finance — no calculator needed.\n## Why 72?\nIt comes from continuous-compounding math (ln 2 ≈ 0.693) rounded up, because 72 divides cleanly by 2, 3, 4, 6, 8, 9 and 12. Between 4% and 12% the error is tiny — usually under a year.\n## Quick table\n2% → ~36 years. 4% → ~18 years. 6% → ~12 years. 8% → ~9 years. 10% → ~7.2 years. 12% → ~6 years. Every extra point of sustained return compresses decades.\n## When it breaks\nThe rule assumes a constant reinvested rate — ignoring volatility, contributions, withdrawals, fees, taxes and inflation. For exact projections with monthly contributions use our Compound Interest Calculator; use the Rule of 72 for hallway chats and gut checks.\n## Key takeaway\nMemorize one division, gain lifelong intuition for compounding speed — then verify serious plans with the real calculator.',
      zh: '## 引言\n用 72 除以年化收益率，就得到资金大约几年翻倍。8% 约 9 年，6% 约 12 年。这是金融中最快的估算——不用计算器。\n## 为什么是 72？\n它源于连续复利数学（ln2 ≈ 0.693）向上取整，因为 72 能被 2、3、4、6、8、9、12 整除。在 4%–12% 区间误差极小，通常不到一年。\n## 速查表\n2% → 约 36 年；4% → 约 18 年；6% → 约 12 年；8% → 约 9 年；10% → 约 7.2 年；12% → 约 6 年。持续收益每多一个点，几十年就被压缩。\n## 何时失效\n法则假设恒定利率且收益再投——忽略波动、定投、取款、费用、税和通胀。带月投的精确测算请用复利计算器；72 法则留给闲聊和直觉判断。\n## 结论\n记住一道除法，获得一生的复利直觉；认真的规划再用计算器验证。',
      'zh-tw': '## 引言\n用 72 除以年化收益率，就得到資金大約幾年翻倍。8% 約 9 年，6% 約 12 年。這是金融中最快的估算——不用計算器。\n## 為什麼是 72？\n它源於連續複利數學（ln2 ≈ 0.693）向上取整，因為 72 能被 2、3、4、6、8、9、12 整除。在 4%–12% 區間誤差極小，通常不到一年。\n## 速查表\n2% → 約 36 年；4% → 約 18 年；6% → 約 12 年；8% → 約 9 年；10% → 約 7.2 年；12% → 約 6 年。持續收益每多一個點，幾十年就被壓縮。\n## 何時失效\n法則假設恆定利率且收益再投——忽略波動、定投、取款、費用、稅和通膨。帶月投的精確測算請用複利計算器；72 法則留給閒聊和直覺判斷。\n## 結論\n記住一道除法，獲得一生的複利直覺；認真的規劃再用計算器驗證。',
      es: '## Introducción\nDivide 72 entre tu rentabilidad anual y obtienes aproximadamente los años para duplicar. Al 8 %, unos 9 años; al 6 %, unos 12. La comprobación más rápida de las finanzas — sin calculadora.\n## ¿Por qué 72?\nViene de la matemática continua (ln 2 ≈ 0,693) redondeada hacia arriba, porque 72 se divide limpiamente entre 2, 3, 4, 6, 8, 9 y 12. Entre el 4 % y el 12 % el error es mínimo — normalmente menos de un año.\n## Tabla rápida\n2 % → ~36 años. 4 % → ~18 años. 6 % → ~12 años. 8 % → ~9 años. 10 % → ~7,2 años. 12 % → ~6 años. Cada punto extra de rentabilidad sostenida comprime décadas.\n## Cuándo falla\nLa regla supone una tasa constante reinvertida — ignorando volatilidad, aportaciones, retiros, comisiones, impuestos e inflación. Para proyecciones exactas con aportaciones usa nuestra calculadora; usa la regla del 72 para charlas rápidas e intuición.\n## Conclusión\nMemoriza una división y gana intuición de por vida sobre la velocidad de capitalización — y verifica los planes serios con la calculadora real.',
      fr: '## Introduction\nDivisez 72 par votre rendement annuel et vous obtenez à peu près les années pour doubler. À 8 %, environ 9 ans ; à 6 %, environ 12. Le contrôle le plus rapide de la finance — sans calculatrice.\n## Pourquoi 72 ?\nCela vient des maths continues (ln 2 ≈ 0,693) arrondies vers le haut, car 72 se divise proprement par 2, 3, 4, 6, 8, 9 et 12. Entre 4 % et 12 %, l’erreur est minime — généralement moins d’un an.\n## Table rapide\n2 % → ~36 ans. 4 % → ~18 ans. 6 % → ~12 ans. 8 % → ~9 ans. 10 % → ~7,2 ans. 12 % → ~6 ans. Chaque point de rendement durable en plus comprime des décennies.\n## Quand ça casse\nLa règle suppose un taux constant réinvesti — ignorant volatilité, versements, retraits, frais, impôts et inflation. Pour des projections exactes avec versements, utilisez notre calculateur ; gardez la règle des 72 pour les discussions rapides et l’intuition.\n## Conclusion\nMémorisez une division, gagnez une intuition à vie de la vitesse de capitalisation — puis vérifiez les plans sérieux avec le vrai calculateur.',
      de: '## Einführung\nTeile 72 durch deine Jahresrendite und du erhältst grob die Jahre bis zur Verdopplung. Bei 8 % etwa 9 Jahre; bei 6 % etwa 12. Der schnellste Plausibilitätscheck der Finanzen — ohne Rechner.\n## Warum 72?\nEs stammt aus der stetigen Verzinsung (ln 2 ≈ 0,693), aufgerundet, weil 72 sich sauber durch 2, 3, 4, 6, 8, 9 und 12 teilen lässt. Zwischen 4 % und 12 % ist der Fehler winzig — meist unter einem Jahr.\n## Kurztabelle\n2 % → ~36 Jahre. 4 % → ~18 Jahre. 6 % → ~12 Jahre. 8 % → ~9 Jahre. 10 % → ~7,2 Jahre. 12 % → ~6 Jahre. Jeder Extrapunkt nachhaltiger Rendite komprimiert Jahrzehnte.\n## Wann sie bricht\nDie Regel nimmt konstanten reinvestierten Zins an — Volatilität, Beiträge, Entnahmen, Gebühren, Steuern und Inflation ignorierend. Für exakte Projektionen mit Monatsraten nutze unseren Rechner; die 72er-Regel für schnelle Gespräche und Bauchgefühl.\n## Fazit\nEine Division merken, lebenslange Intuition für Wachstumstempo gewinnen — ernsthafte Pläne dann mit dem echten Rechner prüfen.',
      ja: '## はじめに\n72を年利回りで割ると、資金が約何年で倍になるかが分かります。8％なら約9年、6％なら約12年。電卓いらずの最速チェックです。\n## なぜ72？\n連続複利の数学（ln2 ≈ 0.693）を切り上げたもので、72が2・3・4・6・8・9・12で割り切れるからです。4％～12％の範囲では誤差はごく小さく、通常1年未満です。\n## 早見表\n2％ → 約36年。4％ → 約18年。6％ → 約12年。8％ → 約9年。10％ → 約7.2年。12％ → 約6年。持続利回りが1ポイント上がるごとに何十年も短縮されます。\n## 使えない場面\n一定利率での再投資を前提とし、変動・積立・引出・手数料・税金・インフレを無視します。月積立の正確な予測は複利計算機で。72の法則は雑談と直感チェック用です。\n## 結論\n割り算ひとつ覚えて複利スピードの直感を一生ものに。本格的な計画は計算機で検証しましょう。',
      ko: '## 소개\n72를 연수익률로 나누면 돈이 약 몇 년 만에 두 배가 되는지 나옵니다. 8%면 약 9년, 6%면 약 12년. 계산기 없이 하는 가장 빠른 점검입니다.\n## 왜 72인가?\n연속 복리 수학(ln2 ≈ 0.693)을 올림한 것으로, 72가 2·3·4·6·8·9·12로 깔끔히 나눠떨어지기 때문입니다. 4%~12% 구간에서 오차는 아주 작아 보통 1년 미만입니다.\n## 조견표\n2% → 약 36년. 4% → 약 18년. 6% → 약 12년. 8% → 약 9년. 10% → 약 7.2년. 12% → 약 6년. 지속 수익률이 1%p 오를 때마다 수십 년이 압축됩니다.\n## 무너지는 경우\n일정 금리의 재투자를 전제하며 변동·적립·인출·수수료·세금·인플레이션을 무시합니다. 월 적립의 정확한 예측은 복리 계산기로. 72 법칙은 가벼운 대화와 직관 점검용입니다.\n## 결론\n나눗셈 하나를 외워 복리 속도에 대한 평생 직관을 얻고, 본격 계획은 계산기로 검증하세요.',
    },
  },
  {
    slugBase: 'inflation-adjust-real-returns',
    category: 'Investing Basics',
    tags: ['Inflation', 'Real Returns', 'Planning'],
    publishedDate: '2026-01-12T00:00:00.000Z',
    title: {
      en: 'Nominal vs Real Returns: Why Inflation Changes Every Projection',
      zh: '名义收益 vs 实际收益：为什么通胀会改变每一份测算？',
      'zh-tw': '名義收益 vs 實際收益：為什麼通膨會改變每一份測算？',
      es: 'Rentabilidad nominal vs. real: por qué la inflación lo cambia todo',
      fr: 'Rendement nominal vs réel : pourquoi l’inflation change tout',
      de: 'Nominale vs. reale Rendite: Warum Inflation alles verändert',
      ja: '名目リターンと実質リターン：インフレが予測を変える理由',
      ko: '명목 수익률 vs 실질 수익률: 인플레이션이 모든 예측을 바꾸는 이유',
    },
    excerpt: {
      en: 'An 8% return at 3% inflation is really ~5%. How to convert, why calculators show nominal values, and how to plan in purchasing power.',
      zh: '8% 收益在 3% 通胀下实际只有约 5%。如何换算、为什么计算器显示名义值、如何按购买力规划。',
      'zh-tw': '8% 收益在 3% 通膨下實際只有約 5%。如何換算、為什麼計算器顯示名目值、如何按購買力規劃。',
      es: 'Un 8 % con 3 % de inflación es ~5 % real. Cómo convertirlo y planificar en poder adquisitivo.',
      fr: '8 % avec 3 % d’inflation ≈ 5 % réels. Comment convertir et planifier en pouvoir d’achat.',
      de: '8 % bei 3 % Inflation sind real ~5 %. Umrechnung und Planung in Kaufkraft.',
      ja: '名目8％・物価3％なら実質約5％。換算方法と購買力ベースの計画を解説。',
      ko: '명목 8%·물가 3%면 실질 약 5%. 환산 방법과 구매력 기준 계획을 설명합니다.',
    },
    content: {
      en: '## Introduction\nEvery calculator here — like nearly all tools — projects nominal values: future currency units. But groceries and rent are bought with purchasing power, not units. The bridge is inflation.\n## The quick conversion\nReal return ≈ (1 + nominal) / (1 + inflation) − 1. At 8% nominal and 3% inflation: 1.08/1.03 − 1 ≈ 4.85%. Simple subtraction (8 − 3 = 5) is close enough for planning. A "7% portfolio" in a 3% world compounds purchasing power at roughly 4%.\n## Worked impact\n$500/month for 30 years at 8% nominal ≈ $745,000. In today\'s purchasing power at 3% inflation ≈ $306,000. Still life-changing — but a very different retirement picture. Always project, then discount mentally or target a bigger nominal corpus.\n## Practical workflow\n1. Project with nominal returns. 2. Subtract 2–3% inflation to judge real growth. 3. For retirement, raise the target or extend contributions until the discounted value suffices. 4. Prefer assets with long-run returns comfortably above inflation for distant goals.\n## Key takeaway\nNominal values impress; real values pay bills. Plan in purchasing power and never be surprised at the finish line.',
      zh: '## 引言\n本站所有计算器——和几乎所有工具一样——测算的都是名义值：未来货币的数量。但买菜租房靠的是购买力，不是数字。连接两者的是通胀。\n## 快速换算\n实际收益 ≈ (1 + 名义)/(1 + 通胀) − 1。名义 8%、通胀 3% 时：1.08/1.03 − 1 ≈ 4.85%。简单相减（8 − 3 = 5）做规划也够用。在 3% 通胀世界里，“7% 的组合”购买力实际只按约 4% 复利。\n## 实例冲击\n每月 500 美元、名义 8%、30 年约 745,000 美元。按 3% 通胀折成今天购买力约 306,000 美元——依然可观，但退休画面完全不同。永远先测算，再打折或定更高名义目标。\n## 实用工作流\n1. 用名义收益测算。2. 减去 2–3% 通胀看实际增长。3. 退休规划要么调高目标，要么延长投入，直到折现后够用。4. 远期目标优先选长期收益明显跑赢通胀的资产。\n## 结论\n名义值好看，实际值才能花。按购买力规划，终点线前永远不会意外。',
      'zh-tw': '## 引言\n本站所有計算器——和幾乎所有工具一樣——測算的都是名義值：未來貨幣的數量。但買菜租房靠的是購買力，不是數字。連接兩者的是通膨。\n## 快速換算\n實際收益 ≈ (1 + 名義)/(1 + 通膨) − 1。名義 8%、通膨 3% 時：1.08/1.03 − 1 ≈ 4.85%。簡單相減（8 − 3 = 5）做規劃也夠用。在 3% 通膨世界裡，「7% 的組合」購買力實際只按約 4% 複利。\n## 實例衝擊\n每月 500 美元、名義 8%、30 年約 745,000 美元。按 3% 通膨折成今天購買力約 306,000 美元——依然可觀，但退休畫面完全不同。永遠先測算，再打折或定更高名義目標。\n## 實用工作流\n1. 用名義收益測算。2. 減去 2–3% 通膨看實際增長。3. 退休規劃要麼調高目標，要麼延長投入，直到折現後夠用。4. 遠期目標優先選長期收益明顯跑贏通膨的資產。\n## 結論\n名義值好看，實際值才能花。按購買力規劃，終點線前永遠不會意外。',
      es: '## Introducción\nCada calculadora aquí —como casi todas— proyecta valores nominales: unidades monetarias futuras. Pero la compra y el alquiler se pagan con poder adquisitivo, no con unidades. El puente es la inflación.\n## Conversión rápida\nRentabilidad real ≈ (1 + nominal) / (1 + inflación) − 1. Con 8 % nominal y 3 % de inflación: 1,08/1,03 − 1 ≈ 4,85 %. La resta simple (8 − 3 = 5) basta para planificar. Una “cartera al 7 %” en un mundo al 3 % capitaliza poder adquisitivo a ~4 %.\n## Impacto numérico\n$500/mes 30 años al 8 % nominal ≈ $745.000. En poder adquisitivo de hoy al 3 % ≈ $306.000. Sigue siendo transformador — pero un panorama de jubilación muy distinto. Proyecta siempre y luego descuenta o apunta a un capital nominal mayor.\n## Flujo práctico\n1. Proyecta con rentabilidades nominales. 2. Resta 2–3 % de inflación para juzgar el crecimiento real. 3. En jubilación, sube el objetivo o extiende aportaciones hasta que el valor descontado baste. 4. Para metas lejanas prefiere activos con rentabilidad histórica holgadamente superior a la inflación.\n## Conclusión\nLos valores nominales impresionan; los reales pagan facturas. Planifica en poder adquisitivo y jamás te sorprenderás en la meta.',
      fr: '## Introduction\nChaque calculateur ici — comme presque tous — projette des valeurs nominales : des unités monétaires futures. Mais les courses et le loyer se paient en pouvoir d’achat, pas en unités. Le pont, c’est l’inflation.\n## Conversion rapide\nRendement réel ≈ (1 + nominal) / (1 + inflation) − 1. À 8 % nominal et 3 % d’inflation : 1,08/1,03 − 1 ≈ 4,85 %. La simple soustraction (8 − 3 = 5) suffit pour planifier. Un « portefeuille à 7 % » dans un monde à 3 % capitalise le pouvoir d’achat à ~4 %.\n## Impact chiffré\n500 $/mois 30 ans à 8 % nominal ≈ 745 000 $. En pouvoir d’achat d’aujourd’hui à 3 % ≈ 306 000 $. Toujours transformateur — mais un tableau de retraite très différent. Projetez toujours, puis décotez ou visez un capital nominal plus élevé.\n## Méthode pratique\n1. Projetez en nominal. 2. Retirez 2–3 % d’inflation pour juger la croissance réelle. 3. Pour la retraite, relevez l’objectif ou prolongez les versements jusqu’à ce que la valeur décotée suffise. 4. Pour les objectifs lointains, préférez des actifs dont le rendement historique dépasse nettement l’inflation.\n## Conclusion\nLes valeurs nominales impressionnent ; les réelles paient les factures. Planifiez en pouvoir d’achat et jamais de surprise à l’arrivée.',
      de: '## Einführung\nJeder Rechner hier — wie fast alle — projiziert Nominalwerte: künftige Geldeinheiten. Doch Lebensmittel und Miete werden mit Kaufkraft bezahlt, nicht mit Einheiten. Die Brücke ist die Inflation.\n## Schnellumrechnung\nRealrendite ≈ (1 + nominal) / (1 + Inflation) − 1. Bei 8 % nominal und 3 % Inflation: 1,08/1,03 − 1 ≈ 4,85 %. Einfaches Subtrahieren (8 − 3 = 5) reicht fürs Planen. Ein „7 %-Portfolio“ in einer 3 %-Welt verzinst Kaufkraft mit rund 4 %.\n## Zahlenbeispiel\n500 $/Monat 30 Jahre zu 8 % nominal ≈ 745.000 $. In heutiger Kaufkraft bei 3 % ≈ 306.000 $. Immer noch lebensverändernd — aber ein ganz anderes Rentenbild. Immer projizieren, dann mental abziehen oder höheres Nominalziel setzen.\n## Praxisablauf\n1. Nominal projizieren. 2. 2–3 % Inflation abziehen für reales Wachstum. 3. Für die Rente Ziel erhöhen oder Beiträge verlängern, bis der abgezinste Wert reicht. 4. Für ferne Ziele Assets mit langfristig klar über Inflation liegender Rendite bevorzugen.\n## Fazit\nNominalwerte beeindrucken; Realwerte zahlen Rechnungen. Plane in Kaufkraft und erlebe nie eine Überraschung am Ziel.',
      ja: '## はじめに\nここの計算機——ほぼ全てのツールと同様——は名目値、つまり将来の通貨単位を予測します。しかし食料も家賃も、単位ではなく購買力で買います。その橋渡しがインフレです。\n## 簡易換算\n実質利回り ≈ (1 + 名目)/(1 + 物価) − 1。名目8％・物価3％なら 1.08/1.03 − 1 ≈ 4.85％。単純な引き算（8 − 3 = 5）でも計画には十分です。物価3％の世界で「利回り7％の資産」は購買力を約4％で複利します。\n## 数値インパクト\n月500ドル・名目8％・30年 ≈ 745,000ドル。物価3％で現在の購買力に直すと約306,000ドル。依然人生を変える額ですが、退職像は全く違います。まず予測し、割引くか名目目標を上げましょう。\n## 実務手順\n1. 名目で予測。2. 2～3％の物価を差し引いて実質成長を判断。3. 退職は割引後の価値で足りるまで目標上げか積立延長。4. 遠い目標には長期利回りが物価を十分上回る資産を優先。\n## 結論\n名目値は見栄えが良く、実質値が請求書を払います。購買力で計画すればゴール前で驚きません。',
      ko: '## 소개\n여기 계산기 — 거의 모든 도구와 마찬가지로 — 명목값, 즉 미래의 통화 단위를 예측합니다. 하지만 장보기와 월세는 단위가 아니라 구매력으로 냅니다. 그 다리가 인플레이션입니다.\n## 빠른 환산\n실질수익률 ≈ (1 + 명목)/(1 + 물가) − 1. 명목 8%·물가 3%이면 1.08/1.03 − 1 ≈ 4.85%. 단순 뺄셈(8 − 3 = 5)으로도 계획에는 충분합니다. 물가 3% 세상에서 “수익률 7% 자산”은 구매력을 약 4%로 복리합니다.\n## 수치 임팩트\n월 500달러·명목 8%·30년 ≈ 745,000달러. 물가 3%로 현재 구매력으로 환산하면 약 306,000달러. 여전히 인생을 바꾸는 금액이지만 은퇴 그림은 완전히 다릅니다. 먼저 예측하고 할인하거나 명목 목표를 올리세요.\n## 실무 절차\n1. 명목으로 예측. 2. 2~3% 물가를 빼고 실질 성장을 판단. 3. 은퇴는 할인 후 가치로 충분할 때까지 목표 상향 또는 적립 연장. 4. 먼 목표에는 장기 수익률이 물가를 충분히 웃도는 자산을 우선.\n## 결론\n명목값은 보기 좋고 실질값이 청구서를 냅니다. 구매력으로 계획하면 결승선 앞에서 놀라지 않습니다.',
    },
  },
];

const LOCALES = ['en', 'zh', 'zh-tw', 'es', 'fr', 'de', 'ja', 'ko'];

const SLUG_PREFIX = { en: '', zh: 'zh-', 'zh-tw': 'zhtw-', es: 'es-', fr: 'fr-', de: 'de-', ja: 'ja-', ko: 'ko-' };

const withDefaults = (a, i) => {
  const slug = {};
  for (const loc of LOCALES) slug[loc] = (SLUG_PREFIX[loc] || '') + a.slugBase;
  return {
    id: i + 1,
    slug,
    title: a.title,
    excerpt: a.excerpt,
    content: a.content,
    category: a.category,
    publishedDate: new Date(a.publishedDate).toISOString(),
    lastUpdatedDate: new Date('2026-01-15T00:00:00.000Z').toISOString(),
    featuredImage: `https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&q=80&w=800&h=400&sig=${i}`,
    author: {
      name: 'Alex Sterling',
      bio: 'Senior Financial Analyst',
      avatar: 'https://i.pravatar.cc/150?u=alex',
    },
    tags: a.tags,
    relatedArticles: [],
  };
};

export const blogData = ARTICLES.map(withDefaults);

export const getArticleBySlug = (slug, lang = 'en') => {
  return blogData.find((a) => a.slug[lang] === slug || a.slug.en === slug);
};

export const getRelatedArticles = (articleId, lang = 'en') => {
  const current = blogData.find((a) => a.id === articleId);
  if (!current) return blogData.slice(0, 3);
  const sameCategory = blogData.filter((a) => a.id !== articleId && a.category === current.category);
  const rest = blogData.filter((a) => a.id !== articleId && a.category !== current.category);
  return [...sameCategory, ...rest].slice(0, 3);
};
