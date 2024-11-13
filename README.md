# Salesforce Lightning Application for License Management

### Overview
This Salesforce Lightning Application is designed to manage product licenses, user assignments, and purchase conditions. The application leverages custom objects and relationships to track and manage licenses efficiently.

### Motivation
In a Salesforce Org, to accurately determine that a Product License is in use, it is necessary to do more than just observe the assignment of User Licenses, Permission Set Licenses, and Feature Licenses to users. 

An analytical layer is essential, utilizing not only these assignments but also other user characteristics such as profile and permissions. This layer does not exist natively in Salesforce Orgs.

This application is built to provide an infrastructure in terms of data model and data extraction to achieve taht end.

### Entities and Relationships
The application is built around the following custom objects and their relationships:
1. *ProductLicense__c* - Contains details about the product license to be managed. Product license is what customer buys from Salesforce. It could be a base license or an add-on.
1. *ProductLicensePersona__c* - Persona that uses this product license - represented by a SOQL query.
1. *ProductLicensePurchaseCondition__c* - As a Product License can have different purchase conditions depending on commercial negotiations, this object will keep a track of these conditions so final prices can be correctly calculated.
1. *ProductLicenseUserAssignment__c* - Object to represent product license assignment to users. This object will be populated based on the Product License query. It represents the analytical aspect required to determine product license utilization in a Salesforce Org.

Several reports were built in the app based in this data model. 

### Roadmap
Based on the Product License Personas, it's possible to implement automations to automatically create and maintain the Assignments. However this is not built yet and is in the roadmap, depending on adoption. 

### Distribution
This application is distributed in form of manage package. You can build your own app based on the code or simply enter in contact to get the package ID and install it directly in a target org.

### Contributing to the Repository
If you find any issues or opportunities for improving this repository, fix them! Feel free to contribute to this project by [forking](http://help.github.com/fork-a-repo/) this repository and making changes to the content. Once you've made your changes, share them back with the community by sending a pull request. See [How to send pull requests](http://help.github.com/send-pull-requests/) for more information about contributing to GitHub projects.

### Reporting Issues
If you find any issues with this demo that you can't fix, feel free to report them in the [issues](https://github.com/forcedotcom/sfdx-bitbucket-org/issues) section of this repository.