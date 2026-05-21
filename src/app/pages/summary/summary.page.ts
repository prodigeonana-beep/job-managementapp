import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-summary-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="page-shell summary-page">
      <section class="page-header">
        <div>
          <p class="overline">Complete Your Profile: Professional Summary</p>
          <h1>Professional Summary</h1>
          <p>Introduce yourself to employers in 2-3 sentences and highlight your core expertise and career goals.</p>
        </div>
        <a class="btn btn-outline" routerLink="/profile">Back to profile</a>
      </section>

      <div class="summary-grid">
        <section class="summary-main">
          <div class="steps-bar">
            <span class="step active">1</span>
            <span class="step active">2</span>
            <span class="step">3</span>
            <span class="step">4</span>
          </div>

          <div class="summary-panel">
            <label>Bio Summary</label>
            <textarea placeholder="e.g. Experienced Software Engineer with 8+ years of experience in FinTech..."></textarea>
          </div>

          <div class="summary-row">
            <div>
              <label>Target Industry</label>
              <select>
                <option>Technology & Software</option>
                <option>Finance</option>
                <option>Healthcare</option>
              </select>
            </div>
            <div>
              <label>Years of Experience</label>
              <input value="8" />
            </div>
          </div>

          <div class="form-actions">
            <a class="btn btn-secondary" routerLink="/edit-profile">Back</a>
            <button type="button" class="btn btn-primary">Save & Continue</button>
          </div>
        </section>

        <aside class="summary-sidebar">
          <div class="strength-card">
            <strong>Profile Strength</strong>
            <div class="strength-chart">
              <span style="width: 45%"></span>
            </div>
            <p>45%</p>
            <ul>
              <li>Contact details verified</li>
              <li>Professional summary in progress</li>
              <li>Skills & certifications pending</li>
            </ul>
          </div>

          <div class="tip-card">
            <h3>Expert Tip</h3>
            <p>Use specific keywords related to your target industry. Recruiters scan profiles that match the terminology used in job descriptions.</p>
          </div>

          <div class="verified-card">
            <p>Verified profiles get 2x more job offers.</p>
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

      .page-header {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 1rem;
        margin-bottom: 2rem;
      }

      .page-header h1 {
        margin: 0.25rem 0 0;
        font-size: clamp(2.4rem, 3vw, 3rem);
      }

      .page-header p {
        margin: 0.75rem 0 0;
        color: #4d6d7b;
      }

      .summary-grid {
        display: grid;
        grid-template-columns: 1.4fr 0.6fr;
        gap: 1.5rem;
      }

      .steps-bar {
        display: flex;
        gap: 0.75rem;
        margin-bottom: 1.5rem;
      }

      .step {
        width: 2.75rem;
        height: 2.75rem;
        border-radius: 50%;
        display: grid;
        place-items: center;
        border: 1px solid #d6e3ea;
        color: #4d6d7b;
      }

      .step.active {
        background: #1f8f69;
        color: white;
        border-color: #1f8f69;
      }

      .summary-panel,
      .strength-card,
      .tip-card,
      .verified-card {
        background: white;
        border-radius: 1.75rem;
        padding: 1.75rem;
        box-shadow: 0 24px 60px rgba(15, 47, 63, 0.06);
      }

      label {
        display: block;
        font-weight: 700;
        margin-bottom: 0.75rem;
      }

      textarea,
      select,
      input {
        width: 100%;
        border: 1px solid #d6e3ea;
        border-radius: 1rem;
        padding: 0.95rem 1rem;
        font-size: 0.95rem;
        color: #0f2f3f;
        transition: all 0.2s ease;
      }

      textarea:focus,
      select:focus,
      input:focus {
        outline: none;
        border-color: #1f8f69;
        box-shadow: 0 0 0 3px rgba(31, 143, 105, 0.1);
      }

      label::before {
        content: "*";
        color: #d64545;
        margin-right: 0.3rem;
        font-weight: 700;
      }

      .summary-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        margin: 1.5rem 0;
      }

      .form-actions {
        display: flex;
        justify-content: flex-end;
        gap: 1rem;
      }

      .strength-card strong {
        display: block;
        margin-bottom: 1rem;
        font-size: 1.05rem;
      }

      .strength-chart {
        height: 0.85rem;
        background: #e8f3ed;
        border-radius: 999px;
        overflow: hidden;
        margin: 1rem 0;
      }

      .strength-chart span {
        display: block;
        height: 100%;
        background: #1f8f69;
      }

      .strength-card p {
        margin: 0 0 1rem;
        color: #4d6d7b;
      }

      .strength-card ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: grid;
        gap: 0.85rem;
      }

      .strength-card li {
        color: #4d6d7b;
      }

      .tip-card h3 {
        margin: 0 0 0.75rem;
      }

      .verified-card {
        background: #e8f7f1;
        color: #0d2d39;
        text-align: center;
        font-weight: 700;
      }

      @media (max-width: 980px) {
        .summary-grid {
          grid-template-columns: 1fr;
        }
      }

      @media (max-width: 640px) {
        .page-header {
          flex-direction: column;
          align-items: stretch;
        }

        .summary-row {
          grid-template-columns: 1fr;
        }

        .form-actions {
          justify-content: stretch;
          flex-direction: column;
        }
      }
    `
  ]
})
export class SummaryPage {}
