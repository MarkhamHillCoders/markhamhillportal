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
