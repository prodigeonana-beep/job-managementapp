import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-jobs-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="page-shell jobs-page">
      <section class="page-header">
        <div>
          <p class="overline">Job Search & Filters</p>
          <h1>Find your next professional milestone.</h1>
          <p>Browse verified opportunities across Cameroon’s fastest-growing sectors.</p>
        </div>
        <a class="btn btn-primary" routerLink="/">Back Home</a>
      </section>

      <div class="jobs-layout">
        <aside class="jobs-sidebar">
          <div class="panel">
            <h2>Filters</h2>
            <div class="filter-group">
              <label>Job title, keywords, or company</label>
              <input placeholder="Search roles..." />
            </div>
            <div class="filter-group">
              <label>Location</label>
              <div class="chip-list">
                <button class="chip active">Douala</button>
                <button class="chip">Yaoundé</button>
                <button class="chip">Bafoussam</button>
              </div>
            </div>
            <div class="filter-group">
              <label>Job type</label>
              <div class="chip-list">
                <button class="chip active">Full-time</button>
                <button class="chip">Contract</button>
                <button class="chip">Internship</button>
              </div>
            </div>
            <div class="filter-group">
              <label>Salary range</label>
              <input placeholder="e.g. 300k - 700k XAF" />
            </div>
          </div>
        </aside>

        <section class="jobs-listings">
          <div class="list-header">
            <div>
              <p class="eyebrow">Showing 182 jobs in Cameroon</p>
              <h2>Available matches</h2>
            </div>
            <span class="sort-pill">Sorted by relevance</span>
          </div>

          <article class="job-card">
            <div>
              <p class="job-label">Senior Software Engineer</p>
              <p class="job-meta">Holson Industries · Yaoundé · Full-time</p>
              <div class="job-tags">
                <span>Remote</span>
                <span>Frontend</span>
                <span>React</span>
              </div>
            </div>
            <div class="job-card-actions">
              <span class="match-badge">Match</span>
              <a class="btn btn-outline" routerLink="/profile">View role</a>
            </div>
          </article>

          <article class="job-card">
            <div>
              <p class="job-label">Supply Chain Manager</p>
              <p class="job-meta">Greenfield Agro-Exports · Douala · Contract</p>
              <div class="job-tags">
                <span>Logistics</span>
                <span>Operations</span>
              </div>
            </div>
            <div class="job-card-actions">
              <span class="match-badge">Match</span>
              <a class="btn btn-outline" routerLink="/profile">View role</a>
            </div>
          </article>
        </section>
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
        justify-content: space-between;
        align-items: flex-start;
        gap: 1rem;
        margin-bottom: 2rem;
      }

      .page-header h1 {
        margin: 0.35rem 0 0;
        font-size: clamp(2.5rem, 3vw, 3.2rem);
        color: #0d2d39;
      }

      .page-header p {
        max-width: 38rem;
        margin: 0.75rem 0 0;
        color: #4d6d7b;
      }

      .jobs-layout {
        display: grid;
        grid-template-columns: 320px minmax(0, 1fr);
        gap: 1.5rem;
      }

      .jobs-sidebar .panel {
        background: white;
        border-radius: 1.75rem;
        padding: 1.75rem;
        box-shadow: 0 24px 60px rgba(15, 47, 63, 0.06);
      }

      .jobs-sidebar h2 {
        margin: 0 0 1rem;
        font-size: 1.25rem;
      }

      .filter-group {
        display: grid;
        gap: 0.6rem;
        margin-bottom: 1.4rem;
      }

      .filter-group label {
        font-weight: 700;
        color: #0d2d39;
      }

      input, select {
        width: 100%;
        min-height: 3rem;
        padding: 0.95rem 1rem;
        border: 1px solid #d6e3ea;
        border-radius: 1rem;
        font-size: 0.95rem;
        transition: all 0.2s ease;
      }

      input:focus, select:focus {
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

      .chip-list {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
      }

      .chip {
        border: 1px solid rgba(31, 143, 105, 0.18);
        border-radius: 999px;
        padding: 0.65rem 1rem;
        background: white;
        color: #1f8f69;
        cursor: pointer;
      }

      .chip.active {
        background: rgba(31, 143, 105, 0.12);
        border-color: rgba(31, 143, 105, 0.3);
      }

      .jobs-listings {
        display: grid;
        gap: 1rem;
      }

      .list-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1rem;
      }

      .list-header .eyebrow {
        margin: 0;
        font-size: 0.95rem;
      }

      .list-header h2 {
        margin: 0.5rem 0 0;
        font-size: clamp(1.7rem, 2.5vw, 2.3rem);
      }

      .sort-pill {
        display: inline-flex;
        align-items: center;
        padding: 0.75rem 1rem;
        border-radius: 999px;
        background: #eef9f4;
        color: #1f8f69;
        font-weight: 700;
      }

      .job-card {
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        gap: 1rem;
        padding: 1.5rem;
        border-radius: 1.75rem;
        background: white;
        box-shadow: 0 24px 60px rgba(15, 47, 63, 0.06);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        cursor: pointer;
        border: 1px solid rgba(31, 143, 105, 0.1);
      }

      .job-card:hover {
        transform: translateX(4px);
        box-shadow: 0 32px 70px rgba(15, 47, 63, 0.12);
        border-color: rgba(31, 143, 105, 0.25);
      }

      .job-label {
        margin: 0;
        font-size: 1.15rem;
        font-weight: 700;
        color: #0d2d39;
      }

      .job-meta {
        margin: 0.55rem 0 0;
        color: #4d6d7b;
      }

      .job-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-top: 1rem;
      }

      .job-tags span,
      .match-badge {
        display: inline-flex;
        align-items: center;
        padding: 0.55rem 0.9rem;
        border-radius: 999px;
        font-size: 0.9rem;
      }

      .job-tags span {
        background: #f2f7f3;
        color: #1f7b58;
      }

      .match-badge {
        background: #f8faf5;
        color: #3a7f46;
        font-weight: 700;
        margin-bottom: 0.5rem;
      }

      .job-card-actions {
        display: grid;
        gap: 0.8rem;
        justify-items: end;
      }

      .job-card-actions .btn {
        min-width: 120px;
      }

      @media (max-width: 930px) {
        .jobs-layout {
          grid-template-columns: 1fr;
        }

        .job-card {
          grid-template-columns: 1fr;
        }

        .job-card-actions {
          justify-items: start;
        }
      }

      @media (max-width: 640px) {
        .page-header {
          flex-direction: column;
          align-items: stretch;
        }

        .page-header h1 {
          font-size: 2rem;
        }
      }
    `
  ]
})
export class JobsPage {}
