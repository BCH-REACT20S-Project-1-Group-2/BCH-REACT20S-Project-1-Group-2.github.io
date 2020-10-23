# Development process guidelines
## General
- Project timeline 20.10.2020 - 11.11.2020
- Sprints
    - 20.10. - 26.10. - Set-up Sprint
    - 27.10. - 2.11. - Sprint topic/goal TBD in next sprint planning
    - 3.11. - 9.11. - (initial target: MVP complete)
    - 10.11. - 11.11. - (initial target: MVP+ items)
- Primary teamwork schedule
    - Tuesdays
        - Previous sprint demo 09:00 - 09:45
        - Previous sprint retrospective 09:45 - 10:15
        - Sprint planning 10:15 - 11:00
    - Wednesdays
        - "Daily" standup 09:15 - 09:30
        - Joint development time 09:30 - 11:00
        - Joint development time 13:30 - 15:00
    - Thu - Mon
        - Individual development time as per allowed by personal schedules
## Git branching strategy:
- master
    - "Production" branch
    - Commits **must** only be merges from "staging" branch
- staging
    - Code ready to be merged to master
    - Commits **must** satisfy MVP+ and be **squashed** merges from "dev" branch
- dev
    - Main development branch from which all development should branch out from
    - Commits **must** be merges from feature/bug/doc branches via pull requests
- feature/*
    - Feature branches
    - Commits **must** include commit msg with prefix `feature/%feature name%: `
- bugfix/*
    - Bug fixing branches for existing features
    - Commits **must** include commit msg with prefix `bugfix/%feature name%: `
- doc/*
    - Documentation
    - Commits **must** include commit msg with prefix `doc/%documentation headline%: `

### Step-by-step example for starting on a new feature:
Make sure you're code is up-to-date, and then branch out from dev:
```
$ git pull --all
$ git checkout dev
$ git checkout -b feature/%my_awesome_new_feature%
```
Once done, or *at least* once a day when you've been coding, add & commit:
```
$ git add %files_that_you_added%
$ git commit -m "feature/%my_awesome_new_feature%: your commit msg here"
```

And push to remote. 1st time with:
```
$ git push --set-upstream origin feature/%my_awesome_new_feature%
```
Subsequent times go directly with:
```
$ git push
```
Finally, once you're done with coding and testing your feature, and have pushed them to remote, create a pull request on GitHub to begin merge of your feature branch back to **the dev branch**.  
See link for more detailed instructions:  
https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request
