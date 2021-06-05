import React, { Component } from 'react';

import './TextAboutUs.css';

export default class TextAboutUs extends Component {
  render() {
    return (
      <div className="text-about-us">
        <h4>Assalam'ualaikum Warohmatullohi Wabarokatuh</h4>
        <p>
          Alhamdulillah puji syukur ke hadirat Allah SWT. Sholawat serta salam semoga selalu tercurahkan kepada Nabi Muhammad SAW. MoslemApps merupakan website dengan model mirip seperti aplikasi (Web SPA: <i>Single-Page Application</i>)
          yang berisikan surah-surah Al-Qur'an lengkap 30 Juz dan murottal dari Qari yang ternama. Al-Quran adalah kitab suci sempurna yang diturunkan Allah SWT. segala bentuk kesalahan yang ada pada project ini adalah pasti karena
          kebodohan dan kekhilafan saya sendiri. Untuk itu mohon dengan hormat jika anda menemukan ada suatu kesalahan untuk menghubungi saya melalui email atau WhatsApp.
        </p>

        <h5>MoslemApps Terdapat fitur:</h5>
        <ul>
          <li>
            <i className="fas fa-circle"></i> Al-Quran
          </li>
          <li>
            <i className="fas fa-circle"></i> Murottal
          </li>
          <li>
            <i className="fas fa-circle"></i> Audio per Ayat
          </li>
          <li>
            <i className="fas fa-circle"></i> Penanda Terakhir dibaca
          </li>
          <li>
            <i className="fas fa-circle"></i> Menandai Ayat Favorite
          </li>
          <li>
            <i className="fas fa-circle"></i> Menambahkan Playlist Murottal
          </li>
          <li>
            <i className="fas fa-circle"></i> Button Dark Mode
          </li>
        </ul>

        <h5>API Data</h5>
        <ul>
          <li>
            <a href="https://github.com/sutanlab/quran-api">Sutanlab Qur'an API</a>
          </li>
          <li>
            <a href="https://github.com/penggguna/QuranJSON">Quran JSON API</a>
          </li>
        </ul>

        <h5>Icon</h5>
        <ul>
          <li>
            <a href="https://fontawesome.com/">Font Awesome</a>
          </li>
        </ul>

        <h5 id="report-to-me">Laporkan jika ada Bug</h5>
        <button className="whatsapp">
          <a href="https://wa.me/6289506125049" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp"></i> WhatsApp
          </a>
        </button>

        <div className="text-aboutUs-footer">
          <span>
            Made with <i className="fas fa-heart"></i> by Ganna HAP
          </span>
          <h5>Hire Me!</h5>
          <div className="sosmed">
            <button className="whatsapp">
              <a href="https://wa.me/6289506125049" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i> WhatsApp
              </a>
            </button>
            <button className="gmail">
              <a href="mailto:gannahap02@gmail.com" target="_blank" rel="noopener noreferrer">
                <i className="far fa-envelope"></i> Gmail
              </a>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
