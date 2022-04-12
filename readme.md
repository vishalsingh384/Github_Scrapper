## Github Scrapper

This script fetches the topics page of github and gets the current top 3 topics. Then for each topic it fetchs the top 8 projects. For each project , it fetches the top 5 issues. Then it generate folder by topic name, each folder will contain pdf corresponding to project name. The project pdf will contain issue title along with its link. The pdf creation and generation is donw ith the help of *jspdf*

Reference: [https://www.npmjs.com/package/jspdf](https://www.npmjs.com/package/jspdf)
