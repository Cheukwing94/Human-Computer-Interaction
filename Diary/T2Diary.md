## 5th Feburary 
I updated the database of food list which added some edited picture. The picture should edit to fit the layout of the display food area.

## 9th Feburary
I created an arrylist, `order`, to store the food which customer selected after clicking the add button in the food card and share the arraylist to the `Cart.js` for showing what user selected using map function. Also, I created a function to counting the price in the cart.

## 10th Feburary
I created a function for increase and decrease the quantity of the food in the cart. This function can let the user can edit the quantity of the food even if they add the items into the cart.

## 12th Feburary
I created a new software using react which is a patient diary app. I planed to implement this app is because the main user would be for different type of patient which have more special requirment for creating this app using the principle of Human Computer Interaction. First, I organised all the component I need in this app such as login, register, calendar, symptoms, journal and setting. Then, I finished the layout of login, register page and the navigate bar in the main page. 

## 13th Feburary
I created the page of calendar using `react-big-calendar` for user to add some events to the calendar such as some appointment. In addition, I planed to create the third software which is a to do list GUI. Implementing GUI is a good chance to learn how can I create different software fitting Human Computer Interaction. So I set up the base of gui using python Tkinter library.

## 16th Feburary
I created the layout of the main page of the to do list. I added a input frame for user to enter the task and a listbox to show the tasks with checkbox which the user added. Also, I added buttons which for adding, deleting and saving the added task. I am using a txt file `tasklist.txt` for storing the added tasks using the format `TASK`. The system will load the task to an arraylist `task_list` which can make the system don't need to load the file every time.

## 17-18th Feburary
I added a dataentry in tkinter which is a date pickuper. This date pickuper can let the user can add the task in different date which is more organising. I created a function for the date pickuper to update the task of the selected when user selecting the date and update the format of `tasklist.txt` to `TASK||DATE`

## 19th Feburary
I created an array list `my_ref` to store the checkbutton. It will update the list when user select a new date. The list can help to update the tasks inside the list box. Also, I updated the format of `tasklist.txt` to `TASK||DATE||STATUS`. Status is saving the status of each check box. If the status is false, that's mean the checkbox id ticked (completed task).

## 22nd Feburary
Last week, I create the status of each checkbox. The status is for detecting which task is completed which can create a delete button for deleting the completed task. Also, I created function for undo the delete action which is using `undolist.txt` for storing the deleted task information. 

## 24th Feburary
I created a move button which can move the incompleted task to the next day and the status of the task can recogized the task is incomplete if the status is True. Also, I created the button in the left and right of the date pickuper which can click to pervious day or next day.

## 25th Feburary
I found out that if the user clicked the move button, it's not obvious to see it moved. So, I created a function which can go to the page of next day for showing the task when the user clicked the move button. In addition, I fixed the undo function. I used an arraylist `undo_list` to store all the action of user made before that mean if the user leave the system, they can't undo the task anymore. This can make the system don't need to load the txt file every time. In order to avoid the misunderstanding, I made the undo button disable in the beginning of the system.

## 27-28th Feburary
I realise that to do list in a company is better to have own account for each user. However, I created a login and a register interface for user to log in or create a new account. I created a txt file `userlist.txt` for saving the user log in details. In the beginning of the system, it will load the file and save in an arraylist `user_list` for verify the log in information when the user log in. I also created some function to check the registration information should meet some requirement like the password should more than 8 characters. In addition, if the user have their own account, then they should have their own database. So, I create their own txt file `USERNAME_tasklist.txt`.

## 1st-4th March
I took a look about the layout of patient diary app and realise that the navbar is not suitable for the phone version. So, I restyled the layout of the navbar which represent the page using icon. When the user is using the app by phone if will show the navbar at then end with the icon and name.

## 6th-10th March
I started do the layout of the journal which including the frames of title and content and a calendar to pick up the date of journal. I created the button in the page of symptoms which is using icon for representing the rate of symptioms and let the user can choose it everyday. 

## 12th March
I created a function to verify the information of user entered into the register page is matched to the requirment such as the user must fill in the blank.

## 16th March
In order to cater different patient, I created a function into the symptoms page for changing the font size of the set of question. I considered about some elder people or some patient with visual issue can assist them to use the app. In addtion, I created a react page `ShowJournal.js` for showing all the journal with date which user wrote before and one button for user back to write journal page.

## 17th March
In setting page, I considered some patient with color blind will have diffculties to use the app. So, I created a color control in the setting page for user to choose the color of the app. Also, I consider the user control of the app, I added a on/off button of notification that the user can have more control of the app.

## 18th March
I  created an arraylist `confirmedOrders` for storing the confirmed order after the user clicked confirm button in the cart. In addition, the cart has showed the price of the added item. I created a function `counting` to count the price automatically when user added items to the cart. Also, I created a random reference number for each order.

## 22th March
I created notification `Notification.js` which can show when user click add button of the food card and the confirm button of the cart. It can make the user can know what they did or what they should do. Also, I created the logo of the ordering app.


