# 💼 JobBoard — A Modern Job Posting and Application Platform

JobBoard is a full-stack web application that allows users to **post available job openings**, **browse listings**, and **apply for jobs** directly on the platform.  
Job posters can **edit, delete**, or **mark positions as filled**, while applicants can submit **resumes** and **cover letters** securely.

Built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **PostgreSQL** — JobBoard is designed to be fast, secure, and developer-friendly.

---

## 🚀 Features

### 👥 User Features
- **Sign up / Login** (via Clerk or NextAuth)
- **View all available jobs**
- **Search & filter** by title, location, tags, or remote
- **Apply for jobs** with a cover letter and resume upload
- **Edit profile** (name, headline, resume, avatar)

### 🧑‍💼 Poster Features
- **Post new job openings**
- **Edit or delete** posted jobs
- **Mark job as filled**
- **View applicants** and download resumes
- **Dashboard** to manage all job listings

### 🔒 Admin / Security
- Role-based access (only posters can manage their jobs)
- Input validation (Zod)
- Secure file uploads (Neon / S3)
- Rate limiting to prevent spam

---

## 🏗️ Tech Stack

### **Frontend**
- [Next.js 14](https://nextjs.org/) — React Framework with App Router  
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first styling  
- [shadcn/ui](https://ui.shadcn.com/) — Prebuilt accessible components  
- [React Hook Form](https://react-hook-form.com/) — Form handling  
- [Zod](https://zod.dev/) — Schema validation  
- [TanStack Query (React Query)](https://tanstack.com/query) — Server state management  

### **Backend**
- [Prisma](https://www.prisma.io/) — ORM for PostgreSQL  
- [Next.js API Routes] — Backend endpoints  
- [PostgreSQL](https://www.postgresql.org/) — Relational database  
- [Better Auth](https://www.better-auth.com/) — Authentication & user management  

### **Infrastructure**
- Hosted on [Vercel](https://vercel.com/)
- Database via [Neon](https://neon.com/) 
- Storage: Neon / AWS S3 for resumes
- CI/CD via GitHub Actions
