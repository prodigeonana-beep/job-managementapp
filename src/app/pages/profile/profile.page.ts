import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="page-shell profile-page">
      <section class="profile-top">
        <div>
          <p class="overline">Updated Candidate Profile Nav</p>
          <h1>Jean-Luc Ambassa</h1>
          <p>Senior Software Engineer & Project Lead</p>
        </div>
        <div class="profile-actions">
          <a class="btn btn-outline" routerLink="/edit-profile">Edit Profile</a>
          <a class="btn btn-primary" routerLink="/summary">Complete Summary</a>
        </div>
      </section>

      <div class="profile-grid">
        <article class="profile-card main-card">
          <div class="profile-header-card">
            <div class="profile-avatar">JL</div>
            <div>
              <strong>Jean-Luc Ambassa</strong>
              <span>Senior Software Engineer & Project Lead</span>
              <span>Douala, Cameroon · jean-luc@domain.cm · +237 6X XX XX XX</span>
            </div>
          </div>

          <div class="profile-summary-card">
            <h2>Professional Summary</h2>
            <p>Accomplished software engineer with 8+ years of experience in building scalable web applications and leading cross-functional teams to deliver products for Cameroon’s digital economy.</p>
          </div>

          <div class="skill-grid">
            <div><strong>Verified Skills</strong></div>
            <div class="skill-list">
              <span>React & Next.js</span>
              <span>PostgreSQL</span>
              <span>AWS Architecture</span>
              <span>TypeScript</span>
            </div>
          </div>
        </article>

        <aside class="profile-card sidebar-card">
          <div class="completion-card">
            <div class="completion-header">
              <strong>Profile Completion</strong>
              <span>85%</span>
            </div>
            <div class="progress-bar"><span style="width: 85%"></span></div>
            <p>Complete your profile to improve visibility with employers.</p>
          </div>

          <div class="info-block">
            <p class="small-title">Language Proficiency</p>
            <div class="pill-list">
              <span>French (native)</span>
              <span>English (professional)</span>
            </div>
          </div>

          <div class="info-block">
            <p class="small-title">Upload CV</p>
            <div class="cv-upload-zone" (click)="triggerCVUpload()">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="upload-icon">
                <path d="M12 2v10m0 0l-3-3m3 3l3-3M3 15h18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <p>Drag your CV here or <label class="upload-link" (click)="$event.stopPropagation()">browse</label></p>
              <input type="file" accept=".pdf,.doc,.docx" style="display: none;" id="cv-upload" (change)="onCVUpload($event)" />
              <small>PDF, DOC, or DOCX • Max 5MB</small>
              <p *ngIf="uploadedCVName" style="margin-top: 1rem; color: #1f8f69; font-weight: 700;">✓ {{ uploadedCVName }} uploaded</p>
            </div>
          </div>

          <div class="info-block">
            <p class="small-title">Digital CV Ready</p>
            <a class="btn btn-secondary" href="#">Download CV</a>
          </div>

          <div class="info-block highlight-block">
            <p class="small-title">Top Matches</p>
            <p>Matching with 12 new roles in engineering and product leadership.</p>
          </div>
        </aside>
      </div>
    </div>
  `,
  styles: [
    `
      .page-shell {
        max-width: 1180px;
        margin: 0 auto;
        padding: 2rem 1.5rem 4rem;
      }

      .profile-top {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        align-items: flex-start;
        margin-bottom: 2rem;
      }

      .profile-top h1 {
        margin: 0.25rem 0 0;
        font-size: clamp(2.4rem, 3vw, 3rem);
        color: #0d2d39;
      }

      .profile-top p {
        margin: 0.65rem 0 0;
        color: #4d6d7b;
      }

      .profile-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 0.9rem;
      }

      .profile-grid {
        display: grid;
        grid-template-columns: 1.55fr 0.9fr;
        gap: 1.5rem;
      }

      .profile-card {
        background: white;
        border-radius: 1.75rem;
        padding: 1.75rem;
        box-shadow: 0 24px 60px rgba(15, 47, 63, 0.06);
      }

      .main-card {
        display: grid;
        gap: 1.5rem;
      }

      .profile-header-card {
        display: flex;
        gap: 1rem;
        align-items: center;
      }

      .profile-avatar {
        width: 4.25rem;
        height: 4.25rem;
        border-radius: 1.25rem;
        display: grid;
        place-items: center;
        background: #1f8f69;
        color: white;
        font-weight: 900;
        font-size: 1.25rem;
      }

      .profile-header-card strong {
        display: block;
        font-size: 1.15rem;
        color: #0d2d39;
      }

      .profile-header-card span {
        display: block;
        color: #4d6d7b;
        margin-top: 0.45rem;
      }

      .profile-summary-card h2 {
        margin: 0;
        font-size: 1.25rem;
        color: #0d2d39;
      }

      .profile-summary-card p {
        margin: 0.8rem 0 0;
        color: #4d6d7b;
        line-height: 1.8;
      }

      .skill-grid {
        display: grid;
        gap: 1rem;
      }

      .skill-list {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
      }

      .skill-list span {
        background: #eef9f4;
        color: #1f8f69;
        border-radius: 999px;
        padding: 0.65rem 0.95rem;
        font-size: 0.95rem;
      }

      .sidebar-card {
        display: grid;
        gap: 1rem;
      }

      .completion-card,
      .info-block {
        background: #f8fbf8;
        border-radius: 1.5rem;
        padding: 1.5rem;
      }

      .completion-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
      }

      .progress-bar {
        height: 0.8rem;
        background: #dbeee0;
        border-radius: 999px;
        margin: 1rem 0;
      }

      .progress-bar span {
        display: block;
        height: 100%;
        border-radius: 999px;
        background: #1f8f69;
      }

      .completion-card p,
      .info-block p {
        margin: 0;
        color: #4d6d7b;
        line-height: 1.7;
      }

      .small-title {
        margin: 0 0 0.85rem;
        font-weight: 700;
        color: #0d2d39;
      }

      .pill-list {
        display: flex;
        flex-direction: column;
        gap: 0.65rem;
      }

      .pill-list span {
        display: inline-flex;
        padding: 0.65rem 0.95rem;
        background: white;
        border-radius: 999px;
        border: 1px solid #d6e3ea;
        color: #4d6d7b;
      }

      .highlight-block {
        background: linear-gradient(180deg, #fff8e8 0%, #f7f0da 100%);
      }

      .highlight-block p {
        margin: 0.5rem 0 0;
      }

      .cv-upload-zone {
        border: 2px dashed #d6e3ea;
        border-radius: 1rem;
        padding: 2rem 1rem;
        text-align: center;
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        background: #f8fbf8;
      }

      .cv-upload-zone:hover {
        border-color: #1f8f69;
        background: rgba(31, 143, 105, 0.08);
        transform: scale(1.01);
      }

      .cv-upload-zone:active {
        background: rgba(31, 143, 105, 0.12);
      }

      .upload-icon {
        width: 2.5rem;
        height: 2.5rem;
        color: #1f8f69;
        margin: 0 auto 0.75rem;
      }

      .cv-upload-zone p {
        margin: 0 0 0.5rem;
        color: #0d2d39;
        font-weight: 500;
      }

      .upload-link {
        color: #1f8f69;
        font-weight: 700;
        cursor: pointer;
        text-decoration: underline;
      }

      .cv-upload-zone small {
        display: block;
        color: #4d6d7b;
        font-size: 0.85rem;
      }

      @media (max-width: 980px) {
        .profile-grid {
          grid-template-columns: 1fr;
        }
      }

      @media (max-width: 680px) {
        .profile-top {
          flex-direction: column;
          align-items: stretch;
        }
      }
    `
  ]
})
export class ProfilePage {
  uploadedCVName: string | null = null;

  onCVUpload(event: Event): void {
    const input = event.target as HTMLInputElement;
    const files = input.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (file.size > 5 * 1024 * 1024) {
        alert('File size exceeds 5MB limit');
        return;
      }
      this.uploadedCVName = file.name;
      console.log('CV uploaded:', file.name, file.size);
      alert(`CV uploaded successfully: ${file.name}`);
    }
  }

  triggerCVUpload(): void {
    const input = document.getElementById('cv-upload') as HTMLInputElement;
    input?.click();
  }
}
