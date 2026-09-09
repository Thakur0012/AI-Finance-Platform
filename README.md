# AI Finance Platform

A full-stack **AI-powered personal finance management platform** built with Next.js, React, Prisma, PostgreSQL/Supabase, Clerk, Google Gemini, Inngest, Arcjet, Tailwind CSS, and shadcn/ui.

The application helps users manage financial accounts, track income and expenses, create budgets, analyze transactions, scan receipts using AI, manage recurring transactions, and receive automated notifications.

## ✨ Features

* 🔐 **Authentication & User Management** with Clerk
* 💳 **Multiple Financial Accounts**
* 💰 **Income & Expense Tracking**
* 📊 **Financial Dashboard & Analytics**
* 🧾 **AI-Powered Receipt Scanning** using Google Gemini
* 🏷️ **Transaction Categorization**
* 🎯 **Monthly Budget Management**
* 🔁 **Recurring Transactions**
* 📧 **Email Notifications** using Resend
* 🛡️ **Security & Rate Limiting** using Arcjet
* ⚙️ **Background Jobs & Scheduled Workflows** using Inngest
* 🗄️ **PostgreSQL Database** using Prisma ORM
* 📈 **Charts & Data Visualization** using Recharts
* 📱 **Responsive UI**
* 📰 **Finance News Section**
* ✅ **Todo Management**

## 🧰 Tech Stack

| Technology            | Purpose                    |
| --------------------- | -------------------------- |
| Next.js 15            | Full-stack React framework |
| React 19              | Frontend UI                |
| JavaScript / JSX      | Programming language       |
| Tailwind CSS          | Styling                    |
| shadcn/ui             | UI components              |
| Clerk                 | Authentication             |
| PostgreSQL / Supabase | Database                   |
| Prisma                | ORM                        |
| Google Gemini         | AI functionality           |
| Inngest               | Background jobs            |
| Arcjet                | Security & rate limiting   |
| Resend                | Email delivery             |
| Recharts              | Data visualization         |
| Lucide React          | Icons                      |
| Zod                   | Validation                 |
| Vercel                | Deployment                 |

## 🏗️ Architecture

```text
Browser
   │
   ▼
Next.js Application
   │
   ├── Clerk Authentication
   │
   ├── Server Actions
   │      ├── Accounts
   │      ├── Transactions
   │      ├── Budgets
   │      └── Dashboard
   │
   ├── Prisma ORM
   │      │
   │      ▼
   │   PostgreSQL / Supabase
   │
   ├── Google Gemini
   │      └── AI Receipt Processing
   │
   ├── Arcjet
   │      └── Security & Rate Limiting
   │
   ├── Inngest
   │      └── Recurring Transaction Workflows
   │
   └── Resend
          └── Email Notifications
```

## 📂 Project Structure

```text
ai-finance-platform/
├── actions/
│   └── Server actions
│
├── app/
│   ├── (auth)/
│   ├── (main)/
│   ├── api/
│   ├── news/
│   └── todo/
│
├── components/
│   └── Reusable UI components
│
├── data/
│   └── Application data
│
├── emails/
│   └── React Email templates
│
├── hooks/
│   └── Custom React hooks
│
├── lib/
│   └── Application utilities
│
├── prisma/
│   ├── migrations/
│   └── schema.prisma
│
├── public/
│   └── Static assets
│
├── middleware.js
├── next.config.mjs
├── package.json
├── tailwind.config.js
├── .env.example
└── README.md
```

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/ai-finance-platform.git
cd ai-finance-platform
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file based on `.env.example`.

On Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

Add your credentials:

```env
DATABASE_URL=
DIRECT_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

GEMINI_API_KEY=

RESEND_API_KEY=

ARCJET_KEY=

NEXT_PUBLIC_NEWS_API_KEY=
```

### 4. Setup Prisma

Generate the Prisma client:

```bash
npx prisma generate
```

For development:

```bash
npx prisma migrate dev
```

For production:

```bash
npx prisma migrate deploy
```

### 5. Start the Development Server

```bash
npm run dev
```

Open the application:

```text
http://localhost:3000
```

## 🔑 Required Services

### Clerk

Clerk is used for authentication and user management.

Add the following variables:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
```

Configure the appropriate sign-in and sign-up URLs in your Clerk dashboard.

### PostgreSQL / Supabase

The application uses PostgreSQL through Prisma.

You can use Supabase as the PostgreSQL provider.

```env
DATABASE_URL=
DIRECT_URL=
```

### Google Gemini

Google Gemini provides AI-powered receipt scanning and transaction data extraction.

```env
GEMINI_API_KEY=
```

### Arcjet

Arcjet provides application security and rate limiting.

```env
ARCJET_KEY=
```

### Resend

Resend is used for transactional emails and notifications.

```env
RESEND_API_KEY=
```

### Inngest

Inngest is used for background jobs and recurring transaction processing.

## 🧠 AI Receipt Scanning

The application includes an AI-powered receipt scanner using **Google Gemini**.

The feature can extract information from receipts and assist users in creating transactions without manually entering every detail.

The AI integration uses Google's Generative AI SDK.

## 🔁 Recurring Transactions

The application supports recurring transactions such as:

* Daily
* Weekly
* Monthly
* Yearly

Inngest handles scheduled processing and background workflows.

Recurring transactions can automatically create the next transaction and update the associated account balance.

## 💰 Budget Management

Users can create monthly budgets and monitor their spending.

The dashboard provides budget progress and helps users understand how much of their allocated budget has been used.

## 📊 Dashboard

The dashboard provides an overview of:

* Total account balance
* Income
* Expenses
* Recent transactions
* Budget progress
* Spending analytics
* Financial activity

Charts and visualizations are implemented using Recharts.

## 🛡️ Security

The project includes several security mechanisms:

* Clerk authentication
* User-specific database access
* Arcjet request protection
* Rate limiting
* Server-side validation
* Prisma relational constraints
* Environment-based secret management

### ⚠️ Important

**Never commit your `.env` file to GitHub.**

Do not upload:

```text
.env
```

Instead, use:

```text
.env.example
```

If API keys or database credentials are accidentally pushed to GitHub, revoke and rotate them immediately.

## 🗃️ Database

The application uses Prisma ORM with PostgreSQL.

The main database models include:

* `User`
* `Account`
* `Transaction`
* `Budget`
* `Todo`

Transactions support information such as:

* Amount
* Transaction type
* Category
* Description
* Date
* Account
* Receipt
* Recurring transaction settings
* Processing status

## 🧪 Useful Commands

### Start Development

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Generate Prisma Client

```bash
npx prisma generate
```

### Run Prisma Migration

```bash
npx prisma migrate dev
```

### Deploy Prisma Migrations

```bash
npx prisma migrate deploy
```

### Open Prisma Studio

```bash
npx prisma studio
```

## 🌐 Deployment

This project can be deployed using **Vercel**.

### Deployment Steps

1. Push the project to GitHub.
2. Import the GitHub repository into Vercel.
3. Add all required environment variables.
4. Configure the production PostgreSQL/Supabase database.
5. Run Prisma migrations.
6. Configure Clerk production URLs.
7. Configure Resend.
8. Configure Arcjet.
9. Configure Inngest.
10. Deploy the application.

After deployment, update your authentication and service configurations with the production domain.

## ⚠️ Important Notes

* Never commit `.env`.
* Never expose API keys.
* Never expose database passwords.
* Use `.env.example` for environment variable documentation.
* Use separate development and production credentials.
* Make sure Clerk URLs match your deployed application.
* Make sure your production database is correctly configured for Prisma.
* Configure Inngest separately for production workflows.

## 🚀 Future Improvements

Some potential improvements include:

* 📈 Advanced financial forecasting
* 📊 More detailed spending analytics
* 📄 CSV/PDF transaction export
* 🏦 Bank account integrations
* 📊 Investment portfolio tracking
* 🤖 More advanced AI financial insights
* 📱 Progressive Web App / Mobile support
* 📧 Automated monthly financial reports
* 🔔 Custom notification preferences
* 🧪 Automated unit and integration testing

## 👨‍💻 Author

**Purushottam Thakur**

GitHub: [@Thakur0012](https://github.com/Thakur0012)

**Yash Thorat**

GitHub: [@Yashhthorat](https://github.com/Yashhthorat)

Full-stack developer interested in building modern web applications using React, Next.js, Node.js, databases, AI, and cloud technologies.

This project demonstrates:

* Full-stack application development
* Authentication
* Database design
* REST/API integration
* AI integration
* Background processing
* Security
* Responsive UI
* Data visualization
* Cloud deployment

## 📄 License

This project is currently provided for **learning and portfolio purposes**.

If you plan to make this project open source and allow reuse or redistribution, consider adding an appropriate license such as the MIT License.

---

⭐ **If you found this project useful, consider giving the repository a star!**
