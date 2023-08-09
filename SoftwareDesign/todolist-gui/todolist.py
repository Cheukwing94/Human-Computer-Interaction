import tkinter as tk
from tkinter import *
from tkinter import messagebox
from datetime import datetime, timedelta
from tkcalendar import DateEntry


# pip install pillow


task_list = []
f_done = ('Arial Narrow', 16, 'overstrike')  # font style for tasks completed
f_normal = ('Arial Narrow', 16, 'normal')  # for pending

my_ref = {}
undo_list = []
user_list = []

finish_register = False
register_rule = False
used_name = False


login_username = ""
enter_name = ""


def register():
    """Creates a new window for user registration.

    The window includes labels for username and password, entry fields for user input,
    password conditions, a button to register the user, and an error message for an
    existing username. The window is a Toplevel instance and is attached to the
    main_screen instance.

    Args:
        None.

    Variable:
        username (String): the input in the frame of username
        password (String): the input in the frame of password


    Returns:
        None.
    """
    global register_screen
    register_screen = Toplevel(main_screen)
    register_screen.title("Register")
    register_screen.geometry("300x320")

    global username, password
    global username_entry, password_entry
    global used
    global enter_btn
    global password_condition1, password_condition2, password_condition3
    username = StringVar()
    password = StringVar()

    register_heading1 = Label(register_screen, text="Please enter details below.", font=(
        "Arial Narrow", 12), bg="#32405b", fg="white")
    register_heading1.place(x=10, y=10)
    register_heading2 = Label(register_screen, text="* Should fill in",
                              font=("Arial Narrow", 11), bg="#32405b", fg="white")
    register_heading2.place(x=10, y=30)

    username_label = Label(
        register_screen, text="Username * ", font=("Arial Narrow", 12), highlightthickness=2)
    username_label.place(x=10, y=60)

    username_entry = Entry(
        register_screen, textvariable=username, font=("Arial Narrow", 12))
    username_entry.place(x=10, y=90)
    username_entry.focus()
    username_entry.bind("<KeyRelease>", check_username)

    password_lable = Label(
        register_screen, text="Password * ", font=("Arial Narrow", 12))
    password_lable.place(x=10, y=120)

    password_entry = Entry(
        register_screen, textvariable=password, show='*', font=("Arial Narrow", 12))
    password_entry.place(x=10, y=150)
    password_entry.bind("<KeyRelease>", check_password)

    password_condition1 = Label(
        register_screen, text="8 or above characters ", font=("Arial Narrow", 12), fg="red")
    password_condition1.place(x=10, y=180)

    password_condition2 = Label(
        register_screen, text="Include upper case letter", font=("Arial Narrow", 12), fg="red")
    password_condition2.place(x=10, y=205)

    password_condition3 = Label(
        register_screen, text="Include lower case letter", font=("Arial Narrow", 12), fg="red")
    password_condition3.place(x=10, y=230)

    enter_btn = Button(register_screen, text="Register", width=10, height=1,
                       bg="#32405b", fg="white", font=("Arial Narrow", 12), command=register_user)
    enter_btn.place(x=10, y=265)

    used = Label(register_screen, text="Username Taken",
                 fg="red", font=("Arial Narrow", 11))


def login():
    """Creates a new window for user login.

    If the user has finished the registration process, the register_screen is destroyed.
    The window includes labels for username and password, entry fields for user input,
    and a button to verify the user's credentials. If the user is not found or the password
    is incorrect, error messages are displayed.

    Arg:
        None.

    Variable:
        username_verify (String): the input in the frame of username for verification.
        password_verify (String): the input in the frame of password for verification.

    Returns:
        None.
    """
    if finish_register:
        register_screen.destroy()
    global login_screen
    login_screen = Toplevel(main_screen)
    login_screen.title("Login")
    login_screen.geometry("350x230")
    login_heading = Label(login_screen, text="Please enter details below to login", font=(
        "Arial Narrow", 12), bg="#32405b", fg="white")
    login_heading.place(x=10, y=10)

    global username_verify
    global password_verify

    username_verify = StringVar()
    password_verify = StringVar()

    global username_login_entry
    global password_login_entry
    global nofound
    global wrongpass

    log_username = Label(login_screen, text="Username * ",
                         font=("Arial Narrow", 12))
    log_username.place(x=10, y=50)

    username_login_entry = Entry(
        login_screen, textvariable=username_verify, font=("Arial Narrow", 12))
    username_login_entry.place(x=10, y=80)
    username_login_entry.focus()

    nofound = Label(login_screen, text="User not found",
                    fg="red", font=("Arial Narrow", 11))

    log_password = Label(login_screen, text="Password * ",
                         font=("Arial Narrow", 12))
    log_password.place(x=10, y=110)

    password_login_entry = Entry(
        login_screen, textvariable=password_verify, show='*', font=("Arial Narrow", 12))
    password_login_entry.place(x=10, y=140)

    wrongpass = Label(login_screen, text="Wrong password",
                      fg="red", font=("Arial Narrow", 11))

    log_btn = Button(login_screen, text="Login", width=10, height=1, font=(
        "Arial Narrow", 12), bg="#32405b", fg="white", command=login_verify)
    log_btn.place(x=10, y=190)


def check_username(key):
    """Checks if the username entered by the user is valid and not already taken.

    This function retrieves the input from the username entry field and checks if
    the entered username is valid, i.e., it does not contain any spaces. If the username
    is not valid, it shows an error message on the window and sets a flag to indicate
    the invalid input. If the username is valid, it checks if the username already exists
    in the user_list. If it does, it shows an error message on the window and sets the flag
    to indicate the taken username.

    Args:
        None.

    Variable:
        enter_name (String): the entry of username in login page

    Returns:
        None.
    """
    global enter_name
    global used_name
    enter_name = username_entry.get()

    if enter_name != "" and not ' ' in enter_name:
        for user in user_list:
            if enter_name == user['username']:
                used.place(x=160, y=90)
                used.config(text=enter_name+" has been used")
                username_entry.config(highlightcolor='red')
                used_name = True
                break
            elif used_name:
                used.place_forget()
                used_name = False
    elif enter_name == "":
        used_name = True
        used.place(x=160, y=90)
        used.config(text="Should fill in")
    else:
        used_name = True
        used.place(x=160, y=90)
        used.config(text="Shouldn't include space")


def check_password(key):
    """Checks if the entered password meets the required criteria.

    The function retrieves the user's input from the password_entry Entry widget and
    checks whether the password contains at least 8 characters, at least one uppercase
    letter, and at least one lowercase letter. The function updates the color of three
    Labels (password_condition1, password_condition2, password_condition3) to indicate
    whether each condition is met or not. The global variable register_rule is set to
    True if all conditions are met, and False otherwise.

    Args:
        None.

    Variable:
        register_rule (Bool): check if the entry meet all the requirement of password

    Returns:
        None.
    """

    global register_rule
    password = password_entry.get()
    if len(password) >= 8:
        password_condition1.config(fg='green')
    else:
        password_condition1.config(fg='red')

    if any(x.isupper() for x in password):
        password_condition2.config(fg='green')
    else:
        password_condition2.config(fg='red')

    if any(x.islower() for x in password):
        password_condition3.config(fg='green')
    else:
        password_condition3.config(fg='red')

    if (len(password) >= 8 and any(x.isupper() for x in password) and any(x.islower() for x in password)):
        register_rule = True
    else:
        register_rule = False


def register_user():
    """Registers a new user and saves their information to a file.

    If the username is not already taken and the password meets the specified
    criteria, the function adds the new user to the user list and saves their
    information to a file. It also updates the GUI to show a success message and
    a button to go to the login screen. If the registration fails, it shows an error
    message on the GUI.

    Args:
        None.

    Variable:
        finish_register (Bool): meet all the requirement of username or not
        user_list (list): store all the user login information
        username_info (String): the input of username in register page
        password_info (String): the input of password in register page

    Returns:
        None.
    """

    global user_list
    global finish_register
    if register_rule and not used_name:
        finish_register = True

        username_info = username.get()
        password_info = password.get()

        with open('userlist.txt', "a") as userfile:
            userfile.write(f"\n"+username_info+"||"+password_info)
        user_list.append({'username': username_info,
                         'password': password_info})

        username_entry.delete(0, END)
        password_entry.delete(0, END)

        Label(register_screen, text="Registration Success",
              fg="green", font=("Arial Narrow", 11)).place(x=110, y=270)
        enter_btn.config(text="Go and Login", command=login)

    else:
        Label(register_screen, text="Registration Fail",
              fg="red", font=("Arial Narrow", 11)).place(x=110, y=270)


def loaduserInfo():
    """Loads user information from a text file.

    The function reads the 'userlist.txt' file and loads the user information stored 
    there into a list of dictionaries. Each dictionary contains a user's username and 
    password. If the file doesn't exist, the function creates it.

    Args:
        None.

    Returns:
        None.
    """
    try:
        global user_list
        with open('userlist.txt', "r") as userfile:
            users = userfile.readlines()

        for user in users:
            if user != "\n":
                username, password = user.strip().split("||")
                user_list.append({'username': username, 'password': password})


    except FileNotFoundError:

        file = open('userlist.txt', "w")
        file.close()


def login_verify():
    """Verify the user's login credentials.

    This function takes the user's input for their username and password from the login screen and checks it against the user list.
    If a match is found, the user is redirected to the to-do list. If not, an error message is displayed on the login screen.

    Args:
        None

    Returns:
        None
    """

    global login_username
    username1 = username_verify.get()
    password1 = password_verify.get()
    username_login_entry.delete(0, END)
    password_login_entry.delete(0, END)
    found = False

    wrongpass.place_forget()
    nofound.place_forget()
    for user in user_list:
        if username1 == user['username']:
            found = True
            if password1 == user['password']:
                main_screen.destroy()
                login_username = username1
                todolist()

                break
            else:
                wrongpass.place(x=160, y=140)
                break
    if not found:
        nofound.place(x=160, y=80)


def main_screen_open():
    """
    Creates and opens the main login screen for the application. Run the function of 
    loaduserInfo which load the user login information from the userlist.txt and save 
    into the list.

    Args:
        None

    Returns:
        None
    """
    global main_screen
    main_screen = tk.Tk()
    main_screen.geometry("400x300+400+100")
    main_screen.title("Account Login")
    main_screen.resizable(False, False)

    TopImage = PhotoImage(file="topbar.png")
    topimg = Label(image=TopImage)
    topimg.pack()

    heading = Label(text="Hello Company", fg="white",
                    bg="#32405b", font=("Arial Narrow", 20))
    heading.place(x=125, y=20)

    login_button = Button(text="Login", height="1", width="25", font=(
        "Arial Narrow", 14), command=login)
    login_button.place(x=83, y=130)

    register_btn = Button(text="Register", height="1", width="25", font=(
        "Arial Narrow", 14),  command=register)
    register_btn.place(x=83, y=200)

    loaduserInfo()
    main_screen.mainloop()


def addTask():
    """
    Add a task to the user's task list.

    Variable:
        task (String): the input from the task frame
        date (String): get the selected date from the calendar

    Args:
        None.

    Return:
        None.
    """

    task = task_entry.get()
    date = str(cal.get_date())
    taskwFormat = task+"||"+date+"||"+"True"
    task_entry.delete(0, END)

    if task:
        with open('user_database/'+login_username+'_tasklist.txt', 'a') as taskfile:
            taskfile.write(f"\n{taskwFormat}")
        task_list.append({'task': task, 'date': date, 'status': "True"})
        undo_list.append({'task': task, 'date': date,
                         'status': "True", 'action': "add"})
        k = -1
        for i in task_list:
            if i['date'] == date:
                k += 1
        ck = Checkbutton(box,
                         text=task,
                         variable=date+"Checkbutton"+str(k+1),
                         onvalue=True,
                         offvalue=False,
                         font=f_normal,
                         fg="black",
                         bg="white",
                         command=lambda k=k: checkbtn_triggle(k))
        ck.grid(row=k+1, column=0, padx=20, pady=1, sticky='w')
        my_ref[k] = [ck, "True", date]
    undo_button.configure(state="active", bg="#32405b")


def openTaskFile():
    """
    Open the task file in read mode and read all the lines. Split the line into task, 
    date and status using '||' as the separator, and create a dictionary and append the 
    task dictionary to the task_list. Print the tasks from database to the task box.

    Variable:
        task (String): the input from the task frame
        date (String): get the selected date from the calendar

    Args:
        None.

    Variable:
        count (int): set the number of the task

    Return:
        None.
    """

    try:
        global task_list
        with open('user_database/'+login_username+'_tasklist.txt', "r") as taskfile:
            tasks = taskfile.readlines()
        count = 0

        for line in tasks:
            if line != "\n":
                task, date, status = line.strip().split('||')
                task_list.append(
                    {'task': task, 'date': date, 'status': status})

                if str(cal.get_date()) == date:
                    count += 1
                    k = count-1

                    var = status
                    if var == "False":
                        ck = Checkbutton(box,
                                         text=task,
                                         variable=date +
                                         "Checkbutton"+str(count),
                                         onvalue=True,
                                         offvalue=False,
                                         font=f_done,
                                         fg="green",
                                         bg="white",
                                         command=lambda k=k: checkbtn_triggle(k))
                        ck.grid(row=count, column=0,
                                padx=20, pady=1, sticky='w')
                        ck.select()
                        my_ref[k] = [ck, var, date]
                    else:
                        ck = Checkbutton(box,
                                         text=task,
                                         variable=date +
                                         "Checkbutton"+str(count),
                                         onvalue=True,
                                         offvalue=False,
                                         font=f_normal,
                                         fg="black",
                                         bg="white",
                                         command=lambda k=k: checkbtn_triggle(k))
                        ck.grid(row=count, column=0,
                                padx=20, pady=1, sticky='w')
                        ck.deselect()
                        my_ref[k] = [ck, var, date]

    except FileNotFoundError:

        file = open('user_database/' +
                    login_username+'_tasklist.txt', "w")
        file.close()


def updatetask(event):
    """update the task when user change the date from the calendar"""
    w = event.widget

    count = 0
    k = -1
    for widgets in box.winfo_children():
        widgets.destroy()
    for tasks in task_list:

        if tasks['date'] == str(w.get_date()):
            count += 1
            k = count-1
            task = tasks['task']
            var = tasks['status']
            if (var == "False"):
                ck = Checkbutton(box,
                                 text=task,
                                 variable=tasks['date'] +
                                 "Checkbutton"+str(count),
                                 onvalue=True,
                                 offvalue=False,
                                 font=f_done,
                                 fg="green",
                                 bg="white",
                                 command=lambda k=k: checkbtn_triggle(k))
                ck.grid(row=count, column=0, padx=20, pady=1, sticky='w')
                ck.select()
                my_ref[k] = [ck, var, tasks['date']]
            else:
                ck = Checkbutton(box, text=task,
                                 variable=tasks['date']+"Checkbutton"+str(count), onvalue=True, offvalue=False, font=f_normal, fg="black", bg="white", command=lambda k=k: checkbtn_triggle(k))
                ck.grid(row=count, column=0, padx=20, pady=1, sticky='w')
                ck.deselect()
                my_ref[k] = [ck, var, tasks['date']]


def checkbtn_triggle(k):
    """Triggers the check button for a task item in the to-do list.

    Sets the font color and style of the task item label and updates the task status
    in the to-do list file. If the task status is "True", it sets the font color to green
    and style to a "done" state, and updates the task status to "False". If the task status
    is "False", it sets the font color to black and style to a "not done" state, and updates
    the task status to "True".

    Args:
        k (int): The index of the task item in the to-do list to check or uncheck.

    Returns:
        None.
    """

    if my_ref[k][1] == "True":
        my_ref[k][0].config(font=f_done, fg='green')
        my_ref[k][1] = "False"
        string = ""
        count = 0
        for i in task_list:
            if str(cal.get_date()) == i['date']:
                count += 1
                if (count-1 == k):
                    string = i['task']+"||"+i['date']+"||"
                    i['status'] = "False"

        with open('user_database/'+login_username+'_tasklist.txt', 'r') as file:
            data = file.read()

            data = data.replace(string+"True", string+"False")
        with open('user_database/'+login_username+'_tasklist.txt', 'w') as file:

            file.write(data)

    else:
        my_ref[k][0].config(font=f_normal, fg='black')
        my_ref[k][1] = "True"
        string = ""
        count = 0
        for i in task_list:
            if str(cal.get_date()) == i['date']:
                count += 1
                if (count-1 == k):
                    string = i['task']+"||"+i['date']+"||"
                    i['status'] = "True"

        with open('user_database/'+login_username+'_tasklist.txt', 'r') as file:
            data = file.read()

            data = data.replace(string+"False", string+"True")
        with open('user_database/'+login_username+'_tasklist.txt', 'w') as file:

            file.write(data)


def undoTask():
    """Undo the most recent action performed by the user.

    This function retrieves the most recent task performed by the user, and undoes it
    by reversing the action that was taken. The function first checks the type of action
    performed (add, delete, or move), and then performs the corresponding undo operation
    on the task list and user database. The function also updates the calendar display 
    and the undo button status.

    Args:
        None.

    Returns:
        None.
    """
    line = undo_list[-1]
    task = line['task']
    date = line['date']
    status = line['status']
    string = task+"||"+date+"||"+status

    if line['action'] == "add":
        task_list.remove({'task': task, 'date': date, 'status': status})

        with open('user_database/'+login_username+'_tasklist.txt', 'r') as file:
            data = file.read()
            data = data.replace(string, "")
        with open('user_database/'+login_username+'_tasklist.txt', 'w') as file:
            file.write(data)

    elif line['action'] == "delete":
        task_list.append({'task': task, 'date': date, 'status': "False"})
        with open('user_database/'+login_username+'_tasklist.txt', 'a') as taskfile:
            taskfile.write(f"\n{string}")

    elif line['action'] == "move":
        task_list.remove({'task': task, 'date': date, 'status': status})
        date = datetime.strptime(date, '%Y-%m-%d').date()
        pervious = date - timedelta(1)
        task_list.append(
            {'task': task, 'date': str(pervious), 'status': "True"})
        with open('user_database/'+login_username+'_tasklist.txt', 'r') as file:
            data = file.read()
            data = data.replace(string, task+"||" +
                                str(pervious)+"||"+status)
        with open('user_database/'+login_username+'_tasklist.txt', 'w') as file:
            file.write(data)

        cal.set_date(pervious)

    undo_list.pop()

    if len(undo_list) == 0:
        undo_button.configure(state="disable", bg="darkgray")

    printTask()


def printTask():
    """Displays the list of tasks for the selected date in the GUI.

    This function clears the existing widgets from the task display box and creates
    Checkbutton widgets for each task in the task_list that matches the currently 
    selected date on the calendar. The Checkbuttons are labeled with the task name 
    and their initial selection state is determined by the task's status in the 
    task_list. The Checkbutton widgets are stored in the my_ref dictionary along with 
    their current selection state and date. The Checkbutton widgets call the 
    checkbtn_triggle function when clicked.

    Args:
        None.

    Returns:
        None.
    """
    for widgets in box.winfo_children():
        widgets.destroy()
    count = 0
    for alltask in task_list:

        if str(cal.get_date()) == alltask['date']:

            count += 1
            k = count-1
            if alltask['status'] == "False":
                ck = Checkbutton(box,
                                 text=alltask['task'],
                                 variable=alltask['date'] +
                                 "Checkbutton"+str(count),
                                 onvalue=True,
                                 offvalue=False,
                                 font=f_done,
                                 fg="green",
                                 bg="white",
                                 command=lambda k=k: checkbtn_triggle(k))
                ck.grid(row=count, column=0, padx=20, pady=1, sticky='w')
                ck.select()
                my_ref[k] = [ck, "False", alltask['date']]
            else:
                ck = Checkbutton(box,
                                 text=alltask['task'],
                                 variable=alltask['date'] +
                                 "Checkbutton"+str(count),
                                 onvalue=True,
                                 offvalue=False,
                                 font=f_normal,
                                 fg="black",
                                 bg="white",
                                 command=lambda k=k: checkbtn_triggle(k))
                ck.deselect()
                ck.grid(row=count, column=0, padx=20, pady=1, sticky='w')
                my_ref[k] = [ck, "True", alltask['date']]


def deleteTask():
    """
    Deletes tasks from the task list based on the selected date.

    The function first clears all widgets from the task box. It then removes references
    to tasks associated with the selected date from the my_ref dictionary. Next, the
    function iterates through the task list and removes tasks that match the selected
    date and have a status of "False". For tasks with a status of "True", a Checkbutton
    is created and added to the task box. Finally, the function updates the undo list
    with information about the deleted tasks and enables the undo button.

    Args:
        None.

    Returns:
        None.
    """

    count = 0

    string = ""

    for widgets in box.winfo_children():
        widgets.destroy()

    for j in list(my_ref):
        if str(cal.get_date()) == my_ref[j][-1]:
            del my_ref[j]

    for i in task_list[:]:

        if str(cal.get_date()) == i['date']:

            if i['status'] == "True":
                count += 1
                k = count-1
                ck = Checkbutton(box,
                                 text=i['task'],
                                 variable=i['date']+"Checkbutton"+str(count),
                                 onvalue=True,
                                 offvalue=False,
                                 font=f_normal,
                                 fg="black",
                                 bg="white",
                                 command=lambda k=k: checkbtn_triggle(k))
                ck.deselect()
                ck.grid(row=count, column=0, padx=20, pady=1, sticky='w')
                my_ref[k] = [ck, "True", i['date']]

            else:
                task_list.remove(i)

                string = i['task']+"||"+i['date']+"||"+"False"
                with open('user_database/'+login_username+'_tasklist.txt', 'r') as file:
                    data = file.read()
                    data = data.replace(string, "")

                with open('user_database/'+login_username+'_tasklist.txt', 'w') as file:
                    file.write(data)

                undo_list.append(
                    {'task': i['task'], 'date': i['date'], 'status': i['status'], 'action': "delete"})

    undo_button.configure(state="active", bg="#32405b")


def moveTask():
    """Moves incomplete tasks to the next day.

    Asks the user for confirmation before moving incomplete tasks to the following day. 
    The function updates the task list, and the user's task file with the new date. 
    If all tasks are marked as complete, the function informs the user.

    Args:
        None.

    Returns:
        None.
    """
    not_done_all = False
    msg_box = messagebox.askquestion(
        "Confirm", "Are you sure to move the incompleted task to the next day?")
    if msg_box == 'yes':
        count = 0

        for widgets in box.winfo_children():
            widgets.destroy()
        curDate = cal.get_date()
        nextDay = curDate + timedelta(1)

        for i in task_list[:]:

            if i['date'] == str(curDate):
                if i['status'] == "True":
                    not_done_all = True
                    string = i['task'] + "||" + i['date'] + "||" + i['status']
                    i['date'] = str(nextDay)

                    with open('user_database/'+login_username+'_tasklist.txt', 'r') as file:
                        data = file.read()
                        data = data.replace(
                            string, i['task'] + "||" + str(nextDay) + "||" + i['status'])

                    with open('user_database/'+login_username+'_tasklist.txt', 'w') as file:
                        file.write(data)
                    task_list.remove(i)
                    task_list.append(
                        {'task': i['task'], 'date': str(nextDay), 'status': "True"})
                    undo_list.append({'task': i['task'], 'date': str(
                        nextDay), 'status': "True", 'action': "move"})

                else:
                    count += 1
                    k = count-1
                    ck = Checkbutton(box, text=i['task'],
                                     variable=i['date']+"Checkbutton"+str(count), onvalue=True, offvalue=False, font=f_done, fg="green", bg="white", command=lambda k=k: checkbtn_triggle(k))
                    ck.grid(row=count, column=0, padx=20, pady=1, sticky='w')
                    ck.select()
                    my_ref[k] = [ck, "True", i['date']]
        if not_done_all:
            undo_button.configure(state="active", bg="#32405b")
            cal.set_date(cal.get_date() + timedelta(1))
        else:
            messagebox.showinfo(
                title="Done all", message="I think you done all the tasks")
        printTask()


def logout():
    root.destroy()
    main_screen_open()


# topbar
def todolist():
    """Creates a to-do list application window using tkinter.

    This function creates a tkinter window for a to-do list application. The window
    includes a title, top bar with a user name and a logout button, a frame for entering
    a new task, a calendar widget to select a date for a task, a listbox for displaying
    all tasks on a selected date, buttons for undo, delete, and move tasks to the next day.
    Additionally, the function calls other functions such as addTask, updatetask,
    undoTask, deleteTask, moveTask, and openTaskFile.

    Args:
        None.

    Returns:
        None.
    """
    global cal
    global undo_button
    global box
    global task_entry
    global root

    root = tk.Tk()
    root.title("To do list")
    root.geometry("400x780+400+100")
    root.resizable(False, False)

    TopImage = PhotoImage(file="topbar.png")
    Label(root, image=TopImage).pack()
    name = Label(root, text=login_username, font=(
        "Arial Narrow", 13, "bold"), fg="white", bg="#32405b")
    name.place(x=10, y=20)
    heading = Label(root, text="ALL TASK", font=(
        "Arial Narrow", 20, "bold"), fg="white", bg="#32405b")
    heading.place(x=147, y=20)

    logout_btn = Button(root, text="logout", font=(
        "Arial Narrow", 11, "bold", "underline"), fg="white", bg="#32405b", borderwidth=0, command=logout)
    logout_btn.place(x=340, y=20)

    # main
    enter_msg = Label(root, text="Enter your task:",
                      font=("Arial Narrow", 16), fg="black")
    enter_msg.place(x=30, y=120)

    frame = Frame(root, width=338, height=35)
    frame.place(x=30, y=155)

    task_entry = Entry(frame, width=53, font=("Arial Narrow", 13), bd=0)
    task_entry.place(x=0, y=0)
    task_entry.focus()

    button = Button(frame, text="ADD", font=("Arial Narrow", 10, "bold"),
                    width=4, fg="white", bg="#32405b", bd=0, command=addTask)
    button.place(x=306, y=0)

    # calendar
    cal = DateEntry(root, selectmode='day', font=(
        "Arial Narrow", 14), width=9, date_pattern="d-m-yyyy")
    # cal.grid(row=1, column=3)
    cal.configure(state="readonly")
    cal.place(x=62, y=90)

    cal.bind('<<DateEntrySelected>>', updatetask)

    pervious = Button(root, text="<", font=("Arial", 11, "bold"), width=2, fg="white", bd=0,
                      bg="#32405b", command=lambda: [cal.set_date(cal.get_date() - timedelta(1)), printTask()])
    pervious.place(x=32, y=90)
    pervious.bind('<<DateEntrySelected>>', updatetask)

    next = Button(root, text=">", font=("Arial", 11, "bold"), width=2, height=1, fg="white", bd=0,
                  bg="#32405b", command=lambda: [cal.set_date(cal.get_date() + timedelta(1)), printTask()])
    next.place(x=172, y=90)

    # undo
    undo_button = Button(root, text="UNDO LAST ACTION", font=("Arial Narrow", 14, "bold"),
                         width=34, fg="white", bd=0, bg="darkgray", command=undoTask, state="disable")
    undo_button.place(x=29, y=607)

    # listbox

    box = LabelFrame(root, width=340, height=400, bg="white")
    box.grid_propagate(False)
    # box.grid(row=10,column=0)
    box.place(x=30, y=192)

    # delete
    delete_button = Button(root, text="DELETE COMPLETED TASK", font=(
        "Arial Narrow", 14, "bold"), width=34, fg="white", bd=0, bg="#32405b", command=deleteTask)
    delete_button.place(x=29, y=657)

    # movetask
    move_button = Button(root, text="MOVE INCOMPLETED TASKS\n TO THE NEXT DAY", font=(
        "Arial Narrow", 14, "bold"), width=34, fg="white", bd=0, bg="#32405b", command=moveTask)
    move_button.place(x=29, y=707)

    openTaskFile()

    root.mainloop()


main_screen_open()
