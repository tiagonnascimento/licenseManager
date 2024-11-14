const fs = require("fs");
const { faker } = require("@faker-js/faker");

// Function to generate random email
function generateRandomEmail() {
  return faker.internet.email();
}

// Function to generate random date
function generateRandomDate() {
  if (Math.random() < 0.11) {
    // 11% chance to be null
    return "";
  } else {
    const daysAgo = Math.floor(Math.random() * 200);
    const date = new Date();
    date.setDate(date.getDate() - daysAgo);
    return date.toISOString();
  }
}

// Generate CSV data
const rows = [];
for (let i = 0; i < 2000; i++) {
  const username = generateRandomEmail();
  const lastLoginDate = generateRandomDate();
  const uniqueConstraint = `${username}|Base`;
  const row = [
    "[LM_ProductLicenseUserAssignment__c]",
    "true",
    "a006t00000CnwkpAAB",
    username,
    lastLoginDate,
    uniqueConstraint
  ];
  rows.push(row);
}

// Write to CSV file
const header = [
  "_",
  "IsActive__c",
  "ProductLicense__c",
  "Username__c",
  "LastLoginDate__c",
  "UniqueConstraint__c"
];
const csvContent = [header, ...rows].map((e) => e.join(",")).join("\n");

fs.writeFile("product_license_user_assignments.csv", csvContent, (err) => {
  if (err) {
    console.error("Error writing to CSV file", err);
  } else {
    console.log("CSV file generated successfully.");
  }
});
