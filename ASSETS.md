# Etinngrill — Dosya & Görsel Rehberi

Bu belge, websitesinde kullanılan tüm dosya ve görsellerin konumlarını, tavsiye edilen format/boyut bilgilerini açıklar.

---

## 📁 Proje Yapısı

```
etinngrill/
├── index.html              ← Ana sayfa
├── style.css               ← Stil dosyası
├── script.js               ← JavaScript dosyası
├── ASSETS.md               ← Bu dosya (görsel rehberi)
└── assets/
    ├── images/
    │   ├── logo.webp          ← Logo
    │   ├── etinngrill.webp    ← Standart model görseli
    │   ├── sis__aparatli.webp  ← Şiş aparatlı model görseli
    │   └── favicon.png        ← Tarayıcı ikonu
    ├── video/
    │   └── unpacking.mp4      ← Hero bölümü videosu
    └── galeri/
        ├── galeri-01.webp     ← Galeri görseli 1
        ├── galeri-02.webp     ...
        └── galeri-09.webp
```

---

## 🖼️ Görseller Detayı

### Logo & Favicon

| Dosya | Konum | Boyut | Format | Kullanım |
|-------|-------|-------|--------|----------|
| `logo.webp` | `assets/images/` | 426×160 px | WebP | Navbar logosu |
| `favicon.png` | `assets/images/` | Kare | PNG | Tarayıcı ikonu (Favicon) |

> **Tavsiye:** Logo WebP veya SVG formatında olmalıdır. Favicon için kare bir görsel (32x32 veya 64x64) tercih edilmelidir.

---

### Ana Ürün Görselleri (Sayfa İçi)

| Dosya | Konum | Boyut | Format | Kullanım |
|-------|-------|-------|--------|----------|
| `etinngrill.webp` | `assets/images/` | 576×576 px | WebP | Standart Model bölümü |
| `sis__aparatli.webp` | `assets/images/` | 576×576 px | WebP | Şiş Aparatlı Model bölümü |

---

### Galeri Görselleri

| Dosya | Konum | Boyut | Format | Kullanım |
|-------|-------|-------|--------|----------|
| `galeri-01.webp` ile `09.webp` arası | `assets/galeri/` | 576×576 px | WebP | Galeri bölümü |

---

## 🎬 Video

Sayfa içinde **yerel video dosyası** kullanılmaktadır. 

| Dosya | Konum | Format | Format |
|-------|-------|--------|--------|
| `unpacking.mp4` | `assets/video/` | MP4 | 4:3 Dikey (Unpacking videosu) |

```html
<video controls playsinline ...>
    <source src="assets/video/unpacking.mp4" type="video/mp4">
</video>
```

---

## 🚀 Yayınlama Notu (GitHub + Cloudflare Pages)

- Tüm varlıklar `assets/` altında **relative path** ile referans verilir.
- GitHub'a push yapıldığında Cloudflare Pages otomatik olarak yayınlar.
- Cloudflare Pages ayarlarında:
  - **Build output directory:** `/` veya `.`
