# 💬 Chat Application - Next.js 14 App Router

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-14.0-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18.2-blue?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

Aplikasi chat modern dan responsif yang dibangun dengan Next.js 14 App Router, React, dan Tailwind CSS. Mendukung berbagai jenis pesan termasuk teks, gambar, video, dan dokumen PDF.

[Demo](#-demo) • [Fitur](#-fitur) • [Instalasi](#-instalasi) • [Dokumentasi](#-dokumentasi)

</div>

---

## 📸 Demo

<div align="center">

### Desktop View
![Desktop View](https://via.placeholder.com/800x500/667eea/ffffff?text=Desktop+Chat+Interface)

### Mobile View
<img src="https://via.placeholder.com/375x667/764ba2/ffffff?text=Mobile+Chat+View" alt="Mobile View" width="300">

</div>

---

## ✨ Fitur

### 🎨 **User Interface**
- ✅ **Desain Modern & Clean** - UI yang intuitif dan mudah digunakan
- ✅ **Fully Responsive** - Optimal di desktop, tablet, dan mobile
- ✅ **Dark Mode Ready** - Siap untuk implementasi dark mode
- ✅ **Smooth Animations** - Transisi dan animasi yang halus

### 💬 **Chat Features**
- ✅ **Multi-Type Messages** - Support text, image, video, dan PDF
- ✅ **Real-time Scrolling** - Auto-scroll ke pesan terbaru
- ✅ **Message Bubbles** - Desain bubble chat yang berbeda untuk sender/receiver
- ✅ **Timestamp** - Setiap pesan dilengkapi waktu pengiriman
- ✅ **Sender Info** - Nama dan avatar pengirim pada setiap pesan

### 🖼️ **Media Handling**
- ✅ **Image Preview** - Klik gambar untuk melihat full-screen
- ✅ **Video Player** - Inline video player dengan controls
- ✅ **PDF Download** - Download dokumen PDF dengan info lengkap
- ✅ **Thumbnail Support** - Thumbnail untuk preview media

### 👥 **Participant Management**
- ✅ **Sidebar Participants** - Daftar peserta chat dengan info lengkap
- ✅ **Role Badges** - Badge untuk Admin, Agent, dan Customer
- ✅ **Avatar System** - Avatar unik dengan warna berbeda untuk setiap user
- ✅ **Mobile Toggle** - Sidebar dapat di-toggle di mobile view

### 🛠️ **Technical Features**
- ✅ **Next.js 14 App Router** - Menggunakan App Router terbaru
- ✅ **Client Components** - Optimal performance dengan client components
- ✅ **Custom Hooks** - Reusable hooks untuk data fetching
- ✅ **Error Handling** - Error boundaries dan loading states
- ✅ **Path Aliases** - Clean imports dengan `@/` alias
- ✅ **Modular Components** - Component-based architecture

---

## 🚀 Tech Stack

| Teknologi | Versi | Deskripsi |
|-----------|-------|-----------|
| [Next.js](https://nextjs.org/) | 14.0.4 | React framework dengan App Router |
| [React](https://react.dev/) | 18.2.0 | Library untuk membangun UI |
| [Tailwind CSS](https://tailwindcss.com/) | 3.4.0 | Utility-first CSS framework |
| [Lucide React](https://lucide.dev/) | 0.263.1 | Icon library untuk React |

---

## 📁 Struktur Project

```
my-chat-app/
├── public/
│   └── data/
│       └── chat-data.json          # Data chat dalam format JSON
├── src/
│   ├── app/
│   │   ├── layout.js               # Root layout component
│   │   ├── page.js                 # Home page (main chat interface)
│   │   └── globals.css             # Global styles & Tailwind
│   ├── components/
│   │   ├── chat/
│   │   │   ├── ChatHeader.jsx      # Header chat room
│   │   │   ├── ChatMessage.jsx     # Component pesan individual
│   │   │   ├── ChatInput.jsx       # Input area untuk kirim pesan
│   │   │   ├── MessageAttachment.jsx # Render attachment (img/video/pdf)
│   │   │   └── ParticipantList.jsx # Sidebar daftar peserta
│   │   └── ui/
│   │       ├── Avatar.jsx          # Avatar user dengan initial
│   │       └── Modal.jsx           # Modal untuk preview media
│   ├── hooks/
│   │   └── useChatData.js          # Custom hook untuk fetch chat data
│   └── utils/
│       └── formatters.js           # Utility functions (format, colors, dll)
├── .gitignore
├── jsconfig.json                    # Path alias configuration
├── next.config.js                   # Next.js configuration
├── package.json                     # Dependencies
├── postcss.config.js                # PostCSS configuration
├── tailwind.config.js               # Tailwind CSS configuration
└── README.md                        # Dokumentasi (file ini)
```

---

## 🔧 Instalasi

### Prerequisites

Pastikan sudah menginstall:
- **Node.js** versi 18.17 atau lebih baru
- **npm** atau **yarn** atau **pnpm**

### Langkah Instalasi

1. **Clone repository**

```bash
git clone https://github.com/username/my-chat-app.git
cd my-chat-app
```

2. **Install dependencies**

```bash
npm install
# atau
yarn install
# atau
pnpm install
```

3. **Jalankan development server**

```bash
npm run dev
# atau
yarn dev
# atau
pnpm dev
```

4. **Buka browser**

Akses aplikasi di [http://localhost:3000](http://localhost:3000)

---

## 📚 Dokumentasi

### Format Data JSON

Aplikasi ini menggunakan format JSON untuk data chat. Berikut adalah struktur data yang digunakan:

#### Room Object
```json
{
  "room": {
    "name": "Product A",
    "id": 12456,
    "image_url": "https://example.com/room-image.jpg",
    "participant": [...]
  }
}
```

#### Participant Object
```json
{
  "id": "user@mail.com",
  "name": "User Name",
  "role": 0  // 0: Admin, 1: Agent, 2: Customer
}
```

#### Message Types

**1. Text Message**
```json
{
  "id": 885512,
  "type": "text",
  "message": "Hello world",
  "sender": "user@mail.com",
  "timestamp": "2024-01-15T19:30:00Z"
}
```

**2. Image Message**
```json
{
  "id": 885517,
  "type": "image",
  "message": "Check this image",
  "sender": "user@mail.com",
  "timestamp": "2024-01-15T19:32:00Z",
  "attachment": {
    "url": "https://example.com/image.jpg",
    "filename": "image.jpg",
    "size": "245KB",
    "thumbnail_url": "https://example.com/thumb.jpg"
  }
}
```

**3. Video Message**
```json
{
  "id": 885520,
  "type": "video",
  "message": "Watch this video",
  "sender": "user@mail.com",
  "timestamp": "2024-01-15T19:34:00Z",
  "attachment": {
    "url": "https://example.com/video.mp4",
    "filename": "video.mp4",
    "size": "5.3MB",
    "duration": "00:10",
    "thumbnail_url": "https://example.com/thumb.jpg"
  }
}
```

**4. PDF Message**
```json
{
  "id": 885519,
  "type": "pdf",
  "message": "Download this document",
  "sender": "user@mail.com",
  "timestamp": "2024-01-15T19:33:00Z",
  "attachment": {
    "url": "https://example.com/document.pdf",
    "filename": "document.pdf",
    "size": "1.2MB",
    "pages": 3
  }
}
```

---

## 🎨 Customization

### Mengubah Current User

Edit file `src/app/page.js` pada baris ~20:

```javascript
const currentUser = "agent@mail.com"; // Ganti dengan user ID yang diinginkan
```

### Menambah Warna Avatar

Edit file `src/utils/formatters.js`:

```javascript
export const getAvatarColor = (name) => {
  const colors = [
    'bg-blue-500',
    'bg-green-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-indigo-500',
    'bg-yellow-500',  // Tambahkan warna baru di sini
    'bg-red-500',
  ];
  // ...
};
```

### Mengubah Role Badges

Edit file `src/utils/formatters.js`:

```javascript
export const getRoleBadge = (role) => {
  const roles = {
    0: { label: 'Admin', color: 'bg-red-100 text-red-700' },
    1: { label: 'Agent', color: 'bg-blue-100 text-blue-700' },
    2: { label: 'Customer', color: 'bg-green-100 text-green-700' },
    // Tambahkan role baru di sini
  };
  return roles[role] || roles[2];
};
```

### Mengubah Tema Warna

Untuk mengubah tema warna aplikasi, edit class Tailwind CSS di setiap component:

- `bg-blue-500` → Background color
- `text-blue-700` → Text color
- `border-blue-200` → Border color
- `hover:bg-blue-600` → Hover state

---

## 🔨 Build & Deployment

### Build untuk Production

```bash
npm run build
# atau
yarn build
# atau
pnpm build
```

### Menjalankan Production Build

```bash
npm start
# atau
yarn start
# atau
pnpm start
```

### Deploy ke Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/username/my-chat-app)

Atau manual:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy ke Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/username/my-chat-app)

---

## 📖 Component Documentation

### Avatar Component
```jsx
<Avatar name="John Doe" size="md" />
```

**Props:**
- `name` (string) - Nama user untuk menampilkan initial
- `size` (string) - Ukuran avatar: `'sm'`, `'md'`, `'lg'`

### Modal Component
```jsx
<Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
  <img src="image.jpg" alt="Preview" />
</Modal>
```

**Props:**
- `isOpen` (boolean) - Status visibility modal
- `onClose` (function) - Callback saat modal ditutup
- `children` (ReactNode) - Konten modal

### ChatMessage Component
```jsx
<ChatMessage 
  comment={commentData} 
  sender={senderInfo} 
  isOwn={true} 
/>
```

**Props:**
- `comment` (object) - Data pesan (id, type, message, timestamp, attachment)
- `sender` (object) - Info pengirim (name, id, role)
- `isOwn` (boolean) - Apakah pesan dari current user

### ChatInput Component
```jsx
<ChatInput onSendMessage={(msg) => console.log(msg)} />
```

**Props:**
- `onSendMessage` (function) - Callback saat pesan dikirim

---

## 🧪 Testing

### Run Tests
```bash
npm run test
# atau
yarn test
# atau
pnpm test
```

### Run Linting
```bash
npm run lint
# atau
yarn lint
# atau
pnpm lint
```

---

## 🐛 Troubleshooting

### Error: "You're importing a component that needs useState"

**Solusi:** Pastikan ada `'use client';` di baris pertama file `src/app/page.js`

```javascript
'use client';

import React, { useState } from 'react';
// ... rest of code
```

### Error: "Cannot find module '@/...'"

**Solusi:**
1. Pastikan file `jsconfig.json` ada di root directory
2. Restart development server (Ctrl + C, lalu `npm run dev`)
3. Restart VS Code atau IDE yang digunakan

### Error: "Module not found: lucide-react"

**Solusi:**
```bash
npm install lucide-react
```

### Tailwind CSS tidak bekerja

**Solusi:**
1. Cek `tailwind.config.js` - pastikan content path sudah benar
2. Cek `src/app/layout.js` - pastikan import `'./globals.css'`
3. Restart development server

### Error saat build

**Solusi:**
```bash
# Hapus cache
rm -rf .next

# Install ulang dependencies
rm -rf node_modules
npm install

# Build lagi
npm run build
```

---

## 🤝 Contributing

Kontribusi selalu diterima! Jika ingin berkontribusi:

1. Fork repository ini
2. Buat branch baru (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buka Pull Request

### Development Guidelines

- Gunakan ESLint dan Prettier untuk code formatting
- Ikuti convention penamaan file dan component yang sudah ada
- Tambahkan comment untuk code yang kompleks
- Test fitur baru sebelum submit PR
- Update dokumentasi jika diperlukan

---

## 📝 Changelog

### Version 1.0.0 (2024-01-15)
- ✨ Initial release
- ✅ Support untuk text, image, video, dan PDF messages
- ✅ Responsive design untuk mobile dan desktop
- ✅ Modal preview untuk media files
- ✅ Participant list dengan role badges
- ✅ Auto-scroll ke pesan terbaru

---

## 🎯 Roadmap

### v1.1.0 (Planned)
- [ ] Dark mode support
- [ ] Real-time messaging dengan WebSocket
- [ ] Typing indicators
- [ ] Message reactions (emoji)
- [ ] File upload functionality

### v1.2.0 (Planned)
- [ ] Search messages
- [ ] Message threading
- [ ] User online status
- [ ] Message read receipts
- [ ] Push notifications

### v2.0.0 (Future)
- [ ] Voice messages
- [ ] Video call integration
- [ ] End-to-end encryption
- [ ] Multi-language support
- [ ] Admin dashboard

---

## 📄 License

Project ini dilisensikan di bawah [MIT License](LICENSE).

```
MIT License

Copyright (c) 2024 Your Name

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)
- Email: your.email@example.com

---

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [React Documentation](https://react.dev/)
- Terima kasih kepada semua kontributor yang telah membantu project ini

---

## 📞 Support

Jika menemukan bug atau memiliki pertanyaan:

- 🐛 [Report Bug](https://github.com/username/my-chat-app/issues)
- 💡 [Request Feature](https://github.com/username/my-chat-app/issues)
- 💬 [Discussions](https://github.com/username/my-chat-app/discussions)

---

<div align="center">

**⭐ Jika project ini membantu, jangan lupa kasih star! ⭐**

Made with ❤️ using Next.js, React, and Tailwind CSS

[⬆ Back to Top](#-chat-application---nextjs-14-app-router)

</div>