const RegistrationEmailTemplate = (data) => {
  const isAdmin = data.recipient === "admin"
  const currencySymbol = data.currency === "USD" ? "$" : "€"

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${isAdmin ? "New Registration Payment Initiated" : "Your RobotechSummit Registration Payment Initiated"}</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
          
          body {
            font-family: 'Inter', sans-serif;
            background-color: #fef7f0;
            margin: 0;
            padding: 0;
            color: #c2410c;
          }
          
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          
          .header {
            text-align: center;
            margin-bottom: 30px;
          }
          
          .logo {
            margin-bottom: 20px;
          }
          
          .title {
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 10px;
            color: #ea580c;
          }
          
          .card {
            background-color: #ffffff;
            border-radius: 12px;
            padding: 20px;
            margin-bottom: 20px;
            border: 1px solid #fed7aa;
            box-shadow: 0 2px 10px rgba(234, 88, 12, 0.1);
            position: relative;
            overflow: hidden;
          }
          
          .card::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, #ea580c, #f97316);
          }
          
          .section-title {
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 15px;
            color: #ea580c;
          }
          
          .detail-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
            padding-bottom: 10px;
            border-bottom: 1px solid #fed7aa;
          }
          
          .detail-row:last-child {
            border-bottom: none;
          }
          
          .detail-label {
            color: #c2410c;
            font-weight: 500;
          }
          
          .detail-value {
            color: #ea580c;
            font-weight: 600;
          }
          
          .highlight {
            background-color: #fff7ed;
            padding: 15px;
            border-radius: 8px;
            margin-top: 20px;
            border-left: 4px solid #f97316;
            color: #c2410c;
          }
          
          .highlight p {
            color: #c2410c;
            margin: 0;
          }
          
          .button {
            display: inline-block;
            background: linear-gradient(135deg, #ea580c, #f97316);
            color: white;
            font-weight: bold;
            padding: 12px 24px;
            border-radius: 50px;
            text-decoration: none;
            margin-top: 20px;
            text-align: center;
            transition: all 0.3s ease;
          }
          
          .button:hover {
            background: linear-gradient(135deg, #dc2626, #ea580c);
            transform: translateY(-2px);
          }
          
          .footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #fed7aa;
            color: #c2410c;
            font-size: 14px;
          }
          
          .grid-pattern {
            background-image: radial-gradient(rgba(234, 88, 12, 0.1) 1px, transparent 1px);
            background-size: 20px 20px;
          }
          
          .card p, .card li {
            color: #c2410c;
          }
          
          ul {
            padding-left: 20px;
          }
          
          li {
            margin-bottom: 8px;
          }
          
          a {
            color: #ea580c;
            text-decoration: none;
            font-weight: 500;
          }
          
          a:hover {
            text-decoration: underline;
          }

          .conference-header {
            background: linear-gradient(135deg, #ea580c, #f97316);
            color: white;
            padding: 20px;
            border-radius: 12px;
            text-align: center;
            margin-bottom: 20px;
          }

          .conference-title {
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 5px;
          }

          .conference-subtitle {
            font-size: 16px;
            opacity: 0.9;
            margin-bottom: 10px;
          }

          .conference-details {
            font-size: 14px;
            opacity: 0.8;
          }
        </style>
      </head>
      <body class="grid-pattern">
        <div class="container">
          <div class="header">
            
            <div class="conference-header">
              <div class="conference-title">RobotechSummit</div>
              <div class="conference-subtitle">International Conference on AI & Robotics Innovation</div>
              <div class="conference-details">November 14th - 15th, 2025 | Singapore</div>
            </div>
            <div class="title">
              ${isAdmin ? "New Registration Payment Initiated" : "Your Registration Payment Initiated"}
            </div>
          </div>
          
          <div class="card">
            <div class="section-title">Registration Payment Details</div>
            
            <div class="detail-row">
              <span class="detail-label">Registration Type:</span>
              <span class="detail-value">${data.ticket_category} - ${data.ticket_name}</span>
            </div>
            
            <div class="detail-row">
              <span class="detail-label">Order ID:</span>
              <span class="detail-value">${data.order_id}</span>
            </div>
            
            <div class="detail-row">
              <span class="detail-label">Amount:</span>
              <span class="detail-value">${currencySymbol}${data.amount}</span>
            </div>
            
            ${
              isAdmin
                ? `
            <div class="section-title" style="margin-top: 20px;">Registrant Information</div>
            
            <div class="detail-row">
              <span class="detail-label">Name:</span>
              <span class="detail-value">${data.billing_name}</span>
            </div>
            
            <div class="detail-row">
              <span class="detail-label">Email:</span>
              <span class="detail-value">${data.billing_email}</span>
            </div>
            
            <div class="detail-row">
              <span class="detail-label">Phone:</span>
              <span class="detail-value">${data.billing_tel}</span>
            </div>
            
            <div class="detail-row">
              <span class="detail-label">Organization:</span>
              <span class="detail-value">${data.billing_organization || "Not provided"}</span>
            </div>
            
            <div class="detail-row">
              <span class="detail-label">Designation:</span>
              <span class="detail-value">${data.billing_designation || "Not provided"}</span>
            </div>
            
            <div class="detail-row">
              <span class="detail-label">Address:</span>
              <span class="detail-value">${data.billing_address}, ${data.billing_city}, ${data.billing_state}, ${
                data.billing_zip
              }, ${data.billing_country}</span>
            </div>
            `
                : `
            <div class="highlight">
              <p>Your registration payment for RobotechSummit 2025 has been initiated. Please note that your registration is not complete until payment is confirmed.</p>
            </div>
            
           
            `
            }
          </div>
          
          ${
            isAdmin
              ? `
          <div class="highlight">
            <p>This is a notification of a new registration payment initiated for the RobotechSummit: International Conference on AI & Robotics Innovation, November 14th-15th, 2025, Singapore.</p>
          </div>
          `
              : `
          <div class="card">
            <div class="section-title">Payment Status</div>
            <p>Your payment is currently being processed. You will receive a confirmation email once your payment is complete. If you do not receive a confirmation within 24 hours, please contact our support team.</p>
            
            <div class="section-title" style="margin-top: 20px;">About the Conference</div>
            <p>The <strong>RobotechSummit: International Conference on AI & Robotics Innovation</strong> brings together leading researchers, industry experts, and innovators to explore the latest breakthroughs in artificial intelligence and robotics technology.</p>
            
            <div class="highlight">
              <p>The conference will take place on <strong>November 14th-15th, 2025</strong> in <strong>Singapore</strong>.</p>
            </div>
            
            <div class="section-title" style="margin-top: 20px;">What's Next?</div>
            <p>Once your payment is confirmed, you will receive:</p>
            <ul>
              <li>Official confirmation of your registration</li>
              <li>Access instructions for the conference venue in Singapore</li>
              <li>Preliminary conference schedule and materials</li>
              <li>Information about keynote speakers and robotics demonstrations</li>
              <li>Networking event details and AI workshop information</li>
            </ul>
          </div>
          `
          }
          
          <div class="footer">
            <p>© ${new Date().getFullYear()} RobotechSummit: International Conference on AI & Robotics Innovation</p>
            <p>For any questions, please contact <a href="mailto:info@robotechsummit.com">info@robotechsummit.com</a></p>
          </div>
        </div>
      </body>
    </html>
  `
}

export default RegistrationEmailTemplate