# 🚀 Node.js Microservice + PostgreSQL on GKE

Production-grade multi-tier Kubernetes application:
- Node.js microservice exposing an API
- PostgreSQL database with seeded data
- Deployed to GKE with best practices:
  - ConfigMap & Secret
  - PVC for data persistence
  - Ingress for external access
  - Rolling updates for API
  - Namespace isolation

## 📦 **Project Structure**

├── api/ # Node.js microservice
│ ├── db.js
│ ├── index.js
│ ├── package.json
│ ├── Dockerfile
├── k8s/ # All Kubernetes YAML files
│ ├── namespace.yaml
│ ├── configmap.yaml
│ ├── secret.yaml
│ ├── api-deployment.yaml
│ ├── api-service.yaml
│ ├── db-deployment.yaml
│ ├── db-service.yaml
│ ├── pvc.yaml
│ ├── ingress.yaml
│ └── init-sql-configmap.yaml
└── README.md

---

## 🛠 **Tech Stack**

| Layer           | Tech                            |
|-----------------|---------------------------------:|
| Service API     | Node.js (Express)               |
| Database        | PostgreSQL                      |
| Container       | Docker                          |
| Orchestration   | Kubernetes (GKE)                |
| Config & secret | ConfigMap + Secret              |
| Persistence     | PVC                             |
| Ingress         | nginx-ingress / GKE Ingress     |
| Namespace       | `prod`                        |

---

## 🌐 **Links** (replace with your URLs)

| Item               | Link |
|-------------------:|--:|
| 📂 Code repository | https://github.com/boyspartye4/nagp-gke-devops |
| 🐙 Docker Hub      | https://hub.docker.com/r/yourdockerhubuser/node-api |
| 🚀 API endpoint    | http://yourapi.example.com/api/records |
| 📹 Demo video      | [Watch demo](#) |

---

## 🏗 **Deployment**

> Make sure you have Docker, kubectl and a GKE cluster ready.  
> Replace `yourdockerhubuser` and domain with actual values.

---

### ✅ 1. Build & push Docker image

From inside the `api/` folder:

```bash
cd api
docker build -t yourdockerhubuser/node-api:latest .
docker push yourdockerhubuser/node-api:latest

### ✅ 2. Create namespace
```bash
kubectl apply -f k8s/namespace.yaml

### ✅ 3. Deploy all Kubernetes resources inside namespace
```bash
kubectl apply -f k8s/ --namespace=prod

### ✅ 4. Verify
```bash
kubectl get all -n prod
kubectl get ingress -n prod

Test API:
curl http://yourapi.example.com/api/records

---

🧩 Architecture Overview
Node.js API (4 pods) handles external HTTP requests
API connects to PostgreSQL DB (1 pod) inside cluster
PVC keeps DB data persistent
ConfigMap & Secret inject config & credentials
Ingress exposes API externally; DB remains private
Namespace my-app logically isolates resources

📌 Requirement understanding
Multi-tier architecture: API + DB
API exposed externally (Ingress)
DB must persist data and not be public
ConfigMap & Secret for DB credentials
Rolling updates for API
Pod IPs must not be hardcoded (use services)

📦 Assumptions
Single table items seeded with 5–10 records
Using Docker Hub for image registry
Using GKE for managed Kubernetes
Domain points to ingress IP

⚙ Justification for resources utilized
Resource	Why?
Node.js & Express	Lightweight, fast REST API
PostgreSQL	Stable production DB
ConfigMap	Decouple config from code
Secret	Protect sensitive data
PVC	Keep DB data across pod restarts
Ingress	Single external IP, supports SSL
Namespace my-app	Logical isolation & easier management
Rolling updates	Zero downtime deployments
ClusterIP for DB	DB only accessible within cluster

📹 Demo video checklist:
✅ Deploy all objects
✅ Call API and see DB data
✅ Kill API pod → auto-recreate
✅ Kill DB pod → auto-recreate with old data
✅ Show running pods, ingress, services, PVC

🧰 Clean up
Delete everything:
```bash
kubectl delete namespace prod

## 🚀 Deploy on GKE
```bash
kubectl apply -f k8s/


---

## ✅ Step 3: `Documentation.md` skeleton

```markdown
# 📄 Project Documentation

## ✅ Requirement Understanding
- Multi-tier architecture on Kubernetes
- Node.js microservice with PostgreSQL database
- ConfigMap & Secret for DB config
- Ingress exposure for API

## 📌 Assumptions
- Domain points to Ingress IP
- Docker Hub used for images
- Initial DB seeded via init.sql

## 🛠️ Solution Overview
- Node.js API → fetches records from PostgreSQL
- Rolling updates enabled for API (4 pods)
- Single DB pod with PVC
- Exposed externally via Ingress

*(see architecture diagram)*

## 📊 Justification for Resources
- Node.js for fast API dev
- PostgreSQL for production reliability
- ConfigMap keeps configs outside code
- Secret protects DB password
- PVC keeps data across redeployments
- ClusterIP ensures internal-only DB exposure

## 📦 Deliverables
- Source code repo
- Docker image
- Kubernetes YAML files
- Readme
- Demo video
