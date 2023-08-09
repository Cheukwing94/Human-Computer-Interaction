# Final Year Project
## Topic: A study in (HCI) human computer interaction

In this project, I will design and implement three different software interfaces such as websites and databases with one topic small online shopping. During the design, I will follow Norman’s model of interaction. For the step of the design process, I will do research of user who will use the software and its requirements analysis. Building some specific guidelines for the design can efficiently meet the requirements of those users. Afterward, I will start designing the idea followed by the analysis of statistics and solve the issues of each different user.

---
# Software 1: Restaurant ordering app.
To run the software, you should do the following action in the terminal.

```bash
# Firstly, make sure you are in the ordering-app folder.
cd SoftwareDesign
cd ordering-app
npm cache clean --force
npm install
npm start
```

## Path
After starting the software, the path of each page show below:

| Page        | Path                       |
| ----------- | -------------------------- |
| Home        | http://localhost:3000/     |
| Menu        | http://localhost:3000/menu |
| Cart        | http://localhost:3000/cart |
| Cart        | http://localhost:3000/order|




---
# Software 2: Patient diary website.
To run the software, you should do the following action in the terminal.

```bash
# Firstly, make sure you are in the patient-diary folder.
cd SoftwareDesign
cd patient-diary
npm cache clean --force
npm install
npm start
```

## Path

After starting the software, the path of each page show below:

| Page                | Path                              |
| ------------------- | --------------------------------- |
| Login               | http://localhost:3000/            |
| Register            | http://localhost:3000/create      |
| Calendar            | http://localhost:3000/calendar    |
| Journal             | http://localhost:3000/journay     |
| Show journal        | http://localhost:3000/showjournal |
| Symptoms            | http://localhost:3000/symptoms    |
| Setting             | http://localhost:3000/settings    |

# Software 3: To Do List GUI.
## Requirements

| Requirement | Usage                   |
| ----------- | ----------------------- |
| python      | Tkinter                 |
| pillow      | Tkinter                 |

## File
| File                    | Usage                           |
| ----------------------- | ------------------------------- |
| userlist.txt            | Store user login details        |
| USENAME_tasklist.txt    | Store the task of user entered  |


To run the software, you should do the following action in the terminal.

```bash
# Firstly, make sure you are in the ordering-app folder.
pip install pillow # if you didn't installed yet
cd SoftwareDesign
cd todolist-gui
python todolist.py
```