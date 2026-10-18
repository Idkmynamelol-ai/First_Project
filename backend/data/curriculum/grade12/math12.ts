import { CurriculumTopic, CurriculumTopicSchema } from './schema';

const rawMath12Topics: CurriculumTopic[] = [
  {
    id: 'math12-ch1-monotonicity-extrema',
    subject: 'math',
    grade: 12,
    chapter: 'Chương I: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số',
    topicName: 'Tính đơn điệu, cực trị và giá trị lớn nhất - nhỏ nhất của hàm số',
    learningObjectives: [
      'Xét được tính đồng biến, nghịch biến của hàm số trên một khoảng dựa vào dấu của đạo hàm cấp một.',
      'Tìm được điểm cực đại, điểm cực tiểu, giá trị cực đại, giá trị cực tiểu của hàm số.',
      'Xác định được giá trị lớn nhất (GTLN) và giá trị nhỏ nhất (GTNN) của hàm số liên tục trên một đoạn [a; b].',
      'Vận dụng cực trị và GTLN-GTNN để giải các bài toán tối ưu hóa thực tiễn (chi phí, diện tích, thể tích).',
    ],
    keyFormulasAndRules: [
      {
        name: 'Điều kiện đơn điệu trên khoảng K',
        latexOrRule: "f'(x) \\ge 0,\\; \\forall x \\in K \\implies f(x) \\text{ đồng biến trên } K",
        description:
          'Dấu bằng chỉ xảy ra tại hữu hạn điểm thuộc khoảng K; đối với hàm phân thức bậc nhất trên bậc nhất thì đạo hàm không đổi dấu trên từng khoảng xác định.',
      },
      {
        name: 'Điều kiện cực trị hàm bậc ba',
        latexOrRule: "y = ax^3 + bx^2 + cx + d \\text{ có 2 điểm cực trị } \\iff \\Delta' = b^2 - 3ac > 0",
        description:
          'Khi Δ\' ≤ 0, hàm số bậc ba luôn đơn điệu trên R và không có cực trị.',
      },
      {
        name: 'Quy tắc tìm GTLN - GTNN trên đoạn [a; b]',
        latexOrRule: '\\max_{[a;b]} f(x) = \\max\\{f(a),\\; f(b),\\; f(x_i)\\}, \\quad f\'(x_i) = 0',
        description:
          'Tính giá trị hàm số tại các điểm dừng thuộc (a; b) và tại hai đầu mút a, b rồi so sánh.',
      },
    ],
    workedExample: {
      problemStatement:
        'Khảo sát các khoảng đơn điệu, tìm cực trị của hàm số $f(x) = x^3 - 3x^2 - 9x + 12$ và tìm giá trị lớn nhất, giá trị nhỏ nhất của hàm số đó trên đoạn $[0; 4]$.',
      logicReasoning:
        'Để xác định chiều biến thiên và cực trị của hàm đa thức bậc ba, ta dựa vào dấu của đạo hàm bậc nhất $f\'(x)$ (tam thức bậc hai). Khi xét trên đoạn đóng $[0; 4]$, ta chỉ giữ lại các nghiệm của $f\'(x) = 0$ nằm trong khoảng $(0; 4)$ rồi so sánh giá trị hàm số tại các điểm dừng đó với giá trị tại hai đầu mút $x = 0$ và $x = 4$.',
      steps: [
        'Bước 1 (Tập xác định & Đạo hàm): Tập xác định $D = \\mathbb{R}$. Tính đạo hàm $f\'(x) = 3x^2 - 6x - 9 = 3(x^2 - 2x - 3)$.',
        'Bước 2 (Tìm điểm dừng & Xét dấu): Giải $f\'(x) = 0 \\iff x = -1$ hoặc $x = 3$. Vì hệ số $a = 3 > 0$, ta có $f\'(x) > 0$ trên $(-\\infty; -1)$ và $(3; +\\infty)$; $f\'(x) < 0$ trên $(-1; 3)$.',
        'Bước 3 (Kết luận đơn điệu & Cực trị): Hàm số đồng biến trên $(-\\infty; -1)$ và $(3; +\\infty)$, nghịch biến trên $(-1; 3)$. Hàm số đạt cực đại tại $x_{CĐ} = -1$ với $y_{CĐ} = f(-1) = 17$, và đạt cực tiểu tại $x_{CT} = 3$ với $y_{CT} = f(3) = -15$.',
        'Bước 4 (Tìm GTLN - GTNN trên đoạn $[0; 4]$): Trên khoảng $(0; 4)$ chỉ có điểm dừng $x = 3$ (loại $x = -1 \\notin [0; 4]$). Tính $f(0) = 12$, $f(3) = -15$, $f(4) = -8$.',
      ],
      finalConclusion:
        'Trên đoạn $[0; 4]$, hàm số đạt $\\max_{[0;4]} f(x) = f(0) = 12$ và $\\min_{[0;4]} f(x) = f(3) = -15$.',
    },
    commonPitfalls: [
      {
        mistake: 'Cho đạo hàm y\' ≥ 0 với hàm phân thức y = (ax + b)/(cx + d) khi tìm điều kiện đồng biến.',
        correction: 'Phải dùng dấu lớn hơn hẳn: ad - bc > 0 và điều kiện mẫu số -d/c không thuộc khoảng đang xét.',
        explanation:
          'Nếu ad - bc = 0 thì hàm số suy biến thành hàm hằng trên từng khoảng xác định chứ không đồng biến.',
      },
      {
        mistake: 'Nhầm lẫn giữa "điểm cực đại của hàm số" (x_0), "giá trị cực đại" (y_0) và "điểm cực đại của đồ thị" (M(x_0; y_0)).',
        correction: 'Đọc kỹ câu hỏi: hỏi của hàm số là hỏi x_0 hoặc f(x_0); hỏi của đồ thị là tọa độ (x_0; y_0).',
        explanation:
          'Đề thi THPT rất hay cài bẫy thuật ngữ giữa hoành độ cực trị và tung độ cực trị.',
      },
    ],
    sampleQuestionTemplates: [
      {
        questionText:
          'Cho hàm số $y = x^3 - 3x^2 + 2$. Giá trị cực tiểu của hàm số đã cho bằng bao nhiêu?',
        options: ['y_{CT} = -2', 'y_{CT} = 2', 'x_{CT} = 2', 'y_{CT} = 0'],
        correctAnswer: 'y_{CT} = -2',
        detailedDerivation:
          'Ta có $y\' = 3x^2 - 6x = 0 \\iff x = 0$ hoặc $x = 2$. Vì $y\'\'(2) = 6 > 0$ nên $x = 2$ là điểm cực tiểu. Giá trị cực tiểu là $y(2) = 2^3 - 3(2^2) + 2 = -2$.',
        cognitiveLevel: 'Nhận biết',
      },
      {
        questionText:
          'Tìm giá trị lớn nhất $M$ của hàm số $f(x) = x + \\frac{4}{x}$ trên đoạn $[1; 3]$.',
        options: ['M = 5', 'M = 4', 'M = \\frac{13}{3}', 'M = 6'],
        correctAnswer: 'M = 5',
        detailedDerivation:
          'Trên đoạn $[1; 3]$, $f\'(x) = 1 - \\frac{4}{x^2} = 0 \\iff x = 2 \\in [1; 3]$. Ta tính $f(1) = 5$, $f(2) = 4$, $f(3) = \\frac{13}{3} \\approx 4.33$. Vậy $\\max_{[1;3]} f(x) = f(1) = 5$.',
        cognitiveLevel: 'Thông hiểu',
      },
      {
        questionText:
          'Có bao nhiêu giá trị nguyên của tham số $m$ để hàm số $y = \\frac{x + m^2}{x + 4}$ đồng biến trên từng khoảng xác định?',
        options: ['3', '4', '5', '2'],
        correctAnswer: '3',
        detailedDerivation:
          'Tập xác định $D = \\mathbb{R} \\setminus \\{-4\\}$. Đạo hàm $y\' = \\frac{4 - m^2}{(x + 4)^2}$. Hàm số đồng biến trên từng khoảng xác định khi và chỉ khi $y\' > 0, \\forall x \\ne -4 \\iff 4 - m^2 > 0 \\iff -2 < m < 2$. Vì $m \\in \\mathbb{Z}$ nên $m \\in \\{-1; 0; 1\\}$, có $3$ giá trị nguyên.',
        cognitiveLevel: 'Vận dụng',
      },
      {
        questionText:
          'Một doanh nghiệp sản xuất $x$ sản phẩm mỗi ngày ($1 \\le x \\le 100$) với tổng chi phí $C(x) = x^3 - 3x^2 + 80x + 500$ (nghìn đồng) và giá bán mỗi sản phẩm là $p(x) = 320 - 21x$ (nghìn đồng). Hỏi doanh nghiệp cần sản xuất bao nhiêu sản phẩm mỗi ngày để lợi nhuận thu được là lớn nhất?',
        options: ['x = 4\\text{ sản phẩm}', 'x = 6\\text{ sản phẩm}', 'x = 5\\text{ sản phẩm}', 'x = 8\\text{ sản phẩm}'],
        correctAnswer: 'x = 4\\text{ sản phẩm}',
        detailedDerivation:
          'Doanh thu $R(x) = x \\cdot p(x) = 320x - 21x^2$. Hàm lợi nhuận $L(x) = R(x) - C(x) = -x^3 - 18x^2 + 240x - 500$. Đạo hàm $L\'(x) = -3x^2 - 36x + 240 = 0 \\iff x^2 + 12x - 80 = 0 \\iff x = 4$ (nhận) hoặc $x = -20$ (loại). Lập bảng biến thiên suy ra lợi nhuận cực đại tại $x = 4$ sản phẩm.',
        cognitiveLevel: 'Vận dụng cao',
      },
    ],
  },
  {
    id: 'math12-ch1-asymptotes-graphs',
    subject: 'math',
    grade: 12,
    chapter: 'Chương I: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số',
    topicName: 'Đường tiệm cận (đứng, ngang, xiên) và khảo sát đồ thị hàm số',
    learningObjectives: [
      'Xác định được đường tiệm cận đứng, tiệm cận ngang và tiệm cận xiên của đồ thị hàm số phân thức.',
      'Nhận diện được dạng đồ thị hàm bậc ba, hàm phân thức bậc nhất/bậc nhất và bậc hai/bậc nhất từ bảng biến thiên.',
      'Xác định dấu của các hệ số a, b, c, d dựa vào hình dáng đồ thị và giao điểm với các trục tọa độ.',
    ],
    keyFormulasAndRules: [
      {
        name: 'Tiệm cận ngang và Tiệm cận đứng',
        latexOrRule: '\\lim_{x \\to \\pm\\infty} f(x) = y_0 \\implies \\text{TCN } y = y_0; \\quad \\lim_{x \\to x_0^\\pm} f(x) = \\pm\\infty \\implies \\text{TCĐ } x = x_0',
        description:
          'Với hàm y = (ax+b)/(cx+d) (c ≠ 0, ad-bc ≠ 0), TCN là y = a/c và TCĐ là x = -d/c.',
      },
      {
        name: 'Tiệm cận xiên của đồ thị hàm phân thức bậc hai trên bậc nhất',
        latexOrRule: 'y = ax + b + \\frac{r}{cx + d} \\quad (a \\ne 0, r \\ne 0) \\implies \\text{TCX: } y = ax + b',
        description:
          'Thực hiện phép chia đa thức tử cho mẫu, phần thương bậc nhất chính là phương trình đường tiệm cận xiên.',
      },
    ],
    workedExample: {
      problemStatement:
        'Tìm tất cả các đường tiệm cận (đứng, ngang, xiên) của đồ thị hàm số $y = f(x) = \\frac{2x^2 - x - 2}{x - 1}$ và xác định tọa độ giao điểm $I$ của hai đường tiệm cận đó.',
      logicReasoning:
        'Hàm số có bậc tử bằng 2 lớn hơn bậc mẫu bằng 1 đúng 1 bậc, đồng thời tử số không chia hết cho $(x - 1)$. Vì vậy đồ thị hàm số không có tiệm cận ngang mà sẽ có 1 đường tiệm cận đứng (tại nghiệm của mẫu) và 1 đường tiệm cận xiên (là phần thương của phép chia đa thức tử cho mẫu).',
      steps: [
        'Bước 1 (Tập xác định & Tiệm cận đứng): Tập xác định $D = \\mathbb{R} \\setminus \\{1\\}$. Vì $\\lim_{x \\to 1^+} f(x) = -\\infty$ và $\\lim_{x \\to 1^-} f(x) = +\\infty$ (tử số tại $x = 1$ bằng $2 - 1 - 2 = -1 \\ne 0$), đường thẳng $x = 1$ là tiệm cận đứng.',
        'Bước 2 (Chia đa thức tìm Tiệm cận xiên): Thực hiện chia tử cho mẫu: $2x^2 - x - 2 = (2x + 1)(x - 1) - 1$, suy ra $f(x) = 2x + 1 - \\frac{1}{x - 1}$.',
        'Bước 3 (Kiểm tra giới hạn Tiệm cận xiên): Ta có $\\lim_{x \\to \\pm\\infty} [f(x) - (2x + 1)] = \\lim_{x \\to \\pm\\infty} \\frac{-1}{x - 1} = 0$. Vậy đường thẳng $y = 2x + 1$ là tiệm cận xiên.',
        'Bước 4 (Tìm tâm đối xứng $I$): Giải hệ giao điểm của $x = 1$ và $y = 2x + 1$, ta được $x = 1 \\implies y = 3$.',
      ],
      finalConclusion:
        'Đồ thị hàm số có tiệm cận đứng $x = 1$, tiệm cận xiên $y = 2x + 1$ và tâm đối xứng $I(1; 3)$.',
    },
    commonPitfalls: [
      {
        mistake: 'Kết luận mọi nghiệm của mẫu số đều là tiệm cận đứng mà không kiểm tra nghiệm trùng với tử số.',
        correction: 'Sau khi giải mẫu số bằng 0, phải thay vào tử số hoặc tính giới hạn một bên xem có ra ±∞ hay không.',
        explanation:
          'Nếu nghiệm của mẫu cũng là nghiệm bội lớn hơn hoặc bằng ở tử thì giới hạn hữu hạn, không tạo thành tiệm cận đứng.',
      },
    ],
    sampleQuestionTemplates: [
      {
        questionText:
          'Đường tiệm cận xiên của đồ thị hàm số $y = \\frac{2x^2 - 3x + 5}{x - 1}$ có phương trình là gì?',
        options: ['y = 2x - 1', 'y = 2x + 1', 'y = 2x - 3', 'x = 1'],
        correctAnswer: 'y = 2x - 1',
        detailedDerivation:
          'Chia đa thức tử cho mẫu: $2x^2 - 3x + 5 = (2x - 1)(x - 1) + 4 \\implies y = 2x - 1 + \\frac{4}{x - 1}$. Khi $x \\to \\pm\\infty$, $\\frac{4}{x - 1} \\to 0$ nên tiệm cận xiên là $y = 2x - 1$.',
        cognitiveLevel: 'Thông hiểu',
      },
      {
        questionText:
          'Tổng số đường tiệm cận đứng và tiệm cận ngang của đồ thị hàm số $y = \\frac{x - 2}{x^2 - 4}$ là bao nhiêu?',
        options: ['2', '3', '1', '0'],
        correctAnswer: '2',
        detailedDerivation:
          'Với $x \\ne \\pm 2$, rút gọn $y = \\frac{x - 2}{(x - 2)(x + 2)} = \\frac{1}{x + 2}$. Khi $x \\to \\pm\\infty$, $y \\to 0$ nên có $1$ tiệm cận ngang $y = 0$. Tại $x = 2$, $\\lim_{x \\to 2} y = \\frac{1}{4}$ (hữu hạn, không là TCĐ). Tại $x = -2$, $\\lim_{x \\to -2^+} y = +\\infty$ nên có $1$ tiệm cận đứng $x = -2$. Tổng cộng có $2$ đường tiệm cận.',
        cognitiveLevel: 'Vận dụng',
      },
      {
        questionText:
          'Cho đồ thị hàm số $(C): y = \\frac{x^2 + 2x + 2}{x + 1}$. Gọi $I$ là giao điểm của hai đường tiệm cận của $(C)$. Khoảng cách từ gốc tọa độ $O(0; 0)$ đến điểm $I$ bằng bao nhiêu?',
        options: ['OI = 1', 'OI = \\sqrt{2}', 'OI = 2', 'OI = \\sqrt{5}'],
        correctAnswer: 'OI = 1',
        detailedDerivation:
          'Ta viết $y = x + 1 + \\frac{1}{x + 1}$. Đồ thị $(C)$ có tiệm cận đứng $x = -1$ và tiệm cận xiên $y = x + 1$. Giao điểm của hai tiệm cận là $I(-1; 0)$. Vậy khoảng cách $OI = \\sqrt{(-1)^2 + 0^2} = 1$.',
        cognitiveLevel: 'Vận dụng',
      },
    ],
  },
  {
    id: 'math12-ch3-grouped-data-dispersion',
    subject: 'math',
    grade: 12,
    chapter: 'Chương III: Các số đặc trưng đo mức độ phân tán của mẫu số liệu ghép nhóm',
    topicName: 'Khoảng biến thiên, khoảng tứ phân vị, phương sai và độ lệch chuẩn',
    learningObjectives: [
      'Tính được khoảng biến thiên R và khoảng tứ phân vị Δ_Q của mẫu số liệu ghép nhóm.',
      'Tính được phương sai s^2 và độ lệch chuẩn s của mẫu số liệu ghép nhóm thông qua giá trị đại diện.',
      'Giải thích được ý nghĩa thực tiễn của độ lệch chuẩn và khoảng tứ phân vị khi so sánh độ ổn định/rủi ro giữa hai mẫu số liệu.',
    ],
    keyFormulasAndRules: [
      {
        name: 'Tứ phân vị thứ k của mẫu số liệu ghép nhóm',
        latexOrRule: 'Q_k = u_m + \\frac{\\frac{kn}{4} - C}{n_m}(u_{m+1} - u_m), \\quad \\Delta_Q = Q_3 - Q_1',
        description:
          '[u_m; u_{m+1}) là nhóm chứa Q_k, n_m là tần số của nhóm đó, C là tần số tích lũy của các nhóm đứng trước.',
      },
      {
        name: 'Phương sai và Độ lệch chuẩn mẫu ghép nhóm',
        latexOrRule: 's^2 = \\frac{1}{n}\\sum_{i=1}^{k} n_i(c_i - \\bar{x})^2 = \\left(\\frac{1}{n}\\sum_{i=1}^{k} n_i c_i^2\\right) - \\bar{x}^2, \\quad s = \\sqrt{s^2}',
        description:
          'c_i = (u_i + u_{i+1})/2 là giá trị đại diện của nhóm thứ i; n = ∑ n_i là cỡ mẫu.',
      },
    ],
    workedExample: {
      problemStatement:
        'Khảo sát thời gian tự học mỗi ngày (phút) của $n = 20$ học sinh Lớp 12 thu được bảng ghép nhóm gồm 3 nhóm: $[30; 50)$ có $n_1 = 5$ học sinh; $[50; 70)$ có $n_2 = 10$ học sinh; $[70; 90)$ có $n_3 = 5$ học sinh. Hãy tính số trung bình $\\bar{x}$, phương sai $s^2$ và độ lệch chuẩn $s$.',
      logicReasoning:
        'Vì dữ liệu được cho dưới dạng ghép nhóm, ta không biết giá trị rời rạc của từng học sinh mà phải đại diện mỗi nhóm bằng trung điểm $c_i = \\frac{u_i + u_{i+1}}{2}$. Sau khi có các giá trị đại diện $c_1, c_2, c_3$, ta áp dụng công thức trung bình trọng số và phương sai theo tần số $n_i$.',
      steps: [
        'Bước 1 (Xác định giá trị đại diện $c_i$): Trung điểm các nhóm lần lượt là $c_1 = \\frac{30+50}{2} = 40$, $c_2 = \\frac{50+70}{2} = 60$, $c_3 = \\frac{70+90}{2} = 80$.',
        'Bước 2 (Tính số trung bình $\\bar{x}$): $$\\bar{x} = \\frac{5 \\times 40 + 10 \\times 60 + 5 \\times 80}{20} = \\frac{200 + 600 + 400}{20} = 60\\text{ (phút)}$$',
        'Bước 3 (Tính phương sai $s^2$): $$s^2 = \\frac{5(40 - 60)^2 + 10(60 - 60)^2 + 5(80 - 60)^2}{20} = \\frac{5(400) + 0 + 5(400)}{20} = \\frac{4000}{20} = 200$$',
        'Bước 4 (Tính độ lệch chuẩn $s$): Lấy căn bậc hai của phương sai: $s = \\sqrt{200} = 10\\sqrt{2} \\approx 14.14\\text{ (phút)}$.',
      ],
      finalConclusion:
        'Thời gian tự học trung bình là $\\bar{x} = 60$ phút, phương sai $s^2 = 200$ và độ lệch chuẩn $s \\approx 14.14$ phút.',
    },
    commonPitfalls: [
      {
        mistake: 'Dùng đầu mút của nhóm thay vì giá trị đại diện trung điểm c_i khi tính số trung bình và phương sai.',
        correction: 'Luôn tính c_i = (đầu mút trái + đầu mút phải) / 2 cho từng nhóm trước khi nhân với tần số n_i.',
        explanation:
          'Trong mẫu ghép nhóm, các giá trị trong mỗi nhóm được xấp xỉ đều bằng trung điểm của khoảng ghép nhóm.',
      },
    ],
    sampleQuestionTemplates: [
      {
        questionText:
          'Một mẫu số liệu ghép nhóm có tứ phân vị thứ nhất $Q_1 = 12.5$ và tứ phân vị thứ ba $Q_3 = 18.2$. Khoảng tứ phân vị $\\Delta_Q$ của mẫu số liệu bằng bao nhiêu?',
        options: ['\\Delta_Q = 5.7', '\\Delta_Q = 30.7', '\\Delta_Q = 15.35', '\\Delta_Q = 6.2'],
        correctAnswer: '\\Delta_Q = 5.7',
        detailedDerivation:
          'Theo định nghĩa khoảng tứ phân vị: $\\Delta_Q = Q_3 - Q_1 = 18.2 - 12.5 = 5.7$.',
        cognitiveLevel: 'Nhận biết',
      },
      {
        questionText:
          'Khảo sát điểm thi thử môn Toán của $40$ học sinh theo các nhóm $[4; 6)$, $[6; 8)$, $[8; 10)$ có tần số lần lượt là $8$, $20$, $12$. Giá trị trung bình $\\bar{x}$ của mẫu số liệu ghép nhóm trên bằng bao nhiêu?',
        options: ['\\bar{x} = 7.2', '\\bar{x} = 7.0', '\\bar{x} = 6.8', '\\bar{x} = 7.5'],
        correctAnswer: '\\bar{x} = 7.2',
        detailedDerivation:
          'Giá trị đại diện các nhóm lần lượt là $c_1 = 5, c_2 = 7, c_3 = 9$. Số trung bình $\\bar{x} = \\frac{8 \\cdot 5 + 20 \\cdot 7 + 12 \\cdot 9}{40} = \\frac{40 + 140 + 108}{40} = \\frac{288}{40} = 7.2$.',
        cognitiveLevel: 'Thông hiểu',
      },
      {
        questionText:
          'Hai xạ thủ A và B cùng bắn $30$ phát đạn với điểm trung bình bằng nhau $\\bar{x}_A = \\bar{x}_B = 8.5$, nhưng phương sai điểm của A là $s_A^2 = 0.36$ và của B là $s_B^2 = 0.81$. Khẳng định nào sau đây là đúng?',
        options: [
          'Xạ thủ A có phong độ bắn ổn định hơn xạ thủ B (độ lệch chuẩn s_A = 0.6 < s_B = 0.9)',
          'Xạ thủ B có phong độ bắn ổn định hơn xạ thủ A vì phương sai lớn hơn',
          'Hai xạ thủ có độ ổn định như nhau vì cùng điểm trung bình',
          'Độ lệch chuẩn của xạ thủ A bằng 0.18',
        ],
        correctAnswer:
          'Xạ thủ A có phong độ bắn ổn định hơn xạ thủ B (độ lệch chuẩn s_A = 0.6 < s_B = 0.9)',
        detailedDerivation:
          'Độ lệch chuẩn $s_A = \\sqrt{0.36} = 0.6$ nhỏ hơn $s_B = \\sqrt{0.81} = 0.9$. Khi hai mẫu có cùng số trung bình, mẫu nào có phương sai và độ lệch chuẩn nhỏ hơn thì mức độ phân tán thấp hơn (ổn định hơn).',
        cognitiveLevel: 'Vận dụng',
      },
    ],
  },
  {
    id: 'math12-ch4-integrals-applications',
    subject: 'math',
    grade: 12,
    chapter: 'Chương IV: Nguyên hàm và Tích phân',
    topicName: 'Nguyên hàm, Tích phân xác định và Ứng dụng hình học',
    learningObjectives: [
      'Tìm được họ nguyên hàm của các hàm số sơ cấp cơ bản và tính được tích phân xác định bằng định nghĩa Newton-Leibniz.',
      'Vận dụng tích phân để tính diện tích hình phẳng giới hạn bởi các đồ thị và thể tích vật thể, khối tròn xoay.',
      'Giải được bài toán chuyển động thực tế (quãng đường từ vận tốc, vận tốc từ gia tốc).',
    ],
    keyFormulasAndRules: [
      {
        name: 'Công thức Newton – Leibniz',
        latexOrRule: '\\int_{a}^{b} f(x)\\,dx = F(x)\\Big|_{a}^{b} = F(b) - F(a)',
        description:
          'Với F(x) là một nguyên hàm bất kỳ của hàm số liên tục f(x) trên đoạn [a; b].',
      },
      {
        name: 'Diện tích hình phẳng và Thể tích khối tròn xoay',
        latexOrRule: 'S = \\int_{a}^{b} |f(x) - g(x)|\\,dx, \\quad V_{Ox} = \\pi \\int_{a}^{b} [f(x)]^2\\,dx',
        description:
          'Chú ý dấu giá trị tuyệt đối khi tính diện tích và nhân hệ số π kèm bình phương khi tính thể tích khối tròn xoay.',
      },
    ],
    workedExample: {
      problemStatement:
        'Tính diện tích hình phẳng $S$ giới hạn bởi parabol $(P): y = x^2 - 2x$ và đường thẳng $d: y = x$.',
      logicReasoning:
        'Đề bài chưa cho hai cận tích phân $a, b$, do đó bước đầu tiên là lập phương trình hoành độ giao điểm giữa $(P)$ và $d$ để tìm các cận tự nhiên. Tiếp theo, ta xét dấu hiệu số $f(x) - g(x)$ trên khoảng giữa hai giao điểm để phá dấu giá trị tuyệt đối và tính tích phân bằng công thức Newton–Leibniz.',
      steps: [
        'Bước 1 (Phương trình hoành độ giao điểm): Giải $x^2 - 2x = x \\iff x^2 - 3x = 0 \\iff x = 0$ hoặc $x = 3$. Vậy hai cận tích phân là $a = 0, b = 3$.',
        'Bước 2 (Thiết lập công thức diện tích): $$S = \\int_{0}^{3} |(x^2 - 2x) - x|\\,dx = \\int_{0}^{3} |x^2 - 3x|\\,dx$$',
        'Bước 3 (Phá dấu giá trị tuyệt đối): Trên đoạn $[0; 3]$, biểu thức $x^2 - 3x \\le 0$ nên $|x^2 - 3x| = 3x - x^2$.',
        'Bước 4 (Tính tích phân): $$S = \\int_{0}^{3} (3x - x^2)\\,dx = \\left[\\frac{3x^2}{2} - \\frac{x^3}{3}\\right]_{0}^{3} = \\left(\\frac{27}{2} - 9\\right) - 0 = \\frac{9}{2}$$',
      ],
      finalConclusion:
        'Diện tích hình phẳng giới hạn bởi $(P)$ và $d$ bằng $S = \\frac{9}{2} = 4.5$ (đơn vị diện tích).',
    },
    commonPitfalls: [
      {
        mistake: 'Quên hệ số π hoặc quên bình phương hàm f(x) trong công thức tính thể tích khối tròn xoay.',
        correction: 'Phân biệt rõ: thiết diện diện tích S(x) thì V = ∫ S(x)dx; còn quay đồ thị y = f(x) quanh Ox thì S(x) = π[f(x)]^2.',
        explanation:
          'Mặt cắt vuông góc với trục Ox của khối tròn xoay là hình tròn bán kính R = |f(x)| nên diện tích mặt cắt là πR^2.',
      },
    ],
    sampleQuestionTemplates: [
      {
        questionText:
          'Tính thể tích $V$ của khối tròn xoay tạo thành khi quay hình phẳng giới hạn bởi đồ thị hàm số $y = \\sqrt{x}$, trục hoành $Ox$ và hai đường thẳng $x = 0, x = 4$ quanh trục $Ox$.',
        options: ['V = 8\\pi', 'V = 8', 'V = 4\\pi', 'V = \\frac{16\\pi}{3}'],
        correctAnswer: 'V = 8\\pi',
        detailedDerivation:
          'Áp dụng công thức thể tích khối tròn xoay quanh trục $Ox$: $$V = \\pi \\int_{0}^{4} (\\sqrt{x})^2\\,dx = \\pi \\int_{0}^{4} x\\,dx = \\pi \\left[\\frac{x^2}{2}\\right]_{0}^{4} = 8\\pi$$',
        cognitiveLevel: 'Vận dụng',
      },
      {
        questionText:
          'Một ô tô đang chạy với vận tốc $20\\text{ m/s}$ thì người lái đạp phanh; từ thời điểm đó ô tô chuyển động chậm dần đều với vận tốc $v(t) = 20 - 4t\\text{ (m/s)}$. Quãng đường ô tô đi thêm được từ lúc đạp phanh đến khi dừng hẳn là bao nhiêu?',
        options: ['s = 50\\text{ m}', 's = 100\\text{ m}', 's = 40\\text{ m}', 's = 25\\text{ m}'],
        correctAnswer: 's = 50\\text{ m}',
        detailedDerivation:
          'Khi ô tô dừng hẳn: $v(t) = 20 - 4t = 0 \\iff t = 5\\text{ s}$. Quãng đường đi được là $s = \\int_{0}^{5} (20 - 4t)\\,dt = \\left[20t - 2t^2\\right]_{0}^{5} = 100 - 50 = 50\\text{ m}$.',
        cognitiveLevel: 'Vận dụng',
      },
      {
        questionText:
          'Cho hàm số $f(x)$ liên tục trên $\\mathbb{R}$ thỏa mãn $\\int_{0}^{2} f(x)\\,dx = 5$. Giá trị của tích phân $I = \\int_{0}^{1} f(2x)\\,dx$ bằng bao nhiêu?',
        options: ['I = \\frac{5}{2}', 'I = 10', 'I = 5', 'I = \\frac{5}{4}'],
        correctAnswer: 'I = \\frac{5}{2}',
        detailedDerivation:
          'Đặt $t = 2x \\implies dt = 2\\,dx \\iff dx = \\frac{1}{2}\\,dt$. Đổi cận: $x = 0 \\implies t = 0$; $x = 1 \\implies t = 2$. Suy ra $I = \\frac{1}{2} \\int_{0}^{2} f(t)\\,dt = \\frac{5}{2}$.',
        cognitiveLevel: 'Vận dụng cao',
      },
    ],
  },
  {
    id: 'math12-ch5-oxyz-geometry',
    subject: 'math',
    grade: 12,
    chapter: 'Chương II & V: Vectơ và Phương pháp tọa độ trong không gian Oxyz',
    topicName: 'Phương trình mặt phẳng, đường thẳng, mặt cầu và khoảng cách',
    learningObjectives: [
      'Tính được tích vô hướng, tích có hướng của hai vectơ và ứng dụng tìm vectơ pháp tuyến, vectơ chỉ phương.',
      'Lập được phương trình tổng quát của mặt phẳng, phương trình tham số/chính tắc của đường thẳng và phương trình mặt cầu.',
      'Tính được góc và khoảng cách giữa điểm, đường thẳng, mặt phẳng trong hệ trục Oxyz.',
    ],
    keyFormulasAndRules: [
      {
        name: 'Phương trình mặt phẳng và Khoảng cách từ điểm đến mặt phẳng',
        latexOrRule: '(P): Ax + By + Cz + D = 0, \\quad d(M_0, (P)) = \\frac{|Ax_0 + By_0 + Cz_0 + D|}{\\sqrt{A^2 + B^2 + C^2}}',
        description:
          'Vectơ pháp tuyến của mặt phẳng (P) là n = (A; B; C) ≠ (0; 0; 0).',
      },
      {
        name: 'Phương trình mặt cầu tâm I(a; b; c) bán kính R',
        latexOrRule: '(x - a)^2 + (y - b)^2 + (z - c)^2 = R^2 \\iff x^2 + y^2 + z^2 - 2ax - 2by - 2cz + d = 0',
        description:
          'Điều kiện để phương trình dạng khai triển là mặt cầu: a^2 + b^2 + c^2 - d > 0 và R = √(a^2 + b^2 + c^2 - d).',
      },
    ],
    workedExample: {
      problemStatement:
        'Trong không gian $Oxyz$, viết phương trình mặt cầu $(S)$ có tâm $I(2; -1; 3)$ và tiếp xúc với mặt phẳng $(P): 2x - y + 2z - 10 = 0$.',
      logicReasoning:
        'Để lập phương trình mặt cầu $(S)$, ta cần biết tọa độ tâm $I$ và bán kính $R$. Vì mặt cầu $(S)$ tiếp xúc với mặt phẳng $(P)$, điều kiện hình học tương đương là bán kính $R$ của mặt cầu bằng đúng khoảng cách từ tâm $I$ đến mặt phẳng $(P)$: $R = d(I, (P))$.',
      steps: [
        'Bước 1 (Điều kiện tiếp xúc): Mặt cầu $(S)$ tâm $I(2; -1; 3)$ tiếp xúc với $(P)$ khi và chỉ khi $R = d(I, (P))$.',
        'Bước 2 (Tính bán kính $R$): $$R = \\frac{|2(2) - 1(-1) + 2(3) - 10|}{\\sqrt{2^2 + (-1)^2 + 2^2}} = \\frac{|4 + 1 + 6 - 10|}{\\sqrt{9}} = \\frac{1}{3}$$',
        'Bước 3 (Viết phương trình mặt cầu): Thay tọa độ tâm $I(2; -1; 3)$ và $R^2 = \\frac{1}{9}$ vào phương trình chính tắc: $$(x - 2)^2 + (y + 1)^2 + (z - 3)^2 = \\frac{1}{9}$$',
      ],
      finalConclusion:
        'Phương trình mặt cầu cần tìm là $(x - 2)^2 + (y + 1)^2 + (z - 3)^2 = \\frac{1}{9}$.',
    },
    commonPitfalls: [
      {
        mistake: 'Dùng công thức cosin góc giữa hai vectơ cho góc giữa đường thẳng và mặt phẳng.',
        correction: 'Góc φ giữa đường thẳng d (VTCP u) và mặt phẳng (P) (VTPT n) tính bằng sin φ = |u · n| / (|u|·|n|).',
        explanation:
          'Vì vectơ pháp tuyến n vuông góc với mặt phẳng (P), góc giữa u và n là góc phụ với góc giữa đường thẳng và mặt phẳng.',
      },
    ],
    sampleQuestionTemplates: [
      {
        questionText:
          'Trong không gian $Oxyz$, khoảng cách từ điểm $M(1; -2; 3)$ đến mặt phẳng $(P): 2x - 2y + z + 3 = 0$ bằng bao nhiêu?',
        options: ['d = 4', 'd = 3', 'd = \\frac{12}{5}', 'd = 2'],
        correctAnswer: 'd = 4',
        detailedDerivation:
          'Áp dụng công thức khoảng cách từ điểm đến mặt phẳng: $$d(M, (P)) = \\frac{|2(1) - 2(-2) + 1(3) + 3|}{\\sqrt{2^2 + (-2)^2 + 1^2}} = \\frac{|2 + 4 + 3 + 3|}{\\sqrt{9}} = \\frac{12}{3} = 4$$',
        cognitiveLevel: 'Thông hiểu',
      },
      {
        questionText:
          'Trong không gian $Oxyz$, cho đường thẳng $d: \\frac{x - 1}{2} = \\frac{y + 1}{-1} = \\frac{z}{2}$ và mặt phẳng $(P): x + 2y + 2z - 5 = 0$. Giá trị $\\sin$ của góc giữa đường thẳng $d$ và mặt phẳng $(P)$ bằng bao nhiêu?',
        options: ['\\sin \\varphi = \\frac{4}{9}', '\\sin \\varphi = \\frac{2}{9}', '\\sin \\varphi = \\frac{\\sqrt{65}}{9}', '\\sin \\varphi = \\frac{4}{3}'],
        correctAnswer: '\\sin \\varphi = \\frac{4}{9}',
        detailedDerivation:
          'Đường thẳng $d$ có VTCP $\\vec{u} = (2; -1; 2)$ ($|\\vec{u}| = 3$); mặt phẳng $(P)$ có VTPT $\\vec{n} = (1; 2; 2)$ ($|\\vec{n}| = 3$). Áp dụng công thức: $$\\sin \\varphi = \\frac{|\\vec{u} \\cdot \\vec{n}|}{|\\vec{u}| \\cdot |\\vec{n}|} = \\frac{|2(1) + (-1)(2) + 2(2)|}{3 \\cdot 3} = \\frac{4}{9}$$',
        cognitiveLevel: 'Vận dụng',
      },
      {
        questionText:
          'Trong không gian $Oxyz$, mặt cầu $(S)$ tâm $I(1; 1; -1)$ cắt đường thẳng $d: \\frac{x - 2}{1} = \\frac{y}{1} = \\frac{z + 1}{2}$ tại hai điểm $A, B$ sao cho $AB = 2\\sqrt{3}$ có bán kính $R$ bằng bao nhiêu?',
        options: ['R = \\sqrt{5}', 'R = 3', 'R = \\sqrt{7}', 'R = 2'],
        correctAnswer: 'R = \\sqrt{5}',
        detailedDerivation:
          'Đường thẳng $d$ đi qua $M(2; 0; -1)$ và có VTCP $\\vec{u} = (1; 1; 2)$. Ta có $\\overrightarrow{IM} = (1; -1; 0)$, suy ra $\\overrightarrow{IM} \\cdot \\vec{u} = 1(1) + (-1)(1) + 0(2) = 0 \\implies IM \\perp d$. Do đó khoảng cách từ tâm $I$ đến đường thẳng $d$ là $h = d(I, d) = IM = \\sqrt{1^2 + (-1)^2 + 0^2} = \\sqrt{2}$. Theo định lý Pythagore cho dây cung $AB = 2\\sqrt{3}$: $$R = \\sqrt{h^2 + \\left(\\frac{AB}{2}\\right)^2} = \\sqrt{(\\sqrt{2})^2 + (\\sqrt{3})^2} = \\sqrt{2 + 3} = \\sqrt{5}$$',
        cognitiveLevel: 'Vận dụng cao',
      },
    ],
  },
  {
    id: 'math12-ch6-conditional-probability-bayes',
    subject: 'math',
    grade: 12,
    chapter: 'Chương VI: Xác suất có điều kiện',
    topicName: 'Xác suất có điều kiện, Công thức xác suất toàn phần và Công thức Bayes',
    learningObjectives: [
      'Tính được xác suất có điều kiện P(A|B) bằng định nghĩa hoặc sơ đồ hình cây.',
      'Vận dụng được công thức nhân xác suất cho hai biến cố bất kỳ P(AB) = P(B)·P(A|B).',
      'Giải được các bài toán thực tiễn (chẩn đoán y khoa, kiểm định chất lượng sản phẩm) bằng công thức xác suất toàn phần và công thức Bayes.',
    ],
    keyFormulasAndRules: [
      {
        name: 'Công thức xác suất có điều kiện & Nhân xác suất',
        latexOrRule: 'P(A|B) = \\frac{P(A \\cap B)}{P(B)} \\quad (P(B) > 0) \\implies P(A \\cap B) = P(B)\\cdot P(A|B)',
        description:
          'Nếu A và B độc lập thì P(A|B) = P(A) và P(AB) = P(A)·P(B).',
      },
      {
        name: 'Công thức xác suất toàn phần & Công thức Bayes',
        latexOrRule: 'P(A) = P(B)P(A|B) + P(\\bar{B})P(A|\\bar{B}), \\quad P(B|A) = \\frac{P(B)P(A|B)}{P(A)}',
        description:
          'Cho phép cập nhật xác suất hậu nghiệm P(B|A) sau khi quan sát biến cố kết quả A.',
      },
    ],
    workedExample: {
      problemStatement:
        'Một xét nghiệm y tế cho một loại bệnh hiếm gặp (tỉ lệ người mắc trong cộng đồng là $1\\%$) có độ nhạy là $99\\%$ (nếu có bệnh thì $99\\%$ cho kết quả dương tính) và tỉ lệ dương tính giả là $2\\%$ (nếu không bệnh thì vẫn có $2\\%$ cho kết quả dương tính). Một người đi xét nghiệm nhận kết quả dương tính. Tính xác suất người đó thực sự mắc bệnh.',
      logicReasoning:
        'Ta biết các xác suất thuận từ nguyên nhân (mắc bệnh hay không) sang kết quả (dương tính), nhưng bài toán hỏi xác suất ngược từ kết quả dương tính quay lại nguyên nhân mắc bệnh. Do đó, ta dùng công thức xác suất toàn phần để tính tổng xác suất có kết quả dương tính $P(A)$, rồi áp dụng công thức Bayes để tính $P(B|A)$.',
      steps: [
        'Bước 1 (Đặt biến cố): Gọi $B$ là biến cố "người đó mắc bệnh" ($P(B) = 0.01 \\implies P(\\bar{B}) = 0.99$) và $A$ là biến cố "kết quả xét nghiệm dương tính".',
        'Bước 2 (Xác định xác suất thành phần): Theo đề bài, $P(A|B) = 0.99$ và $P(A|\\bar{B}) = 0.02$.',
        'Bước 3 (Áp dụng công thức xác suất toàn phần): $$P(A) = P(B)P(A|B) + P(\\bar{B})P(A|\\bar{B}) = 0.01 \\times 0.99 + 0.99 \\times 0.02 = 0.0099 + 0.0198 = 0.0297$$',
        'Bước 4 (Áp dụng công thức Bayes): $$P(B|A) = \\frac{P(B)P(A|B)}{P(A)} = \\frac{0.0099}{0.0297} = \\frac{1}{3} \\approx 33.33\\%$$',
      ],
      finalConclusion:
        'Mặc dù xét nghiệm có độ nhạy $99\\%$, xác suất người có kết quả dương tính thực sự mắc bệnh là $\\frac{1}{3} \\approx 33.33\\%$ do bệnh rất hiếm trong cộng đồng.',
    },
    commonPitfalls: [
      {
        mistake: 'Nhầm lẫn giữa xác suất có điều kiện P(A|B) và xác suất giao P(A ∩ B), hoặc đảo ngược P(A|B) với P(B|A).',
        correction: 'Xác định rõ biến cố nào ĐÃ XẢY RA (đặt sau dấu gạch đứng "|") và vẽ sơ đồ hình cây xác suất để kiểm tra.',
        explanation:
          'Trong bài toán xét nghiệm bệnh, P(Dương tính | Có bệnh) là độ nhạy của xét nghiệm, khác hẳn với P(Có bệnh | Dương tính) cần tính bằng định lý Bayes.',
      },
    ],
    sampleQuestionTemplates: [
      {
        questionText:
          'Một nhà máy có hai dây chuyền I và II sản xuất lần lượt 60% và 40% tổng sản lượng. Tỉ lệ phế phẩm của dây chuyền I là 2%, của dây chuyền II là 3%. Chọn ngẫu nhiên 1 sản phẩm thấy đó là phế phẩm. Xác suất sản phẩm đó do dây chuyền I sản xuất bằng bao nhiêu?',
        options: ['P = 0.50', 'P = 0.024', 'P = 0.60', 'P = 0.40'],
        correctAnswer: 'P = 0.50',
        detailedDerivation:
          'Gọi $B_1, B_2$ là biến cố sản phẩm thuộc dây chuyền I, II; $A$ là biến cố sản phẩm là phế phẩm. Theo công thức xác suất toàn phần: $$P(A) = 0.60 \\times 0.02 + 0.40 \\times 0.03 = 0.012 + 0.012 = 0.024$$ Theo công thức Bayes: $$P(B_1|A) = \\frac{0.60 \\times 0.02}{0.024} = \\frac{0.012}{0.024} = 0.50$$',
        cognitiveLevel: 'Vận dụng cao',
      },
      {
        questionText:
          'Cho hai biến cố $A$ và $B$ có $P(B) = 0.6$, $P(A \\cap B) = 0.24$. Xác suất có điều kiện $P(A|B)$ bằng bao nhiêu?',
        options: ['P(A|B) = 0.40', 'P(A|B) = 0.144', 'P(A|B) = 0.36', 'P(A|B) = 0.60'],
        correctAnswer: 'P(A|B) = 0.40',
        detailedDerivation:
          'Theo định nghĩa xác suất có điều kiện: $P(A|B) = \\frac{P(A \\cap B)}{P(B)} = \\frac{0.24}{0.6} = 0.40$.',
        cognitiveLevel: 'Nhận biết',
      },
      {
        questionText:
          'Hộp thứ nhất có $4$ bi đỏ và $6$ bi xanh; hộp thứ hai có $7$ bi đỏ và $3$ bi xanh. Chọn ngẫu nhiên $1$ hộp rồi từ hộp đó lấy ngẫu nhiên $1$ viên bi thì được bi màu đỏ. Xác suất viên bi đỏ đó thuộc hộp thứ hai là bao nhiêu?',
        options: ['P = \\frac{7}{11}', 'P = \\frac{4}{11}', 'P = \\frac{11}{20}', 'P = \\frac{7}{10}'],
        correctAnswer: 'P = \\frac{7}{11}',
        detailedDerivation:
          'Gọi $H_1, H_2$ là biến cố chọn hộp 1, hộp 2 ($P(H_1) = P(H_2) = 0.5$) và $R$ là biến cố lấy được bi đỏ. Ta có $P(R|H_1) = 0.4$, $P(R|H_2) = 0.7$. Xác suất toàn phần $P(R) = 0.5(0.4 + 0.7) = 0.55$. Theo công thức Bayes: $P(H_2|R) = \\frac{0.5 \\times 0.7}{0.55} = \\frac{7}{11}$.',
        cognitiveLevel: 'Vận dụng cao',
      },
    ],
  },
];

export const math12Topics: CurriculumTopic[] = rawMath12Topics.map((topic) =>
  CurriculumTopicSchema.parse(topic)
);
