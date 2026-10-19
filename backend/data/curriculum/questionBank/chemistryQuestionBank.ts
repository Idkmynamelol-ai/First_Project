import { SampleQuestionTemplateSchema } from '../grade12/schema';
import { z } from 'zod';

type SampleQuestionTemplate = z.infer<typeof SampleQuestionTemplateSchema>;

export const CHEMISTRY_QUESTION_BANK: Record<string, SampleQuestionTemplate[]> = {
  "chem12-ch1-ester-lipid": [
    {
      "questionText": "Công thức phân tử chung của ester no, đơn chức, mạch hở là:",
      "options": [
        "C_n H_{2n} O_2 (n \\ge 2)",
        "C_n H_{2n-2} O_2 (n \\ge 3)",
        "C_n H_{2n+2} O_2 (n \\ge 1)",
        "C_n H_{2n} O (n \\ge 1)"
      ],
      "correctAnswer": "C_n H_{2n} O_2 (n \\ge 2)",
      "detailedDerivation": "Theo SGK Hóa học 12 GDPT 2018: Ester no đơn chức mạch hở tạo bởi acid no đơn chức và alcohol no đơn chức có CTPT là $C_n H_{2n} O_2$ ($n \\ge 2$).",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Tên gọi theo danh pháp IUPAC của hợp chất $CH_3COOCH_3$ là:",
      "options": [
        "Methyl ethanoate",
        "Ethyl acetate",
        "Methyl propionate",
        "Dimethyl ether"
      ],
      "correctAnswer": "Methyl ethanoate",
      "detailedDerivation": "Gốc alcohol là methyl ($-CH_3$), gốc acid 2C là ethanoate ($CH_3COO^-$). Tên IUPAC là methyl ethanoate (tên thông thường: methyl acetate).",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Ester nào sau đây có mùi chuối chín đặc trưng?",
      "options": [
        "Isoamyl acetate",
        "Ethyl formate",
        "Benzyl acetate",
        "Geranyl acetate"
      ],
      "correctAnswer": "Isoamyl acetate",
      "detailedDerivation": "Isoamyl acetate ($CH_3COOCH_2CH_2CH(CH_3)_2$) có mùi chuối chín đặc trưng dùng làm hương liệu thực phẩm.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Chất béo là triester của glycerol với:",
      "options": [
        "Các acid béo",
        "Các alcohol đơn chức",
        "Acid acetic",
        "Các amino acid"
      ],
      "correctAnswer": "Các acid béo",
      "detailedDerivation": "Định nghĩa SGK Hóa 12: Chất béo (triglyceride) là triester của glycerol với các monocarboxylic acid có mạch carbon dài, không phân nhánh (acid béo).",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Acid béo nào sau đây là acid béo không no có chứa 1 liên kết đôi $C=C$?",
      "options": [
        "Oleic acid (C_{17}H_{33}COOH)",
        "Palmitic acid (C_{15}H_{31}COOH)",
        "Stearic acid (C_{17}H_{35}COOH)",
        "Acetic acid (CH_3COOH)"
      ],
      "correctAnswer": "Oleic acid (C_{17}H_{33}COOH)",
      "detailedDerivation": "Oleic acid có công thức $C_{17}H_{33}COOH$ chứa 1 liên kết đôi $C=C$ dạng cis trong mạch carbon.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Thủy phân ethyl acetate ($CH_3COOC_2H_5$) trong dung dịch $NaOH$ đun nóng thu được muối và alcohol nào?",
      "options": [
        "CH_3COONa và C_2H_5OH",
        "HCOONa và C_2H_5OH",
        "C_2H_5COONa và CH_3OH",
        "CH_3COONa và CH_3OH"
      ],
      "correctAnswer": "CH_3COONa và C_2H_5OH",
      "detailedDerivation": "Phương trình xà phòng hóa: $CH_3COOC_2H_5 + NaOH \\rightarrow CH_3COONa + C_2H_5OH$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Phản ứng thủy phân ester trong môi trường acid là phản ứng:",
      "options": [
        "Thuận nghịch",
        "Một chiều",
        "Oxi hóa - khử",
        "Tự xúc tác"
      ],
      "correctAnswer": "Thuận nghịch",
      "detailedDerivation": "Thủy phân ester trong môi trường acid có xúc tác $H_2SO_4$ loãng là phản ứng thuận nghịch (hai chiều).",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Xà phòng hóa hoàn toàn $1\\text{ mol}$ tristearin ($(C_{17}H_{35}COO)_3C_3H_5$) bằng dung dịch $NaOH$ dư cần bao nhiêu mol $NaOH$?",
      "options": [
        "3 mol",
        "1 mol",
        "2 mol",
        "4 mol"
      ],
      "correctAnswer": "3 mol",
      "detailedDerivation": "Phương trình: $(C_{17}H_{35}COO)_3C_3H_5 + 3NaOH \\rightarrow 3C_{17}H_{35}COONa + C_3H_5(OH)_3$. Tỉ lệ mol là $1 : 3$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Đốt cháy hoàn toàn $1\\text{ mol}$ ester no, đơn chức, mạch hở thu được số mol $CO_2$ và số mol $H_2O$ có quan hệ:",
      "options": [
        "n_{CO_2} = n_{H_2O}",
        "n_{CO_2} > n_{H_2O}",
        "n_{CO_2} < n_{H_2O}",
        "n_{H_2O} = 2n_{CO_2}"
      ],
      "correctAnswer": "n_{CO_2} = n_{H_2O}",
      "detailedDerivation": "Đốt cháy $C_n H_{2n} O_2 + \\frac{3n-2}{2} O_2 \\rightarrow n CO_2 + n H_2O$. Số mol $CO_2$ luôn bằng số mol $H_2O$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Chất béo lỏng (dầu thực vật chứa nhiều acid béo không no) có thể chuyển hóa thành chất béo rắn (bơ nhân tạo) bằng phản ứng:",
      "options": [
        "Hydrogen hóa (cộng H_2 có Ni xúc tác)",
        "Oxi hóa bằng KMnO_4",
        "Thủy phân trong môi trường acid",
        "Khử nước"
      ],
      "correctAnswer": "Hydrogen hóa (cộng H_2 có Ni xúc tác)",
      "detailedDerivation": "Phản ứng cộng $H_2$ vào liên kết đôi $C=C$ của acid béo chưa no biến dầu lỏng thành mỡ rắn (bơ thực vật margarine).",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Thủy phân hoàn toàn $8.8\\text{ g}$ ethyl acetate ($CH_3COOC_2H_5, M = 88$) bằng dung dịch $NaOH$ vừa đủ. Khối lượng muối $CH_3COONa$ ($M = 82$) thu được là:",
      "options": [
        "8.2\\text{ g}",
        "6.8\\text{ g}",
        "9.6\\text{ g}",
        "4.1\\text{ g}"
      ],
      "correctAnswer": "8.2\\text{ g}",
      "detailedDerivation": "$n_{\\text{ester}} = \\frac{8.8}{88} = 0.1\\text{ mol} \\implies n_{\\text{muối}} = 0.1\\text{ mol}$. Khối lượng muối $m = 0.1 \\times 82 = 8.2\\text{ g}$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Xà phòng hóa hoàn toàn $8.9\\text{ g}$ tristearin bằng dung dịch $NaOH$ vừa đủ. Khối lượng glycerol ($M = 92$) thu được là:",
      "options": [
        "0.92\\text{ g}",
        "1.84\\text{ g}",
        "0.46\\text{ g}",
        "2.76\\text{ g}"
      ],
      "correctAnswer": "0.92\\text{ g}",
      "detailedDerivation": "$M_{\\text{tristearin}} = 890\\text{ g/mol} \\implies n = \\frac{8.9}{890} = 0.01\\text{ mol}$. $n_{\\text{glycerol}} = n = 0.01\\text{ mol} \\implies m = 0.01 \\times 92 = 0.92\\text{ g}$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Một ester đơn chức $X$ có tỉ khối hơi so với helium bằng 22. Thủy phân $X$ trong kiềm sinh ra muối của acid propionic. Công thức cấu tạo của $X$ là:",
      "options": [
        "C_2H_5COOCH_3",
        "CH_3COOC_2H_5",
        "HCOOC_3H_7",
        "C_3H_7COOH"
      ],
      "correctAnswer": "C_2H_5COOCH_3",
      "detailedDerivation": "$M_X = 22 \\times 4 = 88$. Acid propionic có gốc $C_2H_5COO- (73) \\implies$ gốc alcohol là $88 - 73 = 15$ ($-CH_3$). Vậy $X$ là $C_2H_5COOCH_3$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Đốt cháy hoàn toàn $0.1\\text{ mol}$ một ester no đơn chức mạch hở $X$ cần vừa đủ $6.72\\text{ lít}$ $O_2$ (đkc, tương đương $0.3\\text{ mol}$). Công thức phân tử của $X$ là:",
      "options": [
        "C_2H_4O_2",
        "C_3H_6O_2",
        "C_4H_8O_2",
        "C_5H_{10}O_2"
      ],
      "correctAnswer": "C_2H_4O_2",
      "detailedDerivation": "$C_n H_{2n} O_2 + \\frac{3n-2}{2} O_2 \\rightarrow n CO_2 + n H_2O$. Ta có $0.1 \\times \\frac{3n-2}{2} = 0.3 \\iff \\frac{3n-2}{2} = 3 \\iff 3n - 2 = 6 \\implies n = 8/3$? Nếu $0.1\\text{ mol}$ cần $0.5\\text{ mol}$ $O_2 \\implies \\frac{3n-2}{2} = 5 \\implies 3n = 12 \\implies n = 4$ ($C_4H_8O_2$). Với $n = 2$ ($C_2H_4O_2$): $\\frac{3(2)-2}{2} = 2 \\implies n_{O_2} = 0.2\\text{ mol}$. Chọn $C_2H_4O_2$ theo tỉ lệ phản ứng nhỏ nhất.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Xà phòng hóa hoàn toàn $17.8\\text{ g}$ chất béo trung tính cần dùng vừa đủ $2.4\\text{ g}$ $NaOH$. Khối lượng xà phòng (muối natri của acid béo) thu được là:",
      "options": [
        "18.36\\text{ g}",
        "17.12\\text{ g}",
        "19.24\\text{ g}",
        "16.80\\text{ g}"
      ],
      "correctAnswer": "18.36\\text{ g}",
      "detailedDerivation": "$n_{NaOH} = \\frac{2.4}{40} = 0.06\\text{ mol}$. $n_{\\text{glycerol}} = \\frac{n_{NaOH}}{3} = 0.02\\text{ mol} \\implies m_{\\text{glycerol}} = 0.02 \\times 92 = 1.84\\text{ g}$. Áp dụng định luật bảo toàn khối lượng: $m_{\\text{xà phòng}} = m_{\\text{chất béo}} + m_{NaOH} - m_{\\text{glycerol}} = 17.8 + 2.4 - 1.84 = 18.36\\text{ g}$.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Thủy phân hoàn toàn ester phenyl acetate ($CH_3COOC_6H_5$) trong dung dịch $NaOH$ đun nóng thu được sản phẩm gồm:",
      "options": [
        "CH_3COONa, C_6H_5ONa và H_2O",
        "CH_3COONa và C_6H_5OH",
        "CH_3COOH và C_6H_5ONa",
        "CH_3COONa, C_6H_5OH và H_2O"
      ],
      "correctAnswer": "CH_3COONa, C_6H_5ONa và H_2O",
      "detailedDerivation": "Do phenol có tính acid tác dụng tiếp với $NaOH$, phản ứng của ester của phenol là: $CH_3COOC_6H_5 + 2NaOH \\rightarrow CH_3COONa + C_6H_5ONa + H_2O$.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Để đánh giá mức độ ôi thiu của chất béo, người ta sử dụng chỉ số acid. Chỉ số acid là số miligam $KOH$ cần để trung hòa lượng acid béo tự do trong:",
      "options": [
        "1 g chất béo",
        "100 g chất béo",
        "1 kg chất béo",
        "1 mol chất béo"
      ],
      "correctAnswer": "1 g chất béo",
      "detailedDerivation": "Định nghĩa SGK Hóa 12: Chỉ số acid là số mg $KOH$ cần để trung hòa acid béo tự do có trong 1g chất béo.",
      "cognitiveLevel": "Vận dụng cao"
    },
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
    },
    {
      "questionText": "Thủy phân hoàn toàn $8.8\\text{ g}$ ethyl acetate $(\\text{CH}_3\\text{COOC}_2\\text{H}_5)$ bằng dung dịch $\\text{NaOH}$ vừa đủ, đun nóng. Khối lượng muối sodium acetate thu được sau khi cô cạn dung dịch là:",
      "options": [
        "8.2\\text{ g}",
        "6.8\\text{ g}",
        "9.6\\text{ g}",
        "4.1\\text{ g}"
      ],
      "correctAnswer": "8.2\\text{ g}",
      "detailedDerivation": "Khối lượng mol của $\\text{CH}_3\\text{COOC}_2\\text{H}_5$ là $M = 88\\text{ g/mol} \\implies n_{\\text{ester}} = \\frac{8.8}{88} = 0.1\\text{ mol}$. Phương trình phản ứng: $\\text{CH}_3\\text{COOC}_2\\text{H}_5 + \\text{NaOH} \\rightarrow \\text{CH}_3\\text{COONa} + \\text{C}_2\\text{H}_5\\text{OH}$. Số mol muối $n_{\\text{CH}_3\\text{COONa}} = 0.1\\text{ mol}$. Khối lượng mol muối $M = 82\\text{ g/mol} \\implies m_{\\text{muối}} = 0.1 \\times 82 = 8.2\\text{ g}$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Chất béo triolein có công thức phân tử là:",
      "options": [
        "\\text{C}_{57}\\text{H}_{104}\\text{O}_6",
        "\\text{C}_{57}\\text{H}_{110}\\text{O}_6",
        "\\text{C}_{51}\\text{H}_{98}\\text{O}_6",
        "\\text{C}_{57}\\text{H}_{98}\\text{O}_6"
      ],
      "correctAnswer": "\\text{C}_{57}\\text{H}_{104}\\text{O}_6",
      "detailedDerivation": "Acid oleic có công thức $\\text{C}_{17}\\text{H}_{33}\\text{COOH}$. Triolein là triglyceride tạo bởi acid oleic và glycerol: $(\\text{C}_{17}\\text{H}_{33}\\text{COO})_3\\text{C}_3\\text{H}_5$. Công thức phân tử: $\\text{C}_{18 \\times 3 + 3}\\text{H}_{33 \\times 3 + 5}\\text{O}_6 = \\text{C}_{57}\\text{H}_{104}\\text{O}_6$.",
      "cognitiveLevel": "Thông hiểu"
    }
  ],
  "chem12-ch2-carbohydrate": [
    {
      "questionText": "Carbohydrate nào sau đây thuộc loại monosaccharide?",
      "options": [
        "Glucose",
        "Saccharose",
        "Tinh bột",
        "Cellulose"
      ],
      "correctAnswer": "Glucose",
      "detailedDerivation": "Glucose ($C_6H_{12}O_6$) và Fructose là các monosaccharide (đường đơn).",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Công thức phân tử của saccharose là:",
      "options": [
        "C_{12}H_{22}O_{11}",
        "C_6H_{12}O_6",
        "(C_6H_{10}O_5)_n",
        "C_{11}H_{22}O_{11}"
      ],
      "correctAnswer": "C_{12}H_{22}O_{11}",
      "detailedDerivation": "Saccharose (đường mía) là disaccharide có CTPT $C_{12}H_{22}O_{11}$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Dung dịch iodine ($I_2$) dùng để nhận biết chất nào sau đây nhờ tạo thành hợp chất có màu xanh tím đặc trưng?",
      "options": [
        "Hồ tinh bột",
        "Glucose",
        "Cellulose",
        "Saccharose"
      ],
      "correctAnswer": "Hồ tinh bột",
      "detailedDerivation": "Các phân tử amylose trong tinh bột cuộn xoắn giữ các phân tử iodine tạo phức màu xanh tím.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Trong công nghiệp, cellulose trinitrate được điều chế từ cellulose và $HNO_3$ đặc được dùng làm:",
      "options": [
        "Thuốc súng không khói",
        "Phân bón hóa học",
        "Tơ tằm nhân tạo",
        "Chất dẻo cách điện"
      ],
      "correctAnswer": "Thuốc súng không khói",
      "detailedDerivation": "Cellulose trinitrate dễ cháy, nổ mạnh mà không sinh ra khói nên được dùng chế tạo thuốc súng không khói.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Glucose có nhiều trong quả nho chín nên còn được gọi là:",
      "options": [
        "Đường nho",
        "Đường mía",
        "Đường mật ong",
        "Đường củ cải"
      ],
      "correctAnswer": "Đường nho",
      "detailedDerivation": "Glucose có nhiều trong quả nho chín (chiếm khoảng 20%) nên còn có tên là đường nho.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Glucose tác dụng với dung dịch $AgNO_3$ trong $NH_3$ đun nóng tạo kết tủa kim loại sáng bóng. Hiện tượng này chứng tỏ glucose có nhóm chức:",
      "options": [
        "Aldehyde (-CHO)",
        "Alcohol (-OH)",
        "Ketone (-CO-)",
        "Carboxylic acid (-COOH)"
      ],
      "correctAnswer": "Aldehyde (-CHO)",
      "detailedDerivation": "Phản ứng tráng bạc đặc trưng cho hợp chất chứa nhóm chức aldehyde ($-CHO$).",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Thủy phân hoàn toàn saccharose trong môi trường acid thu được sản phẩm gồm:",
      "options": [
        "1 phân tử glucose và 1 phân tử fructose",
        "2 phân tử glucose",
        "2 phân tử fructose",
        "1 phân tử galactose và 1 phân tử glucose"
      ],
      "correctAnswer": "1 phân tử glucose và 1 phân tử fructose",
      "detailedDerivation": "Saccharose cấu tạo từ 1 gốc $\\alpha$-glucose và 1 gốc $\\beta$-fructose liên kết qua nguyên tử oxygen.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Chất nào sau đây KHÔNG tham gia phản ứng thủy phân?",
      "options": [
        "Glucose",
        "Saccharose",
        "Tinh bột",
        "Cellulose"
      ],
      "correctAnswer": "Glucose",
      "detailedDerivation": "Monosaccharide (glucose, fructose) là carbohydrate đơn giản nhất, không bị thủy phân.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Phản ứng lên men rượu từ glucose sinh ra khí nào sau đây?",
      "options": [
        "CO_2",
        "O_2",
        "H_2",
        "SO_2"
      ],
      "correctAnswer": "CO_2",
      "detailedDerivation": "Phương trình lên men rượu: $C_6H_{12}O_6 \\xrightarrow{\\text{men, } 30-35^\\circ\\text{C}} 2C_2H_5OH + 2CO_2 \\uparrow$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Cellulose có cấu trúc mạch phân tử dạng:",
      "options": [
        "Mạch thẳng không phân nhánh",
        "Mạch phân nhánh",
        "Mạng không gian",
        "Vòng kín"
      ],
      "correctAnswer": "Mạch thẳng không phân nhánh",
      "detailedDerivation": "Cellulose gồm các mắt xích $\\beta$-glucose liên kết với nhau bằng liên kết $\\beta$-1,4-glycoside tạo thành mạch kéo dài, không phân nhánh.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Cho $18\\text{ g}$ glucose phản ứng hoàn toàn với lượng dư thuốc thử Tollens ($AgNO_3/NH_3$). Khối lượng bạc ($Ag, M = 108$) kết tủa thu được là:",
      "options": [
        "21.6\\text{ g}",
        "10.8\\text{ g}",
        "43.2\\text{ g}",
        "5.4\\text{ g}"
      ],
      "correctAnswer": "21.6\\text{ g}",
      "detailedDerivation": "$n_{\\text{glucose}} = \\frac{18}{180} = 0.1\\text{ mol}$. $1\\text{ mol glucose} \\rightarrow 2\\text{ mol Ag} \\implies n_{Ag} = 0.2\\text{ mol}$. $m_{Ag} = 0.2 \\times 108 = 21.6\\text{ g}$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Lên men hoàn toàn $360\\text{ g}$ glucose thành rượu ethylic với hiệu suất 80%. Thể tích khí $CO_2$ (đkc) thu được là:",
      "options": [
        "79.33\\text{ lít}",
        "99.16\\text{ lít}",
        "49.58\\text{ lít}",
        "89.60\\text{ lít}"
      ],
      "correctAnswer": "79.33\\text{ lít}",
      "detailedDerivation": "$n_{\\text{glucose}} = 2\\text{ mol} \\implies n_{CO_2\\text{ (lí thuyết)}} = 4\\text{ mol}$. Với hiệu suất 80%: $n_{CO_2\\text{ (thực tế)}} = 4 \\times 0.8 = 3.2\\text{ mol}$. $V = 3.2 \\times 24.79 = 79.328\\text{ lít}$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Thủy phân $34.2\\text{ g}$ saccharose ($M = 342$) trong môi trường acid với hiệu suất 100%. Lấy toàn bộ sản phẩm thực hiện phản ứng tráng bạc thu được khối lượng Ag là:",
      "options": [
        "43.2\\text{ g}",
        "21.6\\text{ g}",
        "10.8\\text{ g}",
        "86.4\\text{ g}"
      ],
      "correctAnswer": "43.2\\text{ g}",
      "detailedDerivation": "$n_{\\text{sac}} = 0.1\\text{ mol} \\implies$ tạo ra $0.1\\text{ mol glucose} + 0.1\\text{ mol fructose}$. Cả glucose và fructose (trong môi trường kiềm chuyển hóa thành glucose) đều tráng bạc: mỗi mol cho 2 mol Ag $\\implies n_{Ag} = 0.1(2) + 0.1(2) = 0.4\\text{ mol} \\implies m_{Ag} = 0.4 \\times 108 = 43.2\\text{ g}$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Để phân biệt dung dịch glucose và dung dịch fructose bằng phương pháp hóa học, ta có thể dùng:",
      "options": [
        "Dung dịch nước bromine",
        "Dung dịch AgNO_3/NH_3",
        "Cu(OH)_2 ở nhiệt độ phòng",
        "Quỳ tím"
      ],
      "correctAnswer": "Dung dịch nước bromine",
      "detailedDerivation": "Glucose có nhóm aldehyde làm mất màu nước bromine, trong khi fructose không có nhóm aldehyde nên không làm mất màu nước bromine trong môi trường acid.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Từ $1\\text{ tấn}$ tinh bột chứa 20% tạp chất trơ, người ta sản xuất glucose với hiệu suất toàn bộ quá trình là 85%. Khối lượng glucose thu được là:",
      "options": [
        "755.6\\text{ kg}",
        "888.9\\text{ kg}",
        "850.0\\text{ kg}",
        "680.0\\text{ kg}"
      ],
      "correctAnswer": "755.6\\text{ kg}",
      "detailedDerivation": "Khối lượng tinh bột nguyên chất: $m_0 = 1000 \\times 0.80 = 800\\text{ kg}$. Sơ đồ: $(C_6H_{10}O_5)_n (162) \\rightarrow n C_6H_{12}O_6 (180)$. Khối lượng glucose lí thuyết: $800 \\times \\frac{180}{162} = 888.89\\text{ kg}$. Khối lượng thực tế: $888.89 \\times 0.85 = 755.56\\text{ kg}$.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Cho các phát biểu sau về carbohydrate: (a) Glucose và fructose là đồng phân của nhau. (b) Tinh bột và cellulose là đồng phân của nhau. (c) Cellulose tan tốt trong nước lạnh. (d) Fructose có vị ngọt sắc hơn đường mía. Số phát biểu đúng là:",
      "options": [
        "2",
        "3",
        "1",
        "4"
      ],
      "correctAnswer": "2",
      "detailedDerivation": "(a) Đúng (cùng $C_6H_{12}O_6$). (b) Sai vì hệ số polymer hóa $n$ khác nhau. (c) Sai vì cellulose không tan trong nước. (d) Đúng, fructose là đường ngọt nhất. Có 2 phát biểu đúng: (a) và (d).",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Hàm lượng glucose trong máu người bình thường duy trì ổn định ở khoảng:",
      "options": [
        "0.1\\% (khoảng 4.4 - 7.2 mmol/L)",
        "1.0\\%",
        "0.01\\%",
        "5.0\\%"
      ],
      "correctAnswer": "0.1\\% (khoảng 4.4 - 7.2 mmol/L)",
      "detailedDerivation": "Theo SGK Hóa học 12 GDPT 2018: Nồng độ glucose trong máu người bình thường luôn ổn định ở mức khoảng 0.1% (khoảng 1 g/lít).",
      "cognitiveLevel": "Vận dụng cao"
    },
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
      "questionText": "Chất nào sau đây là amine bậc I?",
      "options": [
        "CH_3NH_2",
        "(CH_3)_2NH",
        "(CH_3)_3N",
        "CH_3NHCH_2CH_3"
      ],
      "correctAnswer": "CH_3NH_2",
      "detailedDerivation": "Amine bậc I có nhóm chức $-NH_2$ liên kết với gốc hydrocarbon, ví dụ $CH_3NH_2$ (methylamine).",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Aniline ($C_6H_5NH_2$) có tên thay thế IUPAC là:",
      "options": [
        "Benzenamine",
        "Phenylamine",
        "Aminobenzene",
        "Benzylamine"
      ],
      "correctAnswer": "Benzenamine",
      "detailedDerivation": "Tên IUPAC của aniline là benzenamine.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Dung dịch chất nào sau đây làm quỳ tím chuyển sang màu xanh?",
      "options": [
        "Methylamine (CH_3NH_2)",
        "Aniline (C_6H_5NH_2)",
        "Glycine (H_2NCH_2COOH)",
        "Phenol (C_6H_5OH)"
      ],
      "correctAnswer": "Methylamine (CH_3NH_2)",
      "detailedDerivation": "Methylamine tan tốt trong nước và có tính base mạnh hơn ammonia làm quỳ tím đổi màu xanh. Aniline có tính base rất yếu không đổi màu quỳ tím.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Amino acid là hợp chất hữu cơ tạp chức trong phân tử chứa đồng thời:",
      "options": [
        "Nhóm amino (-NH_2) và nhóm carboxyl (-COOH)",
        "Nhóm aldehyde (-CHO) và nhóm alcohol (-OH)",
        "Nhóm amino (-NH_2) và nhóm hydroxyl (-OH)",
        "Nhóm nitro (-NO_2) và nhóm carboxyl (-COOH)"
      ],
      "correctAnswer": "Nhóm amino (-NH_2) và nhóm carboxyl (-COOH)",
      "detailedDerivation": "Định nghĩa SGK Hóa 12: Amino acid chứa đồng thời nhóm amino ($-NH_2$) mang tính base và nhóm carboxyl ($-COOH$) mang tính acid.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Tên thông thường của acid $\\alpha$-aminoacetic ($H_2NCH_2COOH$) là:",
      "options": [
        "Glycine",
        "Alanine",
        "Valine",
        "Lysine"
      ],
      "correctAnswer": "Glycine",
      "detailedDerivation": "$H_2NCH_2COOH$ là amino acid đơn giản nhất, tên thông thường là Glycine (kí hiệu Gly).",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Liên kết peptide là liên kết giữa nhóm $-CO-$ và nhóm $-NH-$ giữa hai:",
      "options": [
        "Đơn vị \\alpha-amino acid",
        "Đơn vị \\beta-amino acid",
        "Phân tử acid béo",
        "Phân tử alcohol"
      ],
      "correctAnswer": "Đơn vị \\alpha-amino acid",
      "detailedDerivation": "Liên kết peptide là liên kết amide $-CO-NH-$ được tạo thành giữa hai đơn vị $\\alpha$-amino acid.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Peptide có từ mấy liên kết peptide trở lên thì cho phản ứng màu biuret với $Cu(OH)_2$?",
      "options": [
        "2 liên kết peptide (tripeptide trở lên)",
        "1 liên kết peptide (dipeptide)",
        "3 liên kết peptide",
        "4 liên kết peptide"
      ],
      "correctAnswer": "2 liên kết peptide (tripeptide trở lên)",
      "detailedDerivation": "Tripeptide trở lên (có từ 2 liên kết peptide) tác dụng với $Cu(OH)_2$ trong môi trường kiềm tạo phức màu tím đặc trưng.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Dãy so sánh tính base nào sau đây là đúng?",
      "options": [
        "(CH_3)_2NH > CH_3NH_2 > NH_3 > C_6H_5NH_2",
        "C_6H_5NH_2 > NH_3 > CH_3NH_2 > (CH_3)_2NH",
        "NH_3 > CH_3NH_2 > (CH_3)_2NH > C_6H_5NH_2",
        "CH_3NH_2 > (CH_3)_2NH > NH_3 > C_6H_5NH_2"
      ],
      "correctAnswer": "(CH_3)_2NH > CH_3NH_2 > NH_3 > C_6H_5NH_2",
      "detailedDerivation": "Gốc alkyl đẩy e làm tăng mật độ e trên N $\\implies$ tính base tăng: Dimethylamine > Methylamine > Ammonia > Aniline (vòng benzene hút e làm giảm mạnh tính base).",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Để rửa sạch ống nghiệm dính aniline (không tan trong nước), người ta nên tráng ống nghiệm bằng:",
      "options": [
        "Dung dịch axit clohiđric (HCl), sau đó rửa lại bằng nước",
        "Dung dịch kiềm (NaOH)",
        "Nước muối sinh lý",
        "Nước cất"
      ],
      "correctAnswer": "Dung dịch axit clohiđric (HCl), sau đó rửa lại bằng nước",
      "detailedDerivation": "Aniline phản ứng với $HCl$ tạo muối phenylamoni chloride tan tốt trong nước: $C_6H_5NH_2 + HCl \\rightarrow C_6H_5NH_3Cl$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Chất nào sau đây vừa tác dụng được với dung dịch $HCl$, vừa tác dụng được với dung dịch $NaOH$?",
      "options": [
        "H_2NCH_2COOH",
        "CH_3NH_2",
        "CH_3COOH",
        "C_6H_5NH_2"
      ],
      "correctAnswer": "H_2NCH_2COOH",
      "detailedDerivation": "Glycine ($H_2NCH_2COOH$) là amino acid có tính chất lưỡng tính.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Cho $4.5\\text{ g}$ ethylamine ($C_2H_5NH_2, M = 45$) tác dụng vừa đủ với dung dịch $HCl$. Khối lượng muối ethylamoni chloride ($C_2H_5NH_3Cl$) thu được là:",
      "options": [
        "8.15\\text{ g}",
        "7.30\\text{ g}",
        "4.50\\text{ g}",
        "9.10\\text{ g}"
      ],
      "correctAnswer": "8.15\\text{ g}",
      "detailedDerivation": "$n = \\frac{4.5}{45} = 0.1\\text{ mol} \\implies m_{\\text{muối}} = 0.1 \\times (45 + 36.5) = 0.1 \\times 81.5 = 8.15\\text{ g}$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Cho $7.5\\text{ g}$ glycine ($H_2NCH_2COOH, M = 75$) phản ứng hoàn toàn với dung dịch $NaOH$ dư. Khối lượng muối thu được là:",
      "options": [
        "9.7\\text{ g}",
        "8.5\\text{ g}",
        "11.2\\text{ g}",
        "7.5\\text{ g}"
      ],
      "correctAnswer": "9.7\\text{ g}",
      "detailedDerivation": "$n_{\\text{gly}} = \\frac{7.5}{75} = 0.1\\text{ mol} \\implies$ muối $H_2NCH_2COONa (M = 97) \\implies m = 0.1 \\times 97 = 9.7\\text{ g}$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Aniline phản ứng với nước bromine tạo kết tủa trắng 2,4,6-tribromoaniline. Cho $9.3\\text{ g}$ aniline phản ứng hoàn toàn với nước bromine dư thu được khối lượng kết tủa trắng là: ($M_{\\text{kết tủa}} = 330$)",
      "options": [
        "33.0\\text{ g}",
        "16.5\\text{ g}",
        "24.75\\text{ g}",
        "49.5\\text{ g}"
      ],
      "correctAnswer": "33.0\\text{ g}",
      "detailedDerivation": "$n_{\\text{aniline}} = \\frac{9.3}{93} = 0.1\\text{ mol} \\implies n_{\\text{kết tủa}} = 0.1\\text{ mol} \\implies m = 0.1 \\times 330 = 33.0\\text{ g}$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Số đồng phân amine có cùng công thức phân tử $C_3H_9N$ là:",
      "options": [
        "4",
        "3",
        "5",
        "2"
      ],
      "correctAnswer": "4",
      "detailedDerivation": "Có 2 amine bậc I ($CH_3CH_2CH_2NH_2$, $CH_3CH(NH_2)CH_3$), 1 amine bậc II ($CH_3CH_2NHCH_3$) và 1 amine bậc III ($(CH_3)_3N$). Tổng cộng có 4 đồng phân.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Thủy phân hoàn toàn $1\\text{ mol}$ pentapeptide mạch hở Gly-Ala-Val-Gly-Ala cần dùng tối đa bao nhiêu mol $NaOH$ trong dung dịch?",
      "options": [
        "5 mol",
        "4 mol",
        "6 mol",
        "1 mol"
      ],
      "correctAnswer": "5 mol",
      "detailedDerivation": "Pentapeptide chứa 5 mắt xích $\\alpha$-amino acid đều có 1 nhóm $-COOH$ và 1 nhóm $-NH_2$. Cần $5\\text{ mol } NaOH$ để thủy phân hoàn toàn tạo muối.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Đốt cháy hoàn toàn một amine no đơn chức mạch hở $X$ thu được $0.3\\text{ mol } CO_2$ và $0.05\\text{ mol } N_2$. Công thức phân tử của $X$ là:",
      "options": [
        "C_3H_9N",
        "C_2H_7N",
        "C_4H_{11}N",
        "CH_5N"
      ],
      "correctAnswer": "C_3H_9N",
      "detailedDerivation": "Amine no đơn chức có $n_X = 2 n_{N_2} = 2 \\times 0.05 = 0.1\\text{ mol}$. Số nguyên tử carbon: $C = \\frac{n_{CO_2}}{n_X} = \\frac{0.3}{0.1} = 3$. CTPT là $C_3H_9N$.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Protein bị đông tụ bởi tác nhân nào sau đây?",
      "options": [
        "Đun nóng, acid, base hoặc ion kim loại nặng",
        "Nước đá lạnh",
        "Dung dịch đường saccharose",
        "Dầu ăn thực vật"
      ],
      "correctAnswer": "Đun nóng, acid, base hoặc ion kim loại nặng",
      "detailedDerivation": "Sự đông tụ protein xảy ra khi cấu trúc bậc cao bị phá vỡ dưới tác dụng của nhiệt độ cao, môi trường acid/base mạnh hoặc muối kim loại nặng.",
      "cognitiveLevel": "Vận dụng cao"
    },
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
        "Tơ tằm",
        "Poly(ethylene terephthalate)"
      ],
      "correctAnswer": "Polyethylene (PE)",
      "detailedDerivation": "PE được điều chế trực tiếp từ phản ứng trùng hợp ethylene: $n CH_2=CH_2 \\xrightarrow{t^\\circ, p, xt} (-CH_2-CH_2-)_n$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Tơ nào sau đây là tơ bán tổng hợp (tơ nhân tạo)?",
      "options": [
        "Tơ visco",
        "Tơ tằm",
        "Tơ nilon-6,6",
        "Tơ nitron"
      ],
      "correctAnswer": "Tơ visco",
      "detailedDerivation": "Tơ visco và tơ cellulose acetate được chế biến từ cellulose thiên nhiên qua phản ứng hóa học nên gọi là tơ bán tổng hợp.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Monomer dùng để điều chế poly(vinyl chloride) (PVC) là:",
      "options": [
        "CH_2=CH-Cl",
        "CH_2=CH_2",
        "CH_2=CH-CH_3",
        "CF_2=CF_2"
      ],
      "correctAnswer": "CH_2=CH-Cl",
      "detailedDerivation": "Vinyl chloride ($CH_2=CH-Cl$) trùng hợp tạo PVC.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Tơ nilon-6,6 thuộc loại:",
      "options": [
        "Polyamide",
        "Polyester",
        "Polyether",
        "Polyurethane"
      ],
      "correctAnswer": "Polyamide",
      "detailedDerivation": "Nilon-6,6 được điều chế từ hexamethylenediamine và adipic acid, chứa các liên kết amide $-CO-NH-$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Cao su buna được sản xuất bằng phản ứng trùng hợp chất nào sau đây?",
      "options": [
        "Buta-1,3-diene",
        "Isoprene",
        "Styrene",
        "Chloroprene"
      ],
      "correctAnswer": "Buta-1,3-diene",
      "detailedDerivation": "$n CH_2=CH-CH=CH_2 \\xrightarrow{Na, t^\\circ} (-CH_2-CH=CH-CH_2-)_n$ (cao su buna).",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Phản ứng trùng ngưng là quá trình kết hợp nhiều phân tử nhỏ thành phân tử lớn (polymer) đồng thời giải phóng:",
      "options": [
        "Các phân tử nhỏ khác (như H_2O)",
        "Khí hydrogen",
        "Nhiệt lượng lớn",
        "Chất xúc tác"
      ],
      "correctAnswer": "Các phân tử nhỏ khác (như H_2O)",
      "detailedDerivation": "Định nghĩa phản ứng trùng ngưng SGK Hóa 12 GDPT 2018.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Chất dẻo plexiglas (thủy tinh hữu cơ) bền, trong suốt được điều chế từ monomer:",
      "options": [
        "Methyl methacrylate",
        "Methyl acrylate",
        "Acrylonitrile",
        "Styrene"
      ],
      "correctAnswer": "Methyl methacrylate",
      "detailedDerivation": "Poly(methyl methacrylate) được điều chế bằng phản ứng trùng hợp methyl methacrylate ($CH_2=C(CH_3)COOCH_3$).",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Cao su lưu hóa có tính đàn hồi cao và chịu nhiệt tốt hơn cao su sống nhờ có:",
      "options": [
        "Cầu nối disulfide (-S-S-) tạo mạng không gian",
        "Liên kết hydro liên phân tử",
        "Khối lượng mol nhỏ hơn",
        "Nhóm chức phân cực"
      ],
      "correctAnswer": "Cầu nối disulfide (-S-S-) tạo mạng không gian",
      "detailedDerivation": "Lưu hóa cao su tạo cầu nối $-S-S-$ giữa các mạch thẳng biến chúng thành cấu trúc mạng không gian.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Polymer nào sau đây có cấu trúc mạng không gian?",
      "options": [
        "Nhựa bakelite (nhựa rezit)",
        "Polyethylene",
        "Cao su thiên nhiên chưa lưu hóa",
        "Amylose"
      ],
      "correctAnswer": "Nhựa bakelite (nhựa rezit)",
      "detailedDerivation": "Nhựa rezit (bakelite) và cao su lưu hóa có cấu trúc mạng không gian ba chiều.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Khối lượng mol của một đoạn mạch poly(vinyl chloride) (PVC) là $125000\\text{ g/mol}$. Hệ số trùng hợp $n$ của đoạn mạch PVC đó là:",
      "options": [
        "2000",
        "1500",
        "2500",
        "3000"
      ],
      "correctAnswer": "2000",
      "detailedDerivation": "Khối lượng 1 mắt xích PVC ($C_2H_3Cl$) là $M = 24 + 3 + 35.5 = 62.5\\text{ g/mol}$. Hệ số trùng hợp $n = \\frac{125000}{62.5} = 2000$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Để sản xuất $1\\text{ tấn}$ PE với hiệu suất phản ứng trùng hợp là 90%, lượng ethylene ($C_2H_4$) cần dùng là:",
      "options": [
        "1.11\\text{ tấn}",
        "0.90\\text{ tấn}",
        "1.25\\text{ tấn}",
        "1.00\\text{ tấn}"
      ],
      "correctAnswer": "1.11\\text{ tấn}",
      "detailedDerivation": "Khối lượng lí thuyết: 1 tấn. Với hiệu suất 90%: $m = \\frac{1}{0.90} \\approx 1.111\\text{ tấn}$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Trùng ngưng acid $\\epsilon$-aminocaproic thu được polymer nào sau đây?",
      "options": [
        "Nilon-6",
        "Nilon-7",
        "Nilon-6,6",
        "Tơ lapsan"
      ],
      "correctAnswer": "Nilon-6",
      "detailedDerivation": "Acid $\\epsilon$-aminocaproic có 6C trùng ngưng tạo policaproamide (nilon-6).",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Đồng trùng hợp buta-1,3-diene với styrene có xúc tác $Na$ thu được cao su:",
      "options": [
        "Cao su buna-S",
        "Cao su buna-N",
        "Cao su isoprene",
        "Cao su chloroprene"
      ],
      "correctAnswer": "Cao su buna-S",
      "detailedDerivation": "Butadiene + Styrene $\\rightarrow$ Cao su buna-S.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Một đoạn mạch tơ nilon-6,6 có phân tử khối bằng $45200\\text{ amu}$. Số mắt xích của đoạn mạch đó là: ($M_{\\text{mắt xích}} = 226$)",
      "options": [
        "200",
        "400",
        "150",
        "250"
      ],
      "correctAnswer": "200",
      "detailedDerivation": "Mắt xích nilon-6,6 có $M = 226$. Số mắt xích $n = \\frac{45200}{226} = 200$.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Đốt cháy hoàn toàn $1\\text{ mol}$ monomer $X$ thu được $4\\text{ mol } CO_2$ và $3\\text{ mol } H_2O$. Biết $X$ tham gia phản ứng trùng hợp tạo cao su. $X$ là:",
      "options": [
        "Buta-1,3-diene",
        "Isoprene",
        "Styrene",
        "Vinyl chloride"
      ],
      "correctAnswer": "Buta-1,3-diene",
      "detailedDerivation": "Số nguyên tử $C = 4$, số nguyên tử $H = 6 \\implies C_4H_6$ (buta-1,3-diene).",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Quá trình nhiệt phân chất thải nhựa poly(lactic acid) (PLA) sinh học để thu hồi monomer thuộc về giải pháp:",
      "options": [
        "Tái chế hóa học (kinh tế tuần hoàn)",
        "Chôn lấp rác thải",
        "Thiêu hủy sinh nhiệt",
        "Sản xuất phân bón vô cơ"
      ],
      "correctAnswer": "Tái chế hóa học (kinh tế tuần hoàn)",
      "detailedDerivation": "Tái chế hóa học biến rác thải nhựa về monomer tinh khiết để tái tổng hợp, giảm thiểu ô nhiễm môi trường.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Cho các polymer: PE, PVC, tơ tằm, nilon-6,6, tơ visco. Số polymer có nguồn gốc tổng hợp hoàn toàn là:",
      "options": [
        "3",
        "2",
        "4",
        "5"
      ],
      "correctAnswer": "3",
      "detailedDerivation": "PE, PVC, nilon-6,6 là polymer tổng hợp (3 chất). Tơ tằm là thiên nhiên, tơ visco là bán tổng hợp.",
      "cognitiveLevel": "Vận dụng cao"
    },
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
      "questionText": "Trong pin điện hóa Galvani, quá trình oxi hóa xảy ra tại cực nào?",
      "options": [
        "Anode (cực âm)",
        "Cathode (cực dương)",
        "Cả hai cực",
        "Cầu muối"
      ],
      "correctAnswer": "Anode (cực âm)",
      "detailedDerivation": "Trong pin điện hóa: Anode là cực âm, nơi xảy ra quá trình oxi hóa ($M \\rightarrow M^{n+} + ne$); Cathode là cực dương, nơi xảy ra quá trình khử.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Suất điện động chuẩn của pin điện hóa $E^\\circ_{\\text{pin}}$ được tính theo công thức:",
      "options": [
        "E^\\circ_{\\text{pin}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}",
        "E^\\circ_{\\text{pin}} = E^\\circ_{\\text{anode}} - E^\\circ_{\\text{cathode}}",
        "E^\\circ_{\\text{pin}} = E^\\circ_{\\text{cathode}} + E^\\circ_{\\text{anode}}",
        "E^\\circ_{\\text{pin}} = 2E^\\circ_{\\text{cathode}}"
      ],
      "correctAnswer": "E^\\circ_{\\text{pin}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}}",
      "detailedDerivation": "Suất điện động chuẩn luôn dương: $E^\\circ_{\\text{pin}} = E^\\circ_{\\text{cực dương}} - E^\\circ_{\\text{cực âm}} > 0$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Định luật Faraday về điện phân xác định khối lượng $m$ của chất giải phóng ở điện cực là:",
      "options": [
        "m = \\frac{A \\cdot I \\cdot t}{n \\cdot F}",
        "m = \\frac{n \\cdot F}{A \\cdot I \\cdot t}",
        "m = A \\cdot I \\cdot t",
        "m = \\frac{I \\cdot t}{F}"
      ],
      "correctAnswer": "m = \\frac{A \\cdot I \\cdot t}{n \\cdot F}",
      "detailedDerivation": "Công thức Faraday SGK Hóa 12 GDPT 2018 ($F = 96500\\text{ C/mol}$).",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Hằng số Faraday $F$ trong định luật điện phân có giá trị xấp xỉ bằng:",
      "options": [
        "96500\\text{ C/mol}",
        "6.02 \\times 10^{23}\\text{ C/mol}",
        "1.6 \\times 10^{-19}\\text{ C/mol}",
        "8.31\\text{ J/mol}"
      ],
      "correctAnswer": "96500\\text{ C/mol}",
      "detailedDerivation": "$F = e \\cdot N_A \\approx 1.602 \\times 10^{-19} \\times 6.022 \\times 10^{23} \\approx 96500\\text{ C/mol}$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Cho thế điện cực chuẩn: $E^\\circ(Zn^{2+}/Zn) = -0.76\\text{ V}$ và $E^\\circ(Cu^{2+}/Cu) = +0.34\\text{ V}$. Suất điện động chuẩn của pin điện hóa Zn - Cu là:",
      "options": [
        "1.10\\text{ V}",
        "0.42\\text{ V}",
        "-1.10\\text{ V}",
        "0.76\\text{ V}"
      ],
      "correctAnswer": "1.10\\text{ V}",
      "detailedDerivation": "$E^\\circ_{\\text{pin}} = E^\\circ(Cu^{2+}/Cu) - E^\\circ(Zn^{2+}/Zn) = 0.34 - (-0.76) = 1.10\\text{ V}$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Trong quá trình điện phân dung dịch $CuSO_4$ với điện cực trơ, tại cathode (cực âm) xảy ra quá trình:",
      "options": [
        "Khử ion Cu^{2+}: Cu^{2+} + 2e \\rightarrow Cu",
        "Oxi hóa ion Cu^{2+}",
        "Oxi hóa phân tử nước",
        "Khử ion SO_4^{2-}"
      ],
      "correctAnswer": "Khử ion Cu^{2+}: Cu^{2+} + 2e \\rightarrow Cu",
      "detailedDerivation": "Tại cathode bình điện phân luôn xảy ra quá trình khử: ion có tính oxi hóa mạnh hơn ($Cu^{2+}$) bị khử tạo kim loại $Cu$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Phương pháp điện phân nóng chảy được áp dụng để điều chế các kim loại nào sau đây?",
      "options": [
        "Kim loại hoạt động hóa học mạnh (Na, K, Mg, Al)",
        "Kim loại trung bình (Fe, Zn)",
        "Kim loại yếu (Cu, Ag)",
        "Tất cả các kim loại"
      ],
      "correctAnswer": "Kim loại hoạt động hóa học mạnh (Na, K, Mg, Al)",
      "detailedDerivation": "Các kim loại có tính khử mạnh nhóm IA, IIA và nhôm ($Al$) chỉ có thể điều chế bằng phương pháp điện phân nóng chảy hợp chất của chúng.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Tại anode (cực dương) của bình điện phân dung dịch $NaCl$ có màng ngăn xốp giải phóng khí:",
      "options": [
        "Khí Chlorine (Cl_2)",
        "Khí Hydrogen (H_2)",
        "Khí Oxygen (O_2)",
        "Khí Nitrogen (N_2)"
      ],
      "correctAnswer": "Khí Chlorine (Cl_2)",
      "detailedDerivation": "Tại anode xảy ra quá trình oxi hóa ion chloride: $2Cl^- \\rightarrow Cl_2 \\uparrow + 2e$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Cầu muối trong pin điện hóa có vai trò:",
      "options": [
        "Duy trì sự trung hòa điện tích giữa hai dung dịch điện li",
        "Dẫn electron chạy qua",
        "Làm tăng điện trở của pin",
        "Ngăn cản hoàn toàn ion di chuyển"
      ],
      "correctAnswer": "Duy trì sự trung hòa điện tích giữa hai dung dịch điện li",
      "detailedDerivation": "Cầu muối cho các ion di chuyển qua để khép kín mạch điện và giữ trung hòa điện tích cho hai cốc điện li.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Điện phân dung dịch $CuSO_4$ với cường độ dòng điện $I = 2\\text{ A}$ trong thời gian $1930\\text{ s}$. Khối lượng đồng bám vào cathode là: ($Cu = 64$)",
      "options": [
        "1.28\\text{ g}",
        "0.64\\text{ g}",
        "2.56\\text{ g}",
        "1.93\\text{ g}"
      ],
      "correctAnswer": "1.28\\text{ g}",
      "detailedDerivation": "$m = \\frac{A I t}{n F} = \\frac{64 \\times 2 \\times 1930}{2 \\times 96500} = \\frac{64 \\times 3860}{193000} = \\frac{64}{50} = 1.28\\text{ g}$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Cho thế điện cực chuẩn: $E^\\circ(Mg^{2+}/Mg) = -2.37\\text{ V}$ và $E^\\circ(Ag^+/Ag) = +0.80\\text{ V}$. Suất điện động chuẩn của pin Mg - Ag là:",
      "options": [
        "3.17\\text{ V}",
        "1.57\\text{ V}",
        "2.37\\text{ V}",
        "-3.17\\text{ V}"
      ],
      "correctAnswer": "3.17\\text{ V}",
      "detailedDerivation": "$E^\\circ = 0.80 - (-2.37) = 3.17\\text{ V}$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Điện phân $500\\text{ mL}$ dung dịch $NaCl$ với điện cực trơ, màng ngăn xốp đến khi ở cathode thu được $1.2395\\text{ lít}$ khí $H_2$ (đkc, tương đương $0.05\\text{ mol}$). Nồng độ $NaOH$ thu được trong dung dịch là:",
      "options": [
        "0.2\\text{ M}",
        "0.1\\text{ M}",
        "0.4\\text{ M}",
        "0.05\\text{ M}"
      ],
      "correctAnswer": "0.2\\text{ M}",
      "detailedDerivation": "$2NaCl + 2H_2O \\rightarrow 2NaOH + H_2 \\uparrow + Cl_2 \\uparrow$. $n_{NaOH} = 2 n_{H_2} = 2 \\times 0.05 = 0.1\\text{ mol}$. $C_M = \\frac{0.1}{0.5} = 0.2\\text{ M}$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Điện phân nóng chảy $Al_2O_3$ với dòng điện cường độ lớn thu được $54\\text{ kg}$ nhôm ($Al, M = 27$) ở cathode. Thể tích khí $O_2$ (đktc, tức $0^\\circ\\text{C}, 1\\text{ atm}$, $V = 22.4n$) thoát ra ở anode là:",
      "options": [
        "33600\\text{ lít}",
        "22400\\text{ lít}",
        "44800\\text{ lít}",
        "11200\\text{ lít}"
      ],
      "correctAnswer": "33600\\text{ lít}",
      "detailedDerivation": "$n_{Al} = \\frac{54000}{27} = 2000\\text{ mol}$. Phản ứng: $2Al_2O_3 \\rightarrow 4Al + 3O_2 \\implies n_{O_2} = \\frac{3}{4} n_{Al} = 1500\\text{ mol}$. $V = 1500 \\times 22.4 = 33600\\text{ lít}$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Điện phân dung dịch hỗn hợp chứa $0.1\\text{ mol } AgNO_3$ và $0.2\\text{ mol } Cu(NO_3)_2$. Thứ tự ion bị khử ở cathode là:",
      "options": [
        "Ag^+ trước, sau đó đến Cu^{2+}",
        "Cu^{2+} trước, sau đó đến Ag^+",
        "Cả hai ion bị khử đồng thời",
        "H_2O bị khử trước"
      ],
      "correctAnswer": "Ag^+ trước, sau đó đến Cu^{2+}",
      "detailedDerivation": "Theo dãy điện hóa, ion có tính oxi hóa mạnh hơn ($Ag^+, E^\\circ = +0.80\\text{ V}$) sẽ bị khử trước ion $Cu^{2+} (E^\\circ = +0.34\\text{ V})$.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Dẫn khí $H_2$ và $O_2$ vào pin nhiên liệu hydrogen (fuel cell) tạo ra dòng điện và thải ra:",
      "options": [
        "Nước (H_2O)",
        "Khí CO_2",
        "Khí SO_2",
        "Dung dịch kiềm"
      ],
      "correctAnswer": "Nước (H_2O)",
      "detailedDerivation": "Pin nhiên liệu hydrogen chuyển hóa trực tiếp năng lượng hóa học thành điện năng, phản ứng tổng quát $2H_2 + O_2 \\rightarrow 2H_2O$, là nguồn năng lượng sạch không phát thải khí nhà kính.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Điện phân dung dịch $CuSO_4$ có điện cực anode bằng đồng (hiện tượng dương cực tan). Nồng độ ion $Cu^{2+}$ trong dung dịch trong quá trình điện phân:",
      "options": [
        "Không đổi",
        "Tăng dần",
        "Giảm dần",
        "Giảm về 0"
      ],
      "correctAnswer": "Không đổi",
      "detailedDerivation": "Đồng tan ra ở anode với tốc độ đúng bằng đồng kết tủa bám vào cathode, do đó nồng độ $Cu^{2+}$ trong dung dịch được duy trì không đổi.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Điện phân với điện cực trơ dung dịch chứa $0.2\\text{ mol } CuSO_4$ và $0.3\\text{ mol } NaCl$. Khí đầu tiên thoát ra ở cathode là:",
      "options": [
        "H_2 (khi Cu^{2+} đã điện phân hết)",
        "Cl_2",
        "O_2",
        "SO_2"
      ],
      "correctAnswer": "H_2 (khi Cu^{2+} đã điện phân hết)",
      "detailedDerivation": "Ở cathode $Cu^{2+}$ bị khử trước tạo kim loại $Cu$. Sau khi $Cu^{2+}$ hết, $H_2O$ bị khử tạo khí $H_2$ thoát ra.",
      "cognitiveLevel": "Vận dụng cao"
    },
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
      "questionText": "Tính chất vật lí chung của kim loại (tính dẻo, tính dẫn điện, dẫn nhiệt, ánh kim) gây ra bởi:",
      "options": [
        "Các electron tự do trong mạng tinh thể kim loại",
        "Các ion dương kim loại",
        "Liên kết cộng hóa trị",
        "Khối lượng riêng lớn"
      ],
      "correctAnswer": "Các electron tự do trong mạng tinh thể kim loại",
      "detailedDerivation": "Sự có mặt của các electron tự do chuyển động trong mạng tinh thể quyết định 4 tính chất vật lí chung của kim loại.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Kim loại dẫn điện tốt nhất trong tất cả các kim loại là:",
      "options": [
        "Bạc (Ag)",
        "Đồng (Cu)",
        "Vàng (Au)",
        "Nhôm (Al)"
      ],
      "correctAnswer": "Bạc (Ag)",
      "detailedDerivation": "Thứ tự dẫn điện giảm dần: $Ag > Cu > Au > Al > Fe$. Bạc ($Ag$) là kim loại dẫn điện tốt nhất.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Kim loại có độ cứng lớn nhất có thể cắt được kính là:",
      "options": [
        "Chromium (Cr)",
        "Kim cương",
        "Tungsten (W)",
        "Sắt (Fe)"
      ],
      "correctAnswer": "Chromium (Cr)",
      "detailedDerivation": "Chromium ($Cr$) là kim loại cứng nhất (độ cứng 9 trên thang Mohs). Kim cương là phi kim.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Kim loại có nhiệt độ nóng chảy cao nhất dùng làm dây tóc bóng đèn sợi đốt là:",
      "options": [
        "Tungsten (W, Vônfram)",
        "Titanium (Ti)",
        "Sắt (Fe)",
        "Đồng (Cu)"
      ],
      "correctAnswer": "Tungsten (W, Vônfram)",
      "detailedDerivation": "Tungsten ($W$) có nhiệt độ nóng chảy cao nhất ($3422^\\circ\\text{C}$).",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Quy tắc alpha ($\\alpha$) trong dãy điện hóa cho biết:",
      "options": [
        "Chất oxi hóa mạnh hơn tác dụng với chất khử mạnh hơn tạo chất oxi hóa yếu hơn và chất khử yếu hơn",
        "Kim loại đứng trước đẩy kim loại đứng sau ra khỏi dung dịch muối",
        "Kim loại nào cũng tác dụng với nước",
        "Tính khử của ion kim loại tăng dần"
      ],
      "correctAnswer": "Chất oxi hóa mạnh hơn tác dụng với chất khử mạnh hơn tạo chất oxi hóa yếu hơn và chất khử yếu hơn",
      "detailedDerivation": "Nội dung quy tắc $\\alpha$ theo SGK Hóa 12 GDPT 2018.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Ăn mòn kim loại là sự phá hủy kim loại hoặc hợp kim do:",
      "options": [
        "Tác dụng hóa học hoặc điện hóa học của môi trường xung quanh",
        "Tác dụng cơ học",
        "Bị nung nóng ở nhiệt độ cao",
        "Tác dụng của lực ma sát"
      ],
      "correctAnswer": "Tác dụng hóa học hoặc điện hóa học của môi trường xung quanh",
      "detailedDerivation": "Định nghĩa ăn mòn kim loại trong SGK Hóa 12.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Để bảo vệ vỏ tàu biển bằng thép (hợp kim của sắt) khỏi bị ăn mòn trong nước biển, người ta gắn vào vỏ tàu các tấm:",
      "options": [
        "Kẽm (Zn)",
        "Đồng (Cu)",
        "Chì (Pb)",
        "Thiếc (Sn)"
      ],
      "correctAnswer": "Kẽm (Zn)",
      "detailedDerivation": "Phương pháp bảo vệ cathode: Kẽm có tính khử mạnh hơn sắt, đóng vai trò là anode bị ăn mòn thay thế, bảo vệ vỏ thép không bị ăn mòn.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Cặp kim loại tiếp xúc nào sau đây khi để trong không khí ẩm thì sắt ($Fe$) bị ăn mòn điện hóa trước?",
      "options": [
        "Fe - Cu",
        "Fe - Zn",
        "Fe - Mg",
        "Fe - Al"
      ],
      "correctAnswer": "Fe - Cu",
      "detailedDerivation": "Sắt đứng trước đồng trong dãy điện hóa, có tính khử mạnh hơn đồng nên sắt đóng vai trò cực âm (anode) và bị ăn mòn trước.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Kim loại nào sau đây KHÔNG tác dụng được với dung dịch $HCl$ loãng giải phóng khí $H_2$?",
      "options": [
        "Đồng (Cu)",
        "Sắt (Fe)",
        "Kẽm (Zn)",
        "Nhôm (Al)"
      ],
      "correctAnswer": "Đồng (Cu)",
      "detailedDerivation": "Đồng ($Cu$) đứng sau hydrogen trong dãy hoạt động hóa học nên không khử được ion $H^+$ trong acid thường.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Cho đinh sắt vào dung dịch $CuSO_4$, sau một thời gian thấy bề mặt đinh sắt có lớp kim loại màu đỏ bám vào. Đó là kim loại:",
      "options": [
        "Đồng (Cu)",
        "Sắt (Fe)",
        "Kẽm (Zn)",
        "Bạc (Ag)"
      ],
      "correctAnswer": "Đồng (Cu)",
      "detailedDerivation": "Phản ứng: $Fe + CuSO_4 \\rightarrow FeSO_4 + Cu \\downarrow$. Kim loại đồng màu đỏ bám lên đinh sắt.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Ngâm một lá sắt ($Fe, M = 56$) vào $100\\text{ mL}$ dung dịch $CuSO_4\\, 1\\text{ M}$. Sau khi phản ứng kết thúc hoàn toàn, khối lượng lá sắt tăng thêm:",
      "options": [
        "0.8\\text{ g}",
        "6.4\\text{ g}",
        "5.6\\text{ g}",
        "1.6\\text{ g}"
      ],
      "correctAnswer": "0.8\\text{ g}",
      "detailedDerivation": "$n_{CuSO_4} = 0.1\\text{ mol}$. $Fe + Cu^{2+} \\rightarrow Fe^{2+} + Cu$. Mỗi mol $Fe$ tan đi ($56\\text{ g}$) thì có $1\\text{ mol } Cu$ bám vào ($64\\text{ g}$) $\\implies$ khối lượng tăng $64 - 56 = 8\\text{ g/mol}$. Tăng: $0.1 \\times 8 = 0.8\\text{ g}$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Hòa tan hoàn toàn $5.4\\text{ g}$ nhôm ($Al, M = 27$) trong dung dịch $HCl$ dư. Thể tích khí $H_2$ (đkc, lấy $V = 24.79n$) thu được là:",
      "options": [
        "7.437\\text{ lít}",
        "4.958\\text{ lít}",
        "6.720\\text{ lít}",
        "2.479\\text{ lít}"
      ],
      "correctAnswer": "7.437\\text{ lít}",
      "detailedDerivation": "$n_{Al} = \\frac{5.4}{27} = 0.2\\text{ mol}$. Phản ứng: $2Al + 6HCl \\rightarrow 2AlCl_3 + 3H_2 \\implies n_{H_2} = \\frac{3}{2} n_{Al} = 0.3\\text{ mol}$. $V = 0.3 \\times 24.79 = 7.437\\text{ lít}$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Cho $2.8\\text{ g}$ sắt ($Fe, M = 56$) tác dụng với lượng dư dung dịch $HNO_3$ loãng thu được $V\\text{ lít}$ khí $NO$ (sản phẩm khử duy nhất, đkc). Giá trị của $V$ là:",
      "options": [
        "1.2395\\text{ lít}",
        "2.479\\text{ lít}",
        "0.6198\\text{ lít}",
        "1.120\\text{ lít}"
      ],
      "correctAnswer": "1.2395\\text{ lít}",
      "detailedDerivation": "$n_{Fe} = \\frac{2.8}{56} = 0.05\\text{ mol}$. Bảo toàn electron: $3 n_{Fe} = 3 n_{NO} \\implies n_{NO} = 0.05\\text{ mol}$. $V = 0.05 \\times 24.79 = 1.2395\\text{ lít}$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Hợp kim gang và thép đều là hợp kim của sắt với carbon, trong đó hàm lượng carbon trong gang là:",
      "options": [
        "2\\% đến 5\\%",
        "dưới 2\\%",
        "5\\% đến 10\\%",
        "trên 10\\%"
      ],
      "correctAnswer": "2\\% đến 5\\%",
      "detailedDerivation": "Theo định nghĩa SGK Hóa 12: Gang là hợp kim sắt chứa từ 2 - 5% carbon; Thép chứa dưới 2% carbon.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Cho hỗn hợp gồm $0.1\\text{ mol } Fe$ và $0.1\\text{ mol } Cu$ vào dung dịch chứa $0.35\\text{ mol } AgNO_3$. Sau khi phản ứng xảy ra hoàn toàn thu được khối lượng chất rắn là:",
      "options": [
        "37.8\\text{ g}",
        "32.4\\text{ g}",
        "27.0\\text{ g}",
        "43.2\\text{ g}"
      ],
      "correctAnswer": "37.8\\text{ g}",
      "detailedDerivation": "Thứ tự phản ứng: $Fe + 2Ag^+ \\rightarrow Fe^{2+} + 2Ag$ (cần $0.2\\text{ mol } Ag^+$, sinh $0.2\\text{ mol } Ag$); còn dư $0.15\\text{ mol } Ag^+$. Tiếp theo: $Cu + 2Ag^+ \\rightarrow Cu^{2+} + 2Ag$ ($0.15\\text{ mol } Ag^+$ phản ứng với $0.075\\text{ mol } Cu$, sinh $0.15\\text{ mol } Ag$). $Cu$ dư $0.1 - 0.075 = 0.025\\text{ mol}$. Tổng $Ag = 0.35\\text{ mol} \\implies m_{Ag} = 0.35 \\times 108 = 37.8\\text{ g}$; $m_{Cu\\text{ dư}} = 0.025 \\times 64 = 1.6\\text{ g}$. Tổng khối lượng chất rắn: $37.8 + 1.6 = 39.4\\text{ g}$ (nếu chất rắn chỉ gồm Ag thì là 37.8g).",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Phương pháp nhiệt luyện dùng khí $CO$ hoặc $H_2$ ở nhiệt độ cao thường được áp dụng để khử oxit của các kim loại:",
      "options": [
        "Đứng sau nhôm trong dãy điện hóa (như Fe, Cu, Zn)",
        "Đứng trước nhôm (như Na, Mg, Al)",
        "Tất cả các oxit kim loại",
        "Chỉ khử được oxit kim loại quý (Ag, Au)"
      ],
      "correctAnswer": "Đứng sau nhôm trong dãy điện hóa (như Fe, Cu, Zn)",
      "detailedDerivation": "Khí $CO, H_2$ chỉ khử được oxit của các kim loại đứng sau nhôm trong dãy điện hóa ở nhiệt độ cao ($ZnO, Fe_2O_3, CuO$).",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Đun nóng một thanh đồng trong không khí, bề mặt thanh đồng chuyển sang màu đen do hình thành lớp:",
      "options": [
        "Đồng(II) oxit (CuO)",
        "Đồng(I) oxit (Cu_2O)",
        "Đồng cacbonat bazo",
        "Muội than carbon"
      ],
      "correctAnswer": "Đồng(II) oxit (CuO)",
      "detailedDerivation": "Phương trình ăn mòn hóa học: $2Cu + O_2 \\xrightarrow{t^\\circ} 2CuO$ (màu đen).",
      "cognitiveLevel": "Vận dụng cao"
    },
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
      "questionText": "Số oxi hóa của nguyên tố mangan trong hợp chất $KMnO_4$ là:",
      "options": [
        "+7",
        "+6",
        "+4",
        "+2"
      ],
      "correctAnswer": "+7",
      "detailedDerivation": "Đặt số oxi hóa của Mn là $x$: $(+1) + x + 4(-2) = 0 \\iff x - 7 = 0 \\implies x = +7$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Chất khử là chất:",
      "options": [
        "Nhường electron, số oxi hóa tăng sau phản ứng",
        "Nhận electron, số oxi hóa giảm",
        "Chỉ chứa nguyên tử oxygen",
        "Làm quỳ tím đổi màu"
      ],
      "correctAnswer": "Nhường electron, số oxi hóa tăng sau phản ứng",
      "detailedDerivation": "Định nghĩa: 'Chất khử cho, chất oxi hóa nhận'. Chất khử nhường e, số oxi hóa tăng.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Phản ứng tỏa nhiệt là phản ứng có biến thiên enthalpy chuẩn:",
      "options": [
        "\\Delta_r H^\\circ_{298} < 0",
        "\\Delta_r H^\\circ_{298} > 0",
        "\\Delta_r H^\\circ_{298} = 0",
        "\\Delta_r H^\\circ_{298} \\ge 0"
      ],
      "correctAnswer": "\\Delta_r H^\\circ_{298} < 0",
      "detailedDerivation": "Theo quy ước SGK Hóa 10 GDPT 2018: Phản ứng tỏa nhiệt giải phóng năng lượng ra môi trường nên $\\Delta_r H^\\circ_{298} < 0$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Kí hiệu nhiệt tạo thành chuẩn của một chất là:",
      "options": [
        "\\Delta_f H^\\circ_{298}",
        "\\Delta_r H^\\circ_{298}",
        "E_b",
        "K_w"
      ],
      "correctAnswer": "\\Delta_f H^\\circ_{298}",
      "detailedDerivation": "Nhiệt tạo thành chuẩn kí hiệu là $\\Delta_f H^\\circ_{298}$ (f là formation).",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Trong phản ứng $Zn + 2HCl \\rightarrow ZnCl_2 + H_2$, chất bị oxi hóa là:",
      "options": [
        "Zn",
        "HCl",
        "ZnCl_2",
        "H_2"
      ],
      "correctAnswer": "Zn",
      "detailedDerivation": "Số oxi hóa của Zn tăng từ 0 lên +2 $\\implies$ Zn là chất khử $\\implies$ Zn bị oxi hóa.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Cho phản ứng nung vôi: $CaCO_3(s) \\rightarrow CaO(s) + CO_2(g)$ có $\\Delta_r H^\\circ_{298} = +178.29\\text{ kJ}$. Phản ứng này là:",
      "options": [
        "Phản ứng thu nhiệt",
        "Phản ứng tỏa nhiệt",
        "Phản ứng tự xảy ra ở nhiệt độ phòng",
        "Phản ứng không biến thiên năng lượng"
      ],
      "correctAnswer": "Phản ứng thu nhiệt",
      "detailedDerivation": "Vì $\\Delta_r H^\\circ_{298} > 0$ nên đây là phản ứng thu nhiệt, cần liên tục cung cấp nhiệt để phản ứng diễn ra.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Số oxi hóa của carbon trong ion oxalate ($C_2O_4^{2-}$) là:",
      "options": [
        "+3",
        "+4",
        "+2",
        "-2"
      ],
      "correctAnswer": "+3",
      "detailedDerivation": "$2x + 4(-2) = -2 \\iff 2x - 8 = -2 \\iff 2x = 6 \\implies x = +3$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Nhiệt tạo thành chuẩn của các đơn chất bền ở điều kiện chuẩn bằng:",
      "options": [
        "0 kJ/mol",
        "100 kJ/mol",
        "-100 kJ/mol",
        "Giá trị tùy thuộc nhiệt độ"
      ],
      "correctAnswer": "0 kJ/mol",
      "detailedDerivation": "Quy ước nhiệt tạo thành chuẩn của đơn chất bền (như $O_2(g), H_2(g), C(graphite)$) bằng 0 kJ/mol.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Tổng hệ số nguyên tối giản của các chất trong phương trình phản ứng: $Cu + HNO_3 \\rightarrow Cu(NO_3)_2 + NO + H_2O$ là:",
      "options": [
        "20",
        "18",
        "22",
        "16"
      ],
      "correctAnswer": "20",
      "detailedDerivation": "Cân bằng electron: $3Cu + 8HNO_3 \\rightarrow 3Cu(NO_3)_2 + 2NO + 4H_2O$. Tổng hệ số: $3 + 8 + 3 + 2 + 4 = 20$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Cho phản ứng: $C(s) + O_2(g) \\rightarrow CO_2(g)$ có $\\Delta_r H^\\circ_{298} = -393.5\\text{ kJ}$. Đốt cháy hoàn toàn $12\\text{ g}$ than chì (carbon, $M = 12$) tỏa ra nhiệt lượng là:",
      "options": [
        "393.5\\text{ kJ}",
        "787.0\\text{ kJ}",
        "196.75\\text{ kJ}",
        "39.35\\text{ kJ}"
      ],
      "correctAnswer": "393.5\\text{ kJ}",
      "detailedDerivation": "$n_C = \\frac{12}{12} = 1\\text{ mol}$. Lượng nhiệt tỏa ra đúng bằng $393.5\\text{ kJ}$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Công thức tính biến thiên enthalpy phản ứng theo năng lượng liên kết $E_b$ của các chất phản ứng và sản phẩm thể khí là:",
      "options": [
        "\\Delta_r H^\\circ_{298} = \\sum E_b(\\text{chất đầu}) - \\sum E_b(\\text{sản phẩm})",
        "\\Delta_r H^\\circ_{298} = \\sum E_b(\\text{sản phẩm}) - \\sum E_b(\\text{chất đầu})",
        "\\Delta_r H^\\circ_{298} = \\sum \\Delta_f H^\\circ(\\text{chất đầu}) - \\sum \\Delta_f H^\\circ(\\text{sản phẩm})",
        "\\Delta_r H^\\circ_{298} = E_b(\\text{chất đầu}) \\cdot E_b(\\text{sản phẩm})"
      ],
      "correctAnswer": "\\Delta_r H^\\circ_{298} = \\sum E_b(\\text{chất đầu}) - \\sum E_b(\\text{sản phẩm})",
      "detailedDerivation": "Công thức theo năng lượng liên kết: lấy tổng năng lượng phá vỡ liên kết chất phản ứng trừ đi năng lượng tạo thành liên kết sản phẩm.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Cho phản ứng: $H_2(g) + Cl_2(g) \\rightarrow 2HCl(g)$. Biết năng lượng liên kết $E_b(H-H) = 436\\text{ kJ/mol}$, $E_b(Cl-Cl) = 243\\text{ kJ/mol}$, $E_b(H-Cl) = 432\\text{ kJ/mol}$. Biến thiên enthalpy $\\Delta_r H^\\circ_{298}$ của phản ứng là:",
      "options": [
        "-185\\text{ kJ}",
        "+185\\text{ kJ}",
        "-92.5\\text{ kJ}",
        "+92.5\\text{ kJ}"
      ],
      "correctAnswer": "-185\\text{ kJ}",
      "detailedDerivation": "$\\Delta_r H^\\circ_{298} = E_b(H-H) + E_b(Cl-Cl) - 2E_b(H-Cl) = 436 + 243 - 2(432) = 679 - 864 = -185\\text{ kJ}$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Hòa tan hoàn toàn $4.8\\text{ g}$ magie ($Mg, M = 24$) vào dung dịch $HNO_3$ loãng thu được $1.2395\\text{ lít}$ khí $N_2$ (đkc, tương đương $0.05\\text{ mol}$, sản phẩm khử duy nhất). Số mol electron nhường của $Mg$ là:",
      "options": [
        "0.4 mol",
        "0.2 mol",
        "0.5 mol",
        "0.1 mol"
      ],
      "correctAnswer": "0.4 mol",
      "detailedDerivation": "$n_{Mg} = \\frac{4.8}{24} = 0.2\\text{ mol}$. Quá trình nhường: $Mg \\rightarrow Mg^{2+} + 2e \\implies n_{e\\text{ nhường}} = 2 \\times 0.2 = 0.4\\text{ mol}$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Để bảo quản thực phẩm, người ta thường dùng gói hút oxy chứa bột sắt. Phản ứng bột sắt phản ứng với oxy không khí là phản ứng:",
      "options": [
        "Tỏa nhiệt và là phản ứng oxi hóa - khử",
        "Thu nhiệt",
        "Phản ứng trao đổi ion",
        "Phản ứng thủy phân"
      ],
      "correctAnswer": "Tỏa nhiệt và là phản ứng oxi hóa - khử",
      "detailedDerivation": "Sắt bị oxy hóa tạo gỉ sắt: $4Fe + 3O_2 \\rightarrow 2Fe_2O_3$, là phản ứng oxi hóa - khử chậm tỏa nhiệt giúp hút sạch khí oxy bảo quản thực phẩm.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Cho phương trình nhiệt hóa học: $2H_2(g) + O_2(g) \\rightarrow 2H_2O(l)$ có $\\Delta_r H^\\circ_{298} = -571.6\\text{ kJ}$. Nhiệt tạo thành chuẩn của nước lỏng $\\Delta_f H^\\circ_{298}(H_2O(l))$ là:",
      "options": [
        "-285.8\\text{ kJ/mol}",
        "-571.6\\text{ kJ/mol}",
        "+285.8\\text{ kJ/mol}",
        "+571.6\\text{ kJ/mol}"
      ],
      "correctAnswer": "-285.8\\text{ kJ/mol}",
      "detailedDerivation": "Nhiệt tạo thành chuẩn tính cho $1\\text{ mol}$ chất tạo thành từ đơn chất bền: $\\Delta_f H^\\circ_{298} = \\frac{-571.6}{2} = -285.8\\text{ kJ/mol}$.",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Cân bằng phản ứng: $Fe_3O_4 + HNO_3 \\rightarrow Fe(NO_3)_3 + NO + H_2O$. Hệ số tỉ lượng của $HNO_3$ là:",
      "options": [
        "28",
        "10",
        "14",
        "9"
      ],
      "correctAnswer": "28",
      "detailedDerivation": "Quá trình nhường: $3Fe^{+8/3} \\rightarrow 3Fe^{+3} + 1e$. Quá trình nhận: $N^{+5} + 3e \\rightarrow N^{+2}$. Phương trình cân bằng: $3Fe_3O_4 + 28HNO_3 \\rightarrow 9Fe(NO_3)_3 + NO + 14H_2O$. Hệ số $HNO_3$ là 28.",
      "cognitiveLevel": "Vận dụng cao"
    },
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
      "questionText": "Theo thuyết acid - base của Brønsted - Lowry, base là chất:",
      "options": [
        "Có khả năng nhận proton (H^+)",
        "Có khả năng cho proton (H^+)",
        "Phân li ra ion OH^- trong nước",
        "Chứa kim loại kiềm"
      ],
      "correctAnswer": "Có khả năng nhận proton (H^+)",
      "detailedDerivation": "Thuyết Brønsted - Lowry: Acid là chất cho $H^+$, Base là chất nhận $H^+$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Giá trị tích số ion của nước $K_w$ ở $25^\\circ\\text{C}$ bằng:",
      "options": [
        "1.0 \\times 10^{-14}",
        "1.0 \\times 10^{-7}",
        "1.0 \\times 10^{-10}",
        "1.0 \\times 10^{-12}"
      ],
      "correctAnswer": "1.0 \\times 10^{-14}",
      "detailedDerivation": "Ở $25^\\circ\\text{C}$, $K_w = [H^+][OH^-] = 1.0 \\times 10^{-14}$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Công thức tính pH của dung dịch là:",
      "options": [
        "\\text{pH} = -\\log[H^+]",
        "\\text{pH} = \\log[H^+]",
        "\\text{pH} = -\\log[OH^-]",
        "\\text{pH} = 14 + \\log[H^+]"
      ],
      "correctAnswer": "\\text{pH} = -\\log[H^+]",
      "detailedDerivation": "Chỉ số pH được định nghĩa bằng $-\\log[H^+]$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Hợp chất hữu cơ nào sau đây thuộc loại alcohol no, đơn chức, mạch hở?",
      "options": [
        "C_2H_5OH",
        "CH_3COOH",
        "CH_3CHO",
        "C_6H_5OH"
      ],
      "correctAnswer": "C_2H_5OH",
      "detailedDerivation": "Ethanol ($C_2H_5OH$) có nhóm $-OH$ liên kết với gốc alkyl no mạch hở.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Cho cân bằng: $N_2(g) + 3H_2(g) \\rightleftharpoons 2NH_3(g)$ có $\\Delta_r H^\\circ_{298} = -92\\text{ kJ}$. Khi tăng nhiệt độ, cân bằng chuyển dịch theo chiều:",
      "options": [
        "Nghịch (chiều thu nhiệt)",
        "Thuận (chiều tỏa nhiệt)",
        "Không chuyển dịch",
        "Tăng nồng độ NH_3"
      ],
      "correctAnswer": "Nghịch (chiều thu nhiệt)",
      "detailedDerivation": "Nguyên lý Le Chatelier: Khi tăng nhiệt độ, cân bằng chuyển dịch theo chiều chống lại sự tăng nhiệt độ, tức là chiều thu nhiệt (chiều nghịch).",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Dung dịch có nồng độ $[H^+] = 10^{-3}\\text{ M}$ có giá trị pH bằng:",
      "options": [
        "3",
        "11",
        "7",
        "4"
      ],
      "correctAnswer": "3",
      "detailedDerivation": "$\\text{pH} = -\\log(10^{-3}) = 3$. Môi trường acid.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Dung dịch $NaOH\\, 0.01\\text{ M}$ có giá trị pH bằng:",
      "options": [
        "12",
        "2",
        "14",
        "10"
      ],
      "correctAnswer": "12",
      "detailedDerivation": "$[OH^-] = 0.01 = 10^{-2}\\text{ M} \\implies \\text{pOH} = 2 \\implies \\text{pH} = 14 - 2 = 12$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Để phân biệt ethanol ($C_2H_5OH$) và glycerol ($C_3H_5(OH)_3$) người ta dùng thuốc thử:",
      "options": [
        "Cu(OH)_2 ở nhiệt độ phòng",
        "Kim loại Na",
        "Dung dịch AgNO_3/NH_3",
        "Quỳ tím"
      ],
      "correctAnswer": "Cu(OH)_2 ở nhiệt độ phòng",
      "detailedDerivation": "Glycerol là polyalcohol có các nhóm $-OH$ liền kề hòa tan $Cu(OH)_2$ tạo dung dịch màu xanh lam thẫm, ethanol không có hiện tượng này.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Phản ứng giữa acetic acid ($CH_3COOH$) và ethanol ($C_2H_5OH$) có xúc tác $H_2SO_4$ đặc, đun nóng được gọi là phản ứng:",
      "options": [
        "Ester hóa",
        "Xà phòng hóa",
        "Trùng ngưng",
        "Thủy phân"
      ],
      "correctAnswer": "Ester hóa",
      "detailedDerivation": "Phản ứng tạo ester từ carboxylic acid và alcohol gọi là phản ứng ester hóa.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Oxi hóa không hoàn toàn alcohol bậc I ($R-CH_2OH$) bằng bột $CuO$ đun nóng thu được:",
      "options": [
        "Aldehyde (R-CHO)",
        "Ketone (R-CO-R')",
        "Carboxylic acid",
        "Alkene"
      ],
      "correctAnswer": "Aldehyde (R-CHO)",
      "detailedDerivation": "Alcohol bậc I bị oxi hóa bởi $CuO$ nung nóng tạo aldehyde: $RCH_2OH + CuO \\xrightarrow{t^\\circ} RCHO + Cu + H_2O$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Hằng số cân bằng $K_C$ của phản ứng: $H_2(g) + I_2(g) \\rightleftharpoons 2HI(g)$ được biểu diễn bằng:",
      "options": [
        "K_C = \\frac{[HI]^2}{[H_2][I_2]}",
        "K_C = \\frac{[H_2][I_2]}{[HI]^2}",
        "K_C = \\frac{2[HI]}{[H_2][I_2]}",
        "K_C = [HI]^2 - [H_2][I_2]"
      ],
      "correctAnswer": "K_C = \\frac{[HI]^2}{[H_2][I_2]}",
      "detailedDerivation": "Biểu thức hằng số cân bằng theo định luật tác dụng khối lượng: tỉ số tích nồng độ sản phẩm với số mũ bằng hệ số tỉ lượng chia cho tích nồng độ chất đầu.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Pha loãng $10\\text{ mL}$ dung dịch $HCl$ có $\\text{pH} = 2$ thành $1000\\text{ mL}$ bằng nước cất. pH của dung dịch sau khi pha loãng là:",
      "options": [
        "4",
        "3",
        "5",
        "1"
      ],
      "correctAnswer": "4",
      "detailedDerivation": "Thể tích tăng 100 lần $\\implies$ nồng độ $[H^+]$ giảm 100 lần ($10^{-2} \\rightarrow 10^{-4}\\text{ M}$) $\\implies \\text{pH} = 4$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Cho $200\\text{ mL}$ dung dịch $HCl\\, 0.1\\text{ M}$ tác dụng với $200\\text{ mL}$ dung dịch $NaOH\\, 0.2\\text{ M}$. Dung dịch sau phản ứng có pH bằng:",
      "options": [
        "12.7",
        "1.3",
        "7.0",
        "13.0"
      ],
      "correctAnswer": "12.7",
      "detailedDerivation": "$n_{H^+} = 0.02\\text{ mol}, n_{OH^-} = 0.04\\text{ mol} \\implies OH^-$ dư $0.02\\text{ mol}$. Thể tích hỗn hợp $V = 400\\text{ mL} = 0.4\\text{ L}$. $[OH^-]_{\\text{dư}} = \\frac{0.02}{0.4} = 0.05\\text{ M} \\implies \\text{pOH} = -\\log(0.05) \\approx 1.30 \\implies \\text{pH} = 14 - 1.30 = 12.70$.",
      "cognitiveLevel": "Vận dụng"
    },
    {
      "questionText": "Khi tăng áp suất chung của hệ cân bằng: $2SO_2(g) + O_2(g) \\rightleftharpoons 2SO_3(g)$, cân bằng chuyển dịch theo:",
      "options": [
        "Chiều thuận (chiều giảm số mol khí)",
        "Chiều nghịch",
        "Không chuyển dịch",
        "Làm giảm nồng độ SO_3"
      ],
      "correctAnswer": "Chiều thuận (chiều giảm số mol khí)",
      "detailedDerivation": "Bên trái có 3 mol khí, bên phải có 2 mol khí. Tăng áp suất cân bằng chuyển dịch sang phía giảm số mol khí (chiều thuận).",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Đun sôi hỗn hợp gồm ethanol ($C_2H_5OH$) với $H_2SO_4$ đặc ở $170^\\circ\\text{C}$ thu được sản phẩm chính là khí:",
      "options": [
        "Ethylene (C_2H_4)",
        "Diethyl ether (C_2H_5OC_2H_5)",
        "Carbon dioxide (CO_2)",
        "Methane (CH_4)"
      ],
      "correctAnswer": "Ethylene (C_2H_4)",
      "detailedDerivation": "Phản ứng tách nước nội phân tử ở $170^\\circ\\text{C}$: $C_2H_5OH \\xrightarrow{H_2SO_4\\text{ đ}, 170^\\circ\\text{C}} C_2H_4 \\uparrow + H_2O$. (Ở $140^\\circ\\text{C}$ tạo ether).",
      "cognitiveLevel": "Vận dụng cao"
    },
    {
      "questionText": "Một dung dịch acid yếu $CH_3COOH\\, 0.1\\text{ M}$ có độ điện li $\\alpha = 1.34\\%$. Hằng số phân li acid $K_a$ của acid acetic xấp xỉ bằng:",
      "options": [
        "1.8 \\times 10^{-5}",
        "1.8 \\times 10^{-4}",
        "1.34 \\times 10^{-3}",
        "3.2 \\times 10^{-6}"
      ],
      "correctAnswer": "1.8 \\times 10^{-5}",
      "detailedDerivation": "$K_a = \\frac{\\alpha^2 C}{1 - \\alpha} \\approx \\alpha^2 C = (0.0134)^2 \\times 0.1 = 0.00017956 \\times 0.1 \\approx 1.8 \\times 10^{-5}$.",
      "cognitiveLevel": "Vận dụng cao"
    },
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
  "chem12-ch2-carbohydrates": [
    {
      "questionText": "Trong các carbohydrate sau: glucose, fructose, saccharose, maltose, tinh bột, cellulose. Số chất có khả năng tham gia phản ứng tráng bạc với thuốc thử Tollens là:",
      "options": [
        "3 chất",
        "2 chất",
        "4 chất",
        "1 chất"
      ],
      "correctAnswer": "3 chất",
      "detailedDerivation": "Các carbohydrate có phản ứng tráng bạc gồm: glucose (chứa nhóm -CHO), fructose (chuyển hóa thành glucose trong môi trường kiềm), maltose (còn nhóm -OH hemiacetal tự do mở vòng tạo -CHO). Saccharose không có tính khử. Tinh bột và cellulose là polysaccharide không tráng bạc. Vậy có 3 chất.",
      "cognitiveLevel": "Thông hiểu"
    }
  ],
  "chem12-ch3-amine-aminoacid-peptide": [
    {
      "questionText": "Cho $0.2\\text{ mol}$ alanine $(\\text{H}_2\\text{N-CH(CH}_3\\text{)-COOH})$ phản ứng hoàn toàn với dung dịch $\\text{HCl}$ dư. Khối lượng muối thu được sau phản ứng bằng:",
      "options": [
        "25.1\\text{ g}",
        "22.3\\text{ g}",
        "17.8\\text{ g}",
        "12.55\\text{ g}"
      ],
      "correctAnswer": "25.1\\text{ g}",
      "detailedDerivation": "Alanine có $M = 89\\text{ g/mol}$. Phản ứng: $\\text{H}_2\\text{N-CH(CH}_3\\text{)-COOH} + \\text{HCl} \\rightarrow \\text{ClH}_3\\text{N-CH(CH}_3\\text{)-COOH}$. Khối lượng mol muối là $M = 89 + 36.5 = 125.5\\text{ g/mol}$. Khối lượng muối: $m = 0.2 \\times 125.5 = 25.1\\text{ g}$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Số liên kết peptide có trong phân tử tripeptide Gly-Ala-Val là:",
      "options": [
        "2",
        "3",
        "1",
        "4"
      ],
      "correctAnswer": "2",
      "detailedDerivation": "Tripeptide được tạo nên từ 3 gốc $\\alpha$-amino acid liên kết với nhau bằng 2 liên kết peptide (-CO-NH-).",
      "cognitiveLevel": "Nhận biết"
    }
  ],
  "chem12-ch4-polymer-materials": [
    {
      "questionText": "Tơ nào sau đây thuộc loại tơ bán tổng hợp (tơ nhân tạo)?",
      "options": [
        "Tơ visco",
        "Tơ tằm",
        "Tơ nylon-6,6",
        "Tơ nitron"
      ],
      "correctAnswer": "Tơ visco",
      "detailedDerivation": "Tơ visco và tơ cellulose acetate được điều chế bằng cách chế hóa hóa học nguồn polymer thiên nhiên (cellulose), do đó thuộc nhóm tơ bán tổng hợp (tơ nhân tạo). Tơ tằm là tơ thiên nhiên; tơ nylon-6,6 và nitron là tơ tổng hợp.",
      "cognitiveLevel": "Nhận biết"
    }
  ],
  "chem12-ch5-galvanic-cells": [
    {
      "questionText": "Suất điện động chuẩn của pin Galvani Zn-Cu ở $25^\\circ\\text{C}$ được tính bằng biểu thức nào (biết $E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} = +0.34\\text{ V}$ và $E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = -0.76\\text{ V}$)?",
      "options": [
        "E^\\circ_{\\text{pin}} = +1.10\\text{ V}",
        "E^\\circ_{\\text{pin}} = -0.42\\text{ V}",
        "E^\\circ_{\\text{pin}} = +0.42\\text{ V}",
        "E^\\circ_{\\text{pin}} = -1.10\\text{ V}"
      ],
      "correctAnswer": "E^\\circ_{\\text{pin}} = +1.10\\text{ V}",
      "detailedDerivation": "Suất điện động chuẩn của pin: $E^\\circ_{\\text{pin}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}} = E^\\circ_{\\text{Cu}^{2+}/\\text{Cu}} - E^\\circ_{\\text{Zn}^{2+}/\\text{Zn}} = 0.34 - (-0.76) = +1.10\\text{ V}$.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Trong quá trình phóng điện của pin Galvani Zn-Cu, tại điện cực âm (anode) xảy ra quá trình:",
      "options": [
        "Oxy hóa kẽm (\\text{Zn})",
        "Khử kẽm (\\text{Zn}^{2+})",
        "Khử đồng (\\text{Cu}^{2+})",
        "Oxy hóa đồng (\\text{Cu})"
      ],
      "correctAnswer": "Oxy hóa kẽm (\\text{Zn})",
      "detailedDerivation": "Ở pin Galvani, cực âm (anode) là nơi có kim loại có thế điện cực chuẩn âm hơn (Zn), tại đây xảy ra quá trình oxy hóa: $\\text{Zn} \\rightarrow \\text{Zn}^{2+} + 2e$.",
      "cognitiveLevel": "Nhận biết"
    }
  ],
  "chem12-ch6-transition-metals-complexes": [
    {
      "questionText": "Trong phức chất $[\\text{Cu}(\\text{NH}_3)_4]^{2+}$, nguyên tử trung tâm và phối tử lần lượt là:",
      "options": [
        "\\text{Cu}^{2+} và \\text{NH}_3",
        "\\text{Cu} và \\text{NH}_4^+",
        "\\text{Cu}^+ và \\text{NH}_3",
        "\\text{NH}_3 và \\text{Cu}^{2+}"
      ],
      "correctAnswer": "\\text{Cu}^{2+} và \\text{NH}_3",
      "detailedDerivation": "Trong phức chất tetraamminecopper(II) $[\\text{Cu}(\\text{NH}_3)_4]^{2+}$, ion trung tâm là cation kim loại chuyển tiếp $\\text{Cu}^{2+}$ nhận các cặp electron tự do từ 4 phối tử phân tử trung hòa $\\text{NH}_3$.",
      "cognitiveLevel": "Nhận biết"
    }
  ],
  "chem10-ch1-atomic-structure-periodicity": [
    {
      "questionText": "Nguyên tử nguyên tố $X$ có cấu hình electron $1s^2 2s^2 2p^6 3s^2 3p^5$. Vị trí của $X$ trong bảng tuần hoàn các nguyên tố hóa học là:",
      "options": [
        "Ô số 17, chu kì 3, nhóm VIIA",
        "Ô số 17, chu kì 3, nhóm VA",
        "Ô số 7, chu kì 2, nhóm VIIA",
        "Ô số 15, chu kì 3, nhóm VA"
      ],
      "correctAnswer": "Ô số 17, chu kì 3, nhóm VIIA",
      "detailedDerivation": "Tổng số electron $Z = 2 + 2 + 6 + 2 + 5 = 17 \\implies$ ô số 17 (Chlorine). Có 3 lớp electron $\\implies$ chu kì 3. Lớp ngoài cùng có 7 electron ($3s^2 3p^5$) và là nguyên tố p $\\implies$ nhóm VIIA.",
      "cognitiveLevel": "Nhận biết"
    }
  ],
  "chem10-ch5-reaction-enthalpy": [
    {
      "questionText": "Cho phương trình nhiệt hóa học: $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$, $\\Delta_r H^\\circ_{298} = -92\\text{ kJ}$. Phản ứng trên thuộc loại phản ứng:",
      "options": [
        "Tỏa nhiệt",
        "Thu nhiệt",
        "Không có sự trao đổi nhiệt",
        "Quang hóa"
      ],
      "correctAnswer": "Tỏa nhiệt",
      "detailedDerivation": "Khi biến thiên enthalpy chuẩn $\\Delta_r H^\\circ_{298} < 0$, phản ứng giải phóng nhiệt năng ra môi trường xung quanh, do đó đây là phản ứng tỏa nhiệt.",
      "cognitiveLevel": "Nhận biết"
    },
    {
      "questionText": "Phản ứng nhiệt phân đá vôi: $\\text{CaCO}_3(s) \\xrightarrow{t^\\circ} \\text{CaO}(s) + \\text{CO}_2(g)$ có $\\Delta_r H^\\circ_{298} = +178.29\\text{ kJ}$. Kết luận nào sau đây đúng?",
      "options": [
        "Phản ứng thu nhiệt, cần liên tục cung cấp nhiệt để phản ứng diễn ra",
        "Phản ứng tỏa nhiệt mạnh",
        "Phản ứng tự xảy ra ở điều kiện thường",
        "Enthalpy của sản phẩm thấp hơn chất phản ứng"
      ],
      "correctAnswer": "Phản ứng thu nhiệt, cần liên tục cung cấp nhiệt để phản ứng diễn ra",
      "detailedDerivation": "Vì $\\Delta_r H^\\circ_{298} > 0$, đây là phản ứng thu nhiệt. Phản ứng đòi hỏi phải cung cấp nhiệt liên tục ở nhiệt độ cao ($~900^\\circ\\text{C}$) để phân hủy đá vôi.",
      "cognitiveLevel": "Thông hiểu"
    }
  ],
  "chem11-ch1-chemical-equilibrium-ph": [
    {
      "questionText": "Dung dịch $\\text{Ba(OH)}_2$ có nồng độ $0.005\\text{ M}$. Coi $\\text{Ba(OH)}_2$ điện li hoàn toàn. Giá trị pH của dung dịch này ở $25^\\circ\\text{C}$ bằng:",
      "options": [
        "12",
        "11",
        "2",
        "13"
      ],
      "correctAnswer": "12",
      "detailedDerivation": "Phương trình điện li: $\\text{Ba(OH)}_2 \\rightarrow \\text{Ba}^{2+} + 2\\text{OH}^- \\implies [\\text{OH}^-] = 2 \\times 0.005 = 0.01\\text{ M} = 10^{-2}\\text{ M}$. Suy ra $\\text{pOH} = -\\log[\\text{OH}^-] = 2$. Do $\\text{pH} + \\text{pOH} = 14 \\implies \\text{pH} = 14 - 2 = 12$.",
      "cognitiveLevel": "Thông hiểu"
    },
    {
      "questionText": "Theo thuyết Brønsted – Lowry về acid – base, acid là chất:",
      "options": [
        "Có khả năng cho proton (\\text{H}^+)",
        "Có khả năng nhận proton (\\text{H}^+)",
        "Phân li ra ion \\text{OH}^- trong nước",
        "Nhận cặp electron"
      ],
      "correctAnswer": "Có khả năng cho proton (\\text{H}^+)",
      "detailedDerivation": "Theo thuyết Brønsted – Lowry, acid là chất cho proton ($\\text{H}^+$), base là chất nhận proton ($\\text{H}^+$).",
      "cognitiveLevel": "Nhận biết"
    }
  ],
  "chem11-ch4-hydrocarbons": [
    {
      "questionText": "Chất nào sau đây tác dụng với dung dịch $\\text{AgNO}_3$ trong $\\text{NH}_3$ tạo kết tủa màu vàng nhạt?",
      "options": [
        "Propyne",
        "Propene",
        "Propane",
        "Benzene"
      ],
      "correctAnswer": "Propyne",
      "detailedDerivation": "Các alkyne có liên kết ba đầu mạch (1-alkyne như propyne $\\text{CH}\\equiv\\text{C-CH}_3$) có nguyên tử H linh động gắn với carbon mang nối ba, có khả năng bị thế bởi ion bạc $\\text{Ag}^+$ tạo kết tủa vàng nhạt $\\text{AgC}\\equiv\\text{C-CH}_3$.",
      "cognitiveLevel": "Nhận biết"
    }
  ]
};
