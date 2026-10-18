import { CurriculumTopic, CurriculumTopicSchema } from './schema';

const rawChemistry12Topics: CurriculumTopic[] = [
  {
    id: 'chem12-ch1-ester-lipid',
    subject: 'chemistry',
    grade: 12,
    chapter: 'Chương 1: Ester – Lipid',
    topicName: 'Cấu tạo, danh pháp IUPAC và phản ứng thủy phân Ester – Lipid',
    learningObjectives: [
      'Gọi được tên các ester đơn chức và triglyceride theo danh pháp IUPAC chuẩn GDPT 2018 (ethyl acetate, methyl methacrylate, tripalmitin, triolein).',
      'Viết được phương trình phản ứng thủy phân ester trong môi trường acid (thuận nghịch) và môi trường kiềm (xà phòng hóa một chiều).',
      'Giải được bài toán bảo toàn khối lượng và số mol NaOH/KOH trong phản ứng xà phòng hóa ester và chất béo.',
    ],
    keyFormulasAndRules: [
      {
        name: 'Phản ứng thủy phân Ester trong môi trường acid và kiềm',
        latexOrRule: '\\text{RCOOR}^\\prime + \\text{NaOH} \\xrightarrow{t^\\circ} \\text{RCOONa} + \\text{R}^\\prime\\text{OH}',
        description:
          'Thủy phân trong môi trường acid H2SO4 loãng là phản ứng thuận nghịch; thủy phân trong dung dịch kiềm NaOH/KOH là phản ứng một chiều.',
      },
      {
        name: 'Phản ứng xà phòng hóa chất béo (Triglyceride)',
        latexOrRule: '(\\text{RCOO})_3\\text{C}_3\\text{H}_5 + 3\\text{NaOH} \\xrightarrow{t^\\circ} 3\\text{RCOONa} + \\text{C}_3\\text{H}_5(\\text{OH})_3',
        description:
          'Bảo toàn mol: n_NaOH = 3 · n_triglyceride và n_glycerol = n_triglyceride.',
      },
    ],
    workedExample: {
      problemStatement:
        'Xà phòng hóa hoàn toàn $m\\text{ gam}$ một chất béo $X$ (triglyceride) bằng dung dịch $\\text{NaOH}$ vừa đủ, sau phản ứng thu được $9.2\\text{ g}$ glycerol ($\\text{C}_3\\text{H}_5(\\text{OH})_3$, $M = 92$) và $91.8\\text{ g}$ muối của acid béo. Hãy tính số mol $\\text{NaOH}$ đã phản ứng và khối lượng $m$ của chất béo $X$.',
      logicReasoning:
        'Trong phản ứng xà phòng hóa bất kỳ triglyceride nào, tỉ lệ mol giữa chất béo, $\\text{NaOH}$ và glycerol luôn cố định là $1 : 3 : 1$. Vì vậy, biết khối lượng glycerol sẽ suy ra ngay số mol glycerol và số mol $\\text{NaOH}$ phản ứng, sau đó áp dụng định luật bảo toàn khối lượng để tìm khối lượng chất béo $m$ mà không cần biết công thức cụ thể của gốc acid béo $\\text{R}-$.',
      steps: [
        'Bước 1 (Tính số mol glycerol): $$n_{\\text{glycerol}} = \\frac{9.2}{92} = 0.10\\text{ mol}$$',
        'Bước 2 (Suy ra số mol $\\text{NaOH}$ phản ứng): Theo phương trình tổng quát, $n_{\\text{NaOH}} = 3 \\cdot n_{\\text{glycerol}} = 3 \\times 0.10 = 0.30\\text{ mol}$, suy ra $m_{\\text{NaOH}} = 0.30 \\times 40 = 12.0\\text{ g}$.',
        'Bước 3 (Áp dụng định luật bảo toàn khối lượng): $$m_{\\text{chất béo}} + m_{\\text{NaOH}} = m_{\\text{muối}} + m_{\\text{glycerol}} \\implies m = 91.8 + 9.2 - 12.0 = 89.0\\text{ g}$$',
      ],
      finalConclusion:
        'Số mol $\\text{NaOH}$ đã phản ứng là $0.30\\text{ mol}$ và khối lượng chất béo $X$ ban đầu là $m = 89.0\\text{ g}$.',
    },
    commonPitfalls: [
      {
        mistake: 'Cho rằng mọi ester đơn chức tác dụng với NaOH đều theo tỉ lệ mol 1:1 và sinh ra alcohol.',
        correction: 'Kiểm tra ester của phenol (RCOOC6H4R\'): phản ứng với NaOH theo tỉ lệ 1:2 tạo ra 2 muối và nước.',
        explanation:
          'Phenol sinh ra tiếp tục phản ứng với NaOH dư: C6H5OH + NaOH → C6H5ONa + H2O.',
      },
    ],
    sampleQuestionTemplates: [
      {
        questionText:
          'Đun nóng hoàn toàn $17.6\\text{ g}$ ethyl acetate ($\\text{CH}_3\\text{COOC}_2\\text{H}_5$, $M = 88$) với $300\\text{ mL}$ dung dịch $\\text{NaOH } 1\\text{ M}$. Cô cạn dung dịch sau phản ứng thu được bao nhiêu gam chất rắn khan?',
        options: ['m = 20.4\\text{ g}', 'm = 16.4\\text{ g}', 'm = 24.6\\text{ g}', 'm = 18.2\\text{ g}'],
        correctAnswer: 'm = 20.4\\text{ g}',
        detailedDerivation:
          'Số mol ethyl acetate: $n_{\\text{ester}} = \\frac{17.6}{88} = 0.20\\text{ mol}$. Số mol $\\text{NaOH}$ ban đầu: $n_{\\text{NaOH}} = 0.30 \\times 1 = 0.30\\text{ mol}$. Chất rắn khan gồm $0.20\\text{ mol } \\text{CH}_3\\text{COONa}$ ($M = 82$) và $0.10\\text{ mol } \\text{NaOH}$ dư ($M = 40$): $$m_{\\text{rắn}} = 0.20 \\times 82 + 0.10 \\times 40 = 16.4 + 4.0 = 20.4\\text{ g}$$',
        cognitiveLevel: 'Vận dụng',
      },
      {
        questionText:
          'Cho $13.6\\text{ g}$ phenyl acetate ($\\text{CH}_3\\text{COOC}_6\\text{H}_5$, $M = 136$) phản ứng hoàn toàn với dung dịch chứa $0.25\\text{ mol } \\text{NaOH}$ đun nóng. Cô cạn dung dịch sau phản ứng thu được bao nhiêu gam chất rắn khan?',
        options: ['m = 21.8\\text{ g}', 'm = 19.8\\text{ g}', 'm = 15.8\\text{ g}', 'm = 23.6\\text{ g}'],
        correctAnswer: 'm = 21.8\\text{ g}',
        detailedDerivation:
          'Phenyl acetate là ester của phenol nên phản ứng theo tỉ lệ 1:2: $\\text{CH}_3\\text{COOC}_6\\text{H}_5 + 2\\text{NaOH} \\to \\text{CH}_3\\text{COONa} + \\text{C}_6\\text{H}_5\\text{ONa} + \\text{H}_2\\text{O}$. Số mol ester $= 0.10\\text{ mol} \\implies n_{\\text{NaOH phản ứng}} = 0.20\\text{ mol} \\implies n_{\\text{H}_2\\text{O}} = 0.10\\text{ mol}$. Bảo toàn khối lượng: $m_{\\text{rắn}} = 13.6 + 0.25 \\times 40 - 0.10 \\times 18 = 21.8\\text{ g}$.',
        cognitiveLevel: 'Vận dụng cao',
      },
      {
        questionText:
          'Tên gọi danh pháp IUPAC của ester có công thức cấu tạo $\\text{HCOOCH}_3$ là gì?',
        options: ['methyl methanoate (methyl formate)', 'ethyl acetate', 'methyl ethanoate', 'ethyl methanoate'],
        correctAnswer: 'methyl methanoate (methyl formate)',
        detailedDerivation:
          'Gốc $\\text{CH}_3-$ từ methanol đọc là *methyl*; gốc $\\text{HCOO}-$ từ methanoic acid (formic acid) đọc là *methanoate* (*formate*).',
        cognitiveLevel: 'Nhận biết',
      },
    ],
  },
  {
    id: 'chem12-ch2-carbohydrate',
    subject: 'chemistry',
    grade: 12,
    chapter: 'Chương 2: Carbohydrate',
    topicName: 'Glucose, Fructose, Saccharose, Maltose, Tinh bột và Cellulose',
    learningObjectives: [
      'Trình bày được cấu tạo mạch hở và mạch vòng của glucose, fructose và liên kết glycoside trong disaccharide, polysaccharide.',
      'Phân biệt được các carbohydrate bằng thuốc thử Tollens, Cu(OH)2/OH-, nước bromine và dung dịch iodine.',
      'Tính được khối lượng sản phẩm với hiệu suất phản ứng lên men glucose hoặc thủy phân tinh bột, cellulose.',
    ],
    keyFormulasAndRules: [
      {
        name: 'Phản ứng tráng bạc và lên men rượu của Glucose',
        latexOrRule: '\\text{C}_6\\text{H}_{12}\\text{O}_6 \\xrightarrow{\\text{AgNO}_3/\\text{NH}_3,\\; t^\\circ} 2\\text{Ag}; \\quad \\text{C}_6\\text{H}_{12}\\text{O}_6 \\xrightarrow{\\text{enzyme}} 2\\text{C}_2\\text{H}_5\\text{OH} + 2\\text{CO}_2',
        description:
          'Cả glucose và fructose đều tham gia phản ứng tráng bạc (tạo 2 mol Ag từ 1 mol monosaccharide) do trong môi trường kiềm fructose chuyển hóa thành glucose.',
      },
    ],
    workedExample: {
      problemStatement:
        'Thủy phân $324\\text{ g}$ tinh bột $(\\text{C}_6\\text{H}_{10}\\text{O}_5)_n$ với hiệu suất $H_1 = 75\\%$, sau đó lấy toàn bộ lượng glucose thu được đem lên men rượu với hiệu suất $H_2 = 80\\%$. Tính khối lượng ethanol ($\\text{C}_2\\text{H}_5\\text{OH}$) tạo thành.',
      logicReasoning:
        'Bài toán gồm chuỗi 2 phản ứng nối tiếp: mỗi mắt xích $\\text{C}_6\\text{H}_{10}\\text{O}_5$ ($M = 162$) thủy phân tạo $1$ phân tử glucose, và $1$ phân tử glucose lên men tạo $2$ phân tử $\\text{C}_2\\text{H}_5\\text{OH}$ ($M = 46$). Khi tính chất sản phẩm ở bên phải mũi tên qua nhiều giai đoạn có hiệu suất $H_1, H_2$, ta nhân trực tiếp số mol lý thuyết với tích hiệu suất $H_1 \\times H_2$.',
      steps: [
        'Bước 1 (Tính số mol mắt xích tinh bột): $$n_{\\text{C}_6\\text{H}_{10}\\text{O}_5} = \\frac{324}{162} = 2.0\\text{ mol}$$',
        'Bước 2 (Sơ đồ hợp thức toàn quá trình): $$(\\text{C}_6\\text{H}_{10}\\text{O}_5)_n \\xrightarrow{H_1 = 75\\%} n\\text{C}_6\\text{H}_{12}\\text{O}_6 \\xrightarrow{H_2 = 80\\%} 2n\\text{C}_2\\text{H}_5\\text{OH}$$',
        'Bước 3 (Tính số mol ethanol thực tế thu được): $$n_{\\text{ethanol}} = 2 \\times 2.0 \\times 0.75 \\times 0.80 = 2.40\\text{ mol}$$',
        'Bước 4 (Tính khối lượng ethanol): $$m_{\\text{ethanol}} = 2.40 \\times 46 = 110.4\\text{ g}$$',
      ],
      finalConclusion:
        'Khối lượng ethanol thực tế thu được sau hai giai đoạn là $m = 110.4\\text{ g}$.',
    },
    commonPitfalls: [
      {
        mistake: 'Nhân ngược hiệu suất H% khi tính lượng nguyên liệu ban đầu hoặc lượng sản phẩm thu được.',
        correction: 'Quy tắc chuẩn: "Phải nhân – Trái chia" (tính chất bên phải mũi tên thì nhân H%, tính chất bên trái mũi tên thì chia H%).',
        explanation:
          'Do hao hụt thực tế, lượng sản phẩm thực tế thu được luôn nhỏ hơn lý thuyết (nhân H/100).',
      },
    ],
    sampleQuestionTemplates: [
      {
        questionText:
          'Lên men $90\\text{ g}$ glucose với hiệu suất $H = 80\\%$. Khối lượng ethanol ($\\text{C}_2\\text{H}_5\\text{OH}$, $M = 46$) thu được bằng bao nhiêu?',
        options: ['m = 36.8\\text{ g}', 'm = 46.0\\text{ g}', 'm = 57.5\\text{ g}', 'm = 18.4\\text{ g}'],
        correctAnswer: 'm = 36.8\\text{ g}',
        detailedDerivation:
          'Số mol glucose: $n_{\\text{glucose}} = \\frac{90}{180} = 0.50\\text{ mol}$. Theo phương trình lên men, $n_{\\text{C}_2\\text{H}_5\\text{OH}} = 2 \\times 0.50 \\times 0.80 = 0.80\\text{ mol}$. Khối lượng ethanol thu được: $$m = 0.80 \\times 46 = 36.8\\text{ g}$$',
        cognitiveLevel: 'Thông hiểu',
      },
      {
        questionText:
          'Thuốc thử nào sau đây dùng để phân biệt trực tiếp dung dịch glucose và dung dịch fructose?',
        options: ['Nước bromine (Br_2)', 'Thuốc thử Tollens (AgNO_3/NH_3)', 'Cu(OH)_2 ở nhiệt độ thường', 'Dung dịch Iodine (I_2)'],
        correctAnswer: 'Nước bromine (Br_2)',
        detailedDerivation:
          'Glucose có nhóm chức aldehyde ($-\\text{CHO}$) nên làm mất màu dung dịch nước bromine, còn fructose (nhóm ketone) không làm mất màu nước bromine. Trong môi trường kiềm của thuốc thử Tollens, fructose chuyển hóa thành glucose nên cả hai đều tráng bạc.',
        cognitiveLevel: 'Nhận biết',
      },
      {
        questionText:
          'Đun nóng hoàn toàn dung dịch chứa $18.0\\text{ g}$ glucose và $9.0\\text{ g}$ fructose với lượng dư thuốc thử Tollens ($\\text{AgNO}_3/\\text{NH}_3$). Khối lượng bạc ($\\text{Ag}$, $M = 108$) tối đa thu được là bao nhiêu?',
        options: ['m_{\\text{Ag}} = 32.4\\text{ g}', 'm_{\\text{Ag}} = 21.6\\text{ g}', 'm_{\\text{Ag}} = 10.8\\text{ g}', 'm_{\\text{Ag}} = 43.2\\text{ g}'],
        correctAnswer: 'm_{\\text{Ag}} = 32.4\\text{ g}',
        detailedDerivation:
          'Tổng số mol monosaccharide (glucose + fructose) là $n = \\frac{18.0 + 9.0}{180} = 0.15\\text{ mol}$. Cả hai đều tráng bạc theo tỉ lệ $1 : 2 \\implies n_{\\text{Ag}} = 2 \\times 0.15 = 0.30\\text{ mol} \\implies m_{\\text{Ag}} = 0.30 \\times 108 = 32.4\\text{ g}$.',
        cognitiveLevel: 'Vận dụng',
      },
    ],
  },
  {
    id: 'chem12-ch3-nitrogen-compounds',
    subject: 'chemistry',
    grade: 12,
    chapter: 'Chương 3: Hợp chất chứa Nitrogen',
    topicName: 'Amine, Amino acid, Peptide và Protein',
    learningObjectives: [
      'So sánh được lực base của các amine (alkylamine > NH3 > arylamine) và giải thích khả năng làm đổi màu chất chỉ thị.',
      'Trình bày được tính chất lưỡng tính và sự di chuyển trong điện trường của amino acid ở các pH khác nhau.',
      'Nhận biết được liên kết peptide (-CO-NH-), phản ứng màu biuret và tính toán bài toán thủy phân peptide.',
    ],
    keyFormulasAndRules: [
      {
        name: 'Tính lưỡng tính của α-Amino acid & Phản ứng thủy phân Peptide',
        latexOrRule: '\\text{H}_2\\text{N-R-COOH} + \\text{H}^+ \\to \\text{H}_3\\text{N}^+\\text{-R-COOH}; \\quad \\text{Peptide}_n + (n-1)\\text{H}_2\\text{O} \\to n\\text{ Amino acid}',
        description:
          'Tripeptide trở lên (có từ 2 liên kết peptide trở lên) cho phản ứng màu biuret tím đặc trưng với Cu(OH)2/OH-; dipeptide không có phản ứng này.',
      },
    ],
    workedExample: {
      problemStatement:
        'Thủy phân hoàn toàn $0.10\\text{ mol}$ tripeptide mạch hở $X$ ($\\text{Gly–Ala–Val}$) trong dung dịch chứa $0.40\\text{ mol } \\text{NaOH}$ đun nóng. Cô cạn dung dịch sau phản ứng thu được bao nhiêu gam chất rắn khan? Cho $M_{\\text{Gly}} = 75$, $M_{\\text{Ala}} = 89$, $M_{\\text{Val}} = 117$.',
      logicReasoning:
        'Một phân tử tripeptide tạo bởi các $\\alpha$-amino acid có 1 nhóm $-\\text{NH}_2$ và 1 nhóm $-\\text{COOH}$ khi thủy phân hoàn toàn trong kiềm sẽ phản ứng với đúng $3$ phân tử $\\text{NaOH}$ và chỉ sinh ra $1$ phân tử $\\text{H}_2\\text{O}$ (do nhóm $-\\text{COOH}$ tự do ở đầu C trung hòa với $\\text{OH}^-$, còn 2 liên kết peptide bị cắt trực tiếp bởi $\\text{NaOH}$). Áp dụng bảo toàn khối lượng giúp tính nhanh khối lượng rắn khan.',
      steps: [
        'Bước 1 (Tính phân tử khối của tripeptide $X$): Khi tạo thành từ 3 amino acid, phân tử tách ra 2 phân tử $\\text{H}_2\\text{O}$: $$M_X = 75 + 89 + 117 - 2 \\times 18 = 245\\text{ g/mol} \\implies m_X = 0.10 \\times 245 = 24.5\\text{ g}$$',
        'Bước 2 (Viết phương trình tổng quát với $\\text{NaOH}$): $$\\text{Gly–Ala–Val} + 3\\text{NaOH} \\to \\text{Muối} + \\text{H}_2\\text{O}$$ Số mol $\\text{NaOH}$ phản ứng là $0.30\\text{ mol}$ (dư $0.10\\text{ mol } \\text{NaOH}$) và số mol $\\text{H}_2\\text{O}$ sinh ra là $n_{\\text{H}_2\\text{O}} = n_X = 0.10\\text{ mol}$.',
        'Bước 3 (Bảo toàn khối lượng tìm chất rắn khan): $$m_{\\text{rắn}} = m_X + m_{\\text{NaOH ban đầu}} - m_{\\text{H}_2\\text{O}} = 24.5 + 0.40 \\times 40 - 0.10 \\times 18 = 24.5 + 16.0 - 1.8 = 38.7\\text{ g}$$',
      ],
      finalConclusion:
        'Khối lượng chất rắn khan thu được sau khi cô cạn dung dịch là $m_{\\text{rắn}} = 38.7\\text{ g}$.',
    },
    commonPitfalls: [
      {
        mistake: 'Đếm sai số liên kết peptide trong phân tử n-peptide (cho rằng tripeptide có 3 liên kết peptide).',
        correction: 'Một phân tử mạch hở gồm n mắt xích α-amino acid có đúng (n - 1) liên kết peptide.',
        explanation:
          'Mỗi liên kết peptide hình thành giữa hai mắt xích kế tiếp và tách ra 1 phân tử H2O, do đó tripeptide chỉ có 3 - 1 = 2 liên kết peptide.',
      },
    ],
    sampleQuestionTemplates: [
      {
        questionText:
          'Cho $15.0\\text{ g}$ glycine ($\\text{H}_2\\text{NCH}_2\\text{COOH}$, $M = 75$) tác dụng vừa đủ với dung dịch $\\text{HCl}$. Khối lượng muối thu được sau phản ứng là bao nhiêu?',
        options: ['m = 22.3\\text{ g}', 'm = 18.65\\text{ g}', 'm = 25.95\\text{ g}', 'm = 15.0\\text{ g}'],
        correctAnswer: 'm = 22.3\\text{ g}',
        detailedDerivation:
          'Số mol glycine: $n = \\frac{15.0}{75} = 0.20\\text{ mol}$. Glycine có 1 nhóm $-\\text{NH}_2$ nên phản ứng với $\\text{HCl}$ theo tỉ lệ 1:1 tạo muối $\\text{ClH}_3\\text{NCH}_2\\text{COOH}$ ($M = 75 + 36.5 = 111.5$): $$m_{\\text{muối}} = 0.20 \\times 111.5 = 22.3\\text{ g}$$',
        cognitiveLevel: 'Thông hiểu',
      },
      {
        questionText:
          'Dãy nào sau đây sắp xếp các chất theo chiều tăng dần lực base trong dung dịch nước?',
        options: [
          'C_6H_5NH_2 (aniline) < NH_3 < CH_3NH_2 < (CH_3)_2NH',
          'NH_3 < C_6H_5NH_2 < CH_3NH_2 < (CH_3)_2NH',
          '(CH_3)_2NH < CH_3NH_2 < NH_3 < C_6H_5NH_2',
          'C_6H_5NH_2 < CH_3NH_2 < NH_3 < (CH_3)_2NH',
        ],
        correctAnswer: 'C_6H_5NH_2 (aniline) < NH_3 < CH_3NH_2 < (CH_3)_2NH',
        detailedDerivation:
          'Vòng benzene hút electron làm giảm mật độ electron trên nguyên tử N của aniline ($\\text{C}_6\\text{H}_5\\text{NH}_2 < \\text{NH}_3$). Nhóm alkyl ($-\\text{CH}_3$) đẩy electron làm tăng lực base: $\\text{NH}_3 < \\text{CH}_3\\text{NH}_2 < (\\text{CH}_3)_2\\text{NH}$.',
        cognitiveLevel: 'Thông hiểu',
      },
      {
        questionText:
          'Cho $0.15\\text{ mol}$ glutamic acid ($\\text{HOOC}-\\text{C}_3\\text{H}_5(\\text{NH}_2)-\\text{COOH}$, $M = 147$) vào $200\\text{ mL}$ dung dịch $\\text{HCl } 1.0\\text{ M}$, thu được dung dịch $X$. Cho dung dịch $\\text{NaOH}$ dư vào $X$, số mol $\\text{NaOH}$ đã phản ứng là bao nhiêu?',
        options: ['0.50\\text{ mol}', '0.35\\text{ mol}', '0.30\\text{ mol}', '0.65\\text{ mol}'],
        correctAnswer: '0.50\\text{ mol}',
        detailedDerivation:
          'Quy đổi dung dịch $X$ gồm $0.15\\text{ mol}$ glutamic acid (có $2$ nhóm $-\\text{COOH}$) và $0.20\\text{ mol } \\text{HCl}$ chưa phản ứng với kiềm. Khi cho $\\text{NaOH}$ dư vào $X$: $n_{\\text{NaOH}} = 2 \\cdot n_{\\text{Glu}} + n_{\\text{HCl}} = 2(0.15) + 0.20 = 0.50\\text{ mol}$.',
        cognitiveLevel: 'Vận dụng cao',
      },
    ],
  },
  {
    id: 'chem12-ch5-electrochemistry',
    subject: 'chemistry',
    grade: 12,
    chapter: 'Chương 5: Pin điện và Điện phân',
    topicName: 'Thế điện cực chuẩn, Suất điện động Pin Galvani và Định luật Faraday về điện phân',
    learningObjectives: [
      'Sử dụng giá trị thế điện cực chuẩn E° để so sánh tính oxi hóa - khử và dự đoán chiều phản ứng theo quy tắc alpha (α).',
      'Tính được suất điện động chuẩn của pin điện hóa: E°_pin = E°_cathode - E°_anode.',
      'Xác định được thứ tự điện phân ở anode, cathode và tính khối lượng chất thu được bằng công thức Faraday.',
    ],
    keyFormulasAndRules: [
      {
        name: 'Suất điện động chuẩn của Pin Galvani & Định luật Faraday',
        latexOrRule: 'E^\\circ_{\\text{pin}} = E^\\circ_{\\text{cathode (+)}} - E^\\circ_{\\text{anode (-)}}, \\quad m = \\frac{A I t}{n F} \\quad (F = 96500\\text{ C/mol})',
        description:
          'Trong cả pin điện và bình điện phân: Anode luôn xảy ra sự OXI HÓA, Cathode luôn xảy ra sự KHỬ.',
      },
    ],
    workedExample: {
      problemStatement:
        'Điện phân $200\\text{ mL}$ dung dịch $\\text{CuSO}_4$ dư bằng điện cực trơ với cường độ dòng điện không đổi $I = 5.0\\text{ A}$ trong thời gian $t = 1930\\text{ s}$. Tính khối lượng kim loại đồng ($\\text{Cu}$, $M = 64$) bám trên cathode và thể tích khí $\\text{O}_2$ (ở đkc $25^\\circ\\text{C}, 1\\text{ bar}$) thoát ra ở anode.',
      logicReasoning:
        'Thay vì nhớ máy móc công thức gộp, cách tư duy bản chất và nhanh nhất là tính tổng số mol electron trao đổi ở các điện cực theo công thức $n_e = \\frac{I \\cdot t}{F}$. Sau đó, dựa vào bán phản ứng khử $\\text{Cu}^{2+} + 2e \\to \\text{Cu}$ ở cathode và bán phản ứng oxi hóa nước $2\\text{H}_2\\text{O} \\to \\text{O}_2 + 4\\text{H}^+ + 4e$ ở anode, ta suy ra trực tiếp số mol $\\text{Cu}$ và $\\text{O}_2$.',
      steps: [
        'Bước 1 (Tính số mol electron trao đổi $n_e$): $$n_e = \\frac{I \\cdot t}{F} = \\frac{5.0 \\times 1930}{96\\,500} = 0.10\\text{ mol}$$',
        'Bước 2 (Quá trình khử tại Cathode $(-)$): $\\text{Cu}^{2+} + 2e \\to \\text{Cu} \\implies n_{\\text{Cu}} = \\frac{n_e}{2} = 0.05\\text{ mol}$. Khối lượng đồng thu được là $m_{\\text{Cu}} = 0.05 \\times 64 = 3.20\\text{ g}$.',
        'Bước 3 (Quá trình oxi hóa tại Anode $(+)$): $2\\text{H}_2\\text{O} \\to \\text{O}_2 + 4\\text{H}^+ + 4e \\implies n_{\\text{O}_2} = \\frac{n_e}{4} = 0.025\\text{ mol}$.',
        'Bước 4 (Tính thể tích khí $\\text{O}_2$ ở đkc): $$V_{\\text{O}_2} = 0.025 \\times 24.79 \\approx 0.62\\text{ L}$$',
      ],
      finalConclusion:
        'Thu được $3.20\\text{ g}$ kim loại $\\text{Cu}$ ở cathode và $0.62\\text{ L}$ khí $\\text{O}_2$ (đkc) ở anode.',
    },
    commonPitfalls: [
      {
        mistake: 'Nhầm lẫn dấu điện cực Anode và Cathode giữa Pin Galvani và Bình điện phân.',
        correction: 'Nhớ theo bản chất quá trình: Anode = Oxi hóa (nhường e), Cathode = Khử (nhận e). Ở Pin Galvani: Anode là cực âm (-); ở Bình điện phân: Anode nối với cực dương (+).',
        explanation:
          'Tên gọi Anode/Cathode gắn với bản chất phản ứng oxi hóa/khử chứ không gắn cố định với dấu âm/dương.',
      },
    ],
    sampleQuestionTemplates: [
      {
        questionText:
          'Cho biết thế điện cực chuẩn $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ và $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$. Suất điện động chuẩn $E^\\circ_{\\text{pin}}$ của pin Galvani $\\text{Zn–Cu}$ bằng bao nhiêu?',
        options: ['E^\\circ_{\\text{pin}} = 1.10\\text{ V}', 'E^\\circ_{\\text{pin}} = 0.42\\text{ V}', 'E^\\circ_{\\text{pin}} = -1.10\\text{ V}', 'E^\\circ_{\\text{pin}} = 0.76\\text{ V}'],
        correctAnswer: 'E^\\circ_{\\text{pin}} = 1.10\\text{ V}',
        detailedDerivation:
          'Cặp $\\text{Cu}^{2+}/\\text{Cu}$ có thế điện cực chuẩn lớn hơn đóng vai trò cathode (+), cặp $\\text{Zn}^{2+}/\\text{Zn}$ là anode (-). Vậy $$E^\\circ_{\\text{pin}} = E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} - E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = 0.34 - (-0.76) = 1.10\\text{ V}$$',
        cognitiveLevel: 'Nhận biết',
      },
      {
        questionText:
          'Trong phức chất $[\\text{Cu}(\\text{NH}_3)_4]^{2+}$, nguyên tử trung tâm và số phối trí của nguyên tử trung tâm lần lượt là gì?',
        options: ['Cu^{2+} và 4', 'Cu và 4', 'NH_3 và 4', 'Cu^{2+} và 6'],
        correctAnswer: 'Cu^{2+} và 4',
        detailedDerivation:
          'Phối tử $\\text{NH}_3$ trung hòa điện và là phối tử một càng, do đó nguyên tử trung tâm là cation $\\text{Cu}^{2+}$ có số phối trí bằng $4$.',
        cognitiveLevel: 'Thông hiểu',
      },
      {
        questionText:
          'Điện phân dung dịch $\\text{AgNO}_3$ dư bằng điện cực trơ với cường độ dòng điện $I = 2.0\\text{ A}$ trong thời gian $965\\text{ s}$. Khối lượng bạc ($\\text{Ag}$, $M = 108$) bám vào cathode là bao nhiêu?',
        options: ['m = 2.16\\text{ g}', 'm = 1.08\\text{ g}', 'm = 4.32\\text{ g}', 'm = 3.24\\text{ g}'],
        correctAnswer: 'm = 2.16\\text{ g}',
        detailedDerivation:
          'Số mol electron trao đổi: $n_e = \\frac{I \\cdot t}{F} = \\frac{2.0 \\times 965}{96\\,500} = 0.02\\text{ mol}$. Tại cathode: $\\text{Ag}^+ + 1e \\to \\text{Ag} \\implies n_{\\text{Ag}} = n_e = 0.02\\text{ mol} \\implies m_{\\text{Ag}} = 0.02 \\times 108 = 2.16\\text{ g}$.',
        cognitiveLevel: 'Vận dụng',
      },
    ],
  },
];

export const chemistry12Topics: CurriculumTopic[] = rawChemistry12Topics.map((topic) =>
  CurriculumTopicSchema.parse(topic)
);
