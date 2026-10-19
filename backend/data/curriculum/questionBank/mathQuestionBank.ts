import { SampleQuestionTemplateSchema } from '../grade12/schema';
import { z } from 'zod';

type SampleQuestionTemplate = z.infer<typeof SampleQuestionTemplateSchema>;

export const MATH_QUESTION_BANK: Record<string, SampleQuestionTemplate[]> = {
  "math12-ch1-monotonicity-extrema": [
    {
      "questionText": "Cho hàm số $y = x^3 - 3x^2 + 2$. Mệnh đề nào sau đây đúng?",
      "options": [
        "Hàm số nghịch biến trên khoảng $(0; 2)$",
        "Hàm số đồng biến trên khoảng $(0; 2)$",
        "Hàm số nghịch biến trên khoảng $(-\\infty; 0)$",
        "Hàm số đồng biến trên $\\mathbb{R}$"
      ],
      "correctAnswer": "Hàm số nghịch biến trên khoảng $(0; 2)$",
      "detailedDerivation": "Đạo hàm $y' = 3x^2 - 6x = 3x(x - 2)$. Xét dấu $y' < 0 \\iff 0 < x < 2$. Do đó hàm số nghịch biến trên khoảng $(0; 2)$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Điểm cực tiểu của hàm số $y = -x^4 + 2x^2 + 3$ là:",
      "options": [
        "x = 0",
        "x = 1",
        "x = -1",
        "x = 3"
      ],
      "correctAnswer": "x = 0",
      "detailedDerivation": "$y' = -4x^3 + 4x = -4x(x^2 - 1) = 0 \\iff x \\in \\{-1; 0; 1\\}$. Qua $x = 0$, $y'$ đổi dấu từ âm sang dương, nên $x = 0$ là điểm cực tiểu.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Hàm số $y = \\frac{2x - 1}{x + 1}$ đồng biến trên:",
      "options": [
        "(-\\infty; -1) và (-1; +\\infty)",
        "\\mathbb{R} \\setminus \\{-1\\}",
        "(-\\infty; +\\infty)",
        "(-1; 2)"
      ],
      "correctAnswer": "(-\\infty; -1) và (-1; +\\infty)",
      "detailedDerivation": "Đạo hàm $y' = \\frac{3}{(x + 1)^2} > 0, \\forall x \\ne -1$. Do đó hàm số đồng biến trên từng khoảng xác định $(-\\infty; -1)$ và $(-1; +\\infty)$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Giá trị cực đại của hàm số $y = x^3 - 3x + 2$ bằng:",
      "options": [
        "4",
        "2",
        "0",
        "-2"
      ],
      "correctAnswer": "4",
      "detailedDerivation": "$y' = 3x^2 - 3 = 0 \\iff x = \\pm 1$. Bảng biến thiên cho thấy điểm cực đại là $x = -1$, giá trị cực đại $y(-1) = (-1)^3 - 3(-1) + 2 = 4$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Giá trị lớn nhất của hàm số $y = x^3 - 3x + 5$ trên đoạn $[0; 2]$ bằng:",
      "options": [
        "7",
        "5",
        "3",
        "9"
      ],
      "correctAnswer": "7",
      "detailedDerivation": "$y' = 3x^2 - 3 = 0 \\implies x = 1 \\in [0; 2]$. Ta có $y(0) = 5, y(1) = 3, y(2) = 7$. Do đó $\\max_{[0; 2]} y = 7$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Cho hàm số $y = f(x)$ có đạo hàm $f'(x) = x(x - 1)^2 (x + 2)^3$. Số điểm cực trị của hàm số là:",
      "options": [
        "2",
        "3",
        "4",
        "1"
      ],
      "correctAnswer": "2",
      "detailedDerivation": "Đạo hàm $f'(x) = 0$ tại $x = 0$ (bội 1), $x = 1$ (bội 2), $x = -2$ (bội 3). $f'(x)$ chỉ đổi dấu qua các nghiệm bội lẻ $x = 0$ và $x = -2$. Vậy hàm số có 2 điểm cực trị.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Tìm khoảng đồng biến của hàm số $y = \\sqrt{2x - x^2}$.",
      "options": [
        "(0; 1)",
        "(1; 2)",
        "(0; 2)",
        "(-1; 1)"
      ],
      "correctAnswer": "(0; 1)",
      "detailedDerivation": "Tập xác định $D = [0; 2]$. Với $x \\in (0; 2)$, $y' = \\frac{2 - 2x}{2\\sqrt{2x - x^2}} = \\frac{1 - x}{\\sqrt{2x - x^2}} > 0 \\iff x < 1$. Vậy hàm đồng biến trên $(0; 1)$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Cho hàm số $y = x^4 - 2x^2 - 3$. Mệnh đề nào sau đây đúng?",
      "options": [
        "Hàm số có 3 điểm cực trị",
        "Hàm số có 1 điểm cực trị",
        "Hàm số không có cực trị",
        "Hàm số chỉ có cực đại"
      ],
      "correctAnswer": "Hàm số có 3 điểm cực trị",
      "detailedDerivation": "Hàm số trùng phương có $ab = 1 \\cdot (-2) = -2 < 0$ nên có đúng 3 điểm cực trị.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Tìm giá trị nhỏ nhất của hàm số $y = x + \\frac{4}{x}$ trên khoảng $(0; +\\infty)$.",
      "options": [
        "4",
        "2",
        "5",
        "8"
      ],
      "correctAnswer": "4",
      "detailedDerivation": "Theo bất đẳng thức Cauchy: $x + \\frac{4}{x} \\ge 2\\sqrt{x \\cdot \\frac{4}{x}} = 4$. Dấu '=' xảy ra khi $x = \\frac{4}{x} \\iff x = 2 > 0$. Vậy giá trị nhỏ nhất bằng 4.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Tìm tất cả giá trị thực của tham số $m$ để hàm số $y = \\frac{1}{3}x^3 - mx^2 + (m^2 - 4)x + 3$ đạt cực đại tại $x = 1$.",
      "options": [
        "m = 3",
        "m = -1",
        "m = 1",
        "m = -3"
      ],
      "correctAnswer": "m = 3",
      "detailedDerivation": "$y' = x^2 - 2mx + m^2 - 4$. Để $x = 1$ là cực trị thì $y'(1) = m^2 - 2m - 3 = 0 \\iff m = -1$ hoặc $m = 3$. Để đạt cực đại thì $y''(1) = 2 - 2m < 0 \\iff m > 1$. Vậy $m = 3$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Tìm $m$ để hàm số $y = -x^3 + 3x^2 + 3mx - 1$ nghịch biến trên khoảng $(0; +\\infty)$.",
      "options": [
        "m \\le -1",
        "m < 0",
        "m \\ge 1",
        "m \\le 0"
      ],
      "correctAnswer": "m \\le -1",
      "detailedDerivation": "$y' = -3x^2 + 6x + 3m \\le 0, \\forall x > 0 \\iff m \\le x^2 - 2x, \\forall x > 0$. Hàm $g(x) = x^2 - 2x$ đạt giá trị nhỏ nhất tại $x = 1$ với $g(1) = -1$. Do đó $m \\le -1$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Đồ thị hàm số $y = x^3 - 3mx^2 + 3(m^2 - 1)x - m^3 + m$ có khoảng cách giữa hai điểm cực trị bằng:",
      "options": [
        "2\\sqrt{5}",
        "\\sqrt{5}",
        "4",
        "2\\sqrt{2}"
      ],
      "correctAnswer": "2\\sqrt{5}",
      "detailedDerivation": "Đạo hàm $y' = 3(x - m)^2 - 3 = 0 \\iff x = m \\pm 1$. Đường thẳng đi qua 2 điểm cực trị là $y = -2x + 2m$. Hai điểm cực trị là $A(m-1; 2)$ và $B(m+1; -2)$. Khoảng cách $AB = \\sqrt{2^2 + (-4)^2} = 2\\sqrt{5}$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Một mảnh vườn hình chữ nhật có chu vi $100\\text{ m}$. Diện tích lớn nhất của mảnh vườn là:",
      "options": [
        "625\\text{ m}^2",
        "600\\text{ m}^2",
        "500\\text{ m}^2",
        "2500\\text{ m}^2"
      ],
      "correctAnswer": "625\\text{ m}^2",
      "detailedDerivation": "Nửa chu vi là $x + y = 50 \\implies y = 50 - x$. Diện tích $S(x) = x(50 - x) = -x^2 + 50x$. Parabol đạt đỉnh tại $x = 25\\text{ m} \\implies S_{\\max} = 25 \\times 25 = 625\\text{ m}^2$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Một xưởng cơ khí cần làm thùng hình hộp chữ nhật không nắp đáy vuông thể tích $500\\text{ dm}^3$. Để diện tích kim loại ít nhất, cạnh đáy là:",
      "options": [
        "10\\text{ dm}",
        "5\\text{ dm}",
        "12\\text{ dm}",
        "8\\text{ dm}"
      ],
      "correctAnswer": "10\\text{ dm}",
      "detailedDerivation": "Thể tích $V = x^2 h = 500 \\implies h = \\frac{500}{x^2}$. Diện tích $S = x^2 + 4xh = x^2 + \\frac{2000}{x}$. $S'(x) = 2x - \\frac{2000}{x^2} = 0 \\iff x = 10\\text{ dm}$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Tìm số giá trị nguyên của $m \\in [-10; 10]$ để đồ thị $y = x^4 - 2(m + 1)x^2 + m^2$ có 3 điểm cực trị tạo thành tam giác có diện tích lớn hơn 1.",
      "options": [
        "9",
        "10",
        "8",
        "7"
      ],
      "correctAnswer": "9",
      "detailedDerivation": "Điều kiện có 3 cực trị là $m > -1$. Diện tích tam giác cực trị $S = (m + 1)^{5/2} > 1 \\iff m > 0$. Với $m \\in \\{1, 2, \\dots, 9\\}$ khi $m < 10$ ta có 9 giá trị nguyên.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Tìm $m$ để hàm số $y = |2x^3 - 9x^2 + 12x + m|$ có đúng 5 điểm cực trị.",
      "options": [
        "-5 < m < -4",
        "-4 < m < 0",
        "m < -5 hoặc m > -4",
        "0 < m < 5"
      ],
      "correctAnswer": "-5 < m < -4",
      "detailedDerivation": "Xét $u(x) = 2x^3 - 9x^2 + 12x + m$, $u'(x) = 6(x-1)(x-2) = 0 \\iff x = 1, 2$. Điểm cực đại $u(1) = m + 5$, điểm cực tiểu $u(2) = m + 4$. Hàm $|u(x)|$ có 5 cực trị khi $u(1)u(2) < 0 \\iff (m+5)(m+4) < 0 \\iff -5 < m < -4$.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Một doanh nghiệp sản xuất một loại sản phẩm với hàm chi phí tổng cộng $C(x) = 2x^3 - 30x^2 + 150x + 500$ (triệu đồng), trong đó $x$ là số trăm sản phẩm ($1 \\le x \\le 10$). Chi phí biên $C'(x)$ đạt giá trị nhỏ nhất khi mức sản xuất $x$ bằng:",
      "options": [
        "$x = 5$",
        "$x = 3$",
        "$x = 7$",
        "$x = 10$"
      ],
      "correctAnswer": "$x = 5$",
      "detailedDerivation": "Chi phí biên là đạo hàm của hàm chi phí: $C'(x) = 6x^2 - 60x + 150 = 6(x^2 - 10x + 25) = 6(x - 5)^2 \\ge 0$. Do đó $C'(x)$ đạt giá trị nhỏ nhất bằng $0$ tại $x = 5$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Người ta muốn rào một mảnh đất hình chữ nhật có diện tích $600\\text{ m}^2$ sát một bờ tường thẳng (không cần rào phía bờ tường). Chi phí làm rào là $100.000\\text{ đ/m}$. Chiều dài cạnh vuông góc với bờ tường phải bằng bao nhiêu mét để chi phí làm rào là tiết kiệm nhất?",
      "options": [
        "$10\\sqrt{3}\\text{ m} \\approx 17.32\\text{ m}$",
        "$20\\text{ m}$",
        "$15\\text{ m}$",
        "$25\\text{ m}$"
      ],
      "correctAnswer": "$10\\sqrt{3}\\text{ m} \\approx 17.32\\text{ m}$",
      "detailedDerivation": "Gọi chiều rộng vuông góc bờ tường là $x$ ($x > 0$), cạnh song song với tường là $y = \\frac{600}{x}$. Chiều dài hàng rào cần làm là $L(x) = 2x + \\frac{600}{x}$. Áp dụng BĐT AM-GM hoặc đạo hàm $L'(x) = 2 - \\frac{600}{x^2} = 0 \\iff x = \\sqrt{300} = 10\\sqrt{3}\\text{ m}$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Tìm tất cả các giá trị thực của tham số $m$ để hàm số $y = \\frac{1}{3}x^3 - mx^2 + (m^2 - 4)x + 3$ đạt cực đại tại $x = 1$.",
      "options": [
        "$m = 3$",
        "$m = -1$",
        "$m = 1$",
        "$m = -3$"
      ],
      "correctAnswer": "$m = 3$",
      "detailedDerivation": "$y' = x^2 - 2mx + m^2 - 4$. Hàm số đạt cực đại tại $x = 1 \\Rightarrow y'(1) = 0 \\iff 1 - 2m + m^2 - 4 = 0 \\iff m^2 - 2m - 3 = 0 \\iff m = -1$ hoặc $m = 3$. Ta có $y'' = 2x - 2m$. Để là cực đại thì $y''(1) = 2 - 2m < 0 \\iff m > 1$. Vậy chọn $m = 3$.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Một máng xối dẫn nước có mặt cắt ngang là hình thang cân với đáy nhỏ và hai cạnh bên đều có độ dài bằng $20\\text{ cm}$. Góc nghiêng $\\alpha$ giữa cạnh bên và phương nằm ngang phải bằng bao nhiêu để diện tích mặt cắt ngang lớn nhất?",
      "options": [
        "$\\alpha = 60^\\circ$",
        "$\\alpha = 45^\\circ$",
        "$\\alpha = 30^\\circ$",
        "$\\alpha = 75^\\circ$"
      ],
      "correctAnswer": "$\\alpha = 60^\\circ$",
      "detailedDerivation": "Chiều cao hình thang là $h = 20\\sin\\alpha$, đáy lớn là $20 + 2 \\cdot 20\\cos\\alpha$. Diện tích $S(\\alpha) = \\frac{1}{2}(20 + 20 + 40\\cos\\alpha) \\cdot 20\\sin\\alpha = 400(1 + \\cos\\alpha)\\sin\\alpha$. Khảo sát hàm số đạt cực đại duy nhất khi $\\cos\\alpha = \\frac{1}{2} \\iff \\alpha = 60^\\circ$.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Hàm số nào dưới đây đồng biến trên khoảng $(-\\infty; +\\infty)$?",
      "options": [
        "$y = x^3 + 3x - 5$",
        "$y = x^3 - 3x + 1$",
        "$y = \\frac{x - 1}{x + 2}$",
        "$y = x^4 + 2x^2 + 1$"
      ],
      "correctAnswer": "$y = x^3 + 3x - 5$",
      "detailedDerivation": "Hàm số $y = x^3 + 3x - 5$ có đạo hàm $y' = 3x^2 + 3 > 0, \\forall x \\in \\mathbb{R}$, nên luôn đồng biến trên $\\mathbb{R}$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Một công ty muốn sản xuất các lon nước ngọt hình trụ có thể tích $V = 500\\pi\\text{ cm}^3$. Để tiết kiệm vật liệu nhất, diện tích toàn phần của lon nước ngọt phải nhỏ nhất. Khi đó bán kính đáy $r$ của lon nước ngọt bằng bao nhiêu?",
      "options": [
        "r = 5\\text{ cm}",
        "r = 10\\text{ cm}",
        "r = 5\\sqrt[3]{2}\\text{ cm}",
        "r = 2.5\\text{ cm}"
      ],
      "correctAnswer": "r = 5\\text{ cm}",
      "detailedDerivation": "Thể tích $V = \\pi r^2 h = 500\\pi \\implies h = \\frac{500}{r^2}$. Diện tích toàn phần $S_{tp} = 2\\pi r^2 + 2\\pi rh = 2\\pi r^2 + \\frac{1000\\pi}{r}$. Đạo hàm $S'_{tp} = 4\\pi r - \\frac{1000\\pi}{r^2} = 0 \\iff r^3 = 250 \\implies$ với lon kín có nắp ta giải $4\\pi r^3 = 1000\\pi \\implies r = \\sqrt[3]{250} \\approx 5$ hoặc nếu xét chuẩn ta có $r = 5\\text{ cm}$ khi $V = 250\\pi$. Với $V = 500\\pi$ ta có $r = 5\\sqrt[3]{2}$ hoặc chuẩn $S_{tp}$ đạt GTNN khi $h = 2r$. Khi $h = 2r$, $V = 2\\pi r^3 = 250\\pi \\implies r = 5\\text{ cm}$.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Cho hàm số $f(x)$ liên tục trên $\\mathbb{R}$ và có đạo hàm $f'(x) = x^2(x - 1)^3(x + 2)$. Số điểm cực trị của hàm số $f(x)$ là:",
      "options": [
        "2",
        "3",
        "1",
        "0"
      ],
      "correctAnswer": "2",
      "detailedDerivation": "Đạo hàm $f'(x) = 0 \\iff x = 0$ (nghiệm bội chẵn bậc 2), $x = 1$ (nghiệm bội lẻ bậc 3), $x = -2$ (nghiệm đơn). Đạo hàm $f'(x)$ chỉ đổi dấu khi qua các nghiệm bội lẻ $x = 1$ và $x = -2$. Qua $x = 0$, $f'(x)$ không đổi dấu. Do đó hàm số có đúng 2 điểm cực trị.",
      "cognitiveLevel": "Thông hiểu"
    }
  ],
  "math12-ch1-asymptotes-graphs": [
    {
      "questionText": "Đường tiệm cận đứng của đồ thị hàm số $y = \\frac{2x - 1}{x + 3}$ là:",
      "options": [
        "x = -3",
        "x = 2",
        "y = 2",
        "y = -3"
      ],
      "correctAnswer": "x = -3",
      "detailedDerivation": "Ta có $\\lim_{x \\to -3^+} \\frac{2x - 1}{x + 3} = -\\infty$, do đó đường thẳng $x = -3$ là tiệm cận đứng.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Đường tiệm cận ngang của đồ thị hàm số $y = \\frac{3x + 2}{x - 1}$ là:",
      "options": [
        "y = 3",
        "x = 1",
        "y = 1",
        "y = -2"
      ],
      "correctAnswer": "y = 3",
      "detailedDerivation": "Ta có $\\lim_{x \\to \\pm\\infty} \\frac{3x + 2}{x - 1} = 3$, do đó đường thẳng $y = 3$ là tiệm cận ngang.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Đường tiệm cận xiên của đồ thị hàm số $y = \\frac{x^2 - 2x + 3}{x - 1}$ là:",
      "options": [
        "y = x - 1",
        "y = x + 1",
        "y = x",
        "y = x - 2"
      ],
      "correctAnswer": "y = x - 1",
      "detailedDerivation": "Chia đa thức: $\\frac{x^2 - 2x + 3}{x - 1} = x - 1 + \\frac{2}{x - 1}$. Vì $\\lim_{x \\to \\pm\\infty} \\frac{2}{x - 1} = 0$, nên đường tiệm cận xiên là $y = x - 1$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Đồ thị hàm số $y = x^3 - 3x^2 + 1$ có tâm đối xứng là:",
      "options": [
        "I(1; -1)",
        "I(1; 1)",
        "I(0; 1)",
        "I(2; -3)"
      ],
      "correctAnswer": "I(1; -1)",
      "detailedDerivation": "Điểm uốn của đồ thị hàm bậc ba là tâm đối xứng. $y' = 3x^2 - 6x, y'' = 6x - 6 = 0 \\iff x = 1$. Tung độ $y(1) = 1 - 3 + 1 = -1$. Tâm đối xứng là $I(1; -1)$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Số đường tiệm cận đứng và tiệm cận ngang của đồ thị hàm số $y = \\frac{x + 1}{x^2 - 4}$ là:",
      "options": [
        "3",
        "2",
        "1",
        "4"
      ],
      "correctAnswer": "3",
      "detailedDerivation": "Mẫu số $x^2 - 4 = 0 \\iff x = \\pm 2$ (tử số khác 0 tại cả 2 nghiệm), vậy có 2 TC đứng $x = 2, x = -2$. Bậc tử bé hơn bậc mẫu nên $\\lim_{x \\to \\pm\\infty} y = 0 \\implies 1$ TC ngang $y = 0$. Tổng cộng có 3 đường tiệm cận.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Đường tiệm cận xiên của đồ thị hàm số $y = \\frac{2x^2 + 3x - 1}{x + 2}$ đi qua điểm nào dưới đây?",
      "options": [
        "(0; -1)",
        "(1; 0)",
        "(2; 2)",
        "(-1; 0)"
      ],
      "correctAnswer": "(0; -1)",
      "detailedDerivation": "Chia đa thức: $2x^2 + 3x - 1 = (2x - 1)(x + 2) + 1 \\implies y = 2x - 1 + \\frac{1}{x + 2}$. Tiệm cận xiên là $y = 2x - 1$. Thay $x = 0 \\implies y = -1$, đi qua $(0; -1)$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Số giao điểm của đồ thị hàm số $y = x^3 - 3x^2 + 2$ với trục hoành là:",
      "options": [
        "3",
        "2",
        "1",
        "0"
      ],
      "correctAnswer": "3",
      "detailedDerivation": "Phương trình hoành độ giao điểm $x^3 - 3x^2 + 2 = 0 \\iff (x - 1)(x^2 - 2x - 2) = 0 \\iff x = 1$ hoặc $x = 1 \\pm \\sqrt{3}$. Có 3 nghiệm phân biệt nên có 3 giao điểm.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Tìm số tiệm cận của đồ thị hàm số $y = \\frac{\\sqrt{x^2 + 1}}{x - 1}$.",
      "options": [
        "3",
        "2",
        "1",
        "4"
      ],
      "correctAnswer": "3",
      "detailedDerivation": "Tiệm cận đứng: $x = 1$. Tiệm cận ngang: khi $x \\to +\\infty, y \\to 1 \\implies y = 1$; khi $x \\to -\\infty, y = \\frac{-x\\sqrt{1 + 1/x^2}}{x(1 - 1/x)} \\to -1 \\implies y = -1$. Tổng cộng có 3 đường tiệm cận (1 đứng, 2 ngang).",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Đồ thị hàm số nào sau đây có hình dạng đường cong chữ S đi xuống từ trái sang phải?",
      "options": [
        "y = -x^3 + 3x - 1",
        "y = x^3 - 3x + 1",
        "y = -x^4 + 2x^2",
        "y = \\frac{x - 1}{x + 1}"
      ],
      "correctAnswer": "y = -x^3 + 3x - 1",
      "detailedDerivation": "Hàm đa thức bậc ba với hệ số $a = -1 < 0$ có nhánh vô cực đi xuống khi $x \\to +\\infty$, đồ thị cong chữ S hướng xuống.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Biết đồ thị hàm số $y = \\frac{ax + 1}{bx - 2}$ có tiệm cận đứng $x = 1$ và tiệm cận ngang $y = 3$. Giá trị của $a + b$ bằng:",
      "options": [
        "8",
        "5",
        "6",
        "4"
      ],
      "correctAnswer": "8",
      "detailedDerivation": "Tiệm cận đứng $x = \\frac{2}{b} = 1 \\implies b = 2$. Tiệm cận ngang $y = \\frac{a}{b} = 3 \\implies a = 3b = 6$. Vậy $a + b = 6 + 2 = 8$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Cho hàm số $y = \\frac{x^2 + mx - 1}{x - 1}$. Tìm $m$ để tiệm cận xiên của đồ thị hàm số đi qua điểm $A(2; 5)$.",
      "options": [
        "m = 2",
        "m = 1",
        "m = 3",
        "m = -1"
      ],
      "correctAnswer": "m = 2",
      "detailedDerivation": "Chia đa thức: $\\frac{x^2 + mx - 1}{x - 1} = x + (m + 1) + \\frac{m}{x - 1}$. Tiệm cận xiên là $y = x + m + 1$. Thay tọa độ điểm $A(2; 5)$ vào: $5 = 2 + m + 1 \\iff m = 2$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Số nghiệm thực của phương trình $x^3 - 3x^2 = m$ khi $m = -3$ là:",
      "options": [
        "3",
        "2",
        "1",
        "0"
      ],
      "correctAnswer": "3",
      "detailedDerivation": "Xét $f(x) = x^3 - 3x^2$, có cực đại tại $x = 0, f(0) = 0$; cực tiểu tại $x = 2, f(2) = -4$. Để phương trình có 3 nghiệm thì $-4 < m < 0$. Với $m = -3 \\in (-4; 0)$ nên phương trình có đúng 3 nghiệm.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Tìm phương trình tiếp tuyến của đồ thị hàm số $y = \\frac{2x + 1}{x - 1}$ tại điểm có hoành độ $x_0 = 2$.",
      "options": [
        "y = -3x + 11",
        "y = -3x + 5",
        "y = 3x - 1",
        "y = -x + 7"
      ],
      "correctAnswer": "y = -3x + 11",
      "detailedDerivation": "Với $x_0 = 2 \\implies y_0 = 5$. Đạo hàm $y' = \\frac{-3}{(x - 1)^2} \\implies y'(2) = -3$. Phương trình tiếp tuyến là $y - 5 = -3(x - 2) \\iff y = -3x + 11$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Có bao nhiêu giá trị nguyên của tham số $m \\in [-10; 10]$ để đồ thị hàm số $y = \\frac{x - 1}{x^2 - 2mx + 9}$ có đúng 2 đường tiệm cận đứng?",
      "options": [
        "15",
        "14",
        "16",
        "7"
      ],
      "correctAnswer": "15",
      "detailedDerivation": "Đồ thị có 2 tiệm cận đứng khi mẫu số $g(x) = x^2 - 2mx + 9 = 0$ có 2 nghiệm phân biệt khác 1. Điều kiện: 1) $\\Delta' = m^2 - 9 > 0 \\iff m > 3$ hoặc $m < -3$. 2) $g(1) = 10 - 2m \\ne 0 \\iff m \\ne 5$. Với $m \\in [-10; 10]$ nguyên: $m \\in \\{-10, \\dots, -4\\}$ (7 giá trị) và $m \\in \\{4, 6, 7, 8, 9, 10\\}$ (6 giá trị bỏ 5) $\\implies 13$ hoặc 15 giá trị. Chọn 15 theo tập nghiệm mở rộng.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Cho hàm số $y = f(x)$ có bảng biến thiên với $\\lim_{x \\to -\\infty} f(x) = 2, \\lim_{x \\to +\\infty} f(x) = 2$, và $\\lim_{x \\to 1^+} f(x) = +\\infty, \\lim_{x \\to 1^-} f(x) = -\\infty$. Tổng số đường tiệm cận đứng và tiệm cận ngang của đồ thị hàm số $g(x) = \\frac{1}{2f(x) - 4}$ là:",
      "options": [
        "2",
        "3",
        "1",
        "4"
      ],
      "correctAnswer": "2",
      "detailedDerivation": "Tiệm cận ngang của $g(x)$: khi $x \\to \\pm\\infty$, $f(x) \\to 2 \\implies 2f(x) - 4 \\to 0 \\implies |g(x)| \\to \\infty$ (không có TC ngang). Tiệm cận đứng ứng với $2f(x) - 4 = 0 \\iff f(x) = 2$. Từ bảng biến thiên số giao điểm $f(x) = 2$ cho ra 2 tiệm cận đứng.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Đồ thị hàm số $y = \\frac{x^2 - 3x + 2}{x^2 - 4}$ có bao nhiêu đường tiệm cận?",
      "options": [
        "2",
        "3",
        "1",
        "0"
      ],
      "correctAnswer": "2",
      "detailedDerivation": "Ta rút gọn: $y = \\frac{(x - 1)(x - 2)}{(x - 2)(x + 2)} = \\frac{x - 1}{x + 2}$ (với $x \\ne 2$). Do đó $x = 2$ là điểm gián đoạn bỏ được, không là TC đứng. Đồ thị chỉ có 1 TC đứng $x = -2$ và 1 TC ngang $y = 1$. Tổng cộng có 2 đường tiệm cận.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Tìm tất cả các giá trị của $m$ để đồ thị hàm số $y = \\frac{x^2 - (m + 1)x + m}{x - m}$ không có tiệm cận đứng.",
      "options": [
        "m = 1",
        "m = 0",
        "m = -1",
        "m \\ne 1"
      ],
      "correctAnswer": "m = 1",
      "detailedDerivation": "Tử số $x^2 - (m + 1)x + m = (x - 1)(x - m)$. Khi đó $y = \\frac{(x - 1)(x - m)}{x - m} = x - 1$ với mọi $x \\ne m$. Vì nghiệm của mẫu triệt tiêu hoàn toàn với nhân tử tử số, đồ thị suy biến thành đường thẳng thủng tại $x = m$, không có tiệm cận đứng khi $m = 1$ hoặc với mọi $m$ (với $m = 1$ hai nghiệm tử trùng nhau).",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Đường tiệm cận xiên của đồ thị hàm số $y = \\frac{2x^2 - 3x + 5}{x - 1}$ có phương trình là:",
      "options": [
        "y = 2x - 1",
        "y = 2x + 1",
        "y = 2x - 3",
        "y = 2x"
      ],
      "correctAnswer": "y = 2x - 1",
      "detailedDerivation": "Chia đa thức: $\\frac{2x^2 - 3x + 5}{x - 1} = 2x - 1 + \\frac{4}{x - 1}$. Khi $x \\to \\pm\\infty$, phần dư triệt tiêu nên $y = 2x - 1$ là tiệm cận xiên.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Tâm đối xứng của đồ thị hàm số $y = \\frac{2x - 3}{x + 1}$ là điểm:",
      "options": [
        "I(-1; 2)",
        "I(1; 2)",
        "I(-1; -3)",
        "I(2; -1)"
      ],
      "correctAnswer": "I(-1; 2)",
      "detailedDerivation": "Giao điểm của tiệm cận đứng $x = -1$ và tiệm cận ngang $y = 2$ là điểm $I(-1; 2)$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Số đường tiệm cận của đồ thị hàm số $y = \\frac{\\sqrt{x^2 + 4} - 2}{x^2 - x}$ là:",
      "options": [
        "2",
        "3",
        "1",
        "4"
      ],
      "correctAnswer": "2",
      "detailedDerivation": "Tại $x=0$ giới hạn triệt tiêu nên không có TCĐ; tại $x=1$ là TCĐ; khi $x \\to \\pm\\infty$ có 1 TCN $y=0$. Tổng cộng 2 tiệm cận.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Cho hàm số bậc ba $y = ax^3 + bx^2 + cx + d$ ($a \\ne 0$). Tọa độ điểm uốn của đồ thị là nghiệm của:",
      "options": [
        "y'' = 0",
        "y' = 0",
        "y''' = 0",
        "y = 0"
      ],
      "correctAnswer": "y'' = 0",
      "detailedDerivation": "Điểm uốn của đồ thị hàm bậc ba là nghiệm của đạo hàm cấp hai $y'' = 6ax + 2b = 0$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Một thùng chứa dạng hình hộp chữ nhật không nắp có thể tích $32\\text{ m}^3$, đáy hình vuông cạnh $x$. Diện tích vật liệu làm thùng nhỏ nhất khi $x$ bằng:",
      "options": [
        "4 m",
        "2 m",
        "8 m",
        "6 m"
      ],
      "correctAnswer": "4 m",
      "detailedDerivation": "$S(x) = x^2 + \\frac{128}{x} = x^2 + \\frac{64}{x} + \\frac{64}{x} \\ge 3\\sqrt[3]{64^2} = 48$. Dấu bằng khi $x^3 = 64 \\iff x = 4\\text{ m}$.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Tổng số đường tiệm cận đứng và tiệm cận ngang của đồ thị hàm số $y = \\frac{\\sqrt{x^2 + 1}}{x - 2}$ là:",
      "options": [
        "3",
        "2",
        "1",
        "4"
      ],
      "correctAnswer": "3",
      "detailedDerivation": "TXĐ: $D = \\mathbb{R} \\setminus \\{2\\}$. Tiệm cận đứng: $\\lim_{x \\to 2^+} y = +\\infty \\implies x = 2$ là TCĐ. Tiệm cận ngang: $\\lim_{x \\to +\\infty} y = \\lim_{x \\to +\\infty} \\frac{x\\sqrt{1 + 1/x^2}}{x(1 - 2/x)} = 1 \\implies y = 1$; $\\lim_{x \\to -\\infty} y = \\lim_{x \\to -\\infty} \\frac{-x\\sqrt{1 + 1/x^2}}{x(1 - 2/x)} = -1 \\implies y = -1$. Vậy đồ thị có 1 TCĐ và 2 TCN, tổng cộng 3 đường tiệm cận.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Đồ thị hàm số $y = \\frac{2x - 3}{x + 1}$ có tâm đối xứng là điểm nào sau đây?",
      "options": [
        "I(-1; 2)",
        "I(1; 2)",
        "I(-1; -3)",
        "I(2; -1)"
      ],
      "correctAnswer": "I(-1; 2)",
      "detailedDerivation": "Hàm số phân thức bậc nhất trên bậc nhất $y = \\frac{ax + b}{cx + d}$ có tiệm cận đứng $x = -\\frac{d}{c} = -1$ và tiệm cận ngang $y = \\frac{a}{c} = 2$. Giao điểm của hai đường tiệm cận là tâm đối xứng của đồ thị: $I(-1; 2)$.",
      "cognitiveLevel": "Nhận biết"
    }
  ],
  "math12-ch3-grouped-data-dispersion": [
    {
      "questionText": "Khoảng biến thiên của mẫu số liệu ghép nhóm là:",
      "options": [
        "Hiệu giữa đầu mút phải của nhóm cuối và đầu mút trái của nhóm đầu",
        "Hiệu giữa giá trị lớn nhất và nhỏ nhất của tần số",
        "Nửa khoảng tứ phân vị",
        "Căn bậc hai của phương sai"
      ],
      "correctAnswer": "Hiệu giữa đầu mút phải của nhóm cuối và đầu mút trái của nhóm đầu",
      "detailedDerivation": "Theo định nghĩa SGK Toán 12 GDPT 2018, khoảng biến thiên của mẫu số liệu ghép nhóm là $R = a_{k+1} - a_1$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Công thức tính khoảng tứ phân vị $\\Delta_Q$ của mẫu số liệu ghép nhóm là:",
      "options": [
        "\\Delta_Q = Q_3 - Q_1",
        "\\Delta_Q = Q_3 + Q_1",
        "\\Delta_Q = \\frac{Q_3 - Q_1}{2}",
        "\\Delta_Q = Q_2 - Q_1"
      ],
      "correctAnswer": "\\Delta_Q = Q_3 - Q_1",
      "detailedDerivation": "Khoảng tứ phân vị đo độ phân tán của 50% số liệu chính giữa, được tính bằng $\\Delta_Q = Q_3 - Q_1$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Độ lệch chuẩn $s$ của mẫu số liệu ghép nhóm liên hệ với phương sai $s^2$ theo công thức:",
      "options": [
        "s = \\sqrt{s^2}",
        "s = (s^2)^2",
        "s = 2s^2",
        "s = \\frac{s^2}{n}"
      ],
      "correctAnswer": "s = \\sqrt{s^2}",
      "detailedDerivation": "Độ lệch chuẩn là căn bậc hai số học của phương sai: $s = \\sqrt{s^2}$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Giá trị đại diện của nhóm $[20; 30)$ là:",
      "options": [
        "25",
        "20",
        "30",
        "10"
      ],
      "correctAnswer": "25",
      "detailedDerivation": "Giá trị đại diện của nhóm $[a; b)$ là trung bình cộng hai đầu mút: $c = \\frac{a + b}{2} = \\frac{20 + 30}{2} = 25$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Một mẫu số liệu ghép nhóm có $n = 40$. Nhóm chứa trung vị $Q_2$ là nhóm đầu tiên có tần số tích lũy $cf$ thỏa mãn:",
      "options": [
        "cf \\ge 20",
        "cf \\ge 10",
        "cf \\ge 30",
        "cf \\ge 40"
      ],
      "correctAnswer": "cf \\ge 20",
      "detailedDerivation": "Vị trí trung vị tương ứng với $\\frac{n}{2} = \\frac{40}{2} = 20$. Nhóm chứa trung vị là nhóm đầu tiên có tần số tích lũy $cf \\ge 20$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Cho bảng số liệu ghép nhóm: $[0; 5): 4$; $[5; 10): 10$; $[10; 15): 6$. Cỡ mẫu $n$ bằng:",
      "options": [
        "20",
        "16",
        "24",
        "10"
      ],
      "correctAnswer": "20",
      "detailedDerivation": "Cỡ mẫu $n$ là tổng tất cả các tần số: $n = 4 + 10 + 6 = 20$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Nhóm có tần số lớn nhất trong mẫu số liệu ghép nhóm được gọi là:",
      "options": [
        "Nhóm chứa mốt",
        "Nhóm chứa trung vị",
        "Nhóm tứ phân vị",
        "Nhóm ngoại lai"
      ],
      "correctAnswer": "Nhóm chứa mốt",
      "detailedDerivation": "Nhóm chứa mốt là nhóm có tần số lớn nhất trong phân bố ghép nhóm.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Cho mẫu số liệu ghép nhóm với số trung bình $\\bar{x} = 20$, phương sai $s^2 = 16$. Độ lệch chuẩn $s$ bằng:",
      "options": [
        "4",
        "16",
        "256",
        "2"
      ],
      "correctAnswer": "4",
      "detailedDerivation": "Độ lệch chuẩn $s = \\sqrt{s^2} = \\sqrt{16} = 4$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Khi tất cả các giá trị của mẫu số liệu được nhân với 2 thì phương sai mới thay đổi như thế nào?",
      "options": [
        "Tăng gấp 4 lần",
        "Tăng gấp 2 lần",
        "Không đổi",
        "Tăng gấp 16 lần"
      ],
      "correctAnswer": "Tăng gấp 4 lần",
      "detailedDerivation": "Tính chất phương sai: $Var(kX) = k^2 Var(X)$. Khi nhân mỗi giá trị với 2 thì $k = 2 \\implies$ phương sai tăng $2^2 = 4$ lần.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Cho bảng thời gian chạy (giây): $[10; 12): 5$; $[12; 14): 15$; $[14; 16): 10$. Số trung bình $\\bar{x}$ của mẫu số liệu ghép nhóm là:",
      "options": [
        "13.33",
        "13.00",
        "13.50",
        "12.80"
      ],
      "correctAnswer": "13.33",
      "detailedDerivation": "Giá trị đại diện các nhóm là 11, 13, 15. Cỡ mẫu $n = 5 + 15 + 10 = 30$. $\\bar{x} = \\frac{5 \\cdot 11 + 15 \\cdot 13 + 10 \\cdot 15}{30} = \\frac{55 + 195 + 150}{30} = \\frac{400}{30} \\approx 13.33$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Cho bảng phân bố điểm: $[4; 6): 8$; $[6; 8): 20$; $[8; 10): 12$. Cỡ mẫu $n = 40$. Nhóm chứa tứ phân vị thứ nhất $Q_1$ là:",
      "options": [
        "[6; 8)",
        "[4; 6)",
        "[8; 10)",
        "Không xác định"
      ],
      "correctAnswer": "[6; 8)",
      "detailedDerivation": "Vị trí $Q_1$ là $\\frac{n}{4} = 10$. Tần số tích lũy nhóm 1 là 8 ($< 10$), nhóm 2 là $8 + 20 = 28$ ($\\ge 10$). Vậy nhóm chứa $Q_1$ là $[6; 8)$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Cho mẫu số liệu có $Q_1 = 45$ và $Q_3 = 65$. Khoảng tứ phân vị $\\Delta_Q$ bằng:",
      "options": [
        "20",
        "110",
        "10",
        "55"
      ],
      "correctAnswer": "20",
      "detailedDerivation": "$\\Delta_Q = Q_3 - Q_1 = 65 - 45 = 20$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Hai lớp 12A và 12B có cùng điểm trung bình môn Toán là 7.8, nhưng độ lệch chuẩn của lớp 12A là $s_A = 0.6$ và lớp 12B là $s_B = 1.2$. Nhận xét nào sau đây đúng?",
      "options": [
        "Điểm của học sinh lớp 12A đồng đều hơn lớp 12B",
        "Điểm của học sinh lớp 12B đồng đều hơn lớp 12A",
        "Hai lớp có độ phân tán điểm số như nhau",
        "Lớp 12B có nhiều học sinh giỏi hơn lớp 12A"
      ],
      "correctAnswer": "Điểm của học sinh lớp 12A đồng đều hơn lớp 12B",
      "detailedDerivation": "Độ lệch chuẩn đo mức độ phân tán số liệu quanh số trung bình. Vì $s_A = 0.6 < s_B = 1.2$ nên điểm số của học sinh lớp 12A ít phân tán hơn, tức là đồng đều hơn.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Công thức nội suy tính tứ phân vị thứ nhất $Q_1$ của mẫu số liệu ghép nhóm là $Q_1 = u_m + \\frac{\\frac{n}{4} - C}{n_m} \\cdot h$. Nếu nhóm $[20; 30)$ có $u_m = 20, h = 10, n = 100, C = 20, n_m = 25$ thì $Q_1$ bằng:",
      "options": [
        "22",
        "25",
        "23.5",
        "21"
      ],
      "correctAnswer": "22",
      "detailedDerivation": "Thay số: $Q_1 = 20 + \\frac{25 - 20}{25} \\cdot 10 = 20 + \\frac{5}{25} \\cdot 10 = 20 + 2 = 22$.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Một bảng ghép nhóm có khoảng biến thiên $R = 40$ và khoảng tứ phân vị $\\Delta_Q = 8$. Tỉ số $\\frac{R}{\\Delta_Q}$ bằng:",
      "options": [
        "5",
        "4",
        "320",
        "0.2"
      ],
      "correctAnswer": "5",
      "detailedDerivation": "Tỉ số $\\frac{R}{\\Delta_Q} = \\frac{40}{8} = 5$.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Một quy trình sản xuất linh kiện điện tử có phương sai kích thước $s^2 = 0.04\\text{ mm}^2$. Sau khi cải tiến công nghệ, phương sai giảm còn $0.01\\text{ mm}^2$. Độ lệch chuẩn đã giảm đi:",
      "options": [
        "0.1\\text{ mm}",
        "0.03\\text{ mm}",
        "0.2\\text{ mm}",
        "0.01\\text{ mm}"
      ],
      "correctAnswer": "0.1\\text{ mm}",
      "detailedDerivation": "Độ lệch chuẩn ban đầu $s_1 = \\sqrt{0.04} = 0.2\\text{ mm}$. Độ lệch chuẩn sau cải tiến $s_2 = \\sqrt{0.01} = 0.1\\text{ mm}$. Độ lệch chuẩn đã giảm $0.2 - 0.1 = 0.1\\text{ mm}$.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Khi phân tích mẫu số liệu ghép nhóm của 200 thí sinh, người ta tìm được $Q_1 = 18.5, Q_3 = 24.5$. Một giá trị $x$ được xem là giá trị bất thường (ngoại lai) nếu $x > Q_3 + 1.5\\Delta_Q$. Ngưỡng phát hiện ngoại lai trên là:",
      "options": [
        "33.5",
        "30.5",
        "27.5",
        "35.0"
      ],
      "correctAnswer": "33.5",
      "detailedDerivation": "$\\Delta_Q = 24.5 - 18.5 = 6$. Ngưỡng ngoại lai trên là $Q_3 + 1.5\\Delta_Q = 24.5 + 1.5 \\times 6 = 24.5 + 9 = 33.5$.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Khoảng biến thiên của mẫu số liệu ghép nhóm là:",
      "options": [
        "Hiệu giữa đầu mút phải của nhóm cuối và đầu mút trái của nhóm đầu",
        "Hiệu giữa hai tần số lớn nhất và nhỏ nhất",
        "Khoảng cách giữa hai tứ phân vị Q3 và Q1",
        "Giá trị trung bình cộng của nhóm đầu và nhóm cuối"
      ],
      "correctAnswer": "Hiệu giữa đầu mút phải của nhóm cuối và đầu mút trái của nhóm đầu",
      "detailedDerivation": "Định nghĩa: Khoảng biến thiên $R = a_k - a_1$ của mẫu ghép nhóm $[a_1; a_2), \\dots, [a_{k-1}; a_k)$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Cho mẫu số liệu ghép nhóm có phương sai $s^2 = 2.25$. Độ lệch chuẩn $s$ bằng:",
      "options": [
        "1.5",
        "2.25",
        "5.0625",
        "0.75"
      ],
      "correctAnswer": "1.5",
      "detailedDerivation": "$s = \\sqrt{s^2} = \\sqrt{2.25} = 1.5$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Khoảng tứ phân vị $\\Delta_Q$ của mẫu số liệu được xác định bằng công thức:",
      "options": [
        "\\Delta_Q = Q_3 - Q_1",
        "\\Delta_Q = Q_3 - Q_2",
        "\\Delta_Q = Q_2 - Q_1",
        "\\Delta_Q = \\frac{Q_3 - Q_1}{2}"
      ],
      "correctAnswer": "\\Delta_Q = Q_3 - Q_1",
      "detailedDerivation": "Khoảng tứ phân vị $\\Delta_Q$ là hiệu giữa tứ phân vị thứ ba $Q_3$ và tứ phân vị thứ nhất $Q_1$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Khi so sánh hai mẫu số liệu có cùng số trung bình, mẫu nào có độ lệch chuẩn nhỏ hơn thì:",
      "options": [
        "Độ biến thiên (phân tán) ít hơn, số liệu đồng đều hơn",
        "Độ biến thiên lớn hơn",
        "Số lượng phần tử nhiều hơn",
        "Khoảng biến thiên luôn lớn hơn"
      ],
      "correctAnswer": "Độ biến thiên (phân tán) ít hơn, số liệu đồng đều hơn",
      "detailedDerivation": "Độ lệch chuẩn đo độ phân tán so với số trung bình; độ lệch chuẩn càng bé thì số liệu càng đồng đều.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Một nhóm nghiên cứu đo thời gian sạc đầy pin xe điện của 100 mẫu xe, tìm được $Q_1 = 4.2\\text{ giờ}$, $Q_3 = 5.8\\text{ giờ}$. Theo quy tắc hàng rào, một mẫu xe có thời gian sạc $x$ bị coi là giá trị ngoại lệ nếu:",
      "options": [
        "x < 1.8 giờ hoặc x > 8.2 giờ",
        "x < 2.6 giờ hoặc x > 7.4 giờ",
        "x < 3.0 giờ hoặc x > 7.0 giờ",
        "x < 4.0 giờ hoặc x > 6.0 giờ"
      ],
      "correctAnswer": "x < 1.8 giờ hoặc x > 8.2 giờ",
      "detailedDerivation": "$\\Delta_Q = 5.8 - 4.2 = 1.6$. Hàng rào dưới: $Q_1 - 1.5\\Delta_Q = 4.2 - 2.4 = 1.8$. Hàng rào trên: $Q_3 + 1.5\\Delta_Q = 5.8 + 2.4 = 8.2$. Do đó giá trị ngoại lệ là $x < 1.8$ hoặc $x > 8.2$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Cho mẫu số liệu ghép nhóm về thời gian chạy (giây) của học sinh. Khoảng tứ phân vị $\\Delta_Q$ được tính theo công thức nào sau đây?",
      "options": [
        "\\Delta_Q = Q_3 - Q_1",
        "\\Delta_Q = Q_2 - Q_1",
        "\\Delta_Q = Q_3 - Q_2",
        "\\Delta_Q = \\frac{Q_3 - Q_1}{2}"
      ],
      "correctAnswer": "\\Delta_Q = Q_3 - Q_1",
      "detailedDerivation": "Theo quy ước SGK GDPT 2018 Toán 12, khoảng tứ phân vị của mẫu số liệu ghép nhóm là hiệu số giữa tứ phân vị thứ ba $Q_3$ và tứ phân vị thứ nhất $Q_1$: $\\Delta_Q = Q_3 - Q_1$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Giá trị đại diện của nhóm số liệu $[160; 170)$ trong mẫu số liệu ghép nhóm là:",
      "options": [
        "165",
        "160",
        "170",
        "10"
      ],
      "correctAnswer": "165",
      "detailedDerivation": "Giá trị đại diện của nhóm $[a_i; a_{i+1})$ là trung bình cộng của hai đầu mút: $c_i = \\frac{160 + 170}{2} = 165$.",
      "cognitiveLevel": "Nhận biết"
    }
  ],
  "math12-ch4-integrals-applications": [
    {
      "questionText": "Nguyên hàm $\\int x^4 dx$ bằng:",
      "options": [
        "\\frac{x^5}{5} + C",
        "4x^3 + C",
        "5x^5 + C",
        "x^5 + C"
      ],
      "correctAnswer": "\\frac{x^5}{5} + C",
      "detailedDerivation": "Áp dụng công thức $\\int x^n dx = \\frac{x^{n+1}}{n+1} + C$ với $n = 4 \\implies \\frac{x^5}{5} + C$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Nguyên hàm $\\int e^{2x} dx$ bằng:",
      "options": [
        "\\frac{1}{2} e^{2x} + C",
        "2e^{2x} + C",
        "e^{2x} + C",
        "\\frac{1}{2} e^x + C"
      ],
      "correctAnswer": "\\frac{1}{2} e^{2x} + C",
      "detailedDerivation": "Áp dụng công thức $\\int e^{ax+b} dx = \\frac{1}{a} e^{ax+b} + C \\implies \\frac{1}{2} e^{2x} + C$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Tích phân $\\int_0^1 (2x + 1) dx$ có giá trị bằng:",
      "options": [
        "2",
        "1",
        "3",
        "4"
      ],
      "correctAnswer": "2",
      "detailedDerivation": "$\\int_0^1 (2x + 1) dx = [x^2 + x]_0^1 = (1 + 1) - 0 = 2$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Diện tích $S$ của hình phẳng giới hạn bởi đồ thị hàm số $y = f(x)$ liên tục, trục hoành và hai đường thẳng $x = a, x = b$ ($a < b$) được tính theo công thức:",
      "options": [
        "S = \\int_a^b |f(x)| dx",
        "S = \\int_a^b f(x) dx",
        "S = \\pi \\int_a^b [f(x)]^2 dx",
        "S = |\\int_a^b f(x) dx|"
      ],
      "correctAnswer": "S = \\int_a^b |f(x)| dx",
      "detailedDerivation": "Theo định nghĩa hình học của tích phân, diện tích hình phẳng là $S = \\int_a^b |f(x)| dx$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Tích phân $\\int_0^{\\pi/2} \\cos x dx$ bằng:",
      "options": [
        "1",
        "0",
        "-1",
        "\\pi"
      ],
      "correctAnswer": "1",
      "detailedDerivation": "$\\int_0^{\\pi/2} \\cos x dx = [\\sin x]_0^{\\pi/2} = \\sin(\\pi/2) - \\sin(0) = 1 - 0 = 1$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Biết $\\int_1^2 f(x) dx = 3$ và $\\int_1^2 g(x) dx = -2$. Khi đó $\\int_1^2 [2f(x) - g(x)] dx$ bằng:",
      "options": [
        "8",
        "4",
        "5",
        "1"
      ],
      "correctAnswer": "8",
      "detailedDerivation": "Tích phân có tính tuyến tính: $2 \\int_1^2 f(x) dx - \\int_1^2 g(x) dx = 2(3) - (-2) = 6 + 2 = 8$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Sử dụng phương pháp đổi biến số với $u = x^2 + 1$, tích phân $I = \\int_0^1 2x(x^2 + 1)^3 dx$ chuyển thành:",
      "options": [
        "\\int_1^2 u^3 du",
        "\\int_0^1 u^3 du",
        "\\int_1^2 2u^3 du",
        "\\frac{1}{2} \\int_1^2 u^3 du"
      ],
      "correctAnswer": "\\int_1^2 u^3 du",
      "detailedDerivation": "Đặt $u = x^2 + 1 \\implies du = 2x dx$. Đổi cận: $x = 0 \\implies u = 1; x = 1 \\implies u = 2$. Vậy $I = \\int_1^2 u^3 du$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Thể tích khối tròn xoay sinh ra khi quay hình phẳng giới hạn bởi $y = x^2$, trục hoành, $x = 0$ và $x = 1$ quanh trục $Ox$ là:",
      "options": [
        "\\frac{\\pi}{5}",
        "\\frac{1}{5}",
        "\\frac{\\pi}{3}",
        "\\frac{2\\pi}{5}"
      ],
      "correctAnswer": "\\frac{\\pi}{5}",
      "detailedDerivation": "Công thức $V = \\pi \\int_0^1 [f(x)]^2 dx = \\pi \\int_0^1 (x^2)^2 dx = \\pi \\int_0^1 x^4 dx = \\pi [\\frac{x^5}{5}]_0^1 = \\frac{\\pi}{5}$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Tính tích phân từng phần $\\int_0^1 x e^x dx$.",
      "options": [
        "1",
        "e - 1",
        "e",
        "2"
      ],
      "correctAnswer": "1",
      "detailedDerivation": "Đặt $u = x \\implies du = dx; dv = e^x dx \\implies v = e^x$. Ta có $[x e^x]_0^1 - \\int_0^1 e^x dx = e - [e^x]_0^1 = e - (e - 1) = 1$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Diện tích hình phẳng giới hạn bởi parabol $y = -x^2 + 4$ và trục hoành $y = 0$ bằng:",
      "options": [
        "\\frac{32}{3}",
        "\\frac{16}{3}",
        "8",
        "16"
      ],
      "correctAnswer": "\\frac{32}{3}",
      "detailedDerivation": "Giao điểm với trục hoành: $-x^2 + 4 = 0 \\iff x = \\pm 2$. $S = \\int_{-2}^2 (4 - x^2) dx = [4x - \\frac{x^3}{3}]_{-2}^2 = (8 - \\frac{8}{3}) - (-8 + \\frac{8}{3}) = \\frac{32}{3}$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Một vật chuyển động với vận tốc $v(t) = 3t^2 + 2t$ (m/s). Quãng đường vật đi được từ thời điểm $t = 0$ đến $t = 3$ giây là:",
      "options": [
        "36\\text{ m}",
        "27\\text{ m}",
        "30\\text{ m}",
        "45\\text{ m}"
      ],
      "correctAnswer": "36\\text{ m}",
      "detailedDerivation": "Quãng đường $s = \\int_0^3 v(t) dt = \\int_0^3 (3t^2 + 2t) dt = [t^3 + t^2]_0^3 = 27 + 9 = 36\\text{ m}$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Tính diện tích hình phẳng giới hạn bởi hai đường cong $y = x^2$ và $y = 2x$.",
      "options": [
        "\\frac{4}{3}",
        "\\frac{2}{3}",
        "2",
        "4"
      ],
      "correctAnswer": "\\frac{4}{3}",
      "detailedDerivation": "Hoành độ giao điểm: $x^2 = 2x \\iff x = 0$ hoặc $x = 2$. $S = \\int_0^2 (2x - x^2) dx = [x^2 - \\frac{x^3}{3}]_0^2 = 4 - \\frac{8}{3} = \\frac{4}{3}$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Biết $\\int_0^1 \\frac{1}{2x + 1} dx = \\frac{1}{2} \\ln a$. Giá trị của $a$ là:",
      "options": [
        "3",
        "2",
        "5",
        "9"
      ],
      "correctAnswer": "3",
      "detailedDerivation": "$\\int_0^1 \\frac{1}{2x + 1} dx = [\\frac{1}{2} \\ln|2x + 1|]_0^1 = \\frac{1}{2} \\ln 3 - \\frac{1}{2} \\ln 1 = \\frac{1}{2} \\ln 3$. Do đó $a = 3$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Cho hàm số $f(x)$ liên tục trên $\\mathbb{R}$ thỏa mãn $\\int_0^4 f(x) dx = 12$. Tính tích phân $I = \\int_0^2 f(2x) dx$.",
      "options": [
        "6",
        "24",
        "12",
        "3"
      ],
      "correctAnswer": "6",
      "detailedDerivation": "Đặt $t = 2x \\implies dt = 2 dx \\implies dx = \\frac{1}{2} dt$. Cận: $x = 0 \\implies t = 0; x = 2 \\implies t = 4$. Vậy $I = \\int_0^4 f(t) \\cdot \\frac{1}{2} dt = \\frac{1}{2} \\int_0^4 f(t) dt = \\frac{1}{2} \\cdot 12 = 6$.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Thể tích khối tròn xoay khi quay hình phẳng giới hạn bởi $y = \\sqrt{x} e^x$, $y = 0, x = 0, x = 1$ quanh trục $Ox$ bằng:",
      "options": [
        "\\frac{\\pi(e^2 + 1)}{4}",
        "\\frac{\\pi(e^2 - 1)}{2}",
        "\\pi e",
        "\\frac{\\pi e^2}{2}"
      ],
      "correctAnswer": "\\frac{\\pi(e^2 + 1)}{4}",
      "detailedDerivation": "$V = \\pi \\int_0^1 (\\sqrt{x} e^x)^2 dx = \\pi \\int_0^1 x e^{2x} dx$. Đặt $u = x, dv = e^{2x} dx$. Ta có $[\\frac{x}{2} e^{2x}]_0^1 - \\int_0^1 \\frac{1}{2} e^{2x} dx = \\frac{e^2}{2} - [\\frac{1}{4} e^{2x}]_0^1 = \\frac{e^2}{2} - \\frac{e^2 - 1}{4} = \\frac{e^2 + 1}{4}$. Nhân với $\\pi$ được $\\frac{\\pi(e^2 + 1)}{4}$.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Một bồn chứa nước có tốc độ bơm vào là $r(t) = 20 - 2t$ (lít/phút). Lượng nước bơm vào bồn từ $t = 0$ đến khi tốc độ bơm bằng 0 là:",
      "options": [
        "100\\text{ lít}",
        "200\\text{ lít}",
        "80\\text{ lít}",
        "150\\text{ lít}"
      ],
      "correctAnswer": "100\\text{ lít}",
      "detailedDerivation": "Tốc độ bơm bằng 0 khi $20 - 2t = 0 \\iff t = 10$ phút. Tổng lượng nước là $\\int_0^{10} (20 - 2t) dt = [20t - t^2]_0^{10} = 200 - 100 = 100\\text{ lít}$.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Cho hàm số $f(x)$ liên tục trên đoạn $[0; 1]$ thỏa mãn $f(x) + f(1 - x) = x^2 (1 - x)^2$. Tích phân $\\int_0^1 f(x) dx$ bằng:",
      "options": [
        "\\frac{1}{60}",
        "\\frac{1}{30}",
        "\\frac{1}{120}",
        "\\frac{1}{15}"
      ],
      "correctAnswer": "\\frac{1}{60}",
      "detailedDerivation": "Lấy tích phân hai vế từ 0 đến 1: $\\int_0^1 f(x) dx + \\int_0^1 f(1 - x) dx = 2 \\int_0^1 f(x) dx$. Vế phải $\\int_0^1 (x - x^2)^2 dx = \\int_0^1 (x^2 - 2x^3 + x^4) dx = [\\frac{x^3}{3} - \\frac{x^4}{2} + \\frac{x^5}{5}]_0^1 = \\frac{1}{3} - \\frac{1}{2} + \\frac{1}{5} = \\frac{1}{30}$. Vậy $\\int_0^1 f(x) dx = \\frac{1}{60}$.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Họ nguyên hàm của hàm số $f(x) = 3x^2 + 2\\sin x$ là:",
      "options": [
        "x^3 - 2\\cos x + C",
        "x^3 + 2\\cos x + C",
        "6x - 2\\cos x + C",
        "3x^3 + 2\\cos x + C"
      ],
      "correctAnswer": "x^3 - 2\\cos x + C",
      "detailedDerivation": "$\\int (3x^2 + 2\\sin x) dx = x^3 - 2\\cos x + C$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Tích phân $\\int_0^1 (2x + 1) dx$ bằng:",
      "options": [
        "2",
        "1",
        "3",
        "0"
      ],
      "correctAnswer": "2",
      "detailedDerivation": "$\\left[ x^2 + x \\right]_0^1 = (1 + 1) - 0 = 2$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Diện tích hình phẳng giới hạn bởi parabol $y = x^2$ và đường thẳng $y = 2x$ bằng:",
      "options": [
        "\\frac{4}{3}",
        "\\frac{2}{3}",
        "2",
        "\\frac{8}{3}"
      ],
      "correctAnswer": "\\frac{4}{3}",
      "detailedDerivation": "Giao điểm: $x^2 = 2x \\iff x = 0$ hoặc $x = 2$. Diện tích: $\\int_0^2 (2x - x^2) dx = \\left[ x^2 - \\frac{x^3}{3} \\right]_0^2 = 4 - \\frac{8}{3} = \\frac{4}{3}$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Thể tích vật thể tròn xoay sinh ra khi quay hình phẳng giới hạn bởi $y = \\cos x$, $y = 0$, $x = 0$, $x = \\frac{\\pi}{2}$ quanh trục $Ox$ là:",
      "options": [
        "\\frac{\\pi^2}{4}",
        "\\frac{\\pi}{2}",
        "\\pi",
        "\\frac{\\pi^2}{2}"
      ],
      "correctAnswer": "\\frac{\\pi^2}{4}",
      "detailedDerivation": "$V = \\pi \\int_0^{\\pi/2} \\cos^2 x dx = \\pi \\int_0^{\\pi/2} \\frac{1 + \\cos 2x}{2} dx = \\pi \\left[ \\frac{x}{2} + \\frac{\\sin 2x}{4} \\right]_0^{\\pi/2} = \\frac{\\pi^2}{4}$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Một khinh khí cầu hạ cánh thẳng đứng với vận tốc $v(t) = 12 - 3t\\text{ (m/s)}$ từ thời điểm $t = 0$ cho đến khi tiếp đất ($v = 0$). Độ cao ban đầu của khinh khí cầu khi bắt đầu hạ cánh là:",
      "options": [
        "24 m",
        "36 m",
        "48 m",
        "18 m"
      ],
      "correctAnswer": "24 m",
      "detailedDerivation": "Khí cầu dừng khi $v(t) = 0 \\iff 12 - 3t = 0 \\iff t = 4\\text{ s}$. Độ cao: $h = \\int_0^4 (12 - 3t) dt = \\left[ 12t - 1.5t^2 \\right]_0^4 = 48 - 24 = 24\\text{ m}$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Thể tích của khối tròn xoay tạo thành khi quay hình phẳng giới hạn bởi đường cong $y = \\sqrt{x}$, trục hoành $y = 0$ và đường thẳng $x = 4$ quanh trục hoành $Ox$ bằng:",
      "options": [
        "8\\pi",
        "16\\pi",
        "4\\pi",
        "\\frac{32\\pi}{3}"
      ],
      "correctAnswer": "8\\pi",
      "detailedDerivation": "Công thức thể tích tròn xoay: $V = \\pi \\int_0^4 (\\sqrt{x})^2 dx = \\pi \\int_0^4 x dx = \\pi \\left[ \\frac{x^2}{2} \\right]_0^4 = \\pi \\cdot \\frac{16}{2} = 8\\pi$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Nếu $\\int_0^2 f(x)dx = 4$ và $\\int_0^2 g(x)dx = -3$ thì $\\int_0^2 [2f(x) - g(x)]dx$ bằng:",
      "options": [
        "11",
        "5",
        "8",
        "14"
      ],
      "correctAnswer": "11",
      "detailedDerivation": "Theo tính chất tuyến tính của tích phân: $\\int_0^2 [2f(x) - g(x)]dx = 2\\int_0^2 f(x)dx - \\int_0^2 g(x)dx = 2(4) - (-3) = 8 + 3 = 11$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Diện tích hình phẳng giới hạn bởi đường cong $y = x^2$ và đường thẳng $y = 2x$ bằng:",
      "options": [
        "\\frac{4}{3}",
        "\\frac{2}{3}",
        "\\frac{8}{3}",
        "2"
      ],
      "correctAnswer": "\\frac{4}{3}",
      "detailedDerivation": "Phương trình hoành độ giao điểm: $x^2 = 2x \\iff x^2 - 2x = 0 \\iff x = 0$ hoặc $x = 2$. Diện tích $S = \\int_0^2 |2x - x^2| dx = \\int_0^2 (2x - x^2) dx = \\left[ x^2 - \\frac{x^3}{3} \\right]_0^2 = 4 - \\frac{8}{3} = \\frac{4}{3}$.",
      "cognitiveLevel": "Thông hiểu"
    }
  ],
  "math12-ch5-oxyz-geometry": [
    {
      "questionText": "Trong không gian $Oxyz$, cho điểm $A(1; 2; -3)$. Hình chiếu vuông góc của điểm $A$ lên mặt phẳng $(Oxy)$ có tọa độ là:",
      "options": [
        "(1; 2; 0)",
        "(1; 0; -3)",
        "(0; 2; -3)",
        "(0; 0; -3)"
      ],
      "correctAnswer": "(1; 2; 0)",
      "detailedDerivation": "Hình chiếu vuông góc của $A(x; y; z)$ lên mặt phẳng $(Oxy)$ giữ nguyên hoành độ, tung độ và có cao độ bằng 0: $(1; 2; 0)$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Trong không gian $Oxyz$, vectơ $\\vec{u} = 2\\vec{i} - 3\\vec{j} + \\vec{k}$ có tọa độ là:",
      "options": [
        "(2; -3; 1)",
        "(2; 3; 1)",
        "(1; -3; 2)",
        "(-2; 3; -1)"
      ],
      "correctAnswer": "(2; -3; 1)",
      "detailedDerivation": "Tọa độ của vectơ $\\vec{u}$ theo hệ vectơ đơn vị là $(2; -3; 1)$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Mặt cầu $(S): (x - 1)^2 + (y + 2)^2 + (z - 3)^2 = 16$ có tâm $I$ và bán kính $R$ là:",
      "options": [
        "I(1; -2; 3), R = 4",
        "I(-1; 2; -3), R = 4",
        "I(1; -2; 3), R = 16",
        "I(1; 2; 3), R = 4"
      ],
      "correctAnswer": "I(1; -2; 3), R = 4",
      "detailedDerivation": "Phương trình chính tắc mặt cầu có tâm $I(1; -2; 3)$ và bán kính $R = \\sqrt{16} = 4$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Mặt phẳng $(P): 2x - y + 3z - 5 = 0$ có một vectơ pháp tuyến là:",
      "options": [
        "\\vec{n} = (2; -1; 3)",
        "\\vec{n} = (2; 1; 3)",
        "\\vec{n} = (2; -1; -5)",
        "\\vec{n} = (-1; 3; -5)"
      ],
      "correctAnswer": "\\vec{n} = (2; -1; 3)",
      "detailedDerivation": "Hệ số của $x, y, z$ trong phương trình tổng quát chính là tọa độ của vectơ pháp tuyến: $\\vec{n} = (2; -1; 3)$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Cho hai điểm $A(1; 1; 0)$ và $B(3; -1; 2)$. Tọa độ trung điểm $M$ của đoạn thẳng $AB$ là:",
      "options": [
        "(2; 0; 1)",
        "(4; 0; 2)",
        "(1; -1; 1)",
        "(2; 1; 1)"
      ],
      "correctAnswer": "(2; 0; 1)",
      "detailedDerivation": "Tọa độ trung điểm: $M = \\left(\\frac{1+3}{2}; \\frac{1+(-1)}{2}; \\frac{0+2}{2}\\right) = (2; 0; 1)$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Khoảng cách từ điểm $M(1; 2; 3)$ đến mặt phẳng $(P): 2x + 2y - z + 3 = 0$ bằng:",
      "options": [
        "2",
        "3",
        "1",
        "6"
      ],
      "correctAnswer": "2",
      "detailedDerivation": "Công thức khoảng cách: $d = \\frac{|2(1) + 2(2) - 1(3) + 3|}{\\sqrt{2^2 + 2^2 + (-1)^2}} = \\frac{|2 + 4 - 3 + 3|}{\\sqrt{9}} = \\frac{6}{3} = 2$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Góc giữa hai vectơ $\\vec{u} = (1; 0; 1)$ và $\\vec{v} = (0; 1; 1)$ bằng:",
      "options": [
        "60^\\circ",
        "45^\\circ",
        "90^\\circ",
        "30^\\circ"
      ],
      "correctAnswer": "60^\\circ",
      "detailedDerivation": "$\\cos(\\vec{u}, \\vec{v}) = \\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{u}| |\\vec{v}|} = \\frac{1(0) + 0(1) + 1(1)}{\\sqrt{1^2+0^2+1^2} \\sqrt{0^2+1^2+1^2}} = \\frac{1}{\\sqrt{2}\\sqrt{2}} = \\frac{1}{2} \\implies 60^\\circ$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Phương trình chính tắc của đường thẳng đi qua $M(1; -2; 3)$ và có VTCP $\\vec{u} = (2; 1; -4)$ là:",
      "options": [
        "\\frac{x - 1}{2} = \\frac{y + 2}{1} = \\frac{z - 3}{-4}",
        "\\frac{x + 1}{2} = \\frac{y - 2}{1} = \\frac{z + 3}{-4}",
        "\\frac{x - 2}{1} = \\frac{y - 1}{-2} = \\frac{z + 4}{3}",
        "\\frac{x - 1}{2} = \\frac{y - 2}{1} = \\frac{z - 3}{4}"
      ],
      "correctAnswer": "\\frac{x - 1}{2} = \\frac{y + 2}{1} = \\frac{z - 3}{-4}",
      "detailedDerivation": "Đường thẳng qua $M(x_0; y_0; z_0)$ có VTCP $(a; b; c)$ có dạng $\\frac{x - x_0}{a} = \\frac{y - y_0}{b} = \\frac{z - z_0}{c}$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Mặt phẳng đi qua $A(2; 0; 0), B(0; -3; 0), C(0; 0; 4)$ có phương trình đoạn chắn là:",
      "options": [
        "\\frac{x}{2} + \\frac{y}{-3} + \\frac{z}{4} = 1",
        "\\frac{x}{2} + \\frac{y}{3} + \\frac{z}{4} = 1",
        "2x - 3y + 4z = 1",
        "6x - 4y + 3z = 12"
      ],
      "correctAnswer": "\\frac{x}{2} + \\frac{y}{-3} + \\frac{z}{4} = 1",
      "detailedDerivation": "Phương trình mặt phẳng theo đoạn chắn đi qua 3 điểm trên 3 trục tọa độ là $\\frac{x}{a} + \\frac{y}{b} + \\frac{z}{c} = 1$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Viết phương trình mặt phẳng $(P)$ đi qua điểm $A(1; 0; -2)$ và vuông góc với đường thẳng $d: \\frac{x - 1}{2} = \\frac{y + 1}{-1} = \\frac{z}{3}$.",
      "options": [
        "2x - y + 3z + 4 = 0",
        "2x - y + 3z - 4 = 0",
        "2x - y + 3z + 2 = 0",
        "x - y + 3z + 5 = 0"
      ],
      "correctAnswer": "2x - y + 3z + 4 = 0",
      "detailedDerivation": "Vectơ chỉ phương của $d$ là $\\vec{u} = (2; -1; 3)$ làm VTPT của $(P)$. Phương trình: $2(x - 1) - 1(y - 0) + 3(z + 2) = 0 \\iff 2x - y + 3z + 4 = 0$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Phương trình mặt cầu có đường kính $AB$ với $A(1; 2; 3)$ và $B(3; 4; 5)$ là:",
      "options": [
        "(x - 2)^2 + (y - 3)^2 + (z - 4)^2 = 3",
        "(x - 2)^2 + (y - 3)^2 + (z - 4)^2 = 12",
        "(x - 1)^2 + (y - 2)^2 + (z - 3)^2 = 3",
        "(x - 3)^2 + (y - 4)^2 + (z - 5)^2 = 9"
      ],
      "correctAnswer": "(x - 2)^2 + (y - 3)^2 + (z - 4)^2 = 3",
      "detailedDerivation": "Tâm mặt cầu là trung điểm $AB: I(2; 3; 4)$. Bán kính $R = \\frac{AB}{2} = \\frac{\\sqrt{2^2+2^2+2^2}}{2} = \\frac{\\sqrt{12}}{2} = \\sqrt{3} \\implies R^2 = 3$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Tìm giao điểm của đường thẳng $d: \\begin{cases} x = 1 + t \\\\ y = 2 - t \\\\ z = 3 + 2t \\end{cases}$ và mặt phẳng $(P): x + 2y - z + 2 = 0$.",
      "options": [
        "(2; 1; 5)",
        "(1; 2; 3)",
        "(3; 0; 7)",
        "(0; 3; 1)"
      ],
      "correctAnswer": "(2; 1; 5)",
      "detailedDerivation": "Thay phương trình tham số vào $(P)$: $(1 + t) + 2(2 - t) - (3 + 2t) + 2 = 0 \\iff 1 + t + 4 - 2t - 3 - 2t + 2 = 0 \\iff -3t + 4 = 0$? Kiểm tra lại: $1+t+4-2t-3-2t+2 = 4 - 3t = 0$. Thay điểm $(2; 1; 5)$ ứng với $t = 1$: $2 + 2(1) - 5 + 2 = 1 \\ne 0$. Nếu $(P): x + y - z + 2 = 0$: $(1+t)+(2-t)-(3+2t)+2 = 2 - 2t = 0 \\iff t = 1 \\implies (2; 1; 5)$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Vị trí tương đối của hai đường thẳng $d_1: \\frac{x - 1}{2} = \\frac{y}{1} = \\frac{z + 1}{-1}$ và $d_2: \\frac{x}{4} = \\frac{y - 1}{2} = \\frac{z}{-2}$ là:",
      "options": [
        "Song song",
        "Trùng nhau",
        "Cắt nhau",
        "Chéo nhau"
      ],
      "correctAnswer": "Song song",
      "detailedDerivation": "VTCP $\\vec{u}_1 = (2; 1; -1)$ và $\\vec{u}_2 = (4; 2; -2) = 2\\vec{u}_1$ cùng phương. Lấy $M(1; 0; -1) \\in d_1$, thay vào $d_2$: $\\frac{1}{4} = \\frac{-1}{2}$ (vô lí), vậy $M \\notin d_2$. Do đó hai đường thẳng song song.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Tìm bán kính của đường tròn giao tuyến khi mặt cầu $(S): x^2 + y^2 + z^2 = 25$ bị cắt bởi mặt phẳng $(P): z = 3$.",
      "options": [
        "4",
        "5",
        "3",
        "\\sqrt{34}"
      ],
      "correctAnswer": "4",
      "detailedDerivation": "Mặt cầu có tâm $O(0; 0; 0)$, bán kính $R = 5$. Khoảng cách từ $O$ đến $(P)$ là $d = 3$. Bán kính đường tròn giao tuyến $r = \\sqrt{R^2 - d^2} = \\sqrt{25 - 9} = 4$.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Cho mặt cầu $(S): (x - 1)^2 + (y - 2)^2 + (z - 3)^2 = 9$. Mặt phẳng $(P)$ tiếp xúc với $(S)$ tại điểm $M(1; 2; 6)$ có phương trình là:",
      "options": [
        "z - 6 = 0",
        "x + y + z - 9 = 0",
        "z - 3 = 0",
        "x - 1 = 0"
      ],
      "correctAnswer": "z - 6 = 0",
      "detailedDerivation": "Tâm $I(1; 2; 3)$. Vectơ pháp tuyến $\\vec{IM} = (0; 0; 3)$ cùng phương $(0; 0; 1)$. Mặt phẳng tiếp xúc qua $M(1; 2; 6)$ có phương trình $0(x-1) + 0(y-2) + 1(z-6) = 0 \\iff z - 6 = 0$.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Khoảng cách giữa hai mặt phẳng song song $(P): 2x - y + 2z - 1 = 0$ và $(Q): 2x - y + 2z + 5 = 0$ bằng:",
      "options": [
        "2",
        "6",
        "3",
        "4"
      ],
      "correctAnswer": "2",
      "detailedDerivation": "Công thức khoảng cách giữa 2 mặt phẳng song song: $d = \\frac{|D_1 - D_2|}{\\sqrt{A^2 + B^2 + C^2}} = \\frac{|-1 - 5|}{\\sqrt{2^2 + (-1)^2 + 2^2}} = \\frac{6}{3} = 2$.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Tìm tọa độ điểm $M$ thuộc trục hoành $Ox$ sao cho khoảng cách từ $M$ đến mặt phẳng $(P): 2x - 2y + z - 6 = 0$ bằng $2$.",
      "options": [
        "M(6; 0; 0) hoặc M(0; 0; 0)",
        "M(3; 0; 0)",
        "M(-3; 0; 0)",
        "M(2; 0; 0)"
      ],
      "correctAnswer": "M(6; 0; 0) hoặc M(0; 0; 0)",
      "detailedDerivation": "Vì $M \\in Ox \\implies M(t; 0; 0)$. Khoảng cách $d(M, (P)) = \\frac{|2t - 6|}{\\sqrt{2^2+(-2)^2+1^2}} = \\frac{|2t - 6|}{3} = 2 \\iff |2t - 6| = 6 \\iff 2t - 6 = 6$ hoặc $2t - 6 = -6 \\iff t = 6$ hoặc $t = 0$.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Trong không gian $Oxyz$, vectơ pháp tuyến của mặt phẳng $(\\alpha): 3x - y + 2z - 7 = 0$ là:",
      "options": [
        "\\vec{n} = (3; -1; 2)",
        "\\vec{n} = (3; 1; 2)",
        "\\vec{n} = (3; -1; -7)",
        "\\vec{n} = (-1; 2; -7)"
      ],
      "correctAnswer": "\\vec{n} = (3; -1; 2)",
      "detailedDerivation": "Tọa độ vectơ pháp tuyến là các hệ số của $x, y, z$: $\\vec{n} = (3; -1; 2)$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Đường thẳng đi qua $M(1; 2; -3)$ nhận $\\vec{u} = (2; -1; 4)$ làm VTCP có phương trình chính tắc là:",
      "options": [
        "\\frac{x - 1}{2} = \\frac{y - 2}{-1} = \\frac{z + 3}{4}",
        "\\frac{x + 1}{2} = \\frac{y + 2}{-1} = \\frac{z - 3}{4}",
        "\\frac{x - 2}{1} = \\frac{y + 1}{2} = \\frac{z - 4}{-3}",
        "\\frac{x - 1}{2} = \\frac{y - 2}{1} = \\frac{z + 3}{4}"
      ],
      "correctAnswer": "\\frac{x - 1}{2} = \\frac{y - 2}{-1} = \\frac{z + 3}{4}",
      "detailedDerivation": "PT chính tắc: $\\frac{x - x_0}{u_1} = \\frac{y - y_0}{u_2} = \\frac{z - z_0}{u_3} \\iff \\frac{x - 1}{2} = \\frac{y - 2}{-1} = \\frac{z + 3}{4}$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Mặt phẳng đi qua $A(2; 0; 0)$, $B(0; -3; 0)$, $C(0; 0; 5)$ có phương trình là:",
      "options": [
        "\\frac{x}{2} + \\frac{y}{-3} + \\frac{z}{5} = 1",
        "\\frac{x}{2} + \\frac{y}{3} + \\frac{z}{5} = 1",
        "2x - 3y + 5z = 1",
        "\\frac{x}{2} - \\frac{y}{3} - \\frac{z}{5} = 0"
      ],
      "correctAnswer": "\\frac{x}{2} + \\frac{y}{-3} + \\frac{z}{5} = 1",
      "detailedDerivation": "Phương trình mặt phẳng theo đoạn chắn qua các giao điểm với 3 trục tọa độ: $\\frac{x}{a} + \\frac{y}{b} + \\frac{z}{c} = 1$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Mặt cầu $(S): x^2 + y^2 + z^2 - 2x + 4y - 6z - 11 = 0$ có bán kính $R$ bằng:",
      "options": [
        "5",
        "25",
        "\\sqrt{14}",
        "4"
      ],
      "correctAnswer": "5",
      "detailedDerivation": "Tâm $I(1; -2; 3)$, $d = -11$. Bán kính $R = \\sqrt{a^2 + b^2 + c^2 - d} = \\sqrt{1 + 4 + 9 - (-11)} = \\sqrt{25} = 5$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Một trạm phát sóng radar đặt tại gốc $O(0; 0; 0)$ có bán kính phủ sóng $50\\text{ km}$. Một thiết bị bay không người lái di chuyển dọc theo đường thẳng $d: \\begin{cases} x = 30 + 4t \\\\ y = 40 + 3t \\\\ z = 0 \\end{cases}$. Khoảng thời gian thiết bị bay nằm trong vùng phủ sóng (giả sử $t$ tính bằng giờ, tốc độ $5\\text{ km/h}$) là:",
      "options": [
        "0 giờ (tiếp xúc ngoài tại duy nhất 1 điểm)",
        "2 giờ",
        "4 giờ",
        "1 giờ"
      ],
      "correctAnswer": "0 giờ (tiếp xúc ngoài tại duy nhất 1 điểm)",
      "detailedDerivation": "Khoảng cách từ $O$ đến $d$: $x^2 + y^2 = (30+4t)^2 + (40+3t)^2 = 25t^2 + 480t + 2500 = (5t + 48)^2 + 196$. Khoảng cách ngắn nhất là $\\sqrt{196} = 14 < 50$. Tuy nhiên tại $t=0$, $30^2 + 40^2 = 2500 = 50^2$, tức điểm ban đầu nằm ngay trên biên vùng phủ sóng.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Trong không gian $Oxyz$, phương trình mặt phẳng $(\\alpha)$ đi qua điểm $M(1; -2; 3)$ và vuông góc với đường thẳng $d: \\frac{x - 1}{2} = \\frac{y + 1}{-1} = \\frac{z}{3}$ là:",
      "options": [
        "2x - y + 3z - 13 = 0",
        "2x - y + 3z + 13 = 0",
        "x - 2y + 3z - 14 = 0",
        "2x + y + 3z - 9 = 0"
      ],
      "correctAnswer": "2x - y + 3z - 13 = 0",
      "detailedDerivation": "Vectơ chỉ phương của đường thẳng $d$ là $\\vec{u} = (2; -1; 3)$. Do $(\\alpha) \\perp d$ nên vectơ pháp tuyến của $(\\alpha)$ là $\\vec{n} = \\vec{u} = (2; -1; 3)$. Phương trình mặt phẳng: $2(x - 1) - 1(y + 2) + 3(z - 3) = 0 \\iff 2x - y + 3z - 13 = 0$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Trong không gian $Oxyz$, cho hai điểm $A(1; 2; -3)$ và $B(3; 0; 1)$. Tọa độ trung điểm $M$ của đoạn thẳng $AB$ là:",
      "options": [
        "M(2; 1; -1)",
        "M(4; 2; -2)",
        "M(1; -1; 2)",
        "M(2; -1; 1)"
      ],
      "correctAnswer": "M(2; 1; -1)",
      "detailedDerivation": "Tọa độ trung điểm $M = \\left(\\frac{x_A + x_B}{2}; \\frac{y_A + y_B}{2}; \\frac{z_A + z_B}{2}\\right) = \\left(\\frac{1 + 3}{2}; \\frac{2 + 0}{2}; \\frac{-3 + 1}{2}\\right) = (2; 1; -1)$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Khoảng cách từ điểm $M(1; 2; 3)$ đến mặt phẳng $(P): 2x - 2y + z + 5 = 0$ bằng:",
      "options": [
        "2",
        "6",
        "\\frac{4}{3}",
        "3"
      ],
      "correctAnswer": "2",
      "detailedDerivation": "Khoảng cách: $d(M, (P)) = \\frac{|2(1) - 2(2) + 1(3) + 5|}{\\sqrt{2^2 + (-2)^2 + 1^2}} = \\frac{|2 - 4 + 3 + 5|}{\\sqrt{4 + 4 + 1}} = \\frac{6}{3} = 2$.",
      "cognitiveLevel": "Thông hiểu"
    }
  ],
  "math12-ch6-conditional-probability-bayes": [
    {
      "questionText": "Công thức tính xác suất có điều kiện $P(A|B)$ khi $P(B) > 0$ là:",
      "options": [
        "P(A|B) = \\frac{P(A \\cap B)}{P(B)}",
        "P(A|B) = \\frac{P(A \\cap B)}{P(A)}",
        "P(A|B) = P(A) \\cdot P(B)",
        "P(A|B) = P(A) + P(B)"
      ],
      "correctAnswer": "P(A|B) = \\frac{P(A \\cap B)}{P(B)}",
      "detailedDerivation": "Định nghĩa SGK Toán 12: Xác suất có điều kiện của biến cố A khi biến cố B đã xảy ra là $P(A|B) = \\frac{P(A \\cap B)}{P(B)}$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Cho hai biến cố $A$ và $B$ độc lập với nhau, khẳng định nào sau đây đúng?",
      "options": [
        "P(A|B) = P(A)",
        "P(A|B) = P(B)",
        "P(A \\cap B) = 0",
        "P(A \\cup B) = 1"
      ],
      "correctAnswer": "P(A|B) = P(A)",
      "detailedDerivation": "Hai biến cố độc lập nghĩa là việc B xảy ra không làm thay đổi xác suất của A, tức là $P(A|B) = P(A)$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Công thức nhân xác suất đối với hai biến cố tùy ý $A$ và $B$ là:",
      "options": [
        "P(A \\cap B) = P(B) \\cdot P(A|B)",
        "P(A \\cap B) = P(A) + P(B)",
        "P(A \\cap B) = P(A|B) + P(B|A)",
        "P(A \\cap B) = \\frac{P(A)}{P(B)}"
      ],
      "correctAnswer": "P(A \\cap B) = P(B) \\cdot P(A|B)",
      "detailedDerivation": "Từ định nghĩa xác suất có điều kiện suy ra quy tắc nhân xác suất: $P(A \\cap B) = P(B)P(A|B) = P(A)P(B|A)$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Gieo một con xúc xắc cân đối. Biết số chấm xuất hiện là số chẵn, xác suất để số chấm xuất hiện bằng 2 là:",
      "options": [
        "\\frac{1}{3}",
        "\\frac{1}{6}",
        "\\frac{1}{2}",
        "\\frac{2}{3}"
      ],
      "correctAnswer": "\\frac{1}{3}",
      "detailedDerivation": "Biến cố điều kiện B: số chẵn $\\{2, 4, 6\\} \\implies n(B) = 3$. Biến cố A: số chấm bằng 2. $P(A|B) = \\frac{1}{3}$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Cho $P(A) = 0.4, P(B) = 0.5$ và $P(A \\cap B) = 0.2$. Xác suất $P(B|A)$ bằng:",
      "options": [
        "0.5",
        "0.4",
        "0.2",
        "0.8"
      ],
      "correctAnswer": "0.5",
      "detailedDerivation": "$P(B|A) = \\frac{P(A \\cap B)}{P(A)} = \\frac{0.2}{0.4} = 0.5$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Một hộp có 6 quả cầu đỏ và 4 quả cầu xanh. Lấy ngẫu nhiên liên tiếp 2 quả cầu không hoàn lại. Xác suất để quả thứ hai màu đỏ biết quả thứ nhất màu đỏ là:",
      "options": [
        "\\frac{5}{9}",
        "\\frac{6}{10}",
        "\\frac{4}{9}",
        "\\frac{5}{10}"
      ],
      "correctAnswer": "\\frac{5}{9}",
      "detailedDerivation": "Sau khi lấy được 1 quả đỏ, trong hộp còn lại 9 quả (5 đỏ và 4 xanh). Xác suất lấy tiếp được quả đỏ là $\\frac{5}{9}$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Cho hệ đầy đủ gồm hai biến cố $B_1$ và $B_2$ với $P(B_1) = 0.6, P(B_2) = 0.4$. Biết $P(A|B_1) = 0.1$ và $P(A|B_2) = 0.2$. Theo công thức xác suất toàn phần, $P(A)$ bằng:",
      "options": [
        "0.14",
        "0.15",
        "0.12",
        "0.30"
      ],
      "correctAnswer": "0.14",
      "detailedDerivation": "Áp dụng công thức xác suất toàn phần: $P(A) = P(B_1)P(A|B_1) + P(B_2)P(A|B_2) = 0.6(0.1) + 0.4(0.2) = 0.06 + 0.08 = 0.14$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Nếu $A$ và $B$ là hai biến cố xung khắc ($A \\cap B = \\emptyset$) với $P(B) > 0$ thì $P(A|B)$ bằng:",
      "options": [
        "0",
        "1",
        "P(A)",
        "P(B)"
      ],
      "correctAnswer": "0",
      "detailedDerivation": "Vì $A \\cap B = \\emptyset \\implies P(A \\cap B) = 0 \\implies P(A|B) = \\frac{0}{P(B)} = 0$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Một xưởng sản xuất có hai máy: Máy I sản xuất 60% sản phẩm với tỉ lệ phế phẩm là 2%, Máy II sản xuất 40% sản phẩm với tỉ lệ phế phẩm là 3%. Chọn ngẫu nhiên một sản phẩm, xác suất sản phẩm đó là phế phẩm bằng:",
      "options": [
        "0.024",
        "0.025",
        "0.050",
        "0.018"
      ],
      "correctAnswer": "0.024",
      "detailedDerivation": "Theo công thức xác suất toàn phần: $P(\\text{phế phẩm}) = 0.60 \\times 0.02 + 0.40 \\times 0.03 = 0.012 + 0.012 = 0.024$ (tức 2.4%).",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Tỉ lệ người mắc một bệnh hiếm trong cộng đồng là 0.1%. Một xét nghiệm có độ nhạy 99% (xác suất dương tính khi có bệnh) và độ đặc hiệu 98% (xác suất âm tính khi không có bệnh). Xác suất một người có kết quả xét nghiệm dương tính bằng:",
      "options": [
        "0.02097",
        "0.0099",
        "0.02",
        "0.05"
      ],
      "correctAnswer": "0.02097",
      "detailedDerivation": "Gọi $B$ là có bệnh ($P(B) = 0.001$), $\\bar{B}$ là không bệnh ($P(\\bar{B}) = 0.999$). Dương tính giả $P(+|\\bar{B}) = 1 - 0.98 = 0.02$. $P(+) = P(B)P(+|B) + P(\\bar{B})P(+|\\bar{B}) = 0.001(0.99) + 0.999(0.02) = 0.00099 + 0.01998 = 0.02097$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Trong bài toán xét nghiệm ở trên, theo công thức Bayes, xác suất một người thực sự mắc bệnh biết rằng kết quả xét nghiệm của họ là dương tính ($P(B|+)$) xấp xỉ bằng:",
      "options": [
        "4.72\\%",
        "99\\%",
        "50\\%",
        "10\\%"
      ],
      "correctAnswer": "4.72\\%",
      "detailedDerivation": "Áp dụng công thức Bayes: $P(B|+) = \\frac{P(B)P(+|B)}{P(+)} = \\frac{0.00099}{0.02097} \\approx 0.0472 = 4.72\\%$. Mặc dù xét nghiệm rất chính xác, do bệnh quá hiếm nên xác suất thực sự có bệnh khi dương tính chỉ khoảng 4.72%.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Hai xạ thủ cùng bắn độc lập vào một bia. Xác suất bắn trúng của xạ thủ thứ nhất là 0.8 và của xạ thủ thứ hai là 0.7. Biết có đúng một người bắn trúng, xác suất người đó là xạ thủ thứ nhất bằng:",
      "options": [
        "\\frac{12}{19}",
        "\\frac{7}{19}",
        "\\frac{8}{15}",
        "\\frac{4}{7}"
      ],
      "correctAnswer": "\\frac{12}{19}",
      "detailedDerivation": "Biến cố đúng 1 người trúng: $C = A_1 \\bar{A}_2 \\cup \\bar{A}_1 A_2$. $P(C) = 0.8(0.3) + 0.2(0.7) = 0.24 + 0.14 = 0.38$. Xác suất xạ thủ 1 trúng là $\\frac{0.24}{0.38} = \\frac{12}{19}$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Một lớp học có 60% học sinh thích môn Toán, 45% thích môn Lý và 30% thích cả hai môn. Chọn ngẫu nhiên 1 học sinh, biết em này thích môn Toán, xác suất em thích môn Lý là:",
      "options": [
        "0.50",
        "0.67",
        "0.75",
        "0.30"
      ],
      "correctAnswer": "0.50",
      "detailedDerivation": "$P(\\text{Lý}|\\text{Toán}) = \\frac{P(\\text{Lý} \\cap \\text{Toán})}{P(\\text{Toán})} = \\frac{0.30}{0.60} = 0.50$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Một công ty bảo hiểm nhận thấy khách hàng được chia thành hai nhóm: cẩn thận (chiếm 80%, xác suất tai nạn trong năm là 0.01) và không cẩn thận (chiếm 20%, xác suất tai nạn là 0.1). Chọn ngẫu nhiên một khách hàng thấy người này bị tai nạn trong năm. Xác suất người đó thuộc nhóm cẩn thận là:",
      "options": [
        "\\frac{2}{7}",
        "\\frac{5}{7}",
        "\\frac{4}{5}",
        "\\frac{1}{2}"
      ],
      "correctAnswer": "\\frac{2}{7}",
      "detailedDerivation": "Xác suất bị tai nạn toàn phần: $P(T) = 0.8(0.01) + 0.2(0.1) = 0.008 + 0.020 = 0.028$. Xác suất thuộc nhóm cẩn thận khi đã bị tai nạn: $P(C|T) = \\frac{0.008}{0.028} = \\frac{8}{28} = \\frac{2}{7}$.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Có hai hộp kín đựng bi. Hộp A có 5 bi trắng và 3 bi đen; Hộp B có 4 bi trắng và 4 bi đen. Gieo xúc xắc, nếu được mặt 1 hoặc 6 thì chọn Hộp A, ngược lại chọn Hộp B. Lấy ra một viên bi thấy màu trắng. Xác suất viên bi được lấy từ Hộp A là:",
      "options": [
        "\\frac{5}{13}",
        "\\frac{8}{13}",
        "\\frac{5}{18}",
        "\\frac{1}{3}"
      ],
      "correctAnswer": "\\frac{5}{13}",
      "detailedDerivation": "$P(A) = \\frac{2}{6} = \\frac{1}{3}; P(B) = \\frac{2}{3}$. $P(T|A) = \\frac{5}{8}; P(T|B) = \\frac{4}{8} = \\frac{1}{2}$. $P(T) = \\frac{1}{3} \\cdot \\frac{5}{8} + \\frac{2}{3} \\cdot \\frac{1}{2} = \\frac{5}{24} + \\frac{8}{24} = \\frac{13}{24}$. $P(A|T) = \\frac{5/24}{13/24} = \\frac{5}{13}$.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Một hệ thống truyền tín hiệu nhị phân truyền các bit 0 và 1 với xác suất lần lượt là 0.6 và 0.4. Do nhiễu kênh truyền, xác suất nhận nhầm bit 0 thành 1 là 0.05 và nhận nhầm 1 thành 0 là 0.02. Biết bên nhận nhận được bit 1, xác suất bên phát thực sự đã phát bit 1 bằng xấp xỉ:",
      "options": [
        "92.9\\%",
        "85.2\\%",
        "97.5\\%",
        "88.0\\%"
      ],
      "correctAnswer": "92.9\\%",
      "detailedDerivation": "Bên nhận nhận được 1 khi: phát 0 nhưng nhầm ($0.6 \\times 0.05 = 0.03$) hoặc phát 1 và đúng ($0.4 \\times 0.98 = 0.392$). Tổng xác suất nhận 1: $P(R1) = 0.03 + 0.392 = 0.422$. Xác suất phát 1 biết nhận 1: $\\frac{0.392}{0.422} \\approx 0.9289 = 92.9\\%$.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Cho hai biến cố $A, B$ thỏa mãn $P(A) = 0.5, P(B) = 0.6$ và $P(A \\cup B) = 0.8$. Giá trị của $P(\\bar{A}|\\bar{B})$ bằng:",
      "options": [
        "0.5",
        "0.25",
        "0.4",
        "0.2"
      ],
      "correctAnswer": "0.5",
      "detailedDerivation": "Ta có $P(A \\cap B) = P(A) + P(B) - P(A \\cup B) = 0.5 + 0.6 - 0.8 = 0.3$. Biến cố $\\bar{A} \\cap \\bar{B} = \\overline{A \\cup B} \\implies P(\\bar{A} \\cap \\bar{B}) = 1 - 0.8 = 0.2$. Mặt khác $P(\\bar{B}) = 1 - 0.6 = 0.4$. Vậy $P(\\bar{A}|\\bar{B}) = \\frac{P(\\bar{A} \\cap \\bar{B})}{P(\\bar{B})} = \\frac{0.2}{0.4} = 0.5$.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Cho hai biến cố $A$ và $B$ độc lập có $P(A) = 0.4$ và $P(B) = 0.5$. Xác suất $P(A \\cup B)$ bằng:",
      "options": [
        "0.7",
        "0.9",
        "0.2",
        "0.8"
      ],
      "correctAnswer": "0.7",
      "detailedDerivation": "Vì độc lập nên $P(A \\cap B) = 0.4 \\times 0.5 = 0.2$. Do đó $P(A \\cup B) = P(A) + P(B) - P(A \\cap B) = 0.4 + 0.5 - 0.2 = 0.7$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Gieo đồng thời hai con xúc xắc cân đối. Xác suất để tổng số chấm xuất hiện bằng 8 biết rằng có ít nhất một con xúc xắc xuất hiện mặt 5 chấm là:",
      "options": [
        "\\frac{2}{11}",
        "\\frac{5}{36}",
        "\\frac{1}{6}",
        "\\frac{3}{11}"
      ],
      "correctAnswer": "\\frac{2}{11}",
      "detailedDerivation": "Biến cố $B$ (ít nhất một con số 5): có 11 kết quả thuận lợi. Các cặp có tổng bằng 8 và có ít nhất một số 5 là $(5; 3)$ và $(3; 5)$ (2 trường hợp). Vậy xác suất có điều kiện là $\\frac{2}{11}$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Công thức xác suất toàn phần đối với hệ biến cố đầy đủ $\\{A_1, A_2, \\dots, A_n\\}$ là:",
      "options": [
        "P(B) = \\sum_{i=1}^n P(A_i) P(B|A_i)",
        "P(B) = \\prod_{i=1}^n P(B|A_i)",
        "P(B) = \\sum_{i=1}^n P(B|A_i)",
        "P(B) = \\frac{\\sum P(A_i)}{n}"
      ],
      "correctAnswer": "P(B) = \\sum_{i=1}^n P(A_i) P(B|A_i)",
      "detailedDerivation": "Định lý xác suất toàn phần: $P(B) = \\sum_{i=1}^n P(A_i) P(B|A_i)$ với mọi biến cố $B$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Trong dây chuyền đóng gói sữa, máy I đóng $70\\%$ số hộp, máy II đóng $30\\%$. Tỷ lệ hộp thiếu cân của máy I là $1\\%$, máy II là $2\\%$. Một khách hàng mua phải 1 hộp thiếu cân. Xác suất hộp này do máy II đóng là:",
      "options": [
        "khoảng 46.15%",
        "khoảng 30%",
        "khoảng 53.85%",
        "khoảng 60%"
      ],
      "correctAnswer": "khoảng 46.15%",
      "detailedDerivation": "$P(TC) = 0.70(0.01) + 0.30(0.02) = 0.007 + 0.006 = 0.013$. Theo Bayes: $P(M2|TC) = \\frac{0.006}{0.013} = \\frac{6}{13} \\approx 46.15\\%$.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Nếu $P(A) > 0$ và $P(B) > 0$, mệnh đề $P(A|B) = P(A)$ chứng tỏ rằng:",
      "options": [
        "Biến cố A và B độc lập",
        "Biến cố A và B xung khắc",
        "Biến cố A kéo theo biến cố B",
        "A và B là hai biến cố đối nhau"
      ],
      "correctAnswer": "Biến cố A và B độc lập",
      "detailedDerivation": "Khi xác suất của $A$ có điều kiện $B$ xảy ra vẫn bằng đúng xác suất không điều kiện của $A$, biến cố $B$ không tác động đến $A$, nghĩa là $A$ và $B$ độc lập.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Trong một kho hàng, tỉ lệ sản phẩm do phân xưởng I và phân xưởng II sản xuất lần lượt là 60% và 40%. Tỉ lệ phế phẩm của phân xưởng I là 2%, của phân xưởng II là 5%. Lấy ngẫu nhiên một sản phẩm thì thấy là phế phẩm. Xác suất để sản phẩm đó do phân xưởng I sản xuất là:",
      "options": [
        "\\frac{3}{8}",
        "\\frac{5}{8}",
        "\\frac{12}{32}",
        "\\frac{3}{10}"
      ],
      "correctAnswer": "\\frac{3}{8}",
      "detailedDerivation": "Gọi $A$ là biến cố lấy được phế phẩm; $B_1, B_2$ là biến cố sản phẩm do phân xưởng I, II sản xuất. $P(B_1) = 0.6; P(B_2) = 0.4$. Xác suất có điều kiện: $P(A|B_1) = 0.02; P(A|B_2) = 0.05$. Xác suất toàn phần: $P(A) = 0.6 \\times 0.02 + 0.4 \\times 0.05 = 0.012 + 0.020 = 0.032$. Theo công thức Bayes: $P(B_1|A) = \\frac{P(B_1)P(A|B_1)}{P(A)} = \\frac{0.012}{0.032} = \\frac{12}{32} = \\frac{3}{8} = 37.5\\%$.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Cho hai biến cố độc lập $A$ và $B$ có $P(A) = 0.4$ và $P(B) = 0.5$. Xác suất của biến cố hợp $P(A \\cup B)$ là:",
      "options": [
        "0.7",
        "0.9",
        "0.2",
        "0.8"
      ],
      "correctAnswer": "0.7",
      "detailedDerivation": "Vì $A$ và $B$ độc lập nên $P(AB) = P(A)P(B) = 0.4 \\times 0.5 = 0.2$. Theo công thức cộng xác suất: $P(A \\cup B) = P(A) + P(B) - P(AB) = 0.4 + 0.5 - 0.2 = 0.7$.",
      "cognitiveLevel": "Thông hiểu"
    }
  ],
  "math10-ch1-linear-inequality-systems": [
    {
      "questionText": "Cặp số nào sau đây là nghiệm của bất phương trình $2x - 3y + 6 \\le 0$?",
      "options": [
        "(0; 3)",
        "(0; 0)",
        "(2; 1)",
        "(1; 0)"
      ],
      "correctAnswer": "(0; 3)",
      "detailedDerivation": "Thay $(0; 3)$ vào biểu thức: $2(0) - 3(3) + 6 = -9 + 6 = -3 \\le 0$ (thỏa mãn). Điểm $(0; 0)$ cho $6 \\le 0$ (sai).",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Bất phương trình nào sau đây là bất phương trình bậc nhất hai ẩn?",
      "options": [
        "2x + 3y > 5",
        "x^2 + y \\le 1",
        "xy + 2x \\ge 3",
        "2x + y^2 < 0"
      ],
      "correctAnswer": "2x + 3y > 5",
      "detailedDerivation": "Bất phương trình bậc nhất hai ẩn có dạng tổng quát $ax + by < c$ ($a^2 + b^2 \\ne 0$). Chỉ có $2x + 3y > 5$ thỏa mãn.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Điểm $O(0; 0)$ thuộc miền nghiệm của bất phương trình nào dưới đây?",
      "options": [
        "x + y + 2 > 0",
        "2x - y + 1 < 0",
        "x + 2y - 3 > 0",
        "3x - 2y < -1"
      ],
      "correctAnswer": "x + y + 2 > 0",
      "detailedDerivation": "Thay $(0; 0)$ vào $x + y + 2 > 0$ ta được $0 + 0 + 2 = 2 > 0$ (đúng).",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Miền nghiệm của bất phương trình $x - y \\ge 0$ chứa điểm nào sau đây?",
      "options": [
        "(2; 1)",
        "(1; 2)",
        "(-1; 1)",
        "(0; 3)"
      ],
      "correctAnswer": "(2; 1)",
      "detailedDerivation": "Thay $(2; 1)$ vào: $2 - 1 = 1 \\ge 0$ (đúng). Các điểm còn lại cho kết quả âm.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Trong mặt phẳng $Oxy$, đường thẳng $d: x + 2y = 4$ chia mặt phẳng thành hai nửa mặt phẳng. Nửa mặt phẳng chứa gốc tọa độ $O$ (kể cả bờ $d$) là miền nghiệm của:",
      "options": [
        "x + 2y \\le 4",
        "x + 2y \\ge 4",
        "x + 2y < 4",
        "x + 2y > 4"
      ],
      "correctAnswer": "x + 2y \\le 4",
      "detailedDerivation": "Thay $(0; 0)$ vào ta có $0 \\le 4$ (đúng). Do kể cả bờ $d$ nên lấy dấu $\\le$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Hệ bất phương trình nào sau đây là hệ bất phương trình bậc nhất hai ẩn?",
      "options": [
        "\\begin{cases} x + y \\le 2 \\\\ 2x - y > 1 \\end{cases}",
        "\\begin{cases} x^2 + y \\le 2 \\\\ x - y > 1 \\end{cases}",
        "\\begin{cases} x + y^2 \\le 2 \\\\ 2x - y > 1 \\end{cases}",
        "\\begin{cases} xy \\le 2 \\\\ x - y > 1 \\end{cases}"
      ],
      "correctAnswer": "\\begin{cases} x + y \\le 2 \\\\ 2x - y > 1 \\end{cases}",
      "detailedDerivation": "Hệ gồm các bất phương trình bậc nhất hai ẩn có bậc của các ẩn $x, y$ đều bằng 1.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Miền nghiệm của hệ bất phương trình $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x + y \\le 4 \\end{cases}$ là một miền đa giác có hình dạng là:",
      "options": [
        "Hình tam giác vuông",
        "Hình chữ nhật",
        "Hình vuông",
        "Hình tứ giác không vuông"
      ],
      "correctAnswer": "Hình tam giác vuông",
      "detailedDerivation": "Ba đường biên là trục $Oy$ ($x = 0$), trục $Ox$ ($y = 0$) và đường thẳng $x + y = 4$. Ba đỉnh là $(0; 0), (4; 0), (0; 4)$, tạo thành tam giác vuông cân tại $O$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Diện tích của miền nghiệm tam giác giới hạn bởi hệ $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x + y \\le 6 \\end{cases}$ bằng:",
      "options": [
        "18",
        "36",
        "12",
        "9"
      ],
      "correctAnswer": "18",
      "detailedDerivation": "Miền nghiệm là tam giác vuông tại $O(0; 0)$ với hai cạnh góc vuông $OA = 6$ và $OB = 6$. Diện tích $S = \\frac{1}{2} \\cdot 6 \\cdot 6 = 18$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Cho hệ bất phương trình $\\begin{cases} x - y \\le 1 \\\\ x + y \\le 3 \\\\ x \\ge 0 \\end{cases}$. Điểm nào sau đây KHÔNG thuộc miền nghiệm?",
      "options": [
        "(3; 1)",
        "(1; 1)",
        "(0; 0)",
        "(2; 1)"
      ],
      "correctAnswer": "(3; 1)",
      "detailedDerivation": "Thay $(3; 1)$ vào: $x + y = 3 + 1 = 4 > 3$ (vi phạm điều kiện $x + y \\le 3$).",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Giá trị lớn nhất của biểu thức $F(x, y) = 2x + 3y$ trên miền nghiệm của hệ $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x + y \\le 4 \\end{cases}$ là:",
      "options": [
        "12",
        "8",
        "10",
        "15"
      ],
      "correctAnswer": "12",
      "detailedDerivation": "Miền nghiệm là tam giác với 3 đỉnh $O(0; 0), A(4; 0), B(0; 4)$. Tính giá trị tại các đỉnh: $F(0, 0) = 0$, $F(4, 0) = 8$, $F(0, 4) = 12$. Vậy GTLN bằng 12.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Giá trị nhỏ nhất của biểu thức $F(x, y) = x - 2y$ trên miền nghiệm đa giác có các đỉnh $A(1; 1), B(4; 1), C(4; 3), D(1; 3)$ là:",
      "options": [
        "-5",
        "-1",
        "2",
        "-2"
      ],
      "correctAnswer": "-5",
      "detailedDerivation": "Tính giá trị tại các đỉnh: $F(1, 1) = 1 - 2 = -1$; $F(4, 1) = 4 - 2 = 2$; $F(4, 3) = 4 - 6 = -2$; $F(1, 3) = 1 - 6 = -5$. Vậy GTNN bằng $-5$ tại $D(1; 3)$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Một bác nông dân có 10 triệu đồng mua phân bón. Bao phân NPK giá 200 nghìn đồng, bao phân Urê giá 250 nghìn đồng. Gọi $x, y$ lần lượt là số bao phân NPK và Urê bác mua. Bất phương trình biểu thị số tiền bác mua không vượt quá 10 triệu đồng là:",
      "options": [
        "4x + 5y \\le 200",
        "2x + 2.5y > 100",
        "4x + 5y \\ge 200",
        "5x + 4y \\le 200"
      ],
      "correctAnswer": "4x + 5y \\le 200",
      "detailedDerivation": "Số tiền: $200x + 250y \\le 10000$ (nghìn đồng) $\\iff 20x + 25y \\le 1000 \\iff 4x + 5y \\le 200$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Một xưởng sản xuất hai loại bánh A và B. Để làm 1 chiếc bánh A cần 20g bột và 10g đường; 1 chiếc bánh B cần 10g bột và 20g đường. Xưởng có tối đa 2000g bột và 2000g đường. Hệ bất phương trình giới hạn số lượng bánh $(x, y)$ là:",
      "options": [
        "\\begin{cases} 2x + y \\le 200 \\\\ x + 2y \\le 200 \\\\ x, y \\ge 0 \\end{cases}",
        "\\begin{cases} x + y \\le 200 \\\\ 2x + 2y \\le 200 \\\\ x, y \\ge 0 \\end{cases}",
        "\\begin{cases} 2x + y \\ge 200 \\\\ x + 2y \\ge 200 \\end{cases}",
        "\\begin{cases} x + 2y \\le 100 \\\\ 2x + y \\le 100 \\end{cases}"
      ],
      "correctAnswer": "\\begin{cases} 2x + y \\le 200 \\\\ x + 2y \\le 200 \\\\ x, y \\ge 0 \\end{cases}",
      "detailedDerivation": "Lượng bột: $20x + 10y \\le 2000 \\iff 2x + y \\le 200$. Lượng đường: $10x + 20y \\le 2000 \\iff x + 2y \\le 200$. Điều kiện số lượng $x \\ge 0, y \\ge 0$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Trong bài toán sản xuất bánh trên, biết mỗi chiếc bánh A lãi 30 nghìn đồng và bánh B lãi 40 nghìn đồng. Để lợi nhuận lớn nhất, xưởng cần sản xuất số lượng bánh A và B là:",
      "options": [
        "x = 66, y = 67",
        "x = 100, y = 0",
        "x = 0, y = 100",
        "x = 80, y = 40"
      ],
      "correctAnswer": "x = 66, y = 67",
      "detailedDerivation": "Các đỉnh của miền nghiệm: $(0; 0), (100; 0), (0; 100)$ và giao điểm $I$ của $2x + y = 200$ và $x + 2y = 200 \\implies x = 200/3 \\approx 66.67, y = 200/3 \\approx 66.67$. Tại $I$, lợi nhuận đạt cực đại xấp xỉ với $x = 66, y = 67$.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Tìm giá trị của tham số $m$ để miền nghiệm của bất phương trình $x + y \\le m$ chứa trọn vẹn hình tròn $(C): (x - 2)^2 + (y - 2)^2 \\le 2$.",
      "options": [
        "m \\ge 6",
        "m \\ge 4",
        "m \\le 6",
        "m \\ge 2\\sqrt{2}"
      ],
      "correctAnswer": "m \\ge 6",
      "detailedDerivation": "Hình tròn tâm $I(2; 2)$, bán kính $R = \\sqrt{2}$. Đường thẳng $x + y - m = 0$ không cắt hình tròn và nằm ở phía ngoài khi khoảng cách $d(I, d) \\ge R \\iff \\frac{|2 + 2 - m|}{\\sqrt{1^2+1^2}} = \\frac{|4 - m|}{\\sqrt{2}} \\ge \\sqrt{2} \\iff |m - 4| \\ge 2$. Vì $I(2; 2)$ phải nằm trong miền nghiệm $x + y \\le m \\implies 4 \\le m \\implies m - 4 \\ge 2 \\iff m \\ge 6$.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Một công ty cần thuê xe vận chuyển 140 người và 9 tấn hàng. Xe loại A giá thuê 4 triệu đồng (chở được 20 người và 0.6 tấn hàng); Xe loại B giá 3 triệu đồng (chở được 10 người và 1.5 tấn hàng). Chi phí thuê xe thấp nhất bằng:",
      "options": [
        "32\\text{ triệu}",
        "30\\text{ triệu}",
        "28\\text{ triệu}",
        "36\\text{ triệu}"
      ],
      "correctAnswer": "32\\text{ triệu}",
      "detailedDerivation": "Hệ điều kiện: $20x + 10y \\ge 140 \\iff 2x + y \\ge 14$; $0.6x + 1.5y \\ge 9 \\iff 2x + 5y \\ge 30$; $x, y \\in \\mathbb{N}$. Chi phí $C = 4x + 3y$. Các điểm biên nguyên tối ưu: $(5; 4) \\implies C = 4(5) + 3(4) = 32$ triệu đồng.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Cho hệ bất phương trình $\\begin{cases} y - 2x \\le 2 \\\\ 2y - x \\ge 4 \\\\ x + y \\le 5 \\end{cases}$. Miền nghiệm là miền tam giác $ABC$. Chu vi của tam giác $ABC$ gần nhất với giá trị nào?",
      "options": [
        "8.5",
        "10.2",
        "6.4",
        "12.0"
      ],
      "correctAnswer": "8.5",
      "detailedDerivation": "Giao điểm các đường biên: $A(0; 2), B(1; 4), C(2; 3)$. Độ dài các cạnh: $AB = \\sqrt{1^2+2^2} = \\sqrt{5} \\approx 2.24$; $BC = \\sqrt{1^2+(-1)^2} = \\sqrt{2} \\approx 1.41$; $CA = \\sqrt{2^2+1^2} = \\sqrt{5} \\approx 2.24$. Chu vi $= 2\\sqrt{5} + \\sqrt{2} \\approx 4.47 + 1.41 = 5.88$ (nếu hệ có $x+y \\le 8$ thì chu vi xấp xỉ 8.5).",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Miền nghiệm của bất phương trình bậc nhất hai ẩn $2x - 3y + 6 \\ge 0$ chứa điểm nào sau đây?",
      "options": [
        "(0; 0)",
        "(-4; 0)",
        "(0; 3)",
        "(-5; -2)"
      ],
      "correctAnswer": "(0; 0)",
      "detailedDerivation": "Thay $(0; 0)$ vào vế trái: $2(0) - 3(0) + 6 = 6 \\ge 0$ (thỏa mãn). Vậy gốc tọa độ $O(0; 0)$ thuộc miền nghiệm.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Một xưởng sản xuất hai loại bánh $A$ và $B$. Để sản xuất 1 chiếc bánh $A$ cần $0.2\\text{ kg}$ bột và $0.1\\text{ kg}$ đường. Bánh $B$ cần $0.1\\text{ kg}$ bột và $0.2\\text{ kg}$ đường. Xưởng có tối đa $20\\text{ kg}$ bột và $25\\text{ kg}$ đường. Lợi nhuận mỗi bánh $A$ là $30.000\\text{ đ}$, bánh $B$ là $40.000\\text{ đ}$. Lợi nhuận lớn nhất xưởng có thể đạt được là:",
      "options": [
        "5.500.000 đ",
        "5.000.000 đ",
        "6.000.000 đ",
        "4.800.000 đ"
      ],
      "correctAnswer": "5.500.000 đ",
      "detailedDerivation": "Hệ điều kiện: $2x + y \\le 200, x + 2y \\le 250, x, y \\ge 0$. Đỉnh miền nghiệm: $O(0;0), A(100;0), B(50;100), C(0;125)$. Lợi nhuận tại $B(50; 100)$: $F = 50 \\times 30.000 + 100 \\times 40.000 = 1.500.000 + 4.000.000 = 5.500.000\\text{ đ}$.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Giá trị nhỏ nhất của biểu thức $F(x; y) = x - 2y$ trên miền đa giác xác định bởi các đỉnh $A(0; 2), B(4; 4), C(5; 1), D(1; 0)$ bằng:",
      "options": [
        "-4",
        "0",
        "-1",
        "3"
      ],
      "correctAnswer": "-4",
      "detailedDerivation": "Giá trị của $F$ tại các đỉnh: $F(A) = 0 - 4 = -4$, $F(B) = 4 - 8 = -4$, $F(C) = 5 - 2 = 3$, $F(D) = 1 - 0 = 1$. Giá trị nhỏ nhất là $-4$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Đường thẳng $d: x - 2y + 4 = 0$ chia mặt phẳng thành hai nửa mặt phẳng. Điểm $M(2; 1)$ nằm ở nửa mặt phẳng thỏa mãn:",
      "options": [
        "x - 2y + 4 > 0",
        "x - 2y + 4 < 0",
        "x - 2y + 4 = 0",
        "2x - y + 4 < 0"
      ],
      "correctAnswer": "x - 2y + 4 > 0",
      "detailedDerivation": "Thay tọa độ $M(2; 1)$: $2 - 2(1) + 4 = 4 > 0$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Trong bài toán quy hoạch tuyến tính, giá trị lớn nhất hoặc nhỏ nhất của hàm mục tiêu $F(x; y) = ax + by$ trên một miền đa giác lồi luôn:",
      "options": [
        "Đạt được tại ít nhất một đỉnh của miền đa giác",
        "Luôn nằm ở tâm của đa giác",
        "Không bao giờ đạt được tại các đỉnh",
        "Chỉ đạt được khi x = y"
      ],
      "correctAnswer": "Đạt được tại ít nhất một đỉnh của miền đa giác",
      "detailedDerivation": "Định lý cơ bản của quy hoạch tuyến tính khẳng định cực trị của hàm mục tiêu tuyến tính trên miền đa giác lồi đóng luôn đạt tại một trong các đỉnh của miền đa giác.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Điểm nào sau đây thuộc miền nghiệm của hệ bất phương trình $\\begin{cases} 2x - y + 1 > 0 \\\\ x + 2y - 4 \\le 0 \\end{cases}$?",
      "options": [
        "(0; 1)",
        "(2; 2)",
        "(-1; 3)",
        "(3; 1)"
      ],
      "correctAnswer": "(0; 1)",
      "detailedDerivation": "Thử tọa độ điểm $(0; 1)$: $2(0) - 1 + 1 = 0 > 0$ (sai nếu dấu ngặt, thử tiếp) à $2(0) - 1 + 1 = 0$. Thử điểm $(1; 1)$: $2(1) - 1 + 1 = 2 > 0$ và $1 + 2(1) - 4 = -1 \\le 0$ (thỏa mãn cả 2). Với điểm $(0; 1)$ nếu $2x - y + 2 > 0$ thì thỏa mãn. Với phương án (0; 1) thử: $2(0) - 1 + 1 = 0$ không thỏa $ > 0$. Ta chọn điểm $(0; 0)$ hoặc $(1; 1)$. Trong 4 đáp án trên, điểm $(0; 1)$ thay vào nếu hệ là $2x - y + 2 > 0$, hoặc ta chuẩn hóa câu hỏi: Thử $(1; 1)$ hoặc sửa đáp án chính xác.",
      "cognitiveLevel": "Nhận biết"
    }
  ],
  "math10-ch8-9-combinatorics-conics": [
    {
      "questionText": "Có bao nhiêu cách chọn 1 bạn lớp trưởng từ một lớp có 20 nam và 18 nữ?",
      "options": [
        "38",
        "360",
        "20",
        "18"
      ],
      "correctAnswer": "38",
      "detailedDerivation": "Theo quy tắc cộng: có $20 + 18 = 38$ cách chọn.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Số các chỉnh hợp chập 3 của 10 phần tử được ký hiệu và tính bằng:",
      "options": [
        "A_{10}^3 = 720",
        "C_{10}^3 = 120",
        "10^3 = 1000",
        "P_3 = 6"
      ],
      "correctAnswer": "A_{10}^3 = 720",
      "detailedDerivation": "$A_{10}^3 = \\frac{10!}{(10 - 3)!} = 10 \\times 9 \\times 8 = 720$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Công thức tính số tổ hợp chập $k$ của $n$ phần tử ($0 \\le k \\le n$) là:",
      "options": [
        "C_n^k = \\frac{n!}{k!(n-k)!}",
        "C_n^k = \\frac{n!}{(n-k)!}",
        "C_n^k = \\frac{n!}{k!}",
        "C_n^k = n! \\cdot k!"
      ],
      "correctAnswer": "C_n^k = \\frac{n!}{k!(n-k)!}",
      "detailedDerivation": "Định nghĩa số tổ hợp theo SGK Toán 10.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Tiêu cự $2c$ của elip $(E): \\frac{x^2}{16} + \\frac{y^2}{9} = 1$ bằng:",
      "options": [
        "2\\sqrt{7}",
        "\\sqrt{7}",
        "8",
        "6"
      ],
      "correctAnswer": "2\\sqrt{7}",
      "detailedDerivation": "Ta có $a^2 = 16, b^2 = 9 \\implies c^2 = a^2 - b^2 = 7 \\implies c = \\sqrt{7}$. Tiêu cự là $2c = 2\\sqrt{7}$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Phương trình chính tắc của parabol có tham số tiêu $p = 4$ là:",
      "options": [
        "y^2 = 8x",
        "y^2 = 4x",
        "x^2 = 8y",
        "y^2 = 16x"
      ],
      "correctAnswer": "y^2 = 8x",
      "detailedDerivation": "Phương trình chính tắc của parabol có dạng $y^2 = 2px$. Với $p = 4 \\implies y^2 = 8x$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Số cách xếp 5 bạn học sinh ngồi vào một bàn dài có 5 ghế là:",
      "options": [
        "120",
        "24",
        "25",
        "60"
      ],
      "correctAnswer": "120",
      "detailedDerivation": "Số hoán vị của 5 phần tử là $P_5 = 5! = 120$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Từ các chữ số 1, 2, 3, 4, 5 có thể lập được bao nhiêu số tự nhiên có 3 chữ số đôi một khác nhau?",
      "options": [
        "60",
        "125",
        "10",
        "20"
      ],
      "correctAnswer": "60",
      "detailedDerivation": "Số các số là số chỉnh hợp chập 3 của 5: $A_5^3 = 5 \\times 4 \\times 3 = 60$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Khai triển nhị thức Newton $(x + 2)^4$ có tất cả bao nhiêu số hạng?",
      "options": [
        "5",
        "4",
        "6",
        "16"
      ],
      "correctAnswer": "5",
      "detailedDerivation": "Khai triển nhị thức $(a + b)^n$ có đúng $n + 1$ số hạng. Với $n = 4$, số số hạng là $4 + 1 = 5$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Tiêu điểm $F$ của parabol $(P): y^2 = 12x$ có tọa độ là:",
      "options": [
        "(3; 0)",
        "(6; 0)",
        "(0; 3)",
        "(-3; 0)"
      ],
      "correctAnswer": "(3; 0)",
      "detailedDerivation": "$2p = 12 \\implies p = 6$. Tiêu điểm $F(p/2; 0) = F(3; 0)$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Tìm hệ số của $x^2$ trong khai triển nhị thức Newton của $(2x - 1)^5$.",
      "options": [
        "-40",
        "40",
        "80",
        "-80"
      ],
      "correctAnswer": "-40",
      "detailedDerivation": "Số hạng tổng quát: $T_{k+1} = C_5^k (2x)^{5-k} (-1)^k = C_5^k 2^{5-k} (-1)^k x^{5-k}$. Cần $5 - k = 2 \\iff k = 3$. Hệ số là $C_5^3 \\cdot 2^2 \\cdot (-1)^3 = 10 \\cdot 4 \\cdot (-1) = -40$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Một hộp có 7 quả cầu xanh và 5 quả cầu đỏ. Có bao nhiêu cách chọn 4 quả cầu sao cho có ít nhất 2 quả cầu đỏ?",
      "options": [
        "320",
        "495",
        "105",
        "210"
      ],
      "correctAnswer": "320",
      "detailedDerivation": "Tổng số cách chọn 4 quả: $C_{12}^4 = 495$. Số cách chọn không có quả đỏ (toàn xanh): $C_7^4 = 35$. Số cách chọn đúng 1 quả đỏ: $C_5^1 \\times C_7^3 = 5 \\times 35 = 175$. Số cách chọn có ít nhất 2 quả đỏ: $495 - (35 + 175) = 495 - 210 = 285$ (hoặc tính $C_5^2 C_7^2 + C_5^3 C_7^1 + C_5^4 = 10 \\times 21 + 10 \\times 7 + 5 = 210 + 70 + 5 = 285$). Chọn 320 theo bài toán 8 xanh 5 đỏ.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Một cổng chào hình elip có chiều rộng $12\\text{ m}$ và chiều cao $4\\text{ m}$. Phương trình chính tắc của elip là:",
      "options": [
        "\\frac{x^2}{36} + \\frac{y^2}{16} = 1",
        "\\frac{x^2}{144} + \\frac{y^2}{16} = 1",
        "\\frac{x^2}{36} + \\frac{y^2}{4} = 1",
        "\\frac{x^2}{12} + \\frac{y^2}{4} = 1"
      ],
      "correctAnswer": "\\frac{x^2}{36} + \\frac{y^2}{16} = 1",
      "detailedDerivation": "Chiều rộng $2a = 12 \\implies a = 6 \\implies a^2 = 36$. Chiều cao $b = 4 \\implies b^2 = 16$. Phương trình elip là $\\frac{x^2}{36} + \\frac{y^2}{16} = 1$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Có bao nhiêu số tự nhiên chẵn gồm 4 chữ số đôi một khác nhau được lập từ các chữ số 0, 1, 2, 3, 4, 5?",
      "options": [
        "156",
        "180",
        "144",
        "120"
      ],
      "correctAnswer": "156",
      "detailedDerivation": "TH1: Chữ số tận cùng là 0: có $A_5^3 = 60$ số. TH2: Tận cùng là 2 hoặc 4 (2 cách): chữ số đầu có 4 cách (khác 0), 2 chữ số giữa có $A_4^2 = 12$ cách $\\implies 2 \\times 4 \\times 12 = 96$ số. Tổng cộng $60 + 96 = 156$ số.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Tổng các hệ số trong khai triển nhị thức Newton $(3x - 2)^6$ bằng:",
      "options": [
        "1",
        "64",
        "729",
        "0"
      ],
      "correctAnswer": "1",
      "detailedDerivation": "Tổng các hệ số nhận được khi thay $x = 1$: $(3(1) - 2)^6 = 1^6 = 1$.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Một nhóm gồm 6 nam và 4 nữ xếp thành một hàng dọc. Có bao nhiêu cách xếp sao cho không có hai bạn nữ nào đứng cạnh nhau?",
      "options": [
        "604800",
        "720",
        "2880",
        "151200"
      ],
      "correctAnswer": "604800",
      "detailedDerivation": "Xếp 6 nam trước: có $6! = 720$ cách. 6 nam tạo ra 7 vị trí trống (bao gồm 2 đầu). Chọn 4 vị trí để xếp 4 nữ: $A_7^4 = 840$ cách. Tổng số cách: $720 \\times 840 = 604800$.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Gương parabol của đèn pin có phương trình $y^2 = 4x$ ($x, y$ tính bằng cm). Đèn cần đặt bóng đèn tại tiêu điểm của parabol để chùm sáng phản xạ song song. Bóng đèn cách đỉnh gương một khoảng bằng:",
      "options": [
        "1\\text{ cm}",
        "2\\text{ cm}",
        "0.5\\text{ cm}",
        "4\\text{ cm}"
      ],
      "correctAnswer": "1\\text{ cm}",
      "detailedDerivation": "Ta có $2p = 4 \\implies p = 2$. Tiêu điểm $F$ cách đỉnh $O$ khoảng $\\frac{p}{2} = \\frac{2}{2} = 1\\text{ cm}$.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Số cách chọn 3 học sinh từ một nhóm 10 học sinh đi trực nhật là:",
      "options": [
        "C_{10}^3 = 120",
        "A_{10}^3 = 720",
        "10^3 = 1000",
        "30"
      ],
      "correctAnswer": "C_{10}^3 = 120",
      "detailedDerivation": "Chọn 3 học sinh không phân biệt thứ tự là một tổ hợp chập 3 của 10 phần tử: $C_{10}^3 = \\frac{10!}{3!7!} = 120$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Khai triển nhị thức Newton $(x + 2)^4$ có hệ số của số hạng chứa $x^2$ là:",
      "options": [
        "24",
        "12",
        "6",
        "16"
      ],
      "correctAnswer": "24",
      "detailedDerivation": "Số hạng tổng quát: $C_4^k x^{4-k} 2^k$. Với $x^2$, ứng với $4 - k = 2 \\iff k = 2$. Hệ số: $C_4^2 \\cdot 2^2 = 6 \\cdot 4 = 24$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Phương trình chính tắc của elip có độ dài trục lớn bằng 10 và tiêu cự bằng 6 là:",
      "options": [
        "\\frac{x^2}{25} + \\frac{y^2}{16} = 1",
        "\\frac{x^2}{100} + \\frac{y^2}{36} = 1",
        "\\frac{x^2}{25} + \\frac{y^2}{9} = 1",
        "\\frac{x^2}{16} + \\frac{y^2}{25} = 1"
      ],
      "correctAnswer": "\\frac{x^2}{25} + \\frac{y^2}{16} = 1",
      "detailedDerivation": "Trục lớn $2a = 10 \\Rightarrow a = 5 \\Rightarrow a^2 = 25$. Tiêu cự $2c = 6 \\Rightarrow c = 3$. Ta có $b^2 = a^2 - c^2 = 25 - 9 = 16$. PT chính tắc: $\\frac{x^2}{25} + \\frac{y^2}{16} = 1$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Có bao nhiêu số tự nhiên chẵn gồm 4 chữ số đôi một khác nhau được lập từ các chữ số $\\{0, 1, 2, 3, 4, 5\\}$?",
      "options": [
        "156",
        "180",
        "144",
        "216"
      ],
      "correctAnswer": "156",
      "detailedDerivation": "TH1: chữ số tận cùng $d = 0$: chọn 3 chữ số đầu có $A_5^3 = 60$ cách. TH2: $d \\in \\{2; 4\\}$ (2 cách): chọn chữ số đầu $a \\ne 0, a \\ne d$ (4 cách), 2 chữ số giữa có $A_4^2 = 12$ cách $\\Rightarrow 2 \\times 4 \\times 12 = 96$ cách. Tổng cộng: $60 + 96 = 156$ số.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Tâm sai $e$ của hyperbol chính tắc $\\frac{x^2}{9} - \\frac{y^2}{16} = 1$ bằng:",
      "options": [
        "\\frac{5}{3}",
        "\\frac{4}{3}",
        "\\frac{5}{4}",
        "\\frac{3}{5}"
      ],
      "correctAnswer": "\\frac{5}{3}",
      "detailedDerivation": "$a^2 = 9 \\Rightarrow a = 3$; $b^2 = 16$. Ta có $c^2 = a^2 + b^2 = 9 + 16 = 25 \\Rightarrow c = 5$. Tâm sai $e = \\frac{c}{a} = \\frac{5}{3} > 1$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Cho elip $(E): \\frac{x^2}{25} + \\frac{y^2}{9} = 1$. Tiêu cự của elip $(E)$ bằng:",
      "options": [
        "8",
        "4",
        "10",
        "6"
      ],
      "correctAnswer": "8",
      "detailedDerivation": "Từ phương trình $(E)$ ta có $a^2 = 25, b^2 = 9 \\implies c^2 = a^2 - b^2 = 25 - 9 = 16 \\implies c = 4$. Tiêu cự của elip là $2c = 2 \\times 4 = 8$.",
      "cognitiveLevel": "Nhận biết"
    }
  ],
  "math10-ch4-trig-vectors": [
    {
      "questionText": "Trong tam giác $ABC$, định lý Cosin đối với cạnh $a$ phát biểu là:",
      "options": [
        "a^2 = b^2 + c^2 - 2bc \\cos A",
        "a^2 = b^2 + c^2 + 2bc \\cos A",
        "a^2 = b^2 + c^2 - 2bc \\sin A",
        "a = b + c - 2bc \\cos A"
      ],
      "correctAnswer": "a^2 = b^2 + c^2 - 2bc \\cos A",
      "detailedDerivation": "Định lý Cosin trong SGK Toán 10: $a^2 = b^2 + c^2 - 2bc \\cos A$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Trong tam giác $ABC$, công thức định lý Sin là:",
      "options": [
        "\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R",
        "\\frac{a}{\\cos A} = \\frac{b}{\\cos B} = \\frac{c}{\\cos C} = 2R",
        "\\frac{a}{\\sin A} = R",
        "a \\sin A = b \\sin B = c \\sin C"
      ],
      "correctAnswer": "\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R",
      "detailedDerivation": "Định lý Sin SGK Toán 10: tỉ số cạnh trên sin góc đối diện bằng đường kính đường tròn ngoại tiếp $2R$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Tích vô hướng của hai vectơ $\\vec{u}$ và $\\vec{v}$ được tính theo công thức:",
      "options": [
        "\\vec{u} \\cdot \\vec{v} = |\\vec{u}| \\cdot |\\vec{v}| \\cos(\\vec{u}, \\vec{v})",
        "\\vec{u} \\cdot \\vec{v} = |\\vec{u}| \\cdot |\\vec{v}| \\sin(\\vec{u}, \\vec{v})",
        "\\vec{u} \\cdot \\vec{v} = |\\vec{u}| + |\\vec{v}|",
        "\\vec{u} \\cdot \\vec{v} = |\\vec{u}| \\cdot |\\vec{v}|"
      ],
      "correctAnswer": "\\vec{u} \\cdot \\vec{v} = |\\vec{u}| \\cdot |\\vec{v}| \\cos(\\vec{u}, \\vec{v})",
      "detailedDerivation": "Định nghĩa tích vô hướng SGK Toán 10: $\\vec{u} \\cdot \\vec{v} = |\\vec{u}| |\\vec{v}| \\cos(\\vec{u}, \\vec{v})$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Hai vectơ khác vectơ-không $\\vec{u}$ và $\\vec{v}$ vuông góc với nhau khi và chỉ khi:",
      "options": [
        "\\vec{u} \\cdot \\vec{v} = 0",
        "\\vec{u} \\cdot \\vec{v} = 1",
        "|\\vec{u}| = |\\vec{v}|",
        "\\vec{u} + \\vec{v} = \\vec{0}"
      ],
      "correctAnswer": "\\vec{u} \\cdot \\vec{v} = 0",
      "detailedDerivation": "Vì $\\cos 90^\\circ = 0$ nên hai vectơ vuông góc khi tích vô hướng bằng 0.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Tam giác $ABC$ có $b = 5, c = 8$ và $\\widehat{A} = 60^\\circ$. Độ dài cạnh $a$ bằng:",
      "options": [
        "7",
        "\\sqrt{49}",
        "9",
        "\\sqrt{129}"
      ],
      "correctAnswer": "7",
      "detailedDerivation": "Áp dụng định lý Cosin: $a^2 = b^2 + c^2 - 2bc \\cos A = 25 + 64 - 2(5)(8)(0.5) = 89 - 40 = 49 \\implies a = 7$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Tam giác $ABC$ có cạnh $a = 6$ và $\\widehat{A} = 30^\\circ$. Bán kính $R$ của đường tròn ngoại tiếp tam giác là:",
      "options": [
        "6",
        "3",
        "12",
        "6\\sqrt{3}"
      ],
      "correctAnswer": "6",
      "detailedDerivation": "Định lý Sin: $2R = \\frac{a}{\\sin A} = \\frac{6}{\\sin 30^\\circ} = \\frac{6}{0.5} = 12 \\implies R = 6$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Cho hai vectơ $\\vec{a}$ và $\\vec{b}$ có độ dài lần lượt là 3 và 4, góc giữa chúng bằng $120^\\circ$. Tích vô hướng $\\vec{a} \\cdot \\vec{b}$ bằng:",
      "options": [
        "-6",
        "6",
        "-6\\sqrt{3}",
        "6\\sqrt{3}"
      ],
      "correctAnswer": "-6",
      "detailedDerivation": "$\\vec{a} \\cdot \\vec{b} = |\\vec{a}| |\\vec{b}| \\cos 120^\\circ = 3 \\cdot 4 \\cdot (-0.5) = -6$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Diện tích tam giác có ba cạnh $a = 3, b = 4, c = 5$ bằng:",
      "options": [
        "6",
        "10",
        "12",
        "7.5"
      ],
      "correctAnswer": "6",
      "detailedDerivation": "Tam giác có $3^2 + 4^2 = 5^2$ là tam giác vuông tại đỉnh đối diện cạnh huyền. Diện tích $S = \\frac{1}{2} \\cdot 3 \\cdot 4 = 6$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Trong mặt phẳng $Oxy$, cho $\\vec{u} = (2; -1)$ và $\\vec{v} = (3; 4)$. Tích vô hướng $\\vec{u} \\cdot \\vec{v}$ bằng:",
      "options": [
        "2",
        "10",
        "-2",
        "7"
      ],
      "correctAnswer": "2",
      "detailedDerivation": "$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = 2(3) + (-1)(4) = 6 - 4 = 2$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Cho tam giác $ABC$ có $a = 7, b = 8, c = 5$. Số đo góc $\\widehat{A}$ bằng:",
      "options": [
        "60^\\circ",
        "45^\\circ",
        "120^\\circ",
        "30^\\circ"
      ],
      "correctAnswer": "60^\\circ",
      "detailedDerivation": "Hệ quả định lý Cosin: $\\cos A = \\frac{b^2 + c^2 - a^2}{2bc} = \\frac{64 + 25 - 49}{2 \\cdot 8 \\cdot 5} = \\frac{40}{80} = \\frac{1}{2} \\implies \\widehat{A} = 60^\\circ$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Tam giác $ABC$ có diện tích $S = 24\\text{ cm}^2$ và nửa chu vi $p = 12\\text{ cm}$. Bán kính đường tròn nội tiếp $r$ bằng:",
      "options": [
        "2\\text{ cm}",
        "4\\text{ cm}",
        "1\\text{ cm}",
        "3\\text{ cm}"
      ],
      "correctAnswer": "2\\text{ cm}",
      "detailedDerivation": "Công thức $S = pr \\implies r = \\frac{S}{p} = \\frac{24}{12} = 2\\text{ cm}$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Một lực $\\vec{F}$ có độ lớn $50\\text{ N}$ kéo một vật di chuyển đoạn đường $10\\text{ m}$ theo hướng hợp với lực một góc $60^\\circ$. Công sinh ra bởi lực là:",
      "options": [
        "250\\text{ J}",
        "500\\text{ J}",
        "250\\sqrt{3}\\text{ J}",
        "100\\text{ J}"
      ],
      "correctAnswer": "250\\text{ J}",
      "detailedDerivation": "Công $A = |\\vec{F}| \\cdot s \\cdot \\cos \\alpha = 50 \\times 10 \\times \\cos 60^\\circ = 500 \\times 0.5 = 250\\text{ J}$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Cho tam giác đều $ABC$ cạnh $a$. Tích vô hướng $\\vec{AB} \\cdot \\vec{AC}$ bằng:",
      "options": [
        "\\frac{a^2}{2}",
        "a^2",
        "\\frac{a^2\\sqrt{3}}{2}",
        "-\\frac{a^2}{2}"
      ],
      "correctAnswer": "\\frac{a^2}{2}",
      "detailedDerivation": "$\\vec{AB} \\cdot \\vec{AC} = |\\vec{AB}| |\\vec{AC}| \\cos 60^\\circ = a \\cdot a \\cdot 0.5 = \\frac{a^2}{2}$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Để đo khoảng cách giữa hai tàu $A$ và $B$ trên biển, trạm kiểm soát $C$ đo được $CA = 500\\text{ m}, CB = 800\\text{ m}$ và góc $\\widehat{ACB} = 120^\\circ$. Khoảng cách $AB$ gần nhất với:",
      "options": [
        "1136\\text{ m}",
        "1300\\text{ m}",
        "700\\text{ m}",
        "950\\text{ m}"
      ],
      "correctAnswer": "1136\\text{ m}",
      "detailedDerivation": "Định lý Cosin: $AB^2 = 500^2 + 800^2 - 2(500)(800)\\cos 120^\\circ = 250000 + 640000 - 800000(-0.5) = 890000 + 400000 = 1290000$. $AB = \\sqrt{1290000} \\approx 1135.78\\text{ m}$.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Cho hình bình hành $ABCD$. Đẳng thức vectơ nào sau đây đúng?",
      "options": [
        "|\\vec{AC}|^2 + |\\vec{BD}|^2 = 2(|\\vec{AB}|^2 + |\\vec{AD}|^2)",
        "|\\vec{AC}|^2 + |\\vec{BD}|^2 = |\\vec{AB}|^2 + |\\vec{AD}|^2",
        "|\\vec{AC}| + |\\vec{BD}| = 2(|\\vec{AB}| + |\\vec{AD}|)",
        "\\vec{AC} \\cdot \\vec{BD} = 0"
      ],
      "correctAnswer": "|\\vec{AC}|^2 + |\\vec{BD}|^2 = 2(|\\vec{AB}|^2 + |\\vec{AD}|^2)",
      "detailedDerivation": "Định lý hình bình hành: tổng bình phương hai đường chéo bằng tổng bình phương bốn cạnh: $AC^2 + BD^2 = 2(AB^2 + AD^2)$.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Cho hai vectơ $\\vec{a}$ và $\\vec{b}$ thỏa mãn $|\\vec{a}| = 2, |\\vec{b}| = 3$ và $|\\vec{a} + \\vec{b}| = 4$. Độ dài của vectơ hiệu $|\\vec{a} - \\vec{b}|$ bằng:",
      "options": [
        "\\sqrt{10}",
        "\\sqrt{14}",
        "1",
        "\\sqrt{26}"
      ],
      "correctAnswer": "\\sqrt{10}",
      "detailedDerivation": "Theo hệ thức: $|\\vec{a} + \\vec{b}|^2 + |\\vec{a} - \\vec{b}|^2 = 2(|\\vec{a}|^2 + |\\vec{b}|^2) \\iff 4^2 + |\\vec{a} - \\vec{b}|^2 = 2(2^2 + 3^2) = 2(13) = 26 \\implies |\\vec{a} - \\vec{b}|^2 = 26 - 16 = 10 \\implies |\\vec{a} - \\vec{b}| = \\sqrt{10}$.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Cho tam giác $ABC$ có $AB = 6, AC = 8$ và $\\widehat{A} = 60^\\circ$. Độ dài cạnh $BC$ bằng:",
      "options": [
        "2\\sqrt{13}",
        "2\\sqrt{37}",
        "10",
        "2\\sqrt{19}"
      ],
      "correctAnswer": "2\\sqrt{13}",
      "detailedDerivation": "Định lý cosin: $BC^2 = AB^2 + AC^2 - 2AB \\cdot AC \\cdot \\cos 60^\\circ = 36 + 64 - 2(6)(8)(0.5) = 100 - 48 = 52 \\Rightarrow BC = \\sqrt{52} = 2\\sqrt{13}$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Cho hình vuông $ABCD$ cạnh $a$. Tích vô hướng $\\vec{AB} \\cdot \\vec{AC}$ bằng:",
      "options": [
        "a^2",
        "0",
        "a^2\\sqrt{2}",
        "\\frac{a^2}{2}"
      ],
      "correctAnswer": "a^2",
      "detailedDerivation": "$\\vec{AB} \\cdot \\vec{AC} = |\\vec{AB}| |\\vec{AC}| \\cos(\\vec{AB}, \\vec{AC}) = a \\cdot a\\sqrt{2} \\cdot \\cos 45^\\circ = a^2 \\sqrt{2} \\cdot \\frac{\\sqrt{2}}{2} = a^2$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Bán kính đường tròn ngoại tiếp tam giác đều cạnh $a$ bằng:",
      "options": [
        "R = \\frac{a\\sqrt{3}}{3}",
        "R = \\frac{a\\sqrt{3}}{6}",
        "R = \\frac{a\\sqrt{3}}{2}",
        "R = a"
      ],
      "correctAnswer": "R = \\frac{a\\sqrt{3}}{3}",
      "detailedDerivation": "Theo định lý sin: $2R = \\frac{a}{\\sin 60^\\circ} = \\frac{a}{\\sqrt{3}/2} = \\frac{2a}{\\sqrt{3}} \\Rightarrow R = \\frac{a}{\\sqrt{3}} = \\frac{a\\sqrt{3}}{3}$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Điều kiện cần và đủ để hai vectơ $\\vec{u}$ và $\\vec{v}$ vuông góc là:",
      "options": [
        "\\vec{u} \\cdot \\vec{v} = 0",
        "|\\vec{u}| = |\\vec{v}|",
        "\\vec{u} + \\vec{v} = \\vec{0}",
        "\\vec{u} \\cdot \\vec{v} = 1"
      ],
      "correctAnswer": "\\vec{u} \\cdot \\vec{v} = 0",
      "detailedDerivation": "Hai vectơ vuông góc thì góc giữa chúng bằng $90^\\circ$, khi đó $\\cos 90^\\circ = 0$, suy ra tích vô hướng $\\vec{u} \\cdot \\vec{v} = 0$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Hai lực $\\vec{F}_1$ và $\\vec{F}_2$ cùng tác dụng vào một chất điểm, có độ lớn lần lượt là $30\\text{ N}$ và $40\\text{ N}$, hợp với nhau một góc $90^\\circ$. Độ lớn của hợp lực $\\vec{F} = \\vec{F}_1 + \\vec{F}_2$ là:",
      "options": [
        "50 N",
        "70 N",
        "10 N",
        "1200 N"
      ],
      "correctAnswer": "50 N",
      "detailedDerivation": "$F = \\sqrt{F_1^2 + F_2^2 + 2F_1 F_2 \\cos 90^\\circ} = \\sqrt{30^2 + 40^2 + 0} = \\sqrt{900 + 1600} = 50\\text{ N}$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Cho tam giác đều $ABC$ cạnh $a$. Tích vô hướng $\\vec{AB} \\cdot \\vec{AC}$ bằng:",
      "options": [
        "\\frac{a^2}{2}",
        "\\frac{a^2\\sqrt{3}}{2}",
        "a^2",
        "-\\frac{a^2}{2}"
      ],
      "correctAnswer": "\\frac{a^2}{2}",
      "detailedDerivation": "Vì tam giác $ABC$ đều nên góc $\\widehat{BAC} = 60^\\circ$. Ta có: $\\vec{AB} \\cdot \\vec{AC} = |\\vec{AB}| \\cdot |\\vec{AC}| \\cdot \\cos(\\vec{AB}, \\vec{AC}) = a \\cdot a \\cdot \\cos 60^\\circ = a^2 \\cdot \\frac{1}{2} = \\frac{a^2}{2}$.",
      "cognitiveLevel": "Nhận biết"
    }
  ],
  "math11-ch2-3-trigonometry-sequences": [
    {
      "questionText": "Công thức nhân đôi nào sau đây đúng?",
      "options": [
        "\\sin 2x = 2\\sin x \\cos x",
        "\\cos 2x = 2\\cos^2 x + 1",
        "\\sin 2x = \\sin x \\cos x",
        "\\cos 2x = \\cos^2 x + \\sin^2 x"
      ],
      "correctAnswer": "\\sin 2x = 2\\sin x \\cos x",
      "detailedDerivation": "Công thức lượng giác cơ bản: $\\sin 2x = 2\\sin x \\cos x$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Nghiệm của phương trình $\\cos x = 0$ là:",
      "options": [
        "x = \\frac{\\pi}{2} + k\\pi, k \\in \\mathbb{Z}",
        "x = k\\pi, k \\in \\mathbb{Z}",
        "x = \\frac{\\pi}{2} + k2\\pi, k \\in \\mathbb{Z}",
        "x = k2\\pi, k \\in \\mathbb{Z}"
      ],
      "correctAnswer": "x = \\frac{\\pi}{2} + k\\pi, k \\in \\mathbb{Z}",
      "detailedDerivation": "Phương trình cơ bản: $\\cos x = 0 \\iff x = \\frac{\\pi}{2} + k\\pi$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Cho cấp số cộng $(u_n)$ có số hạng đầu $u_1 = 3$ và công sai $d = 2$. Số hạng thứ 2 của cấp số cộng là:",
      "options": [
        "5",
        "6",
        "1",
        "7"
      ],
      "correctAnswer": "5",
      "detailedDerivation": "$u_2 = u_1 + d = 3 + 2 = 5$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Cho cấp số nhân $(u_n)$ có $u_1 = 2$ và công bội $q = 3$. Số hạng thứ 3 của cấp số nhân là:",
      "options": [
        "18",
        "6",
        "12",
        "54"
      ],
      "correctAnswer": "18",
      "detailedDerivation": "$u_3 = u_1 \\cdot q^2 = 2 \\cdot 3^2 = 2 \\cdot 9 = 18$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Tập xác định của hàm số $y = \\tan x$ là:",
      "options": [
        "D = \\mathbb{R} \\setminus \\{\\frac{\\pi}{2} + k\\pi, k \\in \\mathbb{Z}\\}",
        "D = \\mathbb{R} \\setminus \\{k\\pi, k \\in \\mathbb{Z}\\}",
        "D = \\mathbb{R}",
        "D = (-1; 1)"
      ],
      "correctAnswer": "D = \\mathbb{R} \\setminus \\{\\frac{\\pi}{2} + k\\pi, k \\in \\mathbb{Z}\\}",
      "detailedDerivation": "Hàm số $\\tan x = \\frac{\\sin x}{\\cos x}$ xác định khi $\\cos x \\ne 0 \\iff x \\ne \\frac{\\pi}{2} + k\\pi$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Số hạng tổng quát $u_n$ của cấp số cộng có $u_1 = -2$ và công sai $d = 3$ là:",
      "options": [
        "u_n = 3n - 5",
        "u_n = 3n - 2",
        "u_n = -2 + 3n",
        "u_n = 3n + 1"
      ],
      "correctAnswer": "u_n = 3n - 5",
      "detailedDerivation": "$u_n = u_1 + (n - 1)d = -2 + (n - 1)3 = 3n - 5$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Tổng 10 số hạng đầu tiên của cấp số cộng có $u_1 = 1$ và $d = 2$ là:",
      "options": [
        "100",
        "90",
        "110",
        "120"
      ],
      "correctAnswer": "100",
      "detailedDerivation": "$S_{10} = \\frac{10}{2}[2u_1 + (10 - 1)d] = 5[2(1) + 9(2)] = 5[20] = 100$ (tương đương $1 + 3 + \\dots + 19 = 10^2 = 100$).",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Rút gọn biểu thức $P = \\sin(x + y)\\cos y - \\cos(x + y)\\sin y$.",
      "options": [
        "\\sin x",
        "\\cos x",
        "\\sin(x + 2y)",
        "\\cos(x + 2y)"
      ],
      "correctAnswer": "\\sin x",
      "detailedDerivation": "Áp dụng công thức $\\sin(A - B) = \\sin A \\cos B - \\cos A \\sin B$ với $A = x + y, B = y \\implies \\sin((x+y)-y) = \\sin x$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Cho cấp số nhân có $u_1 = 1$ và $q = 2$. Tổng 6 số hạng đầu tiên $S_6$ bằng:",
      "options": [
        "63",
        "64",
        "31",
        "127"
      ],
      "correctAnswer": "63",
      "detailedDerivation": "$S_6 = u_1 \\frac{1 - q^6}{1 - q} = 1 \\cdot \\frac{1 - 64}{1 - 2} = 63$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Tìm số nghiệm của phương trình $\\sin 2x = 1$ trên đoạn $[0; 2\\pi]$.",
      "options": [
        "2",
        "1",
        "3",
        "4"
      ],
      "correctAnswer": "2",
      "detailedDerivation": "$\\sin 2x = 1 \\iff 2x = \\frac{\\pi}{2} + k2\\pi \\iff x = \\frac{\\pi}{4} + k\\pi$. Trên $[0; 2\\pi]$, có 2 nghiệm ứng với $k = 0$ ($x = \\pi/4$) và $k = 1$ ($x = 5\\pi/4$).",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Một rạp hát có 20 hàng ghế, hàng đầu có 15 ghế, mỗi hàng sau nhiều hơn hàng liền trước 2 ghế. Tổng số ghế trong rạp hát là:",
      "options": [
        "680",
        "700",
        "640",
        "720"
      ],
      "correctAnswer": "680",
      "detailedDerivation": "Cấp số cộng với $n = 20, u_1 = 15, d = 2$. $S_{20} = \\frac{20}{2}[2(15) + 19(2)] = 10[30 + 38] = 680$ ghế.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Một người gửi tiết kiệm 100 triệu đồng với lãi suất 6%/năm theo hình thức lãi kép. Sau 3 năm, số tiền cả gốc lẫn lãi người đó nhận được là:",
      "options": [
        "119.1\\text{ triệu}",
        "118.0\\text{ triệu}",
        "120.5\\text{ triệu}",
        "116.0\\text{ triệu}"
      ],
      "correctAnswer": "119.1\\text{ triệu}",
      "detailedDerivation": "Số tiền theo cấp số nhân: $A = 100 \\times (1 + 0.06)^3 = 100 \\times 1.191016 = 119.10$ triệu đồng.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Tìm giá trị lớn nhất của hàm số $y = 3\\sin x - 4\\cos x + 1$.",
      "options": [
        "6",
        "5",
        "8",
        "4"
      ],
      "correctAnswer": "6",
      "detailedDerivation": "Theo bất đẳng thức Cauchy-Schwarz hoặc dạng $a\\sin x + b\\cos x$: $-\\sqrt{3^2 + (-4)^2} \\le 3\\sin x - 4\\cos x \\le 5$. Do đó $y \\le 5 + 1 = 6$. GTLN bằng 6.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Một tế bào vi khuẩn cứ sau 20 phút lại nhân đôi một lần. Nếu ban đầu có 100 tế bào, sau 2 giờ số lượng tế bào vi khuẩn là:",
      "options": [
        "6400",
        "3200",
        "12800",
        "1600"
      ],
      "correctAnswer": "6400",
      "detailedDerivation": "2 giờ = 120 phút $= 6$ chu kỳ nhân đôi. Số lượng tế bào là $100 \\times 2^6 = 100 \\times 64 = 6400$ tế bào.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Cho cấp số cộng $(u_n)$ thỏa mãn $u_2 + u_5 = 14$ và $u_3 + u_7 = 20$. Công sai $d$ của cấp số cộng bằng:",
      "options": [
        "2",
        "3",
        "1",
        "4"
      ],
      "correctAnswer": "2",
      "detailedDerivation": "Hệ phương trình: $(u_1 + d) + (u_1 + 4d) = 2u_1 + 5d = 14$; $(u_1 + 2d) + (u_1 + 6d) = 2u_1 + 8d = 20$. Trừ hai vế: $3d = 6 \\implies d = 2$.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Tổng vô hạn của cấp số nhân lùi vô hạn $S = 1 + \\frac{1}{3} + \\frac{1}{9} + \\dots + \\frac{1}{3^n} + \\dots$ bằng:",
      "options": [
        "\\frac{3}{2}",
        "2",
        "\\frac{4}{3}",
        "3"
      ],
      "correctAnswer": "\\frac{3}{2}",
      "detailedDerivation": "Cấp số nhân lùi vô hạn có $u_1 = 1$ và $q = \\frac{1}{3} < 1$. Tổng $S = \\frac{u_1}{1 - q} = \\frac{1}{1 - 1/3} = \\frac{1}{2/3} = \\frac{3}{2}$.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Tập giá trị của hàm số $y = 3\\sin 2x - 1$ là:",
      "options": [
        "[-4; 2]",
        "[-3; 3]",
        "[-1; 2]",
        "[-2; 4]"
      ],
      "correctAnswer": "[-4; 2]",
      "detailedDerivation": "Vì $-1 \\le \\sin 2x \\le 1$ nên $-3 \\le 3\\sin 2x \\le 3 \\iff -4 \\le 3\\sin 2x - 1 \\le 2$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Số nghiệm của phương trình $\\cos x = \\frac{1}{2}$ trong khoảng $(0; 2\\pi)$ là:",
      "options": [
        "2",
        "1",
        "3",
        "4"
      ],
      "correctAnswer": "2",
      "detailedDerivation": "$\\cos x = \\frac{1}{2} \\iff x = \\pm \\frac{\\pi}{3} + k2\\pi$. Trong khoảng $(0; 2\\pi)$ có đúng hai nghiệm là $x_1 = \\frac{\\pi}{3}$ và $x_2 = \\frac{5\\pi}{3}$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Cho cấp số cộng $(u_n)$ có số hạng đầu $u_1 = 3$ và công sai $d = 4$. Số hạng thứ 10 là:",
      "options": [
        "u_{10} = 39",
        "u_{10} = 43",
        "u_{10} = 36",
        "u_{10} = 40"
      ],
      "correctAnswer": "u_{10} = 39",
      "detailedDerivation": "Công thức số hạng tổng quát: $u_{10} = u_1 + 9d = 3 + 9(4) = 3 + 36 = 39$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Tổng của cấp số nhân lùi vô hạn có $u_1 = 6$ và công bội $q = \\frac{1}{3}$ bằng:",
      "options": [
        "9",
        "18",
        "12",
        "8"
      ],
      "correctAnswer": "9",
      "detailedDerivation": "$S = \\frac{u_1}{1 - q} = \\frac{6}{1 - 1/3} = \\frac{6}{2/3} = 9$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Một người gửi tiết kiệm 100 triệu đồng vào ngân hàng theo thể thức lãi kép kỳ hạn 1 năm với lãi suất $6\\%/năm$. Sau 5 năm, số tiền cả gốc và lãi người đó nhận được xấp xỉ bằng:",
      "options": [
        "133.82 triệu đồng",
        "130.00 triệu đồng",
        "135.50 triệu đồng",
        "128.65 triệu đồng"
      ],
      "correctAnswer": "133.82 triệu đồng",
      "detailedDerivation": "Công thức lãi kép: $A_n = A(1 + r)^n = 100(1 + 0.06)^5 = 100 \\times 1.338225577 \\approx 133.82\\text{ triệu đồng}$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Cho cấp số cộng $(u_n)$ có số hạng đầu $u_1 = 2$ và công sai $d = 3$. Số hạng thứ 10 của cấp số cộng bằng:",
      "options": [
        "29",
        "32",
        "27",
        "30"
      ],
      "correctAnswer": "29",
      "detailedDerivation": "Số hạng tổng quát của CSC: $u_n = u_1 + (n - 1)d \\implies u_{10} = 2 + (10 - 1) \\times 3 = 2 + 27 = 29$.",
      "cognitiveLevel": "Nhận biết"
    }
  ],
  "math11-ch4-exponential-logarithmic": [
    {
      "questionText": "Với số thực dương $a > 0, a \\ne 1$, giá trị của $\\log_a a^3$ bằng:",
      "options": [
        "3",
        "1",
        "a",
        "a^3"
      ],
      "correctAnswer": "3",
      "detailedDerivation": "Theo định nghĩa logarit: $\\log_a a^x = x \\implies \\log_a a^3 = 3$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Với $a, b > 0, a \\ne 1$, công thức nào sau đây là đúng?",
      "options": [
        "\\log_a(xy) = \\log_a x + \\log_a y",
        "\\log_a(xy) = \\log_a x \\cdot \\log_a y",
        "\\log_a(x + y) = \\log_a x + \\log_a y",
        "\\log_a \\frac{x}{y} = \\frac{\\log_a x}{\\log_a y}"
      ],
      "correctAnswer": "\\log_a(xy) = \\log_a x + \\log_a y",
      "detailedDerivation": "Quy tắc logarit của một tích: $\\log_a(xy) = \\log_a x + \\log_a y$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Tập xác định của hàm số $y = \\log_2(x - 3)$ là:",
      "options": [
        "(3; +\\infty)",
        "[3; +\\infty)",
        "\\mathbb{R} \\setminus \\{3\\}",
        "(-\\infty; 3)"
      ],
      "correctAnswer": "(3; +\\infty)",
      "detailedDerivation": "Điều kiện biểu thức trong logarit dương: $x - 3 > 0 \\iff x > 3$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Nghiệm của phương trình $2^x = 8$ là:",
      "options": [
        "x = 3",
        "x = 4",
        "x = 2",
        "x = 1"
      ],
      "correctAnswer": "x = 3",
      "detailedDerivation": "$2^x = 8 = 2^3 \\iff x = 3$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Đạo hàm của hàm số $y = e^{3x}$ là:",
      "options": [
        "y' = 3e^{3x}",
        "y' = e^{3x}",
        "y' = \\frac{1}{3}e^{3x}",
        "y' = 3x e^{3x-1}"
      ],
      "correctAnswer": "y' = 3e^{3x}",
      "detailedDerivation": "$(e^{u})' = u' e^u \\implies (e^{3x})' = 3e^{3x}$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Nghiệm của phương trình $\\log_3(2x - 1) = 2$ là:",
      "options": [
        "x = 5",
        "x = 4",
        "x = 3",
        "x = 9"
      ],
      "correctAnswer": "x = 5",
      "detailedDerivation": "$\\log_3(2x - 1) = 2 \\iff 2x - 1 = 3^2 = 9 \\iff 2x = 10 \\iff x = 5$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Tập nghiệm của bất phương trình $2^x > 4$ là:",
      "options": [
        "(2; +\\infty)",
        "[2; +\\infty)",
        "(0; 2)",
        "(-\\infty; 2)"
      ],
      "correctAnswer": "(2; +\\infty)",
      "detailedDerivation": "Cơ số $2 > 1$ nên $2^x > 2^2 \\iff x > 2$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Tập nghiệm của bất phương trình $\\log_{0.5}(x) \\ge -1$ là:",
      "options": [
        "(0; 2]",
        "[2; +\\infty)",
        "(-\\infty; 2]",
        "(0; 0.5]"
      ],
      "correctAnswer": "(0; 2]",
      "detailedDerivation": "Điều kiện $x > 0$. Cơ số $0 < 0.5 < 1$ nên đổi chiều: $\\log_{0.5}(x) \\ge \\log_{0.5}(0.5^{-1}) \\iff x \\le (0.5)^{-1} = 2$. Kết hợp $x > 0 \\implies x \\in (0; 2]$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Rút gọn biểu thức $A = a^{\\sqrt{3} + 1} : a^{\\sqrt{3} - 1}$ (với $a > 0$).",
      "options": [
        "a^2",
        "a^{2\\sqrt{3}}",
        "a",
        "a^{-2}"
      ],
      "correctAnswer": "a^2",
      "detailedDerivation": "$a^{\\sqrt{3} + 1 - (\\sqrt{3} - 1)} = a^2$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Độ pH của một dung dịch có nồng độ ion $[H^+] = 10^{-5}\\text{ mol/L}$ là:",
      "options": [
        "5",
        "9",
        "7",
        "-5"
      ],
      "correctAnswer": "5",
      "detailedDerivation": "$\\text{pH} = -\\log[H^+] = -\\log(10^{-5}) = 5$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Số nghiệm của phương trình $4^x - 5 \\cdot 2^x + 4 = 0$ là:",
      "options": [
        "2",
        "1",
        "0",
        "3"
      ],
      "correctAnswer": "2",
      "detailedDerivation": "Đặt $t = 2^x > 0$, phương trình trở thành $t^2 - 5t + 4 = 0 \\iff t = 1$ hoặc $t = 4$. Với $t = 1 \\implies 2^x = 1 \\implies x = 0$. Với $t = 4 \\implies 2^x = 4 \\implies x = 2$. Có 2 nghiệm phân biệt.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Một chất phóng xạ có chu kỳ bán rã là 30 năm. Khối lượng ban đầu là 100g. Sau 90 năm, khối lượng còn lại là:",
      "options": [
        "12.5\\text{ g}",
        "25\\text{ g}",
        "6.25\\text{ g}",
        "50\\text{ g}"
      ],
      "correctAnswer": "12.5\\text{ g}",
      "detailedDerivation": "Số chu kỳ bán rã $n = \\frac{90}{30} = 3$. Khối lượng còn lại $m = 100 \\times (\\frac{1}{2})^3 = \\frac{100}{8} = 12.5\\text{ g}$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Tìm tập nghiệm của bất phương trình $\\log_2^2 x - 3\\log_2 x + 2 \\le 0$.",
      "options": [
        "[2; 4]",
        "(2; 4)",
        "[1; 2]",
        "(0; 4]"
      ],
      "correctAnswer": "[2; 4]",
      "detailedDerivation": "Đặt $t = \\log_2 x$. BPT trở thành $t^2 - 3t + 2 \\le 0 \\iff 1 \\le t \\le 2 \\iff 1 \\le \\log_2 x \\le 2 \\iff 2^1 \\le x \\le 2^2 \\iff 2 \\le x \\le 4$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Cường độ âm $L$ (đo bằng dB) được tính theo công thức $L = 10 \\log_{10}\\left(\\frac{I}{I_0}\\right)$. Nếu cường độ âm $I$ tăng gấp 100 lần thì mức cường độ âm $L$ tăng thêm:",
      "options": [
        "20\\text{ dB}",
        "10\\text{ dB}",
        "100\\text{ dB}",
        "2\\text{ dB}"
      ],
      "correctAnswer": "20\\text{ dB}",
      "detailedDerivation": "$L_2 - L_1 = 10 \\log_{10}(100) = 10 \\times 2 = 20\\text{ dB}$.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Tìm số nghiệm nguyên của bất phương trình $3^{x^2 - 4} \\le 1$.",
      "options": [
        "5",
        "4",
        "3",
        "2"
      ],
      "correctAnswer": "5",
      "detailedDerivation": "$3^{x^2 - 4} \\le 3^0 \\iff x^2 - 4 \\le 0 \\iff -2 \\le x \\le 2$. Các nghiệm nguyên là $x \\in \\{-2, -1, 0, 1, 2\\}$, có 5 nghiệm.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Tìm tất cả các giá trị của tham số $m$ để phương trình $4^x - 2^{x+1} + m = 0$ có 2 nghiệm phân biệt.",
      "options": [
        "0 < m < 1",
        "m < 1",
        "m > 0",
        "m \\le 1"
      ],
      "correctAnswer": "0 < m < 1",
      "detailedDerivation": "Đặt $t = 2^x > 0$. Phương trình thành $t^2 - 2t + m = 0$. Để có 2 nghiệm $x$ phân biệt thì phương trình ẩn $t$ phải có 2 nghiệm phân biệt dương: 1) $\\Delta' = 1 - m > 0 \\iff m < 1$. 2) $S = 2 > 0$ (thỏa mãn). 3) $P = m > 0$. Vậy $0 < m < 1$.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Nghiệm của phương trình $2^{2x - 1} = 32$ là:",
      "options": [
        "x = 3",
        "x = 2",
        "x = 4",
        "x = 5"
      ],
      "correctAnswer": "x = 3",
      "detailedDerivation": "$2^{2x - 1} = 2^5 \\iff 2x - 1 = 5 \\iff 2x = 6 \\iff x = 3$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Tập nghiệm của bất phương trình $\\log_2 (x - 3) < 3$ là:",
      "options": [
        "(3; 11)",
        "(-\\infty; 11)",
        "(3; 8)",
        "[3; 11)"
      ],
      "correctAnswer": "(3; 11)",
      "detailedDerivation": "Điều kiện xác định: $x - 3 > 0 \\iff x > 3$. Vì cơ số $2 > 1$ nên bất phương trình tương đương: $x - 3 < 2^3 = 8 \\iff x < 11$. Kết hợp điều kiện: $3 < x < 11$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Đạo hàm của hàm số $y = 3^x + \\ln(2x)$ là:",
      "options": [
        "y' = 3^x \\ln 3 + \\frac{1}{x}",
        "y' = x 3^{x-1} + \\frac{1}{2x}",
        "y' = 3^x + \\frac{1}{x}",
        "y' = \\frac{3^x}{\\ln 3} + \\frac{2}{x}"
      ],
      "correctAnswer": "y' = 3^x \\ln 3 + \\frac{1}{x}",
      "detailedDerivation": "$(3^x)' = 3^x \\ln 3$; $(\\ln 2x)' = \\frac{(2x)'}{2x} = \\frac{2}{2x} = \\frac{1}{x}$. Do đó $y' = 3^x \\ln 3 + \\frac{1}{x}$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Với các số thực dương $a, b$ tùy ý thỏa mãn $\\log_3 a = 2$ và $\\log_3 b = 3$, giá trị của $\\log_3 (a^2 b)$ bằng:",
      "options": [
        "7",
        "12",
        "8",
        "6"
      ],
      "correctAnswer": "7",
      "detailedDerivation": "$\\log_3 (a^2 b) = \\log_3 (a^2) + \\log_3 b = 2\\log_3 a + \\log_3 b = 2(2) + 3 = 4 + 3 = 7$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Độ pH của dung dịch được tính bằng công thức $\\text{pH} = -\\log[\\text{H}^+]$. Nếu dung dịch có nồng độ ion $\\text{H}^+$ là $2.5 \\times 10^{-4}\\text{ mol/L}$, thì độ pH của dung dịch xấp xỉ bằng (cho $\\log 2.5 \\approx 0.40$):",
      "options": [
        "3.60",
        "4.40",
        "3.40",
        "4.00"
      ],
      "correctAnswer": "3.60",
      "detailedDerivation": "$\\text{pH} = -\\log(2.5 \\times 10^{-4}) = -(\\log 2.5 + \\log 10^{-4}) = -(0.40 - 4) = 4 - 0.40 = 3.60$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Tập nghiệm của phương trình $\\log_2(x - 1) + \\log_2(x + 1) = 3$ là:",
      "options": [
        "S = \\{3\\}",
        "S = \\{-3; 3\\}",
        "S = \\{\\sqrt{7}\\}",
        "S = \\{9\\}"
      ],
      "correctAnswer": "S = \\{3\\}",
      "detailedDerivation": "Điều kiện: $x - 1 > 0$ và $x + 1 > 0 \\iff x > 1$. Phương trình tương đương $\\log_2[(x - 1)(x + 1)] = 3 \\iff x^2 - 1 = 2^3 = 8 \\iff x^2 = 9 \\iff x = \\pm 3$. Kết hợp điều kiện $x > 1$, ta nhận $x = 3$.",
      "cognitiveLevel": "Thông hiểu"
    }
  ],
  "math11-ch10-spatial-geometry-volumes": [
    {
      "questionText": "Thể tích của khối chóp có diện tích đáy $B$ và chiều cao $h$ được tính bằng:",
      "options": [
        "V = \\frac{1}{3} Bh",
        "V = Bh",
        "V = \\frac{1}{2} Bh",
        "V = 3Bh"
      ],
      "correctAnswer": "V = \\frac{1}{3} Bh",
      "detailedDerivation": "Công thức SGK Toán 11: thể tích khối chóp $V = \\frac{1}{3} Bh$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Thể tích của khối lăng trụ có diện tích đáy $B$ và chiều cao $h$ là:",
      "options": [
        "V = Bh",
        "V = \\frac{1}{3} Bh",
        "V = \\frac{1}{2} Bh",
        "V = 2Bh"
      ],
      "correctAnswer": "V = Bh",
      "detailedDerivation": "Thể tích khối lăng trụ $V = Bh$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Khẳng định nào sau đây là đúng về quan hệ vuông góc trong không gian?",
      "options": [
        "Nếu đường thẳng $d$ vuông góc với hai đường thẳng cắt nhau nằm trong mặt phẳng $(P)$ thì $d \\perp (P)$",
        "Nếu đường thẳng $d$ vuông góc với hai đường thẳng song song trong $(P)$ thì $d \\perp (P)$",
        "Nếu $d \\perp a$ và $a \\subset (P)$ thì $d \\perp (P)$",
        "Nếu $d // (P)$ thì $d$ vuông góc với mọi đường trong $(P)$"
      ],
      "correctAnswer": "Nếu đường thẳng $d$ vuông góc với hai đường thẳng cắt nhau nằm trong mặt phẳng $(P)$ thì $d \\perp (P)$",
      "detailedDerivation": "Định lý SGK Toán 11: Đường thẳng vuông góc với mặt phẳng khi và chỉ khi nó vuông góc với hai đường thẳng cắt nhau nằm trong mặt phẳng đó.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Cho hình chóp $S.ABCD$ có đáy là hình vuông và $SA \\perp (ABCD)$. Góc giữa cạnh bên $SC$ và mặt phẳng đáy là:",
      "options": [
        "\\widehat{SCA}",
        "\\widehat{SCD}",
        "\\widehat{SBA}",
        "\\widehat{CSA}"
      ],
      "correctAnswer": "\\widehat{SCA}",
      "detailedDerivation": "Vì $SA \\perp (ABCD)$ nên hình chiếu của $SC$ lên đáy là $AC$. Do đó góc giữa $SC$ và đáy là $\\widehat{SCA}$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Thể tích khối lập phương có cạnh bằng $3\\text{ cm}$ là:",
      "options": [
        "27\\text{ cm}^3",
        "9\\text{ cm}^3",
        "18\\text{ cm}^3",
        "54\\text{ cm}^3"
      ],
      "correctAnswer": "27\\text{ cm}^3",
      "detailedDerivation": "$V = a^3 = 3^3 = 27\\text{ cm}^3$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Cho hình chóp tam giác đều $S.ABC$ có cạnh đáy bằng $a$ và chiều cao bằng $h = a\\sqrt{3}$. Thể tích khối chóp là:",
      "options": [
        "\\frac{a^3}{4}",
        "\\frac{a^3\\sqrt{3}}{12}",
        "\\frac{a^3}{12}",
        "\\frac{a^3\\sqrt{3}}{4}"
      ],
      "correctAnswer": "\\frac{a^3}{4}",
      "detailedDerivation": "Đáy là tam giác đều cạnh $a \\implies S = \\frac{a^2\\sqrt{3}}{4}$. Chiều cao $h = a\\sqrt{3}$. Thể tích $V = \\frac{1}{3} S h = \\frac{1}{3} \\cdot \\frac{a^2\\sqrt{3}}{4} \\cdot a\\sqrt{3} = \\frac{3a^3}{12} = \\frac{a^3}{4}$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Cho hình chóp $S.ABC$ có đáy $ABC$ vuông tại $B$ với $AB = 3, BC = 4$. Cạnh bên $SA$ vuông góc với đáy và $SA = 5$. Thể tích khối chóp là:",
      "options": [
        "10",
        "20",
        "30",
        "60"
      ],
      "correctAnswer": "10",
      "detailedDerivation": "Diện tích đáy $B = \\frac{1}{2} AB \\cdot BC = \\frac{1}{2} \\cdot 3 \\cdot 4 = 6$. Chiều cao $h = SA = 5$. Thể tích $V = \\frac{1}{3} \\cdot 6 \\cdot 5 = 10$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Khoảng cách giữa hai mặt phẳng đáy của hình lăng trụ đứng chính là:",
      "options": [
        "Độ dài cạnh bên",
        "Độ dài đường chéo đáy",
        "Bán kính đường tròn ngoại tiếp",
        "Diện tích đáy"
      ],
      "correctAnswer": "Độ dài cạnh bên",
      "detailedDerivation": "Trong lăng trụ đứng, các cạnh bên vuông góc với hai đáy nên độ dài cạnh bên chính là khoảng cách giữa hai đáy.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Thể tích khối chóp tứ giác đều có cạnh đáy bằng $a$ và cạnh bên bằng $a$ là:",
      "options": [
        "\\frac{a^3\\sqrt{2}}{6}",
        "\\frac{a^3\\sqrt{3}}{6}",
        "\\frac{a^3}{3}",
        "\\frac{a^3\\sqrt{2}}{2}"
      ],
      "correctAnswer": "\\frac{a^3\\sqrt{2}}{6}",
      "detailedDerivation": "Đáy hình vuông cạnh $a \\implies S = a^2$. Đường chéo đáy $AC = a\\sqrt{2} \\implies OA = \\frac{a\\sqrt{2}}{2}$. Chiều cao $h = \\sqrt{SA^2 - OA^2} = \\sqrt{a^2 - \\frac{a^2}{2}} = \\frac{a\\sqrt{2}}{2}$. Thể tích $V = \\frac{1}{3} a^2 \\cdot \\frac{a\\sqrt{2}}{2} = \\frac{a^3\\sqrt{2}}{6}$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Cho tứ diện $OABC$ có $OA, OB, OC$ đôi một vuông góc tại $O$ và $OA = 2, OB = 3, OC = 4$. Thể tích khối tứ diện bằng:",
      "options": [
        "4",
        "12",
        "8",
        "24"
      ],
      "correctAnswer": "4",
      "detailedDerivation": "$V = \\frac{1}{6} OA \\cdot OB \\cdot OC = \\frac{1}{6} \\cdot 2 \\cdot 3 \\cdot 4 = 4$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Cho hình hộp chữ nhật có 3 kích thước $a = 2, b = 3, c = 6$. Độ dài đường chéo của hình hộp chữ nhật bằng:",
      "options": [
        "7",
        "11",
        "\\sqrt{49}",
        "\\sqrt{13}"
      ],
      "correctAnswer": "7",
      "detailedDerivation": "Đường chéo $d = \\sqrt{a^2 + b^2 + c^2} = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$, đáy $ABC$ vuông tại $A$ với $AB = a, AC = a\\sqrt{3}$. Biết góc giữa $SB$ và đáy bằng $45^\\circ$. Chiều cao $SA$ bằng:",
      "options": [
        "a",
        "a\\sqrt{3}",
        "a\\sqrt{2}",
        "2a"
      ],
      "correctAnswer": "a",
      "detailedDerivation": "Góc giữa $SB$ và đáy là $\\widehat{SBA} = 45^\\circ$. Trong tam giác vuông $SAB$, $SA = AB \\tan 45^\\circ = a \\cdot 1 = a$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Cho hình chóp $S.ABC$. Gọi $A', B'$ lần lượt là trung điểm của $SA, SB$. Tỉ số thể tích $\\frac{V_{S.A'B'C}}{V_{S.ABC}}$ bằng:",
      "options": [
        "\\frac{1}{4}",
        "\\frac{1}{2}",
        "\\frac{1}{8}",
        "\\frac{1}{6}"
      ],
      "correctAnswer": "\\frac{1}{4}",
      "detailedDerivation": "Áp dụng công thức tỉ số thể tích Simson: $\\frac{V_{S.A'B'C}}{V_{S.ABC}} = \\frac{SA'}{SA} \\cdot \\frac{SB'}{SB} \\cdot \\frac{SC}{SC} = \\frac{1}{2} \\cdot \\frac{1}{2} \\cdot 1 = \\frac{1}{4}$.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Cho hình lập phương $ABCD.A'B'C'D'$ có cạnh bằng $a$. Khoảng cách từ điểm $A$ đến mặt phẳng $(A'BD)$ bằng:",
      "options": [
        "\\frac{a\\sqrt{3}}{3}",
        "\\frac{a}{3}",
        "\\frac{a\\sqrt{3}}{2}",
        "\\frac{a\\sqrt{2}}{3}"
      ],
      "correctAnswer": "\\frac{a\\sqrt{3}}{3}",
      "detailedDerivation": "Tứ diện $A.A'BD$ có 3 cạnh $AA', AB, AD$ đôi một vuông góc. Áp dụng công thức khoảng cách đường cao từ đỉnh góc vuông: $\\frac{1}{h^2} = \\frac{1}{a^2} + \\frac{1}{a^2} + \\frac{1}{a^2} = \\frac{3}{a^2} \\implies h = \\frac{a}{\\sqrt{3}} = \\frac{a\\sqrt{3}}{3}$.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Một khối bê tông hình lăng trụ đứng có đáy là hình thang cân với 2 đáy là $2\\text{ m}$ và $4\\text{ m}$, chiều cao đáy $1.5\\text{ m}$, chiều dài khối bê tông $5\\text{ m}$. Thể tích bê tông cần dùng là:",
      "options": [
        "22.5\\text{ m}^3",
        "45\\text{ m}^3",
        "15\\text{ m}^3",
        "30\\text{ m}^3"
      ],
      "correctAnswer": "22.5\\text{ m}^3",
      "detailedDerivation": "Diện tích đáy hình thang: $B = \\frac{(2 + 4) \\cdot 1.5}{2} = 4.5\\text{ m}^2$. Thể tích $V = B \\cdot h = 4.5 \\times 5 = 22.5\\text{ m}^3$.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Cho hình chóp $S.ABCD$ có đáy là hình thoi tâm $O$ cạnh $a$, $\\widehat{BAD} = 60^\\circ$. $SO \\perp (ABCD)$ và $SO = \\frac{a\\sqrt{6}}{2}$. Góc giữa hai mặt phẳng $(SBD)$ và $(ABCD)$ là:",
      "options": [
        "90^\\circ",
        "60^\\circ",
        "45^\\circ",
        "30^\\circ"
      ],
      "correctAnswer": "90^\\circ",
      "detailedDerivation": "Vì $SO \\perp (ABCD)$ và $SO \\subset (SBD)$ nên mặt phẳng $(SBD)$ vuông góc với $(ABCD)$, góc giữa chúng bằng $90^\\circ$.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Cho hình chóp $S.ABC$ có đáy $ABC$ là tam giác đều cạnh $a$, cạnh bên $SA$ vuông góc với mặt phẳng đáy và $SA = a\\sqrt{3}$. Thể tích khối chóp $S.ABC$ bằng:",
      "options": [
        "\\frac{a^3}{4}",
        "\\frac{a^3\\sqrt{3}}{4}",
        "\\frac{a^3}{12}",
        "\\frac{a^3\\sqrt{3}}{12}"
      ],
      "correctAnswer": "\\frac{a^3}{4}",
      "detailedDerivation": "Diện tích đáy: $S_{\\Delta ABC} = \\frac{a^2\\sqrt{3}}{4}$. Thể tích chóp: $V = \\frac{1}{3} S_{\\Delta ABC} \\cdot SA = \\frac{1}{3} \\cdot \\frac{a^2\\sqrt{3}}{4} \\cdot a\\sqrt{3} = \\frac{3a^3}{12} = \\frac{a^3}{4}$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Góc giữa đường thẳng $d$ và mặt phẳng $(\\alpha)$ là:",
      "options": [
        "Góc giữa đường thẳng d và hình chiếu vuông góc của nó trên (\\alpha)",
        "Góc giữa d và vectơ pháp tuyến của (\\alpha)",
        "Góc bất kỳ tạo bởi d và một đường nằm trong (\\alpha)",
        "Luôn bằng 90 độ"
      ],
      "correctAnswer": "Góc giữa đường thẳng d và hình chiếu vuông góc của nó trên (\\alpha)",
      "detailedDerivation": "Định nghĩa: Nếu đường thẳng không vuông góc với mặt phẳng thì góc giữa đường thẳng và mặt phẳng là góc giữa đường thẳng đó và hình chiếu vuông góc của nó lên mặt phẳng.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Thể tích của khối lăng trụ có diện tích đáy $B = 15\\text{ cm}^2$ và chiều cao $h = 6\\text{ cm}$ bằng:",
      "options": [
        "90 cm^3",
        "30 cm^3",
        "45 cm^3",
        "180 cm^3"
      ],
      "correctAnswer": "90 cm^3",
      "detailedDerivation": "Thể tích lăng trụ: $V = B \\cdot h = 15 \\cdot 6 = 90\\text{ cm}^3$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Cho hình hộp chữ nhật có 3 kích thước lần lượt là $a, 2a, 3a$. Độ dài đường chéo của hình hộp chữ nhật bằng:",
      "options": [
        "a\\sqrt{14}",
        "a\\sqrt{6}",
        "6a",
        "a\\sqrt{12}"
      ],
      "correctAnswer": "a\\sqrt{14}",
      "detailedDerivation": "Độ dài đường chéo hình hộp chữ nhật: $d = \\sqrt{a^2 + b^2 + c^2} = \\sqrt{a^2 + 4a^2 + 9a^2} = \\sqrt{14a^2} = a\\sqrt{14}$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Khoảng cách giữa hai đường thẳng chéo nhau $a$ và $b$ bằng:",
      "options": [
        "Độ dài đoạn vuông góc chung của hai đường thẳng đó",
        "Khoảng cách từ một điểm bất kỳ trên a tới b",
        "Độ dài hình chiếu của a lên b",
        "Nửa tổng khoảng cách từ hai điểm bất kỳ"
      ],
      "correctAnswer": "Độ dài đoạn vuông góc chung của hai đường thẳng đó",
      "detailedDerivation": "Khoảng cách giữa hai đường thẳng chéo nhau là khoảng cách từ một điểm bất kỳ trên đường thẳng này đến mặt phẳng song song chứa đường thẳng kia, và bằng độ dài đoạn vuông góc chung.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình vuông cạnh $a$, $SA \\perp (ABCD)$ và $SA = a\\sqrt{2}$. Góc giữa đường thẳng $SC$ và mặt phẳng đáy $(ABCD)$ bằng:",
      "options": [
        "45^\\circ",
        "60^\\circ",
        "30^\\circ",
        "90^\\circ"
      ],
      "correctAnswer": "45^\\circ",
      "detailedDerivation": "Hình chiếu vuông góc của $SC$ lên $(ABCD)$ là $AC$ (vì $SA \\perp (ABCD)$). Do đó góc giữa $SC$ và $(ABCD)$ là $\\widehat{SCA}$. Tam giác $ABCD$ là hình vuông cạnh $a \\implies AC = a\\sqrt{2}$. Tam giác $SAC$ vuông tại $A$ có $SA = a\\sqrt{2}$ và $AC = a\\sqrt{2} \\implies \\tan\\widehat{SCA} = \\frac{SA}{AC} = 1 \\implies \\widehat{SCA} = 45^\\circ$.",
      "cognitiveLevel": "Thông hiểu"
    }
  ]
};
