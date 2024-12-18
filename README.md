# Salesforce Lightning Application for License Management

### Overview

This Salesforce Lightning Application is designed to manage product licenses, user assignments, and purchase conditions. The application leverages custom objects and relationships to track and manage licenses efficiently.

### Motivation

In a Salesforce Org, to accurately determine that a Product License is in use, it is necessary to do more than just observe the assignment of User Licenses, Permission Set Licenses, and Feature Licenses to users.

An analytical layer is essential, utilizing not only these assignments but also other user characteristics such as profile and permissions. This layer does not exist natively in Salesforce Orgs.

This application is built to provide an infrastructure in terms of data model and data extraction to achieve taht end.

### Screenshots

![Home Page](https://github.com/tiagonnascimento/licenseManager/blob/main/docs/images/home.png?raw=true)
![Home Page - addons](https://github.com/tiagonnascimento/licenseManager/blob/main/docs/images/home-addons.png?raw=true)
![Home Page - statistics](https://github.com/tiagonnascimento/licenseManager/blob/main/docs/images/home-statistics.png?raw=true)
![Home Page - users](https://github.com/tiagonnascimento/licenseManager/blob/main/docs/images/home-users.png?raw=true)
![Home Page - product license list](https://github.com/tiagonnascimento/licenseManager/blob/main/docs/images/productLicenseList.png?raw=true)
![Home Page - product license detail](https://github.com/tiagonnascimento/licenseManager/blob/main/docs/images/productLicenseDetail.png?raw=true)
![Home Page - purchase detail](https://github.com/tiagonnascimento/licenseManager/blob/main/docs/images/purchaseDetail.png?raw=true)

### Entities and Relationships

The application is built around the following custom objects and their relationships:

1. _ProductLicense\_\_c_ - Contains details about the product license to be managed. Product license is what customer buys from Salesforce. It could be a base license or an add-on.
1. _ProductLicensePersona\_\_c_ - Persona that uses this product license - represented by a SOQL query.
1. _ProductLicensePurchaseCondition\_\_c_ - As a Product License can have different purchase conditions depending on commercial negotiations, this object will keep a track of these conditions so final prices can be correctly calculated.
1. _ProductLicenseUserAssignment\_\_c_ - Object to represent product license assignment to users. This object will be populated based on the Product License query. It represents the analytical aspect required to determine product license utilization in a Salesforce Org.

Several reports were built in the app based in this data model.

### Permissioning

The package contains two permission sets:

1. _License Manager_ - permission set with all required permissions to access the Lightning Application and Data Model. This permission set needs to be assigned to the Analytics Integration User as there is a Analytics Recipe to synchronize the new SObjects with CRM Analytics, so the dashboards can be displayed. 
1. _License Manager - Download CRM Analytics_ - permission set with only the permission to Download CRM Analytics data - useful to get the list of users assigned to permissions without login in the past 180 days

Beside these two permission sets, as the application uses CRM Analytics, users need to have the CRM Analytics permission set license and the permission set in order to access the out-of-the-box dashboard.

### Roadmap

Based on the Product License Personas, it's possible to implement automations to automatically create and maintain the Assignments. However this is not built yet and is in the roadmap, depending on adoption.

### Distribution and Installation

This application is distributed in form of an unlocked package. You can build your own app based on the code or simply get the package ID on the `sfdx-project.json` and install it directly in your org. Installation key is `Vai Corinthians`.

After installation, please assign the required permission sets to the user. Also, as this app contains CRM analytics recipe, assign the permission set _License Manager_ to the Analytics Integration User and execute the recipe. You can also schedule the recipe to execute in a determined agenda.

### Data sample loading

On `scripts/data/sfdmu` folder there are some data sample that can be used to load sample data after package installation. For that you can use [Salesforce Data Move Utility](https://help.sfdmu.com/) plugin and authenticated in the target org execute:

```
cd scripts/data/sfdmu
sf sfdmu run --sourceusername csvfile --targetusername <TARGET USERNAME>
```

### Contributing to the Repository

If you find any issues or opportunities for improving this repository, fix them! Feel free to contribute to this project by [forking](http://help.github.com/fork-a-repo/) this repository and making changes to the content. Once you've made your changes, share them back with the community by sending a pull request. See [How to send pull requests](http://help.github.com/send-pull-requests/) for more information about contributing to GitHub projects.

### Reporting Issues

If you find any issues with this demo that you can't fix, feel free to report them in the [issues](https://github.com/forcedotcom/sfdx-bitbucket-org/issues) section of this repository.
