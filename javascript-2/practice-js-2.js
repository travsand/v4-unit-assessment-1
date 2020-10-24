/*
    For this section of the skills check you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

var gitDefinition = "A version control system designed to handle projects of all sizes." //CODE HERE

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

var gitHubDefinition = "A web based version control system where you can upload different updates to your code. It also allows multiple people to work on the same project" //CODE HERE

//////////////////PROBLEMS 3 - 9////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (What you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

let init = {
    description: " Creates a new git repository.",
    code: "git init"
}//CODE HERE

//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

let clone = {
    description: "Makes a copy of your code to paste to the repository",
    code: "git clone"
}
//CODE HERE

//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

let status = {
    description: "Shows the state of the current directory and staging area.",
    code: "git status"
}//CODE HERE

//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

let add = {
    description: "Adds a change in the working directory to the staging area.",
    code: "git add."
}//CODE HERE

//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

let commit = {
    description: "Captures a snapshot of the projects stages changes.",
    code: "git commit -m"
}//CODE HERE

//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'addRemote' with 'description' and 'code' properties
    following the guidelines above to describe the command to add a remote location to your git repository.
*/

let addRemote = {
    description: "Adds a short name to replace the url.",
    code: "git remote add origin"
}//CODE HERE

//////////////////PROBLEM 9////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

let push = {
    description: "Pushes changes you made up to github.",
    code: "git push"
}//CODE HERE
