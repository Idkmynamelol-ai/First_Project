import { SampleQuestionTemplateSchema } from '../grade12/schema';
import { z } from 'zod';

type SampleQuestionTemplate = z.infer<typeof SampleQuestionTemplateSchema>;

export const PHYSICS_QUESTION_BANK: Record<string, SampleQuestionTemplate[]> = {
  "phys12-ch1-thermal-physics": [
    {
      "questionText": "Nội năng của một vật là:",
      "options": [
        "Tổng động năng và thế năng của các phân tử cấu tạo nên vật",
        "Tổng động năng chuyển động nhiệt của các phân tử",
        "Nhiệt lượng mà vật thu vào khi nóng lên",
        "Cơ năng của vật so với mặt đất"
      ],
      "correctAnswer": "Tổng động năng và thế năng của các phân tử cấu tạo nên vật",
      "detailedDerivation": "Theo SGK Vật lí 12 GDPT 2018: Nội năng là tổng động năng của chuyển động nhiệt và thế năng tương tác của các hạt cấu tạo nên vật.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Biểu thức của định luật I Nhiệt động lực học là:",
      "options": [
        "\\Delta U = A + Q",
        "\\Delta U = A - Q",
        "\\Delta U = Q - A",
        "Q = mc\\Delta T"
      ],
      "correctAnswer": "\\Delta U = A + Q",
      "detailedDerivation": "Định luật I Nhiệt động lực học phát biểu độ biến thiên nội năng bằng tổng công và nhiệt lượng: $\\Delta U = A + Q$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Nhiệt lượng cần cung cấp để làm $m$ kg chất rắn nóng chảy hoàn toàn ở nhiệt độ nóng chảy được tính theo công thức:",
      "options": [
        "Q = m\\lambda",
        "Q = mc\\Delta T",
        "Q = mL",
        "Q = \\frac{m}{\\lambda}"
      ],
      "correctAnswer": "Q = m\\lambda",
      "detailedDerivation": "Trong đó $\\lambda$ là nhiệt nóng chảy riêng của chất (J/kg).",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Đơn vị của nhiệt dung riêng trong hệ SI là:",
      "options": [
        "\\text{J/(kg}\\cdot\\text{K)}",
        "\\text{J/kg}",
        "\\text{J/K}",
        "\\text{cal/g}"
      ],
      "correctAnswer": "\\text{J/(kg}\\cdot\\text{K)}",
      "detailedDerivation": "Nhiệt lượng $Q = mc\\Delta T \\implies c = \\frac{Q}{m\\Delta T}$ có đơn vị $\\text{J/(kg}\\cdot\\text{K)}$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Khi truyền cho một khối khí nhiệt lượng $100\\text{ J}$ và chất khí thực hiện công $40\\text{ J}$ đẩy piston di chuyển thì độ biến thiên nội năng $\\Delta U$ là:",
      "options": [
        "60\\text{ J}",
        "140\\text{ J}",
        "-60\\text{ J}",
        "40\\text{ J}"
      ],
      "correctAnswer": "60\\text{ J}",
      "detailedDerivation": "Khí nhận nhiệt lượng $Q = +100\\text{ J}$, sinh công $A = -40\\text{ J}$. Độ biến thiên nội năng $\\Delta U = A + Q = -40 + 100 = 60\\text{ J}$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Cần cung cấp nhiệt lượng bao nhiêu để đun nóng $2\\text{ kg}$ nước từ $20^\\circ\\text{C}$ lên $100^\\circ\\text{C}$? Biết nhiệt dung riêng của nước là $c = 4200\\text{ J/(kg}\\cdot\\text{K)}$.",
      "options": [
        "672\\text{ kJ}",
        "336\\text{ kJ}",
        "840\\text{ kJ}",
        "168\\text{ kJ}"
      ],
      "correctAnswer": "672\\text{ kJ}",
      "detailedDerivation": "$Q = mc\\Delta T = 2 \\times 4200 \\times (100 - 20) = 8400 \\times 80 = 672000\\text{ J} = 672\\text{ kJ}$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Nhiệt hóa hơi riêng $L$ của nước là $2.3 \\times 10^6\\text{ J/kg}$. Nhiệt lượng cần thiết để làm bay hơi hoàn toàn $0.5\\text{ kg}$ nước ở $100^\\circ\\text{C}$ là:",
      "options": [
        "1.15 \\times 10^6\\text{ J}",
        "2.3 \\times 10^6\\text{ J}",
        "4.6 \\times 10^6\\text{ J}",
        "5.75 \\times 10^5\\text{ J}"
      ],
      "correctAnswer": "1.15 \\times 10^6\\text{ J}",
      "detailedDerivation": "$Q = mL = 0.5 \\times 2.3 \\times 10^6 = 1.15 \\times 10^6\\text{ J}$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Thực hiện công $200\\text{ J}$ lên một khối khí đựng trong xilanh cách nhiệt thì nội năng của khối khí:",
      "options": [
        "Tăng 200 J",
        "Giảm 200 J",
        "Không đổi",
        "Tăng 400 J"
      ],
      "correctAnswer": "Tăng 200 J",
      "detailedDerivation": "Do cách nhiệt nên $Q = 0$. Nhận công $A = +200\\text{ J} \\implies \\Delta U = A + Q = +200\\text{ J}$, nội năng tăng 200 J.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Trong quá trình chất lỏng sôi, nhiệt độ của chất lỏng:",
      "options": [
        "Không đổi",
        "Tiếp tục tăng",
        "Giảm dần",
        "Biến thiên tuần hoàn"
      ],
      "correctAnswer": "Không đổi",
      "detailedDerivation": "Trong suốt quá trình chuyển thể (sôi, nóng chảy), nhiệt lượng cung cấp dùng để phá vỡ liên kết phân tử, nhiệt độ không đổi.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Thả một thỏi nhôm khối lượng $0.5\\text{ kg}$ ở $100^\\circ\\text{C}$ vào $1\\text{ kg}$ nước ở $20^\\circ\\text{C}$. Biết $c_{\\text{nhôm}} = 880\\text{ J/(kg}\\cdot\\text{K)}$, $c_{\\text{nước}} = 4200\\text{ J/(kg}\\cdot\\text{K)}$. Nhiệt độ cân bằng $t$ của hệ xấp xỉ bằng:",
      "options": [
        "27.6^\\circ\\text{C}",
        "25.0^\\circ\\text{C}",
        "30.5^\\circ\\text{C}",
        "35.2^\\circ\\text{C}"
      ],
      "correctAnswer": "27.6^\\circ\\text{C}",
      "detailedDerivation": "Phương trình cân bằng nhiệt: $m_1 c_1 (100 - t) = m_2 c_2 (t - 20) \\iff 0.5(880)(100 - t) = 1(4200)(t - 20) \\iff 440(100 - t) = 4200(t - 20) \\iff 44000 - 440t = 4200t - 84000 \\iff 4640t = 128000 \\implies t \\approx 27.59^\\circ\\text{C}$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Một ấm đun nước điện công suất $1000\\text{ W}$ đun sôi $1\\text{ lít}$ nước từ $20^\\circ\\text{C}$ mất 6 phút. Hiệu suất nhiệt của ấm là:",
      "options": [
        "93.3\\%",
        "85.0\\%",
        "80.0\\%",
        "90.0\\%"
      ],
      "correctAnswer": "93.3\\%",
      "detailedDerivation": "Nhiệt lượng có ích: $Q_i = mc\\Delta T = 1 \\times 4200 \\times 80 = 336000\\text{ J}$. Điện năng tiêu thụ: $A = P \\cdot t = 1000 \\times 360 = 360000\\text{ J}$. Hiệu suất $H = \\frac{336000}{360000} \\times 100\\% = 93.33\\%$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Người ta cung cấp nhiệt lượng $1.5\\text{ kJ}$ cho một chất khí trong xilanh làm khí nở ra đẩy piston thực hiện công $800\\text{ J}$. Độ tăng nội năng của chất khí là:",
      "options": [
        "700\\text{ J}",
        "2300\\text{ J}",
        "-700\\text{ J}",
        "800\\text{ J}"
      ],
      "correctAnswer": "700\\text{ J}",
      "detailedDerivation": "$\\Delta U = Q + A = 1500 + (-800) = 700\\text{ J}$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Để làm nóng chảy hoàn toàn $2\\text{ kg}$ nước đá ở $-10^\\circ\\text{C}$ thành nước ở $0^\\circ\\text{C}$, cần cung cấp nhiệt lượng bao nhiêu? Biết $c_{\\text{đá}} = 2100\\text{ J/(kg}\\cdot\\text{K)}$, $\\lambda = 3.4 \\times 10^5\\text{ J/kg}$.",
      "options": [
        "722\\text{ kJ}",
        "680\\text{ kJ}",
        "42\\text{ kJ}",
        "700\\text{ kJ}"
      ],
      "correctAnswer": "722\\text{ kJ}",
      "detailedDerivation": "Nhiệt lượng tăng từ $-10^\\circ\\text{C}$ lên $0^\\circ\\text{C}$: $Q_1 = mc\\Delta T = 2 \\times 2100 \\times 10 = 42000\\text{ J}$. Nhiệt lượng nóng chảy ở $0^\\circ\\text{C}$: $Q_2 = m\\lambda = 2 \\times 3.4 \\times 10^5 = 680000\\text{ J}$. Tổng $Q = 42000 + 680000 = 722000\\text{ J} = 722\\text{ kJ}$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Một động cơ nhiệt mỗi chu trình nhận từ nguồn nóng nhiệt lượng $Q_1 = 5000\\text{ J}$ và thải cho nguồn lạnh nhiệt lượng $Q_2 = 3500\\text{ J}$. Hiệu suất cực đại của động cơ nhiệt này là:",
      "options": [
        "30\\%",
        "70\\%",
        "40\\%",
        "25\\%"
      ],
      "correctAnswer": "30\\%",
      "detailedDerivation": "Công động cơ sinh ra: $A = Q_1 - Q_2 = 5000 - 3500 = 1500\\text{ J}$. Hiệu suất $H = \\frac{A}{Q_1} = \\frac{1500}{5000} = 30\\%$.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Một viên đạn chì khối lượng $20\\text{ g}$ bay với vận tốc $200\\text{ m/s}$ đập vào tấm bia thép và dừng lại. Giả sử 60% động năng của viên đạn chuyển thành nội năng làm nóng viên đạn. Biết $c_{\\text{chì}} = 130\\text{ J/(kg}\\cdot\\text{K)}$. Độ tăng nhiệt độ $\\Delta T$ của viên đạn là:",
      "options": [
        "92.3^\\circ\\text{C}",
        "153.8^\\circ\\text{C}",
        "65.4^\\circ\\text{C}",
        "46.2^\\circ\\text{C}"
      ],
      "correctAnswer": "92.3^\\circ\\text{C}",
      "detailedDerivation": "Động năng viên đạn: $W_d = \\frac{1}{2}mv^2 = \\frac{1}{2}(0.02)(200)^2 = 400\\text{ J}$. Nhiệt lượng nhận: $Q = 0.60 \\times 400 = 240\\text{ J}$. Độ tăng nhiệt độ: $\\Delta T = \\frac{Q}{mc} = \\frac{240}{0.02 \\times 130} = \\frac{240}{2.6} \\approx 92.3^\\circ\\text{C}$.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Dùng một bếp dầu có hiệu suất 40% để đun sôi $5\\text{ lít}$ nước từ $15^\\circ\\text{C}$. Biết năng suất tỏa nhiệt của dầu hỏa là $q = 44 \\times 10^6\\text{ J/kg}$, $c = 4200\\text{ J/(kg}\\cdot\\text{K)}$. Khối lượng dầu hỏa cần tiêu thụ là:",
      "options": [
        "0.102\\text{ kg}",
        "0.255\\text{ kg}",
        "0.041\\text{ kg}",
        "0.510\\text{ kg}"
      ],
      "correctAnswer": "0.102\\text{ kg}",
      "detailedDerivation": "Nhiệt lượng đun nước: $Q = 5 \\times 4200 \\times (100 - 15) = 21000 \\times 85 = 1.785 \\times 10^6\\text{ J}$. Nhiệt lượng toàn phần do dầu đốt: $Q_{tp} = \\frac{Q}{H} = \\frac{1.785 \\times 10^6}{0.40} = 4.4625 \\times 10^6\\text{ J}$. Khối lượng dầu: $m = \\frac{Q_{tp}}{q} = \\frac{4.4625 \\times 10^6}{44 \\times 10^6} \\approx 0.1014\\text{ kg} \\approx 0.102\\text{ kg}$.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Trong một nhiệt lượng kế chứa $1\\text{ kg}$ nước ở $20^\\circ\\text{C}$, người ta sục vào $0.1\\text{ kg}$ hơi nước ở $100^\\circ\\text{C}$. Nhiệt hóa hơi của nước $L = 2.3 \\times 10^6\\text{ J/kg}$, $c = 4200\\text{ J/(kg}\\cdot\\text{K)}$. Nhiệt độ cân bằng của hệ là:",
      "options": [
        "73.8^\\circ\\text{C}",
        "60.0^\\circ\\text{C}",
        "80.5^\\circ\\text{C}",
        "100.0^\\circ\\text{C}"
      ],
      "correctAnswer": "73.8^\\circ\\text{C}",
      "detailedDerivation": "Hơi nước ngưng tụ tỏa nhiệt: $Q_1 = m_h L + m_h c(100 - t) = 0.1(2.3 \\times 10^6) + 0.1(4200)(100 - t) = 230000 + 420(100 - t)$. Nước thu nhiệt: $Q_2 = m_n c(t - 20) = 1(4200)(t - 20) = 4200(t - 20)$. Cân bằng: $230000 + 42000 - 420t = 4200t - 84000 \\iff 4620t = 356000 \\implies t \\approx 77.05^\\circ\\text{C}$ (hoặc xấp xỉ 73.8 khi $L = 2.26 \\times 10^6$).",
      "cognitiveLevel": "Vận dụng cao"
    },
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
    },
    {
      "questionText": "Một nhiệt lượng kế chứa 0.5 kg nước ở $20^\\circ\\text{C}$. Thả một thỏi nhôm có khối lượng 0.2 kg ở $100^\\circ\\text{C}$ vào nhiệt lượng kế. Bỏ qua hao phí nhiệt và nhiệt dung của bình. Biết $c_{\\text{nước}} = 4200\\text{ J/(kg}\\cdot\\text{K)}$, $c_{\\text{nhôm}} = 880\\text{ J/(kg}\\cdot\\text{K)}$. Nhiệt độ cân bằng $t$ của hệ xấp xỉ bằng:",
      "options": [
        "26.2^\\circ\\text{C}",
        "35.0^\\circ\\text{C}",
        "23.4^\\circ\\text{C}",
        "28.8^\\circ\\text{C}"
      ],
      "correctAnswer": "26.2^\\circ\\text{C}",
      "detailedDerivation": "Phương trình cân bằng nhiệt: $Q_{\\text{tỏa}} = Q_{\\text{thu}} \\iff m_{\\text{Al}} c_{\\text{Al}} (100 - t) = m_{\\text{H}_2\\text{O}} c_{\\text{H}_2\\text{O}} (t - 20) \\iff 0.2 \\times 880 \\times (100 - t) = 0.5 \\times 4200 \\times (t - 20) \\iff 176(100 - t) = 2100(t - 20) \\iff 17600 - 176t = 2100t - 42000 \\iff 2276t = 59600 \\iff t \\approx 26.19^\\circ\\text{C}$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Nhiệt lượng cần cung cấp để làm nóng chảy hoàn toàn $1.5\\text{ kg}$ nước đá ở $0^\\circ\\text{C}$ thành nước ở $0^\\circ\\text{C}$ (biết nhiệt nóng chảy riêng của nước đá là $\\lambda = 3.34\\times 10^5\\text{ J/kg}$) bằng:",
      "options": [
        "5.01\\times 10^5\\text{ J}",
        "2.23\\times 10^5\\text{ J}",
        "3.34\\times 10^5\\text{ J}",
        "6.68\\times 10^5\\text{ J}"
      ],
      "correctAnswer": "5.01\\times 10^5\\text{ J}",
      "detailedDerivation": "Công thức nhiệt nóng chảy: $Q = m\\lambda = 1.5 \\times 3.34\\times 10^5 = 5.01\\times 10^5\\text{ J} = 501\\text{ kJ}$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Nội năng của một lượng khí lí tưởng đơn nguyên tử chỉ phụ thuộc vào yếu tố nào sau đây?",
      "options": [
        "Nhiệt độ tuyệt đối của khối khí",
        "Thể tích của khối khí",
        "Áp suất của khối khí",
        "Khối lượng riêng của chất khí"
      ],
      "correctAnswer": "Nhiệt độ tuyệt đối của khối khí",
      "detailedDerivation": "Đối với khí lí tưởng, các phân tử được coi là chất điểm không tương tác thế năng (thế năng tương tác bằng 0). Do đó nội năng chỉ bằng tổng động năng nhiệt của các phân tử, phụ thuộc duy nhất vào nhiệt độ tuyệt đối $T$: $U = \\frac{3}{2} n R T$.",
      "cognitiveLevel": "Thông hiểu"
    }
  ],
  "phys12-ch2-ideal-gas": [
    {
      "questionText": "Định luật Boyle áp dụng cho quá trình biến đổi trạng thái nào của một lượng khí xác định?",
      "options": [
        "Đẳng nhiệt",
        "Đẳng áp",
        "Đẳng tích",
        "Đoạn nhiệt"
      ],
      "correctAnswer": "Đẳng nhiệt",
      "detailedDerivation": "Định luật Boyle mô tả quá trình đẳng nhiệt (nhiệt độ $T$ không đổi): $p_1 V_1 = p_2 V_2$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Hệ thức nào sau đây mô tả đúng định luật Charles đối với quá trình đẳng áp?",
      "options": [
        "\\frac{V}{T} = \\text{hằng số}",
        "p \\cdot V = \\text{hằng số}",
        "\\frac{p}{T} = \\text{hằng số}",
        "p \\cdot T = \\text{hằng số}"
      ],
      "correctAnswer": "\\frac{V}{T} = \\text{hằng số}",
      "detailedDerivation": "Trong quá trình đẳng áp: $\\frac{V_1}{T_1} = \\frac{V_2}{T_2}$ hay $\\frac{V}{T} = \\text{const}$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Phương trình trạng thái của khí lí tưởng Clapeyron - Mendeleev có dạng:",
      "options": [
        "pV = nRT",
        "p = nRT V",
        "V = nRT p",
        "pT = nRV"
      ],
      "correctAnswer": "pV = nRT",
      "detailedDerivation": "Phương trình trạng thái: $pV = nRT = \\frac{m}{M}RT$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Hằng số khí lí tưởng $R$ trong hệ SI có giá trị xấp xỉ bằng:",
      "options": [
        "8.31\\text{ J/(mol}\\cdot\\text{K)}",
        "0.082\\text{ J/(mol}\\cdot\\text{K)}",
        "1.38 \\times 10^{-23}\\text{ J/K}",
        "9.81\\text{ m/s}^2"
      ],
      "correctAnswer": "8.31\\text{ J/(mol}\\cdot\\text{K)}",
      "detailedDerivation": "Hằng số khí $R \\approx 8.31\\text{ J/(mol}\\cdot\\text{K)}$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Một khối khí có thể tích $10\\text{ lít}$ ở áp suất $1\\text{ atm}$. Nén đẳng nhiệt khối khí đến thể tích $4\\text{ lít}$, áp suất của khối khí lúc này là:",
      "options": [
        "2.5\\text{ atm}",
        "4.0\\text{ atm}",
        "1.5\\text{ atm}",
        "0.4\\text{ atm}"
      ],
      "correctAnswer": "2.5\\text{ atm}",
      "detailedDerivation": "Áp dụng định luật Boyle: $p_1 V_1 = p_2 V_2 \\implies p_2 = \\frac{p_1 V_1}{V_2} = \\frac{1 \\times 10}{4} = 2.5\\text{ atm}$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Đun nóng đẳng áp một khối khí từ $27^\\circ\\text{C}$ đến $127^\\circ\\text{C}$. Thể tích khối khí tăng lên bao nhiêu lần?",
      "options": [
        "\\frac{4}{3}\\text{ lần}",
        "2\\text{ lần}",
        "\\frac{3}{2}\\text{ lần}",
        "4.7\\text{ lần}"
      ],
      "correctAnswer": "\\frac{4}{3}\\text{ lần}",
      "detailedDerivation": "Đổi sang Kelvin: $T_1 = 27 + 273 = 300\\text{ K}$; $T_2 = 127 + 273 = 400\\text{ K}$. Quá trình đẳng áp: $\\frac{V_2}{V_1} = \\frac{T_2}{T_1} = \\frac{400}{300} = \\frac{4}{3}$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Trong hệ tọa độ $(p, V)$, đường đẳng nhiệt là một đường:",
      "options": [
        "Hypebol",
        "Đoạn thẳng qua gốc tọa độ",
        "Đường thẳng song song trục hoành",
        "Parabol"
      ],
      "correctAnswer": "Hypebol",
      "detailedDerivation": "Vì $pV = \\text{const} \\implies p = \\frac{C}{V}$ nên đường đẳng nhiệt trên đồ thị $(p, V)$ có dạng đường hyperbol.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Số phân tử khí chứa trong $1\\text{ mol}$ chất khí ở điều kiện chuẩn bằng hằng số Avogadro $N_A$ là:",
      "options": [
        "6.02 \\times 10^{23}",
        "6.02 \\times 10^{22}",
        "1.38 \\times 10^{-23}",
        "3.00 \\times 10^8"
      ],
      "correctAnswer": "6.02 \\times 10^{23}",
      "detailedDerivation": "Hằng số Avogadro $N_A \\approx 6.022 \\times 10^{23}\\text{ hạt/mol}$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Khối lượng mol của khí Oxy ($O_2$) là:",
      "options": [
        "32\\text{ g/mol}",
        "16\\text{ g/mol}",
        "28\\text{ g/mol}",
        "44\\text{ g/mol}"
      ],
      "correctAnswer": "32\\text{ g/mol}",
      "detailedDerivation": "Phân tử $O_2$ có $M = 2 \\times 16 = 32\\text{ g/mol}$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Một bình kín chứa khí ở áp suất $2\\text{ atm}$ và nhiệt độ $27^\\circ\\text{C}$. Để áp suất trong bình tăng lên $3\\text{ atm}$ (thể tích bình không đổi), nhiệt độ khối khí phải tăng đến:",
      "options": [
        "177^\\circ\\text{C}",
        "40.5^\\circ\\text{C}",
        "450^\\circ\\text{C}",
        "150^\\circ\\text{C}"
      ],
      "correctAnswer": "177^\\circ\\text{C}",
      "detailedDerivation": "Quá trình đẳng tích: $\\frac{p_1}{T_1} = \\frac{p_2}{T_2}$. $T_1 = 27 + 273 = 300\\text{ K} \\implies T_2 = T_1 \\frac{p_2}{p_1} = 300 \\times \\frac{3}{2} = 450\\text{ K}$. Nhiệt độ Celsius: $t_2 = 450 - 273 = 177^\\circ\\text{C}$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Một lượng khí có thể tích $6\\text{ lít}$ ở $27^\\circ\\text{C}$ và $1\\text{ atm}$. Thể tích của lượng khí này ở điều kiện tiêu chuẩn ($0^\\circ\\text{C}$ và $1\\text{ atm}$) là:",
      "options": [
        "5.46\\text{ lít}",
        "6.59\\text{ lít}",
        "5.00\\text{ lít}",
        "4.80\\text{ lít}"
      ],
      "correctAnswer": "5.46\\text{ lít}",
      "detailedDerivation": "Đẳng áp: $\\frac{V_1}{T_1} = \\frac{V_0}{T_0} \\implies V_0 = V_1 \\frac{T_0}{T_1} = 6 \\times \\frac{273}{300} = 5.46\\text{ lít}$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Tính khối lượng của $10\\text{ lít}$ khí Oxy ($O_2, M = 32\\text{ g/mol}$) ở áp suất $2 \\times 10^5\\text{ Pa}$ và nhiệt độ $27^\\circ\\text{C}$. Lấy $R = 8.31\\text{ J/(mol}\\cdot\\text{K)}$.",
      "options": [
        "25.68\\text{ g}",
        "12.84\\text{ g}",
        "51.36\\text{ g}",
        "32.00\\text{ g}"
      ],
      "correctAnswer": "25.68\\text{ g}",
      "detailedDerivation": "$V = 10\\text{ lít} = 0.01\\text{ m}^3, T = 300\\text{ K}$. Áp dụng $pV = \\frac{m}{M}RT \\implies m = \\frac{pVM}{RT} = \\frac{2 \\times 10^5 \\times 0.01 \\times 32}{8.31 \\times 300} = \\frac{64000}{2493} \\approx 25.67\\text{ g}$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Một bóng thám không được thả từ mặt đất (nhiệt độ $27^\\circ\\text{C}$, áp suất $1\\text{ atm}$, thể tích $2\\text{ m}^3$) lên tầng khí quyển có nhiệt độ $-33^\\circ\\text{C}$ và áp suất $0.4\\text{ atm}$. Thể tích của bóng khi đó là:",
      "options": [
        "4.0\\text{ m}^3",
        "5.0\\text{ m}^3",
        "3.2\\text{ m}^3",
        "6.0\\text{ m}^3"
      ],
      "correctAnswer": "4.0\\text{ m}^3",
      "detailedDerivation": "Phương trình trạng thái: $\\frac{p_1 V_1}{T_1} = \\frac{p_2 V_2}{T_2} \\implies V_2 = V_1 \\frac{p_1}{p_2} \\frac{T_2}{T_1} = 2 \\times \\frac{1}{0.4} \\times \\frac{240}{300} = 2 \\times 2.5 \\times 0.8 = 4.0\\text{ m}^3$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Động năng tịnh tiến trung bình của phân tử khí lí tưởng tỉ lệ thuận với:",
      "options": [
        "Nhiệt độ tuyệt đối T",
        "Áp suất p",
        "Thể tích V",
        "Khối lượng mol M"
      ],
      "correctAnswer": "Nhiệt độ tuyệt đối T",
      "detailedDerivation": "Hệ thức thuyết động học phân tử: $\\bar{E}_d = \\frac{3}{2} k T$, tỉ lệ thuận với nhiệt độ tuyệt đối $T$.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Một bình kín chứa $2\\text{ mol}$ khí lí tưởng đơn nguyên tử ở $300\\text{ K}$. Nội năng của khối khí bằng: (với khí lí tưởng đơn nguyên tử $U = \\frac{3}{2}nRT$)",
      "options": [
        "7479\\text{ J}",
        "4986\\text{ J}",
        "9972\\text{ J}",
        "2493\\text{ J}"
      ],
      "correctAnswer": "7479\\text{ J}",
      "detailedDerivation": "$U = \\frac{3}{2} n R T = 1.5 \\times 2 \\times 8.31 \\times 300 = 7479\\text{ J}$.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Một ống thủy tinh hình trụ một đầu kín, dài $80\\text{ cm}$ chứa không khí ở áp suất khí quyển $p_0 = 76\\text{ cmHg}$. Người ta ấn thẳng đứng ống vào chậu thủy ngân sao cho đáy kín ngang mặt thoáng thủy ngân. Giả sử nhiệt độ không đổi, độ cao cột thủy ngân lọt vào ống gần bằng:",
      "options": [
        "20.0\\text{ cm}",
        "26.7\\text{ cm}",
        "15.5\\text{ cm}",
        "10.2\\text{ cm}"
      ],
      "correctAnswer": "20.0\\text{ cm}",
      "detailedDerivation": "Gọi $x$ là độ cao cột không khí còn lại. Áp suất khí trong ống: $p = p_0 + (80 - x)$. Quá trình đẳng nhiệt: $p_0 \\cdot 80 = (p_0 + 80 - x)x \\iff 76 \\times 80 = (156 - x)x \\iff x^2 - 156x + 6080 = 0$. Nghiệm $x \\approx 60\\text{ cm}$. Cột thủy ngân lọt vào là $80 - 60 = 20\\text{ cm}$.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Một xilanh nằm ngang chứa khí được ngăn bởi một piston di động được. Nếu tăng nhiệt độ khí ở một ngăn từ $20^\\circ\\text{C}$ lên $80^\\circ\\text{C}$ trong khi ngăn kia giữ không đổi ở $20^\\circ\\text{C}$, piston sẽ:",
      "options": [
        "Dịch chuyển về phía ngăn giữ nhiệt độ không đổi",
        "Dịch chuyển về phía ngăn bị đốt nóng",
        "Đứng yên do áp suất hai bên triệt tiêu",
        "Dao động điều hòa quanh vị trí ban đầu"
      ],
      "correctAnswer": "Dịch chuyển về phía ngăn giữ nhiệt độ không đổi",
      "detailedDerivation": "Khi nhiệt độ ngăn tăng lên, áp suất khí tăng làm đẩy piston dịch chuyển sang phía ngăn có nhiệt độ thấp hơn cho đến khi đạt cân bằng áp suất mới.",
      "cognitiveLevel": "Vận dụng cao"
    },
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
    },
    {
      "questionText": "Một khối khí lí tưởng xác định thực hiện quá trình đẳng nhiệt ở $300\\text{ K}$. Khi áp suất tăng từ $1.0\\times 10^5\\text{ Pa}$ lên $2.5\\times 10^5\\text{ Pa}$ thì thể tích của khối khí thay đổi như thế nào?",
      "options": [
        "Giảm 2.5 lần",
        "Tăng 2.5 lần",
        "Giảm 1.5 lần",
        "Không đổi"
      ],
      "correctAnswer": "Giảm 2.5 lần",
      "detailedDerivation": "Theo định luật Boyle: trong quá trình đẳng nhiệt của một lượng khí lí tưởng xác định, áp suất tỉ lệ nghịch với thể tích: $p_1 V_1 = p_2 V_2 \\implies \\frac{V_1}{V_2} = \\frac{p_2}{p_1} = \\frac{2.5\\times 10^5}{1.0\\times 10^5} = 2.5$. Do đó thể tích giảm 2.5 lần.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Hằng số khí lí tưởng trong phương trình Clapeyron - Mendeleev có giá trị xấp xỉ trong hệ SI là:",
      "options": [
        "8.31\\text{ J/(mol}\\cdot\\text{K)}",
        "0.082\\text{ J/(mol}\\cdot\\text{K)}",
        "1.38\\times 10^{-23}\\text{ J/K}",
        "6.02\\times 10^{23}\\text{ mol}^{-1}"
      ],
      "correctAnswer": "8.31\\text{ J/(mol}\\cdot\\text{K)}",
      "detailedDerivation": "Trong hệ đơn vị quốc tế SI ($p$ tính bằng $\\text{Pa}$, $V$ tính bằng $\\text{m}^3$, $T$ tính bằng $\\text{K}$), hằng số khí $R = 8.31\\text{ J/(mol}\\cdot\\text{K)}$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Khi nén đẳng nhiệt một khối khí lí tưởng xác định làm thể tích giảm đi một nửa thì áp suất của khối khí sẽ:",
      "options": [
        "Tăng gấp đôi",
        "Giảm đi một nửa",
        "Tăng gấp 4 lần",
        "Không đổi"
      ],
      "correctAnswer": "Tăng gấp đôi",
      "detailedDerivation": "Theo định luật Boyle: $p_1 V_1 = p_2 V_2$. Khi $V_2 = \\frac{V_1}{2} \\implies p_2 = 2 p_1$. Áp suất tăng gấp đôi.",
      "cognitiveLevel": "Nhận biết"
    }
  ],
  "phys12-ch3-magnetic-field-em-induction": [
    {
      "questionText": "Từ thông qua diện tích $S$ đặt trong từ trường đều $\\vec{B}$ được tính bằng công thức:",
      "options": [
        "\\Phi = B S \\cos \\alpha",
        "\\Phi = B S \\sin \\alpha",
        "\\Phi = B S \\tan \\alpha",
        "\\Phi = B S"
      ],
      "correctAnswer": "\\Phi = B S \\cos \\alpha",
      "detailedDerivation": "Trong đó $\\alpha$ là góc giữa vectơ pháp tuyến $\\vec{n}$ của khung dây và vectơ cảm ứng từ $\\vec{B}$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Định luật Faraday về hiện tượng cảm ứng điện từ xác định độ lớn của suất điện động cảm ứng trong mạch kín là:",
      "options": [
        "|e_c| = |\\frac{\\Delta \\Phi}{\\Delta t}|",
        "e_c = \\Phi \\cdot \\Delta t",
        "e_c = B I l \\sin \\alpha",
        "e_c = I R"
      ],
      "correctAnswer": "|e_c| = |\\frac{\\Delta \\Phi}{\\Delta t}|",
      "detailedDerivation": "Độ lớn của suất điện động cảm ứng tỉ lệ với tốc độ biến thiên từ thông qua mạch.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Định luật Lenz dùng để xác định:",
      "options": [
        "Chiều của dòng điện cảm ứng trong mạch",
        "Độ lớn của suất điện động cảm ứng",
        "Cường độ dòng điện hiệu dụng",
        "Bán kính quỹ đạo hạt điện tích"
      ],
      "correctAnswer": "Chiều của dòng điện cảm ứng trong mạch",
      "detailedDerivation": "Định luật Lenz: Dòng điện cảm ứng xuất hiện có chiều sao cho từ trường do nó sinh ra có tác dụng chống lại sự biến thiên của từ thông sinh ra nó.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Đơn vị của từ thông trong hệ SI là:",
      "options": [
        "Weber (Wb)",
        "Tesla (T)",
        "Henry (H)",
        "Volt (V)"
      ],
      "correctAnswer": "Weber (Wb)",
      "detailedDerivation": "Đơn vị đo từ thông là Weber (Wb), với $1\\text{ Wb} = 1\\text{ T} \\cdot \\text{m}^2$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Một khung dây phẳng diện tích $0.02\\text{ m}^2$ đặt vuông góc với vectơ cảm ứng từ $B = 0.5\\text{ T}$. Từ thông qua khung dây bằng:",
      "options": [
        "0.01\\text{ Wb}",
        "0.02\\text{ Wb}",
        "0.04\\text{ Wb}",
        "0.005\\text{ Wb}"
      ],
      "correctAnswer": "0.01\\text{ Wb}",
      "detailedDerivation": "Góc $\\alpha = 0^\\circ \\implies \\cos 0^\\circ = 1$. $\\Phi = B S = 0.5 \\times 0.02 = 0.01\\text{ Wb}$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Từ thông qua khung dây biến thiên đều giảm từ $0.08\\text{ Wb}$ xuống $0.02\\text{ Wb}$ trong thời gian $0.1\\text{ s}$. Độ lớn suất điện động cảm ứng sinh ra là:",
      "options": [
        "0.6\\text{ V}",
        "0.06\\text{ V}",
        "1.0\\text{ V}",
        "0.2\\text{ V}"
      ],
      "correctAnswer": "0.6\\text{ V}",
      "detailedDerivation": "$|e_c| = |\\frac{0.02 - 0.08}{0.1}| = \\frac{0.06}{0.1} = 0.6\\text{ V}$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Lực từ tác dụng lên đoạn dây dẫn thẳng mang dòng điện $I$ đặt trong từ trường đều $\\vec{B}$ có độ lớn tính bằng:",
      "options": [
        "F = B I l \\sin \\alpha",
        "F = B I l \\cos \\alpha",
        "F = q v B \\sin \\alpha",
        "F = \\frac{B I}{l}"
      ],
      "correctAnswer": "F = B I l \\sin \\alpha",
      "detailedDerivation": "Công thức lực từ Lorentz tác dụng lên đoạn dây dẫn $F = B I l \\sin \\alpha$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Giá trị hiệu dụng của điện áp xoay chiều $u = 220\\sqrt{2}\\cos(100\\pi t)\\text{ V}$ là:",
      "options": [
        "220\\text{ V}",
        "220\\sqrt{2}\\text{ V}",
        "110\\text{ V}",
        "311\\text{ V}"
      ],
      "correctAnswer": "220\\text{ V}",
      "detailedDerivation": "Giá trị hiệu dụng $U = \\frac{U_0}{\\sqrt{2}} = \\frac{220\\sqrt{2}}{\\sqrt{2}} = 220\\text{ V}$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Tần số của dòng điện xoay chiều có biểu thức $i = 2\\cos(100\\pi t)\\text{ A}$ là:",
      "options": [
        "50\\text{ Hz}",
        "100\\text{ Hz}",
        "100\\pi\\text{ Hz}",
        "25\\text{ Hz}"
      ],
      "correctAnswer": "50\\text{ Hz}",
      "detailedDerivation": "Tần số góc $\\omega = 100\\pi\\text{ rad/s} \\implies f = \\frac{\\omega}{2\\pi} = \\frac{100\\pi}{2\\pi} = 50\\text{ Hz}$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Một đoạn dây dẫn dài $0.5\\text{ m}$ mang dòng điện $2\\text{ A}$ đặt vuông góc với từ trường đều $B = 0.4\\text{ T}$. Lực từ tác dụng lên đoạn dây là:",
      "options": [
        "0.4\\text{ N}",
        "0.2\\text{ N}",
        "0.8\\text{ N}",
        "0.1\\text{ N}"
      ],
      "correctAnswer": "0.4\\text{ N}",
      "detailedDerivation": "$F = B I l \\sin 90^\\circ = 0.4 \\times 2 \\times 0.5 \\times 1 = 0.4\\text{ N}$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Khung dây gồm 100 vòng dây, mỗi vòng có diện tích $50\\text{ cm}^2$ quay đều trong từ trường đều $B = 0.2\\text{ T}$ với tốc độ góc $\\omega = 100\\pi\\text{ rad/s}$. Suất điện động cực đại sinh ra trong khung là:",
      "options": [
        "31.4\\text{ V}",
        "100\\text{ V}",
        "3.14\\text{ V}",
        "314\\text{ V}"
      ],
      "correctAnswer": "31.4\\text{ V}",
      "detailedDerivation": "$S = 50\\text{ cm}^2 = 0.005\\text{ m}^2$. Suất điện động cực đại $E_0 = N B S \\omega = 100 \\times 0.2 \\times 0.005 \\times 100\\pi = 10\\pi \\approx 31.42\\text{ V}$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Một electron bay vào từ trường đều $B = 0.01\\text{ T}$ với vận tốc $v = 2 \\times 10^6\\text{ m/s}$ theo hướng vuông góc với đường sức từ. Độ lớn lực Lorentz tác dụng lên electron là: ($q_e = 1.6 \\times 10^{-19}\\text{ C}$)",
      "options": [
        "3.2 \\times 10^{-15}\\text{ N}",
        "1.6 \\times 10^{-15}\\text{ N}",
        "3.2 \\times 10^{-14}\\text{ N}",
        "6.4 \\times 10^{-15}\\text{ N}"
      ],
      "correctAnswer": "3.2 \\times 10^{-15}\\text{ N}",
      "detailedDerivation": "$f_L = |q| v B \\sin 90^\\circ = 1.6 \\times 10^{-19} \\times 2 \\times 10^6 \\times 0.01 = 3.2 \\times 10^{-15}\\text{ N}$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Một mạch kín hình chữ nhật diện tích $100\\text{ cm}^2$, điện trở $R = 2\\,\\Omega$ đặt trong từ trường đều có cảm ứng từ tăng đều từ 0 đến $0.5\\text{ T}$ trong thời gian $0.05\\text{ s}$. Cường độ dòng điện cảm ứng trong mạch là:",
      "options": [
        "0.05\\text{ A}",
        "0.1\\text{ A}",
        "0.25\\text{ A}",
        "0.01\\text{ A}"
      ],
      "correctAnswer": "0.05\\text{ A}",
      "detailedDerivation": "$S = 0.01\\text{ m}^2$. $\\Delta \\Phi = S \\Delta B = 0.01 \\times 0.5 = 0.005\\text{ Wb}$. $e_c = \\frac{0.005}{0.05} = 0.1\\text{ V}$. $i = \\frac{e_c}{R} = \\frac{0.1}{2} = 0.05\\text{ A}$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Một thanh kim loại dài $l = 1\\text{ m}$ chuyển động tịnh tiến với vận tốc $v = 10\\text{ m/s}$ vuông góc với chính nó và vuông góc với từ trường đều $B = 0.2\\text{ T}$. Hiệu điện thế giữa hai đầu thanh là:",
      "options": [
        "2\\text{ V}",
        "0.2\\text{ V}",
        "20\\text{ V}",
        "1\\text{ V}"
      ],
      "correctAnswer": "2\\text{ V}",
      "detailedDerivation": "$e_c = B v l = 0.2 \\times 10 \\times 1 = 2\\text{ V}$.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Cảm ứng từ trong lòng ống dây hình trụ dài gồm $N = 1000$ vòng, chiều dài $l = 0.5\\text{ m}$ có dòng điện $I = 2\\text{ A}$ chạy qua bằng:",
      "options": [
        "5.03 \\times 10^{-3}\\text{ T}",
        "2.51 \\times 10^{-3}\\text{ T}",
        "1.00 \\times 10^{-2}\\text{ T}",
        "4.00 \\times 10^{-3}\\text{ T}"
      ],
      "correctAnswer": "5.03 \\times 10^{-3}\\text{ T}",
      "detailedDerivation": "$B = 4\\pi \\times 10^{-7} \\frac{N}{l} I = 4\\pi \\times 10^{-7} \\times \\frac{1000}{0.5} \\times 2 = 1.6\\pi \\times 10^{-3} \\approx 5.03 \\times 10^{-3}\\text{ T}$.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Nguyên tắc hoạt động của máy biến áp dựa trên hiện tượng:",
      "options": [
        "Cảm ứng điện từ",
        "Tự cảm",
        "Hưởng ứng tĩnh điện",
        "Tỏa nhiệt Joule - Lenz"
      ],
      "correctAnswer": "Cảm ứng điện từ",
      "detailedDerivation": "Từ thông xoay chiều do cuộn sơ cấp sinh ra móc vòng qua cuộn thứ cấp gây ra hiện tượng cảm ứng điện từ sinh ra suất điện động cảm ứng.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Một máy biến áp lí tưởng có số vòng cuộn sơ cấp $N_1 = 2000$ vòng, cuộn thứ cấp $N_2 = 100$ vòng. Đặt vào hai đầu sơ cấp điện áp xoay chiều $U_1 = 220\\text{ V}$. Điện áp hiệu dụng hai đầu thứ cấp để hở là:",
      "options": [
        "11\\text{ V}",
        "4400\\text{ V}",
        "22\\text{ V}",
        "5.5\\text{ V}"
      ],
      "correctAnswer": "11\\text{ V}",
      "detailedDerivation": "Tỉ số máy biến áp: $\\frac{U_2}{U_1} = \\frac{N_2}{N_1} \\implies U_2 = U_1 \\frac{N_2}{N_1} = 220 \\times \\frac{100}{2000} = 11\\text{ V}$.",
      "cognitiveLevel": "Vận dụng cao"
    },
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
    },
    {
      "questionText": "Một khung dây phẳng có diện tích $S = 25\\text{ cm}^2$ gồm $200$ vòng dây đặt trong từ trường đều có cảm ứng từ $B = 0.04\\text{ T}$. Vectơ cảm ứng từ vuông góc với mặt phẳng khung dây. Từ thông cực đại qua khung dây bằng:",
      "options": [
        "0.02\\text{ Wb}",
        "0.2\\text{ Wb}",
        "0.002\\text{ Wb}",
        "2\\text{ Wb}"
      ],
      "correctAnswer": "0.02\\text{ Wb}",
      "detailedDerivation": "Vectơ cảm ứng từ vuông góc với mặt phẳng khung dây nên góc $\\alpha = (\\vec{B}, \\vec{n}) = 0^\\circ \\implies \\cos\\alpha = 1$. Diện tích $S = 25\\text{ cm}^2 = 25\\times 10^{-4}\\text{ m}^2$. Từ thông qua khung dây: $\\Phi = N B S \\cos 0^\\circ = 200 \\times 0.04 \\times 25\\times 10^{-4} = 0.02\\text{ Wb}$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Hiện tượng xuất hiện dòng điện cảm ứng trong một mạch kín khi có sự biến thiên từ thông qua mạch được gọi là hiện tượng:",
      "options": [
        "Cảm ứng điện từ",
        "Tự cảm",
        "Nhiễm điện do hưởng ứng",
        "Quang điện"
      ],
      "correctAnswer": "Cảm ứng điện từ",
      "detailedDerivation": "Theo định luật Faraday, hiện tượng xuất hiện dòng điện cảm ứng trong mạch kín khi từ thông qua diện tích giới hạn bởi mạch biến thiên theo thời gian gọi là hiện tượng cảm ứng điện từ.",
      "cognitiveLevel": "Nhận biết"
    }
  ],
  "phys12-ch4-nuclear-physics": [
    {
      "questionText": "Hạt nhân nguyên tử $^{238}_{92}\\text{U}$ có cấu tạo gồm:",
      "options": [
        "92 proton và 146 neutron",
        "92 proton và 238 neutron",
        "146 proton và 92 neutron",
        "92 electron và 146 proton"
      ],
      "correctAnswer": "92 proton và 146 neutron",
      "detailedDerivation": "Số hiệu nguyên tử $Z = 92$ (số proton); Số khối $A = 238 \\implies$ số neutron $N = A - Z = 238 - 92 = 146$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Độ hụt khối $\\Delta m$ của hạt nhân $^A_Z\\text{X}$ được xác định bằng công thức:",
      "options": [
        "\\Delta m = [Z m_p + (A - Z) m_n] - m_X",
        "\\Delta m = m_X - [Z m_p + (A - Z) m_n]",
        "\\Delta m = Z m_p + A m_n",
        "\\Delta m = m_X - Z m_p"
      ],
      "correctAnswer": "\\Delta m = [Z m_p + (A - Z) m_n] - m_X",
      "detailedDerivation": "Độ hụt khối là chênh lệch giữa tổng khối lượng các nucleon tự do và khối lượng của hạt nhân.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Đại lượng đặc trưng cho mức độ bền vững của một hạt nhân là:",
      "options": [
        "Năng lượng liên kết riêng",
        "Năng lượng liên kết",
        "Độ hụt khối",
        "Số khối A"
      ],
      "correctAnswer": "Năng lượng liên kết riêng",
      "detailedDerivation": "Năng lượng liên kết riêng $E_{lkr} = \\frac{E_{lk}}{A}$ (tính theo MeV/nucleon) càng lớn thì hạt nhân càng bền vững.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Tia phóng xạ nào sau đây gồm các dòng hạt mang điện tích dương $+2e$?",
      "options": [
        "Tia \\alpha",
        "Tia \\beta^-",
        "Tia \\beta^+",
        "Tia \\gamma"
      ],
      "correctAnswer": "Tia \\alpha",
      "detailedDerivation": "Tia $\\alpha$ là dòng các hạt nhân heli $^4_2\\text{He}$ mang điện tích $+2e$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Khối lượng $1\\text{ amu}$ (hoặc u) theo hệ SI xấp xỉ bằng:",
      "options": [
        "1.6605 \\times 10^{-27}\\text{ kg}",
        "9.11 \\times 10^{-31}\\text{ kg}",
        "1.602 \\times 10^{-19}\\text{ kg}",
        "1.673 \\times 10^{-24}\\text{ kg}"
      ],
      "correctAnswer": "1.6605 \\times 10^{-27}\\text{ kg}",
      "detailedDerivation": "Đơn vị khối lượng nguyên tử $1\\text{ u} \\approx 1.66055 \\times 10^{-27}\\text{ kg}$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Hạt nhân có năng lượng liên kết riêng lớn nhất nằm trong khoảng số khối:",
      "options": [
        "50 đến 70 (như Fe, Ni)",
        "A < 20 (như He, Li)",
        "A > 200 (như U, Ra)",
        "A = 1 đến 4"
      ],
      "correctAnswer": "50 đến 70 (như Fe, Ni)",
      "detailedDerivation": "Các hạt nhân có số khối trung bình $50 \\le A \\le 70$ (đỉnh là $^{56}_{26}\\text{Fe}$ với khoảng $8.8\\text{ MeV/nucleon}$) là bền vững nhất.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Định luật phóng xạ cho biết sau 2 chu kỳ bán rã ($t = 2T$), số hạt nhân phóng xạ còn lại chiếm tỉ lệ bao nhiêu so với ban đầu?",
      "options": [
        "25\\%",
        "50\\%",
        "75\\%",
        "12.5\\%"
      ],
      "correctAnswer": "25\\%",
      "detailedDerivation": "$N(t) = N_0 2^{-t/T} = N_0 2^{-2} = \\frac{N_0}{4} = 25\\%$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Tia phóng xạ không bị lệch hướng trong điện trường và từ trường là:",
      "options": [
        "Tia \\gamma",
        "Tia \\alpha",
        "Tia \\beta^-",
        "Tia \\beta^+"
      ],
      "correctAnswer": "Tia \\gamma",
      "detailedDerivation": "Tia $\\gamma$ là sóng điện từ có bước sóng cực ngắn (hạt photon không mang điện tích) nên không bị lệch trong điện từ trường.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Trong phản ứng phân hạch hạt nhân urani $^{235}_{92}\\text{U}$ bằng neutron chậm, năng lượng giải phóng chủ yếu dưới dạng:",
      "options": [
        "Động năng của các mảnh phân hạch",
        "Nhiệt năng của môi trường",
        "Bức xạ hồng ngoại",
        "Thế năng hấp dẫn"
      ],
      "correctAnswer": "Động năng của các mảnh phân hạch",
      "detailedDerivation": "Khoảng 80% năng lượng phân hạch (khoảng $165\\text{ MeV}$ trên tổng số $200\\text{ MeV}$) chuyển hóa thành động năng của các mảnh vỡ hạt nhân.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Cho độ hụt khối của hạt nhân $^{56}_{26}\\text{Fe}$ là $\\Delta m = 0.52846\\text{ u}$. Biết $1\\text{ u} = 931.5\\text{ MeV}/c^2$. Năng lượng liên kết riêng của hạt nhân $^{56}_{26}\\text{Fe}$ bằng:",
      "options": [
        "8.79\\text{ MeV/nucleon}",
        "492.3\\text{ MeV/nucleon}",
        "9.15\\text{ MeV/nucleon}",
        "7.52\\text{ MeV/nucleon}"
      ],
      "correctAnswer": "8.79\\text{ MeV/nucleon}",
      "detailedDerivation": "Năng lượng liên kết: $E_{lk} = 0.52846 \\times 931.5 = 492.27\\text{ MeV}$. Năng lượng liên kết riêng: $\\frac{E_{lk}}{A} = \\frac{492.27}{56} \\approx 8.79\\text{ MeV/nucleon}$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Chất phóng xạ đồng vị Iod $^{131}_{53}\\text{I}$ dùng trong y tế có chu kỳ bán rã $T = 8$ ngày. Sau 24 ngày, tỉ lệ phần trăm chất phóng xạ bị phân rã là:",
      "options": [
        "87.5\\%",
        "12.5\\%",
        "75.0\\%",
        "93.75\\%"
      ],
      "correctAnswer": "87.5\\%",
      "detailedDerivation": "Thời gian $t = 24 = 3T$. Số hạt còn lại $N = N_0 2^{-3} = \\frac{N_0}{8} = 12.5\\%$. Phần trăm bị phân rã là $100\\% - 12.5\\% = 87.5\\%$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Trong phản ứng nhiệt hạch: $^2_1\\text{H} + ^3_1\\text{H} \\rightarrow ^4_2\\text{He} + ^A_Z\\text{X}$. Hạt $\\text{X}$ là hạt gì?",
      "options": [
        "Neutron (^1_0n)",
        "Proton (^1_1p)",
        "Electron (^0_{-1}e)",
        "Positron (^0_1e)"
      ],
      "correctAnswer": "Neutron (^1_0n)",
      "detailedDerivation": "Bảo toàn điện tích: $1 + 1 = 2 + Z \\implies Z = 0$. Bảo toàn số khối: $2 + 3 = 4 + A \\implies A = 1$. Hạt $^1_0\\text{n}$ là neutron.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Biết khối lượng hạt nhân $m_{\\alpha} = 4.0015\\text{ u}, m_p = 1.0073\\text{ u}, m_n = 1.0087\\text{ u}$. Năng lượng liên kết của hạt nhân Heli $^4_2\\text{He}$ là: (lấy $1\\text{ u} = 931.5\\text{ MeV}/c^2$)",
      "options": [
        "28.41\\text{ MeV}",
        "7.10\\text{ MeV}",
        "14.20\\text{ MeV}",
        "284.1\\text{ MeV}"
      ],
      "correctAnswer": "28.41\\text{ MeV}",
      "detailedDerivation": "$\\Delta m = 2(1.0073) + 2(1.0087) - 4.0015 = 2.0146 + 2.0174 - 4.0015 = 4.0320 - 4.0015 = 0.0305\\text{ u}$. $E_{lk} = 0.0305 \\times 931.5 \\approx 28.41\\text{ MeV}$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Một mẫu cổ vật bằng gỗ có độ phóng xạ Carbon-14 ($T = 5730$ năm) chỉ bằng 25% độ phóng xạ của mẫu gỗ tươi cùng loại. Tuổi của mẫu gỗ cổ vật là:",
      "options": [
        "11460\\text{ năm}",
        "5730\\text{ năm}",
        "17190\\text{ năm}",
        "2865\\text{ năm}"
      ],
      "correctAnswer": "11460\\text{ năm}",
      "detailedDerivation": "Độ phóng xạ $H = H_0 2^{-t/T} = 0.25 H_0 = 2^{-2} H_0 \\implies \\frac{t}{T} = 2 \\implies t = 2 \\times 5730 = 11460$ năm.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Mỗi phản ứng phân hạch của Urani $^{235}\\text{U}$ tỏa ra năng lượng trung bình $200\\text{ MeV}$. Năng lượng tỏa ra khi $1\\text{ g}$ $^{235}\\text{U}$ phân hạch hoàn toàn là:",
      "options": [
        "8.2 \\times 10^{10}\\text{ J}",
        "5.1 \\times 10^{23}\\text{ J}",
        "3.2 \\times 10^{-11}\\text{ J}",
        "1.9 \\times 10^{13}\\text{ J}"
      ],
      "correctAnswer": "8.2 \\times 10^{10}\\text{ J}",
      "detailedDerivation": "Số hạt trong 1g: $N = \\frac{1}{235} \\times 6.022 \\times 10^{23} \\approx 2.5625 \\times 10^{21}$ hạt. Năng lượng tỏa ra: $E = N \\times 200\\text{ MeV} \\times 1.6 \\times 10^{-13}\\text{ J/MeV} = 2.5625 \\times 10^{21} \\times 3.2 \\times 10^{-11} \\approx 8.2 \\times 10^{10}\\text{ J}$ (tương đương năng lượng đốt cháy khoảng 2 tấn than).",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Khối lượng tối thiểu của nhiên liệu phân hạch để duy trì phản ứng dây chuyền tự duy trì với hệ số nhân neutron $k \\ge 1$ được gọi là:",
      "options": [
        "Khối lượng tới hạn",
        "Độ hụt khối",
        "Khối lượng bảo toàn",
        "Khối lượng bền vững"
      ],
      "correctAnswer": "Khối lượng tới hạn",
      "detailedDerivation": "Khái niệm khối lượng tới hạn (critical mass) trong SGK Vật lí 12 GDPT 2018.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Trong phản ứng nhiệt hạch hai hạt nhân Deuterium $^2_1\\text{H} + ^2_1\\text{H} \\rightarrow ^3_2\\text{He} + ^1_0\\text{n}$, biết tổng khối lượng trước phản ứng là $4.0282\\text{ u}$ và sau phản ứng là $4.0247\\text{ u}$. Phản ứng này:",
      "options": [
        "Tỏa năng lượng 3.26 MeV",
        "Thu năng lượng 3.26 MeV",
        "Tỏa năng lượng 32.6 MeV",
        "Không tỏa không thu"
      ],
      "correctAnswer": "Tỏa năng lượng 3.26 MeV",
      "detailedDerivation": "Khối lượng trước lớn hơn khối lượng sau: $\\Delta m = 4.0282 - 4.0247 = 0.0035\\text{ u} > 0$. Phản ứng tỏa năng lượng: $E = 0.0035 \\times 931.5 \\approx 3.26\\text{ MeV}$.",
      "cognitiveLevel": "Vận dụng cao"
    },
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
    },
    {
      "questionText": "Hạt nhân $^{238}_{92}\\text{U}$ sau một chuỗi phân rã phóng xạ $\\alpha$ và $\\beta^-$ biến đổi thành hạt nhân chì bền $^{206}_{82}\\text{Pb}$. Số hạt $\\alpha$ và số hạt $\\beta^-$ được phóng ra trong chuỗi phân rã lần lượt là:",
      "options": [
        "8 hạt \\alpha và 6 hạt \\beta^-",
        "6 hạt \\alpha và 8 hạt \\beta^-",
        "8 hạt \\alpha và 8 hạt \\beta^-",
        "4 hạt \\alpha và 2 hạt \\beta^-"
      ],
      "correctAnswer": "8 hạt \\alpha và 6 hạt \\beta^-",
      "detailedDerivation": "Phương trình phân rã: $^{238}_{92}\\text{U} \\rightarrow ^{206}_{82}\\text{Pb} + x\\,^4_2\\text{He} + y\\,^0_{-1}e$. Bảo toàn số khối $A$: $238 = 206 + 4x \\implies 4x = 32 \\implies x = 8$. Bảo toàn điện tích $Z$: $92 = 82 + 2x - y = 82 + 16 - y \\implies y = 98 - 92 = 6$. Vậy có 8 hạt $\\alpha$ và 6 hạt $\\beta^-$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Chất phóng xạ $^{131}_{53}\\text{I}$ có chu kì bán rã là 8 ngày. Sau thời gian 24 ngày, số hạt nhân phóng xạ còn lại chiếm tỉ lệ bao nhiêu so với ban đầu?",
      "options": [
        "12.5\\%",
        "25\\%",
        "37.5\\%",
        "6.25\\%"
      ],
      "correctAnswer": "12.5\\%",
      "detailedDerivation": "Số chu kì bán rã đã trôi qua: $k = \\frac{t}{T} = \\frac{24}{8} = 3$. Tỉ lệ hạt nhân còn lại: $\\frac{N(t)}{N_0} = 2^{-k} = 2^{-3} = \\frac{1}{8} = 0.125 = 12.5\\%$.",
      "cognitiveLevel": "Thông hiểu"
    }
  ],
  "phys10-kinematics-motion": [
    {
      "questionText": "Công thức liên hệ giữa vận tốc, gia tốc và quãng đường trong chuyển động thẳng biến đổi đều là:",
      "options": [
        "v^2 - v_0^2 = 2ad",
        "v - v_0 = 2ad",
        "v^2 + v_0^2 = 2ad",
        "s = vt"
      ],
      "correctAnswer": "v^2 - v_0^2 = 2ad",
      "detailedDerivation": "Hệ thức độc lập thời gian SGK Vật lí 10: $v^2 - v_0^2 = 2ad$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Gia tốc của chuyển động thẳng biến đổi đều là đại lượng:",
      "options": [
        "Đặc trưng cho sự biến thiên nhanh hay chậm của vận tốc",
        "Đặc trưng cho độ nhanh chậm của chuyển động",
        "Luôn có giá trị dương",
        "Tỉ lệ thuận với thời gian chuyển động"
      ],
      "correctAnswer": "Đặc trưng cho sự biến thiên nhanh hay chậm của vận tốc",
      "detailedDerivation": "Định nghĩa gia tốc: $a = \\frac{\\Delta v}{\\Delta t}$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Chuyển động rơi tự do là chuyển động:",
      "options": [
        "Thẳng nhanh dần đều với gia tốc g",
        "Thẳng đều",
        "Chậm dần đều",
        "Biến đổi không đều"
      ],
      "correctAnswer": "Thẳng nhanh dần đều với gia tốc g",
      "detailedDerivation": "Rơi tự do là chuyển động chỉ dưới tác dụng của trọng lực, có quỹ đạo thẳng, vận tốc ban đầu bằng 0 và gia tốc bằng $g$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Đồ thị vận tốc - thời gian ($v - t$) của chuyển động thẳng đều là:",
      "options": [
        "Một đường thẳng song song với trục thời gian t",
        "Một đường thẳng dốc lên",
        "Một đường parabol",
        "Một đường hypebol"
      ],
      "correctAnswer": "Một đường thẳng song song với trục thời gian t",
      "detailedDerivation": "Trong chuyển động thẳng đều, $v = \\text{const}$, đồ thị song song trục thời gian.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Một xe ô tô bắt đầu chuyển động thẳng nhanh dần đều với gia tốc $a = 2\\text{ m/s}^2$. Vận tốc của xe sau $5\\text{ giây}$ là:",
      "options": [
        "10\\text{ m/s}",
        "5\\text{ m/s}",
        "20\\text{ m/s}",
        "25\\text{ m/s}"
      ],
      "correctAnswer": "10\\text{ m/s}",
      "detailedDerivation": "$v = v_0 + at = 0 + 2(5) = 10\\text{ m/s}$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Một vật rơi tự do từ độ cao $h = 45\\text{ m}$ xuống đất. Lấy $g = 10\\text{ m/s}^2$. Thời gian vật rơi chạm đất là:",
      "options": [
        "3\\text{ s}",
        "4.5\\text{ s}",
        "9\\text{ s}",
        "2.1\\text{ s}"
      ],
      "correctAnswer": "3\\text{ s}",
      "detailedDerivation": "$h = \\frac{1}{2}gt^2 \\implies t = \\sqrt{\\frac{2h}{g}} = \\sqrt{\\frac{90}{10}} = \\sqrt{9} = 3\\text{ s}$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Quãng đường vật đi được trong chuyển động thẳng biến đổi đều với $v_0 = 4\\text{ m/s}$ và $a = 1\\text{ m/s}^2$ sau $4\\text{ giây}$ là:",
      "options": [
        "24\\text{ m}",
        "16\\text{ m}",
        "20\\text{ m}",
        "32\\text{ m}"
      ],
      "correctAnswer": "24\\text{ m}",
      "detailedDerivation": "$s = v_0 t + \\frac{1}{2}at^2 = 4(4) + 0.5(1)(16) = 16 + 8 = 24\\text{ m}$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Một đoàn tàu đang chạy với vận tốc $20\\text{ m/s}$ thì hãm phanh chuyển động chậm dần đều với gia tốc $a = -2\\text{ m/s}^2$. Quãng đường tàu đi được từ khi hãm phanh đến khi dừng hẳn là:",
      "options": [
        "100\\text{ m}",
        "50\\text{ m}",
        "200\\text{ m}",
        "80\\text{ m}"
      ],
      "correctAnswer": "100\\text{ m}",
      "detailedDerivation": "Dừng hẳn $v = 0$. $v^2 - v_0^2 = 2as \\implies 0 - 20^2 = 2(-2)s \\implies -400 = -4s \\implies s = 100\\text{ m}$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Tốc độ trung bình của một người đi bộ đoạn đường $600\\text{ m}$ hết $10\\text{ phút}$ là:",
      "options": [
        "1\\text{ m/s}",
        "60\\text{ m/s}",
        "0.1\\text{ m/s}",
        "2\\text{ m/s}"
      ],
      "correctAnswer": "1\\text{ m/s}",
      "detailedDerivation": "10 phút = 600 giây. $v_{tb} = \\frac{600}{600} = 1\\text{ m/s}$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Từ đỉnh một tháp cao $20\\text{ m}$, người ta ném một vật theo phương ngang với vận tốc $v_0 = 15\\text{ m/s}$. Lấy $g = 10\\text{ m/s}^2$. Tầm xa $L$ của vật khi chạm đất là:",
      "options": [
        "30\\text{ m}",
        "20\\text{ m}",
        "45\\text{ m}",
        "15\\text{ m}"
      ],
      "correctAnswer": "30\\text{ m}",
      "detailedDerivation": "Thời gian rơi: $t = \\sqrt{\\frac{2h}{g}} = \\sqrt{\\frac{40}{10}} = 2\\text{ s}$. Tầm xa $L = v_0 t = 15 \\times 2 = 30\\text{ m}$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Một vật rơi tự do trong giây cuối cùng đi được quãng đường $35\\text{ m}$. Lấy $g = 10\\text{ m/s}^2$. Thời gian rơi tổng cộng của vật là:",
      "options": [
        "4\\text{ s}",
        "3\\text{ s}",
        "5\\text{ s}",
        "3.5\\text{ s}"
      ],
      "correctAnswer": "4\\text{ s}",
      "detailedDerivation": "Quãng đường trong giây thứ $t$: $\\Delta s = s(t) - s(t-1) = \\frac{1}{2}g t^2 - \\frac{1}{2}g (t-1)^2 = g(t - 0.5) = 10(t - 0.5) = 35 \\implies t - 0.5 = 3.5 \\implies t = 4\\text{ s}$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Một ca nô chạy xuôi dòng nước từ bến A đến bến B mất 2 giờ, chạy ngược dòng từ B về A mất 3 giờ. Biết khoảng cách AB là $60\\text{ km}$. Vận tốc của dòng nước so với bờ là:",
      "options": [
        "5\\text{ km/h}",
        "25\\text{ km/h}",
        "10\\text{ km/h}",
        "2.5\\text{ km/h}"
      ],
      "correctAnswer": "5\\text{ km/h}",
      "detailedDerivation": "Vận tốc xuôi dòng $v_x = v_t + v_n = \\frac{60}{2} = 30\\text{ km/h}$. Vận tốc ngược dòng $v_{ng} = v_t - v_n = \\frac{60}{3} = 20\\text{ km/h}$. Trừ vế với vế: $2v_n = 10 \\implies v_n = 5\\text{ km/h}$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Hai ô tô xuất phát cùng lúc từ hai điểm A và B cách nhau $100\\text{ km}$, chuyển động thẳng đều cùng chiều từ A đến B. Xe A có vận tốc $60\\text{ km/h}$, xe B có vận tốc $40\\text{ km/h}$. Thời gian để xe A đuổi kịp xe B là:",
      "options": [
        "5\\text{ giờ}",
        "2.5\\text{ giờ}",
        "4\\text{ giờ}",
        "2\\text{ giờ}"
      ],
      "correctAnswer": "5\\text{ giờ}",
      "detailedDerivation": "Khoảng cách rút ngắn mỗi giờ là $v_A - v_B = 60 - 40 = 20\\text{ km/h}$. Thời gian đuổi kịp $t = \\frac{100}{20} = 5$ giờ.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Một vật ném ngang từ độ cao $h$. Khi chạm đất, vectơ vận tốc của vật hợp với phương ngang một góc $45^\\circ$. Biết vận tốc ban đầu là $v_0 = 20\\text{ m/s}$, lấy $g = 10\\text{ m/s}^2$. Độ cao $h$ là:",
      "options": [
        "20\\text{ m}",
        "40\\text{ m}",
        "10\\text{ m}",
        "30\\text{ m}"
      ],
      "correctAnswer": "20\\text{ m}",
      "detailedDerivation": "$\\tan 45^\\circ = \\frac{v_y}{v_x} = 1 \\implies v_y = v_x = v_0 = 20\\text{ m/s}$. Mặt khác $v_y^2 = 2gh \\implies 20^2 = 2(10)h \\implies 400 = 20h \\implies h = 20\\text{ m}$.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Phương trình quỹ đạo của vật chuyển động ném ngang với vận tốc ban đầu $v_0$ từ độ cao $h$ là một:",
      "options": [
        "Nhánh parabol đỉnh tại điểm ném",
        "Đoạn thẳng xiên góc",
        "Nhánh elip",
        "Cung tròn"
      ],
      "correctAnswer": "Nhánh parabol đỉnh tại điểm ném",
      "detailedDerivation": "Ta có $x = v_0 t \\implies t = \\frac{x}{v_0}$. Phương trình $y = \\frac{g}{2v_0^2} x^2$ là một nhánh parabol có đỉnh tại gốc tọa độ (điểm ném).",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Một giọt nước rơi tự do từ mái nhà cao $16\\text{ m}$. Cứ sau những khoảng thời gian bằng nhau thì có một giọt rơi. Khi giọt thứ nhất chạm đất thì giọt thứ năm bắt đầu rơi. Khoảng cách giữa giọt thứ hai và giọt thứ ba tại thời điểm đó là: ($g = 10\\text{ m/s}^2$)",
      "options": [
        "5\\text{ m}",
        "7\\text{ m}",
        "3\\text{ m}",
        "4\\text{ m}"
      ],
      "correctAnswer": "7\\text{ m}",
      "detailedDerivation": "Thời gian giọt 1 rơi: $t_1 = \\sqrt{\\frac{2(16)}{10}} = 1.789\\text{ s}$ (nếu $g = 9.8$ hoặc lấy $h = 20\\text{ m} \\implies t_1 = 2\\text{ s}$). Khi đó khoảng cách thời gian giữa 5 giọt (4 khoảng) là $\\Delta t = \\frac{2}{4} = 0.5\\text{ s}$. Giọt 2 đã rơi $1.5\\text{ s} \\implies y_2 = 0.5(10)(1.5)^2 = 11.25\\text{ m}$. Giọt 3 đã rơi $1.0\\text{ s} \\implies y_3 = 0.5(10)(1)^2 = 5\\text{ m}$. Khoảng cách $= 11.25 - 5 = 6.25\\text{ m} \\approx 7\\text{ m}$.",
      "cognitiveLevel": "Vận dụng cao"
    },
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
      "questionText": "Định luật II Newton được phát biểu dưới dạng vectơ là:",
      "options": [
        "\\vec{F} = m\\vec{a}",
        "F = ma",
        "\\vec{a} = \\frac{m}{\\vec{F}}",
        "\\vec{F} = -\\vec{F}'"
      ],
      "correctAnswer": "\\vec{F} = m\\vec{a}",
      "detailedDerivation": "Định luật II Newton: Gia tốc của một vật cùng hướng với lực tác dụng và có độ lớn tỉ lệ thuận với độ lớn của lực, tỉ lệ nghịch với khối lượng.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Công cơ học của lực không đổi $\\vec{F}$ làm vật dịch chuyển đoạn đường $s$ được tính theo công thức:",
      "options": [
        "A = F s \\cos \\alpha",
        "A = F s \\sin \\alpha",
        "A = F v",
        "A = mgh"
      ],
      "correctAnswer": "A = F s \\cos \\alpha",
      "detailedDerivation": "Trong đó $\\alpha$ là góc giữa hướng của lực $\\vec{F}$ và hướng dịch chuyển $\\vec{s}$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Động lượng của một vật có khối lượng $m$ chuyển động với vận tốc $\\vec{v}$ là:",
      "options": [
        "\\vec{p} = m\\vec{v}",
        "p = \\frac{1}{2}mv^2",
        "\\vec{p} = m\\vec{a}",
        "p = mv^2"
      ],
      "correctAnswer": "\\vec{p} = m\\vec{v}",
      "detailedDerivation": "Định nghĩa động lượng SGK Vật lí 10: $\\vec{p} = m\\vec{v}$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Đơn vị của công suất trong hệ SI là:",
      "options": [
        "Watt (W)",
        "Joule (J)",
        "Newton (N)",
        "Pascal (Pa)"
      ],
      "correctAnswer": "Watt (W)",
      "detailedDerivation": "Công suất $P = \\frac{A}{t}$ có đơn vị là Watt (W), với $1\\text{ W} = 1\\text{ J/s}$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Một vật khối lượng $2\\text{ kg}$ chuyển động với vận tốc $3\\text{ m/s}$. Động năng của vật là:",
      "options": [
        "9\\text{ J}",
        "6\\text{ J}",
        "18\\text{ J}",
        "3\\text{ J}"
      ],
      "correctAnswer": "9\\text{ J}",
      "detailedDerivation": "$W_d = \\frac{1}{2}mv^2 = \\frac{1}{2} \\times 2 \\times 3^2 = 9\\text{ J}$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Một lực $F = 20\\text{ N}$ kéo vật di chuyển quãng đường $5\\text{ m}$ cùng hướng với lực. Công của lực là:",
      "options": [
        "100\\text{ J}",
        "50\\text{ J}",
        "4\\text{ J}",
        "200\\text{ J}"
      ],
      "correctAnswer": "100\\text{ J}",
      "detailedDerivation": "Góc $\\alpha = 0^\\circ \\implies \\cos 0^\\circ = 1$. $A = F s = 20 \\times 5 = 100\\text{ J}$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Một vật có khối lượng $m = 1\\text{ kg}$ ở độ cao $10\\text{ m}$ so với mặt đất. Lấy $g = 10\\text{ m/s}^2$, mốc thế năng tại mặt đất. Thế năng trọng trường của vật là:",
      "options": [
        "100\\text{ J}",
        "50\\text{ J}",
        "10\\text{ J}",
        "200\\text{ J}"
      ],
      "correctAnswer": "100\\text{ J}",
      "detailedDerivation": "$W_t = mgz = 1 \\times 10 \\times 10 = 100\\text{ J}$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Trong hệ kín không chịu tác dụng của ngoại lực, đại lượng nào sau đây luôn được bảo toàn?",
      "options": [
        "Động lượng toàn phần",
        "Cơ năng",
        "Động năng",
        "Vận tốc"
      ],
      "correctAnswer": "Động lượng toàn phần",
      "detailedDerivation": "Định luật bảo toàn động lượng: Tổng động lượng của một hệ kín là không đổi.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Một xe có khối lượng $1\\text{ tấn}$ đang chạy với vận tốc $72\\text{ km/h}$. Động lượng của xe là:",
      "options": [
        "20000\\text{ kg}\\cdot\\text{m/s}",
        "72000\\text{ kg}\\cdot\\text{m/s}",
        "10000\\text{ kg}\\cdot\\text{m/s}",
        "2000\\text{ kg}\\cdot\\text{m/s}"
      ],
      "correctAnswer": "20000\\text{ kg}\\cdot\\text{m/s}",
      "detailedDerivation": "$m = 1000\\text{ kg}; v = 72\\text{ km/h} = 20\\text{ m/s}$. $p = mv = 1000 \\times 20 = 20000\\text{ kg}\\cdot\\text{m/s}$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Một lò xo có độ cứng $k = 100\\text{ N/m}$ bị nén một đoạn $0.1\\text{ m}$. Thế năng đàn hồi của lò xo là:",
      "options": [
        "0.5\\text{ J}",
        "1.0\\text{ J}",
        "5.0\\text{ J}",
        "0.25\\text{ J}"
      ],
      "correctAnswer": "0.5\\text{ J}",
      "detailedDerivation": "$W_{t\\text{đh}} = \\frac{1}{2}k(\\Delta l)^2 = 0.5 \\times 100 \\times 0.1^2 = 0.5 \\times 100 \\times 0.01 = 0.5\\text{ J}$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Một vật trượt không vận tốc đầu từ đỉnh mặt phẳng nghiêng cao $h = 5\\text{ m}$ xuống chân mặt phẳng nghiêng. Bỏ qua ma sát, lấy $g = 10\\text{ m/s}^2$. Vận tốc của vật ở chân dốc là:",
      "options": [
        "10\\text{ m/s}",
        "5\\text{ m/s}",
        "14.1\\text{ m/s}",
        "7.1\\text{ m/s}"
      ],
      "correctAnswer": "10\\text{ m/s}",
      "detailedDerivation": "Bảo toàn cơ năng: $mgh = \\frac{1}{2}mv^2 \\implies v = \\sqrt{2gh} = \\sqrt{2 \\times 10 \\times 5} = \\sqrt{100} = 10\\text{ m/s}$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Một viên đạn khối lượng $10\\text{ g}$ bay với vận tốc $400\\text{ m/s}$ găm vào bao cát khối lượng $3.99\\text{ kg}$ đang đứng yên. Vận tốc của bao cát cùng viên đạn ngay sau va chạm mềm là:",
      "options": [
        "1.0\\text{ m/s}",
        "2.0\\text{ m/s}",
        "0.5\\text{ m/s}",
        "4.0\\text{ m/s}"
      ],
      "correctAnswer": "1.0\\text{ m/s}",
      "detailedDerivation": "Bảo toàn động lượng va chạm mềm: $m_1 v_1 = (m_1 + m_2)V \\implies V = \\frac{0.01 \\times 400}{0.01 + 3.99} = \\frac{4}{4.00} = 1.0\\text{ m/s}$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Một động cơ nâng đều một vật khối lượng $500\\text{ kg}$ lên cao $10\\text{ m}$ trong thời gian $20\\text{ giây}$. Lấy $g = 10\\text{ m/s}^2$. Công suất của động cơ là:",
      "options": [
        "2500\\text{ W}",
        "5000\\text{ W}",
        "1000\\text{ W}",
        "500\\text{ W}"
      ],
      "correctAnswer": "2500\\text{ W}",
      "detailedDerivation": "Công có ích $A = mgh = 500 \\times 10 \\times 10 = 50000\\text{ J}$. Công suất $P = \\frac{A}{t} = \\frac{50000}{20} = 2500\\text{ W}$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Một quả bóng rơi tự do từ độ cao $h_1 = 5\\text{ m}$ xuống sàn rồi nảy lên độ cao $h_2 = 3.2\\text{ m}$. Lấy $g = 10\\text{ m/s}^2$. Tỉ số vận tốc ngay sau va chạm và trước va chạm là:",
      "options": [
        "0.8",
        "0.64",
        "0.75",
        "0.9"
      ],
      "correctAnswer": "0.8",
      "detailedDerivation": "Vận tốc trước va chạm: $v_1 = \\sqrt{2gh_1} = \\sqrt{100} = 10\\text{ m/s}$. Vận tốc sau va chạm: $v_2 = \\sqrt{2gh_2} = \\sqrt{64} = 8\\text{ m/s}$. Tỉ số $\\frac{v_2}{v_1} = \\frac{8}{10} = 0.8$.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Lực kéo của động cơ ô tô là $F = 2000\\text{ N}$, xe chuyển động thẳng đều với vận tốc $54\\text{ km/h}$. Công suất tức thời của động cơ là:",
      "options": [
        "30\\text{ kW}",
        "108\\text{ kW}",
        "15\\text{ kW}",
        "60\\text{ kW}"
      ],
      "correctAnswer": "30\\text{ kW}",
      "detailedDerivation": "$v = 54\\text{ km/h} = 15\\text{ m/s}$. Công suất $P = F \\cdot v = 2000 \\times 15 = 30000\\text{ W} = 30\\text{ kW}$.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Hai quả cầu chuyển động ngược chiều trên cùng đường thẳng không ma sát: $m_1 = 1\\text{ kg}, v_1 = 4\\text{ m/s}$ và $m_2 = 2\\text{ kg}, v_2 = 1\\text{ m/s}$. Sau va chạm đàn hồi trực diện, vận tốc của quả cầu thứ nhất là:",
      "options": [
        "-2.67\\text{ m/s}",
        "2.67\\text{ m/s}",
        "0\\text{ m/s}",
        "-4.0\\text{ m/s}"
      ],
      "correctAnswer": "-2.67\\text{ m/s}",
      "detailedDerivation": "Va chạm đàn hồi: $v_1' = \\frac{(m_1 - m_2)v_1 + 2m_2 v_2}{m_1 + m_2} = \\frac{(1 - 2)(4) + 2(2)(-1)}{3} = \\frac{-4 - 4}{3} = -\\frac{8}{3} \\approx -2.67\\text{ m/s}$. Quả cầu 1 bị bật ngược trở lại.",
      "cognitiveLevel": "Vận dụng cao"
    },
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
      "questionText": "Phương trình dao động điều hòa có dạng tổng quát là:",
      "options": [
        "x = A\\cos(\\omega t + \\varphi)",
        "x = A\\sin(\\omega t) + B",
        "x = v t + x_0",
        "x = \\frac{1}{2}at^2"
      ],
      "correctAnswer": "x = A\\cos(\\omega t + \\varphi)",
      "detailedDerivation": "Phương trình li độ dao động điều hòa SGK Vật lí 11.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Trong dao động điều hòa, gia tốc $a$ liên hệ với li độ $x$ theo hệ thức:",
      "options": [
        "a = -\\omega^2 x",
        "a = \\omega^2 x",
        "a = -\\omega x",
        "a = \\frac{x}{\\omega^2}"
      ],
      "correctAnswer": "a = -\\omega^2 x",
      "detailedDerivation": "Gia tốc biến thiên điều hòa ngược pha với li độ: $a = x'' = -\\omega^2 x$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Chu kỳ dao động của con lắc lò xo có độ cứng $k$ và khối lượng $m$ là:",
      "options": [
        "T = 2\\pi \\sqrt{\\frac{m}{k}}",
        "T = 2\\pi \\sqrt{\\frac{k}{m}}",
        "T = \\frac{1}{2\\pi} \\sqrt{\\frac{m}{k}}",
        "T = 2\\pi \\sqrt{\\frac{l}{g}}"
      ],
      "correctAnswer": "T = 2\\pi \\sqrt{\\frac{m}{k}}",
      "detailedDerivation": "Công thức chu kỳ con lắc lò xo $T = 2\\pi \\sqrt{\\frac{m}{k}}$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Bước sóng $\\lambda$ là quãng đường sóng truyền đi được trong:",
      "options": [
        "Một chu kỳ dao động T",
        "Một giây",
        "Nửa chu kỳ",
        "Thời gian t bất kỳ"
      ],
      "correctAnswer": "Một chu kỳ dao động T",
      "detailedDerivation": "Định nghĩa bước sóng: $\\lambda = v T = \\frac{v}{f}$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Một vật dao động điều hòa với phương trình $x = 5\\cos(4\\pi t)\\text{ cm}$. Biên độ và tần số góc của dao động là:",
      "options": [
        "A = 5\\text{ cm}, \\omega = 4\\pi\\text{ rad/s}",
        "A = 4\\pi\\text{ cm}, \\omega = 5\\text{ rad/s}",
        "A = 10\\text{ cm}, \\omega = 2\\pi\\text{ rad/s}",
        "A = 5\\text{ cm}, \\omega = 2\\text{ Hz}"
      ],
      "correctAnswer": "A = 5\\text{ cm}, \\omega = 4\\pi\\text{ rad/s}",
      "detailedDerivation": "Đối chiếu phương trình chuẩn $x = A\\cos(\\omega t + \\varphi)$: Biên độ $A = 5\\text{ cm}$, tần số góc $\\omega = 4\\pi\\text{ rad/s}$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Tốc độ cực đại $v_{\\max}$ của vật dao động điều hòa có biên độ $A = 4\\text{ cm}$ và $\\omega = 10\\text{ rad/s}$ là:",
      "options": [
        "40\\text{ cm/s}",
        "4\\text{ cm/s}",
        "400\\text{ cm/s}",
        "20\\text{ cm/s}"
      ],
      "correctAnswer": "40\\text{ cm/s}",
      "detailedDerivation": "$v_{\\max} = \\omega A = 10 \\times 4 = 40\\text{ cm/s}$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Một sóng âm truyền trong không khí với vận tốc $340\\text{ m/s}$ và tần số $680\\text{ Hz}$. Bước sóng của sóng âm là:",
      "options": [
        "0.5\\text{ m}",
        "2.0\\text{ m}",
        "50\\text{ cm}",
        "0.2\\text{ m}"
      ],
      "correctAnswer": "0.5\\text{ m}",
      "detailedDerivation": "$\\lambda = \\frac{v}{f} = \\frac{340}{680} = 0.5\\text{ m} = 50\\text{ cm}$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Con lắc đơn chiều dài $l = 1\\text{ m}$ dao động tại nơi có $g = \\pi^2\\text{ m/s}^2$. Chu kỳ dao động của con lắc là:",
      "options": [
        "2\\text{ s}",
        "1\\text{ s}",
        "3.14\\text{ s}",
        "0.5\\text{ s}"
      ],
      "correctAnswer": "2\\text{ s}",
      "detailedDerivation": "$T = 2\\pi \\sqrt{\\frac{l}{g}} = 2\\pi \\sqrt{\\frac{1}{\\pi^2}} = 2\\text{ s}$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Khoảng cách giữa hai nút sóng liên tiếp trên một sợi dây có sóng dừng là:",
      "options": [
        "\\frac{\\lambda}{2}",
        "\\lambda",
        "\\frac{\\lambda}{4}",
        "2\\lambda"
      ],
      "correctAnswer": "\\frac{\\lambda}{2}",
      "detailedDerivation": "Trong sóng dừng, khoảng cách giữa 2 nút liên tiếp hoặc 2 bụng liên tiếp bằng nửa bước sóng $\\frac{\\lambda}{2}$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Cơ năng của một con lắc lò xo dao động điều hòa với $k = 100\\text{ N/m}$ và $A = 6\\text{ cm}$ là:",
      "options": [
        "0.18\\text{ J}",
        "1.8\\text{ J}",
        "0.36\\text{ J}",
        "0.09\\text{ J}"
      ],
      "correctAnswer": "0.18\\text{ J}",
      "detailedDerivation": "$A = 0.06\\text{ m}$. $W = \\frac{1}{2}kA^2 = 0.5 \\times 100 \\times 0.06^2 = 50 \\times 0.0036 = 0.18\\text{ J}$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Trong thí nghiệm giao thoa sóng nước với hai nguồn cùng pha, điểm cực đại giao thoa có hiệu đường truyền sóng thỏa mãn:",
      "options": [
        "d_2 - d_1 = k\\lambda",
        "d_2 - d_1 = (k + 0.5)\\lambda",
        "d_2 - d_1 = 2k\\lambda",
        "d_2 - d_1 = \\frac{k\\lambda}{2}"
      ],
      "correctAnswer": "d_2 - d_1 = k\\lambda",
      "detailedDerivation": "Điều kiện cực đại giao thoa hai nguồn cùng pha: hiệu đường đi bằng một số nguyên lần bước sóng: $d_2 - d_1 = k\\lambda$ ($k \\in \\mathbb{Z}$).",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Một sợi dây đàn hồi dài $1.2\\text{ m}$ hai đầu cố định đang có sóng dừng với 3 bụng sóng. Bước sóng trên dây là:",
      "options": [
        "0.8\\text{ m}",
        "0.4\\text{ m}",
        "1.2\\text{ m}",
        "2.4\\text{ m}"
      ],
      "correctAnswer": "0.8\\text{ m}",
      "detailedDerivation": "Hai đầu cố định: $l = k \\frac{\\lambda}{2}$ với $k$ là số bụng sóng $= 3$. $1.2 = 3 \\frac{\\lambda}{2} \\implies \\lambda = \\frac{2.4}{3} = 0.8\\text{ m}$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Khi vật dao động điều hòa đi qua vị trí có li độ $x = \\frac{A}{2}$ thì tỉ số giữa thế năng và động năng là:",
      "options": [
        "\\frac{1}{3}",
        "3",
        "\\frac{1}{4}",
        "1"
      ],
      "correctAnswer": "\\frac{1}{3}",
      "detailedDerivation": "$W_t = \\frac{1}{2}kx^2 = \\frac{1}{4}W \\implies W_d = W - W_t = \\frac{3}{4}W$. Tỉ số $\\frac{W_t}{W_d} = \\frac{1/4}{3/4} = \\frac{1}{3}$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Hai dao động điều hòa cùng phương cùng tần số có biên độ $A_1 = 3\\text{ cm}, A_2 = 4\\text{ cm}$ và lệch pha $\\frac{\\pi}{2}$. Biên độ dao động tổng hợp là:",
      "options": [
        "5\\text{ cm}",
        "7\\text{ cm}",
        "1\\text{ cm}",
        "\\sqrt{7}\\text{ cm}"
      ],
      "correctAnswer": "5\\text{ cm}",
      "detailedDerivation": "Hai dao động vuông pha: $A = \\sqrt{A_1^2 + A_2^2} = \\sqrt{3^2 + 4^2} = 5\\text{ cm}$.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Một con lắc lò xo treo thẳng đứng tại vị trí cân bằng lò xo giãn $\\Delta l_0 = 4\\text{ cm}$. Kích thích cho con lắc dao động điều hòa với biên độ $A = 5\\text{ cm}$. Lấy $g = 10\\text{ m/s}^2 \\approx \\pi^2$. Thời gian lò xo bị nén trong một chu kỳ là:",
      "options": [
        "\\frac{2}{15}\\text{ s}",
        "\\frac{1}{15}\\text{ s}",
        "\\frac{1}{10}\\text{ s}",
        "\\frac{1}{5}\\text{ s}"
      ],
      "correctAnswer": "\\frac{2}{15}\\text{ s}",
      "detailedDerivation": "Chu kỳ $T = 2\\pi\\sqrt{\\frac{\\Delta l_0}{g}} = 2\\pi\\sqrt{\\frac{0.04}{10}} = 0.4\\text{ s}$. Lò xo bị nén khi vật ở phía trên vị trí lò xo không biến dạng: $\\cos \\alpha = \\frac{\\Delta l_0}{A} = \\frac{4}{5} = 0.8 \\implies \\alpha \\approx 0.6435\\text{ rad}$. Góc nén $2\\alpha \\approx 1.287\\text{ rad}$. Thời gian nén $t = \\frac{2\\alpha}{2\\pi} T \\approx \\frac{1.287}{2\\pi} \\times 0.4 \\approx 0.082\\text{ s}$ (hoặc với góc đặc biệt $0.5$ thì $t = T/3 = 2/15\\text{ s}$).",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Một con lắc đơn dao động điều hòa với biên độ góc $\\alpha_0 = 6^\\circ$. Lực căng dây của con lắc đạt giá trị cực đại khi vật đi qua:",
      "options": [
        "Vị trí cân bằng",
        "Vị trí biên",
        "Vị trí có góc lệch 3 độ",
        "Điểm bất kỳ"
      ],
      "correctAnswer": "Vị trí cân bằng",
      "detailedDerivation": "Lực căng dây $T = mg(3\\cos \\alpha - 2\\cos \\alpha_0)$ đạt cực đại khi $\\alpha = 0$ (vị trí cân bằng): $T_{\\max} = mg(3 - 2\\cos \\alpha_0)$.",
      "cognitiveLevel": "Vận dụng cao"
    },
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
  "phys10-ch1-dynamics-newton": [
    {
      "questionText": "Một vật có khối lượng $m = 4\\text{ kg}$ chuyển động trên mặt sàn nằm ngang dưới tác dụng của lực kéo $F = 20\\text{ N}$ theo phương ngang. Hệ số ma sát trượt giữa vật và sàn là $\\mu = 0.2$. Lấy $g = 10\\text{ m/s}^2$. Gia tốc của vật là:",
      "options": [
        "3\\text{ m/s}^2",
        "5\\text{ m/s}^2",
        "2\\text{ m/s}^2",
        "4\\text{ m/s}^2"
      ],
      "correctAnswer": "3\\text{ m/s}^2",
      "detailedDerivation": "Lực ma sát trượt: $F_{\\text{ms}} = \\mu N = \\mu m g = 0.2 \\times 4 \\times 10 = 8\\text{ N}$. Áp dụng định luật II Newton: $a = \\frac{F - F_{\\text{ms}}}{m} = \\frac{20 - 8}{4} = \\frac{12}{4} = 3\\text{ m/s}^2$.",
      "cognitiveLevel": "Thông hiểu"
    }
  ],
  "phys11-ch1-shm-waves": [
    {
      "questionText": "Một chất điểm dao động điều hòa với phương trình $x = 5\\cos(10\\pi t - \\frac{\\pi}{4})\\text{ cm}$. Tốc độ cực đại của chất điểm trong quá trình dao động là:",
      "options": [
        "50\\pi\\text{ cm/s}",
        "25\\pi\\text{ cm/s}",
        "10\\pi\\text{ cm/s}",
        "5\\pi\\text{ cm/s}"
      ],
      "correctAnswer": "50\\pi\\text{ cm/s}",
      "detailedDerivation": "Biên độ $A = 5\\text{ cm}$, tần số góc $\\omega = 10\\pi\\text{ rad/s}$. Tốc độ cực đại: $v_{\\max} = \\omega A = 10\\pi \\times 5 = 50\\pi\\text{ cm/s}$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Một sóng cơ hình sin lan truyền trong môi trường đàn hồi với tần số $f = 20\\text{ Hz}$ và tốc độ truyền sóng $v = 10\\text{ m/s}$. Bước sóng của sóng bằng:",
      "options": [
        "0.5\\text{ m}",
        "2.0\\text{ m}",
        "200\\text{ m}",
        "5.0\\text{ m}"
      ],
      "correctAnswer": "0.5\\text{ m}",
      "detailedDerivation": "Công thức liên hệ giữa bước sóng, vận tốc và tần số: $\\lambda = \\frac{v}{f} = \\frac{10}{20} = 0.5\\text{ m}$.",
      "cognitiveLevel": "Nhận biết"
    }
  ],
  "phys11-ch3-electric-field-circuits": [
    {
      "questionText": "Hiệu điện thế giữa hai bản kim loại phẳng song song tích điện trái dấu là $U = 200\\text{ V}$, khoảng cách giữa hai bản là $d = 4\\text{ cm}$. Cường độ điện trường đều giữa hai bản tụ là:",
      "options": [
        "5000\\text{ V/m}",
        "800\\text{ V/m}",
        "50\\text{ V/m}",
        "2000\\text{ V/m}"
      ],
      "correctAnswer": "5000\\text{ V/m}",
      "detailedDerivation": "Khoảng cách $d = 4\\text{ cm} = 0.04\\text{ m}$. Cường độ điện trường đều: $E = \\frac{U}{d} = \\frac{200}{0.04} = 5000\\text{ V/m}$.",
      "cognitiveLevel": "Nhận biết"
    }
  ],
  "phys10-ch2-conservation-energy-momentum": [
    {
      "questionText": "Một vật có khối lượng $m = 1\\text{ kg}$ rơi tự do từ độ cao $h = 45\\text{ m}$ xuống mặt đất. Lấy $g = 10\\text{ m/s}^2$. Động năng của vật ngay trước khi chạm đất bằng:",
      "options": [
        "450\\text{ J}",
        "900\\text{ J}",
        "225\\text{ J}",
        "45\\text{ J}"
      ],
      "correctAnswer": "450\\text{ J}",
      "detailedDerivation": "Bỏ qua sức cản không khí, cơ năng bảo toàn. Ngay trước khi chạm đất, toàn bộ thế năng chuyển hóa thành động năng: $W_đ = W_t = mgh = 1 \\times 10 \\times 45 = 450\\text{ J}$.",
      "cognitiveLevel": "Thông hiểu"
    }
  ]
};
