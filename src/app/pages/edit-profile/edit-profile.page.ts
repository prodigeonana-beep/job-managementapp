import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-edit-profile-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="page-shell edit-profile-page">
      <section class="page-header">
        <div>
          <p class="overline">Comprehensive Edit Profile</p>
          <h1>Edit Professional Profile</h1>
          <p>Update your details and keep your profile ready for recruiters and top job matches.</p>
        </div>
        <a class="btn btn-outline" routerLink="/profile">Back to profile</a>
      </section>

      <form class="edit-form">
        <fieldset>
          <legend>Personal Information</legend>
          <div class="field-row">
            <label>Full name</label>
            <input value="Jean-Luc Ambassa" />
          </div>
          <div class="field-row">
            <label>Email address</label>
            <input value="jean-luc@domain.cm" />
          </div>
          <div class="field-row">
            <label>Location</label>
            <input value="Douala, Cameroon" />
          </div>
        </fieldset>

        <fieldset>
          <legend>Professional Summary</legend>
          <textarea>Accomplished software engineer with 8+ years of experience building scalable platforms, modernizing workflows, and mentoring product teams.</textarea>
        </fieldset>

        <fieldset>
          <legend>Language Proficiency</legend>
          <div class="field-row">
            <label>Language</label>
            <input value="French" />
          </div>
          <div class="field-row">
            <label>Proficiency</label>
            <input value="Native" />
          </div>
        </fieldset>

        <fieldset>
          <legend>Work Experience</legend>
          <div class="field-row">
            <label>Role</label>
            <input value="Lead Software Engineer" />
          </div>
          <div class="field-row">
            <label>Company</label>
            <input value="Digital Innovation Cameroon" />
          </div>
          <div class="field-row">
            <label>Years</label>
            <input value="2020 - Present" />
          </div>
        </fieldset>

        <fieldset>
          <legend>Education</legend>
          <div class="field-row">
            <label>Institution</label>
            <input value="University of Yaoundé" />
          </div>
          <div class="field-row">
            <label>Degree</label>
            <input value="B.Sc. Computer Science" />
          </div>
          <div class="field-row">
            <label>Year</label>
            <input value="2014 - 2018" />
          </div>
        </fieldset>

        <fieldset>
          <legend>Contact Details</legend>
          <div class="field-row">
            <label>Phone</label>
            <input value="+237 6X XX XX XX" />
          </div>
          <div class="field-row">
            <label>LinkedIn</label>
            <input value="linkedin.com/in/jeanluc" />
          </div>
        </fieldset>

        <fieldset>
          <legend>Professional Links</legend>
          <div class="field-row">
            <label>Portfolio</label>
            <input value="https://portfolio.example.cm" />
          </div>
        </fieldset>

        <div class="form-actions">
          <a class="btn btn-secondary" routerLink="/profile">Cancel</a>
          <button type="button" class="btn btn-primary">Save Changes</button>
        </div>
      </form>
    </div>
  `,
  styles: [
    `
      .page-shell {
        max-width: 1000px;
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
        color: #0d2d39;
      }

      .page-header p {
        margin: 0.75rem 0 0;
        color: #4d6d7b;
      }

      .edit-form {
        display: grid;
        gap: 1.5rem;
      }

      fieldset {
        border: 1px solid #d6e3ea;
        border-radius: 1.5rem;
        padding: 1.5rem;
        background: white;
      }

      legend {
        font-weight: 700;
        color: #0d2d39;
        margin-bottom: 1rem;
        padding: 0 0.5rem;
      }

      .field-row {
        display: grid;
        gap: 0.5rem;
        margin-bottom: 1rem;
      }

      .field-row label {
        font-weight: 700;
        color: #0f2f3f;
      }

      input,
      textarea,
      select {
        width: 100%;
        min-height: 3rem;
        border: 1px solid #d6e3ea;
        border-radius: 1rem;
        padding: 0.95rem 1rem;
        font-size: 0.95rem;
        color: #0f2f3f;
        transition: all 0.2s ease;
      }

      input:focus,
      textarea:focus,
      select:focus {
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

      textarea {
        min-height: 8rem;
        resize: vertical;
      }

      .form-actions {
        display: flex;
        justify-content: flex-end;
        gap: 1rem;
        flex-wrap: wrap;
      }

      @media (max-width: 720px) {
        .page-header {
          flex-direction: column;
          align-items: stretch;
        }

        .form-actions {
          justify-content: stretch;
        }
      }
    `
  ]
})
export class EditProfilePage {}
