# Full-Stack Portfolio (Angular + Node.js)

A modern, full-stack portfolio application built with Angular and Node.js, featuring dynamic content, internationalization, performance optimization, and responsive UI.

## 🌍 Live Demo
https://mahdiehgh.com

---

## Features

-  Multi-language support (English / French)
-  Light / Dark mode toggle
-  Optimized backend with in-memory caching
-  REST API with JSON-based data storage
-  Modular Angular frontend (standalone components)
-  Responsive and animated UI
-  Resume preview with language selection

---

## Tech Stack

### Frontend
- Angular 17+
- TypeScript
- CSS (custom theme system)

### Backend
- Node.js
- Express.js
- JSON file-based storage

### Tools
- Autocannon (performance testing)
- Nodemon (development)

### DevOps
- Docker
- GitHub Actions
- AWS EC2
- Nginx
- Cloudflare
---

## DevOps & Deployment

- Containerized frontend and backend using Docker
- Multi-container setup with Docker Compose
- Configured environment-based deployment (development vs production)
- Implemented CI/CD pipeline using GitHub Actions
- Automated deployment to AWS EC2 via SSH
- Configured Nginx as reverse proxy for API and frontend routing
- Enabled HTTPS with Let's Encrypt (Certbot)
- Integrated Cloudflare for DNS management and security

## 📂 Project Structure
```bash
portfolio/
├── .github/
│   └── workflows/
│       ├── ci.yml
│       └── deploy.yml
│
├── docker-compose.yml
├── docker-compose.prod.yml
│
├── portfolio-backend/
│   ├── Dockerfile
│   ├── .dockerignore
│   ├── .env.development
│   ├── .env.production
│   ├── src/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── repositories/
│   │   ├── routes/
│   │   ├── data/
│   │   ├── app.js
│   │   └── server.js
│
├── portfolio-frontend/
│   ├── Dockerfile
│   ├── .dockerignore
│   ├── nginx.conf
│   ├── src/
│   │   ├── app/
│   │   │   ├── core/
│   │   │   ├── features/
│   │   │   ├── shared/
│   │   │   └── assets/
│   │   ├── environments/
│   │   ├── favicon.ico
│   │   └── index.html
│   └── public/
```


### Internationalization & Theming

Implemented dynamic language switching and theme control across the entire application.

#### Language Switching (EN / FR)
- Global language state managed via Angular service
- Backend supports localized responses via `?lang=en|fr`
- Automatic re-fetch of data when language changes
- UI text translated using centralized configuration

####  Theme Switching (Light / Dark)
- Implemented using CSS variables and `data-theme`
- Instant theme switching without page reload
- Consistent design across all components

###  Frontend Architecture

Built using Angular standalone components with a modular structure.

- Feature-based organization (home, experience, projects, etc.)
- Reusable shared components (timeline, navbar)
- Centralized services for:
  - API communication
  - Language state
  - Theme management


---

## ⚙️ Setup & Run

### Backend

```bash
cd portfolio-backend
npm install
npm run dev
```
### Frontend
```bash
cd portfolio-frontend
npm install
ng serve
```

### Run with Docker (Recommended)

```bash
docker-compose up --build
```

Production (EC2)
```bash
docker-compose -f docker-compose.prod.yml up --build -d
```


## 🤖 CI/CD Pipeline

- Continuous Integration runs on every push and pull request
- Builds and validates both frontend and backend
- Manual deployment trigger using GitHub Actions
- Secure SSH-based deployment to AWS EC2
- Zero-downtime container restart using Docker Compose

## 🔗 API Endpoints
- /api/projects
- /api/experiences
- /api/education
- /api/interests
- /api/about


## 📈 Performance Optimization: 
### In-Memory Caching

Implemented an in-memory caching layer for JSON-based data access in the backend to eliminate repeated disk reads and significantly improve API performance under load.

By caching parsed data at the service level, the application avoids redundant file I/O operations, resulting in lower latency and higher throughput.

#### 📌 Projects Endpoint (`/api/projects`)
- Reduced average latency from **20.5 ms → 16.3 ms** (~20% improvement)
- Increased throughput from **~2,377 → ~2,970 requests/sec** (~25% improvement)
- Eliminated repeated disk I/O by caching parsed JSON data in memory

Before using cache:
<img width="837" height="482" alt="image" src="https://github.com/user-attachments/assets/adcfd1b3-45d3-4697-a45d-88e7d9c58f23" />

Using cache:
<img width="925" height="453" alt="image" src="https://github.com/user-attachments/assets/dd0f7dd1-7b05-40f2-90f1-a0cf17af2e54" />

#### 📌 Experiences Endpoint (`/api/experiences`)
- Reduced average latency from **20.6 ms → 16.0 ms** (~22% improvement)
- Increased throughput from **~2,376 → ~3,030 requests/sec** (~27% improvement)
- Eliminated repeated disk I/O by caching parsed JSON data in memory
Before using cache:
<img width="834" height="491" alt="image" src="https://github.com/user-attachments/assets/ccfbfca5-b9be-457f-a748-18b9d5a0152f" />

Using cache:
<img width="878" height="479" alt="image" src="https://github.com/user-attachments/assets/88bbbb3d-66f5-40b8-a469-a5c0ecd40577" />

#### ⚙️ Benchmark Setup
- **Tool:** autocannon  
- **Load:** 50 concurrent connections  
- **Duration:** 10 seconds  

#### 💡 Impact
- Improved response time consistency under concurrent load  
- Increased backend scalability without introducing a database  
- Demonstrated performance optimization using lightweight architecture

### Asynchronous File I/O

Refactored file access from synchronous to asynchronous operations to prevent blocking the Node.js event loop and improve performance under concurrent load.

By using non-blocking I/O, the server can handle multiple requests in parallel more efficiently, resulting in improved latency and throughput.

#### 📌 Projects Endpoint (`/api/projects`)
- Reduced average latency from **40.9 ms → 36.5 ms** (~11% improvement)
- Increased throughput from **~2,410 → ~2,701 requests/sec** (~12% improvement)
- Reduced latency variance (std dev **11.49 → 4.22 ms**) for more stable responses
- Eliminated event loop blocking caused by synchronous file reads
Synchronous results:
<img width="1068" height="377" alt="image" src="https://github.com/user-attachments/assets/74442bcb-1232-4b04-820d-a56930adfb9b" />


Asynchronous results:
<img width="1020" height="422" alt="image" src="https://github.com/user-attachments/assets/871b4888-5803-44c4-8f51-1c189948dd2e" />


#### 📌 Experiences Endpoint (`/api/experiences`)
- Reduced average latency from **48.1 ms → 36.9 ms** (~23% improvement)
- Increased throughput from **~2,056 → ~2,671 requests/sec** (~30% improvement)
- Reduced latency variance (std dev **17.67 → 3.52 ms**) for more consistent performance
- Improved concurrency handling by enabling non-blocking operations

Synchronous results:
<img width="1038" height="413" alt="image" src="https://github.com/user-attachments/assets/c5cfecaf-20f9-4b6e-9c47-a236c52f4ac2" />



Asynchronous results:
<img width="1097" height="440" alt="image" src="https://github.com/user-attachments/assets/2917f508-4747-4c7e-98c7-78a7b60d4f08" />


#### ⚙️ Benchmark Setup
- **Tool:** autocannon  
- **Load:** 100 concurrent connections  
- **Duration:** 10 seconds  

####  Impact
- Improved scalability under high concurrency  
- Prevented event loop blocking (critical in Node.js applications)  
- Achieved more stable and predictable response times  
