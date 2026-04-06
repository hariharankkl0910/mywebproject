Instructions to use this:
Go to your GitHub repository.

Click Add file > Create new file.

Name the file README.md (exactly like that).

Copy the raw text below and paste it in.

Replace the placeholder bracketed text (like [your-username]) with your actual information.

Markdown
# Fog Secure Backup System 🌩️🔒

A secure, decentralized cloud backup platform built on the principles of **Fog Computing**. This project simulates a disaster-resilient environment where user files are encrypted and distributed across localized network nodes rather than a single vulnerable centralized server.

This project was built as a hands-on exploration of edge computing and secure software architecture, developed through an active human-AI collaborative workflow.

---

## 🚀 Key Features

* **Decentralized Storage Simulation:** Files are split and stored across distributed nodes to ensure high availability and disaster resilience.
* **Local File Encryption:** Implements custom logic to secure files locally before they are pushed to the simulated edge nodes.
* **Full-Stack Authentication:** Seamless user registration and secure login portal mapped to a relational database.
* **AI-Assisted Development:** Leveraged the **Devin AI software agent** to refactor backend modules, write automated test cases, and manage continuous integration via GitHub Pull Requests.

---

## 🛠️ Tech Stack

* **Backend:** Python, Flask
* **Database:** MySQL (Relational DBMS)
* **Frontend:** HTML5, CSS3, JavaScript
* **Agentic AI:** Devin (Cognition)

---

## 🤖 AI Collaboration Workflow

To demonstrate modern software engineering practices, I acted as the lead engineer and utilized **Devin AI** as an autonomous coding partner.

1. **Prompting & Scoping:** I directed Devin to generate a series of Python unit tests to ensure our file encryption logic was sound.
2. **Pull Requests:** Devin autonomously branched the repository, wrote the test suites, verified them locally, and opened Pull Requests.
3. **Review & Merge:** I manually reviewed Devin's code changes directly on GitHub, requested minor refactors, and successfully merged the clean code into the `main` branch.

*You can inspect the project history or closed Pull Requests to see our collaboration in action!*

---

## ⚙️ How to Run the Project

### 1. Clone the Repository
```bash
git clone [https://github.com/](https://github.com/)[your-username]/[your-repo-name].git
cd [your-repo-name]
2. Install Dependencies
Bash
pip install -r requirements.txt
3. Set Up the Database
Open your MySQL terminal or workbench.

Create a database named fog_backup.

Update the connection strings in the Flask app file with your local MySQL credentials.

4. Run the Application
Bash
python app.py
Open your browser and navigate to http://localhost:5000 to view the platform.*