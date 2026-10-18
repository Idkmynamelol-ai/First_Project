import { CurriculumTopic, CurriculumTopicSchema } from './schema';

const rawPhysics12Topics: CurriculumTopic[] = [
  {
    id: 'phys12-ch1-thermal-physics',
    subject: 'physics',
    grade: 12,
    chapter: 'Chương I: Vật lí nhiệt',
    topicName: 'Nội năng, Định luật I Nhiệt động lực học và Nhiệt chuyển thể',
    learningObjectives: [
      'Phát biểu và vận dụng được định luật I Nhiệt động lực học ΔU = A + Q kèm quy ước dấu của công A và nhiệt lượng Q.',
      'Chuyển đổi chính xác giữa thang nhiệt độ Celsius (t °C) và thang nhiệt độ tuyệt đối Kelvin (T K).',
      'Tính được nhiệt lượng thu vào hoặc tỏa ra trong quá trình tăng nhiệt độ (Q = mcΔT), nóng chảy (Q = λm) và hóa hơi (Q = Lm).',
    ],
    keyFormulasAndRules: [
      {
        name: 'Định luật I Nhiệt động lực học & Thang nhiệt độ Kelvin',
        latexOrRule: '\\Delta U = A + Q, \\quad T(\\text{K}) = t(^\\circ\\text{C}) + 273.15',
        description:
          'Quy ước dấu: Q > 0 (hệ nhận nhiệt), Q < 0 (hệ truyền nhiệt); A > 0 (hệ nhận công), A < 0 (hệ thực hiện công).',
      },
      {
        name: 'Nhiệt lượng làm thay đổi nhiệt độ và chuyển thể',
        latexOrRule: 'Q = mc\\Delta T, \\quad Q_{\\text{nóng chảy}} = \\lambda m, \\quad Q_{\\text{hóa hơi}} = Lm',
        description:
          'c (J/kg·K) là nhiệt dung riêng, λ (J/kg) là nhiệt nóng chảy riêng, L (J/kg) là nhiệt hóa hơi riêng.',
      },
    ],
    workedExample: {
      problemStatement:
        'Tính tổng nhiệt lượng $Q$ cần cung cấp để biến đổi hoàn toàn $m = 2.0\\text{ kg}$ nước đá ở $-10^\\circ\\text{C}$ thành nước ở $20^\\circ\\text{C}$. Cho nhiệt dung riêng của nước đá $c_{\\text{đá}} = 2100\\text{ J/(kg}\\cdot\\text{K)}$, nhiệt nóng chảy riêng của nước đá $\\lambda = 3.34 \\times 10^5\\text{ J/kg}$ và nhiệt dung riêng của nước lỏng $c_{\\text{nước}} = 4180\\text{ J/(kg}\\cdot\\text{K)}$.',
      logicReasoning:
        'Quá trình đun nước đá từ $-10^\\circ\\text{C}$ lên nước lỏng ở $20^\\circ\\text{C}$ không thể dùng một công thức $Q = mc\\Delta T$ duy nhất vì tại $0^\\circ\\text{C}$ có sự chuyển thể từ rắn sang lỏng. Ta phải chia quá trình thành 3 giai đoạn nối tiếp: (1) Nước đá tăng nhiệt độ từ $-10^\\circ\\text{C}$ đến $0^\\circ\\text{C}$, (2) Nước đá nóng chảy hoàn toàn ở $0^\\circ\\text{C}$, và (3) Nước lỏng tăng nhiệt độ từ $0^\\circ\\text{C}$ lên $20^\\circ\\text{C}$.',
      steps: [
        'Bước 1 (Giai đoạn 1 — Tăng nhiệt độ nước đá từ $-10^\\circ\\text{C}$ lên $0^\\circ\\text{C}$): $$Q_1 = m c_{\\text{đá}} \\Delta t_1 = 2.0 \\times 2100 \\times [0 - (-10)] = 42\\,000\\text{ J} = 42.0\\text{ kJ}$$',
        'Bước 2 (Giai đoạn 2 — Nóng chảy hoàn toàn ở $0^\\circ\\text{C}$): $$Q_2 = \\lambda m = 3.34 \\times 10^5 \\times 2.0 = 668\\,000\\text{ J} = 668.0\\text{ kJ}$$',
        'Bước 3 (Giai đoạn 3 — Tăng nhiệt độ nước lỏng từ $0^\\circ\\text{C}$ lên $20^\\circ\\text{C}$): $$Q_3 = m c_{\\text{nước}} \\Delta t_2 = 2.0 \\times 4180 \\times (20 - 0) = 167\\,200\\text{ J} = 167.2\\text{ kJ}$$',
        'Bước 4 (Tổng nhiệt lượng cần cung cấp): $$Q = Q_1 + Q_2 + Q_3 = 42.0 + 668.0 + 167.2 = 877.2\\text{ kJ}$$',
      ],
      finalConclusion:
        'Tổng nhiệt lượng cần cung cấp cho toàn bộ quá trình là $Q = 877.2\\text{ kJ}$.',
    },
    commonPitfalls: [
      {
        mistake: 'Nhầm lẫn dấu của công A khi chất khí dãn nở (thực hiện công) hoặc bị nén (nhận công).',
        correction: 'Khí dãn nở đẩy pit-tông tức là hệ thực hiện công ra ngoài ⇒ A < 0; ngoại lực nén khí ⇒ A > 0.',
        explanation:
          'Trong Định luật I (ΔU = A + Q), A là công mà hệ NHẬN ĐƯỢC từ bên ngoài.',
      },
    ],
    sampleQuestionTemplates: [
      {
        questionText:
          'Người ta truyền cho chất khí trong xi-lanh nhiệt lượng $Q = 120\\text{ J}$. Chất khí nở ra và thực hiện một công $80\\text{ J}$ đẩy pit-tông lên. Độ biến thiên nội năng $\\Delta U$ của chất khí bằng bao nhiêu?',
        options: ['\\Delta U = 40\\text{ J}', '\\Delta U = 200\\text{ J}', '\\Delta U = -40\\text{ J}', '\\Delta U = -200\\text{ J}'],
        correctAnswer: '\\Delta U = 40\\text{ J}',
        detailedDerivation:
          'Theo quy ước dấu của Định luật I Nhiệt động lực học: khí nhận nhiệt nên $Q = +120\\text{ J}$; khí thực hiện công nên $A = -80\\text{ J}$. Vậy $$\\Delta U = A + Q = -80 + 120 = 40\\text{ J}$$',
        cognitiveLevel: 'Thông hiểu',
      },
      {
        questionText:
          'Tính nhiệt lượng cần cung cấp để làm nóng chảy hoàn toàn $0.5\\text{ kg}$ nước đá ở $0^\\circ\\text{C}$, biết nhiệt nóng chảy riêng của nước đá là $\\lambda = 3.34 \\times 10^5\\text{ J/kg}$.',
        options: ['Q = 167\\text{ kJ}', 'Q = 334\\text{ kJ}', 'Q = 16.7\\text{ kJ}', 'Q = 668\\text{ kJ}'],
        correctAnswer: 'Q = 167\\text{ kJ}',
        detailedDerivation:
          'Áp dụng công thức nhiệt nóng chảy: $$Q = \\lambda m = 3.34 \\times 10^5 \\times 0.5 = 1.67 \\times 10^5\\text{ J} = 167\\text{ kJ}$$',
        cognitiveLevel: 'Nhận biết',
      },
      {
        questionText:
          'Một ấm điện có công suất $P = 1000\\text{ W}$ và hiệu suất $H = 84\\%$ dùng để đun $1.5\\text{ kg}$ nước từ $20^\\circ\\text{C}$ đến khi sôi ở $100^\\circ\\text{C}$ ($c = 4200\\text{ J/(kg}\\cdot\\text{K)}$). Thời gian đun sôi nước là bao nhiêu?',
        options: ['t = 600\\text{ s}', 't = 504\\text{ s}', 't = 423.4\\text{ s}', 't = 720\\text{ s}'],
        correctAnswer: 't = 600\\text{ s}',
        detailedDerivation:
          'Nhiệt lượng có ích để đun sôi nước: $Q_{\\text{ích}} = mc\\Delta t = 1.5 \\times 4200 \\times (100 - 20) = 504\\,000\\text{ J}$. Vì $Q_{\\text{ích}} = H \\cdot P \\cdot t \\implies t = \\frac{504\\,000}{0.84 \\times 1000} = 600\\text{ s}$ ($10$ phút).',
        cognitiveLevel: 'Vận dụng',
      },
    ],
  },
  {
    id: 'phys12-ch2-ideal-gas',
    subject: 'physics',
    grade: 12,
    chapter: 'Chương II: Khí lí tưởng',
    topicName: 'Định luật Boyle, Charles, Phương trình trạng thái và Động học phân tử chất khí',
    learningObjectives: [
      'Vận dụng được định luật Boyle (đẳng nhiệt p1V1 = p2V2), định luật Charles (đẳng áp V1/T1 = V2/T2) và phương trình trạng thái khí lí tưởng pV/T = const.',
      'Giải được bài toán bằng phương trình Clapeyron pV = nRT.',
      'Liên hệ được áp suất chất khí với mật độ phân tử và động năng tịnh tiến trung bình của phân tử (W_đ = 3/2 kT).',
    ],
    keyFormulasAndRules: [
      {
        name: 'Phương trình trạng thái khí lí tưởng & Phương trình Clapeyron',
        latexOrRule: '\\frac{p_1 V_1}{T_1} = \\frac{p_2 V_2}{T_2}, \\quad pV = nRT = \\frac{m}{M}RT',
        description:
          'T bắt buộc tính theo Kelvin (K); R ≈ 8.31 J/(mol·K) khi p tính bằng Pa và V tính bằng m^3.',
      },
      {
        name: 'Áp suất khí theo mô hình động học phân tử & Động năng trung bình',
        latexOrRule: 'p = \\frac{1}{3}\\mu m_0 \\overline{v^2} = \\frac{2}{3}\\mu \\overline{E_d}, \\quad \\overline{E_d} = \\frac{3}{2}kT',
        description:
          'μ = N/V là mật độ phân tử (hạt/m^3), k = 1.38 × 10^-23 J/K là hằng số Boltzmann.',
      },
    ],
    workedExample: {
      problemStatement:
        'Một bình kín dung tích $V = 8.31\\text{ L}$ chứa $n = 2.0\\text{ mol}$ khí Helium lí tưởng ở nhiệt độ $t = 27^\\circ\\text{C}$. Hãy tính áp suất $p$ của khí trong bình (theo đơn vị $\\text{Pa}$) và động năng tịnh tiến trung bình $\\overline{E_d}$ của mỗi phân tử khí.',
      logicReasoning:
        'Để áp dụng phương trình Clapeyron $pV = nRT$ với hằng số khí chuẩn $R = 8.31\\text{ J/(mol}\\cdot\\text{K)}$, mọi đại lượng phải quy đổi về hệ SI chuẩn: thể tích $V$ đổi từ Lít sang $\\text{m}^3$ ($1\\text{ L} = 10^{-3}\\text{ m}^3$) và nhiệt độ $t$ đổi sang thang Kelvin $T(\\text{K}) = t(^\\circ\\text{C}) + 273$. Sau đó, động năng trung bình của phân tử chỉ phụ thuộc vào nhiệt độ tuyệt đối $T$ qua hệ thức Boltzmann.',
      steps: [
        'Bước 1 (Quy đổi đơn vị SI): $V = 8.31\\text{ L} = 8.31 \\times 10^{-3}\\text{ m}^3$; nhiệt độ tuyệt đối $T = 27 + 273 = 300\\text{ K}$.',
        'Bước 2 (Tính áp suất $p$ từ phương trình Clapeyron): $$p = \\frac{nRT}{V} = \\frac{2.0 \\times 8.31 \\times 300}{8.31 \\times 10^{-3}} = 6.0 \\times 10^5\\text{ Pa}$$',
        'Bước 3 (Tính động năng tịnh tiến trung bình của phân tử): Với $k = 1.38 \\times 10^{-23}\\text{ J/K}$: $$\\overline{E_d} = \\frac{3}{2}kT = 1.5 \\times 1.38 \\times 10^{-23} \\times 300 = 6.21 \\times 10^{-21}\\text{ J}$$',
      ],
      finalConclusion:
        'Áp suất khí trong bình là $p = 6.0 \\times 10^5\\text{ Pa}$ và động năng trung bình mỗi phân tử là $\\overline{E_d} = 6.21 \\times 10^{-21}\\text{ J}$.',
    },
    commonPitfalls: [
      {
        mistake: 'Thay trực tiếp nhiệt độ Celsius t (°C) vào phương trình V1/T1 = V2/T2 hoặc pV = nRT.',
        correction: 'Luôn đổi sang nhiệt độ tuyệt đối T (K) = t (°C) + 273 trước khi lập tỉ số.',
        explanation:
          'Các định luật chất khí chỉ nghiệm đúng trên thang nhiệt độ tuyệt đối Kelvin.',
      },
    ],
    sampleQuestionTemplates: [
      {
        questionText:
          'Một lượng khí lí tưởng xác định ở nhiệt độ $27^\\circ\\text{C}$ có áp suất $p_1 = 2\\text{ atm}$ và thể tích $V_1 = 6\\text{ L}$. Khi nén khí đến thể tích $V_2 = 4\\text{ L}$ và tăng nhiệt độ lên $127^\\circ\\text{C}$ thì áp suất $p_2$ bằng bao nhiêu?',
        options: ['p_2 = 4\\text{ atm}', 'p_2 = 3\\text{ atm}', 'p_2 = 6.3\\text{ atm}', 'p_2 = 2.5\\text{ atm}'],
        correctAnswer: 'p_2 = 4\\text{ atm}',
        detailedDerivation:
          'Đổi nhiệt độ sang Kelvin: $T_1 = 27 + 273 = 300\\text{ K}$, $T_2 = 127 + 273 = 400\\text{ K}$. Áp dụng phương trình trạng thái khí lí tưởng: $$\\frac{p_1 V_1}{T_1} = \\frac{p_2 V_2}{T_2} \\implies p_2 = p_1 \\frac{V_1}{V_2} \\frac{T_2}{T_1} = 2 \\times \\frac{6}{4} \\times \\frac{400}{300} = 4\\text{ atm}$$',
        cognitiveLevel: 'Vận dụng',
      },
      {
        questionText:
          'Khi nhiệt độ tuyệt đối $T$ của một khối khí lí tưởng tăng lên gấp $4$ lần thì căn bậc hai của trung bình bình phương tốc độ chuyển động nhiệt của các phân tử khí ($v_{\\text{rms}} = \\sqrt{\\overline{v^2}}$) thay đổi như thế nào?',
        options: ['Tăng lên 2 lần', 'Tăng lên 4 lần', 'Tăng lên 16 lần', 'Giảm đi 2 lần'],
        correctAnswer: 'Tăng lên 2 lần',
        detailedDerivation:
          'Ta có $\\overline{E_d} = \\frac{1}{2}m_0 \\overline{v^2} = \\frac{3}{2}kT \\implies v_{\\text{rms}} = \\sqrt{\\frac{3kT}{m_0}} \\propto \\sqrt{T}$. Khi $T$ tăng gấp $4$ lần thì $v_{\\text{rms}}$ tăng lên $\\sqrt{4} = 2$ lần.',
        cognitiveLevel: 'Thông hiểu',
      },
      {
        questionText:
          'Một bọt khí nổi từ đáy hồ sâu $h = 15\\text{ m}$ lên mặt nước. Biết áp suất khí quyển $p_0 = 10^5\\text{ Pa}$, khối lượng riêng của nước $\\rho = 1000\\text{ kg/m}^3$, $g = 10\\text{ m/s}^2$ và nhiệt độ nước không đổi theo độ sâu. Thể tích bọt khí khi tới sát mặt nước tăng gấp bao nhiêu lần so với ở đáy hồ?',
        options: ['2.5\\text{ lần}', '1.5\\text{ lần}', '2.0\\text{ lần}', '3.0\\text{ lần}'],
        correctAnswer: '2.5\\text{ lần}',
        detailedDerivation:
          'Áp suất tại đáy hồ: $p_1 = p_0 + \\rho g h = 10^5 + 1000 \\times 10 \\times 15 = 2.5 \\times 10^5\\text{ Pa}$. Vì quá trình đẳng nhiệt (Boyle): $\\frac{V_2}{V_1} = \\frac{p_1}{p_0} = \\frac{2.5 \\times 10^5}{10^5} = 2.5$ lần.',
        cognitiveLevel: 'Vận dụng cao',
      },
    ],
  },
  {
    id: 'phys12-ch3-magnetic-field-em-induction',
    subject: 'physics',
    grade: 12,
    chapter: 'Chương III: Từ trường',
    topicName: 'Lực từ, Từ thông, Cảm ứng điện từ và Dòng điện xoay chiều',
    learningObjectives: [
      'Xác định được độ lớn và chiều của lực từ tác dụng lên đoạn dây dẫn mang dòng điện F = BIL sin α (quy tắc bàn tay trái).',
      'Tính được từ thông Φ = NBS cos α và suất điện động cảm ứng theo định luật Faraday e_c = -ΔΦ/Δt.',
      'Xác định được giá trị hiệu dụng, tần số và biểu thức của suất điện động, dòng điện xoay chiều.',
    ],
    keyFormulasAndRules: [
      {
        name: 'Lực từ tác dụng lên đoạn dây dẫn mang dòng điện',
        latexOrRule: 'F = B I L \\sin\\alpha',
        description:
          'α là góc hợp bởi vectơ cảm ứng từ B và chiều dòng điện I chạy trong dây dẫn dài L.',
      },
      {
        name: 'Từ thông & Định luật Faraday về cảm ứng điện từ',
        latexOrRule: '\\Phi = N B S \\cos\\theta, \\quad e_c = -\\frac{\\Delta\\Phi}{\\Delta t}, \\quad I = \\frac{I_0}{\\sqrt{2}}',
        description:
          'θ là góc hợp bởi vectơ pháp tuyến n của mặt phẳng khung dây và vectơ cảm ứng từ B.',
      },
    ],
    workedExample: {
      problemStatement:
        'Một khung dây dẫn phẳng kín gồm $N = 200$ vòng dây, diện tích mỗi vòng $S = 50\\text{ cm}^2$, điện trở tổng cộng của khung là $R = 4.0\\text{ }\\Omega$. Khung được đặt trong từ trường đều có các đường sức từ hợp với MẶT PHẲNG khung dây một góc $30^\\circ$. Cho độ lớn cảm ứng từ giảm đều từ $B_1 = 0.6\\text{ T}$ xuống $B_2 = 0.2\\text{ T}$ trong thời gian $\\Delta t = 0.1\\text{ s}$. Tính cường độ dòng điện cảm ứng $i_c$ chạy trong khung.',
      logicReasoning:
        'Trong công thức từ thông $\\Phi = NBS\\cos\\theta$, góc $\\theta$ là góc hợp bởi vectơ cảm ứng từ $\\vec{B}$ và VECTƠ PHÁP TUYẾN $\\vec{n}$ của mặt phẳng khung dây. Vì đề bài cho góc giữa $\\vec{B}$ và mặt phẳng khung là $30^\\circ$, góc $\\theta$ thực sự phải là $90^\\circ - 30^\\circ = 60^\\circ$. Sau khi tính độ biến thiên từ thông $|\\Delta\\Phi|$, ta tìm suất điện động cảm ứng $|e_c| = \\frac{|\\Delta\\Phi|}{\\Delta t}$ rồi áp dụng định luật Ohm $i_c = \\frac{|e_c|}{R}$.',
      steps: [
        'Bước 1 (Xác định góc pháp tuyến & đổi đơn vị): $S = 50\\text{ cm}^2 = 5 \\times 10^{-3}\\text{ m}^2$. Góc giữa $\\vec{B}$ và pháp tuyến $\\vec{n}$ là $\\theta = 90^\\circ - 30^\\circ = 60^\\circ$.',
        'Bước 2 (Tính độ biến thiên từ thông $|\\Delta\\Phi|$): $$|\\Delta\\Phi| = N |B_2 - B_1| S \\cos 60^\\circ = 200 \\times |0.2 - 0.6| \\times 5 \\times 10^{-3} \\times 0.5 = 0.20\\text{ Wb}$$',
        'Bước 3 (Tính suất điện động cảm ứng $|e_c|$): $$|e_c| = \\frac{|\\Delta\\Phi|}{\\Delta t} = \\frac{0.20}{0.1} = 2.0\\text{ V}$$',
        'Bước 4 (Tính cường độ dòng điện cảm ứng $i_c$): $$i_c = \\frac{|e_c|}{R} = \\frac{2.0}{4.0} = 0.50\\text{ A}$$',
      ],
      finalConclusion:
        'Suất điện động cảm ứng trong khung có độ lớn $|e_c| = 2.0\\text{ V}$ và cường độ dòng điện cảm ứng là $i_c = 0.50\\text{ A}$.',
    },
    commonPitfalls: [
      {
        mistake: 'Lấy góc hợp bởi vectơ B với mặt phẳng khung dây thay trực tiếp vào cos θ khi tính từ thông Φ.',
        correction: 'Góc θ trong công thức Φ = NBS cos θ là góc giữa B và PHÁP TUYẾN n của mặt phẳng khung (θ = 90° - góc hợp với mặt phẳng).',
        explanation:
          'Khi mặt phẳng khung dây song song với đường sức từ, pháp tuyến vuông góc với B nên θ = 90° và từ thông Φ = 0.',
      },
    ],
    sampleQuestionTemplates: [
      {
        questionText:
          'Một khung dây phẳng gồm $N = 100$ vòng dây, mỗi vòng có diện tích $S = 20\\text{ cm}^2$ đặt trong từ trường đều. Vectơ cảm ứng từ $\\vec{B}$ hợp với vectơ pháp tuyến của mặt phẳng khung góc $60^\\circ$. Trong khoảng thời gian $\\Delta t = 0.05\\text{ s}$, cảm ứng từ giảm đều từ $0.4\\text{ T}$ về $0\\text{ T}$. Độ lớn suất điện động cảm ứng trong khung bằng bao nhiêu?',
        options: ['|e_c| = 0.8\\text{ V}', '|e_c| = 1.6\\text{ V}', '|e_c| = 80\\text{ V}', '|e_c| = 0.4\\text{ V}'],
        correctAnswer: '|e_c| = 0.8\\text{ V}',
        detailedDerivation:
          'Đổi diện tích $S = 20\\text{ cm}^2 = 20 \\times 10^{-4}\\text{ m}^2 = 2 \\times 10^{-3}\\text{ m}^2$. Độ biến thiên từ thông: $$|\\Delta\\Phi| = N \\cdot |\\Delta B| \\cdot S \\cos 60^\\circ = 100 \\times 0.4 \\times 2 \\times 10^{-3} \\times 0.5 = 0.04\\text{ Wb}$$ Độ lớn suất điện động cảm ứng: $$|e_c| = \\frac{|\\Delta\\Phi|}{\\Delta t} = \\frac{0.04}{0.05} = 0.8\\text{ V}$$',
        cognitiveLevel: 'Vận dụng',
      },
      {
        questionText:
          'Một đoạn dây dẫn thẳng dài $L = 0.5\\text{ m}$ mang dòng điện $I = 4\\text{ A}$ đặt vuông góc với các đường sức của một từ trường đều có độ lớn cảm ứng từ $B = 0.2\\text{ T}$. Lực từ tác dụng lên đoạn dây có độ lớn bằng bao nhiêu?',
        options: ['F = 0.4\\text{ N}', 'F = 0.2\\text{ N}', 'F = 0.8\\text{ N}', 'F = 4.0\\text{ N}'],
        correctAnswer: 'F = 0.4\\text{ N}',
        detailedDerivation:
          'Vì dây dẫn đặt vuông góc với đường sức từ nên $\\alpha = 90^\\circ \\implies \\sin 90^\\circ = 1$. Độ lớn lực từ: $F = B I L \\sin 90^\\circ = 0.2 \\times 4 \\times 0.5 \\times 1 = 0.4\\text{ N}$.',
        cognitiveLevel: 'Nhận biết',
      },
      {
        questionText:
          'Dòng điện xoay chiều chạy qua một đoạn mạch có biểu thức $i = 4\\sqrt{2}\\cos(100\\pi t - \\frac{\\pi}{6})\\text{ (A)}$. Cường độ dòng điện hiệu dụng $I$ và tần số $f$ của dòng điện lần lượt là bao nhiêu?',
        options: ['I = 4\\text{ A},\\; f = 50\\text{ Hz}', 'I = 4\\sqrt{2}\\text{ A},\\; f = 50\\text{ Hz}', 'I = 4\\text{ A},\\; f = 100\\text{ Hz}', 'I = 2\\sqrt{2}\\text{ A},\\; f = 50\\text{ Hz}'],
        correctAnswer: 'I = 4\\text{ A},\\; f = 50\\text{ Hz}',
        detailedDerivation:
          'Giá trị cực đại $I_0 = 4\\sqrt{2}\\text{ A} \\implies$ Giá trị hiệu dụng $I = \\frac{I_0}{\\sqrt{2}} = 4\\text{ A}$. Tần số góc $\\omega = 100\\pi\\text{ rad/s} \\implies$ Tần số $f = \\frac{\\omega}{2\\pi} = 50\\text{ Hz}$.',
        cognitiveLevel: 'Thông hiểu',
      },
    ],
  },
  {
    id: 'phys12-ch4-nuclear-physics',
    subject: 'physics',
    grade: 12,
    chapter: 'Chương IV: Vật lí hạt nhân',
    topicName: 'Độ hụt khối, Năng lượng liên kết, Phản ứng hạt nhân và Định luật phóng xạ',
    learningObjectives: [
      'Xác định cấu tạo hạt nhân (Z proton, A-Z neutron), tính độ hụt khối Δm và năng lượng liên kết riêng W_lkr.',
      'Vận dụng các định luật bảo toàn trong phản ứng hạt nhân (bảo toàn số khối, điện tích, năng lượng toàn phần).',
      'Vận dụng định luật phóng xạ N(t) = N_0·2^(-t/T) và độ phóng xạ H = λN.',
    ],
    keyFormulasAndRules: [
      {
        name: 'Độ hụt khối và Năng lượng liên kết riêng',
        latexOrRule: '\\Delta m = Z m_p + (A - Z)m_n - m_X, \\quad W_{\\text{lk}} = \\Delta m \\cdot c^2, \\quad \\varepsilon = \\frac{W_{\\text{lk}}}{A}',
        description:
          'Với 1 amu·c^2 ≈ 931.5 MeV; hạt nhân có năng lượng liên kết riêng ε càng lớn thì càng bền vững.',
      },
      {
        name: 'Định luật phân rã phóng xạ & Độ phóng xạ',
        latexOrRule: 'N(t) = N_0 \\cdot 2^{-\\frac{t}{T}} = N_0 e^{-\\lambda t}, \\quad \\lambda = \\frac{\\ln 2}{T}, \\quad H(t) = \\lambda N(t)',
        description:
          'Số hạt nhân đã bị phân rã sau thời gian t là ΔN = N_0(1 - 2^(-t/T)). Khi tính H (Bq), chu kỳ bán rã T phải đổi ra giây (s).',
      },
    ],
    workedExample: {
      problemStatement:
        'Tính năng lượng liên kết $W_{\\text{lk}}$ và năng lượng liên kết riêng $\\varepsilon$ của hạt nhân Helium $^{4}_{2}\\text{He}$, biết khối lượng proton $m_p = 1.0073\\text{ amu}$, khối lượng neutron $m_n = 1.0087\\text{ amu}$, khối lượng hạt nhân Helium $m_{\\text{He}} = 4.0015\\text{ amu}$ và $1\\text{ amu}\\cdot c^2 = 931.5\\text{ MeV}$.',
      logicReasoning:
        'Khối lượng của một hạt nhân luôn nhỏ hơn tổng khối lượng của các nucleon (proton và neutron) tạo thành nó một lượng gọi là độ hụt khối $\\Delta m$. Theo hệ thức Einstein, độ hụt khối này ứng với năng lượng liên kết $W_{\\text{lk}} = \\Delta m \\cdot c^2$. Chia năng lượng liên kết cho tổng số khối $A$ ta thu được năng lượng liên kết riêng $\\varepsilon$ đặc trưng cho mức độ bền vững của hạt nhân.',
      steps: [
        'Bước 1 (Xác định số proton và neutron): Hạt nhân $^{4}_{2}\\text{He}$ có $Z = 2$ proton và $N = A - Z = 4 - 2 = 2$ neutron.',
        'Bước 2 (Tính độ hụt khối $\\Delta m$): $$\\Delta m = 2 m_p + 2 m_n - m_{\\text{He}} = 2(1.0073) + 2(1.0087) - 4.0015 = 4.0320 - 4.0015 = 0.0305\\text{ amu}$$',
        'Bước 3 (Tính năng lượng liên kết $W_{\\text{lk}}$): $$W_{\\text{lk}} = 0.0305 \\times 931.5 \\approx 28.41\\text{ MeV}$$',
        'Bước 4 (Tính năng lượng liên kết riêng $\\varepsilon$): $$\\varepsilon = \\frac{W_{\\text{lk}}}{A} = \\frac{28.41}{4} \\approx 7.10\\text{ MeV/nucleon}$$',
      ],
      finalConclusion:
        'Hạt nhân $^{4}_{2}\\text{He}$ có năng lượng liên kết $W_{\\text{lk}} \\approx 28.41\\text{ MeV}$ và năng lượng liên kết riêng $\\varepsilon \\approx 7.10\\text{ MeV/nucleon}$.',
    },
    commonPitfalls: [
      {
        mistake: 'Nhầm lẫn giữa số hạt nhân CÒN LẠI N(t) = N_0·2^(-t/T) và số hạt nhân ĐÃ PHÂN RÃ ΔN = N_0(1 - 2^(-t/T)).',
        correction: 'Đọc kỹ yêu cầu đề bài: hỏi khối lượng/số hạt còn lại hay khối lượng/số hạt hạt nhân con sinh ra.',
        explanation:
          'Sau thời gian t = 2T, số hạt còn lại là N_0/4 (25%), còn số hạt đã bị phân rã (bằng số hạt nhân con tạo thành) là 3N_0/4 (75%).',
      },
    ],
    sampleQuestionTemplates: [
      {
        questionText:
          'Chất phóng xạ Poloni $^{210}_{84}\\text{Po}$ có chu kì bán rã $T = 138$ ngày. Ban đầu có một mẫu $^{210}_{84}\\text{Po}$ nguyên chất khối lượng $m_0 = 80\\text{ mg}$. Sau $276$ ngày, khối lượng $^{210}_{84}\\text{Po}$ đã bị phân rã bằng bao nhiêu?',
        options: ['\\Delta m = 60\\text{ mg}', '\\Delta m = 20\\text{ mg}', '\\Delta m = 40\\text{ mg}', '\\Delta m = 10\\text{ mg}'],
        correctAnswer: '\\Delta m = 60\\text{ mg}',
        detailedDerivation:
          'Ta có $\\frac{t}{T} = \\frac{276}{138} = 2$. Khối lượng Poloni còn lại là $m = m_0 \\cdot 2^{-2} = \\frac{80}{4} = 20\\text{ mg}$. Khối lượng Poloni đã bị phân rã là $$\\Delta m = m_0 - m = 80 - 20 = 60\\text{ mg}$$',
        cognitiveLevel: 'Vận dụng',
      },
      {
        questionText:
          'Trong phản ứng hạt nhân $^{235}_{92}\\text{U} + ^{1}_{0}\\text{n} \\to ^{95}_{42}\\text{Mo} + ^{139}_{57}\\text{La} + 2X + 7\\,^{0}_{-1}\\text{e}$, hạt $X$ là hạt nào sau đây?',
        options: ['Neutron (^{1}_{0}\\text{n})', 'Proton (^{1}_{1}\\text{p})', 'Hạt alpha (^{4}_{2}\\text{He})', 'Positron (^{0}_{+1}\\text{e})'],
        correctAnswer: 'Neutron (^{1}_{0}\\text{n})',
        detailedDerivation:
          'Áp dụng định luật bảo toàn số khối: $235 + 1 = 95 + 139 + 2A_X + 0 \\implies 236 = 234 + 2A_X \\implies A_X = 1$. Bảo toàn điện tích: $92 + 0 = 42 + 57 + 2Z_X + 7(-1) \\implies 92 = 92 + 2Z_X \\implies Z_X = 0$. Vậy $X$ là hạt neutron $^{1}_{0}\\text{n}$.',
        cognitiveLevel: 'Thông hiểu',
      },
      {
        questionText:
          'Đồng vị phóng xạ $^{14}_{6}\\text{C}$ có chu kì bán rã $T = 5730$ năm. Một mẫu gỗ cổ có độ phóng xạ của $^{14}_{6}\\text{C}$ chỉ bằng $25\\%$ độ phóng xạ của mẫu gỗ tươi cùng loại vừa mới đốn. Tuổi $t$ của mẫu gỗ cổ đó là bao nhiêu?',
        options: ['t = 11\\,460\\text{ năm}', 't = 5730\\text{ năm}', 't = 17\\,190\\text{ năm}', 't = 2865\\text{ năm}'],
        correctAnswer: 't = 11\\,460\\text{ năm}',
        detailedDerivation:
          'Ta có $\\frac{H}{H_0} = 2^{-\\frac{t}{T}} = 0.25 = \\frac{1}{4} = 2^{-2} \\implies \\frac{t}{T} = 2 \\implies t = 2 \\times 5730 = 11\\,460$ năm.',
        cognitiveLevel: 'Vận dụng cao',
      },
    ],
  },
];

export const physics12Topics: CurriculumTopic[] = rawPhysics12Topics.map((topic) =>
  CurriculumTopicSchema.parse(topic)
);
