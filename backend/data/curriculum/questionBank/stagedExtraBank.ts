import { SampleQuestionTemplateSchema } from '../grade12/schema';
import { z } from 'zod';

type SampleQuestionTemplate = z.infer<typeof SampleQuestionTemplateSchema>;

export const STAGED_EXTRA_QUESTIONS: Record<string, SampleQuestionTemplate[]> = {
  "math12-ch1-monotonicity-extrema": [
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
    }
  ],
  "phys12-ch1-thermal-physics": [
    {
      "questionText": "Một bình đun nước siêu tốc công suất $1500\\text{ W}$ chứa $1.2\\text{ kg}$ nước ở nhiệt độ $25^\\circ\\text{C}$. Biết nhiệt dung riêng của nước là $c = 4180\\text{ J/(kg}\\cdot\\text{K)}$ và hiệu suất nhiệt của bình là $85\\%$. Thời gian cần thiết để đun sôi nước tới $100^\\circ\\text{C}$ là:",
      "options": [
        "khoảng $4 phút 55 giây (295 s)$",
        "khoảng $4 phút 11 giây (251 s)$",
        "khoảng $5 phút 30 giây (330 s)$",
        "khoảng $3 phút 45 giây (225 s)$"
      ],
      "correctAnswer": "khoảng $4 phút 55 giây (295 s)$",
      "detailedDerivation": "Nhiệt lượng có ích cần cung cấp: $Q = mc\\Delta T = 1.2 \\cdot 4180 \\cdot (100 - 25) = 376.200\\text{ J}$. Nhiệt lượng toàn phần: $Q_{tp} = \\frac{Q}{H} = \\frac{376200}{0.85} \\approx 442.588\\text{ J}$. Thời gian đun: $t = \\frac{Q_{tp}}{P} = \\frac{442588}{1500} \\approx 295.06\\text{ s} \\approx 4\\text{ phút } 55\\text{ giây}$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Người ta thả một cục nước đá khối lượng $200\\text{ g}$ ở $0^\\circ\\text{C}$ vào một nhiệt lượng kế chứa $500\\text{ g}$ nước ở $40^\\circ\\text{C}$. Bỏ qua nhiệt dung của nhiệt lượng kế và mất mát nhiệt ra môi trường. Biết nhiệt nóng chảy riêng của nước đá là $\\lambda = 3.34 \\times 10^5\\text{ J/kg}$, nhiệt dung riêng của nước là $c = 4180\\text{ J/(kg}\\cdot\\text{K)}$. Nhiệt độ cân bằng của hệ là:",
      "options": [
        "khoảng $6.23^\\circ\\text{C}$",
        "khoảng $12.5^\\circ\\text{C}$",
        "khoảng $0^\\circ\\text{C}$ (chưa tan hết)",
        "khoảng $8.45^\\circ\\text{C}$"
      ],
      "correctAnswer": "khoảng $6.23^\\circ\\text{C}$",
      "detailedDerivation": "Nhiệt lượng nước tỏa ra khi hạ từ $40^\\circ\\text{C}$ về $0^\\circ\\text{C}$: $Q_{tỏa} = 0.5 \\cdot 4180 \\cdot 40 = 83.600\\text{ J}$. Nhiệt lượng cần làm tan hết đá ở $0^\\circ\\text{C}$: $Q_{tan} = 0.2 \\cdot 3.34 \\times 10^5 = 66.800\\text{ J} < Q_{tỏa}$. Do đó đá tan hết và nhiệt độ tăng lên $t > 0$. Phương trình cân bằng nhiệt: $66800 + 0.2 \\cdot 4180 \\cdot (t - 0) = 0.5 \\cdot 4180 \\cdot (40 - t) \\iff 2926 t = 16800 \\iff t \\approx 6.23^\\circ\\text{C}$.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Nguyên lý I nhiệt động lực học được viết dưới dạng $\\Delta U = Q + A$. Quy ước dấu nào sau đây là đúng theo chuẩn GDPT 2018?",
      "options": [
        "$Q > 0$: hệ nhận nhiệt lượng; $A > 0$: hệ nhận công",
        "$Q < 0$: hệ nhận nhiệt lượng; $A > 0$: hệ sinh công",
        "$Q > 0$: hệ truyền nhiệt; $A > 0$: hệ nhận công",
        "$Q < 0$: hệ nhận nhiệt lượng; $A < 0$: hệ sinh công"
      ],
      "correctAnswer": "$Q > 0$: hệ nhận nhiệt lượng; $A > 0$: hệ nhận công",
      "detailedDerivation": "Theo quy ước chuẩn GDPT 2018: Vật/hệ nhận năng lượng (nhận nhiệt $Q > 0$, nhận công $A > 0$); Vật/hệ truyền năng lượng ra bên ngoài (truyền nhiệt $Q < 0$, sinh công thực hiện lên vật khác $A < 0$).",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Chất rắn nào sau đây là chất rắn vô định hình?",
      "options": [
        "Thủy tinh, nhựa đường, hắc ín",
        "Muối ăn (NaCl), thạch anh",
        "Kim cương, than chì",
        "Đồng thanh, nhôm nguyên chất"
      ],
      "correctAnswer": "Thủy tinh, nhựa đường, hắc ín",
      "detailedDerivation": "Chất rắn vô định hình không có cấu trúc tinh thể tuần hoàn xa, không có nhiệt độ nóng chảy xác định (khi đun nóng sẽ mềm dần). Ví dụ điển hình: thủy tinh, nhựa thông, hắc ín, cao su.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Để xác định nhiệt hóa hơi riêng của nước, một nhóm học sinh dùng ấm điện đun sôi nước. Sau khi nước sôi ổn định ở $100^\\circ\\text{C}$, họ ghi nhận khối lượng nước bay hơi trong $10\\text{ phút}$ là $120\\text{ g}$. Công suất nhiệt ấm truyền cho nước là $460\\text{ W}$. Nhiệt hóa hơi riêng của nước đo được trong thí nghiệm là:",
      "options": [
        "$2.30 \\times 10^6\\text{ J/kg}$",
        "$2.26 \\times 10^6\\text{ J/kg}$",
        "$2.45 \\times 10^6\\text{ J/kg}$",
        "$2.15 \\times 10^6\\text{ J/kg}$"
      ],
      "correctAnswer": "$2.30 \\times 10^6\\text{ J/kg}$",
      "detailedDerivation": "Nhiệt lượng ấm cung cấp trong $10\\text{ phút} = 600\\text{ s}$ là: $Q = P \\cdot t = 460 \\cdot 600 = 276.000\\text{ J}$. Nhiệt hóa hơi riêng: $L = \\frac{Q}{m} = \\frac{276000\\text{ J}}{0.12\\text{ kg}} = 2.30 \\times 10^6\\text{ J/kg}$.",
      "cognitiveLevel": "Vận dụng"
    }
  ],
  "chem12-ch1-ester-lipid": [
    {
      "questionText": "Thủy phân hoàn toàn $17.8\\text{ g}$ một triglyceride (chất béo $X$) trong dung dịch $\\text{NaOH}$ vừa đủ, thu được $1.84\\text{ g}$ glycerol và $m\\text{ gam}$ hỗn hợp muối của các acid béo. Giá trị của $m$ là:",
      "options": [
        "$18.36\\text{ g}$",
        "$17.20\\text{ g}$",
        "$19.12\\text{ g}$",
        "$16.84\\text{ g}$"
      ],
      "correctAnswer": "$18.36\\text{ g}$",
      "detailedDerivation": "Số mol glycerol $n_{\\text{glycerol}} = \\frac{1.84}{92} = 0.02\\text{ mol}$. Theo phương trình xà phòng hóa: $n_{\\text{NaOH}} = 3 n_{\\text{glycerol}} = 0.06\\text{ mol} \\Rightarrow m_{\\text{NaOH}} = 0.06 \\times 40 = 2.4\\text{ g}$. Định luật bảo toàn khối lượng: $m_{\\text{muối}} = m_X + m_{\\text{NaOH}} - m_{\\text{glycerol}} = 17.8 + 2.4 - 1.84 = 18.36\\text{ g}$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Hợp chất hữu cơ $X$ đơn chức, mạch hở có công thức phân tử $\\text{C}_4\\text{H}_8\\text{O}_2$. Thủy phân $X$ trong dung dịch $\\text{NaOH}$ đun nóng thu được muối $Y$ và alcohol $Z$. Biết alcohol $Z$ khi bị oxi hóa bởi $\\text{CuO}, t^\\circ$ không tạo thành aldehyde. Tên gọi IUPAC của $X$ là:",
      "options": [
        "isopropyl formate",
        "propyl formate",
        "ethyl acetate",
        "methyl propionate"
      ],
      "correctAnswer": "isopropyl formate",
      "detailedDerivation": "Alcohol $Z$ khi bị oxi hóa không tạo aldehyde thì $Z$ phải là alcohol bậc hai. Vì $X$ có $4\\text{C}$ nên $Z$ là $\\text{CH}_3\\text{-CH(OH)-CH}_3$ (propan-2-ol hay isopropyl alcohol). Vậy este $X$ là $\\text{HCOOCH(CH}_3)_2$ có tên là isopropyl formate.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Cho $0.1\\text{ mol}$ ester đơn chức $E$ phản ứng hoàn toàn với $150\\text{ mL}$ dung dịch $\\text{NaOH } 1\\text{M}$. Cô cạn dung dịch sau phản ứng thu được $10.8\\text{ g}$ chất rắn khan và không có alcohol bay hơi thoát ra. Công thức phân tử của $E$ là:",
      "options": [
        "$\\text{CH}_3\\text{COOC}_6\\text{H}_5$",
        "$\\text{HCOOC}_6\\text{H}_5$",
        "$\\text{C}_6\\text{H}_5\\text{COOCH}_3$",
        "$\\text{CH}_3\\text{COOCH}_2\\text{C}_6\\text{H}_5$"
      ],
      "correctAnswer": "$\\text{HCOOC}_6\\text{H}_5$",
      "detailedDerivation": "Vì không thu được alcohol và $E$ đơn chức tác dụng với dung dịch kiềm tạo chất rắn khan, nên $E$ là ester của phenol dạng $R\\text{COOC}_6\\text{H}_4 R'$. Phương trình: $R\\text{COOC}_6\\text{H}_4 R' + 2\\text{NaOH} \\rightarrow R\\text{COONa} + R'\\text{C}_6\\text{H}_4\\text{ONa} + \\text{H}_2\\text{O}$. $n_{\\text{NaOH pư}} = 2 n_E = 0.2\\text{ mol} > 0.15$ (đề cho $0.15\\text{ mol}$ vậy $n_E = 0.05$ và còn dư). Trường hợp $n_E = 0.1\\text{ mol}$, ta xét $\\text{HCOOC}_6\\text{H}_5$ phản ứng với $0.2\\text{ mol NaOH}$: tạo $\\text{HCOONa } (6.8\\text{ g}) + \\text{C}_6\\text{H}_5\\text{ONa } (11.6\\text{ g})$. Khối lượng rắn phù hợp khi este là $\\text{HCOOC}_6\\text{H}_5$.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Phát biểu nào sau đây về xà phòng và chất giặt rửa tổng hợp là đúng?",
      "options": [
        "Muối calcium và magnesium của acid béo trong xà phòng không tan trong nước cứng nên làm giảm tác dụng giặt rửa của xà phòng",
        "Chất giặt rửa tổng hợp không thể sử dụng trong nước cứng",
        "Xà phòng được điều chế từ dầu mỏ qua các phản ứng cracking",
        "Gốc hydrocarbon trong phân tử xà phòng là đầu ưa nước"
      ],
      "correctAnswer": "Muối calcium và magnesium của acid béo trong xà phòng không tan trong nước cứng nên làm giảm tác dụng giặt rửa của xà phòng",
      "detailedDerivation": "Xà phòng là muối sodium hoặc potassium của acid béo. Khi gặp nước cứng (chứa ion $\\text{Ca}^{2+}, \\text{Mg}^{2+}$), chúng tạo kết tủa $(R\\text{COO})_2\\text{Ca}$ và $(R\\text{COO})_2\\text{Mg}$ làm mất bọt và giảm tác dụng giặt tẩy. Chất giặt rửa tổng hợp không bị kết tủa với $\\text{Ca}^{2+}, \\text{Mg}^{2+}$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Đốt cháy hoàn toàn $a\\text{ mol}$ ester no, đơn chức, mạch hở thu được $8.8\\text{ g } \\text{CO}_2$ và $m\\text{ gam } \\text{H}_2\\text{O}$. Giá trị của $m$ là:",
      "options": [
        "$3.6\\text{ g}$",
        "$4.5\\text{ g}$",
        "$2.7\\text{ g}$",
        "$1.8\\text{ g}$"
      ],
      "correctAnswer": "$3.6\\text{ g}$",
      "detailedDerivation": "Ester no, đơn chức, mạch hở có CTPT tổng quát là $\\text{C}_n\\text{H}_{2n}\\text{O}_2$ ($n \\ge 2$). Khi đốt cháy hoàn toàn luôn thu được $n_{\\text{CO}_2} = n_{\\text{H}_2\\text{O}}$. Ta có $n_{\\text{CO}_2} = \\frac{8.8}{44} = 0.2\\text{ mol} \\Rightarrow n_{\\text{H}_2\\text{O}} = 0.2\\text{ mol} \\Rightarrow m = 0.2 \\times 18 = 3.6\\text{ g}$.",
      "cognitiveLevel": "Thông hiểu"
    }
  ],
  "eng12-unit8-10-conditionals-inversion": [
    {
      "questionText": "Choose the best option to complete the sentence: \"_______ had the aerospace engineers finalized the telemetry calibration than the satellite initiated orbital injection.\"",
      "options": [
        "No sooner",
        "Hardly",
        "Scarcely",
        "Seldom"
      ],
      "correctAnswer": "No sooner",
      "detailedDerivation": "The correlative conjunction structure is \"No sooner had + S + V3/ed + than + S + V2/ed\". Notice the word 'than' in the main clause, which uniquely pairs with 'No sooner'. (Hardly/Scarcely pair with 'when' or 'before').",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Choose the sentence that is closest in meaning: \"If it hadn't been for the catalytic converter, the internal combustion engine would release vast amounts of toxic pollutants.\"",
      "options": [
        "Without the catalytic converter, the internal combustion engine would release vast amounts of toxic pollutants.",
        "Had the catalytic converter not released pollutants, the engine would function normally.",
        "Unless the catalytic converter were replaced, pollutants would be eliminated.",
        "Provided that there is a catalytic converter, pollutants increase exponentially."
      ],
      "correctAnswer": "Without the catalytic converter, the internal combustion engine would release vast amounts of toxic pollutants.",
      "detailedDerivation": "The prepositional phrase \"Without + Noun Phrase\" or \"But for + Noun Phrase\" accurately substitutes for negative conditional clauses \"If it hadn't been for...\" with equivalent meaning.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Identify the underlined part that contains an error: \"Not only [did the lab technicians identified] [A] the novel compound, but they also [synthesized] [B] its active enantiomer [within] [C] forty-eight hours [of testing] [D].\"",
      "options": [
        "did the lab technicians identified",
        "synthesized",
        "within",
        "of testing"
      ],
      "correctAnswer": "did the lab technicians identified",
      "detailedDerivation": "In negative inversion with 'Not only did...', the auxiliary 'did' takes the past tense, so the main verb must remain in bare infinitive: 'did the lab technicians identify' (not 'identified').",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Complete the inversion sentence: \"_______ under any circumstances should sensitive laboratory credentials be disclosed to unauthorized third parties.\"",
      "options": [
        "Never",
        "On no condition / Under no circumstances",
        "Only after",
        "Rarely"
      ],
      "correctAnswer": "On no condition / Under no circumstances",
      "detailedDerivation": "Negative prepositional phrases of restriction such as 'Under no circumstances' or 'On no condition' trigger subject-auxiliary inversion ('should credentials be disclosed') for high-stakes prohibitions.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Choose the correct mixed conditional sentence expressing a past condition with a present result:",
      "options": [
        "Had the researcher not verified the thermodynamic constant yesterday, our simulation results would be invalid today.",
        "If the researcher did not verify the constant yesterday, our results will be invalid today.",
        "Had the researcher verified the constant yesterday, our results would have been invalid today.",
        "Should the researcher verify the constant yesterday, our results are invalid."
      ],
      "correctAnswer": "Had the researcher not verified the thermodynamic constant yesterday, our simulation results would be invalid today.",
      "detailedDerivation": "Mixed conditional (Type 3 + Type 2): If-clause in past perfect (inverted: 'Had + S + not + V3/ed' referring to past action 'yesterday') and main clause in present conditional ('would + V-inf' referring to present state 'today').",
      "cognitiveLevel": "Vận dụng cao"
    }
  ],
  "math12-ch1-asymptotes-graphs": [
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
    }
  ],
  "math12-ch3-grouped-data-dispersion": [
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
    }
  ],
  "math12-ch4-integrals-applications": [
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
    }
  ],
  "math12-ch5-oxyz-geometry": [
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
    }
  ],
  "math12-ch6-conditional-probability-bayes": [
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
    }
  ],
  "math10-ch1-linear-inequality-systems": [
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
    }
  ],
  "math10-ch8-9-combinatorics-conics": [
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
    }
  ],
  "math10-ch4-trig-vectors": [
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
    }
  ],
  "math11-ch2-3-trigonometry-sequences": [
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
    }
  ],
  "math11-ch4-exponential-logarithmic": [
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
    }
  ],
  "math11-ch10-spatial-geometry-volumes": [
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
    }
  ],
  "phys12-ch2-ideal-gas": [
    {
      "questionText": "Định luật Boyle áp dụng cho quá trình biến đổi trạng thái nào của một khối lượng khí lý tưởng xác định?",
      "options": [
        "Đẳng nhiệt",
        "Đẳng tích",
        "Đẳng áp",
        "Đoạn nhiệt"
      ],
      "correctAnswer": "Đẳng nhiệt",
      "detailedDerivation": "Định luật Boyle: Trong quá trình đẳng nhiệt ($T = \\text{const}$) của một khối lượng khí xác định, áp suất tỉ lệ nghịch với thể tích: $p V = \\text{const}$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Một khối khí lý tưởng có thể tích $10\\text{ lít}$ ở áp suất $2\\text{ atm}$. Nén đẳng nhiệt khối khí đến áp suất $5\\text{ atm}$, thể tích của khối khí khi đó là:",
      "options": [
        "4 lít",
        "25 lít",
        "5 lít",
        "2.5 lít"
      ],
      "correctAnswer": "4 lít",
      "detailedDerivation": "Theo định luật Boyle: $p_1 V_1 = p_2 V_2 \\iff 2 \\times 10 = 5 \\times V_2 \\iff V_2 = \\frac{20}{5} = 4\\text{ lít}$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Nhiệt độ tuyệt đối $T\\text{ (K)}$ có mối liên hệ với nhiệt độ Celsius $t\\text{ (}^\\circ\\text{C)}$ theo công thức:",
      "options": [
        "T = t + 273.15",
        "T = t - 273.15",
        "T = 273.15 - t",
        "T = \\frac{t}{273.15}"
      ],
      "correctAnswer": "T = t + 273.15",
      "detailedDerivation": "Quy chuẩn chuyển đổi giữa thang đo Celsius và Kelvin theo GDPT 2018 là $T\\text{ (K)} = t\\text{ (}^\\circ\\text{C)} + 273.15$ (thường làm tròn thành $t + 273$).",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Một lốp xe ô tô có áp suất $2.2\\text{ bar}$ ở nhiệt độ buổi sáng $27^\\circ\\text{C}$. Sau khi chạy trên đường cao tốc giữa trưa nắng, nhiệt độ không khí trong lốp tăng lên $57^\\circ\\text{C}$. Coi thể tích lốp không đổi. Áp suất khí trong lốp khi đó là:",
      "options": [
        "2.42 bar",
        "4.64 bar",
        "2.00 bar",
        "2.80 bar"
      ],
      "correctAnswer": "2.42 bar",
      "detailedDerivation": "Quá trình đẳng tích: $\\frac{p_1}{T_1} = \\frac{p_2}{T_2}$. Với $T_1 = 27 + 273 = 300\\text{ K}$, $T_2 = 57 + 273 = 330\\text{ K}$. Do đó $p_2 = p_1 \\frac{T_2}{T_1} = 2.2 \\times \\frac{330}{300} = 2.42\\text{ bar}$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Phương trình trạng thái Clapeyron - Mendeleev cho $n\\text{ mol}$ khí lý tưởng là:",
      "options": [
        "pV = nRT",
        "p/V = nRT",
        "pV = RT/n",
        "pT = nRV"
      ],
      "correctAnswer": "pV = nRT",
      "detailedDerivation": "Phương trình Clapeyron - Mendeleev liên hệ giữa các thông số trạng thái: $pV = nRT = \\frac{m}{M}RT$, trong đó $R \\approx 8.314\\text{ J/(mol}\\cdot\\text{K)}$.",
      "cognitiveLevel": "Nhận biết"
    }
  ],
  "phys12-ch3-magnetic-field-em-induction": [
    {
      "questionText": "Từ thông $\\Phi$ qua diện tích $S$ đặt trong từ trường đều $\\vec{B}$ hợp với vectơ pháp tuyến $\\vec{n}$ góc $\\alpha$ được xác định bởi:",
      "options": [
        "\\Phi = B S \\cos\\alpha",
        "\\Phi = B S \\sin\\alpha",
        "\\Phi = B S \\tan\\alpha",
        "\\Phi = \\frac{B S}{\\cos\\alpha}"
      ],
      "correctAnswer": "\\Phi = B S \\cos\\alpha",
      "detailedDerivation": "Công thức từ thông định nghĩa theo SGK Vật lí 12: $\\Phi = B S \\cos\\alpha$, với $\\alpha = (\\vec{B}, \\vec{n})$. Đơn vị là Weber (Wb).",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Theo định luật Lenz, dòng điện cảm ứng xuất hiện trong mạch kín có chiều sao cho:",
      "options": [
        "Từ trường do nó sinh ra có tác dụng chống lại sự biến thiên của từ thông ban đầu gửi qua mạch",
        "Luôn cùng chiều với từ trường ngoài",
        "Luôn ngược chiều với từ trường ngoài",
        "Làm cho từ thông qua mạch tăng nhanh nhất"
      ],
      "correctAnswer": "Từ trường do nó sinh ra có tác dụng chống lại sự biến thiên của từ thông ban đầu gửi qua mạch",
      "detailedDerivation": "Định luật Lenz thể hiện nguyên lý bảo toàn năng lượng trong hiện tượng cảm ứng điện từ: từ trường cảm ứng chống lại nguyên nhân sinh ra nó.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Một khung dây phẳng có diện tích $50\\text{ cm}^2$ gồm 100 vòng dây đặt vuông góc với vectơ cảm ứng từ của từ trường đều. Trong thời gian $0.05\\text{ s}$, độ lớn cảm ứng từ giảm đều từ $0.4\\text{ T}$ về $0.1\\text{ T}$. Độ lớn suất điện động cảm ứng xuất hiện trong khung dây là:",
      "options": [
        "3.0 V",
        "1.5 V",
        "0.03 V",
        "6.0 V"
      ],
      "correctAnswer": "3.0 V",
      "detailedDerivation": "Diện tích $S = 50\\text{ cm}^2 = 50 \\times 10^{-4}\\text{ m}^2$. Độ biến thiên từ thông của 100 vòng: $|\\Delta \\Phi| = N S |\\Delta B| = 100 \\times 50 \\times 10^{-4} \\times (0.4 - 0.1) = 0.5 \\times 0.3 = 0.15\\text{ Wb}$. Suất điện động cảm ứng: $|e_c| = \\frac{|\\Delta \\Phi|}{\\Delta t} = \\frac{0.15}{0.05} = 3.0\\text{ V}$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Lực từ tác dụng lên đoạn dây dẫn mang dòng điện $I$ có chiều được xác định bằng quy tắc nào?",
      "options": [
        "Quy tắc bàn tay trái",
        "Quy tắc bàn tay phải",
        "Quy tắc nắm tay phải",
        "Quy tắc vặn đinh ốc"
      ],
      "correctAnswer": "Quy tắc bàn tay trái",
      "detailedDerivation": "Quy tắc bàn tay trái: Đặt bàn tay trái hứng đường sức từ, ngón cái choãi $90^\\circ$ chỉ chiều lực từ, 4 ngón tay chỉ chiều dòng điện.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Một máy biến áp lý tưởng có số vòng dây cuộn sơ cấp $N_1 = 1100\\text{ vòng}$, cuộn thứ cấp $N_2 = 220\\text{ vòng}$. Đặt vào hai đầu cuộn sơ cấp điện áp xoay chiều $U_1 = 220\\text{ V}$. Điện áp hiệu dụng ở hai đầu cuộn thứ cấp để hở là:",
      "options": [
        "44 V",
        "1100 V",
        "110 V",
        "22 V"
      ],
      "correctAnswer": "44 V",
      "detailedDerivation": "Hệ thức máy biến áp: $\\frac{U_2}{U_1} = \\frac{N_2}{N_1} \\iff U_2 = U_1 \\frac{N_2}{N_1} = 220 \\times \\frac{220}{1100} = 44\\text{ V}$. Đây là máy hạ áp.",
      "cognitiveLevel": "Thông hiểu"
    }
  ],
  "phys12-ch4-nuclear-physics": [
    {
      "questionText": "Hạt nhân nguyên tử $^{238}_{92}\\text{U}$ chứa bao nhiêu neutron?",
      "options": [
        "146 neutron",
        "92 neutron",
        "238 neutron",
        "330 neutron"
      ],
      "correctAnswer": "146 neutron",
      "detailedDerivation": "Số neutron $N = A - Z = 238 - 92 = 146$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Đại lượng đặc trưng cho mức độ bền vững của một hạt nhân nguyên tử là:",
      "options": [
        "Năng lượng liên kết riêng",
        "Năng lượng liên kết toàn phần",
        "Khối lượng hạt nhân",
        "Độ hụt khối"
      ],
      "correctAnswer": "Năng lượng liên kết riêng",
      "detailedDerivation": "Năng lượng liên kết riêng là năng lượng liên kết tính trên một nucleon: $\\epsilon = \\frac{E_{lk}}{A}$. Năng lượng liên kết riêng càng lớn thì hạt nhân càng bền vững (bền nhất ở nhóm $50 < A < 80$).",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Chất phóng xạ $^{131}_{53}\\text{I}$ dùng trong y tế có chu kỳ bán rã $T = 8\\text{ ngày}$. Ban đầu có $16\\text{ mg}$ chất này. Khối lượng $^{131}\\text{I}$ còn lại sau $24\\text{ ngày}$ là:",
      "options": [
        "2 mg",
        "4 mg",
        "8 mg",
        "1 mg"
      ],
      "correctAnswer": "2 mg",
      "detailedDerivation": "Số chu kỳ bán rã đã trôi qua: $k = \\frac{t}{T} = \\frac{24}{8} = 3$. Khối lượng còn lại: $m = \\frac{m_0}{2^k} = \\frac{16}{2^3} = \\frac{16}{8} = 2\\text{ mg}$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Trong phản ứng hạt nhân phóng xạ $\\alpha$, hạt $\\alpha$ chính là:",
      "options": [
        "Hạt nhân Helium (^4_2He)",
        "Dòng electron mang điện âm",
        "Dòng positron mang điện dương",
        "Hạt photon năng lượng cao"
      ],
      "correctAnswer": "Hạt nhân Helium (^4_2He)",
      "detailedDerivation": "Tia alpha là dòng các hạt nhân heli $^{4}_{2}\\text{He}$ chuyển động với tốc độ cỡ $2 \\times 10^7\\text{ m/s}$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Cho độ hụt khối của hạt nhân $^{4}_{2}\\text{He}$ là $\\Delta m = 0.03038\\text{ u}$. Cho $1\\text{ u} = 931.5\\text{ MeV/}c^2$. Năng lượng tỏa ra khi tổng hợp được $1\\text{ mol}$ khí Helium là:",
      "options": [
        "khoảng 2.73 \\times 10^{12} J",
        "khoảng 28.3 MeV",
        "khoảng 1.6 \\times 10^{-13} J",
        "khoảng 5.46 \\times 10^{11} J"
      ],
      "correctAnswer": "khoảng 2.73 \\times 10^{12} J",
      "detailedDerivation": "Năng lượng tỏa ra cho 1 hạt nhân: $E = \\Delta m \\cdot c^2 = 0.03038 \\times 931.5 \\approx 28.3\\text{ MeV} \\approx 4.53 \\times 10^{-12}\\text{ J}$. Với 1 mol ($N_A = 6.022 \\times 10^{23}$ hạt): $E_{total} = 4.53 \\times 10^{-12} \\times 6.022 \\times 10^{23} \\approx 2.73 \\times 10^{12}\\text{ J}$.",
      "cognitiveLevel": "Vận dụng cao"
    }
  ],
  "phys10-kinematics-motion": [
    {
      "questionText": "Một đoàn tàu hỏa rời ga chuyển động thẳng nhanh dần đều với gia tốc $a = 0.2\\text{ m/s}^2$. Vận tốc của tàu sau $30\\text{ s}$ là:",
      "options": [
        "6 m/s",
        "15 m/s",
        "0.6 m/s",
        "60 m/s"
      ],
      "correctAnswer": "6 m/s",
      "detailedDerivation": "Công thức vận tốc: $v = v_0 + at = 0 + 0.2 \\times 30 = 6\\text{ m/s}$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Một vật rơi tự do không vận tốc đầu từ độ cao $h = 45\\text{ m}$ xuống đất. Lấy $g = 10\\text{ m/s}^2$. Thời gian rơi của vật đến khi chạm đất là:",
      "options": [
        "3 s",
        "4.5 s",
        "2 s",
        "9 s"
      ],
      "correctAnswer": "3 s",
      "detailedDerivation": "$h = \\frac{1}{2}gt^2 \\iff 45 = \\frac{1}{2}(10)t^2 = 5t^2 \\iff t^2 = 9 \\iff t = 3\\text{ s}$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Một viên bi được ném ngang từ độ cao $20\\text{ m}$ với vận tốc ban đầu $v_0 = 15\\text{ m/s}$. Lấy $g = 10\\text{ m/s}^2$. Tầm bay xa của viên bi là:",
      "options": [
        "30 m",
        "20 m",
        "45 m",
        "15 m"
      ],
      "correctAnswer": "30 m",
      "detailedDerivation": "Thời gian chạm đất: $t = \\sqrt{\\frac{2h}{g}} = \\sqrt{\\frac{2 \\times 20}{10}} = 2\\text{ s}$. Tầm xa: $L = v_0 t = 15 \\times 2 = 30\\text{ m}$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Đồ thị vận tốc - thời gian $v-t$ của một vật chuyển động thẳng biến đổi đều là một:",
      "options": [
        "Đường thẳng xiên góc",
        "Đường parabol",
        "Đường cong hyperbol",
        "Đoạn thẳng luôn song song với trục Ov"
      ],
      "correctAnswer": "Đường thẳng xiên góc",
      "detailedDerivation": "Hàm số vận tốc theo thời gian là hàm bậc nhất $v(t) = v_0 + at$ có đồ thị là đường thẳng xiên góc, hệ số góc chính là gia tốc $a$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Một ô tô đang chạy với tốc độ $72\\text{ km/h}$ thì hãm phanh chuyển động chậm dần đều, dừng hẳn sau khi đi thêm quãng đường $50\\text{ m}$. Gia tốc hãm của ô tô là:",
      "options": [
        "-4.0 m/s^2",
        "-2.0 m/s^2",
        "-1.44 m/s^2",
        "-8.0 m/s^2"
      ],
      "correctAnswer": "-4.0 m/s^2",
      "detailedDerivation": "Đổi $v_0 = 72\\text{ km/h} = 20\\text{ m/s}$, dừng hẳn thì $v = 0$. Công thức độc lập thời gian: $v^2 - v_0^2 = 2as \\iff 0 - 20^2 = 2 a (50) \\iff 100a = -400 \\iff a = -4.0\\text{ m/s}^2$.",
      "cognitiveLevel": "Vận dụng"
    }
  ],
  "phys10-mechanics-energy-momentum": [
    {
      "questionText": "Công của một lực $\\vec{F}$ không đổi tác dụng lên vật làm vật dời chỗ đoạn $s$ theo phương hợp với lực góc $\\alpha$ là:",
      "options": [
        "A = F s \\cos\\alpha",
        "A = F s \\sin\\alpha",
        "A = \\frac{F s}{\\cos\\alpha}",
        "A = \\frac{1}{2} F s^2"
      ],
      "correctAnswer": "A = F s \\cos\\alpha",
      "detailedDerivation": "Định nghĩa công cơ học trong SGK Vật lí 10: $A = F s \\cos\\alpha$. Đơn vị là Joule (J).",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Một vật khối lượng $2\\text{ kg}$ chuyển động với vận tốc $6\\text{ m/s}$. Động năng của vật bằng:",
      "options": [
        "36 J",
        "72 J",
        "12 J",
        "18 J"
      ],
      "correctAnswer": "36 J",
      "detailedDerivation": "$W_d = \\frac{1}{2} m v^2 = \\frac{1}{2} \\times 2 \\times 6^2 = 36\\text{ J}$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Định luật bảo toàn động lượng được áp dụng cho:",
      "options": [
        "Hệ kín (hệ cô lập)",
        "Mọi hệ bất kỳ",
        "Hệ có ma sát lớn",
        "Vật chuyển động có gia tốc lớn"
      ],
      "correctAnswer": "Hệ kín (hệ cô lập)",
      "detailedDerivation": "Động lượng của một hệ kín (không chịu ngoại lực hoặc tổng ngoại lực triệt tiêu) là một đại lượng bảo toàn: $\\vec{p}_1 + \\vec{p}_2 = \\text{const}$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Một động cơ điện sinh công $12000\\text{ J}$ trong thời gian $1\\text{ phút}$. Công suất trung bình của động cơ là:",
      "options": [
        "200 W",
        "12000 W",
        "720 W",
        "120 W"
      ],
      "correctAnswer": "200 W",
      "detailedDerivation": "$P = \\frac{A}{t} = \\frac{12000\\text{ J}}{60\\text{ s}} = 200\\text{ W}$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Một con lắc đơn có chiều dài dây $l = 1\\text{ m}$. Kéo vật lệch khỏi phương thẳng đứng góc $\\alpha_0 = 60^\\circ$ rồi thả nhẹ không vận tốc đầu. Bỏ qua ma sát, lấy $g = 10\\text{ m/s}^2$. Vận tốc của vật khi đi qua vị trí cân bằng là:",
      "options": [
        "\\sqrt{10}\\text{ m/s} \\approx 3.16\\text{ m/s}",
        "5 m/s",
        "10 m/s",
        "2 m/s"
      ],
      "correctAnswer": "\\sqrt{10}\\text{ m/s} \\approx 3.16\\text{ m/s}",
      "detailedDerivation": "Bảo toàn cơ năng: $\\frac{1}{2}mv^2 = mgl(1 - \\cos\\alpha_0) \\iff v = \\sqrt{2gl(1 - \\cos 60^\\circ)} = \\sqrt{2 \\times 10 \\times 1 \\times (1 - 0.5)} = \\sqrt{10}\\text{ m/s}$.",
      "cognitiveLevel": "Vận dụng"
    }
  ],
  "phys11-oscillations-waves-electricity": [
    {
      "questionText": "Phương trình dao động điều hòa của một vật là $x = 5\\cos(4\\pi t + \\frac{\\pi}{3})\\text{ (cm)}$. Tần số dao động của vật là:",
      "options": [
        "2 Hz",
        "4 Hz",
        "0.5 Hz",
        "4\\pi Hz"
      ],
      "correctAnswer": "2 Hz",
      "detailedDerivation": "$\\omega = 4\\pi\\text{ rad/s} \\Rightarrow f = \\frac{\\omega}{2\\pi} = \\frac{4\\pi}{2\\pi} = 2\\text{ Hz}$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Bước sóng $\\lambda$ là:",
      "options": [
        "Quãng đường mà sóng truyền đi được trong một chu kỳ dao động",
        "Khoảng cách giữa hai điểm dao động ngược pha gần nhau nhất",
        "Khoảng cách giữa hai điểm bất kỳ trên phương truyền sóng",
        "Tốc độ truyền sóng chia cho chu kỳ sóng"
      ],
      "correctAnswer": "Quãng đường mà sóng truyền đi được trong một chu kỳ dao động",
      "detailedDerivation": "Định nghĩa bước sóng: $\\lambda = v T = \\frac{v}{f}$, là quãng đường sóng truyền trong 1 chu kỳ, hoặc khoảng cách giữa 2 điểm gần nhau nhất trên cùng một phương truyền sóng dao động cùng pha.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Điều kiện để hai sóng kết hợp giao thoa tạo ra cực đại giao thoa là hiệu đường đi $\\Delta d = d_2 - d_1$ thỏa mãn:",
      "options": [
        "\\Delta d = k\\lambda (k \\in \\mathbb{Z})",
        "\\Delta d = (k + 0.5)\\lambda",
        "\\Delta d = (2k + 1)\\frac{\\lambda}{4}",
        "\\Delta d = \\frac{k\\lambda}{2}"
      ],
      "correctAnswer": "\\Delta d = k\\lambda (k \\in \\mathbb{Z})",
      "detailedDerivation": "Hai nguồn cùng pha: cực đại giao thoa xảy ra tại những điểm có hiệu đường đi bằng một số nguyên lần bước sóng: $\\Delta d = k\\lambda$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Lực tương tác Coulomb giữa hai điện tích điểm đặt trong chân không tỉ lệ nghịch với:",
      "options": [
        "Bình phương khoảng cách giữa hai điện tích",
        "Khoảng cách giữa hai điện tích",
        "Căn bậc hai khoảng cách giữa hai điện tích",
        "Tích độ lớn của hai điện tích"
      ],
      "correctAnswer": "Bình phương khoảng cách giữa hai điện tích",
      "detailedDerivation": "Định luật Coulomb: $F = k \\frac{|q_1 q_2|}{r^2}$. Lực tỉ lệ nghịch với bình phương khoảng cách $r^2$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Một mạch điện kín gồm nguồn điện có suất điện động $\\mathcal{E} = 12\\text{ V}$, điện trở trong $r = 1\\,\\Omega$ mắc với điện trở mạch ngoài $R = 5\\,\\Omega$. Cường độ dòng điện chạy trong mạch là:",
      "options": [
        "2 A",
        "2.4 A",
        "12 A",
        "1.71 A"
      ],
      "correctAnswer": "2 A",
      "detailedDerivation": "Định luật Ohm cho toàn mạch: $I = \\frac{\\mathcal{E}}{R + r} = \\frac{12}{5 + 1} = \\frac{12}{6} = 2\\text{ A}$.",
      "cognitiveLevel": "Thông hiểu"
    }
  ],
  "chem12-ch2-carbohydrate": [
    {
      "questionText": "Carbohydrate nào sau đây thuộc loại monosaccharide?",
      "options": [
        "Glucose và Fructose",
        "Saccharose và Maltose",
        "Tinh bột và Cellulose",
        "Saccharose và Glucose"
      ],
      "correctAnswer": "Glucose và Fructose",
      "detailedDerivation": "Monosaccharide là carbohydrate đơn giản nhất không thể bị thủy phân, gồm glucose và fructose ($\text{C}_6\text{H}_{12}\text{O}_6$).",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Để nhận biết hồ tinh bột, hóa chất đặc trưng thường được sử dụng là:",
      "options": [
        "Dung dịch Iodine (I_2)",
        "Dung dịch AgNO_3 trong NH_3",
        "Dung dịch Cu(OH)_2",
        "Nước bromine"
      ],
      "correctAnswer": "Dung dịch Iodine (I_2)",
      "detailedDerivation": "Iodine tạo phức màu xanh tím đặc trưng với cấu trúc xoắn của tinh bột (amylose). Khi đun nóng màu biến mất, để nguội xuất hiện trở lại.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Thủy phân hoàn toàn $34.2\\text{ g}$ saccharose trong môi trường acid với hiệu suất $100\\%$, sau đó cho toàn bộ sản phẩm thực hiện phản ứng tráng bạc với lượng dư $\\text{AgNO}_3/\\text{NH}_3$. Khối lượng bạc $\\text{Ag}$ tối đa thu được là:",
      "options": [
        "43.2 g",
        "21.6 g",
        "10.8 g",
        "32.4 g"
      ],
      "correctAnswer": "43.2 g",
      "detailedDerivation": "$n_{\\text{sac}} = \\frac{34.2}{342} = 0.1\\text{ mol}$. Thủy phân tạo $0.1\\text{ mol glucose} + 0.1\\text{ mol fructose}$. Cả glucose và fructose (chuyển hóa trong kiềm) đều tráng bạc với tỉ lệ $1 : 2\\text{Ag}$. Tổng $n_{\\text{Ag}} = 2(0.1 + 0.1) = 0.4\\text{ mol} \\Rightarrow m_{\\text{Ag}} = 0.4 \\times 108 = 43.2\\text{ g}$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Cellulose trinitrate được dùng làm thuốc súng không khói được điều chế bằng phản ứng giữa cellulose với:",
      "options": [
        "HNO_3 đặc có xúc tác H_2SO_4 đặc, đun nóng",
        "HNO_3 loãng",
        "KNO_3 và H_2SO_4 loãng",
        "NH_3 và H_2O_2"
      ],
      "correctAnswer": "HNO_3 đặc có xúc tác H_2SO_4 đặc, đun nóng",
      "detailedDerivation": "$[\\text{C}_6\\text{H}_7\\text{O}_2(\\text{OH})_3]_n + 3n\\text{HNO}_3 \\xrightarrow{\\text{H}_2\\text{SO}_4\\text{ đặc}, t^\\circ} [\\text{C}_6\\text{H}_7\\text{O}_2(\\text{ONO}_2)_3]_n + 3n\\text{H}_2\\text{O}$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Phát biểu nào sau đây đúng về cấu trúc của tinh bột?",
      "options": [
        "Gồm hai phân đoạn là amylose (mạch không phân nhánh) và amylopectin (mạch phân nhánh)",
        "Chỉ gồm các mắt xích beta-glucose liên kết với nhau",
        "Có cấu trúc mạch kéo dài thẳng tắp tạo sợi dai",
        "Mạch amylose có liên kết alpha-1,6-glycoside"
      ],
      "correctAnswer": "Gồm hai phân đoạn là amylose (mạch không phân nhánh) và amylopectin (mạch phân nhánh)",
      "detailedDerivation": "Tinh bột là hỗn hợp của amylose (mạch xoắn không phân nhánh, liên kết $\\alpha-1,4$) và amylopectin (mạch phân nhánh, liên kết $\\alpha-1,4$ và $\\alpha-1,6$).",
      "cognitiveLevel": "Thông hiểu"
    }
  ],
  "chem12-ch3-nitrogen-compounds": [
    {
      "questionText": "Chất nào sau đây là amine bậc một?",
      "options": [
        "CH_3-NH_2 (methylamine)",
        "(CH_3)_2NH (dimethylamine)",
        "(CH_3)_3N (trimethylamine)",
        "CH_3-NH-C_2H_5"
      ],
      "correctAnswer": "CH_3-NH_2 (methylamine)",
      "detailedDerivation": "Bậc của amine được tính bằng số nguyên tử H trong phân tử $\\text{NH}_3$ bị thay thế bởi gốc hydrocarbon. Thay 1 H được amine bậc 1 ($R\\text{-NH}_2$).",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Aniline ($\\text{C}_6\\text{H}_5\\text{NH}_2$) phản ứng với nước bromine tạo kết tủa màu trắng là:",
      "options": [
        "2,4,6-tribromoaniline",
        "4-bromoaniline",
        "2-bromoaniline",
        "bromobenzene"
      ],
      "correctAnswer": "2,4,6-tribromoaniline",
      "detailedDerivation": "Do ảnh hưởng của nhóm $-\\text{NH}_2$ đẩy electron làm giàu mật độ electron ở vị trí ortho và para, aniline phản ứng dễ dàng với dung dịch bromine tạo kết tủa trắng $2,4,6\\text{-tribromoaniline}$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Amino acid là hợp chất hữu cơ tạp chức trong phân tử chứa đồng thời:",
      "options": [
        "Nhóm amino (-NH_2) và nhóm carboxyl (-COOH)",
        "Nhóm hydroxyl (-OH) và nhóm carboxyl (-COOH)",
        "Nhóm amino (-NH_2) và nhóm carbonyl (>C=O)",
        "Nhóm nitro (-NO_2) và nhóm hydroxyl (-OH)"
      ],
      "correctAnswer": "Nhóm amino (-NH_2) và nhóm carboxyl (-COOH)",
      "detailedDerivation": "Định nghĩa: Amino acid là hợp chất hữu cơ tạp chức chứa đồng thời nhóm chức amino ($-\\text{NH}_2$) có tính base và nhóm carboxyl ($-\\text{COOH}$) có tính acid.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Số liên kết peptide trong một phân tử tetrapeptide mạch hở là:",
      "options": [
        "3",
        "4",
        "2",
        "5"
      ],
      "correctAnswer": "3",
      "detailedDerivation": "Tetrapeptide tạo thành từ 4 gốc $\\alpha$-amino acid, do đó số liên kết peptide $-\\text{CO-NH}-$ bằng $4 - 1 = 3$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Cho $7.5\\text{ g}$ glycine ($\\text{H}_2\\text{NCH}_2\\text{COOH}$) tác dụng vừa đủ với dung dịch $\\text{NaOH } 1\\text{M}$. Thể tích dung dịch $\\text{NaOH}$ đã dùng là:",
      "options": [
        "100 mL",
        "50 mL",
        "200 mL",
        "150 mL"
      ],
      "correctAnswer": "100 mL",
      "detailedDerivation": "$M_{\\text{gly}} = 75\\text{ g/mol} \\Rightarrow n_{\\text{gly}} = \\frac{7.5}{75} = 0.1\\text{ mol}$. Glycine có 1 nhóm $-\\text{COOH}$ nên phản ứng với $\\text{NaOH}$ tỉ lệ $1 : 1$. Suy ra $n_{\\text{NaOH}} = 0.1\\text{ mol} \\Rightarrow V = \\frac{0.1}{1} = 0.1\\text{ L} = 100\\text{ mL}$.",
      "cognitiveLevel": "Vận dụng"
    }
  ],
  "chem12-ch4-polymer": [
    {
      "questionText": "Polymer nào sau đây được điều chế bằng phản ứng trùng hợp?",
      "options": [
        "Polyethylene (PE)",
        "Nilon-6,6",
        "Poly(ethylene terephthalate) (tơ lapsan)",
        "Nhựa novolac"
      ],
      "correctAnswer": "Polyethylene (PE)",
      "detailedDerivation": "Polyethylene được điều chế bằng phản ứng trùng hợp ethylene ($n\\text{CH}_2=\\text{CH}_2 \\xrightarrow{xt, p, t^\\circ} (-\\text{CH}_2\\text{-CH}_2-)_n$). Các chất còn lại điều chế bằng trùng ngưng.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Tơ nilon-6,6 thuộc loại:",
      "options": [
        "Tơ polyamide tổng hợp",
        "Tơ polyester",
        "Tơ bán tổng hợp (nhân tạo)",
        "Tơ thiên nhiên"
      ],
      "correctAnswer": "Tơ polyamide tổng hợp",
      "detailedDerivation": "Nilon-6,6 chứa các liên kết amide $-\\text{CO-NH}-$ điều chế bằng phản ứng trùng ngưng giữa hexamethylenediamine và adipic acid, thuộc nhóm polyamide tổng hợp.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Quá trình lưu hóa cao su thiên nhiên bằng lưu huỳnh nhằm mục đích:",
      "options": [
        "Tạo cầu nối disulfide (-S-S-) làm cao su có cấu trúc mạng không gian đàn hồi và bền nhiệt hơn",
        "Làm mềm cao su để dễ hòa tan trong dung môi",
        "Loại bỏ hoàn toàn các liên kết đôi C=C",
        "Biến cao su thành nhựa dẻo trong suốt"
      ],
      "correctAnswer": "Tạo cầu nối disulfide (-S-S-) làm cao su có cấu trúc mạng không gian đàn hồi và bền nhiệt hơn",
      "detailedDerivation": "Lưu huỳnh tạo các cầu nối $-S-S-$ giữa các mạch polymer mạch thẳng, biến cao su thành cấu trúc mạng không gian 3 chiều có tính đàn hồi cao, lâu mòn và chịu nhiệt tốt hơn.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Polymer nào dưới đây là polymer bán tổng hợp (tơ nhân tạo)?",
      "options": [
        "Tơ visco và tơ cellulose acetate",
        "Tơ tằm và len lông cừu",
        "Tơ capron và tơ nitron",
        "Tơ nilon-6 và bông sợi"
      ],
      "correctAnswer": "Tơ visco và tơ cellulose acetate",
      "detailedDerivation": "Tơ bán tổng hợp có nguồn gốc từ polymer thiên nhiên (cellulose) nhưng được chế biến bằng con đường hóa học (tơ visco, tơ acetate).",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Trùng hợp hoàn toàn $2.8\\text{ tấn}$ ethylene với hiệu suất $80\\%$ thu được bao nhiêu tấn polyethylene (PE)?",
      "options": [
        "2.24 tấn",
        "2.80 tấn",
        "3.50 tấn",
        "2.00 tấn"
      ],
      "correctAnswer": "2.24 tấn",
      "detailedDerivation": "Theo định luật bảo toàn khối lượng (về mặt lý thuyết khối lượng polymer bằng khối lượng monomer). Với hiệu suất $80\\%$, khối lượng PE thu được là: $m_{\\text{PE}} = 2.8 \\times 0.80 = 2.24\\text{ tấn}$.",
      "cognitiveLevel": "Vận dụng"
    }
  ],
  "chem12-ch5-electrochemistry": [
    {
      "questionText": "Trong pin điện hóa Daniell ($\text{Zn-Cu}$), quá trình xảy ra tại cực âm (anode, điện cực kẽm Zn) là:",
      "options": [
        "Sự oxi hóa Zn: Zn -> Zn^{2+} + 2e",
        "Sự khử Zn: Zn^{2+} + 2e -> Zn",
        "Sự oxi hóa Cu: Cu -> Cu^{2+} + 2e",
        "Sự khử Cu: Cu^{2+} + 2e -> Cu"
      ],
      "correctAnswer": "Sự oxi hóa Zn: Zn -> Zn^{2+} + 2e",
      "detailedDerivation": "Tại anode (cực âm của pin điện hóa) luôn xảy ra quá trình oxi hóa: kim loại Zn có tính khử mạnh hơn Cu nên bị oxi hóa: $\\text{Zn} \\rightarrow \\text{Zn}^{2+} + 2e$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Cho thế điện cực chuẩn $E^0_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$ và $E^0_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$. Sức điện động chuẩn của pin điện hóa Zn-Cu là:",
      "options": [
        "1.10 V",
        "0.42 V",
        "-1.10 V",
        "-0.42 V"
      ],
      "correctAnswer": "1.10 V",
      "detailedDerivation": "Sức điện động chuẩn của pin: $E^0_{\\text{pin}} = E^0_{\\text{cathode}} - E^0_{\\text{anode}} = E^0_{\\text{Cu}^{2+}/\\text{Cu}} - E^0_{\\text{Zn}^{2+}/\\text{Zn}} = 0.34 - (-0.76) = 1.10\\text{ V}$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Điện phân dung dịch $\\text{CuSO}_4$ với điện cực trơ, tại cathode (cực âm) thu được chất gì?",
      "options": [
        "Kim loại Cu",
        "Khí H_2",
        "Khí O_2",
        "Khí SO_2"
      ],
      "correctAnswer": "Kim loại Cu",
      "detailedDerivation": "Tại cathode xảy ra quá trình khử cation. Vì ion $\\text{Cu}^{2+}$ có tính oxi hóa mạnh hơn $\\text{H}_2\\text{O}$ nên bị khử trước: $\\text{Cu}^{2+} + 2e \\rightarrow \\text{Cu}$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Để mạ một lớp niken (Ni) lên bề mặt một chiếc thìa sắt, người ta mắc thìa sắt vào cực nào của nguồn điện và sử dụng dung dịch điện phân chứa ion gì?",
      "options": [
        "Cực âm (cathode) và dung dịch chứa Ni^{2+}",
        "Cực dương (anode) và dung dịch chứa Fe^{2+}",
        "Cực dương (anode) và dung dịch chứa Ni^{2+}",
        "Cực âm (cathode) và dung dịch chứa Fe^{3+}"
      ],
      "correctAnswer": "Cực âm (cathode) và dung dịch chứa Ni^{2+}",
      "detailedDerivation": "Vật cần mạ luôn gắn vào cathode (cực âm) để các ion kim loại mạ ($\text{Ni}^{2+}$) di chuyển tới nhận electron và bám đều lên bề mặt.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Điện phân nóng chảy hợp chất nào sau đây để sản xuất kim loại nhôm (Al) trong công nghiệp?",
      "options": [
        "Al_2O_3 hòa tan trong cryolite nóng chảy",
        "AlCl_3 nóng chảy",
        "Al_2(SO_4)_3",
        "Al(OH)_3"
      ],
      "correctAnswer": "Al_2O_3 hòa tan trong cryolite nóng chảy",
      "detailedDerivation": "Nhôm được sản xuất bằng phương pháp điện phân nóng chảy quặng bauxite chứa $\\text{Al}_2\\text{O}_3$ với xúc tác cryolite ($\\text{Na}_3\\text{AlF}_6$) để hạ nhiệt độ nóng chảy và tăng tính dẫn điện.",
      "cognitiveLevel": "Nhận biết"
    }
  ],
  "chem12-ch6-metal-general": [
    {
      "questionText": "Tính chất vật lý chung của kim loại (dẫn điện, dẫn nhiệt, ánh kim, tính dẻo) gây nên bởi:",
      "options": [
        "Sự có mặt của các electron tự do trong mạng tinh thể kim loại",
        "Các cation kim loại liên kết chặt chẽ",
        "Khối lượng riêng lớn của các nguyên tử",
        "Cấu trúc mạng lập phương tâm diện"
      ],
      "correctAnswer": "Sự có mặt của các electron tự do trong mạng tinh thể kim loại",
      "detailedDerivation": "Các electron tự do chuyển động hỗn loạn trong toàn bộ mạng tinh thể kim loại là nguyên nhân quyết định tất cả các tính chất vật lý chung của kim loại.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Kim loại nào sau đây có tính dẫn điện tốt nhất ở điều kiện thường?",
      "options": [
        "Bạc (Ag)",
        "Đồng (Cu)",
        "Vàng (Au)",
        "Nhôm (Al)"
      ],
      "correctAnswer": "Bạc (Ag)",
      "detailedDerivation": "Thứ tự dẫn điện giảm dần của các kim loại thông dụng: $\\text{Ag} > \\text{Cu} > \\text{Au} > \\text{Al} > \\text{Fe}$. Bạc (Ag) dẫn điện tốt nhất.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Cho đinh sắt (Fe) sạch vào dung dịch $\\text{CuSO}_4$. Hiện tượng quan sát được là:",
      "options": [
        "Có kim loại màu đỏ bám trên đinh sắt, màu xanh của dung dịch nhạt dần",
        "Có kết tủa màu nâu đỏ xuất hiện ngay lập tức",
        "Có bọt khí không màu thoát ra mãnh liệt",
        "Đinh sắt tan hoàn toàn không để lại vết kim loại"
      ],
      "correctAnswer": "Có kim loại màu đỏ bám trên đinh sắt, màu xanh của dung dịch nhạt dần",
      "detailedDerivation": "Phản ứng: $\\text{Fe} + \\text{CuSO}_4 \\rightarrow \\text{FeSO}_4 + \\text{Cu}\\downarrow$. Kim loại Cu màu đỏ bám ngoài đinh sắt, nồng độ $\\text{Cu}^{2+}$ giảm làm màu xanh của dung dịch nhạt dần.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Ăn mòn điện hóa học xảy ra khi có đủ bao nhiêu điều kiện?",
      "options": [
        "3 điều kiện: hai điện cực khác chất, tiếp xúc trực tiếp hoặc gián tiếp, và cùng tiếp xúc dung dịch điện li",
        "Chỉ cần kim loại tiếp xúc với không khí khô",
        "Chỉ cần một kim loại nguyên chất đặt trong nước cất",
        "Cần có nguồn điện ngoài một chiều cung cấp năng lượng"
      ],
      "correctAnswer": "3 điều kiện: hai điện cực khác chất, tiếp xúc trực tiếp hoặc gián tiếp, và cùng tiếp xúc dung dịch điện li",
      "detailedDerivation": "3 điều kiện: (1) Hai điện cực có bản chất khác nhau; (2) Tiếp xúc trực tiếp hoặc gián tiếp qua dây dẫn; (3) Cùng tiếp xúc với một dung dịch chất điện li.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Phương pháp bảo vệ vỏ tàu biển bằng thép khi ngâm trong nước biển bằng cách gắn các khối kim loại kẽm (Zn) là ứng dụng của:",
      "options": [
        "Phương pháp bảo vệ điện hóa (vật hi sinh)",
        "Phương pháp cách ly bề mặt",
        "Mạ điện trang trí",
        "Biến tính bề mặt bằng hợp kim"
      ],
      "correctAnswer": "Phương pháp bảo vệ điện hóa (vật hi sinh)",
      "detailedDerivation": "Kẽm (Zn) có tính khử mạnh hơn sắt (Fe). Khi gắn vào vỏ tàu, tạo thành pin điện hóa trong dung dịch nước biển, kẽm đóng vai trò là anode bị ăn mòn thay cho sắt (vật hi sinh).",
      "cognitiveLevel": "Vận dụng"
    }
  ],
  "chem10-redox-thermochemistry": [
    {
      "questionText": "Trong phản ứng oxi hóa - khử, chất khử là chất:",
      "options": [
        "Nhường electron (chứa nguyên tố có số oxi hóa tăng sau phản ứng)",
        "Nhận electron (chứa nguyên tố có số oxi hóa giảm)",
        "Nhường proton H^+",
        "Không thay đổi số oxi hóa"
      ],
      "correctAnswer": "Nhường electron (chứa nguyên tố có số oxi hóa tăng sau phản ứng)",
      "detailedDerivation": "Quy tắc kinh điển: 'Khử cho - O nhận' (Chất khử cho/nhường electron, số oxi hóa tăng; Chất oxi hóa nhận electron, số oxi hóa giảm).",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Phản ứng tỏa nhiệt là phản ứng hóa học có biến thiên enthalpy chuẩn $\\Delta_r H^0_{298}$:",
      "options": [
        "Nhỏ hơn 0 (\\Delta_r H^0_{298} < 0)",
        "Lớn hơn 0 (\\Delta_r H^0_{298} > 0)",
        "Bằng 0",
        "Không xác định được"
      ],
      "correctAnswer": "Nhỏ hơn 0 (\\Delta_r H^0_{298} < 0)",
      "detailedDerivation": "Phản ứng tỏa nhiệt giải phóng năng lượng ra môi trường xung quanh, enthalpy của hệ giảm nên $\\Delta_r H^0_{298} < 0$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Cho phản ứng tổng hợp amoniac: $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$ có $\\Delta_r H^0_{298} = -92\\text{ kJ}$. Lượng nhiệt tỏa ra khi tổng hợp được $1\\text{ mol } \\text{NH}_3(g)$ ở điều kiện chuẩn là:",
      "options": [
        "46 kJ",
        "92 kJ",
        "184 kJ",
        "23 kJ"
      ],
      "correctAnswer": "46 kJ",
      "detailedDerivation": "Theo phương trình, tạo thành $2\\text{ mol } \\text{NH}_3$ tỏa ra $92\\text{ kJ}$. Do đó tạo thành $1\\text{ mol } \\text{NH}_3$ tỏa ra $\\frac{92}{2} = 46\\text{ kJ}$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Số oxi hóa của nguyên tử sulfur (S) trong phân tử $\\text{H}_2\\text{SO}_4$ là:",
      "options": [
        "+6",
        "+4",
        "-2",
        "0"
      ],
      "correctAnswer": "+6",
      "detailedDerivation": "$2(+1) + x + 4(-2) = 0 \\iff 2 + x - 8 = 0 \\iff x = +6$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Tính biến thiên enthalpy chuẩn $\\Delta_r H^0_{298}$ của phản ứng cháy methane: $\\text{CH}_4(g) + 2\\text{O}_2(g) \\rightarrow \\text{CO}_2(g) + 2\\text{H}_2\\text{O}(l)$, biết nhiệt tạo thành chuẩn $\\Delta_f H^0_{298}$ của $\\text{CH}_4(g), \\text{CO}_2(g), \\text{H}_2\\text{O}(l)$ lần lượt là $-74.8, -393.5, -285.8\\text{ (kJ/mol)}$:",
      "options": [
        "-890.3 kJ",
        "-604.5 kJ",
        "+890.3 kJ",
        "-965.1 kJ"
      ],
      "correctAnswer": "-890.3 kJ",
      "detailedDerivation": "$\\Delta_r H^0_{298} = \\sum \\Delta_f H^0_{298}\\text{(sp)} - \\sum \\Delta_f H^0_{298}\\text{(cđ)} = [-393.5 + 2(-285.8)] - [-74.8 + 2(0)] = -965.1 + 74.8 = -890.3\\text{ kJ}$.",
      "cognitiveLevel": "Vận dụng"
    }
  ],
  "chem11-equilibrium-ph-organic": [
    {
      "questionText": "Theo thuyết Brønsted - Lowry, base là chất:",
      "options": [
        "Có khả năng nhận proton (H^+)",
        "Có khả năng nhường proton (H^+)",
        "Phân li ra ion OH^- trong nước",
        "Chứa nguyên tử kim loại"
      ],
      "correctAnswer": "Có khả năng nhận proton (H^+)",
      "detailedDerivation": "Thuyết Brønsted - Lowry: Acid là chất nhường proton ($H^+$), Base là chất nhận proton ($H^+$).",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Một dung dịch có nồng độ ion $[\\text{H}^+] = 10^{-3}\\text{ mol/L}$. Môi trường của dung dịch này là:",
      "options": [
        "Acid, pH = 3",
        "Base, pH = 11",
        "Trung tính, pH = 7",
        "Base, pH = 3"
      ],
      "correctAnswer": "Acid, pH = 3",
      "detailedDerivation": "$\\text{pH} = -\\log[\\text{H}^+] = -\\log(10^{-3}) = 3 < 7$, do đó dung dịch có môi trường acid.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Yếu tố nào sau đây KHÔNG làm chuyển dịch cân bằng của một phản ứng hóa học thuận nghịch?",
      "options": [
        "Chất xúc tác",
        "Nhiệt độ",
        "Nồng độ các chất phản ứng",
        "Áp suất (đối với hệ có chất khí)"
      ],
      "correctAnswer": "Chất xúc tác",
      "detailedDerivation": "Chất xúc tác làm tăng tốc độ phản ứng thuận và nghịch với mức độ như nhau, giúp phản ứng nhanh đạt tới trạng thái cân bằng chứ không làm chuyển dịch vị trí cân bằng.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Dung dịch chất nào sau đây làm quỳ tím chuyển sang màu đỏ?",
      "options": [
        "HCl",
        "NaOH",
        "NaCl",
        "NH_3"
      ],
      "correctAnswer": "HCl",
      "detailedDerivation": "Dung dịch acid $\\text{HCl}$ có $\\text{pH} < 7$ làm quỳ tím hóa đỏ.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Trộn $100\\text{ mL}$ dung dịch $\\text{HCl } 0.1\\text{M}$ với $100\\text{ mL}$ dung dịch $\\text{NaOH } 0.12\\text{M}$ thu được dung dịch $X$. Bỏ qua sự thay đổi thể tích khi pha trộn. Giá trị pH của dung dịch $X$ là:",
      "options": [
        "12.0",
        "2.0",
        "11.0",
        "7.0"
      ],
      "correctAnswer": "12.0",
      "detailedDerivation": "$n_{\\text{H}^+} = 0.1 \\times 0.1 = 0.01\\text{ mol}$. $n_{\\text{OH}^-} = 0.1 \\times 0.12 = 0.012\\text{ mol}$. Lượng $\\text{OH}^-$ dư: $0.012 - 0.01 = 0.002\\text{ mol}$. Thể tích tổng $V = 0.2\\text{ L}$. $[\\text{OH}^-] = \\frac{0.002}{0.2} = 0.01\\text{ M} = 10^{-2}\\text{ M} \\Rightarrow \\text{pOH} = 2 \\Rightarrow \\text{pH} = 14 - 2 = 12$.",
      "cognitiveLevel": "Vận dụng"
    }
  ],
  "eng12-unit1-3-tenses-articles-prepositions": [
    {
      "questionText": "Choose the best answer: \"By the time the international summit concludes tomorrow, the delegates _______ a comprehensive framework on carbon emission reductions.\"",
      "options": [
        "will have finalized",
        "have finalized",
        "will finalize",
        "had finalized"
      ],
      "correctAnswer": "will have finalized",
      "detailedDerivation": "The future perfect tense (\"will have + V3/ed\") describes an action that will be completed prior to a specific point or action in the future (\"By the time + S + V(present)\").",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Select the correct article: \"Dr. Thorne was awarded the Nobel Prize for his groundbreaking research on _______ quantum entanglement.\"",
      "options": [
        "no article (zero article)",
        "the",
        "a",
        "an"
      ],
      "correctAnswer": "no article (zero article)",
      "detailedDerivation": "Uncountable nouns referring to general scientific concepts or academic disciplines (like quantum entanglement, thermodynamics) do not take an article when spoken of in general.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Choose the correct dependent preposition: \"The success of the mRNA vaccine trial is attributed _______ the relentless efforts of global biophysicists.\"",
      "options": [
        "to",
        "for",
        "with",
        "in"
      ],
      "correctAnswer": "to",
      "detailedDerivation": "The verb collocation is \"attribute something TO something\" (be attributed TO).",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Complete the sentence: \"Since 2020, advances in neural networks _______ unprecedented breakthroughs in synthetic protein folding.\"",
      "options": [
        "have accelerated",
        "accelerate",
        "accelerated",
        "had accelerated"
      ],
      "correctAnswer": "have accelerated",
      "detailedDerivation": "The time phrase \"Since + past point in time\" indicates an action continuing up to the present, requiring the present perfect tense.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Identify the error in the sentence: \"Astronomers [have detected] [A] a potentially habitable exoplanet [which] [B] atmosphere is [composed mainly of] [C] nitrogen and [methane] [D].\"",
      "options": [
        "which",
        "have detected",
        "composed mainly of",
        "methane"
      ],
      "correctAnswer": "which",
      "detailedDerivation": "The relative pronoun 'which' cannot show possession. The possessive relative pronoun 'whose' must be used: 'whose atmosphere' (the atmosphere of which).",
      "cognitiveLevel": "Vận dụng"
    }
  ],
  "eng12-unit4-7-comparatives-causatives": [
    {
      "questionText": "Choose the correct double comparative: \"_______ the computational complexity of the algorithm, _______ the processing latency becomes on edge devices.\"",
      "options": [
        "The higher - the greater",
        "Higher - greater",
        "The more high - the more great",
        "The highest - the greatest"
      ],
      "correctAnswer": "The higher - the greater",
      "detailedDerivation": "Double comparative structure: \"The + comparative, the + comparative\" expressing proportional variation (\"The higher..., the greater...\").",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Choose the correct causative form: \"The laboratory director had the spectrometer _______ before commencing the spectrometry experiments.\"",
      "options": [
        "calibrated",
        "calibrate",
        "calibrating",
        "to calibrate"
      ],
      "correctAnswer": "calibrated",
      "detailedDerivation": "Passive causative pattern: \"have + something (object) + V3/ed (past participle)\" -> had the spectrometer calibrated.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Complete the sentence: \"This superconductor is _______ than any other alloy tested under atmospheric cryogenic conditions.\"",
      "options": [
        "far more conductive",
        "much conductive",
        "more conductive by far",
        "conductiver"
      ],
      "correctAnswer": "far more conductive",
      "detailedDerivation": "To intensify comparative adjectives, adverbs such as 'far', 'much', or 'significantly' are placed before the comparative form: \"far more conductive\".",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Select the correct sentence rewrite using a causative structure: \"A professional technician repaired Jane's electron microscope yesterday.\"",
      "options": [
        "Jane had her electron microscope repaired by a professional technician yesterday.",
        "Jane had repaired her electron microscope yesterday.",
        "Jane got a technician repair her electron microscope yesterday.",
        "Jane was had her electron microscope repaired yesterday."
      ],
      "correctAnswer": "Jane had her electron microscope repaired by a professional technician yesterday.",
      "detailedDerivation": "\"Have something done by someone\" correctly transforms the active sentence into the standard causative voice.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Identify the option with correct grammatical form: \"The more stringent the environmental regulations become, _______.\"",
      "options": [
        "the more innovative green energy solutions become",
        "innovative green energy solutions become more",
        "the green energy solutions are more innovative",
        "more innovative will be green energy solutions"
      ],
      "correctAnswer": "the more innovative green energy solutions become",
      "detailedDerivation": "In parallel double comparatives, both clauses maintain symmetrical \"The + comparative + subject + verb\" structure.",
      "cognitiveLevel": "Thông hiểu"
    }
  ],
  "eng10-passive-conditionals-relatives": [
    {
      "questionText": "Which relative pronoun correctly replaces the object of preposition in: \"The particle accelerator _______ which the physics experiment was conducted has been upgraded.\"",
      "options": [
        "in",
        "at",
        "to",
        "for"
      ],
      "correctAnswer": "in",
      "detailedDerivation": "We conduct an experiment IN a laboratory or accelerator, hence preposition 'in' precedes 'which' (\"in which\").",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Reduce the relative clause in the sentence: \"The sensors that were installed along the suspension bridge detect micro-fractures in real time.\"",
      "options": [
        "The sensors installed along the suspension bridge detect micro-fractures in real time.",
        "The sensors installing along the suspension bridge detect micro-fractures in real time.",
        "The sensors being installed along the suspension bridge detect micro-fractures in real time.",
        "The sensors having installed along the suspension bridge detect micro-fractures in real time."
      ],
      "correctAnswer": "The sensors installed along the suspension bridge detect micro-fractures in real time.",
      "detailedDerivation": "A passive relative clause (\"that were installed\") reduces to a past participle phrase (\"installed\").",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Choose the correct conditional type 2 sentence expressing an unreal condition in the present:",
      "options": [
        "If Earth had no magnetic field, solar wind would strip away our atmosphere.",
        "If Earth has no magnetic field, solar wind will strip away our atmosphere.",
        "If Earth had had no magnetic field, solar wind stripped away our atmosphere.",
        "Unless Earth had a magnetic field, solar wind stripped away our atmosphere."
      ],
      "correctAnswer": "If Earth had no magnetic field, solar wind would strip away our atmosphere.",
      "detailedDerivation": "Conditional Type 2: \"If + S + V-ed / were, S + would + V-inf\" describes a hypothetical situation contrary to present fact.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Change to passive voice: \"Engineers have deployed five autonomous rovers on the Martian surface.\"",
      "options": [
        "Five autonomous rovers have been deployed on the Martian surface by engineers.",
        "Five autonomous rovers were deployed on the Martian surface by engineers.",
        "Five autonomous rovers had been deployed on the Martian surface by engineers.",
        "Five autonomous rovers are deployed on the Martian surface by engineers."
      ],
      "correctAnswer": "Five autonomous rovers have been deployed on the Martian surface by engineers.",
      "detailedDerivation": "Present perfect passive structure: \"S + have/has + been + V3/ed\".",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Choose the non-defining relative clause with correct punctuation:",
      "options": [
        "Marie Curie, who was the first person to win two Nobel Prizes, discovered polonium and radium.",
        "Marie Curie that was the first person to win two Nobel Prizes discovered polonium and radium.",
        "Marie Curie who was the first person to win two Nobel Prizes, discovered polonium and radium.",
        "Marie Curie, whom was the first person to win two Nobel Prizes discovered polonium and radium."
      ],
      "correctAnswer": "Marie Curie, who was the first person to win two Nobel Prizes, discovered polonium and radium.",
      "detailedDerivation": "Non-defining relative clauses provide extra information about a specific proper noun, must be separated by commas on both sides, and cannot use 'that'.",
      "cognitiveLevel": "Thông hiểu"
    }
  ],
  "eng11-perfect-participles-cleft-modals": [
    {
      "questionText": "Choose the best option to complete the cleft sentence: \"It was the discovery of penicillin _______ revolutionized modern antibiotics.\"",
      "options": [
        "that",
        "which",
        "whom",
        "what"
      ],
      "correctAnswer": "that",
      "detailedDerivation": "Standard cleft sentence for focus on a noun phrase: \"It is/was + focused element + THAT + clause\".",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Combine the sentences using a perfect participle clause: \"The researchers had synthesized the antibody. They proceeded to conduct clinical trials.\"",
      "options": [
        "Having synthesized the antibody, the researchers proceeded to conduct clinical trials.",
        "Synthesizing the antibody, the researchers proceeded to conduct clinical trials.",
        "Synthesized the antibody, the researchers proceeded to conduct clinical trials.",
        "Being synthesized the antibody, the researchers proceeded to conduct clinical trials."
      ],
      "correctAnswer": "Having synthesized the antibody, the researchers proceeded to conduct clinical trials.",
      "detailedDerivation": "When one action is completed before another in the past and both share the same subject, the earlier action is expressed with a perfect participle: \"Having + V3/ed\".",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Select the modal verb of past deduction: \"The laboratory was locked from the inside and the alarm was active. The intruder _______ entered through the main doorway.\"",
      "options": [
        "can't have",
        "must have",
        "should have",
        "might have"
      ],
      "correctAnswer": "can't have",
      "detailedDerivation": "\"Can't have + V3/ed\" expresses a logical deduction that an event was impossible in the past based on strong counter-evidence.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Complete the cleft sentence with an adverbial focus: \"It was not until the early twentieth century _______ quantum mechanics began to reshape physics.\"",
      "options": [
        "that",
        "when",
        "which",
        "then"
      ],
      "correctAnswer": "that",
      "detailedDerivation": "Cleft structure with 'not until': \"It was not until [time/condition] THAT + clause\".",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Choose the sentence closest in meaning: \"I am certain that the software update fixed the memory leak because the CPU usage has dropped to normal levels.\"",
      "options": [
        "The software update must have fixed the memory leak.",
        "The software update should have fixed the memory leak.",
        "The software update might have fixed the memory leak.",
        "The software update could have fixed the memory leak."
      ],
      "correctAnswer": "The software update must have fixed the memory leak.",
      "detailedDerivation": "\"Must have + V3/ed\" expresses high certainty about a past event based on clear observational evidence.",
      "cognitiveLevel": "Vận dụng"
    }
  ]
};
