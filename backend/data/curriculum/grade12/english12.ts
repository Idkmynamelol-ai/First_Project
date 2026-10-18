import { CurriculumTopic, CurriculumTopicSchema } from './schema';

const rawEnglish12Topics: CurriculumTopic[] = [
  {
    id: 'eng12-unit1-3-tenses-articles-prepositions',
    subject: 'english',
    grade: 12,
    chapter: 'Unit 1–3: Life Stories, Multicultural World & Green Living',
    topicName: 'Thì quá khứ đơn - quá khứ tiếp diễn, Mạo từ và Mệnh đề quan hệ nối cả câu',
    learningObjectives: [
      'Phân biệt và phối hợp chính xác thì Quá khứ đơn (hành động cắt ngang) và Quá khứ tiếp diễn (hành động đang diễn ra) với when/while.',
      'Sử dụng đúng mạo từ xác định (the), không xác định (a/an) và mạo từ rỗng (Ø) trước danh từ chỉ khái niệm chung, tên địa lý và danh hiệu.',
      'Vận dụng đại từ quan hệ "which" sau dấu phẩy để thay thế cho toàn bộ mệnh đề đứng trước.',
    ],
    keyFormulasAndRules: [
      {
        name: 'Phối hợp thì Quá khứ tiếp diễn & Quá khứ đơn',
        latexOrRule: '\\text{While } + S_1 + \\text{was/were } V_{\\text{-ing}}, \\quad S_2 + V_{\\text{past simple}}',
        description:
          'Hành động kéo dài làm nền ở quá khứ dùng Past Continuous; hành động ngắn xen vào dùng Past Simple.',
      },
      {
        name: 'Mệnh đề quan hệ thay thế cả mệnh đề trước (Sentential Relative Clause)',
        latexOrRule: 'S + V + O,\\; \\textbf{which} + V_{\\text{singular}} \\dots',
        description:
          'Bắt buộc có dấu phẩy trước "which", không dùng "that" hay "what", và động từ theo sau chia ở ngôi thứ ba số ít.',
      },
    ],
    workedExample: {
      problemStatement:
        'Kết hợp hai câu đơn sau thành một câu phức sử dụng mệnh đề quan hệ nối cả câu và phối hợp thì quá khứ chuẩn xác: "The students were conducting a green-recycling experiment in the lab. The power suddenly went out. This delayed their presentation by two hours."',
      logicReasoning:
        'Trong hai sự việc đầu tiên ở quá khứ, hành động "thực hiện thí nghiệm" là hành động dài đang diễn ra làm nền (Past Continuous: *were conducting*), còn hành động "mất điện" là sự cố ngắn cắt ngang (Past Simple: *went out*). Sự việc thứ ba ("This delayed...") có đại từ "This" thay thế cho toàn bộ tình huống mất điện vừa nêu, nên ta dùng dấu phẩy kèm đại từ quan hệ **which** để nối mạch lạc.',
      steps: [
        'Bước 1 (Phân tích tương quan hai hành động quá khứ): Hành động nền dùng *While the students were conducting...*, hành động cắt ngang dùng *the power suddenly went out*.',
        'Bước 2 (Chuyển đại từ "This" thành đại từ quan hệ nối cả mệnh đề): Thay dấu chấm và từ "This" bằng dấu phẩy + **which** (*, which delayed...*).',
        'Bước 3 (Kiểm tra sự hòa hợp chủ - vị và dấu câu): Trước *which* bắt buộc có dấu phẩy; động từ *delayed* ở thì quá khứ đơn phù hợp với mạch kể chuyện.',
      ],
      finalConclusion:
        'Câu hoàn chỉnh: "While the students were conducting a green-recycling experiment in the lab, the power suddenly went out, which delayed their presentation by two hours."',
    },
    commonPitfalls: [
      {
        mistake: 'Dùng "what" hoặc "that" sau dấu phẩy để thay thế cho cả mệnh đề đứng trước.',
        correction: 'Chỉ duy nhất đại từ quan hệ "which" (đứng sau dấu phẩy) mới có chức năng thay thế cho toàn bộ mệnh đề phía trước.',
        explanation:
          '"That" không đứng sau dấu phẩy trong mệnh đề quan hệ không xác định; "what" là đại từ danh ngữ (= the thing that), không có mệnh đề tiền ngữ.',
      },
    ],
    sampleQuestionTemplates: [
      {
        questionText:
          'Chọn phương án đúng để hoàn thành câu: "More and more high school students are switching to reusable water bottles, ______ helps reduce plastic waste significantly."',
        options: ['which', 'that', 'what', 'who'],
        correctAnswer: 'which',
        detailedDerivation:
          'Sau dấu phẩy, đại từ quan hệ thay thế cho toàn bộ mệnh đề phía trước ("More and more high school students are switching to reusable water bottles") bắt buộc là **which** (+ động từ số ít *helps*).',
        cognitiveLevel: 'Thông hiểu',
      },
      {
        questionText:
          'Chọn phương án đúng để hoàn thành câu: "While the engineers ______ the solar panels on the roof, a sudden thunderstorm broke out."',
        options: ['were installing', 'installed', 'have installed', 'are installing'],
        correctAnswer: 'were installing',
        detailedDerivation:
          'Hành động lắp đặt tấm pin mặt trời đang diễn ra trong quá khứ (sau liên từ *While*) thì một cơn giông ập đến cắt ngang (*broke out*), nên chia ở thì Quá khứ tiếp diễn (*were installing*).',
        cognitiveLevel: 'Nhận biết',
      },
      {
        questionText:
          'Chọn phương án đúng (Subjunctive Mood): "The environmental council insisted that every factory in the industrial zone ______ its wastewater before discharging it."',
        options: ['treat', 'treats', 'treated', 'is treating'],
        correctAnswer: 'treat',
        detailedDerivation:
          'Cấu trúc giả định thức hiện tại sau động từ *insist that*: $S_1 + \\text{insist/recommend/propose that} + S_2 + (\\text{should}) + V_{\\text{bare infinitive}}$. Do đó dùng động từ nguyên mẫu không "to" là **treat**.',
        cognitiveLevel: 'Vận dụng',
      },
    ],
  },
  {
    id: 'eng12-unit4-7-comparatives-causatives',
    subject: 'english',
    grade: 12,
    chapter: 'Unit 4–7: Urbanisation, The World of Work & Artificial Intelligence',
    topicName: 'So sánh kép (Càng... càng...), Thể sai khiến (Causatives) và Mệnh đề trạng ngữ',
    learningObjectives: [
      'Xây dựng câu so sánh kép đồng tiến (The + comparative + S + V, the + comparative + S + V) để mô tả xu hướng đô thị hóa và xã hội.',
      'Chuyển đổi linh hoạt giữa thể sai khiến chủ động (have sb do sth / get sb to do sth) và bị động (have/get sth done).',
      'Sử dụng mệnh đề trạng ngữ chỉ kết quả (so + adj/adv + that; such + (a/an) + adj + N + that).',
    ],
    keyFormulasAndRules: [
      {
        name: 'Cấu trúc So sánh kép (Double Comparatives)',
        latexOrRule: '\\text{The} + \\text{adj/adv}_{\\text{-er}} / \\text{more adj/adv} + S_1 + V_1,\\; \\text{the} + \\text{adj/adv}_{\\text{-er}} / \\text{more adj/adv} + S_2 + V_2',
        description:
          'Diễn tả hai đại lượng cùng tăng hoặc cùng giảm tỉ lệ thuận/nghịch với nhau.',
      },
      {
        name: 'Cấu trúc Thể sai khiến chủ động và bị động (Active & Passive Causatives)',
        latexOrRule: '\\text{have} + \\text{sb} + V_{\\text{inf}} = \\text{get} + \\text{sb} + \\text{to } V_{\\text{inf}} \\implies \\text{have/get} + \\text{sth} + V_{\\text{p.p.}}',
        description:
          'Khi tân ngữ chỉ vật chịu tác động (ví dụ: robot được lập trình, mái nhà được sửa), luôn dùng quá khứ phân từ V_p.p. (done).',
      },
    ],
    workedExample: {
      problemStatement:
        'Viết lại câu sau sử dụng đồng thời cấu trúc So sánh kép (Double Comparative) và Thể sai khiến bị động (Passive Causative): "When a city expands rapidly, residents need to ask technicians to upgrade public transit systems more frequently."',
      logicReasoning:
        'Câu gốc diễn tả quan hệ tỉ lệ thuận giữa hai mệnh đề ("Khi thành phố mở rộng càng nhanh" → "cư dân càng cần nâng cấp hệ thống giao thông công cộng thường xuyên hơn"), nên ta dùng cấu trúc *The + comparative + S + V, the + comparative + S + V*. Đồng thời, cụm "ask technicians to upgrade public transit systems" chuyển sang thể sai khiến bị động với tân ngữ chỉ vật *public transit systems* theo công thức *have/get + sth + V3/ed*.',
      steps: [
        'Bước 1 (Chuyển mệnh đề điều kiện sang vế đầu của so sánh kép): Trạng từ *rapidly* là trạng từ dài nên dạng so sánh hơn đứng đầu câu là *The more rapidly a city expands, ...*',
        'Bước 2 (Chuyển cụm sai khiến sang dạng bị động): Thay *ask technicians to upgrade public transit systems* bằng *have public transit systems upgraded* (vì *public transit systems* là vật được nâng cấp).',
        'Bước 3 (Đưa trạng từ so sánh *more frequently* lên đầu vế thứ hai): Ghép thành *...the more frequently residents need to have public transit systems upgraded.*',
      ],
      finalConclusion:
        'Câu hoàn chỉnh: "The more rapidly a city expands, the more frequently residents need to have public transit systems upgraded."',
    },
    commonPitfalls: [
      {
        mistake: 'Dùng "get somebody do something" (thiếu "to") hoặc "have somebody to do something" (thừa "to").',
        correction: 'Nhớ quy tắc: have + người + V_nguyên mẫu (không to); get + người + to V; nhưng cả hai đều đi với + vật + V3/ed.',
        explanation:
          'Động từ "have" trong cấu trúc sai khiến chủ động hoạt động giống nhóm động từ make/let (+ bare infinitive).',
      },
    ],
    sampleQuestionTemplates: [
      {
        questionText:
          'Chọn phương án đúng để hoàn thành câu: "The municipal library is going to have an AI-powered cataloguing system ______ next month."',
        options: ['installed', 'install', 'to install', 'installing'],
        correctAnswer: 'installed',
        detailedDerivation:
          'Tân ngữ "an AI-powered cataloguing system" là vật chịu tác động (được lắp đặt), nên áp dụng cấu trúc sai khiến bị động: $\\text{have} + \\text{sth} + V_{\\text{p.p.}}$ (*installed*).',
        cognitiveLevel: 'Vận dụng',
      },
      {
        questionText:
          'Chọn phương án đúng (Unit 4 - Global Success 12): "______ people move into big cities, the higher the unemployment rate becomes."',
        options: ['The more', 'More and more', 'The most', 'More'],
        correctAnswer: 'The more',
        detailedDerivation:
          'Cấu trúc so sánh kép đồng tiến: $\\text{The more} + N + S + V, \\text{the} + \\text{comparative} + S + V$.',
        cognitiveLevel: 'Thông hiểu',
      },
      {
        questionText:
          'Chọn phương án đúng (Unit 6 - Global Success 12): "We got an AI technician ______ the facial recognition software at the school gate yesterday."',
        options: ['to calibrate', 'calibrate', 'calibrated', 'calibrating'],
        correctAnswer: 'to calibrate',
        detailedDerivation:
          'Tân ngữ "an AI technician" là người trực tiếp thực hiện hành động, đi sau động từ *got* nên áp dụng cấu trúc sai khiến chủ động: $\\text{get} + \\text{sb} + \\text{to } V_{\\text{inf}}$ (*to calibrate*).',
        cognitiveLevel: 'Vận dụng',
      },
    ],
  },
  {
    id: 'eng12-unit8-10-conditionals-inversion',
    subject: 'english',
    grade: 12,
    chapter: 'Unit 8–10: Wildlife Conservation, Career Paths & Lifelong Learning',
    topicName: 'Đảo ngữ câu điều kiện hỗn hợp, Đảo ngữ trạng từ phủ định và Cụm động từ',
    learningObjectives: [
      'Nhận diện và viết lại câu điều kiện hỗn hợp (Mixed Conditional Loại 3 → Loại 2) kèm đảo ngữ với Had / Were / Should.',
      'Vận dụng đảo ngữ với trạng từ phủ định đứng đầu câu (Not only... but also, Hardly... when, No sooner... than).',
      'Sử dụng chính xác các cụm động từ ba thành phần (three-word phrasal verbs: keep up with, live up to, cut down on, look forward to).',
    ],
    keyFormulasAndRules: [
      {
        name: 'Đảo ngữ câu điều kiện hỗn hợp (Quá khứ → Hiện tại)',
        latexOrRule: '\\text{Had} + S + V_{\\text{p.p.}} \\text{ (past cause)}, \\quad S + \\text{would/could} + V_{\\text{inf}} \\text{ (present result)}',
        description:
          'Dùng khi nguyên nhân không có thật trong quá khứ dẫn đến kết quả không có thật ở hiện tại (now, today, right now).',
      },
      {
        name: 'Đảo ngữ trạng từ phủ định chỉ thứ tự thời gian',
        latexOrRule: '\\text{Hardly/Scarcely} + \\text{had} + S + V_{\\text{p.p.}} + \\text{when} + S + V_{\\text{past}} \\equiv \\text{No sooner} + \\text{had} + S + V_{\\text{p.p.}} + \\text{than} + S + V_{\\text{past}}',
        description:
          'Chú ý cặp liên từ đi kèm cố định: Hardly/Scarcely đi với WHEN; No sooner đi với THAN.',
      },
    ],
    workedExample: {
      problemStatement:
        'Chuyển câu thực tế sau sang câu điều kiện hỗn hợp có đảo ngữ (Inverted Mixed Conditional): "Because Minh did not sign up for the data-science bootcamp last summer, he cannot keep up with the AI project requirements now."',
      logicReasoning:
        'Ta phân tích mốc thời gian ở hai vế: mệnh đề nguyên nhân có *last summer* (quá khứ, động từ phủ định *did not sign up*), còn mệnh đề kết quả có *now* (hiện tại, động từ phủ định *cannot keep up with*). Do đó, giả thiết trái ngược với thực tế phải đổi sang thể khẳng định ở cả hai vế, kết hợp mệnh đề điều kiện Loại 3 đảo ngữ (*Had + S + V3*) với mệnh đề chính Loại 2 (*could + V_inf*).',
      steps: [
        'Bước 1 (Xác định loại câu điều kiện và đổi cực phủ định → khẳng định): Thực tế phủ định ở quá khứ (*did not sign up*) chuyển thành giả thiết khẳng định quá khứ hoàn thành (*had signed up*).',
        'Bước 2 (Thực hiện đảo ngữ mệnh đề điều kiện Loại 3): Đưa trợ động từ *Had* lên trước chủ ngữ *Minh* và lược bỏ *If*: *Had Minh signed up for the data-science bootcamp last summer, ...*',
        'Bước 3 (Chia mệnh đề kết quả ở hiện tại với *now*): Đổi thực tế *cannot keep up with... now* sang giả thiết hiện tại khẳng định *he could keep up with the AI project requirements now.*',
      ],
      finalConclusion:
        'Câu hoàn chỉnh: "Had Minh signed up for the data-science bootcamp last summer, he could keep up with the AI project requirements now."',
    },
    commonPitfalls: [
      {
        mistake: 'Ghép nhầm "No sooner... when" hoặc dùng thì quá khứ đơn thay vì quá khứ hoàn thành ngay sau Hardly/No sooner.',
        correction: 'Sau Hardly/Scarcely/No sooner là đảo ngữ của thì Quá khứ hoàn thành (had + S + V3/ed), mệnh đề sau when/than chia Quá khứ đơn.',
        explanation:
          'Sự việc xảy ra trước một chút được nhấn mạnh bằng Quá khứ hoàn thành đảo ngữ.',
      },
    ],
    sampleQuestionTemplates: [
      {
        questionText:
          'Chọn câu viết lại đúng ngữ pháp và sát nghĩa nhất: "Because the research team did not calibrate the spectrometer yesterday, their baseline readings are unreliable right now."',
        options: [
          'Had the research team calibrated the spectrometer yesterday, their baseline readings would be reliable right now.',
          'Had the research team calibrated the spectrometer yesterday, their baseline readings would have been reliable right now.',
          'Were the research team to calibrate the spectrometer yesterday, their baseline readings would be reliable right now.',
          'No sooner had the research team calibrated the spectrometer yesterday than their baseline readings were reliable.',
        ],
        correctAnswer:
          'Had the research team calibrated the spectrometer yesterday, their baseline readings would be reliable right now.',
        detailedDerivation:
          'Nguyên nhân ở quá khứ (*yesterday*) kết hợp với kết quả ở hiện tại (*right now*) tạo thành câu điều kiện hỗn hợp Loại 3 → Loại 2. Khi đảo ngữ mệnh đề điều kiện quá khứ, ta dùng $\\text{Had} + S + V_{\\text{p.p.}}$, và mệnh đề chính hiện tại dùng $\\text{would be}$.',
        cognitiveLevel: 'Vận dụng cao',
      },
      {
        questionText:
          'Chọn phương án đúng để hoàn thành câu đảo ngữ: "Under no circumstances ______ share your personal API keys or authentication tokens publicly."',
        options: ['should you', 'you should', 'do you should', 'you are to'],
        correctAnswer: 'should you',
        detailedDerivation:
          'Khi cụm trạng ngữ phủ định *Under no circumstances* đứng đầu câu, ta bắt buộc đảo trợ động từ/động từ khuyết thiếu lên trước chủ ngữ: $\\text{Under no circumstances} + \\text{should} + S + V_{\\text{inf}}$.',
        cognitiveLevel: 'Vận dụng',
      },
      {
        questionText:
          'Chọn cụm động từ (three-word phrasal verb) phù hợp nhất: "In the era of rapid technological change, lifelong learners must constantly upgrade their skills to ______ automation trends."',
        options: ['keep up with', 'cut down on', 'drop out of', 'look down on'],
        correctAnswer: 'keep up with',
        detailedDerivation:
          '*keep up with* = bắt kịp, theo kịp tiến độ/xu hướng; *cut down on* = cắt giảm; *drop out of* = bỏ học/rút khỏi; *look down on* = coi thường.',
        cognitiveLevel: 'Thông hiểu',
      },
    ],
  },
];

export const english12Topics: CurriculumTopic[] = rawEnglish12Topics.map((topic) =>
  CurriculumTopicSchema.parse(topic)
);
