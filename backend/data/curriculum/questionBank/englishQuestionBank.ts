import { SampleQuestionTemplateSchema } from '../grade12/schema';
import { z } from 'zod';

type SampleQuestionTemplate = z.infer<typeof SampleQuestionTemplateSchema>;

export const ENGLISH_QUESTION_BANK: Record<string, SampleQuestionTemplate[]> = {
  'eng12-unit1-3-tenses-articles-prepositions': [
    {
        "questionText": "She _______ dinner when the doorbell rang yesterday evening.",
        "options": [
            "was cooking",
            "cooked",
            "is cooking",
            "has cooked"
        ],
        "correctAnswer": "was cooking",
        "detailedDerivation": "Hành động đang diễn ra trong quá khứ (past continuous) thì một hành động khác xen vào (past simple with when).",
        "cognitiveLevel": "Nhận biết"
    },
    {
        "questionText": "Neil Armstrong was _______ first man to walk on the moon.",
        "options": [
            "the",
            "a",
            "an",
            "không dùng mạo từ"
        ],
        "correctAnswer": "the",
        "detailedDerivation": "Dùng mạo từ 'the' trước số thứ tự (the first, the second, the third...).",
        "cognitiveLevel": "Nhận biết"
    },
    {
        "questionText": "We have lived in this city _______ 2015.",
        "options": [
            "since",
            "for",
            "in",
            "during"
        ],
        "correctAnswer": "since",
        "detailedDerivation": "Thì hiện tại hoàn thành: 'since' + mốc thời gian trong quá khứ; 'for' + khoảng thời gian.",
        "cognitiveLevel": "Nhận biết"
    },
    {
        "questionText": "He is very interested _______ learning foreign languages.",
        "options": [
            "in",
            "at",
            "on",
            "about"
        ],
        "correctAnswer": "in",
        "detailedDerivation": "Cụm tính từ đi kèm giới từ cố định: 'to be interested in sth/V-ing' (hứng thú với cái gì).",
        "cognitiveLevel": "Nhận biết"
    },
    {
        "questionText": "My brother graduated from college last year, _______ made our parents very proud.",
        "options": [
            "which",
            "that",
            "who",
            "whom"
        ],
        "correctAnswer": "which",
        "detailedDerivation": "Đại từ quan hệ 'which' đứng sau dấu phẩy dùng để thay thế cho toàn bộ mệnh đề đứng phía trước.",
        "cognitiveLevel": "Nhận biết"
    },
    {
        "questionText": "By the time the fire brigade arrived, the fire _______ by the local residents.",
        "options": [
            "had been put out",
            "was put out",
            "has been put out",
            "had put out"
        ],
        "correctAnswer": "had been put out",
        "detailedDerivation": "Cấu trúc 'By the time + S + V(quá khứ đơn), S + V(quá khứ hoàn thành)'. Ở thể bị động: had been + V3/ed.",
        "cognitiveLevel": "Thông hiểu"
    },
    {
        "questionText": "_______ Sahara is the largest hot desert in the world.",
        "options": [
            "The",
            "A",
            "An",
            "không dùng mạo từ"
        ],
        "correctAnswer": "The",
        "detailedDerivation": "Quy tắc dùng mạo từ 'the' trước tên sa mạc (The Sahara Desert), dãy núi, đại dương.",
        "cognitiveLevel": "Thông hiểu"
    },
    {
        "questionText": "The students _______ their assignments yet.",
        "options": [
            "haven't finished",
            "didn't finish",
            "hadn't finished",
            "aren't finishing"
        ],
        "correctAnswer": "haven't finished",
        "detailedDerivation": "Dấu hiệu 'yet' ở cuối câu phủ định đi kèm thì hiện tại hoàn thành (Present Perfect).",
        "cognitiveLevel": "Thông hiểu"
    },
    {
        "questionText": "She was accused _______ stealing confidential company documents.",
        "options": [
            "of",
            "for",
            "with",
            "about"
        ],
        "correctAnswer": "of",
        "detailedDerivation": "Cụm cố định: 'accuse someone of doing sth' (buộc tội ai vì việc gì).",
        "cognitiveLevel": "Thông hiểu"
    },
    {
        "questionText": "Mr. Davis has been working as an engineer _______ over twenty years.",
        "options": [
            "for",
            "since",
            "from",
            "at"
        ],
        "correctAnswer": "for",
        "detailedDerivation": "'For' đi kèm khoảng thời gian (over twenty years) trong thì hiện tại hoàn thành tiếp diễn.",
        "cognitiveLevel": "Thông hiểu"
    },
    {
        "questionText": "Mark was exhausted because he _______ in the garden all morning without resting.",
        "options": [
            "had been working",
            "has worked",
            "worked",
            "is working"
        ],
        "correctAnswer": "had been working",
        "detailedDerivation": "Thì quá khứ hoàn thành tiếp diễn (Past Perfect Continuous) nhấn mạnh tính liên tục của hành động kéo dài đến một thời điểm trong quá khứ.",
        "cognitiveLevel": "Vận dụng"
    },
    {
        "questionText": "_______ breakfast is considered the most important meal of the day.",
        "options": [
            "Không dùng mạo từ",
            "The",
            "A",
            "An"
        ],
        "correctAnswer": "Không dùng mạo từ",
        "detailedDerivation": "Không dùng mạo từ trước tên các bữa ăn thông thường (breakfast, lunch, dinner).",
        "cognitiveLevel": "Vận dụng"
    },
    {
        "questionText": "The government is responsible _______ providing public healthcare and education for its citizens.",
        "options": [
            "for",
            "to",
            "with",
            "in"
        ],
        "correctAnswer": "for",
        "detailedDerivation": "Cụm tính từ cố định: 'to be responsible for sth/doing sth' (chịu trách nhiệm về điều gì).",
        "cognitiveLevel": "Vận dụng"
    },
    {
        "questionText": "I clearly remember _______ the door before leaving the house this morning.",
        "options": [
            "locking",
            "to lock",
            "lock",
            "locked"
        ],
        "correctAnswer": "locking",
        "detailedDerivation": "'Remember + V-ing': nhớ đã làm việc gì trong quá khứ; 'Remember + to-V': nhớ phải làm việc gì.",
        "cognitiveLevel": "Vận dụng"
    },
    {
        "questionText": "He failed the driving test three times, _______ came as a surprise to everyone who knew him.",
        "options": [
            "which",
            "what",
            "that",
            "it"
        ],
        "correctAnswer": "which",
        "detailedDerivation": "Dùng 'which' thay thế cho cả sự việc phía trước ('việc anh ấy thi trượt 3 lần'). Không dùng 'that' sau dấu phẩy.",
        "cognitiveLevel": "Vận dụng cao"
    },
    {
        "questionText": "_______ Mount Everest is the highest mountain peak in the Himalayas.",
        "options": [
            "Không dùng mạo từ",
            "The",
            "A",
            "An"
        ],
        "correctAnswer": "Không dùng mạo từ",
        "detailedDerivation": "Không dùng mạo từ 'the' trước đỉnh núi đơn lẻ (Mount Everest, Mount Fuji), nhưng dùng 'the' trước dãy núi (The Himalayas).",
        "cognitiveLevel": "Vận dụng cao"
    },
    {
        "questionText": "Choose the word OPPOSITE in meaning to the underlined word: 'The company decided to **terminate** the partnership due to financial constraints.'",
        "options": [
            "continue",
            "end",
            "cancel",
            "postpone"
        ],
        "correctAnswer": "continue",
        "detailedDerivation": "'Terminate' nghĩa là chấm dứt, kết thúc. Từ trái nghĩa là 'continue' (tiếp tục).",
        "cognitiveLevel": "Vận dụng cao"
    },
  ],
  'eng12-unit4-7-comparatives-causatives': [
    {
        "questionText": "The more you practice speaking English, _______ you will become.",
        "options": [
            "the more confident",
            "more confident",
            "the most confident",
            "confident"
        ],
        "correctAnswer": "the more confident",
        "detailedDerivation": "Cấu trúc so sánh kép (Double Comparative): The + comparative..., the + comparative...",
        "cognitiveLevel": "Nhận biết"
    },
    {
        "questionText": "I will have my car _______ at the garage tomorrow.",
        "options": [
            "repaired",
            "repair",
            "to repair",
            "repairing"
        ],
        "correctAnswer": "repaired",
        "detailedDerivation": "Cấu trúc sai khiến bị động: have something done (have + object + V3/ed).",
        "cognitiveLevel": "Nhận biết"
    },
    {
        "questionText": "My mother got the plumber _______ the leaking water pipe.",
        "options": [
            "to fix",
            "fix",
            "fixed",
            "fixing"
        ],
        "correctAnswer": "to fix",
        "detailedDerivation": "Cấu trúc sai khiến chủ động với 'get': get someone to do something.",
        "cognitiveLevel": "Nhận biết"
    },
    {
        "questionText": "_______ it rained heavily, the students still went to school on time.",
        "options": [
            "Although",
            "Despite",
            "In spite of",
            "Because"
        ],
        "correctAnswer": "Although",
        "detailedDerivation": "Mệnh đề nhượng bộ: 'Although / Even though + clause (S + V)'. 'Despite / In spite of + Noun / V-ing'.",
        "cognitiveLevel": "Nhận biết"
    },
    {
        "questionText": "He woke up early _______ miss the morning flight to Hanoi.",
        "options": [
            "in order not to",
            "so as to",
            "in order to",
            "so that"
        ],
        "correctAnswer": "in order not to",
        "detailedDerivation": "Mệnh đề chỉ mục đích phủ định: in order not to + V-bare (để không bị lỡ chuyến bay).",
        "cognitiveLevel": "Nhận biết"
    },
    {
        "questionText": "The harder he tried to solve the puzzle, _______ frustrated he felt.",
        "options": [
            "the more",
            "the most",
            "more",
            "most"
        ],
        "correctAnswer": "the more",
        "detailedDerivation": "Cấu trúc so sánh kép: The harder..., the more frustrated...",
        "cognitiveLevel": "Thông hiểu"
    },
    {
        "questionText": "She had her house _______ yesterday afternoon.",
        "options": [
            "painted",
            "paint",
            "to paint",
            "painting"
        ],
        "correctAnswer": "painted",
        "detailedDerivation": "Have sth done: had her house painted (thuê người sơn nhà).",
        "cognitiveLevel": "Thông hiểu"
    },
    {
        "questionText": "Despite _______ hard, he couldn't pass the final entrance examination.",
        "options": [
            "studying",
            "study",
            "studied",
            "he studied"
        ],
        "correctAnswer": "studying",
        "detailedDerivation": "Sau giới từ 'Despite' là danh từ hoặc V-ing (Despite studying hard).",
        "cognitiveLevel": "Thông hiểu"
    },
    {
        "questionText": "They stayed at home _______ the terrible snowstorm.",
        "options": [
            "because of",
            "because",
            "although",
            "in spite of"
        ],
        "correctAnswer": "because of",
        "detailedDerivation": "Chỉ nguyên nhân đi với cụm danh từ: 'because of + noun phrase' (the terrible snowstorm).",
        "cognitiveLevel": "Thông hiểu"
    },
    {
        "questionText": "We turned down the music volume so that _______ disturb our sleeping neighbours.",
        "options": [
            "we wouldn't",
            "we will",
            "not to",
            "in order to"
        ],
        "correctAnswer": "we wouldn't",
        "detailedDerivation": "Sau 'so that' là một mệnh đề đầy đủ (S + modal verb + V): so that we wouldn't disturb.",
        "cognitiveLevel": "Thông hiểu"
    },
    {
        "questionText": "The older we grow, _______ we realize the value of true friendship.",
        "options": [
            "the more",
            "more",
            "the better",
            "the most"
        ],
        "correctAnswer": "the more",
        "detailedDerivation": "So sánh kép: The older..., the more we realize...",
        "cognitiveLevel": "Vận dụng"
    },
    {
        "questionText": "Instead of doing it myself, I got my computer _______ by an IT expert.",
        "options": [
            "upgraded",
            "upgrade",
            "to upgrade",
            "upgrading"
        ],
        "correctAnswer": "upgraded",
        "detailedDerivation": "Cấu trúc sai khiến bị động: get something done (upgraded).",
        "cognitiveLevel": "Vận dụng"
    },
    {
        "questionText": "In spite of _______ a severe headache, she completed the presentation successfully.",
        "options": [
            "having",
            "she had",
            "have",
            "she has"
        ],
        "correctAnswer": "having",
        "detailedDerivation": "Sau 'In spite of' dùng danh động từ 'having a severe headache'.",
        "cognitiveLevel": "Vận dụng"
    },
    {
        "questionText": "The teacher had the pupils _______ the classroom before leaving for home.",
        "options": [
            "clean",
            "to clean",
            "cleaned",
            "cleaning"
        ],
        "correctAnswer": "clean",
        "detailedDerivation": "Cấu trúc sai khiến chủ động với 'have': have someone do sth (clean).",
        "cognitiveLevel": "Vận dụng"
    },
    {
        "questionText": "_______ expensive the hotel was, the service was thoroughly disappointing.",
        "options": [
            "However",
            "Although",
            "Despite",
            "No matter"
        ],
        "correctAnswer": "However",
        "detailedDerivation": "Cấu trúc nhượng bộ: 'However + adj/adv + S + V' (However expensive the hotel was...).",
        "cognitiveLevel": "Vận dụng cao"
    },
    {
        "questionText": "The higher you climb up the mountain, _______ the air becomes, making breathing difficult.",
        "options": [
            "the thinner",
            "the thinnest",
            "thinner",
            "more thin"
        ],
        "correctAnswer": "the thinner",
        "detailedDerivation": "So sánh kép tính từ ngắn: 'the thinner' (thin -> thinner).",
        "cognitiveLevel": "Vận dụng cao"
    },
    {
        "questionText": "Rewrite using Causative Form: 'The mechanic is checking Tom's motorbike.' -> 'Tom is having _______.'",
        "options": [
            "his motorbike checked by the mechanic",
            "the mechanic checked his motorbike",
            "his motorbike to check",
            "checked his motorbike"
        ],
        "correctAnswer": "his motorbike checked by the mechanic",
        "detailedDerivation": "Chuyển sang thì hiện tại tiếp diễn thể sai khiến: is having his motorbike checked.",
        "cognitiveLevel": "Vận dụng cao"
    },
  ],
  'eng12-unit8-10-conditionals-inversion': [
    {
        "questionText": "_______ you need any further information, please do not hesitate to contact us.",
        "options": [
            "Should",
            "Were",
            "Had",
            "If only"
        ],
        "correctAnswer": "Should",
        "detailedDerivation": "Đảo ngữ câu điều kiện loại 1: Should + S + V-bare (thay cho If you need).",
        "cognitiveLevel": "Nhận biết"
    },
    {
        "questionText": "_______ I you, I would accept that prestigious job offer immediately.",
        "options": [
            "Were",
            "Should",
            "Had",
            "Was"
        ],
        "correctAnswer": "Were",
        "detailedDerivation": "Đảo ngữ câu điều kiện loại 2: Were + S + to-V / Were + S + noun/adj (Were I you = If I were you).",
        "cognitiveLevel": "Nhận biết"
    },
    {
        "questionText": "_______ he studied harder, he would have passed the university entrance exam.",
        "options": [
            "Had",
            "Should",
            "Were",
            "Did"
        ],
        "correctAnswer": "Had",
        "detailedDerivation": "Đảo ngữ câu điều kiện loại 3: Had + S + V3/ed (Had he studied harder = If he had studied harder).",
        "cognitiveLevel": "Nhận biết"
    },
    {
        "questionText": "Seldom _______ such an impressive musical performance in my life.",
        "options": [
            "have I seen",
            "I have seen",
            "did I saw",
            "I saw"
        ],
        "correctAnswer": "have I seen",
        "detailedDerivation": "Đảo ngữ với trạng từ phủ định 'Seldom' đứng đầu câu: Seldom + auxiliary + S + V (Seldom have I seen).",
        "cognitiveLevel": "Nhận biết"
    },
    {
        "questionText": "The meeting had to be _______ due to the unexpected absence of the chairman.",
        "options": [
            "called off",
            "put on",
            "turned down",
            "looked after"
        ],
        "correctAnswer": "called off",
        "detailedDerivation": "Phrasal verb: 'call off' = cancel (hủy bỏ cuộc họp).",
        "cognitiveLevel": "Nhận biết"
    },
    {
        "questionText": "Hardly had she entered the room _______ the telephone started ringing.",
        "options": [
            "when",
            "than",
            "then",
            "as"
        ],
        "correctAnswer": "when",
        "detailedDerivation": "Cấu trúc đảo ngữ: Hardly / Scarcely had + S + V3/ed + when + S + V(quá khứ đơn).",
        "cognitiveLevel": "Thông hiểu"
    },
    {
        "questionText": "No sooner had the match begun _______ it started to pour with rain.",
        "options": [
            "than",
            "when",
            "that",
            "then"
        ],
        "correctAnswer": "than",
        "detailedDerivation": "Cấu trúc đảo ngữ: No sooner had + S + V3/ed + than + S + V(quá khứ đơn).",
        "cognitiveLevel": "Thông hiểu"
    },
    {
        "questionText": "Not only _______ brilliant in mathematics, but she is also a talented musician.",
        "options": [
            "is she",
            "she is",
            "does she",
            "she does"
        ],
        "correctAnswer": "is she",
        "detailedDerivation": "Đảo ngữ với 'Not only' đứng đầu câu: Not only + is/auxiliary + S...",
        "cognitiveLevel": "Thông hiểu"
    },
    {
        "questionText": "The company offered him a promotion, but he _______ it down because of the long commute.",
        "options": [
            "turned",
            "called",
            "looked",
            "put"
        ],
        "correctAnswer": "turned",
        "detailedDerivation": "Phrasal verb: 'turn down' = reject, refuse (từ chối lời đề nghị).",
        "cognitiveLevel": "Thông hiểu"
    },
    {
        "questionText": "Only after finishing all his homework _______ allowed to play video games.",
        "options": [
            "was he",
            "he was",
            "did he",
            "is he"
        ],
        "correctAnswer": "was he",
        "detailedDerivation": "Đảo ngữ với 'Only after + V-ing/clause': trợ động từ đảo lên trước chủ ngữ (was he allowed).",
        "cognitiveLevel": "Thông hiểu"
    },
    {
        "questionText": "Were she _______ the truth, she would be completely heartbroken.",
        "options": [
            "to know",
            "know",
            "known",
            "knowing"
        ],
        "correctAnswer": "to know",
        "detailedDerivation": "Đảo ngữ loại 2 với động từ thường: Were + S + to-V (Were she to know the truth).",
        "cognitiveLevel": "Vận dụng"
    },
    {
        "questionText": "Had we known about the bad weather forecast, we _______ our camping trip.",
        "options": [
            "wouldn't have planned",
            "won't plan",
            "wouldn't plan",
            "didn't plan"
        ],
        "correctAnswer": "wouldn't have planned",
        "detailedDerivation": "Vế sau của câu điều kiện loại 3: S + would/could + have + V3/ed.",
        "cognitiveLevel": "Vận dụng"
    },
    {
        "questionText": "Never in my entire career _______ such dedication from a young intern.",
        "options": [
            "have I witnessed",
            "I have witnessed",
            "did I witnessed",
            "I witnessed"
        ],
        "correctAnswer": "have I witnessed",
        "detailedDerivation": "Đảo ngữ với 'Never': Never + have + I + witnessed.",
        "cognitiveLevel": "Vận dụng"
    },
    {
        "questionText": "Don't _______ until tomorrow what you can do today.",
        "options": [
            "put off",
            "put on",
            "call off",
            "give up"
        ],
        "correctAnswer": "put off",
        "detailedDerivation": "Thành ngữ: 'put off' = postpone, delay (hoãn lại).",
        "cognitiveLevel": "Vận dụng"
    },
    {
        "questionText": "Not until the teacher explained the problem a second time _______ the solution.",
        "options": [
            "did the students understand",
            "the students understood",
            "had the students understood",
            "do the students understand"
        ],
        "correctAnswer": "did the students understand",
        "detailedDerivation": "Cấu trúc đảo ngữ: 'Not until + clause/time + auxiliary + S + V' (did the students understand).",
        "cognitiveLevel": "Vận dụng cao"
    },
    {
        "questionText": "Under no circumstances _______ without proper safety equipment.",
        "options": [
            "should you enter the laboratory",
            "you should enter the laboratory",
            "you enter the laboratory",
            "enter you the laboratory"
        ],
        "correctAnswer": "should you enter the laboratory",
        "detailedDerivation": "Đảo ngữ với cụm phủ định 'Under no circumstances' (trong bất kỳ hoàn cảnh nào cũng không được): should you enter.",
        "cognitiveLevel": "Vận dụng cao"
    },
    {
        "questionText": "Choose the word CLOSEST in meaning: 'The team successfully **carried out** the scientific experiment.'",
        "options": [
            "conducted",
            "delayed",
            "cancelled",
            "refused"
        ],
        "correctAnswer": "conducted",
        "detailedDerivation": "'Carry out' = conduct, perform, execute (tiến hành, thực hiện thí nghiệm).",
        "cognitiveLevel": "Vận dụng cao"
    },
  ],
  'eng10-passive-conditionals-relatives': [
    {
        "questionText": "The novel was written _______ a famous Vietnamese author.",
        "options": [
            "by",
            "with",
            "from",
            "for"
        ],
        "correctAnswer": "by",
        "detailedDerivation": "Thể bị động chỉ tác nhân gây ra hành động bằng giới từ 'by'.",
        "cognitiveLevel": "Nhận biết"
    },
    {
        "questionText": "If it rains tomorrow, we _______ our outdoor picnic.",
        "options": [
            "will cancel",
            "cancel",
            "would cancel",
            "cancelled"
        ],
        "correctAnswer": "will cancel",
        "detailedDerivation": "Câu điều kiện loại 1 (sự việc có thể xảy ra ở hiện tại/tương lai): If + S + V(hiện tại đơn), S + will + V-bare.",
        "cognitiveLevel": "Nhận biết"
    },
    {
        "questionText": "The girl _______ won the first prize in the national competition is my classmate.",
        "options": [
            "who",
            "whom",
            "which",
            "whose"
        ],
        "correctAnswer": "who",
        "detailedDerivation": "Đại từ quan hệ 'who' thay thế cho danh từ chỉ người làm chủ ngữ trong mệnh đề quan hệ.",
        "cognitiveLevel": "Nhận biết"
    },
    {
        "questionText": "This historic temple _______ in the 11th century.",
        "options": [
            "was built",
            "is built",
            "built",
            "has been built"
        ],
        "correctAnswer": "was built",
        "detailedDerivation": "Thì quá khứ đơn ở thể bị động: was/were + V3/ed (in the 11th century).",
        "cognitiveLevel": "Nhận biết"
    },
    {
        "questionText": "If I had a lot of money, I _______ a trip around the world.",
        "options": [
            "would take",
            "will take",
            "took",
            "had taken"
        ],
        "correctAnswer": "would take",
        "detailedDerivation": "Câu điều kiện loại 2 (giả định không có thật ở hiện tại): If + S + V(quá khứ đơn), S + would + V-bare.",
        "cognitiveLevel": "Nhận biết"
    },
    {
        "questionText": "The smartphone _______ screen was broken has been sent for repair.",
        "options": [
            "whose",
            "which",
            "who",
            "that"
        ],
        "correctAnswer": "whose",
        "detailedDerivation": "Đại từ quan hệ sở hữu 'whose' đứng trước danh từ chỉ sở hữu (whose screen).",
        "cognitiveLevel": "Thông hiểu"
    },
    {
        "questionText": "English _______ by millions of people all over the world.",
        "options": [
            "is spoken",
            "speaks",
            "was spoken",
            "is speaking"
        ],
        "correctAnswer": "is spoken",
        "detailedDerivation": "Thì hiện tại đơn thể bị động diễn tả chân lý: is/are + V3/ed.",
        "cognitiveLevel": "Thông hiểu"
    },
    {
        "questionText": "If he _______ the alarm clock last night, he wouldn't have been late for work this morning.",
        "options": [
            "had set",
            "set",
            "sets",
            "has set"
        ],
        "correctAnswer": "had set",
        "detailedDerivation": "Câu điều kiện loại 3 (giả định không có thật trong quá khứ): If + S + had + V3/ed.",
        "cognitiveLevel": "Thông hiểu"
    },
    {
        "questionText": "The town _______ I grew up has changed dramatically over the last decade.",
        "options": [
            "where",
            "which",
            "who",
            "when"
        ],
        "correctAnswer": "where",
        "detailedDerivation": "Trạng từ quan hệ 'where' chỉ nơi chốn (= in which).",
        "cognitiveLevel": "Thông hiểu"
    },
    {
        "questionText": "All plastic waste should _______ properly to protect our marine environment.",
        "options": [
            "be recycled",
            "recycle",
            "recycled",
            "be recycling"
        ],
        "correctAnswer": "be recycled",
        "detailedDerivation": "Bị động với động từ khuyết thiếu: modal verb + be + V3/ed (should be recycled).",
        "cognitiveLevel": "Thông hiểu"
    },
    {
        "questionText": "It is reported that the criminal _______ by the police early this morning.",
        "options": [
            "was arrested",
            "arrested",
            "has arrested",
            "is arresting"
        ],
        "correctAnswer": "was arrested",
        "detailedDerivation": "Bị động khách quan với thì quá khứ đơn: was arrested.",
        "cognitiveLevel": "Vận dụng"
    },
    {
        "questionText": "The man _______ you talked to yesterday is our new school principal.",
        "options": [
            "whom",
            "which",
            "whose",
            "where"
        ],
        "correctAnswer": "whom",
        "detailedDerivation": "Đại từ quan hệ 'whom' thay thế cho người làm tân ngữ của giới từ (to whom / whom you talked to).",
        "cognitiveLevel": "Vận dụng"
    },
    {
        "questionText": "If she had followed the doctor's advice, she _______ much healthier now.",
        "options": [
            "would be",
            "would have been",
            "will be",
            "is"
        ],
        "correctAnswer": "would be",
        "detailedDerivation": "Câu điều kiện hỗn hợp loại 3 - 2: Giả định quá khứ (had followed) dẫn đến kết quả hiện tại 'now' (would be).",
        "cognitiveLevel": "Vận dụng"
    },
    {
        "questionText": "Reduce the relative clause: 'The boy who is playing the piano is very talented.' -> 'The boy _______ the piano is very talented.'",
        "options": [
            "playing",
            "played",
            "to play",
            "plays"
        ],
        "correctAnswer": "playing",
        "detailedDerivation": "Rút gọn mệnh đề quan hệ chủ động bằng hiện tại phân từ V-ing (who is playing -> playing).",
        "cognitiveLevel": "Vận dụng"
    },
    {
        "questionText": "Reduce the relative clause: 'The ancient bridge which was built in 1900 is still in use.' -> 'The ancient bridge _______ in 1900 is still in use.'",
        "options": [
            "built",
            "building",
            "to build",
            "is built"
        ],
        "correctAnswer": "built",
        "detailedDerivation": "Rút gọn mệnh đề quan hệ bị động bằng quá khứ phân từ V3/ed (which was built -> built).",
        "cognitiveLevel": "Vận dụng cao"
    },
    {
        "questionText": "Neil Armstrong was the first astronaut _______ on the Moon.",
        "options": [
            "to step",
            "stepping",
            "stepped",
            "step"
        ],
        "correctAnswer": "to step",
        "detailedDerivation": "Rút gọn mệnh đề quan hệ sau từ mang tính thứ tự (the first, the second, the only) bằng 'to-infinitive'.",
        "cognitiveLevel": "Vận dụng cao"
    },
    {
        "questionText": "The heavy rain prevented the football match from _______.",
        "options": [
            "being played",
            "playing",
            "to be played",
            "played"
        ],
        "correctAnswer": "being played",
        "detailedDerivation": "Sau cấu trúc 'prevent sth from + V-ing' ở thể bị động: being + V3/ed.",
        "cognitiveLevel": "Vận dụng cao"
    },
  ],
  'eng11-perfect-participles-cleft-modals': [
    {
        "questionText": "_______ all the required documents, he submitted his university application online.",
        "options": [
            "Having completed",
            "Completing",
            "Completed",
            "Have completed"
        ],
        "correctAnswer": "Having completed",
        "detailedDerivation": "Phân từ hoàn thành (Having + V3/ed) dùng để nhấn mạnh một hành động đã hoàn tất trước một hành động khác trong quá khứ.",
        "cognitiveLevel": "Nhận biết"
    },
    {
        "questionText": "It was my mother _______ taught me the importance of kindness and honesty.",
        "options": [
            "who",
            "which",
            "whose",
            "whom"
        ],
        "correctAnswer": "who",
        "detailedDerivation": "Câu chẻ nhấn mạnh chủ ngữ chỉ người: It is/was + Noun(người) + who/that + V...",
        "cognitiveLevel": "Nhận biết"
    },
    {
        "questionText": "She _______ very hard; she looks completely exhausted today.",
        "options": [
            "must have worked",
            "should have worked",
            "can't have worked",
            "might work"
        ],
        "correctAnswer": "must have worked",
        "detailedDerivation": "Đoán chắc chắn một việc đã xảy ra trong quá khứ dựa trên bằng chứng ở hiện tại: must have + V3/ed (chắc hẳn đã làm việc rất vất vả).",
        "cognitiveLevel": "Nhận biết"
    },
    {
        "questionText": "He was punished for _______ late to the final examination.",
        "options": [
            "arriving",
            "arrive",
            "arrived",
            "to arrive"
        ],
        "correctAnswer": "arriving",
        "detailedDerivation": "Sau giới từ 'for' dùng danh động từ V-ing.",
        "cognitiveLevel": "Nhận biết"
    },
    {
        "questionText": "It was in Paris _______ they first met each other ten years ago.",
        "options": [
            "that",
            "where",
            "which",
            "when"
        ],
        "correctAnswer": "that",
        "detailedDerivation": "Câu chẻ nhấn mạnh trạng ngữ chỉ nơi chốn: It was in Paris that...",
        "cognitiveLevel": "Thông hiểu"
    },
    {
        "questionText": "_______ the driving test, he decided to buy a brand new car.",
        "options": [
            "Having passed",
            "Passed",
            "Passing",
            "Have passed"
        ],
        "correctAnswer": "Having passed",
        "detailedDerivation": "Phân từ hoàn thành 'Having passed' chỉ việc thi đỗ bằng lái xe hoàn tất trước khi quyết định mua ô tô.",
        "cognitiveLevel": "Thông hiểu"
    },
    {
        "questionText": "You _______ so fast on that slippery road; you could have caused a fatal accident!",
        "options": [
            "shouldn't have driven",
            "mustn't drive",
            "couldn't drive",
            "needn't have driven"
        ],
        "correctAnswer": "shouldn't have driven",
        "detailedDerivation": "Chỉ trích một hành động lẽ ra không nên làm trong quá khứ: shouldn't have + V3/ed.",
        "cognitiveLevel": "Thông hiểu"
    },
    {
        "questionText": "The suspect denied _______ anywhere near the crime scene that night.",
        "options": [
            "having been",
            "to be",
            "be",
            "was"
        ],
        "correctAnswer": "having been",
        "detailedDerivation": "Sau động từ 'deny' dùng danh động từ hoàn thành (having + V3/ed) để phủ nhận đã làm gì trong quá khứ.",
        "cognitiveLevel": "Thông hiểu"
    },
    {
        "questionText": "The streets are soaking wet this morning. It _______ heavily last night.",
        "options": [
            "must have rained",
            "should have rained",
            "can't have rained",
            "might rain"
        ],
        "correctAnswer": "must have rained",
        "detailedDerivation": "Bằng chứng đường ướt sũng sáng nay $\\implies$ phỏng đoán chắc chắn đã mưa đêm qua: must have rained.",
        "cognitiveLevel": "Thông hiểu"
    },
    {
        "questionText": "It was because of the heavy traffic _______ we missed the opening ceremony.",
        "options": [
            "that",
            "which",
            "what",
            "how"
        ],
        "correctAnswer": "that",
        "detailedDerivation": "Câu chẻ nhấn mạnh trạng từ chỉ nguyên nhân: It was because of... that...",
        "cognitiveLevel": "Vận dụng"
    },
    {
        "questionText": "_______ for three hours in the queue, we finally bought the concert tickets.",
        "options": [
            "Having waited",
            "Waited",
            "Waiting",
            "To wait"
        ],
        "correctAnswer": "Having waited",
        "detailedDerivation": "Phân từ hoàn thành 'Having waited' nhấn mạnh hành động xếp hàng 3 tiếng đã xảy ra và kéo dài hoàn tất trước khi mua được vé.",
        "cognitiveLevel": "Vận dụng"
    },
    {
        "questionText": "He _______ your message because his phone was turned off all day.",
        "options": [
            "can't have received",
            "must have received",
            "should have received",
            "would have received"
        ],
        "correctAnswer": "can't have received",
        "detailedDerivation": "Phỏng đoán một việc chắc chắn không thể xảy ra trong quá khứ: can't have + V3/ed (không thể nào đã nhận được).",
        "cognitiveLevel": "Vận dụng"
    },
    {
        "questionText": "The committee insisted that every member _______ present at the annual meeting.",
        "options": [
            "be",
            "was",
            "is",
            "were"
        ],
        "correctAnswer": "be",
        "detailedDerivation": "Thể giả định (Subjunctive mood) sau động từ 'insist': insist that + S + (should) V-bare.",
        "cognitiveLevel": "Vận dụng"
    },
    {
        "questionText": "He apologized to the teacher for _______ his homework at home.",
        "options": [
            "having forgotten",
            "forget",
            "forgot",
            "to forget"
        ],
        "correctAnswer": "having forgotten",
        "detailedDerivation": "Cấu trúc: apologize to someone for having done sth.",
        "cognitiveLevel": "Vận dụng cao"
    },
    {
        "questionText": "Transform into a Cleft Sentence: 'Peter lost his keys in the park yesterday.' -> 'It was _______ that Peter lost his keys yesterday.'",
        "options": [
            "in the park",
            "Peter",
            "his keys",
            "yesterday"
        ],
        "correctAnswer": "in the park",
        "detailedDerivation": "Nhấn mạnh trạng ngữ nơi chốn 'in the park'.",
        "cognitiveLevel": "Vận dụng cao"
    },
    {
        "questionText": "The ancient artifact was found in pristine condition. It _______ by museum curators with extraordinary care.",
        "options": [
            "must have been preserved",
            "should have been preserved",
            "can't have been preserved",
            "might preserve"
        ],
        "correctAnswer": "must have been preserved",
        "detailedDerivation": "Thể bị động của phỏng đoán quá khứ: must have been + V3/ed (chắc hẳn đã được bảo quản hết sức cẩn thận).",
        "cognitiveLevel": "Vận dụng cao"
    },
  ],
};
