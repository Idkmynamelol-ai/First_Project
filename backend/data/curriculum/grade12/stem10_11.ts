import { z } from 'zod';
import { CurriculumTopic, CurriculumTopicSchema } from './schema';

const rawPhysics10And11Topics: CurriculumTopic[] = [
  {
    id: 'phys10-kinematics-motion',
    subject: 'physics',
    grade: 10,
    chapter: 'Chương I (SGK Vật lí 10): Mô tả chuyển động & Động học chất điểm',
    topicName: 'Vận tốc, Gia tốc, Chuyển động thẳng biến đổi đều và Sự rơi tự do',
    learningObjectives: [
      'Phân biệt được độ dịch chuyển và quãng đường đi được trong chuyển động thẳng.',
      'Vận dụng thành thạo phương trình vận tốc, độ dịch chuyển và công thức liên hệ v^2 - v0^2 = 2ad của chuyển động thẳng biến đổi đều.',
      'Giải bài toán vật rơi tự do và ném thẳng đứng từ độ cao h.',
    ],
    keyFormulasAndRules: [
      {
        name: 'Hệ phương trình chuyển động thẳng biến đổi đều',
        latexOrRule: 'v = v_0 + at; \\quad d = v_0 t + \\frac{1}{2}at^2; \\quad v^2 - v_0^2 = 2ad',
        description: 'Chuyển động nhanh dần đều: a và v0 cùng dấu (a·v0 > 0); chuyển động chậm dần đều: a và v0 trái dấu (a·v0 < 0).',
      },
      {
        name: 'Công thức rơi tự do trong trọng trường',
        latexOrRule: 'v = gt; \\quad h = \\frac{1}{2}gt^2 \\implies v = \\sqrt{2gh}',
        description: 'Sự rơi tự do là chuyển động thẳng nhanh dần đều theo phương thẳng đứng với gia tốc rơi tự do g (thường lấy g = 9.8 m/s² hoặc 10 m/s²).',
      },
    ],
    workedExample: {
      problemStatement:
        'Một ô tô đang chạy với vận tốc $72\\text{ km/h}$ trên đoạn đường thẳng thì người lái xe phát hiện chướng ngại vật phía trước và hãm phanh khẩn cấp. Xe chuyển động chậm dần đều với độ lớn gia tốc $a = 4.0\\text{ m/s}^2$ cho đến khi dừng hẳn. Tính thời gian từ lúc hãm phanh đến khi xe dừng lại và quãng đường xe đã đi được trong thời gian hãm phanh.',
      logicReasoning:
        'Quy đổi vận tốc ban đầu về đơn vị chuẩn SI: $v_0 = 72\\text{ km/h} = 20\\text{ m/s}$. Vì xe chuyển động chậm dần đều theo chiều dương nên gia tốc mang dấu âm: $a = -4.0\\text{ m/s}^2$. Khi xe dừng hẳn thì vận tốc tức thời $v = 0$. Sử dụng phương trình vận tốc để tính thời gian $t$, sau đó áp dụng công thức độc lập với thời gian $v^2 - v_0^2 = 2ad$ để tính quãng đường dừng $d$.',
      steps: [
        'Bước 1 (Đổi đơn vị và tính thời gian hãm phanh): $$v_0 = \\frac{72}{3.6} = 20\\text{ m/s}; \\quad v = v_0 + at \\implies 0 = 20 + (-4.0)t \\implies t = \\frac{20}{4.0} = 5.0\\text{ s}$$',
        'Bước 2 (Tính quãng đường xe chạy trong thời gian hãm phanh): Sử dụng công thức liên hệ: $$v^2 - v_0^2 = 2ad \\implies 0^2 - 20^2 = 2(-4.0)d \\implies -400 = -8.0d \\implies d = \\frac{400}{8.0} = 50.0\\text{ m}$$',
      ],
      finalConclusion:
        'Thời gian hãm phanh cho đến khi xe dừng hẳn là $5.0\\text{ giây}$ và quãng đường xe đi được là $50.0\\text{ mét}$.',
    },
    commonPitfalls: [
      {
        mistake: 'Quên đổi đơn vị km/h sang m/s (hoặc chia nhầm thay vì nhân) trước khi áp dụng công thức chuyển động biến đổi đều.',
        correction: 'Luôn đổi 1 km/h = 1/3.6 m/s (ví dụ 36 km/h = 10 m/s; 54 km/h = 15 m/s; 72 km/h = 20 m/s) trước khi tính toán gia tốc và quãng đường.',
        explanation: 'Gia tốc đơn vị m/s² yêu cầu vận tốc phải theo đơn vị m/s và thời gian theo giây (s).',
      },
    ],
    sampleQuestionTemplates: [
      {
        questionText:
          'Một vật rơi tự do không vận tốc đầu từ độ cao $45\\text{ m}$ so với mặt đất tại nơi có $g = 10\\text{ m/s}^2$. Thời gian vật rơi chạm đất là bao nhiêu?',
        options: ['3.0\\text{ s}', '4.5\\text{ s}', '2.0\\text{ s}', '9.0\\text{ s}'],
        correctAnswer: '3.0\\text{ s}',
        detailedDerivation:
          'Áp dụng công thức rơi tự do: $h = \\frac{1}{2}gt^2 \\implies t = \\sqrt{\\frac{2h}{g}} = \\sqrt{\\frac{2 \\times 45}{10}} = \\sqrt{9} = 3.0\\text{ s}$.',
        cognitiveLevel: 'Nhận biết',
      },
      {
        questionText:
          'Đoàn tàu đang chuyển động với vận tốc $15\\text{ m/s}$ thì tăng tốc chuyển động nhanh dần đều với gia tốc $a = 0.5\\text{ m/s}^2$. Vận tốc của tàu sau $20\\text{ giây}$ kể từ lúc tăng tốc là bao nhiêu?',
        options: ['25\\text{ m/s}', '30\\text{ m/s}', '20\\text{ m/s}', '10\\text{ m/s}'],
        correctAnswer: '25\\text{ m/s}',
        detailedDerivation:
          'Vận tốc tại thời điểm $t = 20\\text{ s}$: $$v = v_0 + at = 15 + 0.5 \\times 20 = 15 + 10 = 25\\text{ m/s}$$',
        cognitiveLevel: 'Thông hiểu',
      },
      {
        questionText:
          'Một viên bi được thả rơi tự do không vận tốc đầu tại nơi có gia tốc trọng trường $g = 10\\text{ m/s}^2$. Quãng đường viên bi rơi được trong giây thứ $3$ bằng bao nhiêu?',
        options: ['25\\text{ m}', '45\\text{ m}', '20\\text{ m}', '15\\text{ m}'],
        correctAnswer: '25\\text{ m}',
        detailedDerivation:
          'Quãng đường rơi sau $3\\text{ s}$: $s_3 = \\frac{1}{2}g(3)^2 = 45\\text{ m}$. Quãng đường rơi sau $2\\text{ s}$: $s_2 = \\frac{1}{2}g(2)^2 = 20\\text{ m}$. Quãng đường rơi trong giây thứ $3$ là: $\\Delta s = s_3 - s_2 = 45 - 20 = 25\\text{ m}$.',
        cognitiveLevel: 'Vận dụng',
      },
    ],
  },
  {
    id: 'phys10-mechanics-energy-momentum',
    subject: 'physics',
    grade: 10,
    chapter: 'Chương II & III (SGK Vật lí 10): Động lực học & Bảo toàn năng lượng',
    topicName: 'Định luật II Newton, Định luật bảo toàn Cơ năng & Bảo toàn Động lượng',
    learningObjectives: [
      'Phân tích lực tác dụng lên vật trên mặt phẳng ngang và mặt phẳng nghiêng có ma sát bằng định luật II Newton.',
      'Vận dụng định lý động năng và định luật bảo toàn cơ năng trong trọng trường để tính vận tốc, độ cao cực đại.',
      'Giải bài toán va chạm mềm và va chạm đàn hồi bằng định luật bảo toàn động lượng.',
    ],
    keyFormulasAndRules: [
      {
        name: 'Định luật II Newton & Lực ma sát trượt',
        latexOrRule: '\\vec{F}_{\\text{hl}} = m\\vec{a}, \\quad F_{\\text{mst}} = \\mu_t N',
        description:
          'Trên mặt phẳng nghiêng góc α: phản lực N = mg cos α và thành phần trọng lực kéo xuống là P_x = mg sin α.',
      },
      {
        name: 'Định luật bảo toàn cơ năng & Định lý biến thiên cơ năng',
        latexOrRule: 'W = W_d + W_t = \\frac{1}{2}mv^2 + mgz = \\text{const}; \\quad W_2 - W_1 = A_{\\vec{F}_{\\text{không thế}}}',
        description:
          'Khi chỉ có trọng lực hoặc lực đàn hồi sinh công thì cơ năng bảo toàn; nếu có lực cản/ma sát thì độ biến thiên cơ năng bằng công của lực cản.',
      },
      {
        name: 'Định luật bảo toàn động lượng (Hệ cô lập)',
        latexOrRule: '\\vec{p}_1 + \\vec{p}_2 = \\vec{p}_1\' + \\vec{p}_2\' \\iff m_1\\vec{v}_1 + m_2\\vec{v}_2 = (m_1 + m_2)\\vec{V} \\; (\\text{va chạm mềm})',
        description:
          'Động lượng p = mv là đại lượng vectơ; khi chiếu lên trục tọa độ phải chú ý quy ước dấu theo chiều chuyển động.',
      },
    ],
    workedExample: {
      problemStatement:
        'Một vật nhỏ khối lượng $m = 1\\text{ kg}$ trượt không vận tốc đầu từ đỉnh một mặt phẳng nghiêng dài $s = 10\\text{ m}$, nghiêng góc $\\alpha = 30^\\circ$ so với phương ngang. Hệ số ma sát trượt giữa vật và mặt phẳng nghiêng là $\\mu = \\frac{\\sqrt{3}}{6}$. Lấy $g = 10\\text{ m/s}^2$. Tính vận tốc của vật tại chân mặt phẳng nghiêng.',
      logicReasoning:
        'Do có lực ma sát trượt sinh công âm, cơ năng không bảo toàn nhưng ta có thể áp dụng trực tiếp Định lý biến thiên cơ năng (hoặc Định lý động năng): độ biến thiên động năng bằng tổng công của trọng lực và lực ma sát trượt trên quãng đường $s$.',
      steps: [
        'Bước 1 (Phân tích phản lực và lực ma sát): Chiếu lên phương vuông góc với mặt nghiêng: $N = mg\\cos 30^\\circ = 1 \\cdot 10 \\cdot \\frac{\\sqrt{3}}{2} = 5\\sqrt{3}\\text{ N}$. Lực ma sát trượt có độ lớn $F_{\\text{mst}} = \\mu N = \\frac{\\sqrt{3}}{6} \\cdot 5\\sqrt{3} = 2{,}5\\text{ N}$.',
        'Bước 2 (Áp dụng định lý động năng): Công của trọng lực là $A_P = mgh = mgs\\sin 30^\\circ = 1 \\cdot 10 \\cdot 10 \\cdot 0{,}5 = 50\\text{ J}$. Công của lực ma sát là $A_{\\text{ms}} = -F_{\\text{mst}} \\cdot s = -2{,}5 \\cdot 10 = -25\\text{ J}$.',
        'Bước 3 (Tính vận tốc ở chân dốc): $$\\frac{1}{2}mv^2 - 0 = A_P + A_{\\text{ms}} = 50 - 25 = 25\\text{ J} \\implies v = \\sqrt{\\frac{2 \\cdot 25}{1}} = 5\\sqrt{2}\\text{ m/s} \\approx 7{,}07\\text{ m/s}$$',
      ],
      finalConclusion:
        'Vận tốc của vật tại chân mặt phẳng nghiêng là $v = 5\\sqrt{2}\\text{ m/s}$.',
    },
    commonPitfalls: [
      {
        mistake: 'Lấy phản lực N = mg ngay cả khi vật nằm trên mặt phẳng nghiêng hoặc khi lực kéo xiên góc.',
        correction: 'Luôn chiếu phương trình định luật II Newton lên phương vuông góc với mặt tiếp xúc để tìm đúng N trước khi tính F_mst = μN.',
        explanation:
          'Trên mặt phẳng nghiêng góc α không có lực xiên ngoài, phản lực chỉ bằng N = mg cos α.',
      },
    ],
    sampleQuestionTemplates: [
      {
        questionText:
          'Một vật có khối lượng $m = 500\\text{ g}$ được thả rơi tự do không vận tốc đầu từ độ cao $h = 20\\text{ m}$ so với mặt đất tại nơi có $g = 10\\text{ m/s}^2$. Bỏ qua sức cản không khí, động năng của vật ngay khi chạm đất bằng bao nhiêu?',
        options: ['W_d = 100\\text{ J}', 'W_d = 10000\\text{ J}', 'W_d = 50\\text{ J}', 'W_d = 20\\text{ J}'],
        correctAnswer: 'W_d = 100\\text{ J}',
        detailedDerivation:
          'Đổi $m = 500\\text{ g} = 0{,}5\\text{ kg}$. Theo định luật bảo toàn cơ năng (chọn gốc thế năng tại mặt đất), động năng khi chạm đất bằng thế năng cực đại ban đầu: $$W_d = W_{t\\max} = mgh = 0{,}5 \\cdot 10 \\cdot 20 = 100\\text{ J}$$',
        cognitiveLevel: 'Nhận biết',
      },
      {
        questionText:
          'Một viên đạn khối lượng $m_1 = 20\\text{ g}$ bay theo phương ngang với vận tốc $v_1 = 300\\text{ m/s}$ xuyên vào một bao cát khối lượng $m_2 = 5{,}98\\text{ kg}$ đang nằm yên trên mặt sàn ngang nhẵn và nằm lại trong bao cát. Vận tốc của bao cát ngay sau khi đạn găm vào là bao nhiêu?',
        options: ['V = 1{,}0\\text{ m/s}', 'V = 1{,}5\\text{ m/s}', 'V = 0{,}5\\text{ m/s}', 'V = 2{,}0\\text{ m/s}'],
        correctAnswer: 'V = 1{,}0\\text{ m/s}',
        detailedDerivation:
          'Đổi $m_1 = 0{,}02\\text{ kg}$. Đây là va chạm mềm theo phương ngang nên động lượng bảo toàn: $$m_1 v_1 = (m_1 + m_2)V \\implies V = \\frac{0{,}02 \\cdot 300}{0{,}02 + 5{,}98} = \\frac{6}{6} = 1{,}0\\text{ m/s}$$',
        cognitiveLevel: 'Thông hiểu',
      },
      {
        questionText:
          'Một ô tô khối lượng $1{,}2\\text{ tấn}$ đang chạy với tốc độ $72\\text{ km/h}$ trên đường ngang thì hãm phanh trượt thẳng đều chậm dần và dừng hẳn sau khi trượt được $40\\text{ m}$. Lấy $g = 10\\text{ m/s}^2$. Hệ số ma sát trượt giữa lốp xe và mặt đường bằng bao nhiêu?',
        options: ['\\mu = 0{,}50', '\\mu = 0{,}25', '\\mu = 0{,}40', '\\mu = 0{,}65'],
        correctAnswer: '\\mu = 0{,}50',
        detailedDerivation:
          'Đổi $v_0 = 72\\text{ km/h} = 20\\text{ m/s}$. Áp dụng định lý động năng trên đoạn đường trượt $s = 40\\text{ m}$: $$0 - \\frac{1}{2}mv_0^2 = -\\mu mgs \\implies \\mu = \\frac{v_0^2}{2gs} = \\frac{20^2}{2 \\cdot 10 \\cdot 40} = \\frac{400}{800} = 0{,}50$$',
        cognitiveLevel: 'Vận dụng',
      },
      {
        questionText:
          'Con lắc đơn có chiều dài $\\ell = 1{,}0\\text{ m}$, vật nặng khối lượng $m = 200\\text{ g}$ tại nơi có $g = 10\\text{ m/s}^2$. Kéo con lắc lệch khỏi vị trí cân bằng góc $\\alpha_0 = 60^\\circ$ rồi thả nhẹ. Lực căng dây $T$ khi vật đi qua vị trí cân bằng có độ lớn bằng bao nhiêu?',
        options: ['T = 4\\text{ N}', 'T = 2\\text{ N}', 'T = 6\\text{ N}', 'T = 3\\text{ N}'],
        correctAnswer: 'T = 4\\text{ N}',
        detailedDerivation:
          'Đổi $m = 0{,}2\\text{ kg}$. Bảo toàn cơ năng cho vận tốc tại vị trí cân bằng: $v_{\\max}^2 = 2g\\ell(1 - \\cos\\alpha_0)$. Hợp lực hướng tâm tại vị trí cân bằng: $$T - mg = \\frac{mv_{\\max}^2}{\\ell} \\implies T = mg(3 - 2\\cos 60^\\circ) = 0{,}2 \\cdot 10 \\cdot (3 - 2 \\cdot 0{,}5) = 4\\text{ N}$$',
        cognitiveLevel: 'Vận dụng cao',
      },
    ],
  },
  {
    id: 'phys11-oscillations-waves-electricity',
    subject: 'physics',
    grade: 11,
    chapter: 'Chương I & II (SGK Vật lí 11): Dao động điều hòa & Sóng cơ',
    topicName: 'Dao động điều hòa, Giao thoa sóng cơ - Sóng dừng & Định luật Ohm cho toàn mạch',
    learningObjectives: [
      'Xác định biên độ, chu kỳ, tần số, pha dao động và sử dụng hệ thức độc lập thời gian giữa x, v, a.',
      'Giải bài toán số cực đại, cực tiểu trong giao thoa sóng cơ hai nguồn cùng pha và điều kiện sóng dừng trên dây.',
      'Vận dụng định luật Ohm cho toàn mạch và bài toán công suất cực đại trên biến trở ngoài.',
    ],
    keyFormulasAndRules: [
      {
        name: 'Hệ thức độc lập với thời gian trong dao động điều hòa',
        latexOrRule: 'x = A\\cos(\\omega t + \\varphi), \\quad A^2 = x^2 + \\frac{v^2}{\\omega^2}, \\quad a = -\\omega^2 x',
        description:
          'Vận tốc sớm pha π/2 so với li độ x; gia tốc ngược pha với li độ x và luôn hướng về vị trí cân bằng.',
      },
      {
        name: 'Điều kiện cực đại - cực tiểu giao thoa (Hai nguồn cùng pha) & Sóng dừng',
        latexOrRule: 'd_2 - d_1 = k\\lambda \\; (\\text{cực đại}), \\quad d_2 - d_1 = \\left(k + \\frac{1}{2}\\right)\\lambda \\; (\\text{cực tiểu}), \\quad \\ell = k\\frac{\\lambda}{2} \\; (\\text{2 đầu cố định})',
        description:
          'Số cực đại trên đoạn nối hai nguồn cùng pha S₁S₂ (không tính hai nguồn) thỏa mãn -S₁S₂/λ < k < S₁S₂/λ.',
      },
      {
        name: 'Định luật Ohm cho toàn mạch & Hiệu suất nguồn điện',
        latexOrRule: 'I = \\frac{\\mathcal{E}}{R_N + r}, \\quad U_N = \\mathcal{E} - Ir, \\quad H = \\frac{U_N}{\\mathcal{E}} = \\frac{R_N}{R_N + r}',
        description:
          'Công suất mạch ngoài P_N = I^2 R_N đạt cực đại P_max = E^2 / (4r) khi điện trở mạch ngoài R_N = r.',
      },
    ],
    workedExample: {
      problemStatement:
        'Trên mặt nước có hai nguồn kết hợp $S_1, S_2$ cách nhau $S_1S_2 = 13\\text{ cm}$ dao động điều hòa theo phương thẳng đứng với cùng phương trình $u = 2\\cos(40\\pi t)\\text{ (mm)}$. Tốc độ truyền sóng trên mặt nước là $v = 40\\text{ cm/s}$. Tìm số điểm dao động với biên độ cực đại trên đoạn thẳng $S_1S_2$.',
      logicReasoning:
        'Hai nguồn dao động cùng pha nên trung trực của $S_1S_2$ là một vân cực đại bậc $k = 0$. Bước sóng $\\lambda = \\frac{v}{f}$ cho phép xác định số giá trị nguyên của $k$ thỏa mãn bất đẳng thức $-\\frac{S_1S_2}{\\lambda} < k < \\frac{S_1S_2}{\\lambda}$.',
      steps: [
        'Bước 1 (Tính tần số và bước sóng): Từ $\\omega = 40\\pi\\text{ rad/s} \\implies f = \\frac{\\omega}{2\\pi} = 20\\text{ Hz}$. Bước sóng là $\\lambda = \\frac{v}{f} = \\frac{40}{20} = 2\\text{ cm}$.',
        'Bước 2 (Thiết lập điều kiện cực đại trên đoạn $S_1S_2$): $$-\\frac{S_1S_2}{\\lambda} < k < \\frac{S_1S_2}{\\lambda} \\iff -\\frac{13}{2} < k < \\frac{13}{2} \\iff -6{,}5 < k < 6{,}5$$',
        'Bước 3 (Đếm số giá trị nguyên của $k$): Vì $k \\in \\mathbb{Z}$ nên $k \\in \\{-6, -5, \\dots, 0, \\dots, 5, 6\\}$, tức là có $2 \\times 6 + 1 = 13$ điểm cực đại.',
      ],
      finalConclusion:
        'Trên đoạn thẳng $S_1S_2$ có tất cả $13$ điểm dao động với biên độ cực đại.',
    },
    commonPitfalls: [
      {
        mistake: 'Dùng dấu "≤" thay vì "<" khi tìm số cực đại giao thoa trên đoạn thẳng nối hai nguồn S₁S₂.',
        correction: 'Hai nguồn S₁, S₂ là nơi đặt bộ phận kích thích dao động nên không được tính là điểm cực đại giao thoa; luôn dùng dấu "<" nghiêm ngặt.',
        explanation:
          'Nếu S₁S₂ chia hết cho λ, hai đầu mút trùng với vị trí nguồn nên phải loại bỏ.',
      },
    ],
    sampleQuestionTemplates: [
      {
        questionText:
          'Một chất điểm dao động điều hòa với tần số góc $\\omega = 10\\text{ rad/s}$. Khi chất điểm qua vị trí có li độ $x = 3\\text{ cm}$ thì tốc độ của nó là $v = 40\\text{ cm/s}$. Biên độ dao động $A$ của chất điểm bằng bao nhiêu?',
        options: ['A = 5\\text{ cm}', 'A = 7\\text{ cm}', 'A = 4\\text{ cm}', 'A = 50\\text{ cm}'],
        correctAnswer: 'A = 5\\text{ cm}',
        detailedDerivation:
          'Áp dụng hệ thức độc lập với thời gian giữa li độ và vận tốc: $$A = \\sqrt{x^2 + \\frac{v^2}{\\omega^2}} = \\sqrt{3^2 + \\left(\\frac{40}{10}\\right)^2} = \\sqrt{9 + 16} = 5\\text{ cm}$$',
        cognitiveLevel: 'Nhận biết',
      },
      {
        questionText:
          'Một sợi dây đàn hồi dài $\\ell = 1{,}2\\text{ m}$ có hai đầu cố định. Khi kích thích cho dây dao động với tần số $f = 50\\text{ Hz}$, trên dây hình thành sóng dừng với $4$ bụng sóng. Tốc độ truyền sóng trên dây bằng bao nhiêu?',
        options: ['v = 30\\text{ m/s}', 'v = 60\\text{ m/s}', 'v = 15\\text{ m/s}', 'v = 24\\text{ m/s}'],
        correctAnswer: 'v = 30\\text{ m/s}',
        detailedDerivation:
          'Dây hai đầu cố định có $k = 4$ bụng sóng: $$\\ell = k\\frac{\\lambda}{2} \\implies \\lambda = \\frac{2\\ell}{k} = \\frac{2 \\cdot 1{,}2}{4} = 0{,}6\\text{ m}$$. Suy ra tốc độ truyền sóng $v = \\lambda f = 0{,}6 \\cdot 50 = 30\\text{ m/s}$.',
        cognitiveLevel: 'Thông hiểu',
      },
      {
        questionText:
          'Cho mạch điện kín gồm nguồn điện có suất điện động $\\mathcal{E} = 12\\text{ V}$, điện trở trong $r = 2\\text{ }\\Omega$ mắc với biến trở $R$ ở mạch ngoài. Điều chỉnh $R$ để công suất tiêu thụ trên biến trở đạt cực đại. Giá trị công suất cực đại $P_{\\max}$ đó bằng bao nhiêu?',
        options: ['P_{\\max} = 18\\text{ W}', 'P_{\\max} = 36\\text{ W}', 'P_{\\max} = 24\\text{ W}', 'P_{\\max} = 12\\text{ W}'],
        correctAnswer: 'P_{\\max} = 18\\text{ W}',
        detailedDerivation:
          'Công suất mạch ngoài $P = I^2 R = \\frac{\\mathcal{E}^2 R}{(R + r)^2} = \\frac{\\mathcal{E}^2}{\\left(\\sqrt{R} + \\frac{r}{\\sqrt{R}}\\right)^2}$. Theo bất đẳng thức Cauchy, $P$ đạt cực đại khi $R = r = 2\\text{ }\\Omega$, với giá trị: $$P_{\\max} = \\frac{\\mathcal{E}^2}{4r} = \\frac{12^2}{4 \\cdot 2} = \\frac{144}{8} = 18\\text{ W}$$',
        cognitiveLevel: 'Vận dụng',
      },
      {
        questionText:
          'Con lắc lò xo treo thẳng đứng tại nơi có $g = \\pi^2 = 10\\text{ m/s}^2$. Tại vị trí cân bằng, lò xo giãn một đoạn $\\Delta \\ell_0 = 4\\text{ cm}$. Kéo vật xuống dưới vị trí cân bằng theo phương thẳng đứng $8\\text{ cm}$ rồi thả nhẹ. Trong một chu kỳ dao động, thời gian lò xo bị nén bằng bao nhiêu?',
        options: ['\\frac{2}{15}\\text{ s}', '\\frac{1}{15}\\text{ s}', '\\frac{4}{15}\\text{ s}', '\\frac{1}{5}\\text{ s}'],
        correctAnswer: '\\frac{2}{15}\\text{ s}',
        detailedDerivation:
          'Chu kỳ dao động: $T = 2\\pi\\sqrt{\\frac{\\Delta \\ell_0}{g}} = 2\\pi\\sqrt{\\frac{0{,}04}{\\pi^2}} = 0{,}4\\text{ s}$. Biên độ $A = 8\\text{ cm} = 2\\Delta\\ell_0$. Chọn chiều dương hướng xuống, lò xo bị nén khi vật ở phía trên vị trí lò xo không biến dạng ($x < -\\Delta\\ell_0 = -\\frac{A}{2}$). Góc quét trên đường tròn lượng giác ứng với $x \\in [-A; -A/2]$ là $\\Delta\\varphi = 2 \\cdot \\frac{\\pi}{3} = \\frac{2\\pi}{3}$. Vậy thời gian lò xo nén trong 1 chu kỳ là $t_{\\text{nén}} = \\frac{\\Delta\\varphi}{2\\pi}T = \\frac{1}{3} \\cdot 0{,}4 = \\frac{2}{15}\\text{ s}$.',
        cognitiveLevel: 'Vận dụng cao',
      },
    ],
  },
];

const rawChemistry10And11Topics: CurriculumTopic[] = [
  {
    id: 'chem10-redox-thermochemistry',
    subject: 'chemistry',
    grade: 10,
    chapter: 'Chương IV & V (SGK Hóa học 10): Phản ứng oxi hóa - khử & Năng lượng hóa học',
    topicName: 'Bảo toàn Electron trong phản ứng Oxi hóa - Khử & Biến thiên Enthalpy chuẩn',
    learningObjectives: [
      'Xác định nhanh số oxi hóa và giải bài toán kim loại tác dụng với dung dịch acid loại 2 (HNO3, H2SO4 đặc) bằng định luật bảo toàn electron.',
      'Tính biến thiên enthalpy chuẩn của phản ứng dựa trên nhiệt tạo thành chuẩn hoặc năng lượng liên kết.',
      'Phân biệt phản ứng tỏa nhiệt (Δ_r H°_298 < 0) và phản ứng thu nhiệt (Δ_r H°_298 > 0).',
    ],
    keyFormulasAndRules: [
      {
        name: 'Định luật Bảo toàn Electron',
        latexOrRule: '\\sum n_{e\\text{ nhường}} = \\sum n_{e\\text{ nhận}} \\quad (\\text{Ví dụ với } \\text{HNO}_3: \\; \\sum n \\cdot n_{\\text{KL}} = n_{\\text{NO}_2} + 3n_{\\text{NO}} + 8n_{\\text{N}_2\\text{O}} + 10n_{\\text{N}_2} + 8n_{\\text{NH}_4\\text{NO}_3})',
        description:
          'Tổng số mol electron chất khử nhường luôn bằng tổng số mol electron chất oxi hóa nhận trong toàn bộ quá trình.',
      },
      {
        name: 'Biến thiên Enthalpy chuẩn theo Nhiệt tạo thành & Năng lượng liên kết',
        latexOrRule: '\\Delta_r H^\\circ_{298} = \\sum \\Delta_f H^\\circ_{298}(\\text{sản phẩm}) - \\sum \\Delta_f H^\\circ_{298}(\\text{chất đầu}) = \\sum E_b(\\text{chất đầu}) - \\sum E_b(\\text{sản phẩm})',
        description:
          'Chú ý: Tính theo nhiệt tạo thành Δ_f H° thì lấy (Sản phẩm − Chất đầu); tính theo năng lượng liên kết E_b (ở thể khí) thì lấy (Chất đầu − Sản phẩm).',
      },
    ],
    workedExample: {
      problemStatement:
        'Hòa tan hoàn toàn $11{,}2\\text{ g}$ sắt ($\\text{Fe}$) vào dung dịch $\\text{HNO}_3$ loãng dư, thu được dung dịch $X$ và $V$ lít khí $\\text{NO}$ (ở đkc $25^\\circ\\text{C}, 1\\text{ bar}$ là sản phẩm khử duy nhất). Tính giá trị của $V$.',
      logicReasoning:
        'Vì $\\text{HNO}_3$ dư nên sắt bị oxi hóa lên mức cao nhất là $\\text{Fe}^{3+}$ (nhường $3e$), còn $\\text{N}^{+5}$ nhận $3e$ về $\\text{N}^{+2}$ ($\\text{NO}$). Bảo toàn electron giúp tìm ngay số mol $\\text{NO}$ mà không cần viết phương trình phân tử.',
      steps: [
        'Bước 1 (Tính số mol Fe): $n_{\\text{Fe}} = \\frac{11{,}2}{56} = 0{,}2\\text{ mol}$.',
        'Bước 2 (Áp dụng bảo toàn electron): Quá trình nhường nhận electron: $\\text{Fe}^0 \\to \\text{Fe}^{+3} + 3e$ và $\\text{N}^{+5} + 3e \\to \\text{N}^{+2}$ ($\\text{NO}$). Suy ra $3n_{\\text{Fe}} = 3n_{\\text{NO}} \\implies n_{\\text{NO}} = n_{\\text{Fe}} = 0{,}2\\text{ mol}$.',
        'Bước 3 (Tính thể tích ở đkc): Ở điều kiện chuẩn ($25^\\circ\\text{C}, 1\\text{ bar}$), $1\\text{ mol}$ khí chiếm $24{,}79\\text{ L}$: $$V = 0{,}2 \\times 24{,}79 = 4{,}958\\text{ L}$$',
      ],
      finalConclusion:
        'Thể tích khí $\\text{NO}$ thu được ở điều kiện chuẩn là $V = 4{,}958\\text{ L}$.',
    },
    commonPitfalls: [
      {
        mistake: 'Nhầm lẫn công thức tính Δ_r H° theo nhiệt tạo thành Δ_f H° và theo năng lượng liên kết E_b.',
        correction: 'Nhiệt tạo thành: (Sản phẩm − Chất đầu); Năng lượng liên kết: (Chất đầu − Sản phẩm). Cả đơn chất bền đều có Δ_f H°_298 = 0.',
        explanation:
          'Phá vỡ liên kết ở chất đầu cần thu năng lượng (+E_b), còn hình thành liên kết ở sản phẩm giải phóng năng lượng (−E_b).',
      },
    ],
    sampleQuestionTemplates: [
      {
        questionText:
          'Cho phản ứng tổng hợp ammonia: $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$ có $\\Delta_r H^\\circ_{298} = -91{,}8\\text{ kJ}$. Nhiệt tạo thành chuẩn $\\Delta_f H^\\circ_{298}$ của $\\text{NH}_3(g)$ bằng bao nhiêu?',
        options: ['-45{,}9\\text{ kJ/mol}', '+45{,}9\\text{ kJ/mol}', '-91{,}8\\text{ kJ/mol}', '-183{,}6\\text{ kJ/mol}'],
        correctAnswer: '-45{,}9\\text{ kJ/mol}',
        detailedDerivation:
          'Vì $\\text{N}_2(g)$ và $\\text{H}_2(g)$ là các đơn chất bền ở điều kiện chuẩn nên $\\Delta_f H^\\circ_{298} = 0$. Ta có: $$\\Delta_r H^\\circ_{298} = 2\\Delta_f H^\\circ_{298}(\\text{NH}_3) = -91{,}8\\text{ kJ} \\implies \\Delta_f H^\\circ_{298}(\\text{NH}_3) = \\frac{-91{,}8}{2} = -45{,}9\\text{ kJ/mol}$$',
        cognitiveLevel: 'Nhận biết',
      },
      {
        questionText:
          'Cho năng lượng liên kết ở điều kiện chuẩn: $E_b(\\text{H-H}) = 436\\text{ kJ/mol}$, $E_b(\\text{Cl-Cl}) = 243\\text{ kJ/mol}$, $E_b(\\text{H-Cl}) = 432\\text{ kJ/mol}$. Biến thiên enthalpy chuẩn $\\Delta_r H^\\circ_{298}$ của phản ứng $\\text{H}_2(g) + \\text{Cl}_2(g) \\to 2\\text{HCl}(g)$ là bao nhiêu?',
        options: ['-185\\text{ kJ}', '+185\\text{ kJ}', '-247\\text{ kJ}', '+247\\text{ kJ}'],
        correctAnswer: '-185\\text{ kJ}',
        detailedDerivation:
          'Áp dụng công thức tính biến thiên enthalpy chuẩn theo năng lượng liên kết: $$\\Delta_r H^\\circ_{298} = \\sum E_b(\\text{chất đầu}) - \\sum E_b(\\text{sản phẩm}) = (436 + 243) - 2 \\times 432 = 679 - 864 = -185\\text{ kJ}$$',
        cognitiveLevel: 'Thông hiểu',
      },
      {
        questionText:
          'Hòa tan hoàn toàn $14{,}8\\text{ g}$ hỗn hợp gồm $\\text{Fe}$ và $\\text{Cu}$ vào lượng dư dung dịch $\\text{H}_2\\text{SO}_4$ đặc, nóng thu được $7{,}437\\text{ L}$ khí $\\text{SO}_2$ (sản phẩm khử duy nhất, ở đkc $25^\\circ\\text{C}, 1\\text{ bar}$). Khối lượng của $\\text{Fe}$ trong hỗn hợp ban đầu là bao nhiêu?',
        options: ['5{,}6\\text{ g}', '8{,}4\\text{ g}', '9{,}2\\text{ g}', '6{,}4\\text{ g}'],
        correctAnswer: '5{,}6\\text{ g}',
        detailedDerivation:
          'Số mol $\\text{SO}_2$ là $n_{\\text{SO}_2} = \\frac{7{,}437}{24{,}79} = 0{,}3\\text{ mol}$. Gọi $x, y$ lần lượt là số mol $\\text{Fe}$ và $\\text{Cu}$. Ta có hệ phương trình khối lượng và bảo toàn electron: $$\\begin{cases} 56x + 64y = 14{,}8 \\\\ 3x + 2y = 2n_{\\text{SO}_2} = 0{,}6 \\end{cases} \\iff \\begin{cases} x = 0{,}1 \\\\ y = 0{,}14375 \\end{cases}$$. Suy ra $m_{\\text{Fe}} = 0{,}1 \\times 56 = 5{,}6\\text{ g}$.',
        cognitiveLevel: 'Vận dụng',
      },
      {
        questionText:
          'Hòa tan hoàn toàn $3{,}6\\text{ g}$ $\\text{Mg}$ bằng dung dịch $\\text{HNO}_3$ loãng dư, sau phản ứng thu được $1{,}9832\\text{ L}$ khí $\\text{NO}$ (ở đkc $25^\\circ\\text{C}, 1\\text{ bar}$) và dung dịch $X$. Cô cạn cẩn thận dung dịch $X$ thu được bao nhiêu gam muối khan?',
        options: ['22{,}8\\text{ g}', '22{,}2\\text{ g}', '23{,}8\\text{ g}', '21{,}4\\text{ g}'],
        correctAnswer: '22{,}8\\text{ g}',
        detailedDerivation:
          'Ta có $n_{\\text{Mg}} = \\frac{3{,}6}{24} = 0{,}15\\text{ mol} \\implies n_{e\\text{ nhường}} = 2n_{\\text{Mg}} = 0{,}30\\text{ mol}$. Số mol $\\text{NO}$ là $n_{\\text{NO}} = \\frac{1{,}9832}{24{,}79} = 0{,}08\\text{ mol}$, số mol electron nhận tạo $\\text{NO}$ là $3 \\times 0{,}08 = 0{,}24\\text{ mol} < 0{,}30\\text{ mol}$. Vậy trong dung dịch $X$ có tạo muối $\\text{NH}_4\\text{NO}_3$: bảo toàn electron $8n_{\\text{NH}_4\\text{NO}_3} = 0{,}30 - 0{,}24 = 0{,}06 \\implies n_{\\text{NH}_4\\text{NO}_3} = 0{,}0075\\text{ mol}$. Khối lượng muối khan thu được là: $$m = m_{\\text{Mg(NO}_3)_2} + m_{\\text{NH}_4\\text{NO}_3} = 0{,}15 \\times 148 + 0{,}0075 \\times 80 = 22{,}2 + 0{,}6 = 22{,}8\\text{ g}$$',
        cognitiveLevel: 'Vận dụng cao',
      },
    ],
  },
  {
    id: 'chem11-equilibrium-ph-organic',
    subject: 'chemistry',
    grade: 11,
    chapter: 'Chương I & IV (SGK Hóa học 11): Cân bằng hóa học & Dẫn xuất Hydrocarbon',
    topicName: 'Nguyên lý Le Chatelier, Thuyết acid-base Brønsted-Lowry, pH & Dẫn xuất Hydrocarbon',
    learningObjectives: [
      'Vận dụng nguyên lý chuyển dịch cân bằng Le Chatelier để dự đoán chiều chuyển dịch khi thay đổi nồng độ, áp suất, nhiệt độ.',
      'Xác định acid, base theo thuyết Brønsted–Lowry và tính pH của dung dịch acid mạnh, base mạnh hoặc bài toán trung hòa.',
      'Nắm vững tính chất hóa học đặc trưng của Hydrocarbon, Alcohol, Aldehyde – Ketone và Carboxylic acid (chuẩn danh pháp IUPAC).',
    ],
    keyFormulasAndRules: [
      {
        name: 'Hằng số cân bằng K_C & Định nghĩa pH dung dịch',
        latexOrRule: 'K_C = \\frac{[C]^c [D]^d}{[A]^a [B]^b}, \\quad \\text{pH} = -\\log[\\text{H}^+], \\quad \\text{pH} + \\text{pOH} = 14 \\; (25^\\circ\\text{C})',
        description:
          'Chất rắn nguyên chất không có mặt trong biểu thức K_C; hằng số K_C chỉ phụ thuộc vào bản chất phản ứng và nhiệt độ T.',
      },
      {
        name: 'Oxi hóa Alcohol & Phản ứng tráng bạc của Aldehyde',
        latexOrRule: 'R\\text{-CH}_2\\text{OH} + \\text{CuO} \\xrightarrow{t^\\circ} R\\text{-CHO} + \\text{Cu} + \\text{H}_2\\text{O}; \\quad R\\text{-CHO} \\xrightarrow{+\\text{AgNO}_3/\\text{NH}_3} 2\\text{Ag} \\; (\\text{riêng HCHO} \\to 4\\text{Ag})',
        description:
          'Alcohol bậc I oxi hóa bởi CuO tạo aldehyde; alcohol bậc II tạo ketone; alcohol bậc III không bị oxi hóa bởi CuO đun nóng.',
      },
    ],
    workedExample: {
      problemStatement:
        'Trộn $200\\text{ mL}$ dung dịch $\\text{HCl}$ $0{,}15\\text{ M}$ với $300\\text{ mL}$ dung dịch $\\text{NaOH}$ $0{,}15\\text{ M}$. Tính $\\text{pH}$ của dung dịch thu được sau phản ứng ở $25^\\circ\\text{C}$ (coi thể tích dung dịch sau khi trộn bằng tổng thể tích hai dung dịch ban đầu).',
      logicReasoning:
        'Trong bài toán trộn dung dịch acid mạnh với base mạnh, ta phải tính số mol $\\text{H}^+$ và $\\text{OH}^-$ ban đầu, thực hiện phản ứng bản chất $\\text{H}^+ + \\text{OH}^- \\to \\text{H}_2\\text{O}$, xác định ion nào còn dư và chia cho tổng thể tích $V_{\\text{tổng}} = V_1 + V_2$.',
      steps: [
        'Bước 1 (Tính số mol $\\text{H}^+$ và $\\text{OH}^-$): $n_{\\text{H}^+} = 0{,}2 \\times 0{,}15 = 0{,}030\\text{ mol}$; $n_{\\text{OH}^-} = 0{,}3 \\times 0{,}15 = 0{,}045\\text{ mol}$.',
        'Bước 2 (Xác định lượng dư sau phản ứng $\\text{H}^+ + \\text{OH}^- \\to \\text{H}_2\\text{O}$): Ion $\\text{OH}^-$ dư với số mol $n_{\\text{OH}^-\\text{ dư}} = 0{,}045 - 0{,}030 = 0{,}015\\text{ mol}$ trong tổng thể tích $V = 0{,}2 + 0{,}3 = 0{,}5\\text{ L}$.',
        'Bước 3 (Tính nồng độ và $\\text{pH}$): $$[\\text{OH}^-_{\\text{dư}}] = \\frac{0{,}015}{0{,}5} = 0{,}03\\text{ M} \\implies \\text{pOH} = -\\log(0{,}03) \\approx 1{,}52 \\implies \\text{pH} = 14 - 1{,}52 = 12{,}48$$',
      ],
      finalConclusion:
        'Giá trị $\\text{pH}$ của dung dịch thu được sau khi trộn là $12{,}48$.',
    },
    commonPitfalls: [
      {
        mistake: 'Khi tăng áp suất chung, kết luận mọi cân bằng đều chuyển dịch mà quên kiểm tra chênh lệch số mol khí Δn_khí.',
        correction: 'Nếu tổng số mol khí hai vế bằng nhau (ví dụ H2(g) + I2(g) ⇌ 2HI(g)), việc thay đổi áp suất KHÔNG làm chuyển dịch cân bằng.',
        explanation:
          'Áp suất chỉ ảnh hưởng đến các cân bằng có sự thay đổi tổng số mol khí giữa hai vế phương trình.',
      },
    ],
    sampleQuestionTemplates: [
      {
        questionText:
          'Theo thuyết acid–base của Brønsted–Lowry, trong phản ứng thuận nghịch: $\\text{NH}_3 + \\text{H}_2\\text{O} \\rightleftharpoons \\text{NH}_4^+ + \\text{OH}^-$, phân tử $\\text{H}_2\\text{O}$ đóng vai trò là gì?',
        options: ['Là một acid (nhường proton H+)', 'Là một base (nhận proton H+)', 'Là chất oxi hóa', 'Là môi trường trung tính không nhường nhận H+'],
        correctAnswer: 'Là một acid (nhường proton H+)',
        detailedDerivation:
          'Theo thuyết Brønsted–Lowry, acid là chất nhường proton ($\\text{H}^+$), base là chất nhận proton ($\\text{H}^+$). Trong chiều thuận, $\\text{H}_2\\text{O}$ nhường $1$ proton $\\text{H}^+$ cho $\\text{NH}_3$ để tạo thành $\\text{OH}^-$ và $\\text{NH}_4^+$, nên $\\text{H}_2\\text{O}$ đóng vai trò là acid.',
        cognitiveLevel: 'Nhận biết',
      },
      {
        questionText:
          'Cho cân bằng hóa học trong bình kín: $2\\text{SO}_2(g) + \\text{O}_2(g) \\rightleftharpoons 2\\text{SO}_3(g)$ có $\\Delta_r H^\\circ_{298} < 0$. Tác động nào sau đây làm cân bằng chuyển dịch theo chiều thuận?',
        options: [
          'Hạ nhiệt độ và tăng áp suất chung của hệ',
          'Tăng nhiệt độ và giảm áp suất chung của hệ',
          'Thêm chất xúc tác V2O5 vào hệ ở nhiệt độ không đổi',
          'Tăng nhiệt độ và giữ nguyên áp suất',
        ],
        correctAnswer: 'Hạ nhiệt độ và tăng áp suất chung của hệ',
        detailedDerivation:
          'Chiều thuận là chiều tỏa nhiệt ($\\Delta_r H^\\circ_{298} < 0$) và làm giảm số mol khí (từ $3\\text{ mol}$ khí xuống $2\\text{ mol}$ khí). Theo nguyên lý Le Chatelier, hạ nhiệt độ và tăng áp suất chung đều làm cân bằng chuyển dịch theo chiều thuận.',
        cognitiveLevel: 'Thông hiểu',
      },
      {
        questionText:
          'Đốt cháy hoàn toàn $0{,}2\\text{ mol}$ một alcohol no, đơn chức, mạch hở $X$ cần vừa đủ $0{,}6\\text{ mol}$ khí $\\text{O}_2$, thu được $\\text{CO}_2$ và $\\text{H}_2\\text{O}$. Công thức phân tử của alcohol $X$ là gì?',
        options: ['C2H5OH', 'CH3OH', 'C3H7OH', 'C4H9OH'],
        correctAnswer: 'C2H5OH',
        detailedDerivation:
          'Phương trình cháy của alcohol no, đơn chức, mạch hở $\\text{C}_n\\text{H}_{2n+2}\\text{O}$: $$\\text{C}_n\\text{H}_{2n+2}\\text{O} + \\frac{3n}{2}\\text{O}_2 \\xrightarrow{t^\\circ} n\\text{CO}_2 + (n+1)\\text{H}_2\\text{O}$$. Ta có $\\frac{n_{\\text{O}_2}}{n_X} = \\frac{3n}{2} = \\frac{0{,}6}{0{,}2} = 3 \\implies n = 2$. Vậy công thức của $X$ là $\\text{C}_2\\text{H}_5\\text{OH}$ (ethanol).',
        cognitiveLevel: 'Vận dụng',
      },
      {
        questionText:
          'Cho $8{,}8\\text{ g}$ hỗn hợp hai aldehyde đơn chức kế tiếp nhau trong dãy đồng đẳng của formaldehyde tác dụng hoàn toàn với lượng dư dung dịch $\\text{AgNO}_3/\\text{NH}_3$ đun nóng, thu được $64{,}8\\text{ g}$ kết tủa bạc ($\\text{Ag}$). Hai aldehyde đó là gì?',
        options: ['HCHO và CH3CHO', 'CH3CHO và C2H5CHO', 'C2H5CHO và C3H7CHO', 'HCHO và C2H3CHO'],
        correctAnswer: 'HCHO và CH3CHO',
        detailedDerivation:
          'Ta có $n_{\\text{Ag}} = \\frac{64{,}8}{108} = 0{,}6\\text{ mol}$. Nếu hai aldehyde đều không phải $\\text{HCHO}$ thì $n_{\\text{hh}} = \\frac{1}{2}n_{\\text{Ag}} = 0{,}3\\text{ mol} \\implies \\bar{M} = \\frac{8{,}8}{0{,}3} = 29{,}33 < 30$ (vô lý vì $\\text{HCHO}$ nhỏ nhất đã là $30$). Vậy hỗn hợp gồm $\\text{HCHO}$ ($x\\text{ mol}$, cho $4\\text{Ag}$) và $\\text{CH}_3\\text{CHO}$ ($y\\text{ mol}$, cho $2\\text{Ag}$): $$\\begin{cases} 30x + 44y = 8{,}8 \\\\ 4x + 2y = 0{,}6 \\end{cases} \\iff \\begin{cases} x = 0{,}1\\text{ mol} \\\\ y = 0{,}1\\text{ mol} \\end{cases}$$ hoàn toàn thỏa mãn.',
        cognitiveLevel: 'Vận dụng cao',
      },
    ],
  },
];

const rawEnglish10And11Topics: CurriculumTopic[] = [
  {
    id: 'eng10-passive-conditionals-relatives',
    subject: 'english',
    grade: 10,
    chapter: 'Unit 6–8 (SGK Tiếng Anh 10 Global Success): Passive Voice, Conditionals & Relative Clauses',
    topicName: 'Bị động khách quan (It is said that / S is said to...), Câu điều kiện hỗn hợp & Mệnh đề quan hệ',
    learningObjectives: [
      'Chuyển đổi nhuần nhuyễn câu bị động với các động từ tường thuật (say, think, believe, report, rumour) ở cùng thời và lệch thời.',
      'Phân biệt câu điều kiện loại 1, 2, 3 và câu điều kiện hỗn hợp (Mixed Conditionals loại 3–2 và 2–3).',
      'Sử dụng chuẩn xác đại từ quan hệ và dấu phẩy trong mệnh đề quan hệ không xác định (Non-defining relative clauses).',
    ],
    keyFormulasAndRules: [
      {
        name: 'Bị động khách quan với động từ tường thuật (Impersonal Passive)',
        latexOrRule: 'S_1 + V_1 + \\text{that} + S_2 + V_2 \\iff S_2 + \\text{be} + V_1(\\text{p.p.}) + \\begin{cases} \\text{to } V_{\\text{inf}} & (\\text{cùng thời}) \\\\ \\text{to have } V_3/\\text{ed} & (V_2 \\text{ xảy ra trước } V_1) \\end{cases}',
        description:
          'Nếu hành động V2 xảy ra trước hành động tường thuật V1 thì bắt buộc dùng cấu trúc hoàn thành nguyên mẫu "to have + V3/ed".',
      },
      {
        name: 'Câu điều kiện hỗn hợp (Mixed Conditionals Type 3–2)',
        latexOrRule: '\\text{If} + S + \\text{had} + V_3/\\text{ed} \\; (\\text{quá khứ}), \\quad S + \\text{would/could} + V_{\\text{inf}} \\; (\\text{now / today})',
        description:
          'Diễn tả một giả thiết trái với quá khứ nhưng kết quả lại ảnh hưởng trực tiếp đến hiện tại (thường có dấu hiệu "now", "today", "right now" ở mệnh đề chính).',
      },
    ],
    workedExample: {
      problemStatement:
        'Choose the sentence that is closest in meaning to the original sentence: "People rumour that the ancient temple was destroyed by a devastating earthquake centuries ago."',
      logicReasoning:
        'Động từ tường thuật "rumour" đang ở thì hiện tại đơn, trong khi mệnh đề phụ "was destroyed" ở thì quá khứ đơn (xảy ra trước và ở thể bị động). Khi đưa chủ ngữ "The ancient temple" lên đầu câu, ta phải dùng cấu trúc lệch thời bị động: "is rumoured to have been + V3/ed".',
      steps: [
        'Bước 1 (Chia bị động cho động từ tường thuật): "People rumour..." $\\to$ "The ancient temple is rumoured...".',
        'Bước 2 (Xác định tương quan thời gian): "was destroyed" xảy ra trong quá khứ (trước "rumour" ở hiện tại) nên dùng nguyên mẫu hoàn thành: $\\text{to have} + V_3/\\text{ed}$.',
        'Bước 3 (Kết hợp thể bị động của động từ chính): "was destroyed" ở thể bị động nên trở thành "to have been destroyed". Câu hoàn chỉnh: "The ancient temple is rumoured to have been destroyed by a devastating earthquake centuries ago."',
      ],
      finalConclusion:
        'Cấu trúc chính xác là: "The ancient temple is rumoured to have been destroyed by a devastating earthquake centuries ago."',
    },
    commonPitfalls: [
      {
        mistake: 'Dùng "to destroy" hoặc "to be destroyed" khi hành động ở mệnh đề phụ xảy ra TRƯỚC động từ tường thuật.',
        correction: 'Luôn kiểm tra lệch thì: nếu V2 xảy ra trước V1, phải dùng "to have + V3/ed" (chủ động) hoặc "to have been + V3/ed" (bị động).',
        explanation:
          'Nguyên mẫu hoàn thành (Perfect Infinitive) là cách duy nhất đánh dấu tính chất hoàn tất trước mốc thời gian của động từ chính.',
      },
    ],
    sampleQuestionTemplates: [
      {
        questionText:
          'Mark the correct option: The cybercriminals are reported ________ over two million dollars from the bank’s digital reserve last weekend.',
        options: ['to have stolen', 'to steal', 'having stolen', 'to be stolen'],
        correctAnswer: 'to have stolen',
        detailedDerivation:
          'Động từ tường thuật "are reported" ở hiện tại, nhưng hành động trộm tiền diễn ra vào "last weekend" (trong quá khứ, chủ động). Do đó phải dùng nguyên mẫu hoàn thành chủ động: "to have stolen".',
        cognitiveLevel: 'Thông hiểu',
      },
      {
        questionText:
          'Mark the correct option: If Minh ________ the scholarship application before last Friday’s deadline, he would be preparing for his flight to Melbourne right now.',
        options: ['had submitted', 'submitted', 'has submitted', 'would have submitted'],
        correctAnswer: 'had submitted',
        detailedDerivation:
          'Mệnh đề "If" chứa mốc quá khứ "before last Friday’s deadline" (giả thiết trái với quá khứ $\\to$ loại 3: $\\text{had} + V_3/\\text{ed}$), còn mệnh đề chính có "right now" (kết quả ở hiện tại $\\to$ loại 2). Đây là câu điều kiện hỗn hợp 3–2, nên chọn "had submitted".',
        cognitiveLevel: 'Vận dụng',
      },
      {
        questionText:
          'Mark the correct option: Ha Long Bay, ________ twice by UNESCO as a World Natural Heritage Site, attracts millions of international tourists every year.',
        options: [
          'which has been recognized',
          'that has been recognized',
          'where has been recognized',
          'recognizing',
        ],
        correctAnswer: 'which has been recognized',
        detailedDerivation:
          'Sau danh từ riêng "Ha Long Bay" và dấu phẩy là mệnh đề quan hệ không xác định (Non-defining relative clause). Trong mệnh đề này tuyệt đối không được dùng "that", và vì vịnh Hạ Long "được công nhận" (bị động) nên chọn "which has been recognized".',
        cognitiveLevel: 'Thông hiểu',
      },
      {
        questionText:
          'Mark the correct option: ________ for the firefighters’ timely arrival, the historic library would have been completely reduced to ashes.',
        options: ['Had it not been', 'Were it not', 'If it was not', 'Should it not be'],
        correctAnswer: 'Had it not been',
        detailedDerivation:
          'Mệnh đề chính có "would have been reduced" là câu điều kiện loại 3. Cấu trúc đảo ngữ của "If it had not been for..." (Nếu không nhờ có...) là "Had it not been for...".',
        cognitiveLevel: 'Vận dụng cao',
      },
    ],
  },
  {
    id: 'eng11-perfect-participles-cleft-modals',
    subject: 'english',
    grade: 11,
    chapter: 'Unit 4–6 (SGK Tiếng Anh 11 Global Success): Participle Clauses, Cleft Sentences & Modal Verbs',
    topicName: 'Phân từ hoàn thành (Having + V3/ed), Câu chẻ nhấn mạnh (It is/was... that...) & Động từ khuyết thiếu hoàn thành',
    learningObjectives: [
      'Rút gọn hai mệnh đề cùng chủ ngữ bằng phân từ hoàn thành (Having + V3/ed hoặc Having been + V3/ed) để nhấn mạnh hành động xảy ra trước.',
      'Sử dụng câu chẻ (Cleft sentences) ở cả dạng chủ động và bị động để nhấn mạnh chủ ngữ, tân ngữ hoặc trạng ngữ.',
      'Phân biệt sắc thái suy luận và trách cứ trong quá khứ giữa must have V3/ed, can’t have V3/ed, should(n’t) have V3/ed và needn’t have V3/ed.',
    ],
    keyFormulasAndRules: [
      {
        name: 'Phân từ hoàn thành & Danh động từ hoàn thành (Perfect Participle / Perfect Gerund)',
        latexOrRule: '\\text{Having} + V_3/\\text{ed} \\; (\\text{chủ động}) \\quad / \\quad \\text{Having been} + V_3/\\text{ed} \\; (\\text{bị động}), \\qquad S + V_{\\text{chính}}',
        description:
          'Chỉ dùng khi hai mệnh đề có CÙNG chủ ngữ S và hành động ở vế phân từ đã hoàn tất trước hành động ở mệnh đề chính.',
      },
      {
        name: 'Động từ khuyết thiếu hoàn thành (Modal + have + V3/ed)',
        latexOrRule: '\\text{must have } V_3 \\; (\\text{ắt hẳn đã}) \\;|\\; \\text{can\'t have } V_3 \\; (\\text{chắc chắn đã không}) \\;|\\; \\text{should have } V_3 \\; (\\text{lẽ ra nên làm}) \\;|\\; \\text{needn\'t have } V_3 \\; (\\text{lẽ ra không cần làm})',
        description:
          'Cần phân biệt "needn’t have + V3/ed" (đã làm rồi nhưng hóa ra không cần thiết) với "didn’t need to + V_inf" (không cần làm nên thực tế đã không làm).',
      },
    ],
    workedExample: {
      problemStatement:
        'Mark the correct option to complete the sentence: "________ all the safety instructions carefully, the laboratory technician put on her protective goggles and started the experiment."',
      logicReasoning:
        'Hai mệnh đề có cùng chủ ngữ là "the laboratory technician". Hành động "đọc kỹ toàn bộ hướng dẫn an toàn" xảy ra và hoàn tất trước khi cô ấy đeo kính bảo hộ và bắt đầu thí nghiệm, mang nghĩa chủ động nên ta dùng phân từ hoàn thành chủ động "Having + V3/ed".',
      steps: [
        'Bước 1 (Kiểm tra đồng chủ ngữ): Chủ ngữ mệnh đề chính là "the laboratory technician" — chính là người thực hiện hành động "read all the safety instructions" (chủ động).',
        'Bước 2 (Kiểm tra trình tự thời gian): Việc đọc hướng dẫn hoàn tất trước việc bắt đầu thí nghiệm.',
        'Bước 3 (Chọn dạng phân từ): Dùng phân từ hoàn thành chủ động "Having read".',
      ],
      finalConclusion:
        'Đáp án đúng là "Having read".',
    },
    commonPitfalls: [
      {
        mistake: 'Nhầm lẫn giữa "must have + V3/ed" (suy luận logic có căn cứ trong quá khứ) và "should have + V3/ed" (lời trách cứ/tiếc nuối vì đã không làm).',
        correction: 'Nếu câu đưa ra bằng chứng thực tế để suy đoán điều chắc chắn đã xảy ra thì dùng "must have V3/ed"; nếu diễn tả việc lẽ ra phải làm nhưng thực tế đã không làm thì dùng "should have V3/ed".',
        explanation:
          'Hai cấu trúc này thường xuất hiện cùng nhau trong bài viết lại câu (Sentence Transformation) của đề thi THPT Quốc gia.',
      },
    ],
    sampleQuestionTemplates: [
      {
        questionText:
          'Mark the correct option: ________ intensively for over six months, the robotics team won first prize at the national STEM competition.',
        options: ['Having trained', 'Having been trained', 'To train', 'Trained'],
        correctAnswer: 'Having trained',
        detailedDerivation:
          'Chủ ngữ "the robotics team" tự tập luyện (chủ động) suốt hơn 6 tháng trước khi giành giải nhất, nên dùng phân từ hoàn thành chủ động "Having trained".',
        cognitiveLevel: 'Nhận biết',
      },
      {
        questionText:
          'Mark the correct option: It was mainly through persistent self-study and daily practice ________ she achieved an 8.5 IELTS score.',
        options: ['that', 'which', 'where', 'when'],
        correctAnswer: 'that',
        detailedDerivation:
          'Cấu trúc câu chẻ (Cleft sentence) nhấn mạnh trạng ngữ chỉ phương thức: $\\text{It is/was} + \\text{Adverbial phrase} + \\text{that} + S + V$. Luôn dùng "that" (không dùng which/where/when).',
        cognitiveLevel: 'Thông hiểu',
      },
      {
        questionText:
          'Mark the correct option: The streets are completely dry this morning; it ________ heavily in our neighbourhood last night as the weather forecast predicted.',
        options: ['can’t have rained', 'mustn’t have rained', 'shouldn’t have rained', 'needn’t have rained'],
        correctAnswer: 'can’t have rained',
        detailedDerivation:
          'Bằng chứng hiện tại là "đường phố hoàn toàn khô ráo sáng nay", suy luận phủ định chắc chắn cho một việc trong quá khứ ("tối qua chắc chắn đã không mưa to") bắt buộc dùng "can’t have + V3/ed" (lưu ý: không dùng "mustn’t have" cho suy luận quá khứ).',
        cognitiveLevel: 'Vận dụng',
      },
      {
        questionText:
          'Choose the sentence closest in meaning to: "It was a mistake of you to share your account password with a stranger online."',
        options: [
          'You shouldn’t have shared your account password with a stranger online.',
          'You needn’t have shared your account password with a stranger online.',
          'You can’t have shared your account password with a stranger online.',
          'You must have shared your account password with a stranger online.',
        ],
        correctAnswer: 'You shouldn’t have shared your account password with a stranger online.',
        detailedDerivation:
          'Cụm "It was a mistake of you to V" diễn tả sự phê bình/đáng tiếc về một hành động sai lầm đã làm trong quá khứ, tương đương hoàn toàn với cấu trúc "You shouldn’t have + V3/ed" (Lẽ ra bạn không nên làm việc đó).',
        cognitiveLevel: 'Vận dụng cao',
      },
    ],
  },
];

export const physics10And11Topics: CurriculumTopic[] = z
  .array(CurriculumTopicSchema)
  .parse(rawPhysics10And11Topics);

export const chemistry10And11Topics: CurriculumTopic[] = z
  .array(CurriculumTopicSchema)
  .parse(rawChemistry10And11Topics);

export const english10And11Topics: CurriculumTopic[] = z
  .array(CurriculumTopicSchema)
  .parse(rawEnglish10And11Topics);
