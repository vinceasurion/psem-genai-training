---
applyTo: 'infra/**'
---

# GitHub Copilot instruction

This project is a Infrastructure as Code (IaC) project using AWS Cloud Development Kit (CDK) to deploy a full-stack application. The application consists of a front-end and a back-end, with the back-end being a Node.js server that interacts with a PostgreSQL database. The front-end is built with React and communicates with the back-end via REST APIs.

This infrastructure is designed to deploy the front-end and back-end in AWS Cloud. It follows best practices aligned with:

- Infrastructure as Code (IaC)
- AWS Well-Architected Framework
- Security best practices
- CI/CD pipelines
- Monitoring and logging

## Project structure

infra/ # CDK infrastructure code
├── bin/
│ └── app.ts # CDK entry point
├── lib/
│ └── psem-genai-api-stack.ts # Main stack definition
├── package.json # CDK dependencies
├── tsconfig.json # TypeScript config
└── cdk.json # CDK configuration
