<h1>📂 File Sharing Service (Node.js + Express)</h1>

A simple and efficient file sharing service built with Node.js, Express, Multer, Cloudinary, and Nodemailer.

<h2>This project allows users to:</h2>

  • Upload files via a web form.

  • Store uploaded files securely on Cloudinary.

  • Share files easily by sending a download link via email using Nodemailer.

<h2>🚀 Features</h2>

  • 📤 Upload files of any type using Multer (multipart/form-data).

  • ☁️ Store files in the cloud with Cloudinary.

  • 📧 Send file download links directly to recipients via Nodemailer.

  • 🔗 Generate secure file links for easy sharing.

<h2>🛠 Tech Stack</h2>

  • Node.js

  • Express.js

  • Multer (file upload middleware)

  • Cloudinary (cloud storage & file hosting)

  • Nodemailer (email service for sharing links)

<h2>📖 How It Works</h2>

  • User uploads a file from the frontend.

  • File is stored on Cloudinary using Multer.

  • The server generates a secure Cloudinary URL.

  • The user enters a recipient email.

  • Nodemailer sends an email with the file link.

<h2>⚡ Use Cases</h2>

  • Share documents, images, or media files quickly.

  • Build as a base for a Google Drive / WeTransfer-like clone.

  • Learn about file uploads, cloud storage, and email integration in Node.js.

<h2>How to install</h2>

  <p>clone the repo</p>
  
    git clone https://github.com/sumitchandora/fileShare.git

  <p>Install packages</p>
  
    npm init -y

  <p>run the server</p>
  
    npx nodemon app.js
