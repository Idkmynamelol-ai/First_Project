# Stem Edu Platform (Scalar) - Workspace Guidelines & Rules

## 1. Visual & Design Guidelines
- **Colorway**: Strictly maintain the DCS Dolch palette (Base `#131519`, `#1b1e24`, `#2c313c`, text `#f1f4f9`, PAC Cyan `#38bdf8`, Emerald `#10b981`, Rose `#f43f5e`).
- **No Icons**: Strictly NEVER introduce icon libraries (e.g. `lucide-react`, `@heroicons`, or emojis) into UI components. Use clean, monospace badges and academic typography (`[01]`, `[A]`, `[B]`, `[THÔNG BÁO]`, `✓`).

## 2. Copywriting & Phrasing Standards (Anti-AI Cringe)
- **Eliminate AI Buzzwords**: NEVER use robotic or promotional AI claims:
  - DO NOT use: "AI Optimized", "AI Vision OCR", "động cơ thị giác máy tính", "đột phá", "siêu trí tuệ", "Gia sư AI Socratic", "bảo mật & tối ưu chi phí".
- **Use Natural, Human-Crafted Vietnamese**:
  - Prefer clear, student-centric language: "Tạo bài tập từ ảnh chụp đề thi", "Đang đọc đề bài và nhận diện công thức...", "Trợ lý học tập", "Đổi vị trí đáp án ngẫu nhiên", "Xem lời giải chi tiết".

## 3. Multimodal & API Cost Protection
- **Image Downscaling**: Always downscale uploaded images on the client (Canvas max 1024px, JPEG 0.8) before sending base64 to vision endpoints.
- **Model Hierarchy**: Always default to the cheapest candidate models (`gemini-2.0-flash-lite`, `gemini-1.5-flash-8b`) within the 1,500 requests/day free tier.
- **Token Constraints**: Keep `maxOutputTokens` tight (<= 2048 for document extraction, <= 1024 for Q&A).

## 4. Educational & UX Standards
- **GDPT 2018 Standards**: Align strictly with Vietnam's GDPT 2018 curriculum across 4 subjects (Math, Physics, Chemistry, English) and 4 cognitive tiers (Nhận biết, Thông hiểu, Vận dụng, Vận dụng cao).
- **Dynamic Answer Shuffling**: Shuffling must re-randomize correct answer positions (A/B/C/D) on every fresh attempt.
- **Interaction Pause**: Entering dialogue with the tutor pauses any automated question advance and shows an explicit, prominent "Câu hỏi tiếp theo" button.
