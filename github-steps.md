# Steps for updating your local version

### Make sure you are on master

	$ git branch

	
The checked out branch will have a `*` before the name. If the return designates anything other then `master` then switch to master

	$ git checkout master

Once on master and ready to pull updates, I use the following:

	$ git pull origin master
	
The `git pull` command combines two other commands, `git fetch` and `git merge`. When doing a `fetch` the resulting commits are stored as remote branch allowing you to review the changes before merging. Merging on the other hand can involve additional steps and flags in the command, but more on that later. For now, I'll stick with `git pull`.    
    
    $ git checkout -b my-new-feature-branch

    This command will create a new branch from `master` as well checkout out that new branch at the same time. Doing a `git branch` will list out the branches in my local repo and place a `*` before the branch that is checked out.  

	  master
	* my-new-feature-branch


## Branch management


### Commit your code


	$ git status

    $ git add .

OR 

    $ git add -all

    $ git commit -m "a commit message in the present tense"


## Push your branch

To push the new feature branch to the remote repo, simply do the following: 

	$ git push origin my-new-feature-brach    

This is a special case when working on a team and the branch I am are pushing is out of sync with the remote. To address this, it's simple, pull the latest changes:

	$ git pull origin my-new-feature-branch
    
This will fetch and merge any changes on the remote repo into my local brach with the changes, thus now allowing you to push. 

Connect your remote branch to your local branch

Branch set up to track remote branch from origin.

$ git remote add upstream <url of remote branch>

$ git push --set-upstream origin <branch name>
