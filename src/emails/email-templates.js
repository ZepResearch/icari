export function getUserEmailTemplate(data) {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <title>Paper Submission Confirmation</title>
    <style>
      body {
        font-family: 'Arial', sans-serif;
        line-height: 1.6;
        color: #2d1b0e;
        background-color: #fef9f5;
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
      }
      .header {
        background: linear-gradient(135deg, #ffcc80 0%, #ff8a50 100%);
        color: #ffffff;
        padding: 25px;
        text-align: center;
        border-radius: 15px 15px 0 0;
        border: 1px solid #ff8a50;
        box-shadow: 0 0 15px rgba(255, 138, 80, 0.5);
      }
      .content {
        padding: 25px;
        border: 1px solid #ffcc80;
        border-top: none;
        border-radius: 0 0 15px 15px;
        background-color: #ffffff;
        box-shadow: 0 0 10px rgba(255, 138, 80, 0.3);
        color: #2d1b0e;
      }
      .footer {
        text-align: center;
        margin-top: 20px;
        font-size: 12px;
        color: #ff8a50;
      }
      h1 {
        color: #2d1b0e;
        margin-top: 0;
        text-transform: uppercase;
        letter-spacing: 2px;
      }
      .conference-title {
        font-size: 26px;
        font-weight: bold;
        color: #ffffff;
        margin-bottom: 5px;
      }
      .subtitle {
        color: #ffffff;
        font-size: 16px;
        margin-top: 5px;
        margin-bottom: 8px;
        font-weight: 300;
      }
      .event-details {
        color: #ffffff;
        font-size: 14px;
        margin-top: 10px;
        opacity: 0.9;
      }
      .highlight {
        font-weight: bold;
        color: #ff8a50;
      }
      ul {
        list-style-type: none;
        padding-left: 0;
      }
      li {
        padding: 8px 0;
        border-bottom: 1px solid #ffcc80;
      }
      li:last-child {
        border-bottom: none;
      }
      li strong {
        color: #ff8a50;
        font-weight: bold;
        margin-right: 5px;
        display: inline-block;
        min-width: 120px;
      }
      a {
        color: #ff8a50;
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
      }
      .button {
        display: inline-block;
        padding: 10px 20px;
        border: 1px solid #ff8a50;
        border-radius: 30px;
        background-color: #ff8a50;
        color: #ffffff;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-top: 15px;
        transition: all 0.3s ease;
        text-align: center;
      }
      .button:hover {
        background-color: #e57c3c;
      }
      .detail-label {
        color: #ff8a50;
        font-weight: bold;
        margin-right: 5px;
        display: inline-block;
        min-width: 150px;
      }
      .detail-value {
        color: #2d1b0e;
      }
      .contact-info {
        background-color: #fff5f0;
        padding: 15px;
        border-radius: 8px;
        margin: 15px 0;
        border-left: 4px solid #ff8a50;
      }
    </style>
  </head>
  <body>
    <div class="header">
      <div class="conference-title">RobotechSummit</div>
      <div class="subtitle">International Conference on AI & Robotics Innovation</div>
      <div class="event-details">November 14th - 15th, 2025 | Singapore</div>
    </div>
    <div class="content">
      <p>Dear ${data.author},</p>
      
      <p>Thank you for submitting your paper titled <span class="highlight">"${data.paper_title}"</span> to RobotechSummit: International Conference on AI & Robotics Innovation.</p>
      
      <p>We have received your submission and our review committee will evaluate it shortly. You will be notified about the status of your submission in the coming weeks.</p>
      
      <p>Here's a summary of your submission:</p>
      <ul>
        <li><span class="detail-label">Paper Title:</span> <span class="detail-value">${data.paper_title}</span></li>
        <li><span class="detail-label">Paper Type:</span> <span class="detail-value">${data.paper_type}</span></li>
        <li><span class="detail-label">Presentation Type:</span> <span class="detail-value">${data.presentation_type}</span></li>
        <li><span class="detail-label">Submission Date:</span> <span class="detail-value">${new Date().toLocaleDateString()}</span></li>
      </ul>
      
      <div class="contact-info">
        <p><strong>Conference Contact Information:</strong></p>
        <p>📧 Email: <a href="mailto:info@robotechsummit.com">info@robotechsummit.com</a><br>
        📞 Phone: <a href="tel:+917848854815">+91 78488 54815</a></p>
      </div>
      
      <p>If you have any questions or need to make changes to your submission, please don't hesitate to contact us using the information above.</p>
      
      <p>Best regards,<br>
      RobotechSummit Organizing Committee<br>
      International Conference on AI & Robotics Innovation</p>
    </div>
    <div class="footer">
      <p>© 2025 RobotechSummit. All rights reserved.</p>
    </div>
  </body>
  </html>
  `
}

export function getAdminEmailTemplate(data, fileUrl) {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <title>New Paper Submission</title>
    <style>
      body {
        font-family: 'Arial', sans-serif;
        line-height: 1.6;
        color: #2d1b0e;
        background-color: #fef9f5;
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
      }
      .header {
        background: linear-gradient(135deg, #ffcc80 0%, #ff8a50 100%);
        color: #ffffff;
        padding: 25px;
        text-align: center;
        border-radius: 15px 15px 0 0;
        border: 1px solid #ff8a50;
        box-shadow: 0 0 15px rgba(255, 138, 80, 0.5);
      }
      .content {
        padding: 25px;
        border: 1px solid #ffcc80;
        border-top: none;
        border-radius: 0 0 15px 15px;
        background-color: #ffffff;
        box-shadow: 0 0 10px rgba(255, 138, 80, 0.3);
      }
      .footer {
        text-align: center;
        margin-top: 20px;
        font-size: 12px;
        color: #ff8a50;
      }
      h1, h2 {
        color: #2d1b0e;
        margin-top: 0;
        text-transform: uppercase;
        letter-spacing: 2px;
      }
      .conference-title {
        font-size: 26px;
        font-weight: bold;
        color: #ffffff;
        margin-bottom: 5px;
      }
      .subtitle {
        color: #ffffff;
        font-size: 16px;
        margin-top: 5px;
        font-weight: 300;
      }
      table {
        width: 100%;
        border-collapse: separate;
        border-spacing: 0;
        margin: 20px 0;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 0 10px rgba(255, 138, 80, 0.3);
      }
      table, th, td {
        border: 1px solid #ffcc80;
      }
      th, td {
        padding: 12px 15px;
        text-align: left;
      }
      th {
        background-color: #fff5f0;
        color: #2d1b0e;
        text-transform: uppercase;
        font-size: 14px;
        letter-spacing: 1px;
        font-weight: bold;
      }
      td {
        color: #2d1b0e;
      }
      tr:nth-child(even) {
        background-color: #fef9f5;
      }
      tr:nth-child(odd) {
        background-color: #ffffff;
      }
      tr:hover {
        background-color: #fff5f0;
      }
      .file-link {
        color: #ff8a50;
        text-decoration: none;
        display: inline-block;
        padding: 5px 10px;
        border: 1px solid #ff8a50;
        border-radius: 5px;
        transition: all 0.3s ease;
        background-color: rgba(255, 138, 80, 0.1);
      }
      .file-link:hover {
        background-color: rgba(255, 138, 80, 0.2);
        box-shadow: 0 0 10px rgba(255, 138, 80, 0.5);
      }
      .action-buttons {
        text-align: center;
        margin-top: 20px;
      }
      .action-button {
        display: inline-block;
        padding: 10px 20px;
        margin: 0 10px;
        border: 1px solid #ff8a50;
        border-radius: 30px;
        background-color: #ff8a50;
        color: #ffffff;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 1px;
        transition: all 0.3s ease;
      }
      .action-button:hover {
        background-color: #e57c3c;
      }
      .action-button.reject {
        border-color: #e53e3e;
        color: #ffffff;
        background-color: #e53e3e;
      }
      .action-button.reject:hover {
        background-color: #c53030;
      }
      .conference-info {
        background-color: #fff5f0;
        padding: 15px;
        border-radius: 8px;
        margin: 15px 0;
        border-left: 4px solid #ff8a50;
      }
    </style>
  </head>
  <body>
    <div class="header">
      <div class="conference-title">RobotechSummit</div>
      <div class="subtitle">New Paper Submission Alert</div>
    </div>
    <div class="content">
      <p>A new paper has been submitted to RobotechSummit: International Conference on AI & Robotics Innovation.</p>
      
      <div class="conference-info">
        <p><strong>Conference Details:</strong></p>
        <p>📅 November 14th - 15th, 2025<br>
        📍 Singapore<br>
        📧 info@robotechsummit.com<br>
        📞 +91 78488 54815</p>
      </div>
      
      <h2>Submission Details:</h2>
      <table>
        <tr>
          <th>Field</th>
          <th>Value</th>
        </tr>
        <tr>
          <td>Author</td>
          <td>${data.author}</td>
        </tr>
        <tr>
          <td>Email</td>
          <td>${data.email}</td>
        </tr>
        <tr>
          <td>Phone Number</td>
          <td>${data.phone_number}</td>
        </tr>
        <tr>
          <td>Country</td>
          <td>${data.country}</td>
        </tr>
        <tr>
          <td>Co-Author</td>
          <td>${data.co_author}</td>
        </tr>
        <tr>
          <td>Paper Title</td>
          <td>${data.paper_title}</td>
        </tr>
        <tr>
          <td>Department</td>
          <td>${data.department}</td>
        </tr>
        <tr>
          <td>Organization</td>
          <td>${data.organization}</td>
        </tr>
        <tr>
          <td>Paper Type</td>
          <td>${data.paper_type}</td>
        </tr>
        <tr>
          <td>Presentation Type</td>
          <td>${data.presentation_type}</td>
        </tr>
        <tr>
          <td>Message</td>
          <td>${data.message}</td>
        </tr>
        <tr>
          <td>How they heard about us</td>
          <td>${data.know_to_you}</td>
        </tr>
        <tr>
          <td>Submission Date</td>
          <td>${new Date().toLocaleDateString()}</td>
        </tr>
        ${
          fileUrl
            ? `
        <tr>
          <td>Uploaded File</td>
          <td><a href="${fileUrl}" class="file-link">View/Download File</a></td>
        </tr>
        `
            : ""
        }
      </table>
      
      <p>Please review this submission at your earliest convenience.</p>
    </div>
    <div class="footer">
      <p>© 2025 RobotechSummit. All rights reserved.</p>
    </div>
  </body>
  </html>
  `
}