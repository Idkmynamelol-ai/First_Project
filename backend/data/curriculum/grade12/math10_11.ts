import { CurriculumTopic, CurriculumTopicSchema } from './schema';

const rawMath10And11Topics: CurriculumTopic[] = [
  /* ==================== TOÁN 10 (SGK GDPT 2018 - KNTT & Cánh Diều) ==================== */
  {
    id: 'math10-ch1-linear-inequality-systems',
    subject: 'math',
    grade: 10,
    chapter: 'Chương II (SGK Toán 10): Bất phương trình và hệ bất phương trình bậc nhất hai ẩn',
    topicName: 'Miền nghiệm của hệ bất phương trình bậc nhất hai ẩn & Bài toán quy hoạch tuyến tính',
    learningObjectives: [
      'Biểu diễn được miền nghiệm của bất phương trình và hệ bất phương trình bậc nhất hai ẩn trên mặt phẳng tọa độ Oxy.',
      'Xác định được các đỉnh của miền đa giác nghiệm lồi giới hạn bởi hệ bất phương trình.',
      'Vận dụng giải bài toán tối ưu thực tiễn (tối đa hóa lợi nhuận, tối thiểu hóa chi phí sản xuất) bằng cách tính giá trị biểu thức F(x; y) = ax + by tại các đỉnh.',
    ],
    keyFormulasAndRules: [
      {
        name: 'Bất phương trình bậc nhất hai ẩn & Nửa mặt phẳng bờ d',
        latexOrRule: 'ax + by + c \\le 0 \\quad (a^2 + b^2 > 0)',
        description:
          'Đường thẳng d: ax + by + c = 0 chia mặt phẳng Oxy thành 2 nửa mặt phẳng; lấy điểm thử M_0(x_0; y_0) không thuộc d để xác định miền nghiệm.',
      },
      {
        name: 'Định lý quy hoạch tuyến tính trên miền đa giác lồi',
        latexOrRule: '\\max / \\min_{(x;y) \\in \\Omega} F(x; y) = ax + by \\text{ đạt tại một trong các đỉnh } A_i(x_i; y_i) \\text{ của đa giác } \\Omega',
        description:
          'Thay tọa độ các đỉnh của miền nghiệm đa giác vào hàm mục tiêu F(x; y) rồi so sánh để kết luận GTLN hoặc GTNN.',
      },
    ],
    workedExample: {
      problemStatement:
        'Một xưởng sản xuất hai loại sản phẩm I và II. Mỗi kg sản phẩm I cần $2\\text{ kg}$ nguyên liệu và $30\\text{ giờ}$ làm việc, đem lại lợi nhuận $40\\text{ nghìn đồng}$. Mỗi kg sản phẩm II cần $4\\text{ kg}$ nguyên liệu và $15\\text{ giờ}$ làm việc, đem lại lợi nhuận $30\\text{ nghìn đồng}$. Xưởng có tối đa $200\\text{ kg}$ nguyên liệu và $1200\\text{ giờ}$ làm việc. Hỏi xưởng nên sản xuất bao nhiêu kg mỗi loại để tổng lợi nhuận lớn nhất?',
      logicReasoning:
        'Gọi $x, y$ ($x \\ge 0, y \\ge 0$) lần lượt là số kg sản phẩm loại I và loại II. Ràng buộc về nguyên liệu và giờ công tạo thành một hệ bất phương trình bậc nhất hai ẩn xác định miền đa giác lồi $\\Omega$. Hàm mục tiêu lợi nhuận $F(x; y) = 40x + 30y$ đạt giá trị lớn nhất tại một trong các đỉnh của tứ giác miền nghiệm.',
      steps: [
        'Bước 1 (Lập hệ bất phương trình ràng buộc): Với $x, y \\ge 0$, điều kiện nguyên liệu là $2x + 4y \\le 200 \\iff x + 2y \\le 100$; điều kiện giờ làm việc là $30x + 15y \\le 1200 \\iff 2x + y \\le 80$.',
        'Bước 2 (Tìm tọa độ các đỉnh của miền nghiệm $\\Omega$): Miền nghiệm là tứ giác lồi $OABC$ với $O(0; 0)$, $A(40; 0)$ (giao của $2x+y=80$ với $Ox$), $C(0; 50)$ (giao của $x+2y=100$ với $Oy$), và $B$ là giao điểm của $\\begin{cases} x + 2y = 100 \\\\ 2x + y = 80 \\end{cases} \\implies B(20; 40)$.',
        'Bước 3 (Tính giá trị hàm mục tiêu $F(x; y) = 40x + 30y$ tại các đỉnh): $F(0; 0) = 0$; $F(40; 0) = 1600$; $F(0; 50) = 1500$; $F(20; 40) = 40(20) + 30(40) = 2000$ (nghìn đồng).',
      ],
      finalConclusion:
        'Lợi nhuận lớn nhất là $2000\\text{ nghìn đồng}$ ($2\\text{ triệu đồng}$) khi sản xuất $20\\text{ kg}$ sản phẩm I và $40\\text{ kg}$ sản phẩm II.',
    },
    commonPitfalls: [
      {
        mistake: 'Quên điều kiện không âm x ≥ 0, y ≥ 0 khi xác định các đỉnh của miền đa giác nghiệm.',
        correction: 'Luôn kiểm tra điều kiện thực tế x ≥ 0, y ≥ 0 (góc phần tư thứ nhất) trước khi tìm giao điểm.',
        explanation:
          'Trong bài toán thực tế về số lượng sản phẩm, diện tích hoặc khối lượng, các biến số không bao giờ nhận giá trị âm.',
      },
    ],
    sampleQuestionTemplates: [
      {
        questionText:
          'Biểu thức $F(x; y) = 3x + 2y$ đạt giá trị lớn nhất trên miền đa giác không gạch chéo có các đỉnh $O(0; 0)$, $A(0; 4)$, $B(3; 3)$, $C(5; 0)$ bằng bao nhiêu?',
        options: ['F_{\\max} = 15', 'F_{\\max} = 14', 'F_{\\max} = 8', 'F_{\\max} = 18'],
        correctAnswer: 'F_{\\max} = 15',
        detailedDerivation:
          'Tính giá trị của $F(x; y) = 3x + 2y$ tại các đỉnh: $F(0;0) = 0$; $F(0;4) = 8$; $F(3;3) = 3(3) + 2(3) = 15$; $F(5;0) = 15$. Vậy giá trị lớn nhất của $F(x; y)$ trên miền đã cho bằng $15$.',
        cognitiveLevel: 'Thông hiểu',
      },
      {
        questionText:
          'Một hộ nông dân định trồng đậu và cà trên diện tích tối đa $8\\text{ ha}$. Nếu trồng đậu thì cần $20$ công và thu $3\\text{ triệu đồng/ha}$; nếu trồng cà thì cần $30$ công và thu $4\\text{ triệu đồng/ha}$. Tổng số công không quá $180$. Số tiền thu được nhiều nhất là bao nhiêu triệu đồng?',
        options: ['26\\text{ triệu đồng}', '24\\text{ triệu đồng}', '28\\text{ triệu đồng}', '25\\text{ triệu đồng}'],
        correctAnswer: '26\\text{ triệu đồng}',
        detailedDerivation:
          'Gọi $x, y \\ge 0$ là số ha trồng đậu và cà. Hệ ràng buộc: $x + y \\le 8$ và $20x + 30y \\le 180 \\iff 2x + 3y \\le 18$. Các đỉnh miền nghiệm: $O(0;0), A(8;0), B(6;2), C(0;6)$. Hàm thu nhập $T(x; y) = 3x + 4y$ có $T(8;0)=24$, $T(6;2)=3(6)+4(2)=26$, $T(0;6)=24$. Vậy thu nhập lớn nhất là $26\\text{ triệu đồng}$.',
        cognitiveLevel: 'Vận dụng',
      },
      {
        questionText:
          'Trên mặt phẳng tọa độ $Oxy$, miền nghiệm của hệ bất phương trình $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ 3x + 4y \\le 12 \\end{cases}$ là một tam giác vuông. Diện tích $S$ của tam giác đó bằng bao nhiêu?',
        options: ['S = 6', 'S = 12', 'S = 7', 'S = 24'],
        correctAnswer: 'S = 6',
        detailedDerivation:
          'Đường thẳng $3x + 4y = 12$ cắt trục $Ox$ tại $A(4; 0)$ và cắt trục $Oy$ tại $B(0; 3)$. Miền nghiệm là tam giác vuông $OAB$ tại $O$ có diện tích $S = \\frac{1}{2} OA \\cdot OB = \\frac{1}{2} \\cdot 4 \\cdot 3 = 6$.',
        cognitiveLevel: 'Nhận biết',
      },
      {
        questionText:
          'Tìm giá trị nhỏ nhất của biểu thức $F(x; y) = x - 2y$ trên miền nghiệm của hệ $\\begin{cases} 0 \\le y \\le 4 \\\\ x \\ge 0 \\\\ x - y - 1 \\le 0 \\\\ x + 2y - 10 \\le 0 \\end{cases}$.',
        options: ['F_{\\min} = -8', 'F_{\\min} = -6', 'F_{\\min} = 0', 'F_{\\min} = -5'],
        correctAnswer: 'F_{\\min} = -8',
        detailedDerivation:
          'Các đỉnh của miền đa giác nghiệm là $O(0;0)$, $A(1;0)$, $B(4;3)$, $C(2;4)$, $D(0;4)$. Thay vào $F(x;y) = x - 2y$: $F(0;0)=0$, $F(1;0)=1$, $F(4;3)=-2$, $F(2;4)=-6$, $F(0;4)=-8$. Vậy giá trị nhỏ nhất là $F_{\\min} = -8$ tại đỉnh $D(0;4)$.',
        cognitiveLevel: 'Vận dụng',
      },
    ],
  },
  {
    id: 'math10-ch8-9-combinatorics-conics',
    subject: 'math',
    grade: 10,
    chapter: 'Chương VIII & IX (SGK Toán 10): Đại số tổ hợp & Ba đường Conic trong mặt phẳng Oxy',
    topicName: 'Hoán vị, Chỉnh hợp, Tổ hợp, Nhị thức Newton & Phương trình chuẩn tắc Elip, Hypebol, Parabol',
    learningObjectives: [
      'Phân biệt và áp dụng chính xác quy tắc cộng, quy tắc nhân, hoán vị P_n, chỉnh hợp A_n^k và tổ hợp C_n^k.',
      'Khai triển được nhị thức Newton (a + b)^n (n ≤ 5) và tìm hệ số của số hạng chứa x^k.',
      'Viết được phương trình chính tắc, xác định tiêu điểm và tiêu cự của Elip, Hypebol và Parabol.',
    ],
    keyFormulasAndRules: [
      {
        name: 'Công thức Hoán vị, Chỉnh hợp và Tổ hợp',
        latexOrRule: 'P_n = n!, \\quad A_n^k = \\frac{n!}{(n-k)!}, \\quad C_n^k = \\frac{n!}{k!(n-k)!}',
        description:
          'Chọn k phần tử từ n phần tử: nếu CÓ thứ tự thì dùng chỉnh hợp A_n^k; nếu KHÔNG phân biệt thứ tự thì dùng tổ hợp C_n^k.',
      },
      {
        name: 'Phương trình chính tắc của Elip và tiêu cự 2c',
        latexOrRule: '(E): \\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1 \\quad (a > b > 0, \\; c^2 = a^2 - b^2)',
        description:
          'Hai tiêu điểm F_1(-c; 0), F_2(c; 0); tổng khoảng cách từ điểm M thuộc (E) đến hai tiêu điểm luôn bằng MF_1 + MF_2 = 2a.',
      },
    ],
    workedExample: {
      problemStatement:
        'Một hộp chứa $6$ quả cầu trắng và $4$ quả cầu đen khác nhau. Lấy ngẫu nhiên đồng thời $3$ quả cầu từ hộp. Tính xác suất để trong $3$ quả cầu lấy ra có ít nhất $1$ quả cầu đen.',
      logicReasoning:
        'Khi gặp yêu cầu "có ít nhất 1 phần tử loại X", việc chia trường hợp trực tiếp (1 đen, 2 đen, 3 đen) dài hơn việc dùng biến cố đối $\\bar{A}$: "cả 3 quả cầu lấy ra đều là màu trắng". Ta tính không gian mẫu $n(\\Omega) = C_{10}^3$ và số phần tử biến cố đối $n(\\bar{A}) = C_6^3$, từ đó suy ra $P(A) = 1 - P(\\bar{A})$.',
      steps: [
        'Bước 1 (Tính số phần tử không gian mẫu): Chọn ngẫu nhiên $3$ quả từ $10$ quả cầu có $n(\\Omega) = C_{10}^3 = \\frac{10 \\times 9 \\times 8}{3!} = 120$ cách.',
        'Bước 2 (Xét biến cố đối $\\bar{A}$): Biến cố $\\bar{A}$ là "3 quả lấy ra đều màu trắng" có $n(\\bar{A}) = C_6^3 = 20$ cách.',
        'Bước 3 (Tính xác suất): $$P(A) = 1 - \\frac{n(\\bar{A})}{n(\\Omega)} = 1 - \\frac{20}{120} = 1 - \\frac{1}{6} = \\frac{5}{6}$$',
      ],
      finalConclusion:
        'Xác suất để lấy được ít nhất $1$ quả cầu đen là $P(A) = \\frac{5}{6}$.',
    },
    commonPitfalls: [
      {
        mistake: 'Nhầm lẫn hệ thức tiêu cự giữa Elip (c^2 = a^2 - b^2) và Hypebol (c^2 = a^2 + b^2).',
        correction: 'Trong Elip thì a > b > 0 và c^2 = a^2 - b^2; trong Hypebol thì c > a > 0 và c^2 = a^2 + b^2.',
        explanation:
          'Tiêu điểm của Elip nằm bên trong trục lớn [-a; a], còn tiêu điểm của Hypebol nằm ngoài hai đỉnh thực.',
      },
    ],
    sampleQuestionTemplates: [
      {
        questionText:
          'Trong mặt phẳng $Oxy$, cho elip $(E): \\frac{x^2}{25} + \\frac{y^2}{9} = 1$. Tiêu cự $2c$ của elip $(E)$ bằng bao nhiêu?',
        options: ['2c = 8', '2c = 4', '2c = 10', '2c = \\sqrt{34}'],
        correctAnswer: '2c = 8',
        detailedDerivation:
          'Từ phương trình $(E)$, ta có $a^2 = 25$ và $b^2 = 9 \\implies c = \\sqrt{a^2 - b^2} = \\sqrt{25 - 9} = 4$. Vậy tiêu cự của elip là $2c = 8$.',
        cognitiveLevel: 'Nhận biết',
      },
      {
        questionText:
          'Tìm hệ số của số hạng chứa $x^3$ trong khai triển nhị thức Newton của biểu thức $(2x - 1)^5$.',
        options: ['80', '-80', '-40', '40'],
        correctAnswer: '80',
        detailedDerivation:
          'Số hạng tổng quát trong khai triển $(2x - 1)^5$ là $T_{k+1} = C_5^k (2x)^{5-k} (-1)^k = C_5^k \\cdot 2^{5-k} \\cdot (-1)^k \\cdot x^{5-k}$. Số hạng chứa $x^3$ ứng với $5 - k = 3 \\iff k = 2$. Vậy hệ số của $x^3$ là $C_5^2 \\cdot 2^3 \\cdot (-1)^2 = 10 \\cdot 8 \\cdot 1 = 80$.',
        cognitiveLevel: 'Thông hiểu',
      },
      {
        questionText:
          'Một tổ gồm $7$ học sinh nam và $5$ học sinh nữ. Có bao nhiêu cách chọn ra một đội trực nhật gồm $4$ học sinh sao cho có ít nhất $1$ học sinh nam và ít nhất $1$ học sinh nữ?',
        options: ['455', '495', '350', '420'],
        correctAnswer: '455',
        detailedDerivation:
          'Tổng số cách chọn $4$ học sinh bất kỳ từ $12$ học sinh là $C_{12}^4 = 495$. Số cách chọn toàn nam là $C_7^4 = 35$; số cách chọn toàn nữ là $C_5^4 = 5$. Vậy số cách chọn thỏa mãn có cả nam và nữ là $495 - (35 + 5) = 455$ cách.',
        cognitiveLevel: 'Vận dụng',
      },
      {
        questionText:
          'Một gương parabol có mặt cắt qua trục là parabol $(P): y^2 = 8x$ ($x, y$ tính bằng cm). Nguồn sáng đặt tại tiêu điểm $F$ của parabol thì cách đỉnh $O$ một khoảng bằng bao nhiêu?',
        options: ['2\\text{ cm}', '4\\text{ cm}', '8\\text{ cm}', '1\\text{ cm}'],
        correctAnswer: '2\\text{ cm}',
        detailedDerivation:
          'Phương trình chính tắc của parabol có dạng $y^2 = 2px$. Đối chiếu với $y^2 = 8x \\implies 2p = 8 \\implies p = 4$. Tiêu điểm $F\\left(\\frac{p}{2}; 0\\right) = F(2; 0)$, nên khoảng cách từ nguồn sáng $F$ đến đỉnh $O$ bằng $\\frac{p}{2} = 2\\text{ cm}$.',
        cognitiveLevel: 'Vận dụng',
      },
    ],
  },
  {
    id: 'math10-ch4-trig-vectors',
    subject: 'math',
    grade: 10,
    chapter: 'Chương IV (SGK Toán 10): Hệ thức lượng trong tam giác & Vectơ',
    topicName: 'Định lý Cosin, Định lý Sin, Công thức tính diện tích tam giác và Tích vô hướng của hai vectơ',
    learningObjectives: [
      'Áp dụng thành thạo định lý cosin, định lý sin và các công thức tính diện tích tam giác (Heron, bán kính R, r) để giải tam giác.',
      'Tính được tích vô hướng của hai vectơ, góc giữa hai vectơ và chứng minh hai vectơ vuông góc.',
      'Giải quyết được các bài toán thực tiễn về đo đạc khoảng cách, chiều cao và tổng hợp lực trong đời sống.',
    ],
    keyFormulasAndRules: [
      {
        name: 'Định lý Cosin & Định lý Sin trong tam giác',
        latexOrRule: 'a^2 = b^2 + c^2 - 2bc\\cos A; \\quad \\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R',
        description: 'Định lý cosin mở rộng định lý Pythagore cho tam giác bất kỳ; định lý sin liên hệ độ dài cạnh và góc đối diện với bán kính đường tròn ngoại tiếp R.',
      },
      {
        name: 'Tích vô hướng của hai vectơ',
        latexOrRule: '\\vec{u} \\cdot \\vec{v} = |\\vec{u}| \\cdot |\\vec{v}| \\cos(\\vec{u}, \\vec{v}) = u_1 v_1 + u_2 v_2',
        description: 'Hai vectơ khác vectơ không vuông góc với nhau khi và chỉ khi tích vô hướng của chúng bằng 0.',
      },
    ],
    workedExample: {
      problemStatement:
        'Để đo khoảng cách giữa hai điểm A và B ở hai bờ đối diện của một khúc sông mà không thể qua sông, người ta chọn một điểm C trên cùng bờ với A sao cho $CA = 60\\text{ m}$. Bằng giác kế, người ta đo được các góc $\\widehat{CAB} = 65^\\circ$ và $\\widehat{ACB} = 75^\\circ$. Hãy tính khoảng cách AB giữa hai điểm A và B (làm tròn đến hàng đơn vị mét).',
      logicReasoning:
        'Trong tam giác $ABC$, ta đã biết độ dài cạnh $b = AC = 60\\text{ m}$ và hai góc kề $\\widehat{A} = 65^\\circ, \\widehat{C} = 75^\\circ$. Áp dụng định lý tổng ba góc trong một tam giác để tính góc $\\widehat{B}$, sau đó áp dụng định lý sin $\\frac{AB}{\\sin C} = \\frac{AC}{\\sin B}$ để tính trực tiếp khoảng cách $AB$.',
      steps: [
        'Bước 1 (Tính góc B đối diện cạnh AC): $$\\widehat{B} = 180^\\circ - (\\widehat{A} + \\widehat{C}) = 180^\\circ - (65^\\circ + 75^\\circ) = 40^\\circ$$',
        'Bước 2 (Áp dụng định lý Sin để tìm độ dài cạnh AB): $$\\frac{AB}{\\sin C} = \\frac{AC}{\\sin B} \\implies AB = \\frac{AC \\cdot \\sin C}{\\sin B} = \\frac{60 \\cdot \\sin 75^\\circ}{\\sin 40^\\circ}$$',
        'Bước 3 (Thực hiện tính toán số học): Thay $\\sin 75^\\circ \\approx 0.9659$ và $\\sin 40^\\circ \\approx 0.6428$: $$AB \\approx \\frac{60 \\times 0.9659}{0.6428} \\approx 90.16\\text{ m} \\approx 90\\text{ m}$$',
      ],
      finalConclusion:
        'Khoảng cách giữa hai điểm A và B xấp xỉ bằng $90\\text{ mét}$.',
    },
    commonPitfalls: [
      {
        mistake: 'Quên góc tù khi tính cosin góc trong định lý Cosin (cos A < 0 khi A > 90°).',
        correction: 'Nếu góc A tù (90° < A < 180°) thì cos A âm, dấu trừ phía trước trở thành dấu cộng: a^2 = b^2 + c^2 - 2bc cos A > b^2 + c^2.',
        explanation: 'Nhầm dấu cosin của góc tù là lỗi rất phổ biến khi tính độ dài cạnh đối diện góc tù.',
      },
    ],
    sampleQuestionTemplates: [
      {
        questionText:
          'Cho tam giác $ABC$ có $b = 8, c = 5$ và góc $\\widehat{A} = 60^\\circ$. Độ dài cạnh $a = BC$ bằng bao nhiêu?',
        options: ['a = 7', 'a = \\sqrt{129}', 'a = 8', 'a = 6'],
        correctAnswer: 'a = 7',
        detailedDerivation:
          'Áp dụng định lý cosin: $$a^2 = b^2 + c^2 - 2bc\\cos A = 8^2 + 5^2 - 2(8)(5)\\cos 60^\\circ = 64 + 25 - 80\\left(\\frac{1}{2}\\right) = 89 - 40 = 49 \\implies a = 7$$',
        cognitiveLevel: 'Nhận biết',
      },
      {
        questionText:
          'Trong mặt phẳng tọa độ Oxy, cho hai vectơ $\\vec{u} = (2; -3)$ và $\\vec{v} = (6; 4)$. Khẳng định nào sau đây là đúng?',
        options: ['\\vec{u} \\perp \\vec{v}', '\\vec{u} \\parallel \\vec{v}', '|\\vec{u}| = |\\vec{v}|', '\\vec{u} \\cdot \\vec{v} = 24'],
        correctAnswer: '\\vec{u} \\perp \\vec{v}',
        detailedDerivation:
          'Tích vô hướng: $\\vec{u} \\cdot \\vec{v} = 2(6) + (-3)(4) = 12 - 12 = 0$. Vì tích vô hướng bằng 0 nên hai vectơ $\\vec{u}$ và $\\vec{v}$ vuông góc với nhau ($\\vec{u} \\perp \\vec{v}$).',
        cognitiveLevel: 'Thông hiểu',
      },
      {
        questionText:
          'Tam giác $ABC$ có ba cạnh lần lượt là $a = 13, b = 14, c = 15$. Diện tích $S$ của tam giác $ABC$ bằng bao nhiêu?',
        options: ['S = 84', 'S = 42', 'S = 96', 'S = 78'],
        correctAnswer: 'S = 84',
        detailedDerivation:
          'Nửa chu vi tam giác: $p = \\frac{13 + 14 + 15}{2} = 21$. Áp dụng công thức Heron: $$S = \\sqrt{p(p-a)(p-b)(p-c)} = \\sqrt{21(21-13)(21-14)(21-15)} = \\sqrt{21 \\times 8 \\times 7 \\times 6} = \\sqrt{7056} = 84$$',
        cognitiveLevel: 'Vận dụng',
      },
    ],
  },

  /* ==================== TOÁN 11 (SGK GDPT 2018 - KNTT & Cánh Diều) ==================== */
  {
    id: 'math11-ch2-3-trigonometry-sequences',
    subject: 'math',
    grade: 11,
    chapter: 'Chương I & II (SGK Toán 11): Hàm số lượng giác, Cấp số cộng & Cấp số nhân',
    topicName: 'Công thức lượng giác, Phương trình lượng giác cơ bản & Dãy số CSC - CSN',
    learningObjectives: [
      'Vận dụng thành thạo công thức cộng, công thức nhân đôi, công thức hạ bậc và giải phương trình lượng giác cơ bản.',
      'Xác định được số hạng tổng quát u_n, công sai d (hoặc công bội q) và tổng n số hạng đầu S_n của cấp số cộng, cấp số nhân.',
      'Giải được các bài toán thực tế về chu kỳ dao động điều hòa và bài toán tổng cấp số nhân.',
    ],
    keyFormulasAndRules: [
      {
        name: 'Số hạng tổng quát và Tổng n số hạng đầu của Cấp số cộng (CSC)',
        latexOrRule: 'u_n = u_1 + (n - 1)d, \\quad S_n = \\frac{n(u_1 + u_n)}{2} = \\frac{n[2u_1 + (n-1)d]}{2}',
        description:
          'Tính chất đặc trưng của CSC: u_k = (u_{k-1} + u_{k+1}) / 2 với mọi k ≥ 2.',
      },
      {
        name: 'Số hạng tổng quát và Tổng n số hạng đầu của Cấp số nhân (CSN)',
        latexOrRule: 'u_n = u_1 \\cdot q^{n-1}, \\quad S_n = \\frac{u_1(1 - q^n)}{1 - q} \\quad (q \\ne 1)',
        description:
          'Nếu |q| < 1 thì tổng cấp số nhân lùi vô hạn là S = u_1 / (1 - q).',
      },
    ],
    workedExample: {
      problemStatement:
        'Cho cấp số cộng $(u_n)$ có số hạng đầu $u_1 = 3$ và tổng của $5$ số hạng đầu tiên bằng $35$. Tìm công sai $d$, số hạng thứ $10$ ($u_{10}$) và tính tổng $S_{20}$ của $20$ số hạng đầu tiên.',
      logicReasoning:
        'Mọi đại lượng của một cấp số cộng đều được xác định hoàn toàn khi biết số hạng đầu $u_1$ và công sai $d$. Từ giả thiết $S_5 = 35$, ta dùng công thức $S_n = \\frac{n[2u_1 + (n-1)d]}{2}$ để giải phương trình bậc nhất tìm $d$, sau đó suy ra $u_{10}$ và $S_{20}$.',
      steps: [
        'Bước 1 (Tìm công sai $d$): Áp dụng công thức tổng $5$ số hạng đầu: $$S_5 = \\frac{5(2u_1 + 4d)}{2} = 35 \\iff 5(6 + 4d) = 70 \\iff 6 + 4d = 14 \\implies d = 2$$',
        'Bước 2 (Tìm số hạng thứ $10$): $$u_{10} = u_1 + 9d = 3 + 9(2) = 21$$',
        'Bước 3 (Tính tổng $20$ số hạng đầu $S_{20}$): $$S_{20} = \\frac{20[2(3) + 19(2)]}{2} = 10 \\times (6 + 38) = 440$$',
      ],
      finalConclusion:
        'Cấp số cộng có công sai $d = 2$, số hạng $u_{10} = 21$ và tổng $20$ số hạng đầu $S_{20} = 440$.',
    },
    commonPitfalls: [
      {
        mistake: 'Quên cộng chu kỳ k2π hoặc kπ khi đếm số nghiệm của phương trình lượng giác trên đoạn [a; b].',
        correction: 'Phương trình sin x = m và cos x = m có chu kỳ k2π; phương trình tan x = m và cot x = m có chu kỳ kπ.',
        explanation:
          'Việc nhầm lẫn chu kỳ k2π và kπ dẫn đến đếm thiếu hoặc thừa một nửa số nghiệm trên khoảng cho trước.',
      },
    ],
    sampleQuestionTemplates: [
      {
        questionText:
          'Cho cấp số nhân $(u_n)$ có $u_1 = 2$ và công bội $q = 3$. Giá trị của $u_4$ bằng bao nhiêu?',
        options: ['u_4 = 54', 'u_4 = 18', 'u_4 = 162', 'u_4 = 24'],
        correctAnswer: 'u_4 = 54',
        detailedDerivation:
          'Áp dụng công thức số hạng tổng quát của cấp số nhân: $u_4 = u_1 \\cdot q^{4-1} = 2 \\cdot 3^3 = 2 \\cdot 27 = 54$.',
        cognitiveLevel: 'Nhận biết',
      },
      {
        questionText:
          'Số nghiệm của phương trình $\\cos x = \\frac{1}{2}$ trên đoạn $[0; 2\\pi]$ là bao nhiêu?',
        options: ['2', '1', '3', '4'],
        correctAnswer: '2',
        detailedDerivation:
          'Ta có $\\cos x = \\frac{1}{2} \\iff x = \\pm \\frac{\\pi}{3} + k2\\pi$ ($k \\in \\mathbb{Z}$). Trên đoạn $[0; 2\\pi]$, phương trình có đúng $2$ nghiệm là $x = \\frac{\\pi}{3}$ và $x = \\frac{5\\pi}{3}$.',
        cognitiveLevel: 'Thông hiểu',
      },
      {
        questionText:
          'Một nhà hát có $20$ hàng ghế. Hàng thứ nhất có $15$ ghế, mỗi hàng sau nhiều hơn hàng liền trước $2$ ghế. Hỏi nhà hát đó có tất cả bao nhiêu ghế?',
        options: ['680\\text{ ghế}', '640\\text{ ghế}', '700\\text{ ghế}', '660\\text{ ghế}'],
        correctAnswer: '680\\text{ ghế}',
        detailedDerivation:
          'Số ghế ở các hàng lập thành một cấp số cộng với $n = 20$, $u_1 = 15$ và công sai $d = 2$. Tổng số ghế là $S_{20} = \\frac{20[2(15) + 19(2)]}{2} = 10 \\cdot (30 + 38) = 680$ ghế.',
        cognitiveLevel: 'Vận dụng',
      },
      {
        questionText:
          'Tính tổng của cấp số nhân lùi vô hạn $S = 1 - \\frac{1}{3} + \\frac{1}{9} - \\frac{1}{27} + \\dots + \\left(-\\frac{1}{3}\\right)^{n-1} + \\dots$',
        options: ['S = \\frac{3}{4}', 'S = \\frac{3}{2}', 'S = \\frac{2}{3}', 'S = \\frac{4}{3}'],
        correctAnswer: 'S = \\frac{3}{4}',
        detailedDerivation:
          'Đây là cấp số nhân lùi vô hạn có số hạng đầu $u_1 = 1$ và công bội $q = -\\frac{1}{3}$ ($|q| = \\frac{1}{3} < 1$). Tổng của nó là $S = \\frac{u_1}{1 - q} = \\frac{1}{1 - (-1/3)} = \\frac{3}{4}$.',
        cognitiveLevel: 'Vận dụng',
      },
    ],
  },
  {
    id: 'math11-ch4-exponential-logarithmic',
    subject: 'math',
    grade: 11,
    chapter: 'Chương VI (SGK Toán 11): Hàm số mũ và Hàm số logarit',
    topicName: 'Biến đổi Logarit, Phương trình - Bất phương trình Mũ & Logarit, Bài toán lãi kép',
    learningObjectives: [
      'Vận dụng được các quy tắc tính logarit (logarit của tích, thương, lũy thừa, công thức đổi cơ số).',
      'Giải được phương trình và bất phương trình mũ, logarit chú ý điều kiện xác định và chiều biến thiên theo cơ số a.',
      'Giải được bài toán lãi kép ngân hàng và tăng trưởng dân số A = P(1 + r)^n.',
    ],
    keyFormulasAndRules: [
      {
        name: 'Công thức biến đổi Logarit và Đổi cơ số',
        latexOrRule: '\\log_a(xy) = \\log_a x + \\log_a y, \\quad \\log_a b = \\frac{\\ln b}{\\ln a} = \\frac{1}{\\log_b a} \\quad (0 < a \\ne 1, x,y > 0)',
        description:
          'Lưu ý lũy thừa ở cơ số: log_{a^k}(b) = (1/k)·log_a(b).',
      },
      {
        name: 'Bất phương trình Logarit & Công thức Lãi kép',
        latexOrRule: '\\log_a f(x) > \\log_a g(x) \\iff \\begin{cases} f(x) > g(x) > 0 & (a > 1) \\\\ 0 < f(x) < g(x) & (0 < a < 1) \\end{cases}; \\quad A_n = P(1 + r)^n',
        description:
          'Khi cơ số 0 < a < 1, phải ĐỔI CHIỀU bất phương trình và giữ điều kiện biểu thức dưới dấu logarit dương.',
      },
    ],
    workedExample: {
      problemStatement:
        'Giải bất phương trình $\\log_{0.5}(2x - 4) \\ge -2$ và tìm số nghiệm nguyên của bất phương trình đó.',
      logicReasoning:
        'Vì cơ số $a = 0.5 \\in (0; 1)$ nhỏ hơn $1$, hàm số $\\log_{0.5} t$ nghịch biến trên $(0; +\\infty)$. Khi mũ hóa hai vế, ta phải vừa đặt điều kiện xác định $2x - 4 > 0$, vừa đổi chiều bất phương trình thành $2x - 4 \\le (0.5)^{-2}$.',
      steps: [
        'Bước 1 (Điều kiện xác định): Biểu thức trong logarit phải dương: $2x - 4 > 0 \\iff x > 2$.',
        'Bước 2 (Biến đổi bất phương trình với cơ số $0 < a = 0.5 < 1$): $$\\log_{0.5}(2x - 4) \\ge -2 \\iff 2x - 4 \\le (0.5)^{-2} = 4 \\iff 2x \\le 8 \\iff x \\le 4$$',
        'Bước 3 (Kết hợp điều kiện và đếm nghiệm nguyên): Kết hợp $x > 2$ và $x \\le 4$, ta được tập nghiệm $S = (2; 4]$. Các nghiệm nguyên là $x \\in \\{3; 4\\}$.',
      ],
      finalConclusion:
        'Tập nghiệm của bất phương trình là $S = (2; 4]$, có đúng $2$ nghiệm nguyên là $x = 3$ và $x = 4$.',
    },
    commonPitfalls: [
      {
        mistake: 'Quên đổi chiều bất phương trình mũ hoặc logarit khi cơ số 0 < a < 1, hoặc quên điều kiện xác định f(x) > 0.',
        correction: 'Luôn kiểm tra cơ số a so với 1 trước khi bỏ mũ/logarit và viết điều kiện xác định ở dòng đầu tiên.',
        explanation:
          'Nếu giải log_{0.5}(2x - 4) ≥ -2 mà chỉ viết 2x - 4 ≤ 4 quên điều kiện 2x - 4 > 0 thì sẽ lấy nhầm cả các giá trị x ≤ 2.',
      },
    ],
    sampleQuestionTemplates: [
      {
        questionText:
          'Với $a$ là số thực dương tùy ý khác $1$, giá trị của biểu thức $P = \\log_{a^2}(a^6)$ bằng bao nhiêu?',
        options: ['P = 3', 'P = 4', 'P = 12', 'P = \\frac{1}{3}'],
        correctAnswer: 'P = 3',
        detailedDerivation:
          'Áp dụng công thức $\\log_{a^k}(a^m) = \\frac{m}{k}$: ta có $P = \\log_{a^2}(a^6) = \\frac{6}{2} = 3$.',
        cognitiveLevel: 'Nhận biết',
      },
      {
        questionText:
          'Tập nghiệm $S$ của phương trình $\\log_2(x - 1) + \\log_2(x + 1) = 3$ là gì?',
        options: ['S = \\{3\\}', 'S = \\{-3; 3\\}', 'S = \\{\\sqrt{7}\\}', 'S = \\{2\\}'],
        correctAnswer: 'S = \\{3\\}',
        detailedDerivation:
          'Điều kiện: $x > 1$. Phương trình tương đương $\\log_2[(x - 1)(x + 1)] = 3 \\iff x^2 - 1 = 2^3 = 8 \\iff x^2 = 9 \\iff x = 3$ (thỏa mãn $x > 1$) hoặc $x = -3$ (loại). Vậy $S = \\{3\\}$.',
        cognitiveLevel: 'Thông hiểu',
      },
      {
        questionText:
          'Một người gửi tiết kiệm $100\\text{ triệu đồng}$ vào ngân hàng theo thể thức lãi kép kì hạn $1$ năm với lãi suất $6.5\\%/\\text{năm}$. Hỏi sau ít nhất bao nhiêu năm người đó nhận được tổng số tiền cả vốn lẫn lãi nhiều hơn $150\\text{ triệu đồng}$?',
        options: ['7\\text{ năm}', '6\\text{ năm}', '8\\text{ năm}', '5\\text{ năm}'],
        correctAnswer: '7\\text{ năm}',
        detailedDerivation:
          'Áp dụng công thức lãi kép $A_n = 100(1 + 0.065)^n > 150 \\iff (1.065)^n > 1.5 \\iff n > \\log_{1.065}(1.5) \\approx 6.44$. Vì $n$ nguyên dương nên cần ít nhất $n = 7$ năm.',
        cognitiveLevel: 'Vận dụng',
      },
      {
        questionText:
          'Tìm số nghiệm nguyên của bất phương trình $\\log_{\\frac{1}{3}}(x - 2) > -2$.',
        options: ['8', '9', '7', '10'],
        correctAnswer: '8',
        detailedDerivation:
          'Điều kiện $x > 2$. Do cơ số $a = \\frac{1}{3} \\in (0; 1)$ nên $\\log_{\\frac{1}{3}}(x - 2) > -2 \\iff 0 < x - 2 < \\left(\\frac{1}{3}\\right)^{-2} = 9 \\iff 2 < x < 11$. Các nghiệm nguyên là $x \\in \\{3, 4, 5, 6, 7, 8, 9, 10\\}$, gồm $8$ giá trị.',
        cognitiveLevel: 'Vận dụng',
      },
    ],
  },
  {
    id: 'math11-ch10-spatial-geometry-volumes',
    subject: 'math',
    grade: 11,
    chapter: 'Chương VIII & IX (SGK Toán 11): Quan hệ vuông góc trong không gian, Thể tích khối đa diện',
    topicName: 'Góc, Khoảng cách giữa hai đường thẳng chéo nhau & Thể tích khối chóp, khối lăng trụ',
    learningObjectives: [
      'Chứng minh được đường thẳng vuông góc với mặt phẳng và hai mặt phẳng vuông góc.',
      'Xác định và tính được góc giữa đường thẳng với mặt phẳng, góc nhị diện và khoảng cách từ chân đường cao đến mặt bên.',
      'Tính được thể tích khối chóp V = (1/3)B·h, khối lăng trụ V = B·h và khoảng cách giữa hai đường thẳng chéo nhau.',
    ],
    keyFormulasAndRules: [
      {
        name: 'Thể tích khối chóp và khối lăng trụ',
        latexOrRule: 'V_{\\text{chóp}} = \\frac{1}{3} S_{\\text{đáy}} \\cdot h, \\quad V_{\\text{lăng trụ}} = S_{\\text{đáy}} \\cdot h',
        description:
          'Trong đó S_đáy là diện tích đa giác đáy, h là chiều cao hạ từ đỉnh vuông góc xuống mặt phẳng đáy.',
      },
      {
        name: 'Hệ thức nghịch đảo bình phương khoảng cách từ chân đường cao H đến mặt bên (SBC)',
        latexOrRule: '\\frac{1}{d^2(H, (SBC))} = \\frac{1}{SH^2} + \\frac{1}{d^2(H, BC)}',
        description:
          'Công thức chuẩn giúp quy đổi nhanh khoảng cách từ điểm bất kỳ hoặc khoảng cách giữa hai đường chéo nhau về chân đường cao H.',
      },
    ],
    workedExample: {
      problemStatement:
        'Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a$, cạnh bên $SA \\perp (ABCD)$ và $SA = a\\sqrt{3}$. Tính thể tích khối chóp $S.ABCD$, góc giữa cạnh bên $SC$ và mặt phẳng đáy $(ABCD)$, và khoảng cách từ $A$ đến mặt phẳng $(SBC)$.',
      logicReasoning:
        'Vì $SA \\perp (ABCD)$ nên $A$ là chân đường cao của hình chóp ($h = SA = a\\sqrt{3}$). Hình chiếu vuông góc của $SC$ lên $(ABCD)$ là đường chéo $AC$, do đó góc $(SC, (ABCD)) = \\widehat{SCA}$. Cuối cùng, do $BC \\perp AB$ và $BC \\perp SA \\implies BC \\perp (SAB)$, nên hình chiếu của $A$ lên $(SBC)$ nằm ngay trên giao tuyến $SB$.',
      steps: [
        'Bước 1 (Tính thể tích khối chóp): Diện tích đáy $S_{ABCD} = a^2$. Thể tích $$V_{S.ABCD} = \\frac{1}{3} S_{ABCD} \\cdot SA = \\frac{1}{3} a^2 \\cdot a\\sqrt{3} = \\frac{a^3\\sqrt{3}}{3}$$',
        'Bước 2 (Tìm góc giữa $SC$ và $(ABCD)$): Đường chéo hình vuông $AC = a\\sqrt{2}$. Trong $\\triangle SAC$ vuông tại $A$: $$\\tan \\widehat{SCA} = \\frac{SA}{AC} = \\frac{a\\sqrt{3}}{a\\sqrt{2}} = \\frac{\\sqrt{6}}{2}$$',
        'Bước 3 (Tính khoảng cách $d(A, (SBC))$): Kẻ $AH \\perp SB$ tại $H$. Vì $BC \\perp (SAB) \\implies BC \\perp AH$, suy ra $AH \\perp (SBC)$. Vậy $$d(A, (SBC)) = AH = \\frac{SA \\cdot AB}{\\sqrt{SA^2 + AB^2}} = \\frac{a\\sqrt{3} \\cdot a}{\\sqrt{3a^2 + a^2}} = \\frac{a\\sqrt{3}}{2}$$',
      ],
      finalConclusion:
        'Thể tích $V = \\frac{a^3\\sqrt{3}}{3}$, $\\tan(SC, (ABCD)) = \\frac{\\sqrt{6}}{2}$ và khoảng cách $d(A, (SBC)) = \\frac{a\\sqrt{3}}{2}$.',
    },
    commonPitfalls: [
      {
        mistake: 'Quên hệ số 1/3 trong công thức thể tích khối chóp V = (1/3)·S_đáy·h.',
        correction: 'Khối chóp có đỉnh nhọn nên V = (1/3)·B·h; khối lăng trụ có hai đáy song song bằng nhau nên V = B·h.',
        explanation:
          'Các phương án nhiễu trong đề thi THPT luôn có một đáp án lớn gấp 3 lần đáp án đúng để bẫy học sinh quên nhân 1/3.',
      },
    ],
    sampleQuestionTemplates: [
      {
        questionText:
          'Cho khối chóp $S.ABC$ có diện tích đáy $S_{ABC} = 6a^2$ và chiều cao $h = 4a$. Thể tích $V$ của khối chóp $S.ABC$ bằng bao nhiêu?',
        options: ['V = 8a^3', 'V = 24a^3', 'V = 12a^3', 'V = 6a^3'],
        correctAnswer: 'V = 8a^3',
        detailedDerivation:
          'Áp dụng công thức thể tích khối chóp: $V = \\frac{1}{3} S_{ABC} \\cdot h = \\frac{1}{3} \\cdot 6a^2 \\cdot 4a = 8a^3$.',
        cognitiveLevel: 'Nhận biết',
      },
      {
        questionText:
          'Cho hình chóp $S.ABC$ có đáy $ABC$ là tam giác vuông cân tại $B$, $AB = BC = a$, $SA \\perp (ABC)$ và $SA = a\\sqrt{2}$. Góc giữa đường thẳng $SC$ và mặt phẳng $(ABC)$ bằng bao nhiêu?',
        options: ['45^\\circ', '60^\\circ', '30^\\circ', '90^\\circ'],
        correctAnswer: '45^\\circ',
        detailedDerivation:
          'Vì $SA \\perp (ABC)$ nên hình chiếu của $SC$ lên $(ABC)$ là $AC$, suy ra $(SC, (ABC)) = \\widehat{SCA}$. Tam giác $ABC$ vuông cân tại $B$ có $AC = a\\sqrt{2} = SA$, nên $\\triangle SAC$ vuông cân tại $A \\implies \\widehat{SCA} = 45^\\circ$.',
        cognitiveLevel: 'Thông hiểu',
      },
      {
        questionText:
          'Cho hình chóp tứ giác đều $S.ABCD$ có cạnh đáy bằng $a$ và cạnh bên bằng $a\\sqrt{2}$. Thể tích của khối chóp $S.ABCD$ bằng bao nhiêu?',
        options: ['V = \\frac{a^3\\sqrt{6}}{6}', 'V = \\frac{a^3\\sqrt{6}}{2}', 'V = \\frac{a^3\\sqrt{3}}{6}', 'V = \\frac{a^3\\sqrt{2}}{3}'],
        correctAnswer: 'V = \\frac{a^3\\sqrt{6}}{6}',
        detailedDerivation:
          'Gọi $O = AC \\cap BD$, ta có $SO \\perp (ABCD)$ và $OA = \\frac{a\\sqrt{2}}{2}$. Chiều cao $SO = \\sqrt{SA^2 - OA^2} = \\sqrt{2a^2 - \\frac{a^2}{2}} = \\frac{a\\sqrt{6}}{2}$. Vậy $V = \\frac{1}{3} a^2 \\cdot \\frac{a\\sqrt{6}}{2} = \\frac{a^3\\sqrt{6}}{6}$.',
        cognitiveLevel: 'Vận dụng',
      },
      {
        questionText:
          'Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình chữ nhật với $AB = a, AD = a\\sqrt{3}$, $SA \\perp (ABCD)$ và $SA = 2a$. Khoảng cách giữa hai đường thẳng chéo nhau $SD$ và $AB$ bằng bao nhiêu?',
        options: ['d = \\frac{2a\\sqrt{21}}{7}', 'd = \\frac{a\\sqrt{21}}{7}', 'd = \\frac{2a\\sqrt{3}}{3}', 'd = a\\sqrt{3}'],
        correctAnswer: 'd = \\frac{2a\\sqrt{21}}{7}',
        detailedDerivation:
          'Vì $AB \\parallel CD$ nên $AB \\parallel (SCD) \\implies d(AB, SD) = d(AB, (SCD)) = d(A, (SCD))$. Do $CD \\perp AD$ và $CD \\perp SA \\implies CD \\perp (SAD)$, nên khoảng cách từ $A$ đến $(SCD)$ là đường cao $AH$ của $\\triangle SAD$ vuông tại $A$: $$d = AH = \\frac{SA \\cdot AD}{\\sqrt{SA^2 + AD^2}} = \\frac{2a \\cdot a\\sqrt{3}}{\\sqrt{4a^2 + 3a^2}} = \\frac{2a\\sqrt{3}}{\\sqrt{7}} = \\frac{2a\\sqrt{21}}{7}$$',
        cognitiveLevel: 'Vận dụng cao',
      },
    ],
  },
];

export const math10And11Topics: CurriculumTopic[] = rawMath10And11Topics.map(
  (topic) => CurriculumTopicSchema.parse(topic)
);
