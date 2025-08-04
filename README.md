# 🐳 Node.js + PostgreSQL on GKE

## 📦 Code Repository
https://github.com/yourusername/gke-microservice

## 🐙 Docker Hub
- Node API: https://hub.docker.com/r/yourdockerhubuser/node-api

## 🌐 API Endpoint
http://yourapi.example.com/api/records

## 📹 Demo Video
- Shows deployment, API call, pod regeneration, data persistence.

---

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
