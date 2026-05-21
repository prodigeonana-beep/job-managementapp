import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-messages-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="page-shell messages-page">
      <section class="page-header">
        <div>
          <p class="overline">Candidate Messages</p>
          <h1>Messages</h1>
          <p>Review recruiter conversations and keep track of updates to your applications.</p>
        </div>
        <a class="btn btn-outline" routerLink="/profile">Back to profile</a>
      </section>

      <div class="message-panel">
        <div class="message-empty">
          <h2>No messages yet</h2>
          <p>Start applying for roles and recruiters will get in touch here.</p>
          <a class="btn btn-primary" routerLink="/jobs">Browse jobs</a>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .page-shell {
        max-width: 900px;
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
        margin: 0.25rem 0 0;
        font-size: clamp(2.3rem, 3vw, 2.9rem);
      }

      .page-header p {
        margin: 0.75rem 0 0;
        color: #4d6d7b;
      }

      .message-panel {
        background: white;
        border-radius: 1.75rem;
        padding: 3rem;
        box-shadow: 0 24px 60px rgba(15, 47, 63, 0.06);
        min-height: 320px;
        display: grid;
        place-items: center;
        text-align: center;
      }

      .message-empty h2 {
        margin: 0;
        font-size: 1.75rem;
        color: #0d2d39;
      }

      .message-empty p {
        margin: 1rem 0 1.5rem;
        color: #4d6d7b;
      }
    `
  ]
})
export class MessagesPage {}
