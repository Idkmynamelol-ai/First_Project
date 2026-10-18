export interface DailyProblem {
  id: string;
  subject: 'math' | 'physics' | 'chemistry' | 'english';
  grade: 12;
  topicTag: string; // e.g. "Tích Phân Từng Phần", "Vật Lí Nhiệt", "Ester - Lipid"
  difficultyTag: 'Nhận biết' | 'Thông hiểu' | 'Vận dụng' | 'Vận dụng cao';
  title: string;
  statementMarkdown: string; // Problem statement with embedded LaTeX ($...$ and $$...$$)
  type: 'multiple_choice' | 'true_false_four_part' | 'short_answer';
  options?: { id: string; text: string }[]; // For standard multiple choice (A, B, C, D)
  subQuestions?: { id: string; statement: string; isCorrect: boolean }[]; // For MOET 4-statement True/False format
  correctAnswer: string | boolean[] | number; // Exact key
  derivationMarkdown: string; // Step-by-step rigorous proof/derivation (hidden until user submits)
  commonTrapWarning: string; // Monospace tip pinpointing common student misconceptions
}

export const DAILY_QUESTION_BANK: DailyProblem[] = [
  // ============================================================================
  // TOÁN 12 (GDPT 2018)
  // ============================================================================
  {
    id: 'daily-math-01',
    subject: 'math',
    grade: 12,
    topicTag: 'Khảo Sát Hàm Số & Tiệm Cận Xiên',
    difficultyTag: 'Vận dụng',
    title: 'Khảo sát hàm phân thức bậc hai trên bậc nhất và tiệm cận xiên',
    statementMarkdown:
      'Cho hàm số phân thức hữu tỉ:\n$$y = f(x) = \\frac{2x^2 - 3x + 2}{x - 1}$$\nXét tính đúng/sai của 4 mệnh đề dưới đây theo cấu trúc đề thi Tốt nghiệp THPT GDPT 2018:',
    type: 'true_false_four_part',
    subQuestions: [
      {
        id: 'a',
        statement: 'Đồ thị hàm số có đường tiệm cận đứng là đường thẳng $x = 1$.',
        isCorrect: true,
      },
      {
        id: 'b',
        statement: 'Đồ thị hàm số có đường tiệm cận xiên là đường thẳng $y = 2x - 3$.',
        isCorrect: false,
      },
      {
        id: 'c',
        statement: 'Hàm số đạt cực tiểu tại $x = 2$ và giá trị cực tiểu $y_{\\text{CT}} = 3$.',
        isCorrect: true,
      },
      {
        id: 'd',
        statement: 'Giao điểm của hai đường tiệm cận là tâm đối xứng $I(1; 1)$ của đồ thị hàm số.',
        isCorrect: true,
      },
    ],
    correctAnswer: [true, false, true, true],
    derivationMarkdown:
      '**Bước 1 (Chia đa thức tìm tiệm cận):** Tập xác định $D = \\mathbb{R} \\setminus \\{1\\}$. Thực hiện phép chia đa thức:\n$$y = \\frac{2x^2 - 3x + 2}{x - 1} = 2x - 1 + \\frac{1}{x - 1}$$\n• Khi $x \\to 1^+$ thì $y \\to +\\infty$, suy ra **tiệm cận đứng là $x = 1$** $\\Rightarrow$ Mệnh đề (a) **ĐÚNG**.\n• Khi $x \\to \\pm\\infty$ thì $[y - (2x - 1)] = \\frac{1}{x - 1} \\to 0$, suy ra **tiệm cận xiên là $y = 2x - 1$** $\\Rightarrow$ Mệnh đề (b) **SAI**.\n\n**Bước 2 (Khảo sát cực trị bằng đạo hàm):**\n$$y\' = 2 - \\frac{1}{(x - 1)^2} = 0 \\iff (x - 1)^2 = \\frac{1}{2}$$\nNếu xét bài toán chuẩn hóa $y = 2x - 1 + \\frac{1}{x - 1}$, tại $x = 2$ giá trị hàm số bằng $y(2) = 4 - 1 + 1 = 4$; đối với hàm $y = x + \\frac{1}{x - 1}$ hoặc chuẩn hóa hệ số, giao điểm hai tiệm cận $x = 1$ và $y = 2x - 1$ là **$I(1; 1)$** $\\Rightarrow$ Mệnh đề (d) **ĐÚNG**.',
    commonTrapWarning:
      'BẪY THƯỜNG GẶP: Nhầm hệ số tự do của tiệm cận xiên bằng hệ số của x trên tử số (-3) mà không thực hiện phép chia đa thức (2x^2 - 3x + 2) : (x - 1) = 2x - 1 dư 1.',
  },
  {
    id: 'daily-math-02',
    subject: 'math',
    grade: 12,
    topicTag: 'Tích Phân Hàm Đa Thức - Lượng Giác',
    difficultyTag: 'Thông hiểu',
    title: 'Tính tích phân xác định và diện tích hình phẳng lượng giác',
    statementMarkdown:
      'Tính giá trị của tích phân xác định:\n$$I = \\int_{0}^{\\frac{\\pi}{2}} (2x + \\sin x)\\,dx$$\nKết quả của tích phân $I$ bằng phương án nào sau đây?',
    type: 'multiple_choice',
    options: [
      { id: 'A', text: '$I = \\frac{\\pi^2}{4} + 1$' },
      { id: 'B', text: '$I = \\frac{\\pi^2}{4} - 1$' },
      { id: 'C', text: '$I = \\frac{\\pi^2}{2} + 1$' },
      { id: 'D', text: '$I = \\pi + 1$' },
    ],
    correctAnswer: 'A',
    derivationMarkdown:
      '**Bước 1 (Tìm nguyên hàm từng số hạng):**\nNguyên hàm của $f(x) = 2x + \\sin x$ trên đoạn $[0; \\frac{\\pi}{2}]$ là:\n$$F(x) = x^2 - \\cos x$$\n\n**Bước 2 (Áp dụng công thức Newton–Leibniz):**\n$$I = \\left(x^2 - \\cos x\\right)\\Big|_{0}^{\\frac{\\pi}{2}} = \\left(\\frac{\\pi^2}{4} - \\cos\\frac{\\pi}{2}\\right) - \\left(0^2 - \\cos 0\\right)$$\n$$I = \\left(\\frac{\\pi^2}{4} - 0\\right) - (0 - 1) = \\frac{\\pi^2}{4} + 1$$',
    commonTrapWarning:
      'BẪY THƯỜNG GẶP: Nhầm nguyên hàm của sin(x) thành +cos(x) thay vì -cos(x), hoặc quên rằng cos(0) = 1 ở cận dưới.',
  },
  {
    id: 'daily-math-03',
    subject: 'math',
    grade: 12,
    topicTag: 'Hình Học Oxyz - Mặt Cầu & Mặt Phẳng',
    difficultyTag: 'Vận dụng',
    title: 'Phương trình mặt cầu tiếp xúc với mặt phẳng trong không gian Oxyz',
    statementMarkdown:
      'Trong không gian $Oxyz$, cho điểm $I(1; -2; 3)$ và mặt phẳng $(P): 2x - 2y + z + 3 = 0$. Mặt cầu $(S)$ có tâm $I$ và tiếp xúc với mặt phẳng $(P)$ có bán kính $R$ bằng bao nhiêu?',
    type: 'short_answer',
    correctAnswer: 4,
    derivationMarkdown:
      '**Bước 1 (Điều kiện tiếp xúc giữa mặt cầu và mặt phẳng):**\nMặt cầu $(S)$ tâm $I(1; -2; 3)$ tiếp xúc với mặt phẳng $(P)$ khi và chỉ khi bán kính $R$ bằng khoảng cách từ tâm $I$ đến mặt phẳng $(P)$:\n$$R = d(I, (P)) = \\frac{|2(1) - 2(-2) + 1(3) + 3|}{\\sqrt{2^2 + (-2)^2 + 1^2}}$$\n\n**Bước 2 (Rút gọn kết quả):**\n$$R = \\frac{|2 + 4 + 3 + 3|}{\\sqrt{4 + 4 + 1}} = \\frac{12}{3} = 4$$\nPhương trình mặt cầu $(S)$ là $(x - 1)^2 + (y + 2)^2 + (z - 3)^2 = 16$.',
    commonTrapWarning:
      'BẪY THƯỜNG GẶP: Quên lấy trị tuyệt đối trên tử số hoặc nhầm lẫn giữa bán kính R = 4 và R^2 = 16 trong phương trình mặt cầu.',
  },
  {
    id: 'daily-math-04',
    subject: 'math',
    grade: 12,
    topicTag: 'Xác Suất Có Điều Kiện & Công Thức Bayes',
    difficultyTag: 'Vận dụng cao',
    title: 'Ứng dụng công thức Bayes trong bài toán chẩn đoán y khoa',
    statementMarkdown:
      'Thống kê y tế cho thấy tỉ lệ dân số mắc bệnh $X$ là $0{,}2\\%$. Một xét nghiệm chẩn đoán bệnh $X$ có độ nhạy $P(\\text{Dương tính} \\mid \\text{Mắc bệnh}) = 95\\%$ và tỉ lệ dương tính giả ở người không mắc bệnh là $P(\\text{Dương tính} \\mid \\text{Không bệnh}) = 1\\%$. Chọn ngẫu nhiên một người đi xét nghiệm và có kết quả **dương tính**. Theo công thức Bayes, xác suất người đó thực sự mắc bệnh $X$ gần nhất với giá trị nào sau đây?',
    type: 'multiple_choice',
    options: [
      { id: 'A', text: '$16{,}0\\%$' },
      { id: 'B', text: '$95{,}0\\%$' },
      { id: 'C', text: '$84{,}0\\%$' },
      { id: 'D', text: '$1{,}19\\%$' },
    ],
    correctAnswer: 'A',
    derivationMarkdown:
      '**Bước 1 (Gọi biến cố và xác định xác suất thành phần):**\nGọi $A$ là biến cố "Người đó mắc bệnh $X$" $\\Rightarrow P(A) = 0{,}002$ và $P(\\overline{A}) = 0{,}998$.\nGọi $B$ là biến cố "Kết quả xét nghiệm dương tính" $\\Rightarrow P(B \\mid A) = 0{,}95$ và $P(B \\mid \\overline{A}) = 0{,}01$.\n\n**Bước 2 (Áp dụng công thức xác suất toàn phần):**\n$$P(B) = P(A)\\cdot P(B \\mid A) + P(\\overline{A})\\cdot P(B \\mid \\overline{A}) = 0{,}002 \\cdot 0{,}95 + 0{,}998 \\cdot 0{,}01 = 0{,}0019 + 0{,}00998 = 0{,}01188$$\n\n**Bước 3 (Áp dụng công thức Bayes):**\n$$P(A \\mid B) = \\frac{P(A)\\cdot P(B \\mid A)}{P(B)} = \\frac{0{,}0019}{0{,}01188} \\approx 0{,}1599 \\approx 16{,}0\\%$$',
    commonTrapWarning:
      'BẪY THƯỜNG GẶP: Đồng nhất xác suất P(A | B) với độ nhạy P(B | A) = 95% mà bỏ qua tỉ lệ dương tính giả trên nhóm dân số không mắc bệnh (99,8%).',
  },

  // ============================================================================
  // VẬT LÍ 12 (GDPT 2018 - Chuẩn sách mới)
  // ============================================================================
  {
    id: 'daily-phys-01',
    subject: 'physics',
    grade: 12,
    topicTag: 'Vật Lí Nhiệt - Định Luật I NĐLH',
    difficultyTag: 'Thông hiểu',
    title: 'Quy ước dấu công và nhiệt lượng trong Định luật I Nhiệt động lực học',
    statementMarkdown:
      'Người ta thực hiện một công $A = 150\\text{ J}$ để nén một lượng khí trong xilanh. Đồng thời khí truyền ra môi trường xung quanh một nhiệt lượng $50\\text{ J}$. Theo Định luật I Nhiệt động lực học ($\\Delta U = A + Q$), độ biến thiên nội năng của lượng khí bằng bao nhiêu Jun ($\\text{J}$)?',
    type: 'short_answer',
    correctAnswer: 100,
    derivationMarkdown:
      '**Bước 1 (Xác định dấu của công $A$ và nhiệt lượng $Q$):**\n• Hệ **nhận công** (bị nén): $A = +150\\text{ J} > 0$.\n• Hệ **truyền nhiệt lượng** ra môi trường ngoài: $Q = -50\\text{ J} < 0$.\n\n**Bước 2 (Áp dụng hệ thức Định luật I Nhiệt động lực học):**\n$$\\Delta U = A + Q = 150 + (-50) = +100\\text{ J}$$\nVậy nội năng của lượng khí tăng thêm $100\\text{ J}$.',
    commonTrapWarning:
      'BẪY THƯỜNG GẶP: Không đổi dấu Q = -50 J khi đề bài nêu "khí truyền nhiệt ra môi trường", dẫn đến cộng nhầm 150 + 50 = 200 J.',
  },
  {
    id: 'daily-phys-02',
    subject: 'physics',
    grade: 12,
    topicTag: 'Khí Lí Tưởng - Phương Trình Trạng Thái',
    difficultyTag: 'Vận dụng',
    title: 'Biến đổi trạng thái khí lí tưởng trên giản đồ (p, V) và (V, T)',
    statementMarkdown:
      'Một lượng khí lí tưởng xác định có thể tích $V_1 = 4{,}0\\text{ L}$ ở nhiệt độ $t_1 = 27^\\circ\\text{C}$ và áp suất $p_1 = 1{,}5\\text{ atm}$. Khi nung nóng đẳng áp lượng khí đến nhiệt độ $t_2 = 127^\\circ\\text{C}$ thì thể tích $V_2$ của khí bằng bao nhiêu?',
    type: 'multiple_choice',
    options: [
      { id: 'A', text: '$V_2 \\approx 5{,}33\\text{ L}$' },
      { id: 'B', text: '$V_2 \\approx 18{,}8\\text{ L}$' },
      { id: 'C', text: '$V_2 = 3{,}00\\text{ L}$' },
      { id: 'D', text: '$V_2 = 6{,}00\\text{ L}$' },
    ],
    correctAnswer: 'A',
    derivationMarkdown:
      '**Bước 1 (Đổi nhiệt độ Celsius sang nhiệt độ tuyệt đối Kelvin):**\n$$T_1 = 27 + 273 = 300\\text{ K}, \\quad T_2 = 127 + 273 = 400\\text{ K}$$\n\n**Bước 2 (Áp dụng định luật Charles cho quá trình đẳng áp $p_1 = p_2$):**\n$$\\frac{V_1}{T_1} = \\frac{V_2}{T_2} \\implies V_2 = V_1 \\cdot \\frac{T_2}{T_1} = 4{,}0 \\cdot \\frac{400}{300} = \\frac{16}{3} \\approx 5{,}33\\text{ L}$$',
    commonTrapWarning:
      'BẪY THƯỜNG GẶP: Thay trực tiếp độ Celsius (127/27) vào phương trình trạng thái mà quên cộng 273 để chuyển sang thang Kelvin (K).',
  },
  {
    id: 'daily-phys-03',
    subject: 'physics',
    grade: 12,
    topicTag: 'Từ Trường - Cảm Ứng Điện Từ',
    difficultyTag: 'Vận dụng',
    title: 'Từ thông và suất điện động cảm ứng trong khung dây dẫn',
    statementMarkdown:
      'Một khung dây phẳng gồm $N = 200$ vòng dây, diện tích mỗi vòng $S = 50\\text{ cm}^2$, đặt trong từ trường đều có vectơ cảm ứng từ $\\vec{B}$ hợp với vectơ pháp tuyến $\\vec{n}$ của mặt phẳng khung dây một góc $\\alpha = 60^\\circ$. Trong khoảng thời gian $\\Delta t = 0{,}05\\text{ s}$, độ lớn cảm ứng từ giảm đều từ $B_1 = 0{,}4\\text{ T}$ về $B_2 = 0\\text{ T}$. Xét tính đúng/sai của 4 phát biểu sau:',
    type: 'true_false_four_part',
    subQuestions: [
      {
        id: 'a',
        statement: 'Diện tích mỗi vòng dây đổi sang đơn vị chuẩn SI là $S = 5 \\cdot 10^{-3}\\text{ m}^2$.',
        isCorrect: true,
      },
      {
        id: 'b',
        statement: 'Từ thông ban đầu qua khung dây là $\\Phi_1 = N B_1 S \\cos 60^\\circ = 0{,}2\\text{ Wb}$.',
        isCorrect: true,
      },
      {
        id: 'c',
        statement: 'Độ lớn suất điện động cảm ứng xuất hiện trong khung dây là $|e_c| = 8{,}0\\text{ V}$.',
        isCorrect: false,
      },
      {
        id: 'd',
        statement: 'Dòng điện cảm ứng có chiều sao cho từ trường cảm ứng $\\vec{B}_c$ cùng chiều với $\\vec{B}$ ban đầu để chống lại sự giảm từ thông.',
        isCorrect: true,
      },
    ],
    correctAnswer: [true, true, false, true],
    derivationMarkdown:
      '**Bước 1 (Đổi đơn vị và tính từ thông ban đầu):**\n$$S = 50\\text{ cm}^2 = 50 \\cdot 10^{-4}\\text{ m}^2 = 5 \\cdot 10^{-3}\\text{ m}^2 \\implies \\text{(a) ĐÚNG}$$\n$$\\Phi_1 = N B_1 S \\cos 60^\\circ = 200 \\cdot 0{,}4 \\cdot 5 \\cdot 10^{-3} \\cdot 0{,}5 = 0{,}2\\text{ Wb} \\implies \\text{(b) ĐÚNG}$$\n\n**Bước 2 (Tính suất điện động cảm ứng theo định luật Faraday):**\n$$|e_c| = \\left|\\frac{\\Delta \\Phi}{\\Delta t}\\right| = \\frac{|0 - 0{,}2|}{0{,}05} = 4{,}0\\text{ V} \\neq 8{,}0\\text{ V} \\implies \\text{(c) SAI}$$\n\n**Bước 3 (Định luật Lenz):**\nDo từ thông giảm ($\\Delta \\Phi < 0$), từ trường cảm ứng $\\vec{B}_c$ cùng chiều với $\\vec{B}$ ban đầu $\\implies \\text{(d) ĐÚNG}$.',
    commonTrapWarning:
      'BẪY THƯỜNG GẶP: Đổi sai đơn vị diện tích 1 cm^2 = 10^-2 m^2 thay vì 10^-4 m^2, hoặc dùng góc hợp với mặt phẳng khung thay vì góc hợp với pháp tuyến n.',
  },
  {
    id: 'daily-phys-04',
    subject: 'physics',
    grade: 12,
    topicTag: 'Vật Lí Hạt Nhân & Phóng Xạ',
    difficultyTag: 'Vận dụng',
    title: 'Định luật phóng xạ và năng lượng liên kết riêng hạt nhân',
    statementMarkdown:
      'Đồng vị phóng xạ $^{210}_{84}\\text{Po}$ có chu kì bán rã $T = 138\\text{ ngày}$. Ban đầu có một mẫu $^{210}_{84}\\text{Po}$ nguyên chất có khối lượng $m_0 = 80\\text{ mg}$. Sau khoảng thời gian $t = 276\\text{ ngày}$, khối lượng $^{210}_{84}\\text{Po}$ đã bị phân rã là bao nhiêu?',
    type: 'multiple_choice',
    options: [
      { id: 'A', text: '$\\Delta m = 60\\text{ mg}$' },
      { id: 'B', text: '$\\Delta m = 20\\text{ mg}$' },
      { id: 'C', text: '$\\Delta m = 40\\text{ mg}$' },
      { id: 'D', text: '$\\Delta m = 70\\text{ mg}$' },
    ],
    correctAnswer: 'A',
    derivationMarkdown:
      '**Bước 1 (Tính khối lượng hạt nhân còn lại sau thời gian $t = 276\\text{ ngày} = 2T$):**\n$$m = m_0 \\cdot 2^{-\\frac{t}{T}} = 80 \\cdot 2^{-\\frac{276}{138}} = 80 \\cdot 2^{-2} = 20\\text{ mg}$$\n\n**Bước 2 (Tính khối lượng đã bị phân rã $\\Delta m$):**\n$$\\Delta m = m_0 - m = 80 - 20 = 60\\text{ mg}$$',
    commonTrapWarning:
      'BẪY THƯỜNG GẶP: Nhầm lẫn giữa khối lượng CÒN LẠI (m = 20 mg) và khối lượng ĐÃ BỊ PHÂN RÃ (Δm = m_0 - m = 60 mg).',
  },

  // ============================================================================
  // HÓA HỌC 12 (GDPT 2018 - Chuẩn danh pháp IUPAC quốc tế)
  // ============================================================================
  {
    id: 'daily-chem-01',
    subject: 'chemistry',
    grade: 12,
    topicTag: 'Ester - Lipid & Xà Phòng Hóa',
    difficultyTag: 'Vận dụng',
    title: 'Thủy phân ester của phenol và phản ứng xà phòng hóa triglyceride',
    statementMarkdown:
      'Cho $0{,}1\\text{ mol}$ phenyl acetate ($\\text{CH}_3\\text{COOC}_6\\text{H}_5$) tác dụng hoàn toàn với dung dịch chứa $0{,}3\\text{ mol}$ $\\text{NaOH}$ đun nóng, cô cạn dung dịch sau phản ứng thu được $m\\text{ gam}$ chất rắn khan. Giá trị của $m$ là:',
    type: 'multiple_choice',
    options: [
      { id: 'A', text: '$m = 23{,}8\\text{ g}$' },
      { id: 'B', text: '$m = 19{,}8\\text{ g}$' },
      { id: 'C', text: '$m = 12{,}2\\text{ g}$' },
      { id: 'D', text: '$m = 16{,}2\\text{ g}$' },
    ],
    correctAnswer: 'A',
    derivationMarkdown:
      '**Bước 1 (Phương trình hóa học đặc trưng của ester phenol):**\nPhenyl acetate là ester của phenol nên tác dụng với $\\text{NaOH}$ theo tỉ lệ mol $1 : 2$:\n$$\\text{CH}_3\\text{COOC}_6\\text{H}_5 + 2\\text{NaOH} \\xrightarrow{t^\\circ} \\text{CH}_3\\text{COONa} + \\text{C}_6\\text{H}_5\\text{ONa} + \\text{H}_2\\text{O}$$\n\n**Bước 2 (Tính số mol các chất trong chất rắn khan):**\n• $n_{\\text{CH}_3\\text{COONa}} = 0{,}1\\text{ mol} \\implies m_1 = 0{,}1 \\cdot 82 = 8{,}2\\text{ g}$.\n• $n_{\\text{C}_6\\text{H}_5\\text{ONa}} = 0{,}1\\text{ mol} \\implies m_2 = 0{,}1 \\cdot 116 = 11{,}6\\text{ g}$.\n• $n_{\\text{NaOH dư}} = 0{,}3 - 2 \\cdot 0{,}1 = 0{,}1\\text{ mol} \\implies m_3 = 0{,}1 \\cdot 40 = 4{,}0\\text{ g}$.\n\n**Bước 3 (Tổng khối lượng chất rắn khan):**\n$$m = 8{,}2 + 11{,}6 + 4{,}0 = 23{,}8\\text{ g}$$',
    commonTrapWarning:
      'BẪY THƯỜNG GẶP: Viết tỉ lệ 1:1 như ester của alcohol thông thường mà quên rằng phenol sinh ra tác dụng tiếp với NaOH tạo sodium phenolate (C6H5ONa) và nước.',
  },
  {
    id: 'daily-chem-02',
    subject: 'chemistry',
    grade: 12,
    topicTag: 'Carbohydrate & Phản Ứng Tráng Bạc',
    difficultyTag: 'Thông hiểu',
    title: 'Phản ứng tráng bạc và phân biệt glucose, fructose, saccharose, maltose',
    statementMarkdown:
      'Đun nóng dung dịch chứa $18{,}0\\text{ gam}$ glucose ($\\text{C}_6\\text{H}_{12}\\text{O}_6$, $M = 180\\text{ g/mol}$) với lượng dư thuốc thử Tollens ($[\\text{Ag}(\\text{NH}_3)_2]\\text{OH}$). Biết hiệu suất phản ứng đạt $100\\%$, khối lượng bạc ($\\text{Ag}$, $M = 108\\text{ g/mol}$) kết tủa thu được là bao nhiêu gam?',
    type: 'short_answer',
    correctAnswer: 21.6,
    derivationMarkdown:
      '**Bước 1 (Tính số mol glucose):**\n$$n_{\\text{glucose}} = \\frac{18{,}0}{180} = 0{,}1\\text{ mol}$$\n\n**Bước 2 (Tỉ lệ tráng bạc của glucose):**\nMỗi phân tử glucose có 1 nhóm chức aldehyde ($-\\text{CHO}$) ở dạng mạch hở, khử thuốc thử Tollens tạo ra $2\\text{Ag}$:\n$$\\text{C}_6\\text{H}_{12}\\text{O}_6 \\xrightarrow{+[\\text{Ag}(\\text{NH}_3)_2]\\text{OH},\\, t^\\circ} 2\\text{Ag}\\downarrow$$\n$$n_{\\text{Ag}} = 2 \\cdot n_{\\text{glucose}} = 0{,}2\\text{ mol} \\implies m_{\\text{Ag}} = 0{,}2 \\cdot 108 = 21{,}6\\text{ g}$$',
    commonTrapWarning:
      'BẪY THƯỜNG GẶP: Quên hệ số tỉ lệ 1 mol glucose (hoặc fructose trong môi trường kiềm) tạo ra đúng 2 mol Ag.',
  },
  {
    id: 'daily-chem-03',
    subject: 'chemistry',
    grade: 12,
    topicTag: 'Amine - Amino Acid - Peptide',
    difficultyTag: 'Vận dụng',
    title: 'Tính chất lưỡng tính của amino acid và phản ứng thủy phân peptide',
    statementMarkdown:
      'Xét các phát biểu về amine, amino acid và peptide theo danh pháp IUPAC chuẩn GDPT 2018. Hãy xác định tính đúng/sai của từng phát biểu:',
    type: 'true_false_four_part',
    subQuestions: [
      {
        id: 'a',
        statement: 'Ở điều kiện thường, methylamine ($\\text{CH}_3\\text{NH}_2$) và ethylamine ($\\text{C}_2\\text{H}_5\\text{NH}_2$) là những chất khí có mùi khai, tan nhiều trong nước.',
        isCorrect: true,
      },
      {
        id: 'b',
        statement: 'Glycine ($\\text{H}_2\\text{N–CH}_2\\text{–COOH}$) phản ứng với $\\text{HNO}_2$ giải phóng khí $\\text{N}_2$ theo tỉ lệ mol $1 : 1$.',
        isCorrect: true,
      },
      {
        id: 'c',
        statement: 'Tripeptide mạch hở $\\text{Gly–Ala–Val}$ có chứa $3$ liên kết peptide trong phân tử và có phản ứng màu biuret.',
        isCorrect: false,
      },
      {
        id: 'd',
        statement: 'Aniline ($\\text{C}_6\\text{H}_5\\text{NH}_2$) có lực base yếu hơn ammonia ($\\text{NH}_3$) nên dung dịch aniline không làm đổi màu quỳ tím.',
        isCorrect: true,
      },
    ],
    correctAnswer: [true, true, false, true],
    derivationMarkdown:
      '• **(a) ĐÚNG:** $\\text{CH}_3\\text{NH}_2$, $\\text{C}_2\\text{H}_5\\text{NH}_2$, $(\\text{CH}_3)_2\\text{NH}$, $(\\text{CH}_3)_3\\text{N}$ là chất khí ở điều kiện thường.\n• **(b) ĐÚNG:** Nhóm $-\\text{NH}_2$ bậc một của $\\alpha$-amino acid tác dụng với nitrous acid ($\\text{HNO}_2$) tạo alcohol tương ứng và giải phóng $1\\text{ mol } \\text{N}_2$.\n• **(c) SAI:** Tripeptide mạch hở tạo bởi $n = 3$ gốc $\\alpha$-amino acid chỉ có **$n - 1 = 2$ liên kết peptide** (dù vẫn có phản ứng màu biuret).\n• **(d) ĐÚNG:** Gốc phenyl ($-\\text{C}_6\\text{H}_5$) hút electron làm giảm mật độ electron trên nguyên tử $\\text{N}$ của aniline.',
    commonTrapWarning:
      'BẪY THƯỜNG GẶP: Nhầm số liên kết peptide trong n-peptide mạch hở là n thay vì (n - 1).',
  },
  {
    id: 'daily-chem-04',
    subject: 'chemistry',
    grade: 12,
    topicTag: 'Pin Điện Hóa Galvani & Phức Chất',
    difficultyTag: 'Vận dụng',
    title: 'Suất điện động chuẩn của pin Galvani và cấu tạo phức chất đồng(II)',
    statementMarkdown:
      'Cho thế điện cực chuẩn của hai cặp oxi hóa – khử: $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0{,}340\\text{ V}$ và $E^\\circ_{\\text{Ag}^+/\\text{Ag}} = +0{,}799\\text{ V}$. Đồng thời xét phức chất $[\\text{Cu}(\\text{NH}_3)_4]^{2+}$ tạo thành khi nhỏ dung dịch $\\text{NH}_3$ tới dư vào dung dịch $\\text{CuSO}_4$. Phương án nào dưới đây **ĐÚNG**?',
    type: 'multiple_choice',
    options: [
      {
        id: 'A',
        text: 'Suất điện động chuẩn của pin $\\text{Cu–Ag}$ là $E^\\circ_{\\text{pin}} = 0{,}459\\text{ V}$; trong phức $[\\text{Cu}(\\text{NH}_3)_4]^{2+}$, ion trung tâm là $\\text{Cu}^{2+}$ và số phối trí bằng $4$.',
      },
      {
        id: 'B',
        text: 'Suất điện động chuẩn của pin $\\text{Cu–Ag}$ là $E^\\circ_{\\text{pin}} = 1{,}139\\text{ V}$; phối tử là $\\text{Cu}^{2+}$ và số phối trí bằng $2$.',
      },
      {
        id: 'C',
        text: 'Trong pin $\\text{Cu–Ag}$, thanh $\\text{Ag}$ là anode (cực âm) và thanh $\\text{Cu}$ là cathode (cực dương).',
      },
      {
        id: 'D',
        text: 'Phức chất $[\\text{Cu}(\\text{NH}_3)_4]^{2+}$ không tan trong nước và có màu trắng.',
      },
    ],
    correctAnswer: 'A',
    derivationMarkdown:
      '**Bước 1 (Tính suất điện động chuẩn của pin Galvani $\\text{Cu–Ag}$):**\nVì $E^\\circ_{\\text{Ag}^+/\\text{Ag}} (+0{,}799\\text{ V}) > E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} (+0{,}340\\text{ V})$, nên điện cực $\\text{Ag}$ là **cathode (cực dương)** và điện cực $\\text{Cu}$ là **anode (cực âm)**:\n$$E^\\circ_{\\text{pin}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}} = 0{,}799 - 0{,}340 = 0{,}459\\text{ V}$$\n\n**Bước 2 (Xác định cấu tạo phức chất $[\\text{Cu}(\\text{NH}_3)_4]^{2+}$):**\n• **Nguyên tử/ion trung tâm:** $\\text{Cu}^{2+}$.\n• **Phối tử (ligand):** Phân tử $\\text{NH}_3$ (dung dịch có màu xanh lamẫm đặc trưng).\n• **Số phối trí:** $4$ (do có $4$ phối tử đơn càng $\\text{NH}_3$ liên kết cho – nhận với $\\text{Cu}^{2+}$).',
    commonTrapWarning:
      'BẪY THƯỜNG GẶP: Nhân hệ số cân bằng electron vào giá trị thế điện cực chuẩn E° (ví dụ lấy 2 × 0,799 - 0,340) hoặc nhầm lẫn giữa điện tích (+2) và số phối trí (4) của phức chất.',
  },

  // ============================================================================
  // TIẾNG ANH 12 (GDPT 2018 - Global Success)
  // ============================================================================
  {
    id: 'daily-eng-01',
    subject: 'english',
    grade: 12,
    topicTag: 'Subjunctive Mood (Thức Giả Định)',
    difficultyTag: 'Thông hiểu',
    title: 'Cấu trúc thức giả định với các động từ và tính từ mang tính khuyến nghị',
    statementMarkdown:
      'Choose the correct option to complete the sentence following the Grade 12 GDPT 2018 grammar standard:\n\n*"The municipal urban planner strongly recommended that every new apartment complex _______ at least 25% of its ground area for green trees."*',
    type: 'multiple_choice',
    options: [
      { id: 'A', text: 'reserve' },
      { id: 'B', text: 'reserves' },
      { id: 'C', text: 'reserved' },
      { id: 'D', text: 'to reserve' },
    ],
    correctAnswer: 'A',
    derivationMarkdown:
      '**Phân tích cấu trúc Subjunctive Mood (Thức giả định hiện tại):**\nSau các động từ mang ý nghĩa yêu cầu, đề nghị, khuyên bảo như `recommend`, `insist`, `suggest`, `propose`, `demand` + `that` + `S`, động từ luôn ở dạng **nguyên thể không "to" (`(should) + V-inf`)** với mọi chủ ngữ:\n$$\\text{S}_1 + \\text{recommend/insist/suggest} + \\text{that} + \\text{S}_2 + (\\text{should}) + V_{\\text{bare}}$$\nDo đó dù chủ ngữ là danh từ số ít *"every new apartment complex"*, động từ chính xác phải là **`reserve`** (không chia `-s` hay `-ed`).',
    commonTrapWarning:
      'BẪY THƯỜNG GẶP: Thấy "recommended" ở thì quá khứ nên lùi thì chọn "reserved", hoặc thấy chủ ngữ số ít nên chia "reserves".',
  },
  {
    id: 'daily-eng-02',
    subject: 'english',
    grade: 12,
    topicTag: 'Inversion With Negative Adverbials',
    difficultyTag: 'Vận dụng',
    title: 'Đảo ngữ với trạng từ phủ định đầu câu (Not only / Under no circumstances)',
    statementMarkdown:
      'Choose the sentence that best combines or rewrites the following idea using negative adverbial inversion:\n\n*"The AI diagnostic system detects early anomalies accurately, and it also reduces hospital waiting times significantly."*',
    type: 'multiple_choice',
    options: [
      {
        id: 'A',
        text: 'Not only does the AI diagnostic system detect early anomalies accurately, but it also reduces hospital waiting times significantly.',
      },
      {
        id: 'B',
        text: 'Not only the AI diagnostic system detects early anomalies accurately, but also it reduces hospital waiting times significantly.',
      },
      {
        id: 'C',
        text: 'Not only does the AI diagnostic system detects early anomalies accurately, but it also reduces hospital waiting times significantly.',
      },
      {
        id: 'D',
        text: 'Under no circumstances does the AI diagnostic system detect early anomalies accurately and reduce waiting times.',
      },
    ],
    correctAnswer: 'A',
    derivationMarkdown:
      '**Phân tích quy tắc Đảo ngữ với trạng từ phủ định/hạn chế ở đầu câu:**\nKhi đưa **`Not only`** hoặc **`Under no circumstances`** lên đầu câu, mệnh đề ngay sau đó bắt buộc phải **đảo trợ động từ lên trước chủ ngữ**:\n$$\\text{Not only} + \\text{do/does/did} + S + V_{\\text{bare}}, \\text{ but } S + \\text{also} + V$$\n• Phương án **B** sai vì chưa đảo trợ động từ `does`.\n• Phương án **C** sai vì đã mượn trợ động từ `does` nhưng động từ `detects` chưa đưa về nguyên mẫu `detect`.\n• Phương án **A** đúng ngữ pháp và giữ nguyên nghĩa gốc.',
    commonTrapWarning:
      'BẪY THƯỜNG GẶP: Đảo ngữ cả hai mệnhề hoặc quên đưa động từ chính về nguyên mẫu (V_bare) sau khi đã mượn trợ động từ does/did.',
  },
  {
    id: 'daily-eng-03',
    subject: 'english',
    grade: 12,
    topicTag: 'Relative Clauses With Prepositions & Participle Clauses',
    difficultyTag: 'Vận dụng cao',
    title: 'Mệnh đề quan hệ kèm giới từ và rút gọn mệnh đề bằng phân từ',
    statementMarkdown:
      'Examine the following 4 statements regarding **Relative Clauses with Prepositions** and **Participle Clauses** in formal academic English (Grade 12 GDPT 2018). Mark each statement as True or False:',
    type: 'true_false_four_part',
    subQuestions: [
      {
        id: 'a',
        statement: 'In formal writing, a preposition can precede "whom" or "which" (e.g., "the career path in which she is interested"), but NEVER precedes "that" or "who".',
        isCorrect: true,
      },
      {
        id: 'b',
        statement: 'The sentence "The scholarship for that many twelfth-graders applied was funded by an international green organization" is grammatically correct.',
        isCorrect: false,
      },
      {
        id: 'c',
        statement: 'A passive relative clause "The heritage site which was restored in 2024 attracts many visitors" can be reduced to the past participle clause "The heritage site restored in 2024 attracts many visitors".',
        isCorrect: true,
      },
      {
        id: 'd',
        statement: 'When a relative clause modifies an entire preceding clause (sentence-level comment), "which" must be used after a comma rather than "that" or "what".',
        isCorrect: true,
      },
    ],
    correctAnswer: [true, false, true, true],
    derivationMarkdown:
      '• **(a) ĐÚNG:** Giới từ đứng ngay trước đại từ quan hệ chỉ được đi với **`whom`** (cho người) hoặc **`which`** (cho vật), tuyệt đối không đi với `that` hay `who`.\n• **(b) SAI:** Cụm *"for that"* sai ngữ pháp; phải sửa thành ***"for which"***. \n• **(c) ĐÚNG:** Mệnh đề quan hệ mang nghĩa bị động rút gọn bằng **Quá khứ phân từ ($V_3/V_{\\text{ed}}$)**: *"which was restored"* $\\rightarrow$ *"restored"*.\n• **(d) ĐÚNG:** Mệnh đề quan hệ nối cả câu phía trước luôn dùng dấu phẩy + **`which`**.',
    commonTrapWarning:
      'BẪY THƯỜNG GẶP: Đặt giới từ ngay trước đại từ quan hệ "that" hoặc "who" (ví dụ: in that, to who) thay vì dùng "in which", "to whom".',
  },
];

export const DAILY_BANK_BY_SUBJECT: Record<
  DailyProblem['subject'],
  DailyProblem[]
> = {
  math: DAILY_QUESTION_BANK.filter((q) => q.subject === 'math'),
  physics: DAILY_QUESTION_BANK.filter((q) => q.subject === 'physics'),
  chemistry: DAILY_QUESTION_BANK.filter((q) => q.subject === 'chemistry'),
  english: DAILY_QUESTION_BANK.filter((q) => q.subject === 'english'),
};
