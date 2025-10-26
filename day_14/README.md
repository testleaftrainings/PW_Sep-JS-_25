📑 Agenda for Day 12: Playwright with REST API Integration  

🎯 [ Focus: Integrating Playwright with REST APIs for End-to-End Automation Testing ]

🕝 Session Highlights  

1️⃣ Recap  
* Quick review of key learnings from previous sessions.  

2️⃣ Implementation in Postman - POST & GET Lead Without Global Variable [Salesforce]  
* Demonstration: Creating and retrieving leads.  

3️⃣ Create Opportunity & Get Opportunity  
* Practical exercise: Working with opportunities using POST and GET requests.  

4️⃣ Implementation in Postman - POST & GET Lead With Global Variable  
* Demonstration: Using global variables for better test management.  

5️⃣ Create Opportunity & Get Opportunity  
* Practical exercise: Leveraging global variables for API testing.  

6️⃣ APIRequest, APIRequestContext, APIResponse  
* Overview of these key Playwright API concepts.  

7️⃣ Status Code, Response Body & Response Time  
* Understanding and validating API response attributes.  

8️⃣ POST Call (Creating a Lead)  
* Demonstration of making POST requests in Playwright.  

9️⃣ GET Call (Retrieving the Lead)  
* Retrieving data using GET requests in Playwright.  

🔟 DELETE Call (Deleting the Lead)  
* Automating the deletion of records using DELETE requests.  

🔢 E2E Scenario (Bearer Token, Create, Update & Delete)  
* Full end-to-end workflow: Authentication, CRUD operations.  

## Table of Contents
1. [Understanding Authentication vs. Authorization](#1-understanding-authentication-vs-authorization)
2. [Exploring Authorization Mechanisms and OAuth](#2-exploring-authorization-mechanisms-and-oauth)
3. [Tokens in Authentication: Access, Bearer, and JWT](#3-tokens-in-authentication-access-bearer-and-jwt)
4. [Managing API Requests and Responses with Playwright](#4-managing-api-requests-and-responses-with-playwright)

## 1. Understanding Authentication vs. Authorization
**Authentication** involves verifying a user's identity through various methods like passwords, biometric data, or one-time pins. It ensures the user is who they claim to be before granting access to the system.

**Authorization** occurs after authentication and is the process of determining the resources and operations that an authenticated user is permitted to access within a system.

### Key Differences:
- **Authentication** checks the identity to allow access to the system.
- **Authorization** assigns permissions and determines what users can and cannot access within the system.

## 2. Exploring Authorization Mechanisms and OAuth
Different strategies for authorization ensure varying levels of access control, each suitable for specific security needs:
- **Role-Based Access Control (RBAC)**: Assigns permissions based on user roles within an organization.
- **Attribute-Based Access Control (ABAC)**: Considers multiple attributes (user, resource, environment) to make access decisions.
- **Mandatory Access Control (MAC)**: Regulates access based on information sensitivity and user clearance levels.

### OAuth Overview
**OAuth** is a framework that allows third parties to conduct secure authorized transactions without accessing user passwords. It facilitates the secure issuance of access tokens to third-party services to interact with user information from another service.

## 3. Tokens in Authentication: Access, Bearer, and JWT
- **Access Token**: Issued by a server, this token allows clients to access secured resources.
- **Bearer Token**: A specific type of access token that is available to any party in possession of the token. It is commonly used for HTTP authentication.
- **JWT (JSON Web Token)**: Encodes claims in a JSON object, which is then securely transmitted between two parties as a URL-safe string. It can be signed using a secret or a public/private key pair.

## 4. Managing API Requests and Responses with Playwright
Playwright provides tools to handle network interactions efficiently within automated tests.

### APIRequest
This class enables HTTP requests (GET, POST, PUT, etc.) within test scripts, facilitating direct API testing or state setup for applications.

### APIRequestContext
Manages settings for all network requests made via `APIRequest` instances, such as headers or authentication tokens, ensuring consistent configuration across tests.

### APIResponse
Represents the server's response to an HTTP request, providing methods to check status, retrieve headers, and parse the body of the response.

```javascript
const { playwright } = require('playwright');

(async () => {
  const apiContext = await playwright.request.newContext();
  const apiRequest = await apiContext.newRequest();

  const response = await apiRequest.get('https://testleaf30-dev-ed.develop.my.salesforce.com/services/data/v58.0/sobjects/Lead');
  console.log(await response.json());
})();


